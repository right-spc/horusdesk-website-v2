import { SEOHead } from '@/components/layout/SEOHead';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';
import { caseStudies } from '@/data/caseStudies';
import { Phone, BarChart3, ArrowLeft, ArrowRight, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Phone,
  BarChart3,
};

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
};

const collectionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Case Studies | Horus Desk',
  description:
    'Explore real custom software projects built by Horus Desk — from softphone + CRM platforms to employee and customer dashboards.',
  url: 'https://horusdesk.com/case-studies',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Horus Desk',
    url: 'https://horusdesk.com',
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export function CaseStudiesPage() {
  return (
    <>
      <SEOHead
        title="Case Studies | Custom Software Built From Scratch"
        description="Explore real custom software projects built by Horus Desk — from softphone + CRM platforms to employee and customer dashboards."
        canonicalUrl="https://horusdesk.com/case-studies"
        ogType="website"
        ogTitle="Case Studies | Custom Software Built From Scratch"
        ogDescription="Explore real custom software projects built by Horus Desk — from softphone + CRM platforms to employee and customer dashboards."
        ogUrl="https://horusdesk.com/case-studies"
        ogImage="https://horusdesk.com/og-studio.png"
        twitterTitle="Case Studies | Custom Software Built From Scratch"
        twitterDescription="Explore real custom software projects built by Horus Desk — from softphone + CRM platforms to employee and customer dashboards."
        twitterImage="https://horusdesk.com/og-studio.png"
        jsonLd={[organizationSchema, collectionPageSchema]}
      />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[50vh] flex items-center bg-navy overflow-hidden pt-[100px] pb-16"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(124,77,255,0.06) 0%, transparent 60%)',
          }}
        >
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/studio"
                className="inline-flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#7C4DFF] transition-colors duration-300 mb-8"
              >
                <ArrowLeft size={16} />
                Back to Software Studio
              </Link>

              <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
                Proof of Work
              </p>
              <h1 className="text-4xl lg:text-6xl font-medium text-white leading-[1.1] tracking-tight mb-6 max-w-4xl">
                Case Studies
              </h1>
              <p className="text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
                Real tools we built for ourselves — and can build for you. Each case study breaks down the problem, the solution, the stack, and the savings.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="bg-navy-light py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <SectionWrapper className="text-center mb-16">
              <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
                What We Built
              </p>
              <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
                Tools we built from scratch
              </h2>
            </SectionWrapper>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid md:grid-cols-2 gap-8"
            >
              {caseStudies.map((study) => {
                const Icon = iconMap[study.iconName] || BarChart3;
                return (
                  <motion.div
                    key={study.slug}
                    variants={fadeUp}
                    className="group bg-navy border border-[rgba(226,232,240,0.08)] rounded-2xl p-8 hover:border-[rgba(124,77,255,0.3)] transition-colors duration-300"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(124,77,255,0.1)] border border-[rgba(124,77,255,0.2)] flex items-center justify-center">
                        <Icon className="text-[#7C4DFF]" size={24} />
                      </div>
                      <ArrowRight
                        size={20}
                        className="text-[#94A3B8] group-hover:text-[#7C4DFF] group-hover:translate-x-1 transition-all duration-300"
                      />
                    </div>

                    <h3 className="text-xl font-medium text-white mb-4">{study.title}</h3>
                    <p className="text-[#94A3B8] leading-relaxed mb-6">{study.description}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-white bg-[rgba(124,77,255,0.1)] border border-[rgba(124,77,255,0.2)] rounded-full px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-2 text-[#7C4DFF] hover:underline text-sm font-medium"
                    >
                      Read Case Study
                      <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <SectionWrapper>
              <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2] mb-6">
                Want a similar system for your business?
              </h2>
              <p className="text-lg text-[#94A3B8] mb-8">
                We can build custom software tailored to your workflow — with no per-seat fees and no vendor lock-in.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <ChatButton>Ask Horus AI</ChatButton>
                <CalendarButton>Book a Discovery Call</CalendarButton>
              </div>
            </SectionWrapper>
          </div>
        </section>
      </main>
    </>
  );
}
