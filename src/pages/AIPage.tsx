import { SEOHead } from '@/components/layout/SEOHead';
import { generateFAQPageSchema } from '@/lib/seo';
import { AIHeroSection } from '@/sections/ai/AIHeroSection';
import { AIFeaturesSection } from '@/sections/ai/AIFeaturesSection';
import { AIComparisonSection } from '@/sections/ai/AIComparisonSection';
import { AIPricingSection } from '@/sections/ai/AIPricingSection';
import { AIFAQSection } from '@/sections/ai/AIFAQSection';
import { AITrustBar } from '@/sections/ai/AITrustBar';

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

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AI Agent',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web browser',
  offers: {
    '@type': 'Offer',
    price: '499',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    priceValidUntil: '2026-12-31',
  },
  featureList: '24/7 lead qualification, Website chat widget, Email inbox integration, Calendar booking, Smart escalation, 6 languages, Dedicated account manager, Analytics portal',
  description: 'AI receptionist that qualifies leads and books meetings via website chat and email in 6 languages. Supports Gmail/Outlook and Google Calendar integration. 7,500 responses included.',
};

const faqPageSchema = generateFAQPageSchema([
  {
    question: 'What counts as a response?',
    answer: 'One AI response = one credit. Your plan includes 7,500 responses per month.',
  },
  {
    question: 'Can I buy more responses?',
    answer: 'Yes. You can add 1,000 responses for $59 that never expire as long as you\'re subscribed. If you consistently need more, we can build a custom package.',
  },
  {
    question: 'Can I connect both Gmail and Outlook?',
    answer: 'Each agent connects to one inbox only — either Gmail or Outlook. If you need multiple inboxes, we can discuss a custom setup.',
  },
  {
    question: 'Can I cancel?',
    answer: 'Yes, anytime. Flexible monthly billing or annual billing.',
  },
  {
    question: 'Is my data used to train AI models?',
    answer: 'No. Your data is processed via secure APIs and never used to train foundation models. We use Supabase which maintains SOC 2 Type II certification for data storage.',
  },
]);

export function AIPage() {
  return (
    <>
      <SEOHead
        title="AI Agent | Automated Lead Qualification & Booking in 6 Languages"
        description="AI receptionist for website chat and email. Qualifies leads, books meetings, and escalates in 6 languages. 7,500 responses included. Starting at $499/mo with free setup."
        canonicalUrl="https://horusdesk.com/ai"
        ogType="product"
        ogTitle="AI Agent | Automated Lead Qualification & Booking"
        ogDescription="AI receptionist for website chat and email. Qualifies leads, books meetings, and escalates in 6 languages. 7,500 responses included. Starting at $499/mo with free setup."
        ogUrl="https://horusdesk.com/ai"
        ogImage="https://horusdesk.com/og-ai.png"
        twitterTitle="AI Agent | Automated Lead Qualification & Booking"
        twitterDescription="AI receptionist for website chat and email. Qualifies leads, books meetings, and escalates in 6 languages. 7,500 responses included. Starting at $499/mo with free setup."
        twitterImage="https://horusdesk.com/og-ai.png"
        jsonLd={[organizationSchema, softwareSchema]}
        jsonLdLast={faqPageSchema}
      />
      <main id="main-content">
        <AIHeroSection />
        <AITrustBar />
        <AIFeaturesSection />
        <AIComparisonSection />
        <AIPricingSection />
        <AIFAQSection />
      </main>
    </>
  );
}
