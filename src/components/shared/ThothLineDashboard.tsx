import { motion } from 'framer-motion';
import { BarChart3, PhoneCall, Users, Target, Phone, Mail, Clock, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Calls today', value: '1,247', icon: PhoneCall, change: '+12%' },
  { label: 'Active leads', value: '3,842', icon: Target, change: '+8%' },
  { label: 'Agents online', value: '42', icon: Users, change: 'Live' },
];

const calls = [
  { name: 'Sarah J.', number: '(555) 012-3456', status: 'In progress', duration: '4:32', source: 'Inbound' },
  { name: 'Mike R.', number: '(555) 019-8765', status: 'Voicemail', duration: '0:18', source: 'Outbound' },
  { name: 'Dana K.', number: '(555) 014-2211', status: 'Completed', duration: '6:45', source: 'Campaign' },
];

const leadStages = [
  { stage: 'New', count: 142, color: '#FF5252' },
  { stage: 'Contacted', count: 89, color: '#FFAB40' },
  { stage: 'Qualified', count: 54, color: '#64FFDA' },
];

export function ThothLineDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-2xl shadow-2xl overflow-hidden"
        role="img"
        aria-label="Thoth Line sales command center showing live calls, lead pipeline, and team activity in one system"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(226,232,240,0.08)]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[rgba(255,82,82,0.1)] border border-[rgba(255,82,82,0.2)] flex items-center justify-center">
              <BarChart3 size={16} className="text-[#FF5252]" />
            </div>
            <span className="text-sm font-medium text-white">Thoth Line</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#FF5252] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5252]"></span>
            </span>
            <span className="text-xs font-medium tracking-wider uppercase text-[#FF5252]">Live</span>
          </div>
        </div>

        {/* Stats */}
        <div className="p-5 grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-xl p-3 hover:border-[rgba(255,82,82,0.2)] transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <stat.icon size={14} className="text-[#FF5252]" />
                <span className="text-xs text-[#94A3B8]">{stat.label}</span>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-lg font-medium text-white">{stat.value}</span>
                <span className="text-xs text-[#64FFDA]">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main dashboard area */}
        <div className="px-5 pb-5 space-y-4">
          {/* Live calls table */}
          <div className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-[rgba(226,232,240,0.08)] flex items-center gap-2">
              <Phone size={14} className="text-[#FF5252]" />
              <span className="text-xs font-medium text-white">Live Calls</span>
            </div>
            <div className="divide-y divide-[rgba(226,232,240,0.06)]">
              {calls.map((call) => (
                <div key={call.name} className="px-4 py-3 flex items-center justify-between text-sm">
                  <div>
                    <p className="text-white font-medium">{call.name}</p>
                    <p className="text-xs text-[#94A3B8]">{call.number}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[#94A3B8]">{call.status}</p>
                    <p className="text-xs text-[#64748B]">{call.duration} · {call.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead pipeline */}
          <div className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Mail size={14} className="text-[#FF5252]" />
              <span className="text-xs font-medium text-white">Lead Pipeline</span>
            </div>
            <div className="space-y-3">
              {leadStages.map((stage) => (
                <div key={stage.stage} className="flex items-center gap-3">
                  <span className="text-xs text-[#94A3B8] w-20">{stage.stage}</span>
                  <div className="flex-1 h-2 bg-navy-light rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(stage.count / 142) * 100}%` }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: stage.color }}
                    />
                  </div>
                  <span className="text-xs text-white w-8 text-right">{stage.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer stat */}
          <div className="flex items-center justify-between bg-navy border border-[rgba(226,232,240,0.08)] rounded-xl px-4 py-3">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#FF5252]" />
              <span className="text-xs text-[#94A3B8]">Avg. handle time</span>
            </div>
            <span className="text-sm text-white">3:42</span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-navy border-t border-[rgba(226,232,240,0.08)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp size={12} className="text-[#FF5252]" />
            <span className="text-xs text-[#94A3B8]">One system. One workflow.</span>
          </div>
          <span className="text-xs text-[#FF5252]">No integrations</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
