import { motion } from 'framer-motion';
import { Clock, Globe, Rocket, ArrowUpDown } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    label: '24/7 Coverage — Any Shift',
  },
  {
    icon: Globe,
    label: 'Fluent English + Service-First Training',
  },
  {
    icon: Rocket,
    label: 'Hire to Desk in as Fast as 7 Days',
  },
  {
    icon: ArrowUpDown,
    label: 'Scale Monthly — Up or Down',
  },
];

export function TalentTrustBar() {
  return (
    <section className="bg-navy border-y border-[rgba(226,232,240,0.08)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <stat.icon size={18} className="text-[#FFAB40] flex-shrink-0" />
              <span className="text-sm text-[#94A3B8]">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
