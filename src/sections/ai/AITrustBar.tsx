import { motion } from 'framer-motion';
import { Bot, Globe, CalendarCheck, Users } from 'lucide-react';

const stats = [
  {
    icon: Bot,
    label: 'Qualifies Leads 24/7',
  },
  {
    icon: Globe,
    label: '6 Languages — One Inbox',
  },
  {
    icon: CalendarCheck,
    label: 'Books Meetings Automatically',
  },
  {
    icon: Users,
    label: 'Smart Escalation to Your Team',
  },
];

export function AITrustBar() {
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
              <stat.icon size={18} className="text-[#64FFDA] flex-shrink-0" />
              <span className="text-sm text-[#94A3B8]">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
