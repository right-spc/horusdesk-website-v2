import { useParams, Navigate } from 'react-router';
import { SEOHead } from '@/components/layout/SEOHead';
import { getBlogPostBySlug } from '@/data/blog';
import { BlogPostLayout } from '@/sections/blog/BlogPostLayout';
import { BlogCTA } from '@/sections/blog/BlogCTA';
import { PostEngagement } from '@/sections/blog/PostEngagement';
import { generateArticleSchema } from '@/lib/seo';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Horus Desk',
  url: 'https://horusdesk.com',
  logo: 'https://horusdesk.com/logo.png',
  sameAs: [
    'https://twitter.com/horusdesk',
    'https://linkedin.com/company/horusdesk',
  ],
};

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const PostContent = post.component;
  const canonicalUrl = `https://horusdesk.com/blog/${post.slug}`;
  const pageTitle = `${post.title} | Horus Desk Blog`;

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={post.description}
        canonicalUrl={canonicalUrl}
        ogType="article"
        ogTitle={post.title}
        ogDescription={post.description}
        ogUrl={canonicalUrl}
        ogImage="https://horusdesk.com/og-default.png"
        twitterTitle={post.title}
        twitterDescription={post.description}
        twitterImage="https://horusdesk.com/og-default.png"
        jsonLd={[
          organizationSchema,
          generateArticleSchema({
            headline: post.title,
            description: post.description,
            image: 'https://horusdesk.com/og-default.png',
            url: canonicalUrl,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt || post.publishedAt,
          }),
        ]}
      />
      <main id="main-content">
        <BlogPostLayout meta={post}>
          <PostContent />
        </BlogPostLayout>
        <PostEngagement postSlug={post.slug} />
        <BlogCTA />
      </main>
    </>
  );
}
