import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ACCENT } from './constants';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'You tell us your workflow: stages, routing rules, compliance needs, campaigns.',
  },
  {
    number: '02',
    title: 'Programming',
    description:
      'We build your exact process into Thoth Line: IVR, lead distribution, dispositions, email sequences — all hard-coded.',
  },
  {
    number: '03',
    title: 'Deployment',
    description:
      'Your team logs in. One URL. One system. As fast as 3 days depending on complexity.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export function ThothLineHowItWorksSection() {
  return (
    <section className="bg-navy py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-10">
          <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: ACCENT }}>
            HOW IT WORKS
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            From workflow to live system in days
          </h2>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          <div
            className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5"
            style={{ background: `linear-gradient(to right, ${ACCENT}, transparent)` }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="text-center lg:text-left"
              >
                <span className="font-mono text-2xl block mb-3" style={{ color: ACCENT }}>
                  {step.number}
                </span>
                <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
