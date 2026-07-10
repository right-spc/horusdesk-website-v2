import { useMemo, useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Globe } from 'lucide-react';
import { tiers, usageRates, ACCENT } from '@/sections/thothline/constants';

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const currencyCents = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

interface SliderFieldProps {
  label: string;
  value: number;
  max: number;
  step: number;
  unit: string;
  rate?: string;
  onChange: (value: number) => void;
  disabled?: boolean;
}

function SliderField({ label, value, max, step, unit, rate, onChange, disabled }: SliderFieldProps) {
  return (
    <div className={`${disabled ? 'opacity-50' : ''}`}>
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm text-white font-medium">
          {label}
          {rate && (
            <span className="ml-2 text-xs font-normal text-[#94A3B8]">({rate})</span>
          )}
        </label>
        <span className="text-sm text-[#94A3B8]">
          {value.toLocaleString()} {unit}
        </span>
      </div>
      <Slider
        min={0}
        max={max}
        step={step}
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        disabled={disabled}
      />
    </div>
  );
}

// Per-item volume discount tiers. Range: 5% – 30%.
const getVoiceDiscount = (minutes: number) => {
  if (minutes > 149_000) return 0.30;
  if (minutes > 125_000) return 0.25;
  if (minutes > 100_000) return 0.20;
  if (minutes > 75_000) return 0.15;
  if (minutes > 50_000) return 0.10;
  if (minutes > 10_000) return 0.05;
  return 0;
};

const getRecordingDiscount = (minutes: number) => {
  if (minutes > 50_000) return 0.30;
  if (minutes > 35_000) return 0.25;
  if (minutes > 25_000) return 0.20;
  if (minutes > 15_000) return 0.15;
  if (minutes > 10_000) return 0.10;
  if (minutes > 5_000) return 0.05;
  return 0;
};

const getEmailDiscount = (emails: number) => {
  if (emails > 400_000) return 0.30;
  if (emails > 300_000) return 0.25;
  if (emails > 200_000) return 0.20;
  if (emails > 100_000) return 0.15;
  if (emails > 50_000) return 0.10;
  if (emails > 10_000) return 0.05;
  return 0;
};

const getLeadsDiscount = (leads: number) => {
  if (leads > 4_000) return 0.30;
  if (leads > 3_000) return 0.25;
  if (leads > 2_000) return 0.20;
  if (leads > 1_000) return 0.15;
  if (leads > 500) return 0.10;
  if (leads > 100) return 0.05;
  return 0;
};

// Rough estimate of buying the same capabilities as separate SaaS tools.
const calculateTypicalStackCost = (
  seats: number,
  minutes: number,
  numbers: number,
  emails: number,
  leads: number,
  recordCalls: boolean
) => {
  const marketRates = {
    seatSaaS: 120,
    voice: 0.025,
    recording: 0.012,
    number: 2.5,
    email: 0.003,
    lead: 2.5,
  };
  return (
    seats * marketRates.seatSaaS +
    minutes * marketRates.voice +
    (recordCalls ? minutes * marketRates.recording : 0) +
    numbers * marketRates.number +
    emails * marketRates.email +
    leads * marketRates.lead
  );
};

const calculatorTiers = tiers.filter((t) => t.key !== 'enterprise');

function formatUnitRate(rate: number) {
  if (rate === 0) return '$0';
  if (rate < 0.1) return `$${rate.toFixed(3)}`;
  return `$${rate.toFixed(2)}`;
}

