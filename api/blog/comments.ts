import type { VercelRequest, VercelResponse } from '@vercel/node';
import { select, insert } from '../lib/supabase-admin';
import { moderateComment } from '../lib/claude';

export type Comment = {
  id: string;
  post_slug: string;
  parent_id: string | null;
  author_name: string;
  content: string;
  status: string;
  created_at: string;
  replies?: Comment[];
};

export type CommentResponse = {
  comment?: Comment;
  comments?: Comment[];
  message?: string;
  error?: string;
};

const MIN_RENDER_TIME_MS = 3000;

function sanitizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function sanitizeName(name: string): string {
  return name.trim().slice(0, 100);
}

function sanitizeContent(content: string): string {
  return content.trim().slice(0, 5000);
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildThreadedComments(flatComments: Comment[]): Comment[] {
  const commentMap = new Map<string, Comment>();
  const rootComments: Comment[] = [];

  flatComments.forEach((comment) => {
    commentMap.set(comment.id, { ...comment, replies: [] });
  });

  flatComments.forEach((comment) => {
    const node = commentMap.get(comment.id)!;
    if (comment.parent_id && commentMap.has(comment.parent_id)) {
      const parent = commentMap.get(comment.parent_id)!;
      parent.replies = parent.replies ?? [];
      parent.replies.push(node);
    } else {
      rootComments.push(node);
    }
  });

  const sortByDate = (a: Comment, b: Comment) =>
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime();

  rootComments.sort(sortByDate);
  commentMap.forEach((comment) => {
    if (comment.replies) {
      comment.replies.sort(sortByDate);
    }
  });

  return rootComments;
}

async function getComments(postSlug: string): Promise<Comment[]> {
  const flatComments = await select<Comment>(
    '/website/comments',
    `post_slug=eq.${encodeURIComponent(postSlug)}&status=eq.approved&order=created_at.desc`
  );
  return buildThreadedComments(flatComments);
}

async function postComment(body: {
  post_slug: string;
  parent_id?: string | null;
  author_name: string;
  author_email: string;
  content: string;
  honeypot?: string;
  render_time_ms?: number;
}): Promise<{ comment: Comment; message: string }> {
  if (body.honeypot && body.honeypot.trim() !== '') {
    throw new Error('Invalid submission.');
  }

  if (!body.render_time_ms || body.render_time_ms < MIN_RENDER_TIME_MS) {
    throw new Error('Form submitted too quickly. Please take your time.');
  }

  const postSlug = body.post_slug?.trim();
  const authorName = sanitizeName(body.author_name ?? '');
  const authorEmail = sanitizeEmail(body.author_email ?? '');
  const content = sanitizeContent(body.content ?? '');
  const parentId = body.parent_id?.trim() || null;

  if (!postSlug || !authorName || !authorEmail || !content) {
    throw new Error('All fields are required.');
  }

  if (!validateEmail(authorEmail)) {
    throw new Error('Please enter a valid email address.');
  }

  const moderation = await moderateComment(content);
  const status = moderation.approved ? 'approved' : 'rejected';

  const result = await insert<Comment>('/website/comments', {
    post_slug: postSlug,
    parent_id: parentId,
    author_name: authorName,
    author_email: authorEmail,
    content,
    status,
    moderation_reason: moderation.reason || '',
    moderated_at: moderation.approved ? new Date().toISOString() : null,
  });

  const comment = result[0];
  if (!comment) {
    throw new Error('Failed to save comment.');
  }

  const message = moderation.approved
    ? 'Your comment has been posted.'
    : 'Your comment was not approved. ' + (moderation.reason || '');

  return { comment, message };
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  res.setHeader('Content-Type', 'application/json');

  try {
    if (req.method === 'GET') {
      const postSlug = req.query.post_slug as string;
      if (!postSlug) {
        return res.status(400).json({ error: 'post_slug is required.' });
      }
      const comments = await getComments(postSlug);
      return res.status(200).json({ comments });
    }

    if (req.method === 'POST') {
      const result = await postComment(req.body);
      return res.status(200).json(result);
    }

    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({ error: 'Method not allowed.' });
  } catch (err) {
    console.error('Comments API error:', err);
    const message = err instanceof Error ? err.message : 'An unexpected error occurred.';
    return res.status(400).json({ error: message });
  }
}
