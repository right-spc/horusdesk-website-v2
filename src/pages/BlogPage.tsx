import { SEOHead } from '@/components/layout/SEOHead';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { blogPosts, formatBlogDate } from '@/data/blog';
import { Clock, ArrowRight, Calendar } from 'lucide-react';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Horus Desk',
  url: 'https://horusdesk.com',
  logo: 'https://horusdesk.com/logo.png',
  sameAs: [
  'https://www.linkedin.com/company/right-space-llc',
  'https://www.facebook.com/horusdesk',
],
};

const collectionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Blog | Horus Desk',
  description:
    'Insights for BPOs, call centers, and service businesses building custom software and operations that scale.',
  url: 'https://horusdesk.com/blog',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Horus Desk',
    url: 'https://horusdesk.com',
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export function BlogPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <>
      <SEOHead
        title="Blog | Insights for BPOs & Custom Software"
        description="Insights for sales teams, call centers, and BPOs building custom software and operations that actually scale."
        canonicalUrl="https://horusdesk.com/blog"
        ogType="website"
        ogTitle="Blog | Insights for BPOs & Custom Software"
        ogDescription="Insights for sales teams, call centers, and BPOs building custom software and operations that actually scale."
        ogUrl="https://horusdesk.com/blog"
        ogImage="https://horusdesk.com/og-default.png"
        twitterTitle="Blog | Insights for BPOs & Custom Software"
        twitterDescription="Insights for sales teams, call centers, and BPOs building custom software and operations that actually scale."
        twitterImage="https://horusdesk.com/og-default.png"
        jsonLd={[organizationSchema, collectionPageSchema]}
      />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[45vh] flex items-center bg-navy overflow-hidden pt-[100px] pb-16"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(124,77,255,0.06) 0%, transparent 60%)',
          }}
        >
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
                Insights & Opinions
              </p>
              <h1 className="text-4xl lg:text-6xl font-medium text-white leading-[1.1] tracking-tight mb-6">
                Blog
              </h1>
              <p className="text-lg text-[#94A3B8] leading-relaxed">
                Unfiltered takes on sales operations, call center technology, custom software, and the real cost of running outbound teams on tools that were built two decades ago.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="bg-navy-light py-16 lg:py-24">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
              <SectionWrapper className="mb-12">
                <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
                  Latest Post
                </p>
              </SectionWrapper>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
              >
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="group block bg-navy border border-[rgba(226,232,240,0.08)] rounded-2xl p-8 lg:p-12 hover:border-[rgba(124,77,255,0.3)] transition-colors duration-300"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] px-3 py-1 rounded-full bg-[rgba(124,77,255,0.1)] border border-[rgba(124,77,255,0.2)]">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-[#94A3B8]">
                      <Calendar size={14} />
                      {formatBlogDate(featuredPost.publishedAt)}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-[#94A3B8]">
                      <Clock size={14} />
                      {featuredPost.readTimeMinutes} min read
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-4xl font-medium text-white leading-tight mb-6 group-hover:text-[#7C4DFF] transition-colors duration-300">
                    {featuredPost.title}
                  </h2>

                  <p className="text-[#94A3B8] leading-relaxed mb-8 max-w-3xl">
                    {featuredPost.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-[#7C4DFF] text-sm font-medium group-hover:underline">
                    Read Article
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section className="bg-navy py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <SectionWrapper className="mb-12">
              <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
                All Posts
              </p>
              <h2 className="text-3xl lg:text-4xl font-medium text-white leading-[1.2]">
                More from Horus Desk
              </h2>
            </SectionWrapper>

            {remainingPosts.length > 0 ? (
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {remainingPosts.map((post) => (
                  <motion.article
                    key={post.slug}
                    variants={fadeUp}
                    className="group bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-2xl p-8 hover:border-[rgba(124,77,255,0.3)] transition-colors duration-300 flex flex-col"
                  >
                    <span className="inline-block self-start text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4 px-3 py-1 rounded-full bg-[rgba(124,77,255,0.1)] border border-[rgba(124,77,255,0.2)]">
                      {post.category}
                    </span>

                    <h3 className="text-xl font-medium text-white mb-4 leading-snug group-hover:text-[#7C4DFF] transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-[#94A3B8] leading-relaxed mb-6 flex-grow">
                      {post.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-[#94A3B8] mb-6">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {formatBlogDate(post.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {post.readTimeMinutes} min
                      </span>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-[#7C4DFF] hover:underline text-sm font-medium"
                    >
                      Read Article
                      <ArrowRight size={14} />
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-16 bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-2xl">
                <p className="text-[#94A3B8]">
                  More posts coming soon. Check back for updates.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
