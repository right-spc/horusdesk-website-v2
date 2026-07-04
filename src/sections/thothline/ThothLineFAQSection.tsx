import { SectionWrapper } from '@/components/layout/SectionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs, ACCENT } from './constants';

export function ThothLineFAQSection() {
  return (
    <section className="bg-navy py-12 lg:py-16">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-12">
          <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: ACCENT }}>
            FAQ
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            Common questions
          </h2>
        </SectionWrapper>

        <SectionWrapper>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[rgba(226,232,240,0.08)]"
              >
                <AccordionTrigger className="text-white text-left hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#94A3B8] leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SectionWrapper>
      </div>
    </section>
  );
}
