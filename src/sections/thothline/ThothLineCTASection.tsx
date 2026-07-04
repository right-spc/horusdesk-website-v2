import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { PrimarySolidButton } from '@/components/buttons/PrimarySolidButton';
import { useBooking } from '@/components/layout/BookingModal';

export function ThothLineCTASection() {
  const { open } = useBooking();

  return (
    <section className="bg-navy py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center">
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2] mb-6">
            Stop Managing Tools. Start Selling.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <PrimarySolidButton onClick={() => open('Sales Command Center')}>
              Get Your Custom Quote
            </PrimarySolidButton>
          </div>
          <p className="text-[#94A3B8]">
            Or email us at{' '}
            <a
              href="mailto:hello@horusdesk.com"
              className="text-[#FF5252] transition-colors duration-300 hover:text-white"
            >
              hello@horusdesk.com
            </a>
          </p>
        </SectionWrapper>
      </div>
    </section>
  );
}
