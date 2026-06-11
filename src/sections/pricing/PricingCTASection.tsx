import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';

export function PricingCTASection() {
  return (
    <section className="bg-navy py-24 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
        <SectionWrapper>
          <h3 className="text-xl font-medium text-white mb-6">
            Not sure which fits your business?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <ChatButton>Chat with Horus</ChatButton>
            <CalendarButton>Book a Free Consultation</CalendarButton>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
