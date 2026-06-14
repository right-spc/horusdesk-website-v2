import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';

const faqs = [
  {
    question: 'Where are your agents based?',
    answer: 'All agents are based in Cairo, Egypt. They work from professional offices with fiber connectivity, backup power, and on-site operations managers.',
  },
  {
    question: 'What timezone coverage do you offer?',
    answer: 'Cairo is a bustling city that never sleeps. We can provide 24/7 coverage as needed — morning, night, weekend, or holiday shifts.',
  },
  {
    question: 'Do you provide equipment and software?',
    answer: 'It depends on your preference. Some clients like to provide their own hardware and licenses. Others want us to handle everything from A to Z. We customize per engagement.',
  },
  {
    question: 'Can I interview agents before they start?',
    answer: 'Yes.',
  },
  {
    question: 'What languages do your agents speak?',
    answer: 'We can hire for any language. Egypt is rich with English, Spanish, French, German, and Russian speakers. If you need a specific language, we\'ll source for it.',
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
          <ChevronDown size={20} className="text-[#94A3B8]" aria-hidden="true" />
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
            <p className="text-[#94A3B8] leading-relaxed pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function TalentFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-navy-light py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-12">
          <p className="text-xs font-medium tracking-wider uppercase text-[#FFAB40] mb-4">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            Questions about Managed Teams
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
          <div className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-2xl p-8 text-center">
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
