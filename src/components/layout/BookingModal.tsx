import { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import { X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PrimarySolidButton } from '@/components/buttons/PrimarySolidButton';

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

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  phone: string;
  interest: string;
  notes: string;
}

interface FormErrors {
  [key: string]: string;
}

function BookingModal() {
  const { isOpen, prefillInterest, close } = useBooking();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    interest: prefillInterest || '',
    notes: '',
  });
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (prefillInterest) {
      setFormData(prev => ({ ...prev, interest: prefillInterest }));
    }
  }, [prefillInterest]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
      setIsSubmitting(false);
      setSubmitError(null);
      setErrors({});
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        phone: '',
        interest: '',
        notes: '',
      });
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
  }, [isOpen, submitted]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.interest) newErrors.interest = 'Please select an interest';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/send-booking-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send booking details');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Booking submission error:', err);
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const inputClass = `
    w-full bg-navy-light border border-[rgba(226,232,240,0.08)] rounded-xl
    text-white placeholder-[#64748B] px-4 py-3
    focus:border-[#64FFDA] focus:outline-none
    transition-colors duration-300
  `;

  const labelClass = 'block text-xs font-medium tracking-wider uppercase text-[#64FFDA] mb-2';
  const errorClass = 'text-red-400 text-xs mt-1';

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
              {!submitted ? (
                <>
                  <h3 className="text-xl font-medium text-white mb-6">
                    Book Your 30-Minute Setup Call
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className={labelClass}>Full Name</label>
                      <input
                        ref={firstInputRef}
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={inputClass}
                      />
                      {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={inputClass}
                      />
                      {errors.email && <p className={errorClass}>{errors.email}</p>}
                    </div>

                    <div>
                      <label className={labelClass}>Company Name</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className={inputClass}
                      />
                      {errors.companyName && <p className={errorClass}>{errors.companyName}</p>}
                    </div>

                    <div>
                      <label className={labelClass}>Phone Number (Optional)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Interest</label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="" className="bg-navy-light">Select an option</option>
                        <option value="AI Agent" className="bg-navy-light">AI Agent</option>
                        <option value="Managed Teams" className="bg-navy-light">Managed Teams</option>
                        <option value="Software Studio" className="bg-navy-light">Software Studio</option>
                        <option value="Not Sure Yet" className="bg-navy-light">Not Sure Yet</option>
                      </select>
                      {errors.interest && <p className={errorClass}>{errors.interest}</p>}
                    </div>

                    <div>
                      <label className={labelClass}>Notes (Optional)</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Tell us about your project or questions."
                        rows={3}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {submitError && (
                      <p className="text-red-400 text-sm text-center">
                        {submitError}
                      </p>
                    )}

                    <PrimarySolidButton type="submit" fullWidth disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Confirm Booking'}
                    </PrimarySolidButton>
                  </form>
                </>
              ) : (
                <div>
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[rgba(102,255,218,0.1)] border border-[rgba(102,255,218,0.2)] flex items-center justify-center mx-auto mb-3">
                      <Check size={24} className="text-[#64FFDA]" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-1">Thanks, {formData.fullName.split(' ')[0]}!</h3>
                    <p className="text-sm text-[#64748B]">
                      Pick a 30-minute slot below and it will be booked directly into the calendar.
                    </p>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-[rgba(226,232,240,0.08)]">
                    <iframe
                      src={`https://calendly.com/moaaz-rightspc/30min?embed_domain=horusdesk.com&embed_type=Inline&name=${encodeURIComponent(formData.fullName)}&email=${encodeURIComponent(formData.email)}`}
                      width="100%"
                      height="500"
                      frameBorder="0"
                      title="Book a 30-minute call"
                      className="bg-white"
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
