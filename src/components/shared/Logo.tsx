import { Link } from 'react-router';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`} aria-label="Horus Desk home">
      <svg width="32" height="32" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 100 Q100 40 180 100 Q100 160 20 100" stroke="#64FFDA" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <circle cx="100" cy="100" r="28" stroke="#64FFDA" strokeWidth="3" fill="none"/>
        <circle cx="100" cy="100" r="12" fill="#64FFDA"/>
        <path d="M30 70 Q100 30 170 70" stroke="#64FFDA" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <path d="M25 100 L8 85 M25 100 L8 100 M25 100 L8 115" stroke="#64FFDA" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M175 100 L192 85 M175 100 L192 100 M175 100 L192 115" stroke="#64FFDA" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M100 128 L100 155 M82 145 L118 145" stroke="#64FFDA" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M162 100 Q178 100 178 117 Q178 134 162 134 Q150 134 150 122" stroke="#64FFDA" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      </svg>
      <span className="text-lg font-medium text-white tracking-tight">Horus Desk</span>
    </Link>
  );
}
