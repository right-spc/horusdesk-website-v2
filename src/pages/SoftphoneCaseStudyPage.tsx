import { SEOHead } from '@/components/layout/SEOHead';
import { generateArticleSchema } from '@/lib/seo';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';
import { Phone, Voicemail, Users, BarChart3, Shield, Database, Check, X, ArrowLeft, Zap } from 'lucide-react';

const softphoneFeatures = [
  { icon: Phone, label: 'Browser-based WebRTC calling' },
  { icon: Voicemail, label: 'Voicemail inbox with playback' },
  { icon: Users, label: 'Live supervisor dashboard' },
  { icon: BarChart3, label: 'Call logs, recordings & dispositions' },
  { icon: Database, label: 'Integrated CRM & lead management' },
  { icon: Shield, label: 'Role-based access & audit trail' },
];

const costRows = [
  { label: 'Horus Desk (custom)', cost: '~$150/mo', note: 'Supabase + Telnyx voice usage' },
  { label: 'VoIP / softphone', cost: '$75–195/mo', note: 'Aircall, RingCentral, or CloudTalk for 3 users' },
  { label: 'CRM', cost: '$60–270/mo', note: 'HubSpot Starter/Pro, Salesforce, or Pipedrive for 3 users' },
  { label: 'Outreach / sequences', cost: '$37–300/mo', note: 'Instantly, Outreach.io, or Salesloft' },
  { label: 'Automation / integrations', cost: '$20–70/mo', note: 'Zapier, Make.com, or N8N for workflows' },
  { label: 'Call recording & QA', cost: '$300–600+/mo', note: 'Gong, Chorus, or similar for 3 users' },
];

