export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: string;
  tags: string[];
  readTimeMinutes: number;
  ogImage?: string;
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'vicidial-trap',
    title: 'The VICIdial Trap: Why Your "Best Developer" Is Costing You More Than a Custom Build',
    description:
      'If you are a BPO owner or campaign manager using VICIdial, the real costs are hiding in abandoned calls, agent turnover, spam-labeled numbers, and compliance risk. Here is what to look for.',
    publishedAt: '2026-06-27',
    author: 'Moaaz Alidris (Operations Lead)',
    category: 'Sales Operations',
    tags: [
      'Sales Teams',
      'Outbound Sales',
      'Call Center',
      'VICIdial',
      'Custom Software',
      'Predictive Dialer',
      'Inside Sales',
      'Contact Center',
    ],
    readTimeMinutes: 9,
    ogImage: 'https://horusdesk.com/og-studio.png',
  },
];

export function getBlogPostBySlug(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
