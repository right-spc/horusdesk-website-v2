import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';

const steps = [
  {
    number: '01',
    title: 'Recruit',
    description:
      'We source university-educated candidates matched to your industry — support, sales, or back-office. You review final candidates before we hire.',
  },
  {
    number: '02',
    title: 'Train',
    description:
      'Full-time immersion in your product, tone, tools, and escalation rules. As quick as 3 days for simple setups. As long as needed for complex ones. Agents shadow your team or record mock calls until they sound like yours.',
  },
  {
    number: '03',
    title: 'Manage',
    description:
      'Your account director sets strategy. Our Cairo operations manager handles daily supervision, scheduling, and coaching. You stay hands-off.',
  },
  {
    number: '04',
    title: 'Scale',
    description:
      'Need 3 more agents for busy season? Reduce to 2 in slow months? Give us 30 days notice and we adjust — no layoffs, no legal risk, no drama.',
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

export function TalentProcessSection() {
  return (
    <section
      className="relative py-16 lg:py-24 bg-navy overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(255,171,64,0.06) 0%, transparent 60%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-[#FFAB40] mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            From zero to live team as fast as 1 week
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
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#FFAB40] to-transparent" />

          <div className="grid lg:grid-cols-4 gap-12 relative">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="text-center lg:text-left"
              >
                <span className="font-mono text-2xl text-[#FFAB40] block mb-3">{step.number}</span>
                <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                <p className="text-[#94A3B8] leading-relaxed">{step.description}</p>
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
