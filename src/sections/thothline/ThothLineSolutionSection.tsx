import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Code, Monitor, ShieldCheck, UserCog } from 'lucide-react';
import { ACCENT } from './constants';

const cards = [
  {
    icon: Code,
    title: 'Custom-Programmed',
    description: 'Your workflow is coded into the system, not configured from a template.',
  },
  {
    icon: Monitor,
    title: 'One Environment',
    description: 'Voice, email, calendar, leads, and reporting unified in a single interface.',
  },
  {
    icon: ShieldCheck,
    title: 'Native Compliance',
    description: 'DNC management and timezone-aware calling built in, not patched on.',
  },
  {
    icon: UserCog,
    title: 'Dedicated Account Manager',
    description: 'Included with every plan, so changes and support are never ticket queues.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export function ThothLineSolutionSection() {
  return (
    <section className="bg-navy py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-10 max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: ACCENT }}>
            THE SOLUTION
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2] mb-6">
            One Platform. Your Exact Workflow. Hard-Coded.
          </h2>
          <p className="text-lg text-[#94A3B8] leading-relaxed">
            We take your existing sales process — your stages, scripts, compliance rules, routing
            logic — and program it into a private system. Everything happens inside one interface.
            Because we built it, we can change it.
          </p>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className="bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-2xl p-8 transition-all duration-500 hover:border-[rgba(255,82,82,0.15)] hover:shadow-[0_0_40px_rgba(255,82,82,0.08)]"
            >
              <card.icon className="mb-4" size={28} style={{ color: ACCENT }} />
              <h3 className="text-xl font-medium text-white mb-3">{card.title}</h3>
              <p className="text-[#94A3B8] leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
