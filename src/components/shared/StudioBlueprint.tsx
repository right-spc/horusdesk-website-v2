import { motion } from 'framer-motion';
import { Database, Server, Smartphone, Bot, Lock, Code2, GitBranch } from 'lucide-react';

const modules = [
  { icon: Bot, label: 'AI Engine', color: '#64FFDA' },
  { icon: Server, label: 'Custom API', color: '#7C4DFF' },
  { icon: Database, label: 'Database', color: '#FFAB40' },
  { icon: Smartphone, label: 'Mobile App', color: '#64FFDA' },
  { icon: Lock, label: 'Auth & Security', color: '#7C4DFF' },
  { icon: Code2, label: 'Frontend', color: '#FFAB40' },
];

export function StudioBlueprint() {
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
        aria-label="Custom software architecture blueprint showing modules built from scratch"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(226,232,240,0.08)]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[rgba(124,77,255,0.1)] border border-[rgba(124,77,255,0.2)] flex items-center justify-center">
              <GitBranch size={16} className="text-[#7C4DFF]" />
            </div>
            <span className="text-sm font-medium text-white">Custom Build Blueprint</span>
          </div>
          <span className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF]">From Scratch</span>
        </div>

        {/* Architecture Grid */}
        <div className="p-5">
          <div className="grid grid-cols-2 gap-3 mb-4">
            {modules.map((module) => (
              <div
                key={module.label}
                className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-xl p-4 hover:border-[rgba(124,77,255,0.3)] transition-colors"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${module.color}15`, border: `1px solid ${module.color}30` }}
                >
                  <module.icon size={16} style={{ color: module.color }} />
                </div>
                <p className="text-sm font-medium text-white">{module.label}</p>
                <p className="text-xs text-[#94A3B8] mt-1">Custom module</p>
              </div>
            ))}
          </div>

          {/* Code Snippet Decoration */}
          <div className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-xl p-4 font-mono text-xs">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#EF4444]" />
              <div className="w-2 h-2 rounded-full bg-[#EAB308]" />
              <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
              <span className="text-[#64748B] ml-2">app.tsx</span>
            </div>
            <p className="text-[#7C4DFF]">import <span className="text-white">{'{ CustomPlatform }'}</span> from <span className="text-[#64FFDA]">&apos;./your-business&apos;</span>;</p>
            <p className="text-[#94A3B8] mt-1">// No templates. No vendor lock-in.</p>
            <p className="text-[#94A3B8]">// You own the code. You own the data.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-navy border-t border-[rgba(226,232,240,0.08)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock size={12} className="text-[#7C4DFF]" />
            <span className="text-xs text-[#94A3B8]">Full source code ownership</span>
          </div>
          <span className="text-xs text-[#7C4DFF]">No Automation Tools</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
