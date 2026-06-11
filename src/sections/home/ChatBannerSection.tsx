import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ChatButton } from '@/components/buttons/ChatButton';

export function ChatBannerSection() {
  return (
    <section className="bg-navy-light border-y border-[rgba(226,232,240,0.08)]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 text-center">
        <SectionWrapper>
          <h3 className="text-xl font-medium text-white mb-4">
            Not sure where to start? Talk to Horus
          </h3>
          <p className="text-[#64748B] mb-8 max-w-lg mx-auto">
            Tell Horus what you do. He&apos;ll show you a demo for your industry or book a time to build one custom.
          </p>
          <ChatButton>Open Chat</ChatButton>
        </SectionWrapper>
      </div>
    </section>
  );
}
