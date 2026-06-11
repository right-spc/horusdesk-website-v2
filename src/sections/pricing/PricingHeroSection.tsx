import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export function PricingHeroSection() {
  return (
    <section
      className="relative min-h-[40vh] flex items-center bg-navy overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(102,255,218,0.06) 0%, transparent 60%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-24 w-full">
        <motion.h1
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl lg:text-7xl font-medium text-white leading-[1.1] tracking-tight text-center"
        >
          Simple, Transparent Pricing
        </motion.h1>
      </div>
    </section>
  );
}
