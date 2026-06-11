import { useState } from 'react';
import { Check } from 'lucide-react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { PrimarySolidButton } from '@/components/buttons/PrimarySolidButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';
import { openChatWidget } from '@/lib/chat';

const features = [
  'Website chat widget',
  'One inbox integration (Gmail or Outlook)',
  '7,500 AI responses included',
  'Smart lead qualification',
  'Calendar booking',
  'Smart escalation',
  'Dedicated account manager',
  'Analytics portal access',
  'Setup and training included',
];

export function AIPricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-navy py-24 lg:py-40">
      <div className="max-w-[42rem] mx-auto px-6 lg:px-8">
        <SectionWrapper>
          <div className="bg-surface border border-[rgba(226,232,240,0.08)] rounded-2xl p-10 shadow-2xl">
            {/* Label */}
            <p className="text-xs font-medium tracking-wider uppercase text-[#64FFDA] mb-6 text-center">
              AI AGENT
            </p>

            {/* Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-navy-light rounded-full p-1 flex gap-1">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`
                    px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${!isAnnual
                      ? 'bg-[#64FFDA] text-navy'
                      : 'bg-transparent text-[#64748B] hover:text-white'
                    }
                  `}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`
                    px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${isAnnual
                      ? 'bg-[#64FFDA] text-navy'
                      : 'bg-transparent text-[#64748B] hover:text-white'
                    }
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
                  <span className="text-5xl font-medium text-white">$3,599/yr</span>
                  <div className="mt-3 inline-block bg-[rgba(102,255,218,0.1)] text-[#64FFDA] border border-[rgba(102,255,218,0.2)] rounded-full px-3 py-1 text-sm font-medium">
                    Save 25%
                  </div>
                </>
              ) : (
                <>
                  <span className="text-5xl font-medium text-white">$499/mo</span>
                  <div className="mt-3 inline-block bg-[rgba(102,255,218,0.1)] text-[#64FFDA] border border-[rgba(102,255,218,0.2)] rounded-full px-3 py-1 text-sm font-medium">
                    $299 first 3 months
                  </div>
                </>
              )}
            </div>

            {/* Features */}
            <ul className="space-y-3 mt-8 mb-6">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check size={16} className="text-[#64FFDA] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Extra info */}
            <p className="text-sm text-[#64748B] mb-8 text-center">
              Need more responses? Add 1,000 credits for $59 that never expire as long as you&apos;re subscribed, or contact us for custom packages.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <PrimarySolidButton onClick={openChatWidget}>Start with AI Agent</PrimarySolidButton>
              <CalendarButton>Book a Setup Call</CalendarButton>
            </div>

            <p className="text-xs text-[#64748B] text-center">
              Setup fee waived. No long-term contracts. Cancel anytime.
            </p>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
