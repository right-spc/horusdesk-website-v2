import { motion } from 'framer-motion';
import { Bot, Users, Code2, TrendingUp, Activity, CheckCircle2, Clock, Globe } from 'lucide-react';

export function OperationsDashboard() {
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
        aria-label="Horus Desk operations dashboard showing AI, teams, and software metrics"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(226,232,240,0.08)]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[rgba(102,255,218,0.1)] border border-[rgba(102,255,218,0.2)] flex items-center justify-center">
              <Activity size={16} className="text-[#64FFDA]" />
            </div>
            <span className="text-sm font-medium text-white">Horus Desk Ops</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#64FFDA] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#64FFDA]"></span>
            </span>
            <span className="text-xs font-medium tracking-wider uppercase text-[#64FFDA]">Live</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="p-5 grid grid-cols-3 gap-3">
          <div className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[rgba(102,255,218,0.1)] flex items-center justify-center">
                <Bot size={14} className="text-[#64FFDA]" />
              </div>
              <span className="text-xs text-[#94A3B8]">AI Agent</span>
            </div>
            <p className="text-2xl font-medium text-white mb-1">1,247</p>
            <p className="text-xs text-[#94A3B8]">conversations</p>
          </div>

          <div className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[rgba(124,77,255,0.1)] flex items-center justify-center">
                <Users size={14} className="text-[#7C4DFF]" />
              </div>
              <span className="text-xs text-[#94A3B8]">Teams</span>
            </div>
            <p className="text-2xl font-medium text-white mb-1">18</p>
            <p className="text-xs text-[#94A3B8]">agents online</p>
          </div>

          <div className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[rgba(255,171,64,0.1)] flex items-center justify-center">
                <Code2 size={14} className="text-[#FFAB40]" />
              </div>
              <span className="text-xs text-[#94A3B8]">Studio</span>
            </div>
            <p className="text-2xl font-medium text-white mb-1">6</p>
            <p className="text-xs text-[#94A3B8]">active builds</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="px-5 pb-5">
          <div className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp size={14} className="text-[#64FFDA]" />
                <span className="text-xs font-medium text-white">Operations Load</span>
              </div>
              <span className="text-xs text-[#64FFDA]">+34% this month</span>
            </div>

            {/* Simple bar chart */}
            <div className="flex items-end gap-2 h-24">
              {[35, 48, 42, 58, 52, 68, 74, 69, 82, 78, 91, 88].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-[rgba(102,255,218,0.2)] to-[rgba(102,255,218,0.6)] hover:from-[rgba(102,255,218,0.3)] hover:to-[rgba(102,255,218,0.8)] transition-all duration-300"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>

            <div className="flex justify-between mt-2 text-[10px] text-[#64748B]">
              <span>Jan</span>
              <span>Dec</span>
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="px-5 py-3 bg-navy border-t border-[rgba(226,232,240,0.08)] flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={12} className="text-[#64FFDA]" />
            <span className="text-xs text-[#94A3B8]">99.9% uptime</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-[#64FFDA]" />
            <span className="text-xs text-[#94A3B8]">24/7 coverage</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Globe size={12} className="text-[#64FFDA]" />
            <span className="text-xs text-[#94A3B8]">6 languages</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
