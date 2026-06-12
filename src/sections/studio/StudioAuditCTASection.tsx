import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';

export function StudioAuditCTASection() {
  return (
    <section className="bg-navy border-y border-[rgba(124,77,255,0.1)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <SectionWrapper className="text-center">
          <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
            RISK FREE
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2] mb-6">
            Find out risk free.
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto mb-8">
            Get your free Audit and Blueprint now. We review your current setup, map what needs to be built, and deliver a full technical plan — before you spend a dollar.
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