const techStack = ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Telnyx'];

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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export function SoftphoneCaseStudyPage() {
  return (
    <>
      <SEOHead
        title="Case Study | Custom Sales & Support Platform Built From Scratch"
        description="See how Horus Desk built a custom WebRTC softphone + CRM platform in React and Supabase, replacing a $500+/mo SaaS stack and saving $15,000/year."
        canonicalUrl="https://horusdesk.com/case-studies/softphone"
        ogTitle="Case Study | Custom Sales & Support Platform Built From Scratch"
        ogDescription="See how Horus Desk built a custom WebRTC softphone + CRM platform in React and Supabase, replacing a $500+/mo SaaS stack and saving $15,000/year."
        ogUrl="https://horusdesk.com/case-studies/softphone"
        ogType="article"
        ogImage="https://horusdesk.com/og-default.png"
        twitterTitle="Case Study | Custom Softphone + CRM Built From Scratch"
        twitterDescription="See how Horus Desk built a custom WebRTC softphone + CRM platform in React and Supabase, replacing a $500+/mo SaaS stack and saving $15,000/year."
        twitterImage="https://horusdesk.com/og-default.png"
        jsonLd={[
          organizationSchema,
          generateArticleSchema({
            headline: 'Case Study | Custom Sales & Support Platform Built From Scratch',
            description: 'See how Horus Desk built a custom WebRTC softphone + CRM platform in React and Supabase, replacing a $500+/mo SaaS stack and saving $15,000/year.',
            image: 'https://horusdesk.com/og-default.png',
            url: 'https://horusdesk.com/case-studies/softphone',
          }),
        ]}
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
                CASE STUDY
              </p>
              <h1 className="text-4xl lg:text-6xl font-medium text-white leading-[1.1] tracking-tight mb-6 max-w-4xl">
                We Skipped the $500+/Month Sales Tool Stack
              </h1>
              <p className="text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
                Why we built our own softphone + CRM platform from day one instead of buying the usual patchwork of VoIP, CRM, outreach, and automation tools.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="bg-navy-light py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <h2 className="text-2xl lg:text-3xl font-medium text-white mb-6">The Problem We Saw</h2>
                <div className="space-y-4 text-[#94A3B8] leading-relaxed">
                  <p>
                    Most sales and support teams buy a stack of subscriptions: a VoIP dialer, a CRM, an outreach tool, an integration layer, and a call-recording app for QA.
                  </p>
                  <p>
                    Each tool charges per user. None of them talk to each other cleanly. Agents jump between tabs. Supervisors export CSVs to figure out what happened. And every new hire adds another $200–500 to the monthly bill.
                  </p>
                  <p>
                    For a 3-agent team, that stack quickly reaches $500–1,400+/month for software that still doesn't fit the workflow — and the business doesn't own any of it.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <h2 className="text-2xl lg:text-3xl font-medium text-white mb-6">Our Solution</h2>
                <div className="space-y-4 text-[#94A3B8] leading-relaxed">
                  <p>
                    We built one platform from the start that covers the entire workflow: a WebRTC softphone, a full CRM, lead management, outbound campaigns, call recordings, and automated workflows — all using React, TypeScript, Supabase, and Telnyx.
                  </p>
                  <p>
                    Agents make and receive calls, listen to voicemails, update pipelines, log dispositions, and view the full lead record in one screen. Supervisors monitor live status, review recordings, and coach the team without opening a second app.
                  </p>
                  <p>
                    Because we own the code, there are no per-seat licenses. We pay roughly $150/month total for Supabase plus Telnyx voice usage at about 0.5¢ per minute — even as the team grows.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="bg-navy py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
                  THE IMPACT
                </p>
                <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2] mb-6">
                  One screen. No tab switching. No confusion.
                </h2>
                <p className="text-[#94A3B8] leading-relaxed mb-6">
                  We never wanted our team juggling five different apps to handle a single customer interaction. By designing the workflow around one platform from the beginning, agents spend less time navigating tools and more time actually talking to customers.
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="space-y-4"
              >
                {[
                  'One screen for dialer, CRM, and lead history',
                  'Call notes and dispositions auto-attach to the lead record',
                  'Supervisors see live status without asking for updates',
                  'New hires train faster because the workflow is unified',
                  'No integration glue or copy-pasting between systems',
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    className="flex items-start gap-3 bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-xl p-4"
                  >
                    <Check size={18} className="text-[#7C4DFF] flex-shrink-0 mt-0.5" />
                    <span className="text-white text-sm">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-navy-light py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <SectionWrapper className="text-center mb-16">
              <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
                WHAT WE BUILT
              </p>
              <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
                One platform for calls, CRM, and coaching
              </h2>
            </SectionWrapper>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {softphoneFeatures.map((feature) => (
                <motion.div
                  key={feature.label}
                  variants={fadeUp}
                  className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-2xl p-8"
                >
                  <feature.icon className="text-[#7C4DFF] mb-4" size={28} />
                  <h3 className="text-lg font-medium text-white">{feature.label}</h3>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12 flex flex-wrap justify-center gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-white bg-[rgba(124,77,255,0.1)] border border-[rgba(124,77,255,0.2)] rounded-full px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="bg-navy py-16 lg:py-24">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            <SectionWrapper className="text-center mb-12">
              <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
                THE NUMBERS
              </p>
              <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
                Monthly cost for a 3-agent team
              </h2>
            </SectionWrapper>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden rounded-xl border border-[rgba(226,232,240,0.08)]"
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[rgba(226,232,240,0.04)]">
                    <th className="text-left py-4 px-6 text-[#94A3B8] font-medium">Stack</th>
                    <th className="text-left py-4 px-6 text-[#94A3B8] font-medium">Monthly</th>
                    <th className="text-left py-4 px-6 text-[#94A3B8] font-medium hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {costRows.map((row, index) => {
                    const isCustom = index === 0;
                    return (
                      <tr
                        key={row.label}
                        className={`border-t border-[rgba(226,232,240,0.04)] ${isCustom ? 'bg-[rgba(124,77,255,0.05)]' : ''}`}
                      >
                        <td className="py-4 px-6">
                          <span className={`inline-flex items-center gap-2 ${isCustom ? 'text-white font-medium' : 'text-[#94A3B8]'}`}>
                            {isCustom ? <Check size={16} className="text-[#7C4DFF]" /> : <X size={16} className="text-red-400" />}
                            {row.label}
                          </span>
                        </td>
                        <td className={`py-4 px-6 text-lg ${isCustom ? 'text-[#7C4DFF] font-medium' : 'text-white'}`}>
                          {row.cost}
                        </td>
                        <td className="py-4 px-6 text-[#94A3B8] hidden sm:table-cell">
                          {row.note}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 bg-[rgba(124,77,255,0.05)] border border-[rgba(124,77,255,0.1)] rounded-2xl p-8 text-center"
            >
              <p className="text-white font-medium mb-2">
                What we avoided paying
              </p>
              <p className="text-[#94A3B8]">
                A typical off-the-shelf sales stack costs <span className="text-[#7C4DFF] font-medium">$500–1,400+ per month</span> for a 3-agent team. The custom platform costs <span className="text-[#7C4DFF] font-medium">~$150 per month</span>. That's roughly <span className="text-[#7C4DFF] font-medium">$4,200–15,000 per year</span> that never left the business — and the software is built exactly for our workflow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Full Control */}
        <section className="bg-navy-light py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
                  FULL CONTROL
                </p>
                <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2] mb-6">
                  We own the roadmap — and the fix
                </h2>
                <p className="text-[#94A3B8] leading-relaxed mb-6">
                  Because the platform is our own code, adding a feature means reading our own codebase, not Zapier's docs or a vendor's API guide. When an agent reports an issue, we don't file a support ticket and wait for another company's queue. We follow the code, find the source, and fix it — usually within minutes.
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="space-y-4"
              >
                {[
                  'Simple feature requests ship the same day',
                  'No vendor support queues or escalation delays',
                  'Issues debugged by following our own code',
                  'No black-box integrations to work around',
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    className="flex items-start gap-3 bg-navy border border-[rgba(226,232,240,0.08)] rounded-xl p-4"
                  >
                    <Zap size={18} className="text-[#7C4DFF] flex-shrink-0 mt-0.5" />
                    <span className="text-white text-sm">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
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
                We can build a custom softphone, CRM, or integrated calling platform tailored to your workflow — with no per-seat fees and no vendor lock-in.
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
