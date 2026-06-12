import { SEOHead } from '@/components/layout/SEOHead';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';
import {
  Building2,
  MessagesSquare,
  BarChart3,
  Palette,
  CreditCard,
  Shield,
  Check,
  X,
  ArrowLeft,
  Zap,
} from 'lucide-react';

const dashboardFeatures = [
  { icon: Building2, label: 'Employee org onboarding & AI configuration' },
  { icon: MessagesSquare, label: 'Customer conversation hub & lead pipeline' },
  { icon: BarChart3, label: 'Real-time analytics & KPI charts' },
  { icon: Palette, label: 'Widget theming & embed-code generator' },
  { icon: CreditCard, label: 'Billing, payments & invoice history' },
  { icon: Shield, label: 'Role-based access & team permissions' },
];

const costRows = [
  { label: 'Horus Desk (custom)', cost: '~$50/mo', note: 'Supabase database only' },
  { label: 'Employee portal / internal tools', cost: '$50–200/mo', note: 'Retool, Bubble, or similar per-user pricing' },
  { label: 'Customer portal / membership', cost: '$50–300/mo', note: 'Outseta, Memberspot, or custom portal platforms' },
  { label: 'Analytics dashboard', cost: '$50–500/mo', note: 'Metabase Cloud, ChartMogul, or embedded analytics' },
  { label: 'Support/helpdesk software', cost: '$60–400/mo', note: 'Zendesk, Intercom, or Freshdesk for small teams' },
  { label: 'Billing/subscription management', cost: '$50–300/mo', note: 'Stripe Billing, Chargebee, or Paddle' },
];

