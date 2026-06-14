import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';

const tools = ['Zapier', 'Salesforce', 'Airtable', 'HubSpot', 'Make.com', 'Nintex'];

export function NoThirdPartyBanner() {
  return (
    <section className="bg-navy-light">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
        <SectionWrapper>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2] mb-6">
            Why our approach is different
          </h2>
          <p className="text-lg text-[#94A3B8] leading-relaxed mb-8">
            Most agencies stitch together off-the-shelf tools and charge you premium prices. We build everything from the ground up using custom code. That means no subscription bloat, no integration limits, and no vendor lock-in. Just software that works exactly how you need it to.
          </p>

          {/* Crossed-out tools */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-sm text-[#94A3B8] line-through"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <ChatButton>Ask Horus AI</ChatButton>
            <CalendarButton>Book a Discovery Call</CalendarButton>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
