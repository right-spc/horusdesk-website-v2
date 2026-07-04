import { useState, useEffect, useRef, forwardRef } from 'react';
import { Check } from 'lucide-react';
import { PrimarySolidButton } from '@/components/buttons/PrimarySolidButton';

export interface BookingFormProps {
  prefillInterest?: string;
  title?: string;
}

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  companyWebsite: string;
  phone: string;
  interest: string;
  notes: string;
  privacyAccepted: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export const BookingForm = forwardRef<HTMLInputElement, BookingFormProps>(
  function BookingForm({ prefillInterest, title }, forwardedRef) {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [errors, setErrors] = useState<FormErrors>({});
    const [formData, setFormData] = useState<FormData>({
      fullName: '',
      email: '',
      companyName: '',
      companyWebsite: '',
      phone: '',
      interest: prefillInterest || '',
      notes: '',
      privacyAccepted: false,
    });
    const localFirstInputRef = useRef<HTMLInputElement>(null);
    const firstInputRef = (forwardedRef as React.RefObject<HTMLInputElement>) || localFirstInputRef;

    useEffect(() => {
      if (prefillInterest) {
        setFormData(prev => ({ ...prev, interest: prefillInterest }));
      }
    }, [prefillInterest]);

    const validate = (): boolean => {
      const newErrors: FormErrors = {};
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
      if (!formData.privacyAccepted) newErrors.privacyAccepted = 'You must accept the privacy policy to continue';
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
      const { name, value, type } = e.target;
      const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
      setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
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
      text-white placeholder-[#94A3B8] px-4 py-3
      focus:border-[#64FFDA] focus:outline-none
      transition-colors duration-300
    `;

    const labelClass = 'block text-xs font-medium tracking-wider uppercase text-[#64FFDA] mb-2';
    const errorClass = 'text-red-400 text-xs mt-1';

    if (submitted) {
      return (
        <div>
          <div className="text-center mb-4">
            <div className="w-12 h-12 rounded-full bg-[rgba(102,255,218,0.1)] border border-[rgba(102,255,218,0.2)] flex items-center justify-center mx-auto mb-3">
              <Check size={24} className="text-[#64FFDA]" />
            </div>
            <h3 className="text-xl font-medium text-white mb-1">Thanks, {formData.fullName.split(' ')[0]}!</h3>
            <p className="text-sm text-[#94A3B8]">
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
      );
    }

    return (
      <>
        {title && (
          <h3 className="text-xl font-medium text-white mb-6">
            {title}
          </h3>
        )}
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
            <label className={labelClass}>Company Website (Optional)</label>
            <input
              type="url"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              placeholder="https://company.com"
              className={inputClass}
            />
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
              <option value="Sales Command Center" className="bg-navy-light">Sales Command Center</option>
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

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacyAccepted"
              name="privacyAccepted"
              checked={formData.privacyAccepted}
              onChange={handleChange}
              className="mt-1 w-4 h-4 rounded border-[rgba(226,232,240,0.08)] bg-navy-light text-[#64FFDA] focus:ring-[#64FFDA] focus:ring-offset-0"
            />
            <label htmlFor="privacyAccepted" className="text-sm text-[#94A3B8] leading-relaxed cursor-pointer">
              I accept Horus Desk's{' '}
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#64FFDA] hover:underline">
                Privacy Policy
              </a>
              . I understand my data will be used to respond to this booking request only and will never be sold.
            </label>
          </div>
          {errors.privacyAccepted && <p className={errorClass}>{errors.privacyAccepted}</p>}

          {submitError && (
            <p className="text-red-400 text-sm text-center">
              {submitError}
            </p>
          )}

          <PrimarySolidButton type="submit" fullWidth disabled={isSubmitting || !formData.privacyAccepted}>
            {isSubmitting ? 'Sending...' : 'Select an appointment'}
          </PrimarySolidButton>
        </form>
      </>
    );
  }
);
