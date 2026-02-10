
import React from 'react';

interface FooterProps {
  onNavigate: (view: 'main' | 'gallery', sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm">
        <div>
          &copy; {currentYear} Robiul Islam Rabbi. All rights reserved.
        </div>
        <div className="flex gap-8">
          <button onClick={() => onNavigate('main', 'home')} className="hover:text-orange-500 transition-colors">Home</button>
          <button onClick={() => onNavigate('main', 'about')} className="hover:text-orange-500 transition-colors">About</button>
          <button onClick={() => onNavigate('gallery')} className="hover:text-orange-500 transition-colors">Portfolio</button>
          <button onClick={() => onNavigate('main', 'contact')} className="hover:text-orange-500 transition-colors">Contact</button>
        </div>
        <div className="flex items-center gap-2">
          Designed for <span className="text-orange-500 font-bold">Innovation</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
