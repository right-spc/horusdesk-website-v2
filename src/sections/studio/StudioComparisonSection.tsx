import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { X, Check } from 'lucide-react';

const rows = [
  { label: 'Monthly cost', saas: '$500–2,000+/mo recurring per tool', studio: 'One-time build + optional retainer' },
  { label: 'Vendor lock-in', saas: 'Stuck in their ecosystem. Hard to leave.', studio: 'You own the code. Migrate anytime.' },
  { label: 'Customization', saas: 'Limited to their features and templates', studio: 'Built for your exact workflow' },
  { label: 'Integrations', saas: 'Zapier bridges, API rate limits, extra fees', studio: 'Native integrations, no middleware' },
  { label: 'Data ownership', saas: 'They host it. They control it.', studio: 'You host it. You control it.' },
  { label: 'Scaling', saas: '"Upgrade to Enterprise" popups, plan limits', studio: 'Scales as fast as your business' },
  { label: 'Time to launch', saas: 'Immediate setup, then endless tweaking', studio: 'Fixed timeline, fixed deliverables' },
  { label: 'Total 3-year cost', saas: '$18,000–72,000+ in subscriptions', studio: 'One Time Dev costs + minimal hosting fees' },
];

export function StudioComparisonSection() {
  return (
    <section className="bg-navy py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-12">
          <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
            THE REAL COST
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            SaaS / No-Code Stack vs. Horus Studio
          </h2>
        </SectionWrapper>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-[rgba(226,232,240,0.08)]">
                <th className="text-left py-4 px-4 text-sm font-medium text-[#94A3B8]">Factor</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-[#94A3B8]">SaaS / No-Code Stack</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-[#7C4DFF]">Horus Studio</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-[rgba(226,232,240,0.04)] hover:bg-[rgba(124,77,255,0.02)] transition-colors"
                >
                  <td className="py-4 px-4 text-sm text-white font-medium">{row.label}</td>
                  <td className="py-4 px-4 text-sm text-[#94A3B8]">
                    <span className="inline-flex items-center gap-2">
                      <X size={14} className="text-red-400 flex-shrink-0" aria-hidden="true" />
                      {row.saas}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-white">
                    <span className="inline-flex items-center gap-2">
                      <Check size={14} className="text-[#7C4DFF] flex-shrink-0" aria-hidden="true" />
                      {row.studio}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="mt-12 bg-[rgba(124,77,255,0.05)] border border-[rgba(124,77,255,0.1)] rounded-2xl p-8 text-center">
          <p className="text-lg text-white font-medium mb-2">
            SaaS tools can cost $18,000–72,000+ over 3 years.
          </p>
          <p className="text-lg text-[#7C4DFF] font-medium">
            With us, it&apos;s $2,000–$25,000 + minimal hosting fees — and you own the code.
          </p>
        </div>
      </div>
    </section>
  );
}
