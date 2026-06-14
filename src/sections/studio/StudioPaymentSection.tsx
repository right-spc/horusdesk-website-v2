import { motion } from 'framer-motion';
import { CreditCard, Landmark, Wallet } from 'lucide-react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';

const methods = [
  { icon: CreditCard, label: 'PayPal Business' },
  { icon: Landmark, label: 'Direct Bank Transfer' },
  { icon: Wallet, label: 'Upwork' },
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

export function StudioPaymentSection() {
  return (
    <section className="bg-navy py-16 lg:py-24">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <SectionWrapper className="mb-8">
          <h3 className="text-xl font-medium text-white mb-4">Flexible payment options</h3>
          <p className="text-[#94A3B8]">
            We accept PayPal Business, direct bank account transfers, and Upwork for studio projects. Choose what works best for you.
          </p>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-3 gap-6"
        >
          {methods.map((method) => (
            <motion.div
              key={method.label}
              variants={cardVariants}
              className="bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-xl p-6 text-center"
            >
              <method.icon className="text-[#7C4DFF] mx-auto" size={28} />
              <span className="text-sm text-white font-medium mt-4 block">{method.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
