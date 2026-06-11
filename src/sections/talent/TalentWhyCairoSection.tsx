import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Mic, GraduationCap, HeartHandshake, Building2 } from 'lucide-react';

const advantages = [
  {
    icon: Mic,
    title: 'Clear, Fluent English',
    description:
      'Egyptian agents speak English that US customers understand effortlessly on the first call. No repetition, no confusion, no frustration.',
  },
  {
    icon: GraduationCap,
    title: 'University-Educated Talent',
    description:
      'We recruit graduates who studied engineering, pharmacy, and business. People who think critically, learn fast, and represent your brand with professionalism.',
  },
  {
    icon: HeartHandshake,
    title: 'Service-First Culture',
    description:
      'Egyptians have a deep hospitality instinct. Our agents treat frustrated customers like guests, not tickets. They solve problems instead of escalating them.',
  },
  {
    icon: Building2,
    title: 'Purpose-Built Infrastructure',
    description:
      'Cairo\'s Smart Village and tech zones offer fiber connectivity, redundant power, and enterprise security. Your team works in a real office, not a bedroom.',
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

export function TalentWhyCairoSection() {
  return (
    <section className="bg-navy-light py-24 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-[#FFAB40] mb-4">
            WHY CAIRO
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            Built in Cairo. Trusted by US businesses.
          </h2>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {advantages.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="
                bg-navy border border-[rgba(226,232,240,0.08)] rounded-2xl p-8
                transition-all duration-500 ease-out
                hover:border-[rgba(255,171,64,0.15)] hover:shadow-amber-glow
              "
            >
              <item.icon className="text-[#FFAB40] mb-4" size={28} />
              <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
              <p className="text-[#64748B] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
