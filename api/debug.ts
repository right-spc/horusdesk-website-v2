import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'application/json');
  try {
    const mod = await import('./lib/supabase-admin');
    return res.status(200).json({
      ok: true,
      hasSelect: typeof mod.select === 'function',
      hasInsert: typeof mod.insert === 'function',
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: err instanceof Error ? err.message : String(err),
      stack: err instanceof Error ? err.stack : undefined,
    });
  }
}
