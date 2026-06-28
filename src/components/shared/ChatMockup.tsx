import { motion } from 'framer-motion';

export function ChatMockup() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div
        className="bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-xl shadow-2xl overflow-hidden relative"
        role="img"
        aria-label="Horus Desk AI chat interface showing lead qualification and calendar booking"
      >
        {/* Live indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#64FFDA] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#64FFDA]"></span>
          </span>
          <span className="text-xs font-medium tracking-wider uppercase text-[#64FFDA]">LIVE</span>
        </div>

        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(226,232,240,0.08)]">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#EF4444]" />
            <div className="w-2 h-2 rounded-full bg-[#EAB308]" />
            <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
          </div>
          <span className="text-xs text-[#94A3B8] font-mono ml-2">horusdesk.com</span>
        </div>

        {/* Chat content */}
        <div className="p-4 space-y-3 min-h-[200px]">
          <div className="flex">
            <div className="bg-[rgba(102,255,218,0.1)] border border-[rgba(102,255,218,0.2)] rounded-lg rounded-tl-none px-4 py-3 max-w-[80%]">
              <p className="text-sm text-white">Hi! I can help schedule your HVAC repair. What day works best?</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-white/5 rounded-lg rounded-tr-none px-4 py-3 max-w-[80%]">
              <p className="text-sm text-white">Tomorrow morning</p>
            </div>
          </div>
          <div className="flex">
            <div className="bg-[rgba(102,255,218,0.1)] border border-[rgba(102,255,218,0.2)] rounded-lg rounded-tl-none px-4 py-3 max-w-[80%]">
              <p className="text-sm text-white">Perfect! I see we have a 10am slot available. Shall I book that?</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
