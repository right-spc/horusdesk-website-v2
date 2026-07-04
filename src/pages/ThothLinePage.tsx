import { SEOHead } from '@/components/layout/SEOHead';
import { generateHowToSchema, generateFAQPageSchema } from '@/lib/seo';
import { ThothLineHeroSection } from '@/sections/thothline/ThothLineHeroSection';
import { ThothLineProblemSection } from '@/sections/thothline/ThothLineProblemSection';
import { ThothLineSolutionSection } from '@/sections/thothline/ThothLineSolutionSection';
import { ThothLineFeaturesSection } from '@/sections/thothline/ThothLineFeaturesSection';
import { ThothLineHowItWorksSection } from '@/sections/thothline/ThothLineHowItWorksSection';
import { ThothLinePricingSection } from '@/sections/thothline/ThothLinePricingSection';
import { ThothLineFAQSection } from '@/sections/thothline/ThothLineFAQSection';
import { ThothLineEcosystemBanner } from '@/sections/thothline/ThothLineEcosystemBanner';
import { ThothLineCTASection } from '@/sections/thothline/ThothLineCTASection';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Horus Desk',
  url: 'https://horusdesk.com',
  logo: 'https://horusdesk.com/logo.png',
  sameAs: [
    'https://www.linkedin.com/company/right-space-llc',
    'https://www.facebook.com/horusdesk',
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
  name: 'Thoth Line',
  provider: {
    '@type': 'Organization',
    name: 'Horus Desk',
  },
  description:
    'Thoth Line is a private, custom-programmed Sales Operating System that replaces the typical 6-12 tool sales stack with one unified platform.',
  areaServed: 'Global',
};

const howToSchema = generateHowToSchema({
  name: 'How Thoth Line setup works',
  description: 'A 3-step process from discovery to deployment for your custom Sales Operating System.',
  url: 'https://horusdesk.com/sales-command-center',
  steps: [
    { name: 'Discovery', text: 'You tell us your workflow: stages, routing rules, compliance needs, campaigns.', anchor: 'discovery' },
    { name: 'Programming', text: 'We build your exact process into Thoth Line: IVR, lead distribution, dispositions, email sequences — all hard-coded.', anchor: 'programming' },
    { name: 'Deployment', text: 'Your team logs in. One URL. One system. As fast as 3 days depending on complexity.', anchor: 'deployment' },
  ],
});

const faqPageSchema = generateFAQPageSchema([
  {
    question: 'Is Thoth Line a phone system?',
    answer: 'No. It is a Sales Operating System that includes voice as one channel. We replace your entire tool stack, not just your dialer.',
  },
  {
    question: 'How long does setup take?',
    answer: 'As fast as 3 days for simpler workflows. Complex setups up to 2 weeks. We give a timeline before starting.',
  },
  {
    question: 'Can we change our workflow after launch?',
    answer: 'Yes. Changes are treated as configuration, not rewriting the core. Handled through your dedicated account manager.',
  },
  {
    question: 'What happens if we add or remove agents?',
    answer: 'You only pay for enabled accounts. Add a seat, fee increases. Disable it, it drops to $0 next cycle.',
  },
  {
    question: 'Do we own our data?',
    answer: 'Yes. You own your data, workflow logic, and records.',
  },
  {
    question: 'What if we have 50+ users?',
    answer: 'Platform fee is waived at 50 active seats. You pay only for seats and usage.',
  },
]);

export function ThothLinePage() {
  return (
    <>
      <SEOHead
        title="Thoth Line — Sales Operating System | Plans & Pricing | Horus Desk"
        description="Thoth Line replaces your 6-12 tool sales stack with one custom-programmed platform. Voice, email, leads, compliance, and reporting in a single system."
        canonicalUrl="https://horusdesk.com/sales-command-center"
        ogType="product"
        ogTitle="Thoth Line | Private Sales Operating System"
        ogDescription="Thoth Line replaces your 6-12 tool sales stack with one custom-programmed platform. Voice, email, leads, compliance, and reporting in a single system."
        ogUrl="https://horusdesk.com/sales-command-center"
        ogImage="https://horusdesk.com/og-default.png"
        twitterTitle="Thoth Line | Private Sales Operating System"
        twitterDescription="Thoth Line replaces your 6-12 tool sales stack with one custom-programmed platform. Voice, email, leads, compliance, and reporting in a single system."
        twitterImage="https://horusdesk.com/og-default.png"
        jsonLd={[organizationSchema, serviceSchema, howToSchema]}
        jsonLdLast={faqPageSchema}
      />
      <main id="main-content">
        <ThothLineHeroSection />
        <ThothLineProblemSection />
        <ThothLineSolutionSection />
        <ThothLineFeaturesSection />
        <ThothLineHowItWorksSection />
        <ThothLinePricingSection />
        <ThothLineFAQSection />
        <ThothLineEcosystemBanner />
        <ThothLineCTASection />
      </main>
    </>
  );
}
