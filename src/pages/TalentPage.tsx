import { SEOHead } from '@/components/layout/SEOHead';
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
  areaServed: 'US',
  description: 'Fully managed customer support and sales teams based in Cairo. US account management. No hiring required. From $10/hour per agent. 3-month proof of concept with no long-term contracts.',
  offers: {
    '@type': 'Offer',
    price: '10',
    priceCurrency: 'USD',
    unitText: 'HOUR',
  },
};

export function TalentPage() {
  return (
    <>
      <SEOHead
        title="Managed Teams | Customer Support & Sales Teams from $10/hour"
        description="Fully managed customer support and sales teams based in Cairo. US account management. No hiring required. From $10/hour per agent. 3-month proof of concept with no long-term contracts."
        keywords="outsourced customer support, BPO services, managed sales team, remote customer service, Egypt BPO, virtual sales team, customer support outsourcing"
        canonicalUrl="https://horusdesk.com/teams"
        ogType="service"
        ogTitle="Managed Teams | Customer Support & Sales Teams from $10/hour"
        ogDescription="Fully managed customer support and sales teams based in Cairo. US account management. No hiring required. From $10/hour per agent. 3-month proof of concept with no long-term contracts."
        ogUrl="https://horusdesk.com/teams"
        ogImage="https://horusdesk.com/og-talent.png"
        twitterTitle="Managed Teams | Customer Support & Sales Teams from $10/hour"
        twitterDescription="Fully managed customer support and sales teams based in Cairo. US account management. No hiring required. From $10/hour per agent. 3-month proof of concept with no long-term contracts."
        twitterImage="https://horusdesk.com/og-talent.png"
        jsonLd={[organizationSchema, serviceSchema]}
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
