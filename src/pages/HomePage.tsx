import { SEOHead } from '@/components/layout/SEOHead';
import { HeroSection } from '@/sections/home/HeroSection';
import { ChatBannerSection } from '@/sections/home/ChatBannerSection';
import { ServiceRouterSection } from '@/sections/home/ServiceRouterSection';
import { HowItWorksSection } from '@/sections/home/HowItWorksSection';
import { AISpotlightSection } from '@/sections/home/AISpotlightSection';

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

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://horusdesk.com',
  name: 'Horus Desk',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://horusdesk.com/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export function HomePage() {
  return (
    <>
      <SEOHead
        title="Horus Desk | AI Receptionist for US Service Businesses"
        description="Horus Desk is an AI agent that qualifies leads and books meetings via website chat and email in 6 languages. We set it up for you. Starting at $499/mo. No DIY required."
        keywords="AI receptionist, lead qualification, chatbot for business, automated booking, AI customer service, US service businesses, multilingual chatbot"
        canonical="https://horusdesk.com/"
        ogTitle="Horus Desk | AI Receptionist for US Service Businesses"
        ogDescription="Never miss a lead again. Horus Desk AI Agent handles your website chat and email 24/7, qualifies leads, and books meetings automatically in 6 languages. Setup included."
        ogUrl="https://horusdesk.com/"
        ogImage="https://horusdesk.com/og-home.png"
        twitterTitle="Horus Desk | AI Receptionist for US Service Businesses"
        twitterDescription="Never miss a lead again. Horus Desk AI Agent handles your website chat and email 24/7, qualifies leads, and books meetings automatically in 6 languages. Setup included."
        twitterImage="https://horusdesk.com/og-home.png"
        jsonLd={[organizationSchema, websiteSchema]}
      />
      <main>
        <HeroSection />
        <ChatBannerSection />
        <ServiceRouterSection />
        <HowItWorksSection />
        <AISpotlightSection />
      </main>
    </>
  );
}
