import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { X } from 'lucide-react';
import { ACCENT } from './constants';

const problems = [
  'Data silos',
  'Context switching',
  'Compliance as afterthought',
  'Integration fragility',
  'Paying 5 vendors for one workflow',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export function ThothLineProblemSection() {
  return (
    <section className="bg-navy-light py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SectionWrapper>
            <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: ACCENT }}>
              THE PROBLEM
            </p>
            <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2] mb-6">
              Your Sales Team Is Managing Software, Not Selling
            </h2>
            <p className="text-lg text-[#94A3B8] leading-relaxed">
              The average sales team juggles 6 to 12 different tools. Data lives in silos. Reps
              context-switch between tabs. Compliance is bolted on. Every integration breaks
              eventually. Reps spend more time clicking than closing.
            </p>
          </SectionWrapper>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-4"
          >
            {problems.map((problem) => (
              <motion.li
                key={problem}
                variants={itemVariants}
                className="flex items-center gap-4 bg-navy border border-[rgba(226,232,240,0.08)] rounded-xl p-4"
              >
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${ACCENT}14` }}
                >
                  <X size={16} style={{ color: ACCENT }} aria-hidden="true" />
                </span>
                <span className="text-white font-medium">{problem}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
