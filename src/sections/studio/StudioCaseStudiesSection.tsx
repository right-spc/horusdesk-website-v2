import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { useBooking } from '@/components/layout/BookingModal';
import { Link } from 'react-router';

const caseStudies = [
  {
    title: 'Custom Softphone + CRM',
    description: 'A complete voice, CRM, outreach, and automation platform built from scratch. Avoided a $500+/month SaaS stack by building a custom platform that costs $150/month for our 3-agent team.',
    link: '/case-studies/softphone',
  },
  {
    title: 'Employee & Customer Dashboards',
    description: 'A matching pair of internal and client-facing dashboards built from scratch. Avoided a $300+/month stack of employee portals, customer portals, analytics, and support tools — and now runs for under $50/month.',
    link: '/case-studies/ai-agent-dashboards',
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

export function StudioCaseStudiesSection() {
  const { open } = useBooking();

  return (
    <section className="bg-navy py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
            PROOF OF WORK
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            Tools we built for ourselves — and we can build for you
          </h2>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.title}
              variants={cardVariants}
              className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-2xl p-8"
            >
              <h3 className="text-xl font-medium text-white mb-4">{study.title}</h3>
              <p className="text-[#64748B] leading-relaxed mb-6">{study.description}</p>
              {study.link ? (
                <Link
                  to={study.link}
                  className="text-[#7C4DFF] hover:underline text-sm font-medium"
                >
                  Read Case Study &rarr;
                </Link>
              ) : (
                <button
                  onClick={() => open('Software Studio')}
                  className="text-[#7C4DFF] hover:underline text-sm font-medium"
                >
                  Learn More &rarr;
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
