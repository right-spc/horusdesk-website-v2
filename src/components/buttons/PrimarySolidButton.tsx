interface PrimarySolidButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  disabled?: boolean;
}

export function PrimarySolidButton({ children, className = '', onClick, type = 'button', fullWidth = false, disabled = false }: PrimarySolidButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2
        bg-gradient-to-r from-[#64FFDA] to-[#3DD4B0]
        text-navy px-8 py-4 rounded-full
        font-medium text-base
        transition-all duration-500 ease-out
        hover:shadow-lg hover:scale-[1.02]
        focus:outline-none focus:ring-2 focus:ring-[#64FFDA] focus:ring-offset-2 focus:ring-offset-navy
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
