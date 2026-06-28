import { useSearchParams } from 'react-router';
import { MailCheck, MailX, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/layout/SEOHead';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function sanitizeEmail(raw: string | null): string | null {
  if (!raw) return null;
  const cleaned = raw.trim().toLowerCase();
  if (!cleaned.includes('@')) return null;
  return cleaned;
}

export function UnsubscribePage() {
  const [searchParams] = useSearchParams();
  const email = sanitizeEmail(searchParams.get('email'));
  const status = searchParams.get('status');

  const isError = status === 'error' || status === 'invalid' || !email;
  const isAlreadyUnsubscribed = status === 'already';

  return (
    <>
      <SEOHead
        title="Unsubscribe | Horus Desk"
        description="Manage your Horus Desk email preferences."
        canonicalUrl="https://horusdesk.com/unsubscribe"
        ogTitle="Unsubscribe | Horus Desk"
        ogDescription="Manage your Horus Desk email preferences."
        ogUrl="https://horusdesk.com/unsubscribe"
        ogImage="https://horusdesk.com/og-default.png"
        robots="noindex, nofollow"
      />

      <main id="main-content" className="bg-navy min-h-screen flex items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          className="w-full max-w-xl text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#112240] border border-[#64FFDA]/20 mb-8">
            {isError ? (
              <AlertCircle className="w-9 h-9 text-[#FFAB40]" aria-hidden="true" />
            ) : isAlreadyUnsubscribed ? (
              <MailX className="w-9 h-9 text-[#94A3B8]" aria-hidden="true" />
            ) : (
              <MailCheck className="w-9 h-9 text-[#64FFDA]" aria-hidden="true" />
            )}
          </div>

          {isError ? (
            <>
              <h1 className="text-3xl lg:text-4xl font-medium text-white leading-tight mb-4">
                Could not unsubscribe
              </h1>
              <p className="text-lg text-[#94A3B8] leading-relaxed">
                The email address in the link is missing or invalid. Please check the link and try again, or contact{' '}
                <a href="mailto:hello@horusdesk.com" className="text-[#64FFDA] hover:underline">
                  hello@horusdesk.com
                </a>{' '}
                for help.
              </p>
            </>
          ) : isAlreadyUnsubscribed ? (
            <>
              <h1 className="text-3xl lg:text-4xl font-medium text-white leading-tight mb-4">
                Already unsubscribed
              </h1>
              <p className="text-lg text-[#94A3B8] leading-relaxed">
                <strong className="text-white">{email}</strong> is not currently subscribed to Horus Desk marketing emails.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl lg:text-4xl font-medium text-white leading-tight mb-4">
                You are unsubscribed
              </h1>
              <p className="text-lg text-[#94A3B8] leading-relaxed mb-6">
                <strong className="text-white" dangerouslySetInnerHTML={{ __html: escapeHtml(email) }} />{' '}
                has been removed from future Horus Desk marketing campaigns.
              </p>
              <p className="text-[#94A3B8]">
                You will no longer receive outreach emails from us. If you changed your mind, you can contact us at{' '}
                <a href="mailto:hello@horusdesk.com" className="text-[#64FFDA] hover:underline">
                  hello@horusdesk.com
                </a>.
              </p>
            </>
          )}

          <div className="mt-10">
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#64FFDA] border border-[#64FFDA] rounded-md hover:bg-[#64FFDA]/10 transition-colors"
            >
              Back to horusdesk.com
            </a>
          </div>
        </motion.div>
      </main>
    </>
  );
}
