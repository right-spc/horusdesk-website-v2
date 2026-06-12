import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { SEOHead } from '@/components/layout/SEOHead';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { HeroSection } from '@/sections/home/HeroSection';
import { ChatBannerSection } from '@/sections/home/ChatBannerSection';
import { ServiceRouterSection } from '@/sections/home/ServiceRouterSection';


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

const noRiskCards = [
  {
    title: 'Free Setup and No contracts',
    body: 'We set up Horus AI on your site at no setup cost and run a pilot so you can see it qualify real leads before you commit to the service.',
    borderColor: 'border-t-[#64FFDA]',
    linkColor: 'text-[#64FFDA]',
    link: '/ai',
  },
  {
    title: '3-Month Proof of Concept',
    body: 'Start Horus Talent with a 3-month proof of concept. You pay for the service, but you are not locked into a long-term contract until you are ready.',
    borderColor: 'border-t-[#FFAB40]',
    linkColor: 'text-[#FFAB40]',
    link: '/teams',
  },
  {
    title: 'Free Blueprint & System Audit',
    body: 'We audit your current system and deliver a full technical blueprint detailing exactly what we will build, the tools we will use, all costs, and ongoing expenses before you spend a dollar.',
    borderColor: 'border-t-[#7C4DFF]',
    linkColor: 'text-[#7C4DFF]',
    link: '/studio',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

function NoRiskSection() {
  return (
    <section className="bg-navy pt-8 lg:pt-10 pb-0">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-[#64FFDA] mb-4">
            NO UPFRONT RISK
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2] mb-6">
            We earn your trust before you pay
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            We know you have options. That is why every conversation starts free. No contracts, no guesswork, no commitment required.
          </p>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {noRiskCards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className={`
                bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-2xl p-8
                border-t ${card.borderColor}
                transition-all duration-500 ease-out
                hover:-translate-y-1 hover:border-[rgba(102,255,218,0.15)] hover:shadow-card-glow
              `}
            >
              <h3 className="text-xl font-medium text-white mb-3">{card.title}</h3>
              <p className="text-[#64748B] mb-6">{card.body}</p>
              <Link
                to={card.link}
                className={`${card.linkColor} hover:underline text-sm font-medium`}
              >
                Learn more &rarr;
              </Link>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <SEOHead
        title="Horus Desk | AI Receptionist for US Service Businesses"
        description="Horus Desk is an AI receptionist that qualifies leads and books meetings via website chat and email in 6 languages. We set it up for you. Starting at $499/month. No DIY required."
        keywords="AI receptionist, lead qualification, chatbot for business, automated booking, AI customer service, US service businesses, multilingual chatbot"
        canonicalUrl="https://horusdesk.com/"
        ogTitle="Horus Desk | AI Receptionist for US Service Businesses"
        ogDescription="Horus Desk is an AI receptionist that qualifies leads and books meetings via website chat and email in 6 languages. We set it up for you. Starting at $499/month. No DIY required."
        ogUrl="https://horusdesk.com/"
        ogImage="https://horusdesk.com/og-home.png"
        twitterTitle="Horus Desk | AI Receptionist for US Service Businesses"
        twitterDescription="Horus Desk is an AI receptionist that qualifies leads and books meetings via website chat and email in 6 languages. We set it up for you. Starting at $499/month. No DIY required."
        twitterImage="https://horusdesk.com/og-home.png"
        jsonLd={[organizationSchema, websiteSchema]}
      />
      <main id="main-content">
        <HeroSection />
        <ServiceRouterSection />
        <NoRiskSection />
        <ChatBannerSection />
      </main>
    </>
  );
}
