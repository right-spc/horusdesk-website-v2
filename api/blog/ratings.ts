import type { VercelRequest, VercelResponse } from '@vercel/node';
import { select, insert } from '../lib/supabase-admin.js';

export type RatingSummary = {
  average: number;
  count: number;
};

export type Rating = {
  id: string;
  post_slug: string;
  value: number;
  created_at: string;
};

async function getRatings(postSlug: string): Promise<RatingSummary> {
  const result = await select<{ average: number; count: number }>(
    '/website/ratings',
    `post_slug=eq.${encodeURIComponent(postSlug)}&select=avg(value),count()`
  );

  const row = result[0];
  if (!row) return { average: 0, count: 0 };

  return {
    average: row.average ? Math.round(Number(row.average) * 10) / 10 : 0,
    count: Number(row.count) || 0,
  };
}

async function postRating(body: {
  post_slug: string;
  value: number;
}): Promise<{ rating: Rating; summary: RatingSummary }> {
  const postSlug = body.post_slug?.trim();
  const value = Number(body.value);

  if (!postSlug) {
    throw new Error('post_slug is required.');
  }

  if (!Number.isInteger(value) || value < 1 || value > 5) {
    throw new Error('Rating must be between 1 and 5.');
  }

  const result = await insert<Rating>('/website/ratings', {
    post_slug: postSlug,
    value,
  });

  const rating = result[0];
  if (!rating) {
    throw new Error('Failed to save rating.');
  }

  const summary = await getRatings(postSlug);
  return { rating, summary };
}

function setCorsHeaders(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  setCorsHeaders(res);
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const postSlug = req.query.post_slug as string;
      if (!postSlug) {
        return res.status(400).json({ error: 'post_slug is required.' });
      }
      const summary = await getRatings(postSlug);
      return res.status(200).json(summary);
    }

    if (req.method === 'POST') {
      const result = await postRating(req.body);
      return res.status(200).json(result);
    }

    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({ error: 'Method not allowed.' });
  } catch (err) {
    console.error('Ratings API error:', err);
    const message = err instanceof Error ? err.message : 'An unexpected error occurred.';
    return res.status(400).json({ error: message });
  }
}
