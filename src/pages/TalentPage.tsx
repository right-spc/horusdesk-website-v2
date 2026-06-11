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
  name: 'Managed Teams',
  provider: {
    '@type': 'Organization',
    name: 'Horus Desk',
  },
  areaServed: 'US',
  description: 'Managed customer support and sales teams. Cairo-based talent with dedicated account management. Services include L1/L2 support, SDR/BDR teams, and back office operations.',
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
        title="Managed Teams | US-Managed Support & Sales Teams in Cairo"
        description="US-managed customer support and sales teams based in Cairo. Fully recruited, trained, and supervised. $10–35/hr per agent. Start in 14 days. Scale monthly. 3-month proof of concept, then annual contract."
        keywords="outsourced customer support, BPO services, managed sales team, remote customer service, Egypt BPO, virtual sales team, Cairo outsourcing"
        canonical="https://horusdesk.com/teams"
        ogType="service"
        ogTitle="Managed Teams | US-Managed Support & Sales Teams in Cairo"
        ogDescription="Skip the hiring process. Managed Teams provides fully managed customer support and sales teams with dedicated account management. $10–35/hr per agent. Start in 14 days."
        ogUrl="https://horusdesk.com/teams"
        ogImage="https://horusdesk.com/og-talent.png"
        twitterTitle="Managed Teams | US-Managed Support & Sales Teams in Cairo"
        twitterDescription="Skip the hiring process. Managed Teams provides fully managed customer support and sales teams with dedicated account management. $10–35/hr per agent. Start in 14 days."
        twitterImage="https://horusdesk.com/og-talent.png"
        jsonLd={[organizationSchema, serviceSchema]}
      />
      <main>
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
