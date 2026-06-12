import { Check } from 'lucide-react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';

const features = [
  'Managed recruitment and onboarding',
  'Training tailored to your needs — 3 days to multi-week',
  'Egypt-based operations manager',
  'Dedicated account director',
  'Monthly performance reviews',
  'Scale up or down monthly',
];

export function TalentPricingSection() {
  return (
    <section className="bg-navy py-24 lg:py-40">
      <div className="max-w-[42rem] mx-auto px-6 lg:px-8">
        <SectionWrapper>
          <div className="bg-surface border border-[rgba(226,232,240,0.08)] rounded-2xl p-10">
            <h3 className="text-2xl font-medium text-white mb-4 text-center">
              Pricing that scales with your needs
            </h3>

            <div className="text-center mb-8">
              <span className="text-5xl font-medium text-white">$10–35/hr</span>
              <span className="text-[#64748B] text-lg ml-2">per agent</span>
            </div>

            <ul className="space-y-3 mb-6">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check size={16} className="text-[#FFAB40] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-white">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Proof of concept banner */}
            <div className="mt-6 bg-[rgba(255,171,64,0.05)] border border-[rgba(255,171,64,0.1)] rounded-xl p-4 mb-8">
              <p className="text-sm font-medium text-[#FFAB40]">
                Start with a 3-month proof of concept. Convert to a 1-year contract only if you're happy.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <ChatButton>Ask Horus AI</ChatButton>
              <CalendarButton>Book a Discovery Call</CalendarButton>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
