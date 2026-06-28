import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json({
    method: req.method,
    contentType: req.headers['content-type'],
    bodyType: typeof req.body,
    body: req.body,
  });
}
