import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Monitor, Phone, Server, Brain, Database, Cloud } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: 'Web Applications',
    description: 'React, Next.js, TypeScript, Tailwind CSS. Fast, responsive, and built for scale.',
  },
  {
    icon: Phone,
    title: 'Mobile Apps',
    description: 'React Native and Flutter. 1 codebase, iOS and Android. Offline-capable when needed.',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description: 'Node.js, Python, and Go. REST and GraphQL APIs built for performance and security.',
  },
  {
    icon: Brain,
    title: 'AI Integrations',
    description: 'OpenAI, Anthropic, and custom models. Document parsing, predictions, and smart automation.',
  },
  {
    icon: Database,
    title: 'Databases',
    description: 'PostgreSQL, Supabase, and Redis. Structured, secure, and optimized for your query patterns.',
  },
  {
    icon: Cloud,
    title: 'DevOps & Deployment',
    description: 'AWS, Vercel, Docker, CI/CD. We handle hosting, SSL, monitoring, and backups.',
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

export function StudioTechStackSection() {
  return (
    <section className="bg-navy py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
            TECHNOLOGY
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            Modern stack. Proven tools.
          </h2>
        </SectionWrapper>

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
                hover:border-[rgba(124,77,255,0.15)] hover:shadow-violet-glow
              "
            >
              <feature.icon className="text-[#7C4DFF] mb-4" size={28} />
              <h3 className="text-lg font-medium text-white mb-3">{feature.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
