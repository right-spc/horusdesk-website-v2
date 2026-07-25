import { Link } from 'react-router';
import { useState } from 'react';
import { Linkedin, Facebook } from 'lucide-react';
import { Logo } from '@/components/shared/Logo';

const serviceLinks = [
  { label: 'AI Agent', path: '/ai' },
  { label: 'Managed Teams', path: '/teams' },
  { label: 'Software Studio', path: '/studio' },
];

const companyLinks = [
  { label: 'Blog', path: '/blog' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms of Service', path: '/terms-of-service' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-newsletter-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to subscribe');
      }

      setSubmitted(true);
      setEmail('');
    } catch (err) {
      console.error('Newsletter submission error:', err);
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-navy border-t border-[rgba(226,232,240,0.08)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">
          {/* Column 1 - Logo & Tagline */}
          <div>
            <Logo size="large" className="mb-4" />
            <p className="text-sm text-[#94A3B8]">
              Your business never sleeps. Neither do we.
            </p>
          </div>

          {/* Column 2 - Services Links */}
          <div>
            <h4 className="text-xs font-medium tracking-wider uppercase text-[#94A3B8] mb-4">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
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
            <h4 className="text-xs font-medium tracking-wider uppercase text-[#94A3B8] mb-4">Company</h4>
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
            <h4 className="text-xs font-medium tracking-wider uppercase text-[#94A3B8] mb-4">Newsletter</h4>
            {submitted ? (
              <p className="text-sm text-[#64FFDA] mb-4">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mb-4">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (submitError) setSubmitError(null);
                    }}
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                    className="flex-1 bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-xl text-white placeholder-[#94A3B8] px-4 py-2.5 text-sm focus:border-[#64FFDA] focus:outline-none transition-colors duration-300 disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#64FFDA] text-navy rounded-xl px-4 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? '...' : 'Subscribe'}
                  </button>
                </div>
                {submitError && <p className="text-red-400 text-xs">{submitError}</p>}
              </form>
            )}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/right-space-llc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#94A3B8] hover:text-[#64FFDA] transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/horusdesk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#94A3B8] hover:text-[#64FFDA] transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[rgba(226,232,240,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#94A3B8]">
            &copy; 2026 Horus Desk. A <a href="https://rightspc.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#64FFDA] transition-colors duration-300">Right Space</a> Service.
          </p>
        </div>
      </div>
    </footer>
  );
}
