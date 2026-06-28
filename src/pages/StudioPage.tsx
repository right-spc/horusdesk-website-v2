import { SEOHead } from '@/components/layout/SEOHead';
import { generateHowToSchema, generateFAQPageSchema } from '@/lib/seo';
import { StudioHeroSection } from '@/sections/studio/StudioHeroSection';
import { StudioTrustBar } from '@/sections/studio/StudioTrustBar';
import { StudioServicesSection } from '@/sections/studio/StudioServicesSection';
import { StudioWhyCustomSection } from '@/sections/studio/StudioWhyCustomSection';
import { StudioCaseStudiesSection } from '@/sections/studio/StudioCaseStudiesSection';
import { StudioTechStackSection } from '@/sections/studio/StudioTechStackSection';
import { StudioProcessSection } from '@/sections/studio/StudioProcessSection';
import { StudioAuditCTASection } from '@/sections/studio/StudioAuditCTASection';
import { StudioComparisonSection } from '@/sections/studio/StudioComparisonSection';
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
  areaServed: 'Global',
};

const howToSchema = generateHowToSchema({
  name: 'How Horus Desk Software Studio works',
  description: 'A 5-step process from discovery to handoff for custom software development.',
  url: 'https://horusdesk.com/studio',
  steps: [
    { name: 'Discovery', text: 'We interview your team, map your workflows, and identify the real bottlenecks. Not surface-level requirements — we find the root problem.', anchor: 'discovery' },
    { name: 'Scope', text: 'Fixed deliverables, fixed timeline, fixed price. No scope creep surprises. You know exactly what you\'re getting before we write a single line of code.', anchor: 'scope' },
    { name: 'Sprint', text: 'Weekly demos, not monthly reports. You see working software every 7 days and can pivot immediately if priorities change.', anchor: 'sprint' },
    { name: 'Launch', text: 'We handle deployment, SSL, DNS, monitoring, and backups. Your tool goes live without you touching a server.', anchor: 'launch' },
    { name: 'Handoff', text: 'Full documentation, source code repository access, and team training. You can maintain it in-house or keep us on retainer.', anchor: 'handoff' },
  ],
});

const faqPageSchema = generateFAQPageSchema([
  {
    question: 'Do I own the source code?',
    answer: 'Yes. Everything we build is yours. We deliver the full source code repository, documentation, and deployment credentials at handoff. You can modify it, host it elsewhere, or hire another team — no restrictions.',
  },
  {
    question: 'What if I need changes after launch?',
    answer: 'We offer monthly retainers for ongoing development, or you can hire us ad-hoc for specific updates. Alternatively, your in-house team can take over since you own the full codebase and documentation.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'React, Next.js, TypeScript for web. React Native or Flutter for mobile. Node.js, Python, or Go for backends. PostgreSQL or Supabase for databases. We pick the stack that fits your project, not our comfort zone.',
  },
  {
    question: 'Can you integrate with our existing tools?',
    answer: 'Yes. We build native API integrations with whatever you already use — QuickBooks, Stripe, Twilio, Google Calendar, or internal systems. No Zapier workarounds. Real, robust integrations.',
  },
]);

export function StudioPage() {
  return (
    <>
      <SEOHead
        title="Software Studio | Custom Development Built From Scratch"
        description="Custom web apps, mobile development, and AI integrations built from scratch. You own the code and data. No subscriptions. Projects from $1,800."
        canonicalUrl="https://horusdesk.com/studio"
        ogType="product"
        ogTitle="Software Studio | Custom Development Built From Scratch"
        ogDescription="Custom web apps, mobile development, and AI integrations built from scratch. You own the code and data. No subscriptions. Projects from $1,800."
        ogUrl="https://horusdesk.com/studio"
        ogImage="https://horusdesk.com/og-default.png"
        twitterTitle="Software Studio | Custom Development Built From Scratch"
        twitterDescription="Custom web apps, mobile development, and AI integrations built from scratch. You own the code and data. No subscriptions. Projects from $1,800."
        twitterImage="https://horusdesk.com/og-default.png"
        jsonLd={[organizationSchema, serviceSchema, howToSchema]}
        jsonLdLast={faqPageSchema}
      />
      <main id="main-content">
        <StudioHeroSection />
        <StudioTrustBar />
        <StudioServicesSection />
        <StudioWhyCustomSection />
        <StudioTechStackSection />
        <StudioProcessSection />
        <StudioAuditCTASection />
        <StudioComparisonSection />
        <StudioCaseStudiesSection />
        <StudioFAQSection />
      </main>
    </>
  );
}
