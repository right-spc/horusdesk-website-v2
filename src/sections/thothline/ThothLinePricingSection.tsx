import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { PrimarySolidButton } from '@/components/buttons/PrimarySolidButton';
import { useBooking } from '@/components/layout/BookingModal';
import { Check } from 'lucide-react';
import { ThothLinePricingCalculator } from '@/components/shared/ThothLinePricingCalculator';
import { ThothLinePlanComparison } from './ThothLinePlanComparison';
import { tiers, ACCENT, AMBER } from './constants';

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

export function ThothLinePricingSection() {
  const { open } = useBooking();

  return (
    <section className="bg-navy-light py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-10">
          <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: ACCENT }}>
            PRICING
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            One plan per account. No hidden seat tiers.
          </h2>
        </SectionWrapper>

        <ThothLinePlanComparison />

        {/* Tier cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.key}
              variants={cardVariants}
              className={`bg-navy border rounded-2xl p-6 flex flex-col transition-all duration-500 ${
                tier.status === 'coming-soon'
                  ? 'border-[rgba(255,171,64,0.2)] hover:border-[rgba(255,171,64,0.4)] hover:shadow-[0_0_40px_rgba(255,171,64,0.08)]'
                  : 'border-[rgba(226,232,240,0.08)] hover:border-[rgba(255,82,82,0.15)] hover:shadow-[0_0_40px_rgba(255,82,82,0.08)]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-medium tracking-wider uppercase" style={{ color: ACCENT }}>
                  {tier.name}
                </p>
                {tier.status === 'live' && (
                  <span className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full bg-[rgba(100,255,218,0.1)] text-[#64FFDA] border border-[rgba(100,255,218,0.2)]">
                    Live
                  </span>
                )}
                {tier.status === 'coming-soon' && (
                  <span className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full bg-[rgba(255,171,64,0.1)] text-[#FFAB40] border border-[rgba(255,171,64,0.2)]">
                    Coming Soon
                  </span>
                )}
                {tier.status === 'custom' && (
                  <span className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/5 text-[#94A3B8] border border-[rgba(226,232,240,0.08)]">
                    Custom
                  </span>
                )}
              </div>

              <div className="mb-4">
                {tier.key === 'enterprise' ? (
                  <span className="text-3xl font-medium text-white">Custom</span>
                ) : (
                  <>
                    <span className="text-3xl font-medium text-white">
                      ${tier.platformFee}
                    </span>
                    <span className="text-[#94A3B8] text-sm">/mo platform</span>
                    <div className="text-sm text-[#94A3B8] mt-1">
                      + ${tier.seatRate}/active seat
                    </div>
                  </>
                )}
              </div>
              <p className="text-sm text-[#94A3B8] mb-4">
                Setup from {typeof tier.setupFrom === 'number' ? `$${tier.setupFrom.toLocaleString()}` : tier.setupFrom}
              </p>
              {tier.description && (
                <p className="text-sm text-[#94A3B8] mb-4">{tier.description}</p>
              )}
              <ul className="space-y-2 mb-6 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-white">
                    <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: tier.status === 'coming-soon' ? AMBER : ACCENT }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                {tier.status === 'live' && (
                  <PrimarySolidButton
                    onClick={() => open(`Sales Command Center ${tier.name}`)}
                    className="w-full text-sm py-3"
                  >
                    Get Quote
                  </PrimarySolidButton>
                )}
                {tier.status === 'coming-soon' && (
                  <button
                    onClick={() => open('Sales Command Center Control Waitlist')}
                    className="w-full text-center px-4 py-3 rounded-full text-sm font-medium transition-all duration-500 border hover:opacity-90"
                    style={{ color: AMBER, borderColor: `${AMBER}40`, backgroundColor: `${AMBER}10` }}
                  >
                    Join Waitlist
                  </button>
                )}
                {tier.status === 'custom' && (
                  <PrimarySolidButton
                    onClick={() => open('Sales Command Center Enterprise')}
                    className="w-full text-sm py-3"
                  >
                    Contact Us
                  </PrimarySolidButton>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Calculator */}
        <SectionWrapper>
          <ThothLinePricingCalculator />
        </SectionWrapper>
      </div>
    </section>
  );
}
