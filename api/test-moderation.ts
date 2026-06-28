import type { VercelRequest, VercelResponse } from '@vercel/node';

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'application/json');

  if (!ANTHROPIC_API_KEY) {
    return res.status(200).json({ hasKey: false });
  }

  const models = [
    'claude-3-5-haiku-20241022',
    'claude-3-haiku-20240307',
    'claude-3-5-sonnet-20241022',
  ];

  const results = [];

  for (const model of models) {
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model,
          max_tokens: 256,
          system: 'Respond with JSON only: {"approved":true}',
          messages: [{ role: 'user', content: 'test' }],
        }),
      });

      const text = await response.text();
      results.push({ model, status: response.status, body: text.slice(0, 500) });
    } catch (err) {
      results.push({ model, status: 'exception', error: err instanceof Error ? err.message : String(err) });
    }
  }

  return res.status(200).json({ hasKey: true, results });
}
