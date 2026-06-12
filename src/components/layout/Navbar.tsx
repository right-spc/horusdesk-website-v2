import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/shared/Logo';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navLinks = [
  { label: 'AI Agent', path: '/ai' },
  { label: 'Managed Teams', path: '/teams' },
  { label: 'Software Studio', path: '/studio' },
];

export function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 h-20
          transition-all duration-500 ease-out
          ${isScrolled
            ? 'bg-navy/80 backdrop-blur-xl border-b border-[rgba(226,232,240,0.08)]'
            : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  text-sm font-medium transition-colors duration-500
                  ${location.pathname === link.path
                    ? 'text-white'
                    : 'text-[#64748B] hover:text-white'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <ChatButton>Ask Horus AI</ChatButton>
            <CalendarButton>Book a Discovery Call</CalendarButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`
                      text-2xl font-medium transition-colors duration-500
                      ${location.pathname === link.path
                        ? 'text-[#64FFDA]'
                        : 'text-white hover:text-[#64FFDA]'
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center gap-4 mt-8"
              >
                <ChatButton>Ask Horus AI</ChatButton>
                <CalendarButton>Book a Discovery Call</CalendarButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
