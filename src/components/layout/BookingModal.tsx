import { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookingForm } from '@/components/forms/BookingForm';

interface BookingContextType {
  isOpen: boolean;
  prefillInterest?: string;
  open: (prefillInterest?: string) => void;
  close: () => void;
}

const BookingContext = createContext<BookingContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefillInterest, setPrefillInterest] = useState<string | undefined>();

  const open = useCallback((interest?: string) => {
    setPrefillInterest(interest);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setPrefillInterest(undefined);
  }, []);

  return (
    <BookingContext.Provider value={{ isOpen, prefillInterest, open, close }}>
      {children}
      <BookingModal />
    </BookingContext.Provider>
  );
}

function BookingModal() {
  const { isOpen, prefillInterest, close } = useBooking();
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        close();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    modal.addEventListener('keydown', handleTab);
    return () => modal.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-navy/80 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            className="relative bg-surface border border-[rgba(226,232,240,0.08)] rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              ref={closeButtonRef}
              onClick={close}
              className="absolute top-4 right-4 text-[#64748B] hover:text-white transition-colors duration-300 z-10"
              aria-label="Close booking modal"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              <BookingForm
                ref={firstInputRef}
                prefillInterest={prefillInterest}
                title="Book Your 30-Minute Setup Call"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
