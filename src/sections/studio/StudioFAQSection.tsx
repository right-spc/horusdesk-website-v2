import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';

const faqs = [
  {
    question: 'Do I own the source code?',
    answer: 'Yes. Everything we build is yours. We deliver the full source code repository, documentation, and deployment credentials at handoff. You can modify it, host it elsewhere, or hire another team — no restrictions.',
  },
  {
    question: 'What if I need changes after launch?',
    answer: 'We offer monthly retainers for ongoing development, or you can hire us ad-hoc for specific updates. Alternatively, your in-house team can take over since you own the full codebase and documentation.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'React, Next.js, TypeScript for web. React Native or Flutter for mobile. Node.js, Python, or Go for backends. PostgreSQL or Supabase for databases. We pick the stack that fits your project, not our comfort zone.',
  },
  {
    question: 'Can you integrate with our existing tools?',
    answer: 'Yes. We build native API integrations with whatever you already use — QuickBooks, Stripe, Twilio, Google Calendar, or internal systems. No Zapier workarounds. Real, robust integrations.',
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[rgba(226,232,240,0.08)]">
      <button
        onClick={onToggle}
        className="flex justify-between items-center py-5 w-full text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          className="flex-shrink-0"
        >
          <ChevronDown size={20} className="text-[#64748B]" aria-hidden="true" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            className="overflow-hidden"
          >
            <p className="text-[#64748B] leading-relaxed pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function StudioFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-navy-light py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-12">
          <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            Questions about Software Studio
          </h2>
        </SectionWrapper>

        <SectionWrapper>
          <div>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper delay={0.2} className="mt-16">
          <div className="bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-2xl p-8 text-center">
            <h3 className="text-xl font-medium text-white mb-6">Still have questions?</h3>
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
