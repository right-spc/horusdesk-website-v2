import { Routes, Route, useLocation } from 'react-router';
import { useEffect, Suspense, lazy } from 'react';
import { BookingProvider } from '@/components/layout/BookingModal';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { usePageTracking } from '@/hooks/usePageTracking';

const HomePage = lazy(() => import('@/pages/HomePage').then(m => ({ default: m.HomePage })));
const AIPage = lazy(() => import('@/pages/AIPage').then(m => ({ default: m.AIPage })));
const TalentPage = lazy(() => import('@/pages/TalentPage').then(m => ({ default: m.TalentPage })));
const StudioPage = lazy(() => import('@/pages/StudioPage').then(m => ({ default: m.StudioPage })));
const SecurityPage = lazy(() => import('@/pages/SecurityPage').then(m => ({ default: m.SecurityPage })));
const CaseStudiesPage = lazy(() => import('@/pages/CaseStudiesPage').then(m => ({ default: m.CaseStudiesPage })));
const BlogPage = lazy(() => import('@/pages/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage').then(m => ({ default: m.BlogPostPage })));
const SoftphoneCaseStudyPage = lazy(() => import('@/pages/SoftphoneCaseStudyPage').then(m => ({ default: m.SoftphoneCaseStudyPage })));
const AIAgentDashboardsCaseStudyPage = lazy(() => import('@/pages/AIAgentDashboardsCaseStudyPage').then(m => ({ default: m.AIAgentDashboardsCaseStudyPage })));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('@/pages/TermsOfServicePage').then(m => ({ default: m.TermsOfServicePage })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then(m => ({ default: m.ContactPage })));
const UnsubscribePage = lazy(() => import('@/pages/UnsubscribePage').then(m => ({ default: m.UnsubscribePage })));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[rgba(100,255,218,0.2)] border-t-[#64FFDA] rounded-full animate-spin" />
    </div>
  );
}

function App() {
  usePageTracking();
  return (
    <BookingProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#64FFDA] focus:text-navy focus:px-4 focus:py-2 focus:rounded-md focus:font-medium"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/teams" element={<TalentPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/case-studies/softphone" element={<SoftphoneCaseStudyPage />} />
          <Route path="/case-studies/ai-agent-dashboards" element={<AIAgentDashboardsCaseStudyPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/unsubscribe" element={<UnsubscribePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BookingProvider>
  );
}

export default App;
