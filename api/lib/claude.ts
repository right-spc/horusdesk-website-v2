export type ModerationResult = {
  approved: boolean;
  reason: string;
  category: string;
};

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

export async function moderateComment(content: string): Promise<ModerationResult> {
  if (!ANTHROPIC_API_KEY) {
    // Fail open: if no Claude key, approve but log a warning.
    console.warn('ANTHROPIC_API_KEY not set; skipping moderation and approving comment.');
    return { approved: true, reason: 'Moderation bypassed: API key not configured.', category: 'none' };
  }

  const systemPrompt = `You are a content moderator for a blog comment section.

Your job is to review the comment below and decide if it should be approved or rejected.

Reject comments that are:
- spam or promotional
- harassing, hateful, or discriminatory
- off-topic or nonsensical
- containing excessive profanity
- including personal attacks

Approve comments that are:
- relevant to the blog post topic
- respectful even if critical
- written in good faith

Respond ONLY with a JSON object in this exact format, with no markdown formatting or explanation:
{
  "approved": true|false,
  "reason": "short reason",
  "category": "spam|promotional|harassment|off-topic|hate-speech|profanity|approved"
}`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 256,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: `Review this comment and respond with JSON only:\n\n"""\n${content}\n"""`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'Unknown error');
    console.error('Claude moderation API error:', errorText);
    // Fail open on API error.
    return { approved: true, reason: 'Moderation API error; approved by default.', category: 'api-error' };
  }

  const data = (await response.json()) as {
    content: Array<{ type: string; text: string }>;
  };

  const text = data.content?.find((c) => c.type === 'text')?.text ?? '';

  try {
    // Some models may wrap JSON in markdown fences; strip them.
    const cleaned = text.replace(/^```json\s*|\s*```$/g, '').trim();
    const parsed = JSON.parse(cleaned) as ModerationResult;
    return {
      approved: Boolean(parsed.approved),
      reason: parsed.reason || '',
      category: parsed.category || 'unknown',
    };
  } catch (err) {
    console.error('Failed to parse Claude moderation response:', text, err);
    return { approved: true, reason: 'Could not parse moderation response; approved by default.', category: 'parse-error' };
  }
}
