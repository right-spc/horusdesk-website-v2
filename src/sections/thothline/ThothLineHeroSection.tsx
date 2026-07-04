import { motion } from 'framer-motion';
import { ThothLineDashboard } from '@/components/shared/ThothLineDashboard';
import { PrimarySolidButton } from '@/components/buttons/PrimarySolidButton';
import { useBooking } from '@/components/layout/BookingModal';
import { ACCENT } from './constants';

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

export function ThothLineHeroSection() {
  const { open } = useBooking();

  return (
    <section
      className="relative min-h-[80vh] flex items-center bg-navy overflow-hidden pt-[100px] pb-12"
      style={{
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(255, 82, 82, 0.06) 0%, transparent 60%)',
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
              className="text-xs font-medium tracking-wider uppercase mb-6"
              style={{ color: ACCENT }}
            >
              THOTH LINE
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-6"
            >
              Your Sales Process, Programmed Exactly As You Run It
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-[#94A3B8] leading-relaxed mb-8 max-w-xl"
            >
              Thoth Line is not a phone system. It is a private Sales Operating System where your entire
              workflow — voice, email, leads, compliance, and reporting — runs in one custom-built platform.
              No integrations. No tab-switching. No forced templates.
            </motion.p>

            <motion.div variants={itemVariants}>
              <PrimarySolidButton onClick={() => open('Sales Command Center')}>
                Get Your Custom Setup Quote
              </PrimarySolidButton>
            </motion.div>
          </motion.div>

          {/* Right Column - Dashboard */}
          <div className="hidden lg:block">
            <ThothLineDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
