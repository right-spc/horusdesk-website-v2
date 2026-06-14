import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';

export function ChatBannerSection() {
  return (
    <section className="bg-navy-light border-y border-[rgba(226,232,240,0.08)]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 text-center">
        <SectionWrapper>
          <h3 className="text-xl font-medium text-white mb-4">
            Not sure where to start?
          </h3>
          <p className="text-[#94A3B8] mb-8 max-w-lg mx-auto">
            Whether you need an AI receptionist, a managed support and sales team, or custom software built from scratch, we can help you choose the right path.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ChatButton>Ask Horus AI</ChatButton>
            <CalendarButton prefillInterest="Not Sure Yet">Book a Discovery Call</CalendarButton>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
