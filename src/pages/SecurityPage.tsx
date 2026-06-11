import { SEOHead } from '@/components/layout/SEOHead';
import { SecurityHeroSection } from '@/sections/security/SecurityHeroSection';
import { SecurityContentSection } from '@/sections/security/SecurityContentSection';

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

export function SecurityPage() {
  return (
    <>
      <SEOHead
        title="Security & Compliance | Horus Desk SOC 2, GDPR"
        description="Horus Desk security and compliance. Enterprise-grade infrastructure with SOC 2 Type II via Supabase, GDPR compliance, and transparent data practices. No data used for AI training."
        keywords="SOC 2 compliance, GDPR compliance, data security, AI data privacy, secure chatbot"
        canonical="https://horusdesk.com/security"
        ogTitle="Security & Compliance | Horus Desk"
        ogDescription="Enterprise security with SOC 2 Type II infrastructure, GDPR compliance, and transparent data practices. Your data is never used to train AI models."
        ogUrl="https://horusdesk.com/security"
        ogImage="https://horusdesk.com/og-security.png"
        twitterTitle="Security & Compliance | Horus Desk"
        twitterDescription="Enterprise security with SOC 2 Type II infrastructure, GDPR compliance, and transparent data practices. Your data is never used to train AI models."
        twitterImage="https://horusdesk.com/og-security.png"
        jsonLd={organizationSchema}
      />
      <main>
        <SecurityHeroSection />
        <SecurityContentSection />
      </main>
    </>
  );
}
