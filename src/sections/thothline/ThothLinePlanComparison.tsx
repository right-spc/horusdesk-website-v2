import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { PrimarySolidButton } from '@/components/buttons/PrimarySolidButton';
import { useBooking } from '@/components/layout/BookingModal';
import { Check, X, Clock, DollarSign } from 'lucide-react';
import { ACCENT, AMBER } from './constants';

interface ComparisonRow {
  label: string;
  base: string;
  command: string;
  control: string;
  enterprise: string;
}

const rows: ComparisonRow[] = [
  { label: 'Platform Fee', base: '$300/mo', command: '$400/mo', control: '$500/mo', enterprise: 'Custom' },
  { label: 'Per Active Seat', base: '$10', command: '$18', control: '$22', enterprise: 'Custom' },
  { label: 'Voice, leads, core workflow', base: 'yes', command: 'yes', control: 'yes', enterprise: 'yes' },
  { label: 'Email campaigns', base: 'no', command: 'yes', control: 'yes', enterprise: 'yes' },
  { label: 'Individual SMS texting', base: 'no', command: 'soon', control: 'soon', enterprise: 'soon' },
  { label: 'API access & webhooks', base: 'no', command: 'no', control: 'soon', enterprise: 'soon' },
  { label: 'Advanced workflow routing', base: 'no', command: 'no', control: 'yes', enterprise: 'yes' },
  { label: 'SMS campaigns', base: 'no', command: 'no', control: 'soon', enterprise: 'soon' },
  { label: 'Custom integrations', base: 'no', command: 'no', control: 'custom', enterprise: 'custom' },
  { label: 'White-label', base: 'no', command: 'no', control: 'no', enterprise: 'yes' },
];

function Cell({ value }: { value: string }) {
  if (value === 'yes') {
    return <Check size={18} className="mx-auto" style={{ color: ACCENT }} />;
  }
  if (value === 'no') {
    return <X size={18} className="mx-auto" style={{ color: '#64748B' }} />;
  }
  if (value === 'soon') {
    return <Clock size={18} className="mx-auto" style={{ color: AMBER }} />;
  }
  if (value === 'custom') {
    return <DollarSign size={18} className="mx-auto" style={{ color: ACCENT }} />;
  }
  return <span className="text-sm text-white">{value}</span>;
}

export function ThothLinePlanComparison() {
  const { open } = useBooking();

  return (
    <SectionWrapper className="mb-12">
      <div className="text-center mb-8">
        <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: ACCENT }}>
          COMPARE
        </p>
        <h2 className="text-3xl lg:text-4xl font-medium text-white leading-[1.2]">Choose Your Plan</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] table-fixed border-collapse">
          <thead>
            <tr className="border-b border-[rgba(226,232,240,0.08)]">
              <th className="text-left py-4 pr-4 text-sm font-medium text-[#94A3B8] w-[40%]" />
              <th className="text-center py-4 px-2 text-sm font-medium text-white w-[15%]">Base</th>
              <th className="text-center py-4 px-2 text-sm font-medium text-white w-[15%]">Command</th>
              <th className="text-center py-4 px-2 text-sm font-medium text-white w-[15%]">Control</th>
              <th className="text-center py-4 px-2 text-sm font-medium text-white w-[15%]">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-[rgba(226,232,240,0.06)] last:border-0">
                <td className="py-4 pr-4 text-sm text-white font-medium">{row.label}</td>
                <td className="py-4 px-2 text-center">
                  <Cell value={row.base} />
                </td>
                <td className="py-4 px-2 text-center">
                  <Cell value={row.command} />
                </td>
                <td className="py-4 px-2 text-center">
                  <Cell value={row.control} />
                </td>
                <td className="py-4 px-2 text-center">
                  <Cell value={row.enterprise} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-navy border border-[rgba(226,232,240,0.08)] rounded-2xl p-5">
        <p className="text-sm text-[#94A3B8]">
          <span className="text-white font-medium">Enterprise</span> — 100+ users, custom pricing, white label, and everything above
        </p>
        <PrimarySolidButton onClick={() => open('Sales Command Center Enterprise')} className="text-sm py-2.5 px-6">
          Contact Us
        </PrimarySolidButton>
      </div>
    </SectionWrapper>
  );
}
