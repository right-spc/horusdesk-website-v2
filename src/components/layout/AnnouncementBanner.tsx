// TEMPORARY — remove after Founding Five fills.
// Announcement bar for the Thoth Line spin-off. To remove: delete this file,
// its usage in App.tsx, and the bannerOffset prop in Navbar.tsx.
import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

const DISMISS_KEY = 'thothline-announcement-dismissed';

export function AnnouncementBanner({
  onHeightChange,
}: {
  onHeightChange: (height: number) => void;
}) {
  const [dismissed, setDismissed] = useState(
    () => sessionStorage.getItem(DISMISS_KEY) === 'true'
  );
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dismissed) {
      onHeightChange(0);
      return;
    }

    const bar = barRef.current;
    if (!bar) return;

    const reportHeight = () => onHeightChange(bar.offsetHeight);
    reportHeight();

    const observer = new ResizeObserver(reportHeight);
    observer.observe(bar);
    return () => observer.disconnect();
  }, [dismissed, onHeightChange]);

  if (dismissed) return null;

  const handleDismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, 'true');
    setDismissed(true);
  };

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 z-50 bg-navy-light border-b border-[rgba(100,255,218,0.15)]"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-2 flex items-center justify-center gap-3">
        <p className="text-xs sm:text-sm text-[#94A3B8] text-center">
          Thoth Line, our sales operating system, is now its own product — with its own home at{' '}
          <a
            href="https://thothline.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64FFDA] font-medium hover:underline whitespace-nowrap"
          >
            thothline.com &rarr;
          </a>
        </p>
        <button
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="shrink-0 text-[#94A3B8] hover:text-white transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
