
import React from 'react';

interface FooterProps {
  onNavigate: (view: 'main' | 'gallery', sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-xl">
              R
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 tracking-tight">Robiul Islam Rabbi</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">CSE Student • Punjab</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            <button onClick={() => onNavigate('main', 'home')} className="text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-widest">Home</button>
            <button onClick={() => onNavigate('main', 'about')} className="text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-widest">About</button>
            <button onClick={() => onNavigate('gallery')} className="text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-widest">Portfolio</button>
            <button onClick={() => onNavigate('main', 'contact')} className="text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-widest">Connect</button>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
          <div>
            &copy; {currentYear} Robiul Islam Rabbi. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            Built with <span className="text-indigo-500">Innovation</span> in Punjab
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
