
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LearningJourney from './components/LearningJourney';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioGallery from './components/PortfolioGallery';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [view, setView] = useState<'main' | 'gallery'>('main');

  useEffect(() => {
    if (view === 'main') {
      const handleScroll = () => {
        const sections = ['home', 'about', 'skills', 'projects', 'learning', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [view]);

  const navigateTo = (newView: 'main' | 'gallery', sectionId?: string) => {
    setView(newView);
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        activeSection={activeSection} 
        currentView={view} 
        onNavigate={navigateTo} 
      />
      <main className="flex-grow">
        {view === 'main' ? (
          <>
            <section id="home"><Hero onPortfolioClick={() => navigateTo('gallery')} /></section>
            <section id="about" className="py-20 bg-gray-50"><About /></section>
            <section id="skills" className="py-20"><Skills /></section>
            <section id="projects" className="py-20 bg-gray-50">
              <Projects onViewMore={() => navigateTo('gallery')} />
            </section>
            <section id="learning" className="py-20"><LearningJourney /></section>
            <section id="contact" className="py-20 bg-gray-900 text-white"><Contact /></section>
          </>
        ) : (
          <PortfolioGallery onBack={() => navigateTo('main')} />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
