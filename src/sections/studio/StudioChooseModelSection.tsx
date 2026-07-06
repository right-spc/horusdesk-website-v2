import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { CalendarButton } from '@/components/buttons/CalendarButton';

const buildOwnReasons = [
  'You have the capital for a one-time investment',
  'You need to own the intellectual property for investors, compliance, or long-term strategy',
  'You have an in-house technical team to maintain it',
  'You want zero ongoing dependency on an external vendor',
  'You view software as a business asset, not an expense',
];

const managedReasons = [
  'You need custom software but do not have $20,000+ upfront',
  'You want us to handle hosting, security, updates, and backups',
  'You prefer predictable monthly costs over a large capital expense',
  'You want to scale usage up or down without rebuilding',
  'You want to buy the code later when your business is ready',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export function StudioChooseModelSection() {
  return (
    <section className="bg-navy-light py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
            WHICH MODEL IS RIGHT FOR YOU
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2] mb-6">
            Which Model Is Right for You?
          </h2>
          <p className="text-lg text-[#94A3B8] leading-relaxed max-w-3xl mx-auto">
            Both options give you custom software that fits your business. The difference is how you pay and who maintains it.
          </p>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <motion.div
            variants={columnVariants}
            className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-2xl p-8"
          >
            <h3 className="text-xl font-medium text-white mb-6">Choose Build & Own If</h3>
            <ul className="space-y-4">
              {buildOwnReasons.map((reason) => (
                <li key={reason} className="text-[#94A3B8] leading-relaxed flex items-start gap-3">
                  <span className="text-[#7C4DFF] mt-1">•</span>
                  {reason}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={columnVariants}
            className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-2xl p-8"
          >
            <h3 className="text-xl font-medium text-white mb-6">Choose Managed Platform If</h3>
            <ul className="space-y-4">
              {managedReasons.map((reason) => (
                <li key={reason} className="text-[#94A3B8] leading-relaxed flex items-start gap-3">
                  <span className="text-[#7C4DFF] mt-1">•</span>
                  {reason}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <SectionWrapper className="text-center">
          <p className="text-lg text-white leading-relaxed mb-6 max-w-3xl mx-auto">
            Not sure which fits your budget? Book a free discovery call and we will map both options to your exact situation.
          </p>
          <CalendarButton>Book a Discovery Call</CalendarButton>
        </SectionWrapper>
      </div>
    </section>
  );
}
