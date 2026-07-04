import { Link } from 'react-router';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ACCENT } from './constants';

const ecosystemLinks = [
  { label: 'Horus AI Agent', path: '/ai' },
  { label: 'Horus Managed Teams', path: '/teams' },
  { label: 'Horus Software Studio', path: '/studio' },
];

export function ThothLineEcosystemBanner() {
  return (
    <section className="bg-navy-light py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionWrapper>
          <div className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-2xl p-8 lg:p-12 text-center">
            <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: ACCENT }}>
              PART OF THE HORUS DESK ECOSYSTEM
            </p>
            <h2 className="text-2xl lg:text-4xl font-medium text-white leading-[1.2] mb-6">
              Thoth Line works with the rest of Horus Desk
            </h2>
            <p className="text-[#94A3B8] leading-relaxed max-w-2xl mx-auto mb-8">
              Thoth Line works with Horus AI Agent (24/7 lead qualification) and Horus Managed Teams
              (human agents trained on your workflow). If something is missing, Horus Software Studio
              can build it.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {ecosystemLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-medium text-[#FF5252] transition-colors duration-300 hover:text-white"
                >
                  {link.label} &rarr;
                </Link>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
