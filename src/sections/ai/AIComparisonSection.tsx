import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { X, Check } from 'lucide-react';


const rows = [
  {
    label: 'Monthly Cost',
    human: '$3,000–5,000+/mo salary + benefits',
    humanStatus: 'x',
    diy: '$50–300/mo + hours of your time',
    diyStatus: 'x',
    horus: '$499/mo, setup included',
  },
  {
    label: 'Availability',
    human: '9 to 5, breaks, sick days, vacations',
    humanStatus: 'x',
    diy: '24/7 if you configure it correctly',
    diyStatus: 'check',
    horus: '24/7, fully managed, never offline',
  },
  {
    label: 'Setup Time',
    human: '2–4 weeks hiring and training',
    humanStatus: 'x',
    diy: 'Days of configuration, testing, and tweaking',
    diyStatus: 'x',
    horus: 'Live in 24 hours, we do everything',
  },
  {
    label: 'Lead Qualification',
    human: 'Inconsistent, depends on mood and training',
    humanStatus: 'x',
    diy: 'Basic scripts, needs constant tuning',
    diyStatus: 'x',
    horus: 'Smart qualification trained on your business',
  },
  {
    label: 'Languages',
    human: 'Usually 1, maybe 2',
    humanStatus: 'x',
    diy: '1–2 if supported by the platform',
    diyStatus: 'x',
    horus: '6 languages natively, no translation layer',
  },
  {
    label: 'Calendar Booking',
    human: 'Manual back-and-forth over email or phone',
    humanStatus: 'x',
    diy: 'Requires integration setup and maintenance',
    diyStatus: 'x',
    horus: 'Automatic, works out of the box',
  },
  {
    label: 'Ongoing Management',
    human: 'You manage, train, and replace',
    humanStatus: 'x',
    diy: 'You maintain, update, and troubleshoot',
    diyStatus: 'x',
    horus: 'Dedicated account manager included',
  },
];

function StatusIcon({ status }: { status: 'x' | 'check' }) {
  if (status === 'x') {
    return <X size={14} className="text-red-400 flex-shrink-0" aria-hidden="true" />;
  }
  return <Check size={14} className="text-[#64FFDA] flex-shrink-0" aria-hidden="true" />;
}

export function AIComparisonSection() {
  return (
    <section className="bg-navy py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-[#64FFDA] mb-4">
            THE REAL COST
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            Human vs. DIY Chatbot vs. Horus AI
          </h2>
        </SectionWrapper>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-[rgba(226,232,240,0.08)]">
                <th className="text-left py-4 px-4 text-sm font-medium text-[#94A3B8]">Factor</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-[#94A3B8]">Human Receptionist</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-[#94A3B8]">DIY AI Chatbot</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-[#64FFDA]">Horus AI</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-[rgba(226,232,240,0.04)] hover:bg-[rgba(102,255,218,0.02)] transition-colors"
                >
                  <td className="py-4 px-4 text-sm text-white font-medium">{row.label}</td>
                  <td className="py-4 px-4 text-sm text-[#94A3B8]">
                    <span className="inline-flex items-center gap-2">
                      <StatusIcon status={row.humanStatus as 'x' | 'check'} />
                      {row.human}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-[#94A3B8]">
                    <span className="inline-flex items-center gap-2">
                      <StatusIcon status={row.diyStatus as 'x' | 'check'} />
                      {row.diy}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-white">
                    <span className="inline-flex items-center gap-2">
                      <Check size={14} className="text-[#64FFDA] flex-shrink-0" aria-hidden="true" />
                      {row.horus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="mt-12 bg-[rgba(102,255,218,0.05)] border border-[rgba(102,255,218,0.1)] rounded-2xl p-8 text-center">
          <p className="text-lg text-white font-medium mb-2">
            The average service business loses 40% of after-hours leads to competitors.
          </p>
          <p className="text-lg text-[#64FFDA] font-medium">
            Horus AI captures them while you sleep.
          </p>
        </div>
      </div>
    </section>
  );
}
