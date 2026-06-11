import { motion } from 'framer-motion';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export function TalentHeroSection() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center bg-navy overflow-hidden pt-20 pb-16"
      style={{
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(255,171,64,0.06) 0%, transparent 60%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-24 lg:py-0 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-medium tracking-wider uppercase text-[#FFAB40] mb-6"
          >
            MANAGED TEAMS
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-6"
          >
            A Full Customer Team for the Price of One US Hire
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-[#64748B] leading-relaxed mb-8 max-w-xl"
          >
            US-managed support and sales teams based in Cairo. Fully recruited, trained, and supervised. Start with 3 agents. Scale at will.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <ChatButton>Ask Horus AI</ChatButton>
            <CalendarButton>Book a Talent Consultation</CalendarButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
