type BreadcrumbItem = {
  name: string;
  item: string;
};

const breadcrumbNameMap: Record<string, string> = {
  ai: 'AI Agent',
  teams: 'Managed Teams',
  studio: 'Software Studio',
  security: 'Security & Compliance',
  contact: 'Contact Us',
  'privacy-policy': 'Privacy Policy',
  'terms-of-service': 'Terms of Service',
  'case-studies': 'Case Studies',
  softphone: 'Custom Softphone + CRM',
  'ai-agent-dashboards': 'Custom Dashboards',
  blog: 'Blog',
  'vicidial-trap': 'The VICIdial Trap',
};

export function generateBreadcrumbList(canonicalUrl: string) {
  const url = new URL(canonicalUrl);
  const segments = url.pathname.split('/').filter(Boolean);

  const items: BreadcrumbItem[] = [{ name: 'Home', item: 'https://horusdesk.com/' }];
  let currentPath = '';

  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    items.push({
      name: breadcrumbNameMap[segment] || segment,
      item: `https://horusdesk.com${currentPath}`,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function generateArticleSchema({
  headline,
  description,
  image,
  url,
  datePublished = '2026-06-12',
  dateModified = '2026-06-12',
}: {
  headline: string;
  description: string;
  image: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline,
    description,
    image,
    author: {
      '@type': 'Organization',
      name: 'Horus Desk',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Horus Desk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://horusdesk.com/logo.png',
      },
    },
    datePublished,
    dateModified,
    url,
  };
}

export function generateHowToSchema({
  name,
  description,
  steps,
  url,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string; anchor: string }[];
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: `${url}#${step.anchor}`,
    })),
  };
}

export function generateFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
