import { SEOHead } from '@/components/layout/SEOHead';
import { PricingHeroSection } from '@/sections/pricing/PricingHeroSection';
import { PricingCardsSection } from '@/sections/pricing/PricingCardsSection';
import { PricingCTASection } from '@/sections/pricing/PricingCTASection';

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

const aiAgentProduct = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Horus AI Agent',
  description: 'AI receptionist for website chat and email in 6 languages',
  offers: {
    '@type': 'Offer',
    price: '499',
    priceCurrency: 'USD',
    billingIncrement: 'P1M',
    description: 'Monthly subscription',
  },
};

const managedTeamsProduct = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Horus Managed Teams',
  description: 'Managed customer support and sales teams',
  offers: {
    '@type': 'Offer',
    price: '10',
    priceCurrency: 'USD',
    unitText: 'per hour',
    description: 'Hourly rate',
  },
};

const softwareStudioProduct = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Horus Software Studio',
  description: 'Custom development and AI integrations built from scratch',
  offers: {
    '@type': 'Offer',
    price: '1800',
    priceCurrency: 'USD',
    description: 'Starting project price',
  },
};

export function PricingPage() {
  return (
    <>
      <SEOHead
        title="Pricing | Horus Desk AI, Teams & Studio"
        description="Transparent pricing for Horus Desk services: AI Agent from $499/mo, Managed Teams from $10/hr, and custom Software Studio projects from $1,800."
        canonicalUrl="https://horusdesk.com/pricing"
        ogTitle="Pricing | Horus Desk AI, Talent & Studio"
        ogDescription="Transparent pricing for Horus Desk services: AI Agent from $499/mo, Managed Teams from $10/hr, and custom Software Studio projects from $1,800."
        ogUrl="https://horusdesk.com/pricing"
        ogImage="https://horusdesk.com/og-pricing.png"
        twitterTitle="Pricing | Horus Desk AI, Talent & Studio"
        twitterDescription="Transparent pricing for Horus Desk services: AI Agent from $499/mo, Managed Teams from $10/hr, and custom Software Studio projects from $1,800."
        twitterImage="https://horusdesk.com/og-pricing.png"
        jsonLd={[organizationSchema, aiAgentProduct, managedTeamsProduct, softwareStudioProduct]}
      />
      <main id="main-content">
        <PricingHeroSection />
        <PricingCardsSection />
        <PricingCTASection />
      </main>
    </>
  );
}
