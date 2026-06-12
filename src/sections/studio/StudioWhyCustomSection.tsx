import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Ban, Puzzle, TrendingUp, Shield } from 'lucide-react';

const advantages = [
  {
    icon: Ban,
    title: 'No Monthly Subscription Tax',
    description:
      'Stop paying $500–2,000/month for a dozen SaaS tools that barely talk to each other. Build once. Own forever. No recurring licensing fees.',
  },
  {
    icon: Puzzle,
    title: 'Works Exactly How You Work',
    description:
      'Your software should fit your business, not the other way around. We build around your actual workflow — your forms, reports, and approval chains — instead of forcing you into a generic template.'
  },
  {
    icon: TrendingUp,
    title: 'Scales Without Breaking',
    description:
      'No \"plan limits,\" no API rate caps, no \"upgrade to Enterprise\" popups. Your software grows as fast as your business without hitting artificial walls.',
  },
  {
    icon: Shield,
    title: 'You Own Everything',
    description:
      'Source code, data, infrastructure, and IP. You can host it anywhere, modify it anytime, and walk away from us completely if you ever want to.',
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

export function StudioWhyCustomSection() {
  return (
    <section className="bg-navy py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
            WHY CUSTOM CODE
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            Buy software once. Own it forever.
          </h2>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {advantages.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="
                bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-2xl p-8
                transition-all duration-500 ease-out
                hover:border-[rgba(124,77,255,0.15)] hover:shadow-violet-glow
              "
            >
              <item.icon className="text-[#7C4DFF] mb-4" size={28} />
              <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
              <p className="text-[#64748B] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
