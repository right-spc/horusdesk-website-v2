import type { VercelRequest, VercelResponse } from '@vercel/node';
import { deleteAll } from '../lib/supabase-admin.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await deleteAll('/comments');
    await deleteAll('/ratings');
    return res.status(200).json({ success: true, message: 'All engagement data cleared.' });
  } catch (err) {
    console.error('Clear engagement error:', err);
    return res.status(500).json({
      error: err instanceof Error ? err.message : 'Unknown error',
    });
  }
}
