import { Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import { BookingProvider } from '@/components/layout/BookingModal';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/pages/HomePage';
import { AIPage } from '@/pages/AIPage';
import { TalentPage } from '@/pages/TalentPage';
import { StudioPage } from '@/pages/StudioPage';
import { SoftphoneCaseStudyPage } from '@/pages/SoftphoneCaseStudyPage';
import { AIAgentDashboardsCaseStudyPage } from '@/pages/AIAgentDashboardsCaseStudyPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BookingProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai" element={<AIPage />} />
        <Route path="/teams" element={<TalentPage />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/case-studies/softphone" element={<SoftphoneCaseStudyPage />} />
        <Route path="/case-studies/ai-agent-dashboards" element={<AIAgentDashboardsCaseStudyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BookingProvider>
  );
}

export default App;
