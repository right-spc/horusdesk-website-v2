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

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        name: 'Horus AI',
        description: 'AI receptionist for website chat and email in 6 languages',
        offers: {
          '@type': 'Offer',
          price: '499',
          priceCurrency: 'USD',
          priceValidUntil: '2027-06-11',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Horus Talent',
        description: 'Managed customer support and sales teams',
        offers: {
          '@type': 'Offer',
          price: '10',
          priceCurrency: 'USD',
          unitText: 'HOUR',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Horus Studio',
        description: 'Custom development and AI integrations built from scratch',
      },
    },
  ],
};

export function PricingPage() {
  return (
    <>
      <SEOHead
        title="Pricing | Horus Desk AI, Talent & Studio"
        description="Transparent pricing for Horus Desk services. Horus AI from $499/mo with first 3 months at $299. Horus Talent from $10/hr. Horus Studio from $1,800. No hidden fees."
        keywords="AI receptionist pricing, chatbot cost, BPO pricing, outsourcing rates, custom development pricing, software development cost, no code alternative"
        canonical="https://horusdesk.com/pricing"
        ogTitle="Pricing | Horus Desk AI, Talent & Studio"
        ogDescription="Transparent pricing for Horus AI ($499/mo), Horus Talent ($10/hr), and Horus Studio (from $1,800). No hidden fees."
        ogUrl="https://horusdesk.com/pricing"
        ogImage="https://horusdesk.com/og-pricing.png"
        twitterTitle="Pricing | Horus Desk AI, Talent & Studio"
        twitterDescription="Transparent pricing for Horus AI ($499/mo), Horus Talent ($10/hr), and Horus Studio (from $1,800). No hidden fees."
        twitterImage="https://horusdesk.com/og-pricing.png"
        jsonLd={[organizationSchema, itemListSchema]}
      />
      <main>
        <PricingHeroSection />
        <PricingCardsSection />
        <PricingCTASection />
      </main>
    </>
  );
}
