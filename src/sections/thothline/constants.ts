export const ACCENT = '#FF5252';
export const AMBER = '#FFAB40';

export interface Tier {
  key: string;
  name: string;
  platformFee: number;
  seatRate: number;
  setupFrom: number | string;
  features: string[];
  description?: string;
  status: 'live' | 'coming-soon' | 'custom';
  supportsEmail: boolean;
  supportsLeads: boolean;
}

export const tiers: Tier[] = [
  {
    key: 'base',
    name: 'Base',
    platformFee: 300,
    seatRate: 10,
    setupFrom: 500,
    features: [
      'Voice & calling',
      'Lead database & core workflow',
      'Native compliance tools',
      'Dedicated account manager',
    ],
    status: 'live',
    supportsEmail: false,
    supportsLeads: true,
  },
  {
    key: 'command',
    name: 'Command',
    platformFee: 400,
    seatRate: 18,
    setupFrom: 1500,
    features: [
      'Everything in Base',
      'Email campaigns',
      'Campaign management',
      'Individual SMS texting (Coming Soon)',
    ],
    description: 'Includes email campaigns. Individual SMS launching soon.',
    status: 'live',
    supportsEmail: true,
    supportsLeads: true,
  },
  {
    key: 'control',
    name: 'Control',
    platformFee: 500,
    seatRate: 22,
    setupFrom: 2500,
    features: [
      'Everything in Command',
      'API access',
      'Advanced workflow routing',
      'SMS campaigns',
    ],
    description: 'API access, advanced routing, and SMS campaigns.',
    status: 'coming-soon',
    supportsEmail: true,
    supportsLeads: true,
  },
  {
    key: 'enterprise',
    name: 'Enterprise',
    platformFee: 0,
    seatRate: 0,
    setupFrom: 'Custom',
    features: [
      '100+ users',
      'White-label options',
      'Custom integrations',
      'SLA guarantee',
    ],
    status: 'custom',
    supportsEmail: true,
    supportsLeads: true,
  },
];

export const usageRates = {
  voice: 0.015,
  recording: 0.005,
  number: 1,
  email: 0.002,
  lead: 1.5,
};

export const faqs = [
  {
    question: 'Is Thoth Line a phone system?',
    answer: 'No. It is a Sales Operating System that includes voice as one channel. We replace your entire tool stack, not just your dialer.',
  },
  {
    question: 'How long does setup take?',
    answer: 'As fast as 3 days for simpler workflows. Complex setups up to 2 weeks. We give a timeline before starting.',
  },
  {
    question: 'Can we change our workflow after launch?',
    answer: 'Yes. Changes are treated as configuration, not rewriting the core. Handled through your dedicated account manager.',
  },
  {
    question: 'What happens if we add or remove agents?',
    answer: 'You only pay for enabled accounts. Add a seat, fee increases. Disable it, it drops to $0 next cycle.',
  },
  {
    question: 'Do we own our data?',
    answer: 'Yes. You own your data, workflow logic, and records.',
  },
  {
    question: 'What if we have 50+ users?',
    answer: 'Platform fee is waived at 50 active seats. You pay only for seats and usage.',
  },
  {
    question: 'What features are coming soon?',
    answer: 'Individual SMS texting will be added to the Command plan. API access, advanced workflow routing, and SMS campaigns will be part of the Control plan. Join the waitlist to be notified when they launch.',
  },
];
