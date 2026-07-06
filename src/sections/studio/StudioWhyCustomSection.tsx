import { motion } from 'framer-motion';
import { Lock, Cloud } from 'lucide-react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { CalendarButton } from '@/components/buttons/CalendarButton';

const paths = [
  {
    id: 'build-and-own',
    icon: Lock,
    title: 'Build & Own',
    headline: 'Buy Software Once. Own It Forever.',
    description:
      'One-time custom build. You own 100% of the source code, data, and intellectual property. No recurring licensing fees. Optional maintenance retainer after launch.',
    cta: <CalendarButton>Get a Custom Quote</CalendarButton>,
  },
  {
    id: 'managed-platform',
    icon: Cloud,
    title: 'Managed Custom Platform',
    headline: 'Custom Software Without the Capital Expense',
    description:
      'Low setup fee plus monthly subscription. We build it, we host it, we maintain it, we secure it. You get full access and a dedicated dashboard. Buy the code at any time.',
    cta: <CalendarButton prefillInterest="Managed Custom Platform">Book a Discovery Call</CalendarButton>,
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
            2 WAYS TO GET CUSTOM SOFTWARE
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            Buy it once. Or let us run it for you.
          </h2>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {paths.map((item) => (
            <motion.div
              key={item.id}
              id={item.id}
              variants={cardVariants}
              className="
                bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-2xl p-8 lg:p-10
                transition-all duration-500 ease-out
                hover:border-[rgba(124,77,255,0.15)] hover:shadow-violet-glow
                flex flex-col
              "
            >
              <item.icon className="text-[#7C4DFF] mb-4" size={32} />
              <p className="text-xs font-medium tracking-wider uppercase text-[#64FFDA] mb-2">
                {item.title}
              </p>
              <h3 className="text-2xl font-medium text-white mb-4">{item.headline}</h3>
              <p className="text-[#94A3B8] leading-relaxed mb-8 flex-grow">{item.description}</p>
              <div className="mt-auto">{item.cta}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
