import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface ChatButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'large';
}

export function ChatButton({ children, className = '', size = 'default' }: ChatButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const paddingClass = size === 'large' ? 'px-8 py-4' : 'px-6 py-3';

  const handleClick = () => {
    const hd = (window as any).horusDesk;
    if (hd?.open) {
      hd.open();
    } else {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleClick}
        className={`
          inline-flex items-center justify-center gap-2
          bg-navy-light border border-[rgba(226,232,240,0.08)]
          text-[#64FFDA] ${paddingClass} rounded-full
          font-medium text-sm
          transition-all duration-500 ease-out
          hover:border-[rgba(102,255,218,0.15)] hover:shadow-button-glow
          focus:outline-none focus:ring-2 focus:ring-[#64FFDA] focus:ring-offset-2 focus:ring-offset-navy
          ${className}
        `}
        aria-label="Open chat with Horus Desk"
      >
        <MessageCircle size={16} />
        {children}
      </button>
      {showTooltip && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-navy-lighter border border-subtle text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap z-50">
          Click the chat icon in the bottom right
        </div>
      )}
    </div>
  );
}
