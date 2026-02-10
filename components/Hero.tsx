
import React from 'react';
import { ArrowRight, Mail, Download, Linkedin, Github } from 'lucide-react';

interface HeroProps {
  onPortfolioClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPortfolioClick }) => {
  const RESUME_URL = "#"; // Replace with actual link when available

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center pt-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-16 items-center w-full">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-10 animate-fade-in-up">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black tracking-widest uppercase shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Final Year • B.Tech CSE Student • LPU
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tighter text-slate-900 leading-[1] text-balance">
              Robiul Islam <span className="text-indigo-600">Rabbi</span>
            </h1>
            
            <p className="text-2xl font-medium text-slate-500 max-w-2xl leading-relaxed text-balance border-l-4 border-indigo-100 pl-6">
              A computer science student currently living in Punjab, India. Passionate about technology and building a strong foundation in modern software development.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5">
            <button 
              onClick={onPortfolioClick}
              className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all shadow-2xl shadow-indigo-500/10 active:scale-95 group"
            >
              View Portfolio <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollToContact}
              className="px-10 py-5 border-2 border-slate-200 bg-white text-slate-700 rounded-2xl font-bold flex items-center justify-center gap-3 hover:border-indigo-600 hover:text-indigo-600 transition-all active:scale-95 shadow-sm"
            >
              <Mail size={20} /> Contact Me
            </button>
            <button 
              onClick={() => window.open(RESUME_URL, '_blank')}
              className="px-6 py-5 text-slate-400 hover:text-slate-900 font-bold flex items-center justify-center gap-2 transition-all active:scale-95 group"
            >
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" /> 
              <span className="border-b border-transparent group-hover:border-slate-900">Get Resume</span>
            </button>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-slate-100 max-w-sm">
            <a href="https://www.linkedin.com/in/robiul-rabbi-32750a191/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <div className="h-6 w-px bg-slate-200"></div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Live in Punjab, India</span>
          </div>
        </div>

        {/* Right Visual - Circular Frame */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative group">
            <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full opacity-40 blur-3xl group-hover:opacity-60 transition-opacity"></div>
            
            <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] bg-white p-3 rounded-full shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-50">
              <img 
                src="https://i.postimg.cc/Vk5fG0nj/rabbi-portfolio.jpg" 
                alt="Robiul Islam Rabbi"
                className="w-full h-full object-cover rounded-full transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            
            <div className="absolute top-10 -right-4 glass p-6 rounded-3xl shadow-xl border border-white/50 animate-bounce transition-all duration-[3000ms]">
              <div className="text-3xl font-black text-indigo-600 leading-none">CSE</div>
              <div className="text-[10px] font-black uppercase text-slate-500 tracking-tighter mt-1">Specialization</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
