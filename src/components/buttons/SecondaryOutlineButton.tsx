interface SecondaryOutlineButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function SecondaryOutlineButton({ children, className = '', onClick }: SecondaryOutlineButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        border border-[rgba(226,232,240,0.08)] text-white
        px-8 py-4 rounded-full
        font-medium text-base
        transition-all duration-500 ease-out
        hover:border-[#64FFDA] hover:text-[#64FFDA]
        focus:outline-none focus:ring-2 focus:ring-[#64FFDA] focus:ring-offset-2 focus:ring-offset-navy
        ${className}
      `}
    >
      {children}
    </button>
  );
}
