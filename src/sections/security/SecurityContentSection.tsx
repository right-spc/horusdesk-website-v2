import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';

const sections = [
  {
    title: 'Enterprise-Grade Infrastructure',
    body: 'Your data is stored on Supabase which maintains SOC 2 Type II certification and GDPR compliance.',
  },
  {
    title: 'Your Data Stays Yours',
    body: "We use Anthropic's Claude API under enterprise terms. Your data is not used to train foundation models.",
  },
  {
    title: 'Transparent Practices',
    body: 'No data selling. 30-day deletion available on request. Encryption at rest and in transit.',
  },
];

export function SecurityContentSection() {
  return (
    <section className="bg-navy-light py-24 lg:py-40">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="space-y-12">
          {sections.map((section, index) => (
            <SectionWrapper key={section.title} delay={index * 0.1}>
              <h3 className="text-xl font-medium text-white mb-4">{section.title}</h3>
              <p className="text-[#64748B] leading-relaxed">{section.body}</p>
            </SectionWrapper>
          ))}
        </div>

        <SectionWrapper delay={0.3} className="mt-8">
          <p className="text-sm text-[#64FFDA]">
            Questions? Contact{' '}
            <a href="mailto:security@horusdesk.com" className="hover:underline">
              security@horusdesk.com
            </a>
          </p>
        </SectionWrapper>

        <SectionWrapper delay={0.4} className="flex flex-wrap justify-center gap-4 mt-16">
          <ChatButton>Ask Horus</ChatButton>
          <CalendarButton>Book a Security Review Call</CalendarButton>
        </SectionWrapper>
      </div>
    </section>
  );
}
