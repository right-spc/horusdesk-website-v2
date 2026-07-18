import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { siteRoutes, DEFAULT_IMAGE } from '../src/data/siteRoutes.js';
import { caseStudies } from '../src/data/caseStudies.js';
import { blogPosts } from '../src/data/blogMeta.js';
import { generateBreadcrumbList, generateHowToSchema, generateFAQPageSchema } from '../src/lib/seo.js';

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
    jsonLdScripts.push(
      `<script type="application/ld+json">\n${JSON.stringify(generateBreadcrumbList(canonicalUrl), null, 2)}\n    </script>`
    );
    getPageSchemas(normalizePath(canonicalUrl)).forEach((schema) => {
      jsonLdScripts.push(
        `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n    </script>`
      );
    });
  }

  return `    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="${robots}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="llms-txt" href="/llms.txt" />

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

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Software Studio',
  provider: {
    '@type': 'Organization',
    name: SITE_NAME,
  },
  description: 'Custom web application development, mobile apps, and AI integrations built entirely from scratch. Two options: Build & Own, or a managed platform with low setup fee and monthly subscription.',
  areaServed: 'Global',
};

const buildOwnHowToSchema = generateHowToSchema({
  name: 'How Horus Desk Build & Own custom software works',
  description: 'A 5-step process from discovery to handoff for custom software development.',
  url: 'https://horusdesk.com/studio',
  steps: [
    { name: 'Discovery', text: 'We interview your team, map your workflows, and identify the real bottlenecks. Not surface-level requirements — we find the root problem.', anchor: 'discovery' },
    { name: 'Scope', text: 'Fixed deliverables, fixed timeline, fixed price. No scope creep surprises. You know exactly what you\'re getting before we write a single line of code.', anchor: 'scope' },
    { name: 'Sprint', text: 'Weekly demos, not monthly reports. You see working software every 7 days and can pivot immediately if priorities change.', anchor: 'sprint' },
    { name: 'Launch', text: 'We handle deployment, SSL, DNS, monitoring, and backups. Your tool goes live without you touching a server.', anchor: 'launch' },
    { name: 'Handoff', text: 'Full documentation, source code repository access, and team training. You can maintain it in-house or keep us on retainer.', anchor: 'handoff' },
  ],
});

const managedPlatformHowToSchema = generateHowToSchema({
  name: 'How Horus Desk Managed Custom Platform works',
  description: 'A 5-step process from discovery to ongoing management for a managed custom platform.',
  url: 'https://horusdesk.com/studio',
  steps: [
    { name: 'Discovery', text: 'We interview your team, map your workflows, and identify bottlenecks.', anchor: 'discovery-managed' },
    { name: 'Scope', text: 'Fixed deliverables, fixed timeline, fixed monthly price. No surprises.', anchor: 'scope-managed' },
    { name: 'Sprint', text: 'Weekly demos. You see working software every 7 days.', anchor: 'sprint-managed' },
    { name: 'Launch', text: 'We handle deployment, SSL, DNS, monitoring, and backups. Your tool goes live.', anchor: 'launch-managed' },
    { name: 'Ongoing Management', text: 'We handle hosting, security patches, updates, and support. You focus on your business. Scale up or down monthly.', anchor: 'ongoing-management' },
  ],
});

const studioFAQSchema = generateFAQPageSchema([
  {
    question: 'Do I own the source code?',
    answer: 'Yes. With our Build & Own option, everything we build is yours. We deliver the full source code repository, documentation, and deployment credentials at handoff. With our Managed Platform option, you can buy the code at any time.',
  },
  {
    question: 'What is the difference between Build & Own and Managed Platform?',
    answer: 'Build & Own is a one-time custom build. You own 100% of the source code, data, and IP, with an optional maintenance retainer after launch. Managed Platform is a low setup fee plus a fixed monthly subscription. We build it, host it, maintain it, and secure it. You get full access and can buy the code at any time.',
  },
  {
    question: 'What if I need changes after launch?',
    answer: 'For Build & Own projects, we offer monthly retainers for ongoing development, or you can hire us ad-hoc for specific updates. Alternatively, your in-house team can take over since you own the full codebase and documentation. For Managed Platform clients, maintenance, hosting, security updates, and support are included.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'React, Next.js, TypeScript for web. React Native or Flutter for mobile. Node.js, Python, or Go for backends. PostgreSQL or Supabase for databases. We pick the stack that fits your project, not our comfort zone.',
  },
  {
    question: 'Can you integrate with our existing tools?',
    answer: 'Yes. We build native API integrations with whatever you already use — QuickBooks, Stripe, Twilio, Google Calendar, or internal systems. No Zapier workarounds. Real, robust integrations.',
  },
]);

function getPageSchemas(path: string): Record<string, unknown>[] {
  if (path === '/studio') {
    return [serviceSchema, buildOwnHowToSchema, managedPlatformHowToSchema, studioFAQSchema];
  }
  return [];
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
    res.setHeader('Link', '</llms.txt>; rel="llms-txt"');
    return res.status(status).send(modified);
  } catch (err) {
    console.error('SEO handler error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
