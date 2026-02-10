
import React from 'react';
import { ArrowRight, Download, Linkedin, Github } from 'lucide-react';

interface HeroProps {
  onPortfolioClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPortfolioClick }) => {
  return (
    <div className="min-h-screen flex items-center pt-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-10 animate-fade-in-up">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for Internships 2025
            </div>
            <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Robiul Islam <span className="text-indigo-600">Rabbi</span>
            </h1>
            <p className="text-2xl font-medium text-slate-500 max-w-2xl leading-relaxed text-balance">
              Computer Science Student & Aspiring Software Engineer specializing in scalable application development.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onPortfolioClick}
              className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-500/10 active:scale-95"
            >
              Examine Work <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 border border-slate-200 bg-white text-slate-700 rounded-xl font-semibold flex items-center justify-center gap-2 hover:border-indigo-600 hover:text-indigo-600 transition-all active:scale-95 shadow-sm">
              <Download size={18} /> Resume
            </button>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-slate-100 max-w-xs">
            <a href="https://www.linkedin.com/in/robiul-rabbi-32750a191/" target="_blank" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Github size={22} />
            </a>
            <div className="h-4 w-px bg-slate-200"></div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Connect with me</span>
          </div>
        </div>

        {/* Right Visual */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative group">
            {/* Background geometric accent */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-[2.5rem] opacity-10 group-hover:opacity-20 transition-opacity blur-2xl"></div>
            
            {/* Main Image Frame */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-white p-3 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
              <img 
                src="https://i.postimg.cc/Vk5fG0nj/rabbi-portfolio.jpg" 
                alt="Robiul Islam Rabbi"
                className="w-full h-full object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl border border-white/50 animate-bounce transition-all duration-[3000ms]">
              <div className="text-3xl font-bold text-indigo-600">LPU</div>
              <div className="text-[10px] font-black uppercase text-slate-500 tracking-tighter">Final Year Student</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