const techStack = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Supabase',
  'shadcn/ui',
  'Recharts',
  'Framer Motion',
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export function AIAgentDashboardsCaseStudyPage() {
  return (
    <>
      <SEOHead
        title="Case Study | Custom Employee & Customer Dashboards Built From Scratch"
        description="How Horus Desk skipped a $300+/month stack of employee portals, customer portals, analytics, and support tools by building custom dashboards that cost under $50/month."
        canonical="https://horusdesk.com/case-studies/ai-agent-dashboards"
        ogTitle="Case Study | Custom Employee & Customer Dashboards Built From Scratch"
        ogDescription="How Horus Desk skipped a $300+/month stack of employee portals, customer portals, analytics, and support tools by building custom dashboards that cost under $50/month."
        ogUrl="https://horusdesk.com/case-studies/ai-agent-dashboards"
        ogImage="https://horusdesk.com/og-studio.png"
        twitterTitle="Case Study | Custom Employee & Customer Dashboards Built From Scratch"
        twitterDescription="How Horus Desk built custom employee and customer dashboards and avoided a $300+/month SaaS stack from day one."
        twitterImage="https://horusdesk.com/og-studio.png"
      />
      <main>
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
                className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-[#7C4DFF] transition-colors duration-300 mb-8"
              >
                <ArrowLeft size={16} />
                Back to Software Studio
              </Link>

              <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
                CASE STUDY
              </p>
              <h1 className="text-4xl lg:text-6xl font-medium text-white leading-[1.1] tracking-tight mb-6 max-w-4xl">
                We Built Our Own Employee & Customer Dashboards — For Under $50/Month
              </h1>
              <p className="text-lg text-[#64748B] leading-relaxed max-w-2xl">
                Why we skipped the usual stack of employee portals, customer portals, analytics, and support tools by building two custom dashboards tailored to our workflow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="bg-navy-light py-24 lg:py-40">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <h2 className="text-2xl lg:text-3xl font-medium text-white mb-6">The Problem We Saw</h2>
                <div className="space-y-4 text-[#64748B] leading-relaxed">
                  <p>
                    Running an AI-agent service means two audiences need software: your internal team needs to onboard customers and configure the AI, and your customers need a place to view analytics, manage settings, pay bills, and open support tickets.
                  </p>
                  <p>
                    Most companies solve this with a patchwork of SaaS tools: an employee portal, a customer membership platform, an analytics dashboard, a helpdesk, and a billing system. Each has per-seat pricing, separate logins, and rigid data models that don't talk to each other.
                  </p>
                  <p>
                    For a growing team, that stack quickly reaches $300–1,000+/month — and you still don't own the experience your employees and customers see every day.
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
                <div className="space-y-4 text-[#64748B] leading-relaxed">
                  <p>
                    We built two connected dashboards from scratch. The Employee Dashboard handles org onboarding, AI configuration, widget settings, payments, and team management. The Customer Dashboard v2 gives clients conversations, lead pipelines, analytics, billing, support tickets, and team permissions.
                  </p>
                  <p>
                    Both share the same Supabase backend and data model, so employees and customers see the same truth in real time. The employee side is built with Vite and vanilla JS for speed; the customer side is built with React, TypeScript, Tailwind CSS, and shadcn/ui for a polished, interactive experience.
                  </p>
                  <p>
                    Because we own the code, there are no per-seat licenses and no third-party branding. Ongoing costs are literally just the Supabase database — under $50 per month — even as the number of employees and customers grows.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="bg-navy py-24 lg:py-40">
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
                  One experience for our team and our clients
                </h2>
                <p className="text-[#64748B] leading-relaxed mb-6">
                  We never wanted our employees logging into one set of tools and our customers into another. By designing both portals ourselves, everyone gets a consistent brand experience, unified data, and workflows that actually match how we operate.
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
                  'Single sign-on and shared data model',
                  'Custom branding end-to-end',
                  'No context switching between admin and customer tools',
                  'New customer features ship without waiting on a vendor',
                  'Support tickets and billing live in the same system',
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
        <section className="bg-navy-light py-24 lg:py-40">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <SectionWrapper className="text-center mb-16">
              <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
                WHAT WE BUILT
              </p>
              <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
                Two dashboards, one unified platform
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
              {dashboardFeatures.map((feature) => (
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
        <section className="bg-navy py-24 lg:py-40">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            <SectionWrapper className="text-center mb-12">
              <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
                THE NUMBERS
              </p>
              <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
                Monthly cost for our dashboard stack
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
                    <th className="text-left py-4 px-6 text-[#64748B] font-medium">Stack</th>
                    <th className="text-left py-4 px-6 text-[#64748B] font-medium">Monthly</th>
                    <th className="text-left py-4 px-6 text-[#64748B] font-medium hidden sm:table-cell">Notes</th>
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
                          <span className={`inline-flex items-center gap-2 ${isCustom ? 'text-white font-medium' : 'text-[#64748B]'}`}>
                            {isCustom ? <Check size={16} className="text-[#7C4DFF]" /> : <X size={16} className="text-red-400" />}
                            {row.label}
                          </span>
                        </td>
                        <td className={`py-4 px-6 text-lg ${isCustom ? 'text-[#7C4DFF] font-medium' : 'text-white'}`}>
                          {row.cost}
                        </td>
                        <td className="py-4 px-6 text-[#64748B] hidden sm:table-cell">
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
              <p className="text-[#64748B]">
                A typical off-the-shelf employee + customer portal stack costs <span className="text-[#7C4DFF] font-medium">$300–1,400+ per month</span>. The custom dashboards cost <span className="text-[#7C4DFF] font-medium">~$50 per month</span>. That's roughly <span className="text-[#7C4DFF] font-medium">$3,000–16,000 per year</span> that never left the business — and the experience is built exactly for our team and clients.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Full Control */}
        <section className="bg-navy-light py-24 lg:py-40">
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
                <p className="text-[#64748B] leading-relaxed mb-6">
                  Because both dashboards are our own code, adding a feature means reading our own codebase, not a vendor's API docs or Zapier's integration guide. When an employee or customer reports an issue, we don't file a support ticket and wait in someone else's queue. We follow the code, find the source, and fix it — usually within minutes.
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
        <section className="bg-navy py-24 lg:py-40">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <SectionWrapper>
              <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2] mb-6">
                Want a similar system for your business?
              </h2>
              <p className="text-lg text-[#64748B] mb-8">
                We can build custom employee portals, customer dashboards, analytics interfaces, or full internal tools tailored to your workflow — with no per-seat fees and no vendor lock-in.
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
