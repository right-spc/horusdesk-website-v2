import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';

const steps = [
  {
    number: '01',
    title: 'You share',
    description: 'Send us your FAQs, pricing, and how you talk to customers.',
  },
  {
    number: '02',
    title: 'We build',
    description: 'We train Horus on your knowledge and install the widget. We handle all technical implementation.',
  },
  {
    number: '03',
    title: 'You watch',
    description: 'Go live in 24 hours. We handle tweaks and optimization for the first 30 days.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export function HowItWorksSection() {
  return (
    <section className="bg-navy-light py-24 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-[#64FFDA] mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            No templates. No code. We do the work.
          </h2>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Gradient line */}
          <div className="hidden lg:block absolute top-12 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-[#64FFDA] to-transparent" />

          <div className="grid lg:grid-cols-3 gap-12 relative">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="text-center lg:text-left"
              >
                <span className="font-mono text-4xl text-[#64FFDA] block mb-4">{step.number}</span>
                <h3 className="text-xl font-medium text-white mb-3">{step.title}</h3>
                <p className="text-[#64748B]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <SectionWrapper delay={0.3} className="flex flex-wrap justify-center gap-4 mt-16">
          <ChatButton>Ask Horus AI</ChatButton>
          <CalendarButton>Book a Discovery Call</CalendarButton>
        </SectionWrapper>
      </div>
    </section>
  );
}
