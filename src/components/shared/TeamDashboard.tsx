import { motion } from 'framer-motion';
import { Headphones, Phone, Globe, Clock, Shield } from 'lucide-react';

const agents = [
  {
    name: 'Omar H.',
    role: 'Support Lead',
    type: 'support',
    status: 'online',
    languages: 'EN, AR',
    shift: 'CET Day',
  },
  {
    name: 'Laila M.',
    role: 'Sales Agent',
    type: 'sales',
    status: 'in-call',
    languages: 'EN, FR',
    shift: 'EST Evening',
  },
  {
    name: 'Karim A.',
    role: 'Support Agent',
    type: 'support',
    status: 'online',
    languages: 'EN, AR, DE',
    shift: 'PST Night',
  },
  {
    name: 'Nour S.',
    role: 'Sales Agent',
    type: 'sales',
    status: 'available',
    languages: 'EN, AR',
    shift: 'GMT Morning',
  },
];

const statusConfig: Record<string, { color: string; label: string }> = {
  online: { color: '#22C55E', label: 'Online' },
  'in-call': { color: '#FFAB40', label: 'In call' },
  available: { color: '#64FFDA', label: 'Available' },
};

export function TeamDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-2xl shadow-2xl overflow-hidden"
        role="img"
        aria-label="Horus Desk managed team dashboard showing agent roster, coverage, and supervisor oversight"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(226,232,240,0.08)]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[rgba(255,171,64,0.1)] border border-[rgba(255,171,64,0.2)] flex items-center justify-center">
              <Shield size={16} className="text-[#FFAB40]" />
            </div>
            <span className="text-sm font-medium text-white">Horus Teams</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#FFAB40] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFAB40]"></span>
            </span>
            <span className="text-xs font-medium tracking-wider uppercase text-[#FFAB40]">Live</span>
          </div>
        </div>

        {/* Agent Roster */}
        <div className="p-5 grid grid-cols-2 gap-3">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-xl p-4 hover:border-[rgba(255,171,64,0.2)] transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[rgba(255,171,64,0.1)] border border-[rgba(255,171,64,0.2)] flex items-center justify-center text-sm font-medium text-[#FFAB40]">
                    {agent.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{agent.name}</p>
                    <p className="text-xs text-[#94A3B8]">{agent.role}</p>
                  </div>
                </div>
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: statusConfig[agent.status].color }}
                  title={statusConfig[agent.status].label}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                  {agent.type === 'support' ? (
                    <Headphones size={12} className="text-[#FFAB40]" />
                  ) : (
                    <Phone size={12} className="text-[#FFAB40]" />
                  )}
                  <span>{agent.type === 'support' ? 'Support' : 'Sales'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                  <Globe size={12} className="text-[#FFAB40]" />
                  <span>{agent.languages}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                  <Clock size={12} className="text-[#FFAB40]" />
                  <span>{agent.shift}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supervisor Footer */}
        <div className="px-5 py-3 bg-navy border-t border-[rgba(226,232,240,0.08)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield size={12} className="text-[#FFAB40]" />
            <span className="text-xs text-[#94A3B8]">Supervised by Horus Desk</span>
          </div>
          <span className="text-xs text-[#FFAB40]">Supervised in Cairo</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
