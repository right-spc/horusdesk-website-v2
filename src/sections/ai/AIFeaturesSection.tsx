import { motion } from 'framer-motion';
import { Globe, Mail, Filter, Calendar, AlertTriangle, UserCheck } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: '6 Languages',
    description: 'English, Spanish, German, Dutch, French, and Arabic. Your customers speak their native language.',
  },
  {
    icon: Mail,
    title: 'Inbox Integration',
    description: 'One inbox connected — either Gmail or Outlook. We monitor and respond to incoming leads.',
  },
  {
    icon: Filter,
    title: 'Smart Qualification',
    description: 'Asks budget, timeline, and decision-making authority before booking.',
  },
  {
    icon: Calendar,
    title: 'Calendar Sync',
    description: 'Calendly and Google Calendar. Meetings appear automatically.',
  },
  {
    icon: AlertTriangle,
    title: 'Smart Escalation',
    description: 'Sentiment drops or question too complex? We loop in your team instantly.',
  },
  {
    icon: UserCheck,
    title: 'Dedicated Account Manager',
    description: 'A real human account manager + an analytics portal to track every lead and conversation.',
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

export function AIFeaturesSection() {
  return (
    <section className="bg-navy-light py-24 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="
                bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-2xl p-8
                transition-all duration-500 ease-out
                hover:border-[rgba(102,255,218,0.15)]
              "
            >
              <feature.icon className="text-[#64FFDA] mb-4" size={24} />
              <h3 className="text-xl font-medium text-white mb-3">{feature.title}</h3>
              <p className="text-[#64748B]">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
