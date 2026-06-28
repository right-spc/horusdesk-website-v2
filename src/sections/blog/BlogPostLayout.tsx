import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import type { BlogPostMeta } from '@/data/blog';


export type BlogPostLayoutProps = {
  meta: BlogPostMeta;
  children: React.ReactNode;
};

export function BlogPostLayout({ meta, children }: BlogPostLayoutProps) {
  const formattedDate = new Date(meta.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-navy overflow-hidden pt-[100px] pb-16"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(124,77,255,0.06) 0%, transparent 60%)',
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#7C4DFF] transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <span className="inline-block text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4 px-3 py-1 rounded-full bg-[rgba(124,77,255,0.1)] border border-[rgba(124,77,255,0.2)]">
              {meta.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.15] tracking-tight mb-8">
              {meta.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <User size={16} className="text-[#7C4DFF]" />
                <span>{meta.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[#7C4DFF]" />
                <time dateTime={meta.publishedAt}>{formattedDate}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#7C4DFF]" />
                <span>{meta.readTimeMinutes} min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-navy-light py-16 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="blog-post-body"
          >
            {children}
          </motion.div>


        </div>
      </article>

    </>
  );
}
