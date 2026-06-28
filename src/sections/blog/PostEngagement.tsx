import { useState, useEffect, useCallback } from 'react';
import { RatingSection } from './RatingSection';
import { CommentSection } from './CommentSection';
import { CommentForm } from './CommentForm';

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

type PostEngagementProps = {
  postSlug: string;
};

export function PostEngagement({ postSlug }: PostEngagementProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = useCallback(async () => {
    try {
      const res = await fetch(`/api/blog/comments?post_slug=${encodeURIComponent(postSlug)}`);
      const data = await res.json();
      if (data.comments) {
        setComments(data.comments);
      }
    } catch (err) {
      console.error('Failed to load comments:', err);
    } finally {
      setLoading(false);
    }
  }, [postSlug]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <section className="bg-navy-light py-16 lg:py-24">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-medium text-white mb-8">Discussion</h2>

        <RatingSection postSlug={postSlug} />

        {loading ? (
          <p className="text-[#94A3B8]">Loading comments...</p>
        ) : (
          <>
            <div className="mb-8">
              <CommentSection
                postSlug={postSlug}
                comments={comments}
                onCommentAdded={fetchComments}
              />
            </div>

            <CommentForm postSlug={postSlug} onSuccess={fetchComments} />
          </>
        )}
      </div>
    </section>
  );
}
