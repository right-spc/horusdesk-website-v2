import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';

export function BlogCTA() {
  return (
    <section className="bg-navy py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <SectionWrapper>
          <h2 className="text-3xl lg:text-4xl font-medium text-white leading-[1.2] mb-6">
            Tired of explaining why your connection rate dropped again?
          </h2>
          <p className="text-lg text-[#94A3B8] mb-8">
            We build custom call center platforms and operational software for BPOs — no templates, no open-source duct tape. Start with a free technical blueprint.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ChatButton>Ask Horus AI</ChatButton>
            <CalendarButton>Book a Discovery Call</CalendarButton>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
