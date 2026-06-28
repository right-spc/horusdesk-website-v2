export interface CaseStudyMeta {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  iconName: string;
  ogImage?: string;
  publishedAt?: string;
  updatedAt?: string;
}

export const caseStudies: CaseStudyMeta[] = [
  {
    slug: 'softphone',
    title: 'Custom Softphone + CRM',
    description:
      'A complete voice, CRM, outreach, and automation platform built from scratch. Avoided a $500+/month SaaS stack by building a custom platform that costs $150/month for our 3-agent team.',
    tags: ['React', 'Supabase', 'Telnyx', 'WebRTC'],
    iconName: 'Phone',
    ogImage: 'https://horusdesk.com/og-default.png',
    publishedAt: '2026-06-12',
  },
  {
    slug: 'ai-agent-dashboards',
    title: 'Employee & Customer Dashboards',
    description:
      'A matching pair of internal and client-facing dashboards built from scratch. Avoided a $300+/month stack of employee portals, customer portals, analytics, and support tools — and now runs for under $50/month.',
    tags: ['React', 'Supabase', 'shadcn/ui', 'Recharts'],
    iconName: 'BarChart3',
    ogImage: 'https://horusdesk.com/og-default.png',
    publishedAt: '2026-06-12',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyMeta | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}
