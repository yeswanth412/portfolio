import React, { useState, useEffect } from 'react';
import HeroEditorial from './components/Editorial/HeroEditorial';
import AboutEducation from './components/Editorial/AboutEducation';
import SelectedProjects from './components/Editorial/SelectedProjects';
import SkillsExpertise from './components/Editorial/SkillsExpertise';
import WhatIveBuilt from './components/Editorial/WhatIveBuilt';
import ContactFooter from './components/Editorial/ContactFooter';
import ResumeModal from './components/Editorial/ResumeModal';
import ContactCard from './pages/ContactCard';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname.replace(/\/+$/, '');
      return p === '' ? '/' : p;
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname.replace(/\/+$/, '');
      setCurrentPath(p === '' ? '/' : p);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      const p = path.replace(/\/+$/, '');
      setCurrentPath(p === '' ? '/' : p);
      window.scrollTo(0, 0);
    }
  };

  if (currentPath === '/contact-card') {
    return <ContactCard onNavigateHome={() => navigateTo('/')} />;
  }

  return (
    <div className="w-full min-h-screen bg-[#F5F3EC] text-[#141414] font-sans selection:bg-[#C86D51] selection:text-white antialiased">
      {/* 1. Hero Section matching Pinterest editorial poster & Python Developer identity */}
      <HeroEditorial onOpenResume={() => setIsResumeOpen(true)} />

      {/* 2. 01 // About & Formal Academic Credential */}
      <AboutEducation />

      {/* 3. 02 // Selected Projects (Verified GitHub Repositories) */}
      <SelectedProjects />

      {/* 4. 03 // Skills & Expertise (toolkit, editorial quote, circular capability badges) */}
      <SkillsExpertise />

      {/* 5. 04 // What I've Built (Truthful capability statements) */}
      <WhatIveBuilt />

      {/* 6. 05 // Contact Footer ("LET'S BUILD SOMETHING GREAT" + Form + QR + Resume trigger) */}
      <ContactFooter onOpenResume={() => setIsResumeOpen(true)} />

      {/* 7. Interactive Resume Modal with current photo & official document preview */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
