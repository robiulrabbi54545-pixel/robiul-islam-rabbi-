
import React from 'react';
import { ArrowRight, Mail, Download, Linkedin, Github } from 'lucide-react';

interface HeroProps {
  onPortfolioClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPortfolioClick }) => {
  // Direct link to contact section for the "Contact Me" button
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Placeholder URL for Resume
  const RESUME_URL = "https://example.com/robiul-rabbi-resume.pdf";

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
              Final Year Student • CSE • LPU
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tighter text-slate-900 leading-[0.95] text-balance">
              Robiul Islam <span className="text-indigo-600">Rabbi</span>
            </h1>
            
            <p className="text-2xl font-medium text-slate-500 max-w-2xl leading-relaxed text-balance border-l-4 border-indigo-200 pl-6">
              A computer science student currently living in Punjab, India. Dedicated to building high-performance software through clean code and modern engineering principles.
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
              <Mail size={20} className="text-indigo-600" /> Contact Me
            </button>
            <a 
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-5 text-slate-500 hover:text-indigo-600 font-bold flex items-center justify-center gap-2 transition-all group"
            >
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" /> 
              <span className="border-b-2 border-transparent group-hover:border-indigo-600">Resume</span>
            </a>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-slate-100 max-w-sm">
            <a href="https://www.linkedin.com/in/robiul-rabbi-32750a191/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <div className="h-6 w-px bg-slate-200"></div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Based in Punjab, IN</span>
          </div>
        </div>

        {/* Right Visual - Refined Circular Frame */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative group">
            {/* Background geometric accent */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full opacity-30 blur-3xl group-hover:opacity-50 transition-opacity"></div>
            
            {/* Main Image Frame - Now perfectly circular */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-white p-3 rounded-full shadow-2xl overflow-hidden border-8 border-indigo-50">
              <img 
                src="https://i.postimg.cc/Vk5fG0nj/rabbi-portfolio.jpg" 
                alt="Robiul Islam Rabbi"
                className="w-full h-full object-cover rounded-full transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            
            {/* Specialization Badge */}
            <div className="absolute -bottom-4 -left-4 glass px-8 py-5 rounded-3xl shadow-2xl border border-white/50 animate-pulse transition-all">
              <div className="text-3xl font-black text-indigo-600 leading-none">LPU</div>
              <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest mt-1">CSE Engineering</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
