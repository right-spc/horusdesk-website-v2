import { motion } from 'framer-motion';
import { PrimarySolidButton } from '@/components/buttons/PrimarySolidButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';
import { openChatWidget } from '@/lib/chat';
import { ChatMockup } from '@/components/shared/ChatMockup';

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

export function AIHeroSection() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center bg-navy overflow-hidden pt-[100px] pb-16"
      style={{
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(102,255,218,0.06) 0%, transparent 60%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-24 lg:py-0 w-full">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs font-medium tracking-wider uppercase text-[#64FFDA] mb-6"
            >
              HORUS AI
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-6"
            >
              Stop Losing After-Hours Leads to Voicemail and Competitors
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-[#94A3B8] leading-relaxed mb-8 max-w-xl"
            >
              Horus AI qualifies every website visitor and books meetings 24/7 in 6 languages. Fully managed. Live in 24 hours.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <PrimarySolidButton onClick={openChatWidget}>Ask Horus AI</PrimarySolidButton>
              <CalendarButton>Book a Discovery Call</CalendarButton>
            </motion.div>
          </motion.div>

          {/* Right Column - Chat Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            className="hidden lg:block"
          >
            <ChatMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
