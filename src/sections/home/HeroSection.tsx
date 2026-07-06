import { motion } from 'framer-motion';
import { Bot, Users, Code2 } from 'lucide-react';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';
import { OperationsDashboard } from '@/components/shared/OperationsDashboard';

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
      className="relative min-h-[60vh] flex items-center bg-navy overflow-hidden pt-[100px] pb-16"
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
              Operations Run by Software. Or by People. Or Both.
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-6"
            >
              Scale Your Operations Without Adding Headaches
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-[#94A3B8] leading-relaxed mb-8 max-w-xl"
            >
              AI receptionists, expert teams, and custom software — built for service businesses. We handle the setup. You focus on growth.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <ChatButton size="large">Ask Horus AI</ChatButton>
              <CalendarButton size="large">Book a Discovery Call</CalendarButton>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <Bot size={16} className="text-[#94A3B8]" aria-hidden="true" />
                <span className="text-sm text-[#94A3B8]">AI that qualifies 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-[#94A3B8]" aria-hidden="true" />
                <span className="text-sm text-[#94A3B8]">Expert teams on demand</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 size={16} className="text-[#94A3B8]" aria-hidden="true" />
                <span className="text-sm text-[#94A3B8]">Custom software</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Operations Dashboard */}
          <div className="hidden lg:block">
            <OperationsDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
