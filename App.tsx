import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const CaseStudyDetailPage = lazy(() => import('./pages/CaseStudyDetailPage'));
const ResearchPage = lazy(() => import('./pages/ResearchPage'));
const ResearchDetailPage = lazy(() => import('./pages/ResearchDetailPage'));
const CertificatesPage = lazy(() => import('./pages/CertificatesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ExpertisePage = lazy(() => import('./pages/ExpertisePage'));

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-light-bg font-sans">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:caseStudyId" element={<CaseStudyDetailPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/research/:researchId" element={<ResearchDetailPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/expertise" element={<ExpertisePage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;