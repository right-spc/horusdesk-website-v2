import { Briefcase, Headphones, ShieldCheck, MapPin, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/layout/SEOHead';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { BookingForm } from '@/components/forms/BookingForm';

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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Horus Desk',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cairo',
    addressCountry: 'EG',
  },
  url: 'https://horusdesk.com/contact',
  openingHours: 'Su-Th 09:00-17:00',
};

const contactCards = [
  {
    title: 'Sales & Setup',
    body: 'Questions about pricing, demos, or getting started with Horus Desk.',
    email: 'hello@horusdesk.com',
    icon: Briefcase,
    borderColor: 'border-t-[#64FFDA]',
    iconColor: 'text-[#64FFDA]',
  },
  {
    title: 'Support',
    body: 'Help for existing customers, technical issues, and account questions.',
    email: 'support@horusdesk.com',
    icon: Headphones,
    borderColor: 'border-t-[#FFAB40]',
    iconColor: 'text-[#FFAB40]',
  },
  {
    title: 'Legal & Privacy',
    body: 'Contracts, compliance questions, privacy requests, and legal notices.',
    email: 'legal@horusdesk.com',
    icon: ShieldCheck,
    borderColor: 'border-t-[#7C4DFF]',
    iconColor: 'text-[#7C4DFF]',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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

export function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact Us | Horus Desk"
        description="Book a free discovery call, email our sales and support teams, or visit our operations center in Cairo, Egypt. We reply within 24 hours."
        canonicalUrl="https://horusdesk.com/contact"
        ogTitle="Contact Us | Horus Desk"
        ogDescription="Book a free discovery call, email our sales and support teams, or visit our operations center in Cairo, Egypt. We reply within 24 hours."
        ogUrl="https://horusdesk.com/contact"
        ogImage="https://horusdesk.com/og-home.png"
        twitterTitle="Contact Us | Horus Desk"
        twitterDescription="Book a free discovery call, email our sales and support teams, or visit our operations center in Cairo, Egypt. We reply within 24 hours."
        twitterImage="https://horusdesk.com/og-home.png"
        jsonLd={[organizationSchema, localBusinessSchema]}
      />

      <main id="main-content" className="bg-navy pt-[120px] pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Page header */}
          <SectionWrapper className="mb-12 lg:mb-16">
            <p className="text-xs font-medium tracking-wider uppercase text-[#64FFDA] mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl lg:text-5xl font-medium text-white leading-[1.2] mb-4">
              Let's talk
            </h1>
            <p className="text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
              Whether you want to book a call or send a message, we will get back to you within one business day.
            </p>
          </SectionWrapper>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
            {/* Left column: cards + address */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-6"
            >
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
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
                    <div className="flex items-start gap-5">
                      <div className={`
                        w-12 h-12 rounded-xl bg-navy border border-[rgba(226,232,240,0.08)]
                        flex items-center justify-center shrink-0
                      `}>
                        <Icon size={24} className={card.iconColor} aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-medium text-white mb-2">{card.title}</h2>
                        <p className="text-[#94A3B8] mb-4">{card.body}</p>
                        <a
                          href={`mailto:${card.email}`}
                          className="inline-flex items-center gap-2 text-[#64FFDA] hover:underline text-sm font-medium"
                        >
                          <Mail size={16} aria-hidden="true" />
                          {card.email}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Office address */}
              <motion.div
                variants={cardVariants}
                className="
                  bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-2xl p-8
                  transition-all duration-500 ease-out
                  hover:-translate-y-1 hover:border-[rgba(102,255,218,0.15)] hover:shadow-card-glow
                "
              >
                <div className="flex items-start gap-5">
                  <div className="
                    w-12 h-12 rounded-xl bg-navy border border-[rgba(226,232,240,0.08)]
                    flex items-center justify-center shrink-0
                  ">
                    <MapPin size={24} className="text-[#64FFDA]" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-xl font-medium text-white mb-2">Office</h2>
                    <address className="not-italic text-[#94A3B8] leading-relaxed">
                      Horus Desk / Right Space LLC<br />
                      30B Asmaa Fahmy, Al Golf, Nasr City<br />
                      Cairo Governorate 4451422<br />
                      Arab Republic of Egypt
                    </address>
                    <div className="flex items-center gap-2 mt-4 text-[#94A3B8] text-sm">
                      <Clock size={16} aria-hidden="true" />
                      <span>Sun – Thu, 9:00 AM – 5:00 PM EET</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right column: booking form */}
            <SectionWrapper delay={0.2}>
              <div className="lg:sticky lg:top-24 lg:self-start">
                <div className="bg-surface border border-[rgba(226,232,240,0.08)] rounded-2xl p-8">
                  <h2 className="text-xl font-medium text-white mb-2">
                    Book a Discovery Call
                  </h2>
                  <p className="text-sm text-[#94A3B8] mb-6">
                    Tell us a little about yourself and pick a 30-minute slot on the calendar.
                  </p>
                  <BookingForm />
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </main>
    </>
  );
}
