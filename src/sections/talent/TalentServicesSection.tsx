import { motion } from 'framer-motion';
import { LifeBuoy, Target, FileText } from 'lucide-react';

const services = [
  {
    icon: LifeBuoy,
    title: 'Customer Support',
    description: 'L1 and L2 support reps. Trained on your product and voice.',
  },
  {
    icon: Target,
    title: 'Sales Development',
    description: 'SDRs and BDRs. Qualifying leads and setting appointments.',
  },
  {
    icon: FileText,
    title: 'Back Office',
    description: 'Admin, data entry, and operations support.',
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

export function TalentServicesSection() {
  return (
    <section className="bg-navy-light py-24 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
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
              className="
                bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-2xl p-8
                transition-all duration-500 ease-out
                hover:border-[rgba(255,171,64,0.15)] hover:shadow-amber-glow
              "
            >
              <service.icon className="text-[#FFAB40] mb-4" size={28} />
              <h3 className="text-xl font-medium text-white mb-3">{service.title}</h3>
              <p className="text-[#64748B]">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
