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
        title="Security & Compliance | SOC 2, GDPR & Data Privacy"
        description="Enterprise-grade security with SOC 2 Type II via Supabase, GDPR compliance, and HIPAA-ready infrastructure. Your data is encrypted and never used to train AI models."
        canonicalUrl="https://horusdesk.com/security"
        ogTitle="Security & Compliance | SOC 2, GDPR & Data Privacy"
        ogDescription="Enterprise-grade security with SOC 2 Type II via Supabase, GDPR compliance, and HIPAA-ready infrastructure. Your data is encrypted and never used to train AI models."
        ogUrl="https://horusdesk.com/security"
        ogImage="https://horusdesk.com/og-security.png"
        twitterTitle="Security & Compliance | SOC 2, GDPR & Data Privacy"
        twitterDescription="Horus Desk security and compliance. Enterprise-grade infrastructure with SOC 2 Type II via Supabase. GDPR compliance. Transparent data practices. No data used for AI training."
        twitterImage="https://horusdesk.com/og-security.png"
        jsonLd={organizationSchema}
      />
      <main id="main-content">
        <SecurityHeroSection />
        <SecurityContentSection />
      </main>
    </>
  );
}
