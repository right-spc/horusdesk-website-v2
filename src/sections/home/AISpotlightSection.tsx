import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';

const stats = [
  { value: '7,500', label: 'AI responses/mo' },
  { value: '6', label: 'Languages' },
  { value: '24h', label: 'Setup time' },
  { value: '$59', label: 'Extra 1K credits' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export function AISpotlightSection() {
  return (
    <section className="bg-navy py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2] mb-6">
            Why AI Agent is different
          </h2>
          <p className="text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            Most chatbots force you to DIY. We do the opposite. A dedicated account manager sets everything up for you. You get an analytics portal to track every lead. 7,500 AI responses included. One inbox connected (Gmail or Outlook). And if you need more responses, add 1,000 credits for $59 that never expire as long as you&apos;re subscribed.
          </p>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              className="bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-xl p-6 text-center"
            >
              <span className="font-mono text-4xl text-[#64FFDA] block">{stat.value}</span>
              <span className="text-sm text-[#94A3B8] mt-2 block">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <SectionWrapper delay={0.2} className="flex flex-wrap justify-center gap-4 mt-12">
          <ChatButton>Ask Horus AI</ChatButton>
          <CalendarButton>Book a Discovery Call</CalendarButton>
        </SectionWrapper>
      </div>
    </section>
  );
}
