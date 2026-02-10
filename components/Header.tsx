
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  currentView: 'main' | 'gallery';
  onNavigate: (view: 'main' | 'gallery', sectionId?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', id: 'about', view: 'main' },
    { name: 'Expertise', id: 'skills', view: 'main' },
    { name: 'Portfolio', id: 'gallery', view: 'gallery' },
    { name: 'Learning', id: 'learning', view: 'main' },
    { name: 'Connect', id: 'contact', view: 'main' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('main')} 
          className="group flex items-center space-x-3 focus:outline-none"
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-200 group-hover:rotate-12 transition-transform">
            R
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="font-extrabold text-sm tracking-tighter text-slate-900">ROBIUL RABBI</span>
            <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] mt-1">ENGINEER</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.view as 'main' | 'gallery', link.view === 'main' ? link.id : undefined)}
              className={`text-[13px] font-bold uppercase tracking-widest transition-all hover:text-indigo-600 focus:outline-none ${
                (currentView === 'gallery' && link.id === 'gallery') || (currentView === 'main' && activeSection === link.id)
                  ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' 
                  : 'text-slate-500'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
           <button 
             onClick={() => onNavigate('main', 'contact')}
             className="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-indigo-600 transition-colors shadow-lg shadow-slate-100"
           >
             Get in Touch
           </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white border-b border-slate-100 px-6 py-10 space-y-6 shadow-2xl animate-fade-in-up">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="block w-full text-left text-2xl font-black text-slate-900 hover:text-indigo-600 uppercase"
              onClick={() => {
                onNavigate(link.view as 'main' | 'gallery', link.view === 'main' ? link.id : undefined);
                setIsOpen(false);
              }}
            >
              {link.name}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
