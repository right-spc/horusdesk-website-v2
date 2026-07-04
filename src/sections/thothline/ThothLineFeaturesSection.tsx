import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Phone, Target, Mail, Users, ShieldCheck, BarChart3 } from 'lucide-react';
import { ACCENT } from './constants';

interface FeatureGroup {
  icon: typeof Phone;
  title: string;
  items: string[];
}

const groups: FeatureGroup[] = [
  {
    icon: Phone,
    title: 'Voice & Calling',
    items: [
      'Live calling with timezone display',
      'Call recording',
      'Call Logs with search/filter',
      'Custom IVR, call queues, voicemail',
      'After-hours routing, click-to-call',
      'Local presence dialing & number rotation',
      'CNAME registration',
      'Agent-to-agent transfer',
    ],
  },
  {
    icon: Target,
    title: 'Lead Management',
    items: [
      'Lead database with custom fields and stages',
      'Native deduplication',
      'Bulk import',
      'Custom lead distribution and routing',
      'In-app B2B lead generation',
    ],
  },
  {
    icon: Mail,
    title: 'Campaigns & Outreach',
    items: [
      'Automated email campaigns',
      'Campaign management',
      'Callback scheduling',
      'Individual SMS texting (Coming Soon)',
    ],
  },
  {
    icon: Users,
    title: 'Agent & Manager Tools',
    items: [
      'Agent extensions',
      'Custom dispositions and statuses',
      'Real-time agent dashboard',
      'Live wallboard',
      'User roles and permissions',
      'Calendar and appointment booking',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Security',
    items: [
      'Native DNC management',
      'Timezone-aware calling',
      'Call recording governance',
      'Data ownership',
      'SLA guarantees',
      'Encrypted data storage',
    ],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Intelligence',
    items: [
      'Default analytics',
      'Scheduled reports',
      'API access and webhooks',
      'Advanced workflow routing',
      'SMS campaigns (Coming Soon)',
      'Volume discounts on usage',
      'White-label options',
    ],
  },
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

export function ThothLineFeaturesSection() {
  return (
    <section className="bg-navy-light py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-10">
          <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: ACCENT }}>
            FEATURES
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            One system. Every capability.
          </h2>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {groups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-2xl p-6 transition-all duration-500 hover:border-[rgba(255,82,82,0.15)] hover:shadow-[0_0_40px_rgba(255,82,82,0.08)]"
            >
              <group.icon className="mb-3" size={26} style={{ color: ACCENT }} />
              <h3 className="text-lg font-medium text-white mb-3">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-[#94A3B8] leading-relaxed flex items-start gap-2">
                    <span style={{ color: ACCENT }} className="mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
