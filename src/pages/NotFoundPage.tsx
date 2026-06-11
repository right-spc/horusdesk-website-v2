import { Link } from 'react-router';
import { SEOHead } from '@/components/layout/SEOHead';
import { ChatButton } from '@/components/buttons/ChatButton';
import { CalendarButton } from '@/components/buttons/CalendarButton';

export function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Page Not Found | Horus Desk"
        description="The page you are looking for does not exist. Explore Horus Desk AI Agent, managed teams, and custom development services."
        canonical="https://horusdesk.com/404"
        robots="noindex, nofollow"
        ogTitle="Page Not Found | Horus Desk"
        ogDescription="The page you are looking for does not exist."
      />
      <main
        className="min-h-[100dvh] flex flex-col items-center justify-center bg-navy"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(102,255,218,0.06) 0%, transparent 60%)',
        }}
      >
        <h1 className="text-4xl font-medium text-white mb-4">
          Page not found
        </h1>
        <Link
          to="/"
          className="text-[#64FFDA] hover:underline mt-4"
        >
          &larr; Back to Home
        </Link>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <ChatButton>Chat with Horus</ChatButton>
          <CalendarButton>Book a Call</CalendarButton>
        </div>
      </main>
    </>
  );
}
