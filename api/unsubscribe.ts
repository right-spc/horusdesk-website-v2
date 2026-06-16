import type { VercelRequest, VercelResponse } from '@vercel/node';

const UNSUBSCRIBE_TARGET = 'https://oknqxlmyhmxbzqtnlraq.supabase.co/functions/v1/unsubscribe';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET, OPTIONS');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const email = typeof req.query.email === 'string' ? req.query.email.trim().toLowerCase() : '';
  const campaign = typeof req.query.campaign === 'string' ? req.query.campaign.trim() : undefined;

  if (!email || !email.includes('@')) {
    return res.status(400).send(errorHtml('Invalid email address'));
  }

  const target = new URL(UNSUBSCRIBE_TARGET);
  target.searchParams.set('email', email);
  if (campaign) {
    target.searchParams.set('campaign', campaign);
  }

  try {
    const upstream = await fetch(target.toString(), { method: 'GET' });
    const body = await upstream.text();

    const contentType = upstream.headers.get('content-type') || 'text/html; charset=utf-8';
    res.setHeader('Content-Type', contentType);
    return res.status(upstream.status).send(body);
  } catch (err) {
    console.error('Unsubscribe proxy error:', err);
    return res.status(500).send(errorHtml('Something went wrong. Please try again.'));
  }
}

function errorHtml(message: string): string {
  const safeMessage = message
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Unsubscribe</title>
    <style>
      body { font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 80px auto; padding: 0 20px; text-align: center; color: #1f2937; }
      h2 { color: #111827; }
      p { color: #4b5563; line-height: 1.5; }
    </style>
  </head>
  <body>
    <h2>Unsubscribe</h2>
    <p>${safeMessage}</p>
  </body>
</html>`;
}
