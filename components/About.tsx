
import React from 'react';
import { BookText, Code, Target, Briefcase, MapPin, GraduationCap, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-6 space-y-10">
          <div>
            <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Professional Bio</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-[1.1]">Merging Precision Logic with Engineering Excellence.</h3>
            <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
              <p>
                My name is <span className="text-slate-900 font-bold">Robiul Islam Rabbi</span>, a Computer Science and Engineering student currently living in <span className="text-indigo-600 font-semibold">Punjab, India</span>. I am driven by the challenge of architecting robust systems that solve real-world problems through code.
              </p>
              <p>
                Currently in my final year at <span className="font-bold text-slate-800">Lovely Professional University (LPU)</span>, I have cultivated a deep expertise in <span className="text-indigo-600 font-semibold">Object-Oriented Programming</span> and backend systems. My core technical stack revolves around Java, C++, and Python, with a strong focus on data structural efficiency.
              </p>
              <p>
                I am not just a developer; I am a lifelong learner committed to staying at the forefront of the technological landscape. My approach to engineering is centered on clarity, maintainability, and scalable performance.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
             <div className="p-6 bg-white border border-slate-100 rounded-2xl flex items-center gap-4 shadow-sm">
                <MapPin className="text-indigo-600 shrink-0" size={20} />
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-400">Base</p>
                   <p className="text-sm font-bold text-slate-900">Punjab, IN</p>
                </div>
             </div>
             <div className="p-6 bg-white border border-slate-100 rounded-2xl flex items-center gap-4 shadow-sm">
                <GraduationCap className="text-indigo-600 shrink-0" size={20} />
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-400">University</p>
                   <p className="text-sm font-bold text-slate-900">LPU</p>
                </div>
             </div>
             <div className="p-6 bg-white border border-slate-100 rounded-2xl flex items-center gap-4 shadow-sm">
                <Calendar className="text-indigo-600 shrink-0" size={20} />
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-400">Class</p>
                   <p className="text-sm font-bold text-slate-900">Batch '25</p>
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
              "To build software that isn't just functional, but built on the first principles of computer science: efficiency, scalability, and integrity."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-indigo-100 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Code size={24} />
              </div>
              <h5 className="font-bold text-slate-900 mb-2">Backend Proficiency</h5>
              <p className="text-sm text-slate-500 leading-relaxed">Specializing in Java-based enterprise architectures and high-performance logic.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-indigo-100 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <BookText size={24} />
              </div>
              <h5 className="font-bold text-slate-900 mb-2">Academic Dedication</h5>
              <p className="text-sm text-slate-500 leading-relaxed">Maintaining a consistent drive for excellence in theoretical and applied engineering.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
