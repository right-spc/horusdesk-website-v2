import { Link } from 'react-router';
import { useState } from 'react';
import { Logo } from '@/components/shared/Logo';

const productLinks = [
  { label: 'AI Agent', path: '/ai' },
  { label: 'Managed Teams', path: '/teams' },
  { label: 'Software Studio', path: '/studio' },
];

const companyLinks = [
  { label: 'Contact', path: '/ai' },
];

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-navy border-t border-[rgba(226,232,240,0.08)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Logo & Tagline */}
          <div>
            <Logo className="mb-4" />
            <p className="text-sm text-[#64748B]">
              Your business never sleeps. Neither do we.
            </p>
          </div>

          {/* Column 2 - Services Links */}
          <div>
            <h4 className="text-xs font-medium tracking-wider uppercase text-[#64748B] mb-4">Services</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white hover:text-[#64FFDA] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company Links */}
          <div>
            <h4 className="text-xs font-medium tracking-wider uppercase text-[#64748B] mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-white hover:text-[#64FFDA] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="text-xs font-medium tracking-wider uppercase text-[#64748B] mb-4">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-xl text-white placeholder-[#64748B] px-4 py-2.5 text-sm focus:border-[#64FFDA] focus:outline-none transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-[#64FFDA] text-navy rounded-xl px-4 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[rgba(226,232,240,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748B]">
            &copy; 2026 Horus Desk. A <a href="https://rightspc.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#64FFDA] transition-colors duration-300">Right Space</a> Service.
          </p>
        </div>
      </div>
    </footer>
  );
}
