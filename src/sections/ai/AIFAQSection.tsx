import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';

const faqs = [
  {
    question: 'What counts as a response?',
    answer: 'One AI response = one credit. Your plan includes 7,500 responses per month.',
  },
  {
    question: 'Can I buy more responses?',
    answer: 'Yes. You can add 1,000 responses for $59 that never expire as long as you\'re subscribed. If you consistently need more, we can build a custom package.',
  },
  {
    question: 'Can I connect both Gmail and Outlook?',
    answer: 'Each agent connects to one inbox only — either Gmail or Outlook. If you need multiple inboxes, we can discuss a custom setup.',
  },
  {
    question: 'Can I cancel?',
    answer: 'Yes, anytime. Flexible monthly billing or annual billing.',
  },
  {
    question: 'Is my data used to train AI models?',
    answer: 'No. Your data is processed via secure APIs and never used to train foundation models. We use Supabase which maintains SOC 2 Type II certification for data storage.',
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

export function AIFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-navy py-24 lg:py-40">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
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
