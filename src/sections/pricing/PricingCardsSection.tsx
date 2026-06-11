import { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { PrimarySolidButton } from '@/components/buttons/PrimarySolidButton';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';
import { openChatWidget } from '@/lib/chat';

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

function AIPricingCard() {
  const [isAnnual, setIsAnnual] = useState(false);

  const features = [
    'Website chat',
    'One inbox (Gmail/Outlook)',
    '7,500 responses',
    'Dedicated account manager',
    'Analytics portal',
    'Setup included',
  ];

  return (
    <motion.div
      variants={cardVariants}
      className="
        bg-surface border border-[rgba(226,232,240,0.08)] rounded-2xl p-10
        transition-all duration-500 ease-out
        hover:shadow-card-glow
      "
    >
      <h3 className="text-xl font-medium text-white mb-6">Horus AI</h3>

      {/* Toggle */}
      <div className="flex justify-center mb-6">
        <div className="bg-navy-light rounded-full p-1 flex gap-1">
          <button
            onClick={() => setIsAnnual(false)}
            className={`
              px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300
              ${!isAnnual ? 'bg-[#64FFDA] text-navy' : 'bg-transparent text-[#64748B] hover:text-white'}
            `}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`
              px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300
              ${isAnnual ? 'bg-[#64FFDA] text-navy' : 'bg-transparent text-[#64748B] hover:text-white'}
            `}
          >
            Annual
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="text-center mb-4">
        {isAnnual ? (
          <>
            <span className="text-4xl font-medium text-white">$3,599/yr</span>
            <div className="mt-2 inline-block bg-[rgba(102,255,218,0.1)] text-[#64FFDA] border border-[rgba(102,255,218,0.2)] rounded-full px-3 py-1 text-xs font-medium">
              Save 25%
            </div>
          </>
        ) : (
          <>
            <span className="text-4xl font-medium text-white">$499/mo</span>
            <div className="mt-2 inline-block bg-[rgba(102,255,218,0.1)] text-[#64FFDA] border border-[rgba(102,255,218,0.2)] rounded-full px-3 py-1 text-xs font-medium">
              $299 first 3 months
            </div>
          </>
        )}
      </div>

      <ul className="space-y-2 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check size={14} className="text-[#64FFDA] mt-0.5 flex-shrink-0" />
            <span className="text-sm text-white">{f}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-3">
        <PrimarySolidButton onClick={openChatWidget}>Start with Horus AI</PrimarySolidButton>
        <CalendarButton>Book Setup Call</CalendarButton>
      </div>
    </motion.div>
  );
}

function TalentPricingCard() {
  const features = [
    'Managed recruitment',
    '2-week training',
    'Egypt-based ops manager',
    'US account director',
    'Scale monthly',
  ];

  return (
    <motion.div
      variants={cardVariants}
      className="
        bg-surface border border-[rgba(226,232,240,0.08)] rounded-2xl p-10
        transition-all duration-500 ease-out
        hover:shadow-amber-glow
      "
    >
      <h3 className="text-xl font-medium text-white mb-6">Horus Talent</h3>
      <div className="text-center mb-6">
        <span className="text-4xl font-medium text-white">From $10/hr</span>
        <span className="text-[#64748B] text-sm ml-2">per agent</span>
      </div>
      <ul className="space-y-2 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check size={14} className="text-[#FFAB40] mt-0.5 flex-shrink-0" />
            <span className="text-sm text-white">{f}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-3">
        <ChatButton>Chat About Talent</ChatButton>
        <CalendarButton>Book Consultation</CalendarButton>
      </div>
    </motion.div>
  );
}

function StudioPricingCard() {
  const features = [
    'Custom web apps',
    'Mobile development',
    'AI integrations',
    'No third-party tools',
  ];

  return (
    <motion.div
      variants={cardVariants}
      className="
        bg-surface border border-[rgba(226,232,240,0.08)] rounded-2xl p-10
        transition-all duration-500 ease-out
        hover:shadow-violet-glow
      "
    >
      <h3 className="text-xl font-medium text-white mb-6">Horus Studio</h3>
      <div className="text-center mb-6">
        <span className="text-4xl font-medium text-white">From $1,800</span>
      </div>
      <ul className="space-y-2 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check size={14} className="text-[#7C4DFF] mt-0.5 flex-shrink-0" />
            <span className="text-sm text-white">{f}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-3">
        <ChatButton>Discuss in Chat</ChatButton>
        <CalendarButton>Book Discovery Call</CalendarButton>
      </div>
    </motion.div>
  );
}

export function PricingCardsSection() {
  return (
    <section className="bg-navy-light py-24 lg:py-40">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-3 gap-8"
        >
          <AIPricingCard />
          <TalentPricingCard />
          <StudioPricingCard />
        </motion.div>
      </div>
    </section>
  );
}
