import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { UserCheck, HeadphonesIcon, BarChart3, ShieldCheck, Clock, FileCheck } from 'lucide-react';

const features = [
  {
    icon: UserCheck,
    title: 'Dedicated Account Director',
    description: 'A single point of contact who owns your account, understands your business, and is available on demand. Fluent English. Cairo-based. Works on your schedule.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Egypt-Based Operations Manager',
    description: 'On-the-ground supervision in Cairo. Handles day-to-day scheduling, agent coaching, and escalations so you never have to.',
  },
  {
    icon: BarChart3,
    title: 'Quality Analyst — Call & Chat Reviews',
    description: 'Every interaction is sampled and scored. Weekly QA reports with actionable feedback, not just numbers.',
  },
  {
    icon: ShieldCheck,
    title: 'Custom SLAs Per Client',
    description: 'Response times, resolution targets, and coverage hours are agreed upfront based on your business needs — not a one-size-fits-all number.',
  },
  {
    icon: Clock,
    title: 'Monthly Performance Reviews',
    description: 'CSAT trends, resolution rates, agent scorecards, and a live dashboard you can check anytime.',
  },
  {
    icon: FileCheck,
    title: 'Agent Replacement Guarantee',
    description: 'If an agent underperforms or leaves, we backfill at no cost. Your operations never skip a beat.',
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

export function TalentQualitySection() {
  return (
    <section className="bg-navy py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-[#FFAB40] mb-4">
            QUALITY & MANAGEMENT
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            We don&apos;t just place agents. We manage them.
          </h2>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="
                bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-2xl p-8
                transition-all duration-500 ease-out
                hover:border-[rgba(255,171,64,0.15)] hover:shadow-amber-glow
              "
            >
              <feature.icon className="text-[#FFAB40] mb-4" size={28} />
              <h3 className="text-lg font-medium text-white mb-3">{feature.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
