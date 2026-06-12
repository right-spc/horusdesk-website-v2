import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Database, Layout, Smartphone, Bot } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Custom CRM & ERP Systems',
    description: 'Stop forcing your business into Salesforce or HubSpot. We build CRMs that match your exact sales process, reporting needs, and team workflow.',
  },
  {
    icon: Layout,
    title: 'Client Portals & Dashboards',
    description: 'White-label portals where your customers track orders, view reports, and manage their accounts — all branded as yours.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps for Field Teams',
    description: 'iOS and Android apps for technicians, sales reps, and delivery drivers. Offline-capable, GPS-integrated, and synced to your central system.',
  },
  {
    icon: Bot,
    title: 'AI Workflow Automation',
    description: 'Custom AI integrations that go beyond chatbots — document parsing, predictive analytics, automated decision-making, and smart routing.',
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

export function StudioServicesSection() {
  return (
    <section className="bg-navy-light py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
            WHAT WE BUILD
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            Custom software for every part of your business
          </h2>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="
                bg-navy border border-[rgba(226,232,240,0.08)] rounded-2xl p-8
                transition-all duration-500 ease-out
                hover:border-[rgba(124,77,255,0.15)] hover:shadow-violet-glow
              "
            >
              <service.icon className="text-[#7C4DFF] mb-4" size={28} />
              <h3 className="text-xl font-medium text-white mb-3">{service.title}</h3>
              <p className="text-[#64748B] leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
