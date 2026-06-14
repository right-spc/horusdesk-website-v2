import { useState } from 'react';
import { Check } from 'lucide-react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { PrimarySolidButton } from '@/components/buttons/PrimarySolidButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';
import { openChatWidget } from '@/lib/chat';

const features = [
  'Dedicated account manager',
  'Smart lead qualification',
  'Calendar booking',
  'Smart escalation',
  '7,500 AI responses included',
  'Analytics portal access',
  'Website chat widget',
  'One inbox integration (Gmail or Outlook)',
  'Free Setup and training included',
];

export function AIPricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-navy-light py-16 lg:py-24">
      <div className="max-w-[42rem] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-12">
          <p className="text-xs font-medium tracking-wider uppercase text-[#64FFDA] mb-4">
            PRICING
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2] whitespace-nowrap">
            One plan. Everything included.
          </h2>
        </SectionWrapper>

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
                      : 'bg-transparent text-[#94A3B8] hover:text-white'
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
                      : 'bg-transparent text-[#94A3B8] hover:text-white'
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
                  <span className="text-5xl font-medium text-white">$3,999/yr</span>
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
                  <Check size={16} className="text-[#64FFDA] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-white">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Extra info */}
            <p className="text-sm text-[#94A3B8] mb-8 text-center">
              Need more responses? Add 1,000 credits for $59 that never expire as long as you&apos;re subscribed, or contact us for custom packages.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <PrimarySolidButton onClick={openChatWidget}>Ask Horus AI</PrimarySolidButton>
              <CalendarButton>Book a Discovery Call</CalendarButton>
            </div>

            <p className="text-xs text-[#94A3B8] text-center">
              Setup fee waived. No long-term contracts. Cancel anytime.
            </p>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
