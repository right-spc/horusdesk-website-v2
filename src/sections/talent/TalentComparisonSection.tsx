import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { X, Check } from 'lucide-react';

const rows = [
  { label: 'Cost per agent', inHouse: '$45–65/hr fully loaded', managed: '$10–35/hr all-inclusive' },
  { label: 'Time to first shift', inHouse: '3–6 months hiring', managed: 'As fast as 7 days' },
  { label: 'Benefits & taxes', inHouse: 'You pay everything', managed: 'Included' },
  { label: 'Equipment & software', inHouse: 'You buy & maintain', managed: 'Custom per client requirements' },
  { label: 'Management overhead', inHouse: 'You manage daily', managed: 'Account director + Cairo ops manager' },
  { label: 'QA & performance reviews', inHouse: 'You build the system', managed: 'Built-in QA analyst + monthly reports' },
  { label: 'Scaling up', inHouse: 'Restart the hiring cycle', managed: 'Add agents in 14 days' },
  { label: 'Scaling down', inHouse: 'Layoffs & legal risk', managed: 'Reduce seats with 30 days notice' },
  { label: 'Contract lock-in', inHouse: 'Employment law obligations', managed: '3-month proof of concept, then 1-year contract' },
];

export function TalentComparisonSection() {
  return (
    <section className="bg-navy-light py-24 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-[#FFAB40] mb-4">
            THE REAL COST
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            In-house vs. Managed Teams
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
                <th className="text-left py-4 px-4 text-sm font-medium text-[#64748B]">Factor</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-[#64748B]">In-House Hire</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-[#FFAB40]">Managed Teams</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-[rgba(226,232,240,0.04)] hover:bg-[rgba(255,171,64,0.02)] transition-colors"
                >
                  <td className="py-4 px-4 text-sm text-white font-medium">{row.label}</td>
                  <td className="py-4 px-4 text-sm text-[#64748B]">
                    <span className="inline-flex items-center gap-2">
                      <X size={14} className="text-red-400 flex-shrink-0" />
                      {row.inHouse}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-white">
                    <span className="inline-flex items-center gap-2">
                      <Check size={14} className="text-[#FFAB40] flex-shrink-0" />
                      {row.managed}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="mt-12 bg-[rgba(255,171,64,0.05)] border border-[rgba(255,171,64,0.1)] rounded-2xl p-8 text-center">
          <p className="text-lg text-white font-medium mb-2">
            A 5-person support team costs $450,000+/yr in the US.
          </p>
          <p className="text-lg text-[#FFAB40] font-medium">
            With us, it&apos;s under $100,000 — fully managed.
          </p>
        </div>
      </div>
    </section>
  );
}
