import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export type RatingSummary = {
  average: number;
  count: number;
};

type RatingSectionProps = {
  postSlug: string;
};

export function RatingSection({ postSlug }: RatingSectionProps) {
  const [summary, setSummary] = useState<RatingSummary>({ average: 0, count: 0 });
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`/api/blog/ratings?post_slug=${encodeURIComponent(postSlug)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.average !== undefined) {
          setSummary(data);
        }
      })
      .catch((err) => console.error('Failed to load ratings:', err));
  }, [postSlug]);

  const submitRating = async (value: number) => {
    if (loading || userRating != null) return;

    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/blog/ratings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ post_slug: postSlug, value }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit rating.');

      setSummary(data.summary);
      setUserRating(value);
      setMessage('Thanks for your rating!');
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const displayValue = hoverValue ?? userRating ?? summary.average;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-2xl p-8 mb-8"
    >
      <h3 className="text-lg font-medium text-white mb-2">Rate this article</h3>
      <p className="text-sm text-[#94A3B8] mb-4">
        {summary.count > 0
          ? `${summary.average} out of 5 stars from ${summary.count} rating${summary.count === 1 ? '' : 's'}`
          : 'Be the first to rate this article.'}
      </p>

      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            disabled={loading || userRating != null}
            onMouseEnter={() => setHoverValue(star)}
            onMouseLeave={() => setHoverValue(null)}
            onClick={() => submitRating(star)}
            className="disabled:cursor-not-allowed transition-transform hover:scale-110 focus:outline-none"
            aria-label={`Rate ${star} stars`}
          >
            <Star
              size={28}
              className={`transition-colors duration-200 ${
                star <= displayValue
                  ? 'fill-[#7C4DFF] text-[#7C4DFF]'
                  : 'text-[#334155]'
              }`}
            />
          </button>
        ))}
      </div>

      {message && (
        <p className={`mt-4 text-sm ${userRating != null ? 'text-[#64FFDA]' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </motion.div>
  );
}