export function ThothLinePricingCalculator() {
  const [tierKey, setTierKey] = useState('command');
  const [seats, setSeats] = useState(10);
  const [minutes, setMinutes] = useState(5_000);
  const [numbers, setNumbers] = useState(5);
  const [emails, setEmails] = useState(10_000);
  const [leads, setLeads] = useState(500);
  const [recordCalls, setRecordCalls] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  const tier = calculatorTiers.find((t) => t.key === tierKey) || calculatorTiers[1];
  const isBase = tier.key === 'base';

  const platformFee = seats >= 50 ? 0 : tier.platformFee;
  const seatCost = seats * tier.seatRate;

  const voiceDiscount = getVoiceDiscount(minutes);
  const voiceEffectiveRate = usageRates.voice * (1 - voiceDiscount);
  const voiceCost = minutes * voiceEffectiveRate;

  const recordingDiscount = getRecordingDiscount(minutes);
  const recordingEffectiveRate = usageRates.recording * (1 - recordingDiscount);
  const recordingCost = recordCalls ? minutes * recordingEffectiveRate : 0;

  const numbersCost = numbers * usageRates.number;

  const emailDiscount = tier.supportsEmail ? getEmailDiscount(emails) : 0;
  const emailEffectiveRate = tier.supportsEmail ? usageRates.email * (1 - emailDiscount) : 0;
  const emailCost = tier.supportsEmail ? emails * emailEffectiveRate : 0;

  const leadsDiscount = tier.supportsLeads ? getLeadsDiscount(leads) : 0;
  const leadsEffectiveRate = tier.supportsLeads ? usageRates.lead * (1 - leadsDiscount) : 0;
  const leadsCost = tier.supportsLeads ? leads * leadsEffectiveRate : 0;

  const total = useMemo(
    () => platformFee + seatCost + voiceCost + recordingCost + numbersCost + emailCost + leadsCost,
    [platformFee, seatCost, voiceCost, recordingCost, numbersCost, emailCost, leadsCost]
  );

  const typicalStack = useMemo(
    () => calculateTypicalStackCost(seats, minutes, numbers, tier.supportsEmail ? emails : 0, tier.supportsLeads ? leads : 0, recordCalls),
    [seats, minutes, numbers, emails, leads, tier, recordCalls]
  );
  const savings = typicalStack - total;

  const lineItems = [
    {
      label: 'Platform fee',
      count: platformFee === 0 ? 'waived' : null,
      pre: platformFee,
      final: platformFee,
      discount: 0,
    },
    {
      label: 'Active seats',
      count: `${seats.toLocaleString()} seats`,
      pre: seatCost,
      final: seatCost,
      discount: 0,
    },
    {
      label: 'Voice minutes',
      count: `${minutes.toLocaleString()} min`,
      pre: minutes * usageRates.voice,
      final: voiceCost,
      discount: voiceDiscount,
    },
    ...(recordCalls
      ? [
          {
            label: 'Call recording',
            count: `${minutes.toLocaleString()} min`,
            pre: minutes * usageRates.recording,
            final: recordingCost,
            discount: recordingDiscount,
          },
        ]
      : []),
    {
      label: 'Phone numbers',
      count: `${numbers.toLocaleString()} numbers`,
      pre: numbersCost,
      final: numbersCost,
      discount: 0,
    },
    {
      label: 'Email sends',
      count: tier.supportsEmail ? `${emails.toLocaleString()} emails` : 'Command+ only',
      pre: tier.supportsEmail ? emails * usageRates.email : 0,
      final: emailCost,
      discount: emailDiscount,
      gated: !tier.supportsEmail,
    },
    {
      label: 'B2B Leads',
      count: `${leads.toLocaleString()} leads`,
      pre: leads * usageRates.lead,
      final: leadsCost,
      discount: leadsDiscount,
    },
  ];

  const voiceRateLabel = `${formatUnitRate(voiceEffectiveRate)}/min${voiceDiscount > 0 ? ` · ${Math.round(voiceDiscount * 100)}% off` : ' · Up to 30% volume discount'}`;
  const recordingRateLabel = `${formatUnitRate(recordingEffectiveRate)}/min${recordingDiscount > 0 ? ` · ${Math.round(recordingDiscount * 100)}% off` : ' · Up to 30% volume discount'}`;
  const emailRateLabel = tier.supportsEmail
    ? `${formatUnitRate(emailEffectiveRate)}/email${emailDiscount > 0 ? ` · ${Math.round(emailDiscount * 100)}% off` : ' · Up to 30% volume discount'}`
    : undefined;
  const leadsRateLabel = `${formatUnitRate(leadsEffectiveRate)}/contact${leadsDiscount > 0 ? ` · ${Math.round(leadsDiscount * 100)}% off` : ' · Up to 30% volume discount'}`;

  return (
    <div className="bg-surface border border-[rgba(226,232,240,0.08)] rounded-2xl p-6 lg:p-8">
      <h3 className="text-xl font-medium text-white mb-6">Estimate your monthly cost</h3>

      {/* Tier selector */}
      <div className="flex flex-wrap gap-2 mb-8">
        {calculatorTiers.map((t) =>
          t.key === 'control' ? (
            <div
              key={t.key}
              className="relative"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <button
                disabled
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-transparent text-[#94A3B8] border border-[rgba(226,232,240,0.08)] cursor-not-allowed opacity-60"
              >
                Control (Coming Soon)
              </button>
              {showTooltip && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 px-3 py-2 bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-lg text-xs text-[#94A3B8] shadow-lg z-10">
                  Control is launching soon. Join the waitlist to be notified.
                  <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-navy-light" />
                </div>
              )}
            </div>
          ) : (
            <button
              key={t.key}
              onClick={() => setTierKey(t.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                tierKey === t.key
                  ? 'text-navy'
                  : 'bg-transparent text-[#94A3B8] hover:text-white border border-[rgba(226,232,240,0.08)]'
              }`}
              style={tierKey === t.key ? { backgroundColor: ACCENT } : undefined}
            >
              {t.name}
            </button>
          )
        )}
      </div>

      {/* Sliders */}
      <div className="space-y-6 mb-8">
        <SliderField
          label="Active seats"
          rate={`${formatUnitRate(tier.seatRate)}/seat`}
          value={seats}
          max={200}
          step={1}
          unit="seats"
          onChange={setSeats}
        />
        <SliderField
          label="Calling minutes"
          rate={voiceRateLabel}
          value={minutes}
          max={150_000}
          step={1_000}
          unit="min"
          onChange={setMinutes}
        />
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="recordCalls"
            checked={recordCalls}
            onChange={(e) => setRecordCalls(e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-[rgba(226,232,240,0.08)] bg-navy-light text-[#64FFDA] focus:ring-[#64FFDA] focus:ring-offset-0"
          />
          <label htmlFor="recordCalls" className="text-sm text-white font-medium cursor-pointer">
            Record calls
            <span className="ml-2 text-xs font-normal text-[#94A3B8]">({recordingRateLabel})</span>
          </label>
        </div>
        <SliderField
          label="Phone numbers"
          rate={`${formatUnitRate(usageRates.number)}/number/mo`}
          value={numbers}
          max={500}
          step={1}
          unit="numbers"
          onChange={setNumbers}
        />
        <div>
          <SliderField
            label="Email sends"
            rate={emailRateLabel}
            value={emails}
            max={500_000}
            step={5_000}
            unit="emails"
            onChange={setEmails}
            disabled={isBase}
          />
          {isBase && (
            <p className="text-xs text-[#64748B] mt-2">Command+ only</p>
          )}
        </div>
        <SliderField
          label="B2B Leads"
          rate={leadsRateLabel}
          value={leads}
          max={5_000}
          step={50}
          unit="leads"
          onChange={setLeads}
        />
      </div>

      {/* Rules & disclaimer */}
      <div className="flex items-start gap-3 mb-8 pb-6 border-b border-[rgba(226,232,240,0.06)]">
        <Globe size={18} className="mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
        <p className="text-sm text-[#94A3B8] leading-relaxed">
          Rates are for US-based calls and numbers. International pricing varies by target country
          and number type. One plan per account; active seats can be disabled to stop billing.
        </p>
      </div>

      {/* Summary */}
      <div className="space-y-3">
        {lineItems.map((item) => (
          <div key={item.label} className="flex items-start justify-between text-sm">
            <div>
              <p className="text-white font-medium">
                {item.label}
                {item.count && (
                  <span className="text-[#94A3B8] font-normal ml-1">
                    {item.gated ? `(${item.count})` : `· ${item.count}`}
                  </span>
                )}
              </p>
              {item.discount > 0 && (
                <span className="inline-block mt-1 text-xs text-[#64FFDA] bg-[rgba(100,255,218,0.1)] border border-[rgba(100,255,218,0.2)] rounded-full px-2 py-0.5">
                  {Math.round(item.discount * 100)}% vol. discount
                </span>
              )}
            </div>
            <div className="text-right">
              {item.discount > 0 && (
                <p className="text-xs text-[#64748B] line-through">{currencyCents.format(item.pre)}</p>
              )}
              <p className="text-white font-medium">{currencyCents.format(item.final)}</p>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center pt-4 border-t border-[rgba(226,232,240,0.08)]">
          <span className="text-white font-medium">Estimated monthly cost</span>
          <span className="text-2xl font-medium" style={{ color: ACCENT }}>
            {currency.format(total)}
          </span>
        </div>

        {typicalStack > total && (
          <div className="bg-[rgba(100,255,218,0.05)] border border-[rgba(100,255,218,0.1)] rounded-xl p-4 mt-4">
            <p className="text-sm text-[#94A3B8]">
              Estimated cost of a typical 6-tool sales stack:{' '}
              <span className="text-white font-medium">{currency.format(typicalStack)}</span>
            </p>
            <p className="text-sm text-[#64FFDA] font-medium mt-1">
              You save approximately {currency.format(savings)}/mo with Sales Command Center
            </p>
          </div>
        )}
      </div>

      <p className="text-xs text-[#94A3B8] mt-4">
        Estimates exclude setup fees. Enterprise pricing is custom and includes white-label, SLA, and
        custom integrations.
      </p>
    </div>
  );
}
