export type ModerationResult = {
  status: 'approved' | 'rejected' | 'pending';
  reason: string;
  category: string;
};

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

const SYSTEM_PROMPT = `You are a content moderator for a blog comment section.

Your only job is to check two things:
1. Language: reject comments that are harassing, hateful, discriminatory, include personal attacks, or contain excessive profanity.
2. Clarity: reject comments that are gibberish, nonsense, spam, or promotional noise with no clear meaning.

Approve any comment that is a clear statement, opinion, or question — even if it is critical, disagreeable, or off-topic. Coherent disagreement is allowed.

Respond ONLY with a JSON object in this exact format, with no markdown formatting or explanation:
{
  "approved": true|false,
  "reason": "short reason",
  "category": "approved|gibberish|spam|promotional|harassment|hate-speech|profanity|personal-attack"
}`;

export async function moderateComment(content: string): Promise<ModerationResult> {
  if (!ANTHROPIC_API_KEY) {
    return {
      status: 'pending',
      reason: 'Moderation key not configured; awaiting manual review.',
      category: 'none',
    };
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 256,
        system: SYSTEM_PROMPT,
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
      console.error('Claude moderation API error:', response.status, errorText);
      return {
        status: 'pending',
        reason: `Moderation API error (${response.status}); awaiting manual review.`,
        category: 'api-error',
      };
    }

    const data = (await response.json()) as {
      content: Array<{ type: string; text: string }>;
    };

    const text = data.content?.find((c) => c.type === 'text')?.text ?? '';

    try {
      // Some models may wrap JSON in markdown fences; strip them.
      const cleaned = text.replace(/^```json\s*|\s*```$/g, '').trim();
      const parsed = JSON.parse(cleaned) as { approved?: boolean; reason?: string; category?: string };

      if (parsed.approved) {
        return {
          status: 'approved',
          reason: parsed.reason || '',
          category: parsed.category || 'approved',
        };
      }

      return {
        status: 'rejected',
        reason: parsed.reason || '',
        category: parsed.category || 'rejected',
      };
    } catch (err) {
      console.error('Failed to parse Claude moderation response:', text, err);
      return {
        status: 'pending',
        reason: 'Could not parse moderation response; awaiting manual review.',
        category: 'parse-error',
      };
    }
  } catch (err) {
    console.error('Claude moderation exception:', err);
    return {
      status: 'pending',
      reason: 'Moderation check failed; awaiting manual review.',
      category: 'error',
    };
  }
}
