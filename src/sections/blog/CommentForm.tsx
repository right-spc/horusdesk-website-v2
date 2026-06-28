import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export type CommentFormProps = {
  postSlug: string;
  parentId?: string | null;
  onSuccess?: () => void;
  replyToName?: string;
};

export function CommentForm({ postSlug, parentId = null, onSuccess, replyToName }: CommentFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const renderTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    renderTimeRef.current = Date.now();
    const savedName = localStorage.getItem('horus-blog-author-name');
    if (savedName) setName(savedName);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setMessage('');
    setIsSuccess(false);

    const renderTimeMs = Date.now() - renderTimeRef.current;

    try {
      const res = await fetch('/api/blog/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          post_slug: postSlug,
          parent_id: parentId,
          author_name: name,
          author_email: email,
          content,
          honeypot,
          render_time_ms: renderTimeMs,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit comment.');

      localStorage.setItem('horus-blog-author-name', name);

      if (data.comment?.status === 'approved') {
        setContent('');
        setIsSuccess(true);
        setMessage(data.message || 'Your comment has been posted.');
        onSuccess?.();
      } else if (data.comment?.status === 'pending') {
        setContent('');
        setIsSuccess(true);
        setMessage(data.message || 'Your comment is awaiting moderation.');
        onSuccess?.();
      } else {
        setIsSuccess(false);
        setMessage(data.message || 'Your comment was not approved.');
      }
    } catch (err) {
      setIsSuccess(false);
      setMessage(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit}
      className="bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-2xl p-8"
    >
      <h3 className="text-lg font-medium text-white mb-2">
        {replyToName ? `Reply to ${replyToName}` : 'Leave a comment'}
      </h3>
      <p className="text-sm text-[#94A3B8] mb-6">
        No sign-in required. Your email is kept private — it will not be shown publicly, used for marketing, or shared with anyone. We only use it to track your comments across the site.
      </p>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="comment-name" className="block text-sm font-medium text-[#94A3B8] mb-2">
            Name
          </label>
          <input
            id="comment-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-navy border border-[rgba(226,232,240,0.08)] rounded-xl px-4 py-3 text-white placeholder-[#64748B] focus:border-[#7C4DFF] focus:outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="comment-email" className="block text-sm font-medium text-[#94A3B8] mb-2">
            Email
          </label>
          <input
            id="comment-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-navy border border-[rgba(226,232,240,0.08)] rounded-xl px-4 py-3 text-white placeholder-[#64748B] focus:border-[#7C4DFF] focus:outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="comment-content" className="block text-sm font-medium text-[#94A3B8] mb-2">
          Comment
        </label>
        <textarea
          id="comment-content"
          required
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={5000}
          className="w-full bg-navy border border-[rgba(226,232,240,0.08)] rounded-xl px-4 py-3 text-white placeholder-[#64748B] focus:border-[#7C4DFF] focus:outline-none transition-colors resize-y"
          placeholder={replyToName ? `Write your reply...` : 'Share your thoughts...'}
        />
        <p className="mt-2 text-xs text-[#64748B]">{content.length}/5000</p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 bg-[#7C4DFF] hover:bg-[#6B3FE0] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl px-6 py-3 text-sm font-medium transition-colors"
        >
          {loading ? 'Submitting...' : replyToName ? 'Post Reply' : 'Post Comment'}
          <Send size={16} />
        </button>

        {message && (
          <p className={`text-sm ${isSuccess ? 'text-[#64FFDA]' : 'text-red-400'}`}>
            {message}
          </p>
        )}
      </div>
    </motion.form>
  );
}
