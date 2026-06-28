import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CommentForm } from './CommentForm';
import type { Comment } from './PostEngagement';

const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
};

function CommentNode({
  comment,
  postSlug,
  onCommentAdded,
}: {
  comment: Comment;
  postSlug: string;
  onCommentAdded: () => void;
}) {
  const [showReplyForm, setShowReplyForm] = useState(false);

  return (
    <div className="border-l-2 border-[rgba(124,77,255,0.2)] pl-6">
      <div className="mb-1 flex items-center gap-3">
        <span className="text-sm font-medium text-white">{comment.author_name}</span>
        <time className="text-xs text-[#64748B]" dateTime={comment.created_at}>
          {formatRelativeTime(comment.created_at)}
        </time>
      </div>
      <p className="text-[#94A3B8] leading-relaxed whitespace-pre-wrap">{comment.content}</p>

      <button
        type="button"
        onClick={() => setShowReplyForm((prev) => !prev)}
        className="mt-3 text-xs font-medium text-[#7C4DFF] hover:underline inline-flex items-center gap-1"
      >
        <MessageCircle size={14} />
        {showReplyForm ? 'Cancel reply' : 'Reply'}
      </button>

      {showReplyForm && (
        <div className="mt-4">
          <CommentForm
            postSlug={postSlug}
            parentId={comment.id}
            replyToName={comment.author_name}
            onSuccess={() => {
              setShowReplyForm(false);
              onCommentAdded();
            }}
          />
        </div>
      )}

      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-6 space-y-6">
          {comment.replies.map((reply) => (
            <CommentNode
              key={reply.id}
              comment={reply}
              postSlug={postSlug}
              onCommentAdded={onCommentAdded}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export type CommentSectionProps = {
  postSlug: string;
  comments: Comment[];
  onCommentAdded: () => void;
};

export function CommentSection({ postSlug, comments, onCommentAdded }: CommentSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-2xl p-8"
    >
      <h3 className="text-lg font-medium text-white mb-6">
        {comments.length > 0
          ? `${comments.length} comment${comments.length === 1 ? '' : 's'}`
          : 'Comments'}
      </h3>

      {comments.length === 0 ? (
        <p className="text-[#94A3B8]">
          No comments yet. Be the first to share your thoughts.
        </p>
      ) : (
        <div className="space-y-8">
          {comments.map((comment) => (
            <CommentNode
              key={comment.id}
              comment={comment}
              postSlug={postSlug}
              onCommentAdded={onCommentAdded}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
