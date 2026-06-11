import { Calendar } from 'lucide-react';
import { useBooking } from '@/components/layout/BookingModal';

interface CalendarButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'large';
  prefillInterest?: string;
}

export function CalendarButton({ children, className = '', size = 'default', prefillInterest }: CalendarButtonProps) {
  const { open } = useBooking();
  const paddingClass = size === 'large' ? 'px-8 py-4' : 'px-6 py-3';

  return (
    <button
      onClick={() => open(prefillInterest)}
      className={`
        inline-flex items-center justify-center gap-2
        bg-white text-navy ${paddingClass} rounded-full
        font-medium text-sm
        transition-all duration-500 ease-out
        hover:scale-[1.02]
        focus:outline-none focus:ring-2 focus:ring-[#64FFDA] focus:ring-offset-2 focus:ring-offset-navy
        ${className}
      `}
      aria-label="Book a setup call"
    >
      <Calendar size={16} />
      {children}
    </button>
  );
}
