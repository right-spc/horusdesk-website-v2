import { motion } from 'framer-motion';
import { Code, Lock, Wallet, FileCheck } from 'lucide-react';

const stats = [
  {
    icon: Code,
    label: '100% Custom Code',
  },
  {
    icon: Lock,
    label: 'You Own the Source Code',
  },
  {
    icon: Wallet,
    label: 'No Subscription Bloat',
  },
  {
    icon: FileCheck,
    label: 'Free Audits and Blueprints',
  },
];

export function StudioTrustBar() {
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
              <stat.icon size={18} className="text-[#7C4DFF] flex-shrink-0" />
              <span className="text-sm text-[#64748B]">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
