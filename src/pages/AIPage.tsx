import { SEOHead } from '@/components/layout/SEOHead';
import { AIHeroSection } from '@/sections/ai/AIHeroSection';
import { AIFeaturesSection } from '@/sections/ai/AIFeaturesSection';
import { AIPricingSection } from '@/sections/ai/AIPricingSection';
import { AIFAQSection } from '@/sections/ai/AIFAQSection';

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
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '499',
    priceCurrency: 'USD',
    priceValidUntil: '2027-06-11',
    availability: 'https://schema.org/InStock',
  },
  description: 'AI receptionist that qualifies leads and books meetings via website chat and email in 6 languages. Supports Gmail/Outlook and Google Calendar integration. 7,500 responses included.',
};

export function AIPage() {
  return (
    <>
      <SEOHead
        title="AI Agent | Automated Lead Qualification & Booking in 6 Languages"
        description="AI Agent is an AI receptionist for website chat and email in 6 languages. Smart lead qualification, calendar booking, and 24/7 coverage. 7,500 responses included. Dedicated account manager. Starting at $499/mo."
        keywords="AI chatbot, website chat widget, email automation, lead qualification, calendar booking, AI receptionist, customer service automation, multilingual chatbot"
        canonical="https://horusdesk.com/ai"
        ogType="product"
        ogTitle="AI Agent | Automated Lead Qualification & Booking"
        ogDescription="AI receptionist for website chat and email in 6 languages. Qualifies leads, books meetings, and integrates with Gmail/Outlook and Google Calendar. 7,500 responses included."
        ogUrl="https://horusdesk.com/ai"
        ogImage="https://horusdesk.com/og-ai.png"
        twitterTitle="AI Agent | Automated Lead Qualification & Booking"
        twitterDescription="AI receptionist for website chat and email in 6 languages. Qualifies leads, books meetings, and integrates with Gmail/Outlook and Google Calendar. 7,500 responses included."
        twitterImage="https://horusdesk.com/og-ai.png"
        jsonLd={[organizationSchema, softwareSchema]}
      />
      <main>
        <AIHeroSection />
        <AIFeaturesSection />
        <AIPricingSection />
        <AIFAQSection />
      </main>
    </>
  );
}
