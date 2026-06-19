import { SEOHead } from '@/components/layout/SEOHead';
import { generateHowToSchema, generateFAQPageSchema } from '@/lib/seo';
import { TalentHeroSection } from '@/sections/talent/TalentHeroSection';
import { TalentTrustBar } from '@/sections/talent/TalentTrustBar';
import { TalentWhyCairoSection } from '@/sections/talent/TalentWhyCairoSection';
import { TalentQualitySection } from '@/sections/talent/TalentQualitySection';
import { TalentComparisonSection } from '@/sections/talent/TalentComparisonSection';
import { TalentProcessSection } from '@/sections/talent/TalentProcessSection';
import { TalentFAQSection } from '@/sections/talent/TalentFAQSection';

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
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'hello@horusdesk.com',
    availableLanguage: 'English',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Horus Desk Managed Teams',
  provider: {
    '@type': 'Organization',
    name: 'Horus Desk',
  },
  areaServed: 'Global',
  description: 'Fully managed customer support and sales teams based in Cairo. Dedicated account management. No hiring required. From $10/hour per agent. 3-month proof of concept with no long-term contracts.',
  offers: {
    '@type': 'Offer',
    price: '10',
    priceCurrency: 'USD',
    unitText: 'HOUR',
  },
};

const howToSchema = generateHowToSchema({
  name: 'How Horus Desk Managed Teams works',
  description: 'A simple 4-step process to recruit, train, manage, and scale your outsourced customer support and sales team.',
  url: 'https://horusdesk.com/teams',
  steps: [
    { name: 'Recruit', text: 'We source university-educated candidates matched to your industry — support, sales, or back-office. You review final candidates before we hire.', anchor: 'recruit' },
    { name: 'Train', text: 'Full-time immersion in your product, tone, tools, and escalation rules. As quick as 3 days for simple setups. As long as needed for complex ones.', anchor: 'train' },
    { name: 'Manage', text: 'Your account director sets strategy. Our Cairo operations manager handles daily supervision, scheduling, and coaching. You stay hands-off.', anchor: 'manage' },
    { name: 'Scale', text: 'Need 3 more agents for busy season? Reduce to 2 in slow months? Give us 30 days notice and we adjust — no layoffs, no legal risk, no drama.', anchor: 'scale' },
  ],
});

const faqPageSchema = generateFAQPageSchema([
  {
    question: 'Where are your agents based?',
    answer: 'All agents are based in Cairo, Egypt. They work from professional offices with fiber connectivity, backup power, and on-site operations managers.',
  },
  {
    question: 'What timezone coverage do you offer?',
    answer: 'Cairo is a bustling city that never sleeps. We can provide 24/7 coverage as needed — morning, night, weekend, or holiday shifts.',
  },
  {
    question: 'Do you provide equipment and software?',
    answer: 'It depends on your preference. Some clients like to provide their own hardware and licenses. Others want us to handle everything from A to Z. We customize per engagement.',
  },
  {
    question: 'Can I interview agents before they start?',
    answer: 'Yes.',
  },
  {
    question: 'What languages do your agents speak?',
    answer: 'We can hire for any language. Egypt is rich with English, Spanish, French, German, and Russian speakers. If you need a specific language, we\'ll source for it.',
  },
]);

export function TalentPage() {
  return (
    <>
      <SEOHead
        title="Managed Teams | Customer Support & Sales Teams from $10/hour"
        description="Fully managed customer support and sales teams based in Cairo. University-educated agents, 24/7 coverage, no long-term contracts. Scale monthly. From $10/hour."
        canonicalUrl="https://horusdesk.com/teams"
        ogType="product"
        ogTitle="Managed Teams | Customer Support & Sales Teams from $10/hour"
        ogDescription="Fully managed customer support and sales teams based in Cairo. University-educated agents, 24/7 coverage, no long-term contracts. Scale monthly. From $10/hour."
        ogUrl="https://horusdesk.com/teams"
        ogImage="https://horusdesk.com/og-talent.png"
        twitterTitle="Managed Teams | Customer Support & Sales Teams from $10/hour"
        twitterDescription="Fully managed customer support and sales teams based in Cairo. University-educated agents, 24/7 coverage, no long-term contracts. Scale monthly. From $10/hour."
        twitterImage="https://horusdesk.com/og-talent.png"
        jsonLd={[organizationSchema, serviceSchema, howToSchema]}
        jsonLdLast={faqPageSchema}
      />
      <main id="main-content">
        <TalentHeroSection />
        <TalentTrustBar />
        <TalentWhyCairoSection />
        <TalentQualitySection />
        <TalentComparisonSection />
        <TalentProcessSection />
        <TalentFAQSection />
      </main>
    </>
  );
}
