import { Helmet } from 'react-helmet-async';
import { generateBreadcrumbList } from '@/lib/seo';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  jsonLdLast?: Record<string, unknown> | Record<string, unknown>[];
  robots?: string;
}

function formatTitle(title: string) {
  const brand = 'Horus Desk';
  return title.includes(brand) ? title : `${title} | ${brand}`;
}

export function SEOHead({
  title,
  description,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  ogType = 'website',
  twitterTitle,
  twitterDescription,
  twitterImage,
  jsonLd,
  jsonLdLast,
  robots = 'index, follow',
}: SEOHeadProps) {
  const formattedTitle = formatTitle(title);
  const isNotFound = canonicalUrl === 'https://horusdesk.com/404';

  const schemas: Record<string, unknown>[] = [];
  if (jsonLd) {
    schemas.push(...(Array.isArray(jsonLd) ? jsonLd : [jsonLd]));
  }
  if (!isNotFound) {
    schemas.push(generateBreadcrumbList(canonicalUrl));
  }
  if (jsonLdLast) {
    schemas.push(...(Array.isArray(jsonLdLast) ? jsonLdLast : [jsonLdLast]));
  }

  return (
    <Helmet>
      <html lang="en-US" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0A192F" />
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Preconnect and preload */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" />

      {/* Icons */}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Open Graph */}
      <meta property="og:site_name" content="Horus Desk" />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={ogTitle || formattedTitle} />
      <meta property="og:description" content={ogDescription || description} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogImage && (
        <>
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:type" content="image/png" />
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@horusdesk" />
      <meta name="twitter:creator" content="@horusdesk" />
      <meta name="twitter:title" content={twitterTitle || ogTitle || formattedTitle} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}

      {/* JSON-LD */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
