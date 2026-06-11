import { motion } from 'framer-motion';
import { Shield, Zap, Globe } from 'lucide-react';
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

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center bg-navy overflow-hidden pt-20 pb-16"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 50% 0%, rgba(102,255,218,0.06) 0%, transparent 60%),
          radial-gradient(circle, rgba(102,255,218,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 2rem 2rem',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-24 lg:py-0 w-full">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs font-medium tracking-wider uppercase text-[#64FFDA] mb-6"
            >
              AI RECEPTIONIST FOR US SERVICE BUSINESSES
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-6"
            >
              An AI Receptionist That Qualifies Leads and Books Meetings While You Sleep
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-[#64748B] leading-relaxed mb-8 max-w-xl"
            >
              We set it up for you. Fully managed setup. Live on your website and email in 24 hours. Built for US service businesses.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <ChatButton size="large">Start Chatting with Horus</ChatButton>
              <CalendarButton size="large">Book a 10-Minute Setup Call</CalendarButton>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-[#64748B]" />
                <span className="text-sm text-[#64748B]">Enterprise security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-[#64748B]" />
                <span className="text-sm text-[#64748B]">Setup included</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-[#64748B]" />
                <span className="text-sm text-[#64748B]">6 Languages Supported</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-xl shadow-2xl overflow-hidden relative">
                {/* Live indicator */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#64FFDA] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#64FFDA]"></span>
                  </span>
                  <span className="text-xs font-medium tracking-wider uppercase text-[#64FFDA]">LIVE</span>
                </div>

                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(226,232,240,0.08)]">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#EF4444]" />
                    <div className="w-2 h-2 rounded-full bg-[#EAB308]" />
                    <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                  </div>
                  <span className="text-xs text-[#64748B] font-mono ml-2">horusdesk.com</span>
                </div>

                {/* Chat content */}
                <div className="p-4 space-y-3 min-h-[200px]">
                  <div className="flex">
                    <div className="bg-[rgba(102,255,218,0.1)] border border-[rgba(102,255,218,0.2)] rounded-lg rounded-tl-none px-4 py-3 max-w-[80%]">
                      <p className="text-sm text-white">Hi! I can help schedule your HVAC repair. What day works best?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-white/5 rounded-lg rounded-tr-none px-4 py-3 max-w-[80%]">
                      <p className="text-sm text-white">Tomorrow morning</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-[rgba(102,255,218,0.1)] border border-[rgba(102,255,218,0.2)] rounded-lg rounded-tl-none px-4 py-3 max-w-[80%]">
                      <p className="text-sm text-white">Perfect! I see you have a 10am slot available. Shall I book that?</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
