
import React from 'react';
import { BookText, Code, Target, Briefcase, MapPin, GraduationCap, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-6 space-y-10">
          <div>
            <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Core Identity</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-[1.1]">Computer Science Engineer in Punjab.</h3>
            <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
              <p>
                I am <span className="text-slate-900 font-bold">Robiul Islam Rabbi</span>, a dedicated Computer Science and Engineering student currently residing in <span className="text-indigo-600 font-semibold">Punjab, India</span>. My passion lies in deciphering complex problems and translating them into elegant, efficient backend architectures.
              </p>
              <p>
                As a final-year student at <span className="font-bold text-slate-800">Lovely Professional University (LPU)</span>, I am focused on building a rock-solid foundation in software engineering. I believe that great software is born from the intersection of rigorous logic and creative problem-solving.
              </p>
              <p>
                I thrive in environments that challenge my technical limits, particularly in systems design and backend performance optimization. My goal is to contribute to meaningful technology that makes a tangible difference in how users interact with the digital world.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
             <div className="p-6 bg-white border border-slate-100 rounded-2xl flex items-center gap-4 shadow-sm">
                <MapPin className="text-indigo-600 shrink-0" size={20} />
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-400">Current Location</p>
                   <p className="text-sm font-bold text-slate-900">Punjab, India</p>
                </div>
             </div>
             <div className="p-6 bg-white border border-slate-100 rounded-2xl flex items-center gap-4 shadow-sm">
                <GraduationCap className="text-indigo-600 shrink-0" size={20} />
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-400">Degree</p>
                   <p className="text-sm font-bold text-slate-900">B.Tech CSE</p>
                </div>
             </div>
             <div className="p-6 bg-white border border-slate-100 rounded-2xl flex items-center gap-4 shadow-sm">
                <Calendar className="text-indigo-600 shrink-0" size={20} />
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-400">Batch</p>
                   <p className="text-sm font-bold text-slate-900">Final Year</p>
                </div>
             </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
          <div className="p-10 bg-indigo-600 rounded-[2.5rem] text-white shadow-2xl shadow-indigo-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 transform group-hover:scale-150 transition-transform">
              <Target size={120} />
            </div>
            <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
              <Briefcase size={24} className="text-indigo-200" />
              Engineering Philosophy
            </h4>
            <p className="text-indigo-50 text-lg leading-relaxed relative z-10">
              "To develop software that is not just functional, but also resilient, scalable, and built on the first principles of computer science."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-indigo-100 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Code size={24} />
              </div>
              <h5 className="font-bold text-slate-900 mb-2">Backend Expertise</h5>
              <p className="text-sm text-slate-500 leading-relaxed">Specializing in Java and Python to create robust server-side logic and database structures.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-indigo-100 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <BookText size={24} />
              </div>
              <h5 className="font-bold text-slate-900 mb-2">Continuous Growth</h5>
              <p className="text-sm text-slate-500 leading-relaxed">Always exploring new frameworks and architectural patterns to stay ahead in the tech stack.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
