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
    return res.redirect(302, '/unsubscribe?status=invalid');
  }

  const target = new URL(UNSUBSCRIBE_TARGET);
  target.searchParams.set('email', email);
  if (campaign) {
    target.searchParams.set('campaign', campaign);
  }

  try {
    const upstream = await fetch(target.toString(), { method: 'GET' });

    if (upstream.ok) {
      return res.redirect(302, `/unsubscribe?email=${encodeURIComponent(email)}&status=confirmed`);
    }

    if (upstream.status === 400) {
      return res.redirect(302, '/unsubscribe?status=invalid');
    }

    console.error('Unsubscribe upstream error:', upstream.status, await upstream.text());
    return res.redirect(302, `/unsubscribe?email=${encodeURIComponent(email)}&status=error`);
  } catch (err) {
    console.error('Unsubscribe proxy error:', err);
    return res.redirect(302, `/unsubscribe?email=${encodeURIComponent(email)}&status=error`);
  }
}
