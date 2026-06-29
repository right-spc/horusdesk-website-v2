import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { siteRoutes, DEFAULT_IMAGE } from '../src/data/siteRoutes.js';
import { caseStudies } from '../src/data/caseStudies.js';
import { blogPosts } from '../src/data/blogMeta.js';

interface RouteMeta {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType?: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  canonicalUrl: string;
  robots?: string;
}

const SITE_NAME = 'Horus Desk';

function buildRouteMeta(): Record<string, RouteMeta> {
  const meta: Record<string, RouteMeta> = {};

  // Static routes
  siteRoutes.forEach((route) => {
    meta[route.path] = {
      title: route.title,
      description: route.description,
      ogTitle: route.ogTitle,
      ogDescription: route.ogDescription,
      ogImage: route.ogImage,
      ogType: route.ogType,
      twitterTitle: route.twitterTitle,
      twitterDescription: route.twitterDescription,
      twitterImage: route.twitterImage,
      canonicalUrl: route.canonicalUrl,
      robots: route.robots,
    };
  });

  // Case studies
  caseStudies.forEach((study) => {
    const path = `/case-studies/${study.slug}`;
    const url = `https://horusdesk.com${path}`;
    const title = `Case Study | ${study.title}`;
    const ogImage = study.ogImage || 'https://horusdesk.com/og-default.png';

    meta[path] = {
      title,
      description: study.description,
      ogTitle: title,
      ogDescription: study.description,
      ogImage,
      ogType: 'article',
      twitterTitle: title,
      twitterDescription: study.description,
      twitterImage: ogImage,
      canonicalUrl: url,
    };
  });

  // Blog posts
  blogPosts.forEach((post) => {
    const path = `/blog/${post.slug}`;
    const url = `https://horusdesk.com${path}`;
    const title = `${post.title} | Horus Desk Blog`;
    const ogImage = post.ogImage || 'https://horusdesk.com/og-default.png';

    meta[path] = {
      title,
      description: post.description,
      ogTitle: post.title,
      ogDescription: post.description,
      ogImage,
      ogType: 'article',
      twitterTitle: post.title,
      twitterDescription: post.description,
      twitterImage: ogImage,
      canonicalUrl: url,
    };
  });

  // Fallback for unknown paths
  meta['*'] = {
    title: 'Page Not Found | Horus Desk',
    description:
      'The page you are looking for does not exist. Explore Horus Desk AI receptionist, managed teams, and custom development services.',
    ogTitle: 'Page Not Found | Horus Desk',
    ogDescription:
      'The page you are looking for does not exist. Explore Horus Desk AI receptionist, managed teams, and custom development services.',
    ogImage: DEFAULT_IMAGE,
    twitterTitle: 'Page Not Found | Horus Desk',
    twitterDescription:
      'The page you are looking for does not exist. Explore Horus Desk AI receptionist, managed teams, and custom development services.',
    twitterImage: DEFAULT_IMAGE,
    canonicalUrl: 'https://horusdesk.com/404',
    robots: 'noindex, nofollow',
  };

  return meta;
}

const routeMeta = buildRouteMeta();

const CRAWLER_REGEX = /linkedin|facebook|twitter|slack|discord|whatsapp|telegram|googlebot|bingbot|applebot|yandex|baidu|crawler|spider|bot|anthropic|openai|gptbot|claude|perplexity|ai/i;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function normalizePath(path: string): string {
  // Remove query strings and trailing slashes
  const clean = path.split('?')[0].split('#')[0].replace(/\/$/, '') || '/';
  return clean;
}

function getMeta(path: string): RouteMeta {
  const normalized = normalizePath(path);
  return routeMeta[normalized] || routeMeta['*'];
}

function generateHeadBlock(meta: RouteMeta): string {
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const ogTitle = escapeHtml(meta.ogTitle);
  const ogDescription = escapeHtml(meta.ogDescription);
  const ogImage = escapeHtml(meta.ogImage);
  const twitterTitle = escapeHtml(meta.twitterTitle);
  const twitterDescription = escapeHtml(meta.twitterDescription);
  const twitterImage = escapeHtml(meta.twitterImage);
  const canonicalUrl = escapeHtml(meta.canonicalUrl);
  const ogType = meta.ogType || 'website';
  const robots = meta.robots || 'index, follow';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: 'https://horusdesk.com',
    logo: 'https://horusdesk.com/logo.png',
    sameAs: ['https://www.linkedin.com/company/right-space-llc', 'https://www.facebook.com/horusdesk'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'hello@horusdesk.com',
      availableLanguage: 'English',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://horusdesk.com',
    name: SITE_NAME,
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://horusdesk.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const jsonLdScripts = [
    `<script type="application/ld+json">\n${JSON.stringify(organizationSchema, null, 2)}\n    </script>`,
  ];

  if (robots.startsWith('index')) {
    jsonLdScripts.push(
      `<script type="application/ld+json">\n${JSON.stringify(websiteSchema, null, 2)}\n    </script>`
    );
  }

  return `    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="${robots}" />
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- Open Graph -->
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:title" content="${ogTitle}" />
    <meta property="og:description" content="${ogDescription}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@horusdesk" />
    <meta name="twitter:creator" content="@horusdesk" />
    <meta name="twitter:title" content="${twitterTitle}" />
    <meta name="twitter:description" content="${twitterDescription}" />
    <meta name="twitter:image" content="${twitterImage}" />

    <!-- JSON-LD -->
    ${jsonLdScripts.join('\n    ')}
`;
}

function readIndexHtml(): string {
  const candidates = [
    resolve(process.cwd(), 'dist', 'index.html'),
    resolve(process.cwd(), 'index.html'),
  ];

  for (const path of candidates) {
    try {
      return readFileSync(path, 'utf-8');
    } catch {
      // try next candidate
    }
  }

  throw new Error('Could not find index.html');
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const userAgent = req.headers['user-agent'] || '';

  // Final safety check: only serve to crawlers.
  if (!CRAWLER_REGEX.test(userAgent)) {
    const path = normalizePath((req.query.path as string) || '/');
    return res.redirect(302, path);
  }

  const rawPath = (req.query.path as string) || '/';
  const meta = getMeta(rawPath);
  const status = meta.robots?.startsWith('noindex') ? 404 : 200;

  try {
    const template = readIndexHtml();
    const headBlock = generateHeadBlock(meta);

    // Replace the existing SEO head block (from <title> up to the Google tag comment)
    const modified = template.replace(
      /<title>.*?<\/title>[\s\S]*?(?=<!-- Google tag)/,
      headBlock
    );

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(status).send(modified);
  } catch (err) {
    console.error('SEO handler error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
