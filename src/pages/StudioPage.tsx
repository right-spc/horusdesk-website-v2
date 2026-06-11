import { SEOHead } from '@/components/layout/SEOHead';
import { StudioHeroSection } from '@/sections/studio/StudioHeroSection';
import { StudioTrustBar } from '@/sections/studio/StudioTrustBar';
import { StudioServicesSection } from '@/sections/studio/StudioServicesSection';
import { StudioWhyCustomSection } from '@/sections/studio/StudioWhyCustomSection';
import { StudioCaseStudiesSection } from '@/sections/studio/StudioCaseStudiesSection';
import { StudioTechStackSection } from '@/sections/studio/StudioTechStackSection';
import { StudioProcessSection } from '@/sections/studio/StudioProcessSection';
import { StudioFAQSection } from '@/sections/studio/StudioFAQSection';

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
  name: 'Software Studio',
  provider: {
    '@type': 'Organization',
    name: 'Horus Desk',
  },
  description: 'Custom web application development, mobile apps, and AI integrations built entirely from scratch. No third-party or no-code tools used. Project-based and retainer options available.',
  areaServed: 'US',
};

export function StudioPage() {
  return (
    <>
      <SEOHead
        title="Software Studio | Custom Development Built From Scratch"
        description="Custom web apps, mobile development, and AI integrations built from scratch. You own the code and data. No subscriptions. No vendor lock-in. Projects from $1,800."
        keywords="custom software development, web app development, mobile app development, AI integration, React development, Next.js development, no code alternative, custom CRM"
        canonical="https://horusdesk.com/studio"
        ogType="service"
        ogTitle="Software Studio | Custom Development Built From Scratch"
        ogDescription="Custom web apps, mobile development, and AI integrations built from scratch. You own the code. No subscriptions. No vendor lock-in. Projects from $1,800."
        ogUrl="https://horusdesk.com/studio"
        ogImage="https://horusdesk.com/og-studio.png"
        twitterTitle="Software Studio | Custom Development Built From Scratch"
        twitterDescription="Custom web apps, mobile development, and AI integrations built from scratch. You own the code. No subscriptions. No vendor lock-in. Projects from $1,800."
        twitterImage="https://horusdesk.com/og-studio.png"
        jsonLd={[organizationSchema, serviceSchema]}
      />
      <main>
        <StudioHeroSection />
        <StudioTrustBar />
        <StudioServicesSection />
        <StudioWhyCustomSection />
        <StudioCaseStudiesSection />
        <StudioTechStackSection />
        <StudioProcessSection />
        <StudioFAQSection />
      </main>
    </>
  );
}
