import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';

const blocks = [
  {
    title: 'SaaS / No-Code Stack',
    bullets: [
      { label: 'Monthly cost', text: '$500–$2,000+ per month recurring per tool' },
      { label: 'Vendor lock-in', text: 'Stuck in their ecosystem. Hard to leave.' },
      { label: 'Customization', text: 'Limited to their features and templates.' },
      { label: 'Data ownership', text: 'They host it. They control it.' },
      { label: 'Maintenance', text: 'On their terms, their roadmap, their price hikes.' },
    ],
  },
  {
    title: 'Build & Own',
    bullets: [
      { label: 'Monthly cost', text: 'One-time build plus optional retainer. No recurring licensing.' },
      { label: 'Vendor lock-in', text: 'You own the code. Migrate anytime.' },
      { label: 'Customization', text: 'Built for your exact workflow.' },
      { label: 'Data ownership', text: 'You host it. You control it.' },
      { label: 'Maintenance', text: 'Optional retainer, or your in-house team.' },
    ],
  },
  {
    title: 'Managed Custom Platform',
    bullets: [
      { label: 'Monthly cost', text: 'Low setup fee plus predictable monthly fee. Fraction of SaaS cost.' },
      { label: 'Vendor lock-in', text: 'Buy the code at any time. No long-term lock-in.' },
      { label: 'Customization', text: 'Built for your exact workflow.' },
      { label: 'Data ownership', text: 'Your data always belongs to you. Exportable anytime.' },
      { label: 'Maintenance', text: 'Fully included. We handle hosting, updates, security, and support.' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const blockVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export function StudioComparisonSection() {
  return (
    <section className="bg-navy-light py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-12">
          <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
            THE REAL COST
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            SaaS vs. Build & Own vs. Managed Platform
          </h2>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {blocks.map((block) => (
            <motion.div
              key={block.title}
              variants={blockVariants}
              className="
                bg-navy border border-[rgba(226,232,240,0.08)] rounded-2xl p-8
                transition-all duration-500 ease-out
                hover:border-[rgba(124,77,255,0.15)] hover:shadow-violet-glow
              "
            >
              <h3 className="text-xl font-medium text-white mb-6">{block.title}</h3>
              <ul className="space-y-4">
                {block.bullets.map((bullet) => (
                  <li key={bullet.label} className="text-[#94A3B8] leading-relaxed">
                    <span className="text-white font-medium block mb-1">{bullet.label}</span>
                    {bullet.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 bg-navy border border-[rgba(124,77,255,0.1)] rounded-2xl p-8 text-center"
        >
          <p className="text-lg text-white leading-relaxed">
            Both Build and Own and Managed Platform beat SaaS on customization, data control, and long-term cost. Choose Build and Own if you want total independence and have the capital upfront. Choose Managed Platform if you want custom software with low upfront risk and zero maintenance headaches.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
