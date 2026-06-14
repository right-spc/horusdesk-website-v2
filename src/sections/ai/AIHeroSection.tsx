import { motion } from 'framer-motion';
import { PrimarySolidButton } from '@/components/buttons/PrimarySolidButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';
import { openChatWidget } from '@/lib/chat';

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

          {/* Right Column - Split Screen Graphic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            className="hidden lg:flex items-center justify-center gap-4"
          >
            {/* Chat Interface */}
            <div className="bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-xl p-5 w-56">
              <div className="space-y-3">
                <div className="bg-[rgba(102,255,218,0.1)] border border-[rgba(102,255,218,0.2)] rounded-lg rounded-tl-none px-3 py-2">
                  <p className="text-xs text-white">Hi! How can I help?</p>
                </div>
                <div className="bg-white/5 rounded-lg rounded-tr-none px-3 py-2 ml-auto max-w-[80%]">
                  <p className="text-xs text-white">I need a quote</p>
                </div>
                <div className="bg-[rgba(102,255,218,0.1)] border border-[rgba(102,255,218,0.2)] rounded-lg rounded-tl-none px-3 py-2">
                  <p className="text-xs text-white">Sure! What service do you need?</p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-[#64FFDA] text-3xl font-light">&rarr;</div>

            {/* Calendar Interface */}
            <div className="bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-xl p-5 w-56">
              <div className="text-center">
                <div className="w-8 h-8 rounded-full bg-[rgba(102,255,218,0.1)] border border-[rgba(102,255,218,0.2)] flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#64FFDA] text-xs">&#10003;</span>
                </div>
                <p className="text-sm text-white font-medium mb-1">Meeting Booked</p>
                <p className="text-xs text-[#94A3B8]">Tuesday, 10:00 AM</p>
                <p className="text-xs text-[#94A3B8]">Google Calendar</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
