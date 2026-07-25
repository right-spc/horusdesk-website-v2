export interface RouteMeta {
  path: string;
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
  priority?: number;
  changefreq?: string;
  lastmod?: string;
}

export const DEFAULT_IMAGE = 'https://horusdesk.com/og-default.png';

export const siteRoutes: RouteMeta[] = [
  {
    path: '/',
    title: 'Horus Desk | AI Receptionist for Service Businesses',
    description:
      'AI receptionist that qualifies leads and books meetings via chat and email in 6 languages. Fully managed, live in 24 hours. Starting at $499/mo.',
    ogTitle: 'Horus Desk | AI Receptionist for Service Businesses',
    ogDescription:
      'AI receptionist that qualifies leads and books meetings via chat and email in 6 languages. Fully managed, live in 24 hours. Starting at $499/mo.',
    ogImage: DEFAULT_IMAGE,
    twitterTitle: 'Horus Desk | AI Receptionist for Service Businesses',
    twitterDescription:
      'AI receptionist that qualifies leads and books meetings via chat and email in 6 languages. Fully managed, live in 24 hours. Starting at $499/mo.',
    twitterImage: DEFAULT_IMAGE,
    canonicalUrl: 'https://horusdesk.com/',
    priority: 1.0,
    changefreq: 'weekly',
    lastmod: '2026-06-12',
  },
  {
    path: '/ai',
    title: 'AI Agent | Automated Lead Qualification & Booking in 6 Languages',
    description:
      'AI receptionist for website chat and email. Qualifies leads, books meetings, and escalates in 6 languages. 7,500 responses included. Starting at $499/mo with free setup.',
    ogTitle: 'AI Agent | Automated Lead Qualification & Booking',
    ogDescription:
      'AI receptionist for website chat and email. Qualifies leads, books meetings, and escalates in 6 languages. 7,500 responses included. Starting at $499/mo with free setup.',
    ogType: 'product',
    ogImage: DEFAULT_IMAGE,
    twitterTitle: 'AI Agent | Automated Lead Qualification & Booking',
    twitterDescription:
      'AI receptionist for website chat and email. Qualifies leads, books meetings, and escalates in 6 languages. 7,500 responses included. Starting at $499/mo with free setup.',
    twitterImage: DEFAULT_IMAGE,
    canonicalUrl: 'https://horusdesk.com/ai',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: '2026-06-12',
  },
  {
    path: '/teams',
    title: 'Managed Teams | Customer Support & Sales Teams from $10/hour',
    description:
      'Fully managed customer support and sales teams based in Cairo. University-educated agents, 24/7 coverage, no long-term contracts. Scale monthly. From $10/hour.',
    ogTitle: 'Managed Teams | Customer Support & Sales Teams from $10/hour',
    ogDescription:
      'Fully managed customer support and sales teams based in Cairo. University-educated agents, 24/7 coverage, no long-term contracts. Scale monthly. From $10/hour.',
    ogType: 'product',
    ogImage: DEFAULT_IMAGE,
    twitterTitle: 'Managed Teams | Customer Support & Sales Teams from $10/hour',
    twitterDescription:
      'Fully managed customer support and sales teams based in Cairo. University-educated agents, 24/7 coverage, no long-term contracts. Scale monthly. From $10/hour.',
    twitterImage: DEFAULT_IMAGE,
    canonicalUrl: 'https://horusdesk.com/teams',
    priority: 0.7,
    changefreq: 'monthly',
    lastmod: '2026-06-12',
  },
  {
    path: '/studio',
    title: 'Software Studio | Custom Development Built From Scratch',
    description:
      'Custom web apps, mobile development, and AI integrations built from scratch. Choose Build & Own or a managed platform. Free audit and blueprint before you pay.',
    ogTitle: 'Software Studio | Custom Development Built From Scratch',
    ogDescription:
      'Custom web apps, mobile development, and AI integrations built from scratch. Choose Build & Own or a managed platform. Free audit and blueprint before you pay.',
    ogType: 'product',
    ogImage: DEFAULT_IMAGE,
    twitterTitle: 'Software Studio | Custom Development Built From Scratch',
    twitterDescription:
      'Custom web apps, mobile development, and AI integrations built from scratch. Choose Build & Own or a managed platform. Free audit and blueprint before you pay.',
    twitterImage: DEFAULT_IMAGE,
    canonicalUrl: 'https://horusdesk.com/studio',
    priority: 0.7,
    changefreq: 'monthly',
    lastmod: '2026-07-06',
  },
  {
    path: '/security',
    title: 'Security & Compliance | SOC 2, GDPR & Data Privacy',
    description:
      'Enterprise-grade security with SOC 2 Type II via Supabase, GDPR compliance, and HIPAA-ready infrastructure. Your data is encrypted and never used to train AI models.',
    ogTitle: 'Security & Compliance | SOC 2, GDPR & Data Privacy',
    ogDescription:
      'Enterprise-grade security with SOC 2 Type II via Supabase, GDPR compliance, and HIPAA-ready infrastructure. Your data is encrypted and never used to train AI models.',
    ogImage: DEFAULT_IMAGE,
    twitterTitle: 'Security & Compliance | SOC 2, GDPR & Data Privacy',
    twitterDescription:
      'Horus Desk security and compliance. Enterprise-grade infrastructure with SOC 2 Type II via Supabase. GDPR compliance. Transparent data practices. No data used for AI training.',
    twitterImage: DEFAULT_IMAGE,
    canonicalUrl: 'https://horusdesk.com/security',
    priority: 0.6,
    changefreq: 'monthly',
    lastmod: '2026-06-12',
  },
  {
    path: '/contact',
    title: 'Contact Us | Horus Desk',
    description:
      'Book a free discovery call, email our sales and support teams, or visit our operations center in Cairo, Egypt. We reply within 24 hours.',
    ogTitle: 'Contact Us | Horus Desk',
    ogDescription:
      'Book a free discovery call, email our sales and support teams, or visit our operations center in Cairo, Egypt. We reply within 24 hours.',
    ogImage: DEFAULT_IMAGE,
    twitterTitle: 'Contact Us | Horus Desk',
    twitterDescription:
      'Book a free discovery call, email our sales and support teams, or visit our operations center in Cairo, Egypt. We reply within 24 hours.',
    twitterImage: DEFAULT_IMAGE,
    canonicalUrl: 'https://horusdesk.com/contact',
    priority: 0.5,
    changefreq: 'monthly',
    lastmod: '2026-06-12',
  },
  {
    path: '/blog',
    title: 'Blog | Insights for BPOs & Custom Software',
    description:
      'Insights for sales teams, call centers, and BPOs building custom software and operations that actually scale.',
    ogTitle: 'Blog | Insights for BPOs & Custom Software',
    ogDescription:
      'Insights for sales teams, call centers, and BPOs building custom software and operations that actually scale.',
    ogType: 'website',
    ogImage: DEFAULT_IMAGE,
    twitterTitle: 'Blog | Insights for BPOs & Custom Software',
    twitterDescription:
      'Insights for sales teams, call centers, and BPOs building custom software and operations that actually scale.',
    twitterImage: DEFAULT_IMAGE,
    canonicalUrl: 'https://horusdesk.com/blog',
    priority: 0.7,
    changefreq: 'weekly',
    lastmod: '2026-06-27',
  },
  {
    path: '/case-studies',
    title: 'Case Studies | Custom Software Built From Scratch',
    description:
      'Explore real custom software projects built by Horus Desk — from softphone + CRM platforms to employee and customer dashboards.',
    ogTitle: 'Case Studies | Custom Software Built From Scratch',
    ogDescription:
      'Explore real custom software projects built by Horus Desk — from softphone + CRM platforms to employee and customer dashboards.',
    ogType: 'website',
    ogImage: DEFAULT_IMAGE,
    twitterTitle: 'Case Studies | Custom Software Built From Scratch',
    twitterDescription:
      'Explore real custom software projects built by Horus Desk — from softphone + CRM platforms to employee and customer dashboards.',
    twitterImage: DEFAULT_IMAGE,
    canonicalUrl: 'https://horusdesk.com/case-studies',
    priority: 0.6,
    changefreq: 'monthly',
    lastmod: '2026-06-12',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Horus Desk',
    description:
      'Learn how Right Space LLC collects, uses, discloses, and safeguards your information when you use Horus Desk AI, Teams, and Studio services.',
    ogTitle: 'Privacy Policy | Horus Desk',
    ogDescription:
      'Learn how Right Space LLC collects, uses, discloses, and safeguards your information when you use Horus Desk AI, Teams, and Studio services.',
    ogImage: DEFAULT_IMAGE,
    twitterTitle: 'Privacy Policy | Horus Desk',
    twitterDescription:
      'Learn how Right Space LLC collects, uses, discloses, and safeguards your information when you use Horus Desk AI, Teams, and Studio services.',
    twitterImage: DEFAULT_IMAGE,
    canonicalUrl: 'https://horusdesk.com/privacy-policy',
    robots: 'noindex, follow',
    priority: 0.4,
    changefreq: 'yearly',
    lastmod: '2026-06-12',
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service | Horus Desk',
    description:
      'Read the legally binding agreement for using Horus Desk AI Agent, Managed Teams, and Software Studio services. Updated June 2026.',
    ogTitle: 'Terms of Service | Horus Desk',
    ogDescription:
      'Read the legally binding agreement for using Horus Desk AI Agent, Managed Teams, and Software Studio services. Updated June 2026.',
    ogImage: DEFAULT_IMAGE,
    twitterTitle: 'Terms of Service | Horus Desk',
    twitterDescription:
      'Read the legally binding agreement for using Horus Desk AI Agent, Managed Teams, and Software Studio services. Updated June 2026.',
    twitterImage: DEFAULT_IMAGE,
    canonicalUrl: 'https://horusdesk.com/terms-of-service',
    robots: 'noindex, follow',
    priority: 0.4,
    changefreq: 'yearly',
    lastmod: '2026-06-12',
  },
  {
    path: '/unsubscribe',
    title: 'Unsubscribe | Horus Desk',
    description: 'Manage your Horus Desk email preferences.',
    ogTitle: 'Unsubscribe | Horus Desk',
    ogDescription: 'Manage your Horus Desk email preferences.',
    ogImage: DEFAULT_IMAGE,
    twitterTitle: 'Unsubscribe | Horus Desk',
    twitterDescription: 'Manage your Horus Desk email preferences.',
    twitterImage: DEFAULT_IMAGE,
    canonicalUrl: 'https://horusdesk.com/unsubscribe',
    robots: 'noindex, nofollow',
    priority: 0.3,
    changefreq: 'yearly',
    lastmod: '2026-06-12',
  },
];

export function getRouteMeta(path: string): RouteMeta | undefined {
  return siteRoutes.find((route) => route.path === path);
}
