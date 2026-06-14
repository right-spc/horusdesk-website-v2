import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';

export function StudioPricingSection() {
  return (
    <section className="bg-navy-light py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
        <SectionWrapper>
          <p className="text-2xl font-medium text-white mb-2">
            Project-based and retainer options
          </p>
          <p className="text-4xl font-medium text-white mt-2">
            Small projects start from $1,800
          </p>
          <p className="text-[#94A3B8] mt-4">
            Retainers available for ongoing development.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <ChatButton>Ask Horus AI</ChatButton>
            <CalendarButton>Book a Discovery Call</CalendarButton>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
