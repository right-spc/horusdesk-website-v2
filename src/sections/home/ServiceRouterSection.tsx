import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { MessageSquare, Headphones, Code } from 'lucide-react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';

const services = [
  {
    title: 'AI Agent',
    icon: MessageSquare,
    iconColor: 'text-[#64FFDA]',
    borderColor: 'border-t-[#64FFDA]',
    linkColor: 'text-[#64FFDA]',
    description: 'Automate your website chat and email with an AI that qualifies leads and books meetings. We handle all setup.',
    price: 'From $499/mo',
    link: '/ai',
  },
  {
    title: 'Managed Teams',
    icon: Headphones,
    iconColor: 'text-[#FFAB40]',
    borderColor: 'border-t-[#FFAB40]',
    linkColor: 'text-[#FFAB40]',
    description: 'Managed customer support and sales teams. Fully managed. No candidate screening required.',
    price: '$10–35/hr',
    link: '/teams',
  },
  {
    title: 'Software Studio',
    icon: Code,
    iconColor: 'text-[#7C4DFF]',
    borderColor: 'border-t-[#7C4DFF]',
    linkColor: 'text-[#7C4DFF]',
    description: 'Custom web apps, mobile development, and AI integrations. Built from scratch with no third-party automation tools. We can build anything.',
    price: 'From $1,800',
    link: '/studio',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

export function ServiceRouterSection() {
  return (
    <section className="bg-navy-light pt-16 lg:pt-24 pb-8 lg:pb-10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-[#64FFDA] mb-4">
            ONE PARTNER, THREE WAYS TO SCALE
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            Choose how you want to grow
          </h2>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={`
                bg-navy border border-[rgba(226,232,240,0.08)] rounded-2xl p-8
                border-t ${service.borderColor}
                transition-all duration-500 ease-out
                hover:-translate-y-1 hover:border-[rgba(102,255,218,0.15)] hover:shadow-card-glow
              `}
            >
              <service.icon className={`${service.iconColor} mb-4`} size={28} />
              <h3 className="text-xl font-medium text-white mb-3">{service.title}</h3>
              <p className="text-[#64748B] mb-6">{service.description}</p>
              <p className="text-white font-medium mb-4">{service.price}</p>
              <Link
                to={service.link}
                className={`${service.linkColor} hover:underline text-sm font-medium`}
              >
                Learn more &rarr;
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
