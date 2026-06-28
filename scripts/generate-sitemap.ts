import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { siteRoutes } from '../src/data/siteRoutes';
import { caseStudies } from '../src/data/caseStudies';
import { blogPosts } from '../src/data/blogMeta';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

const today = formatDate(new Date());

const urls: SitemapUrl[] = [];

// Static routes
siteRoutes.forEach((route) => {
  if (route.robots?.startsWith('noindex')) return;

  urls.push({
    loc: `https://horusdesk.com${route.path}`,
    lastmod: route.lastmod || today,
    changefreq: route.changefreq || 'monthly',
    priority: route.priority ?? 0.5,
  });
});

// Case studies
caseStudies.forEach((study) => {
  urls.push({
    loc: `https://horusdesk.com/case-studies/${study.slug}`,
    lastmod: study.updatedAt || study.publishedAt || today,
    changefreq: 'monthly',
    priority: 0.5,
  });
});

// Blog posts
blogPosts.forEach((post) => {
  urls.push({
    loc: `https://horusdesk.com/blog/${post.slug}`,
    lastmod: post.updatedAt || post.publishedAt || today,
    changefreq: 'monthly',
    priority: 0.6,
  });
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outputPath = resolve(process.cwd(), 'public', 'sitemap.xml');
writeFileSync(outputPath, sitemap, 'utf-8');

console.log(`Sitemap generated with ${urls.length} URLs at ${outputPath}`);
