import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We interview your team, map your workflows, and identify the real bottlenecks. Not surface-level requirements — we find the root problem.',
  },
  {
    number: '02',
    title: 'Scope',
    description:
      'Fixed deliverables, fixed timeline, fixed price. No scope creep surprises. You know exactly what you\'re getting before we write a single line of code.',
  },
  {
    number: '03',
    title: 'Sprint',
    description:
      'Weekly demos, not monthly reports. You see working software every 7 days and can pivot immediately if priorities change.',
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'We handle deployment, SSL, DNS, monitoring, and backups. Your tool goes live without you touching a server.',
  },
  {
    number: '05',
    title: 'Handoff',
    description:
      'Full documentation, source code repository access, and team training. You can maintain it in-house or keep us on retainer.',
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

export function StudioProcessSection() {
  return (
    <section className="bg-navy py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
            HOW WE WORK
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            From idea to live software in weeks
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
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#7C4DFF] to-transparent" />

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="text-center lg:text-left"
              >
                <span className="font-mono text-2xl text-[#7C4DFF] block mb-3">{step.number}</span>
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
