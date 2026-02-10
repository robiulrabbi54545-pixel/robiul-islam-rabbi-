
import React from 'react';
import { BookText, Code, Target, Briefcase, MapPin, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-6 space-y-10">
          <div>
            <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Biography</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-[1.1]">Merging Logic with Creativity.</h3>
            <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
              <p>
                I am <span className="text-slate-900 font-bold">Robiul Islam Rabbi</span>, a Computer Science and Engineering student currently residing in <span className="text-indigo-600 font-semibold">Punjab, India</span>. My journey into software development is driven by a fascination with how code can transform abstract ideas into powerful, real-world solutions.
              </p>
              <p>
                As a final-year student at <span className="font-bold text-slate-800">Lovely Professional University</span>, I have spent the last few years mastering the core tenets of software engineering. From the low-level precision of <span className="text-indigo-600 font-semibold">C++</span> to the enterprise scalability of <span className="text-indigo-600 font-semibold">Java</span>, I enjoy the challenge of writing clean, maintainable, and efficient code.
              </p>
              <p>
                Living in the vibrant tech hub of Punjab has inspired me to look beyond the classroom. I am constantly building academic and minor projects that push my limits in problem-solving and architectural design. My goal is to become a developer who doesn't just write scripts, but creates ecosystems.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="p-6 bg-white border border-slate-100 rounded-2xl flex items-center gap-4 shadow-sm">
                <MapPin className="text-indigo-600" />
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-400">Location</p>
                   <p className="text-sm font-bold text-slate-900">Punjab, India</p>
                </div>
             </div>
             <div className="p-6 bg-white border border-slate-100 rounded-2xl flex items-center gap-4 shadow-sm">
                <GraduationCap className="text-indigo-600" />
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-400">Education</p>
                   <p className="text-sm font-bold text-slate-900">B.Tech CSE</p>
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
              Professional Drive
            </h4>
            <p className="text-indigo-50 text-lg leading-relaxed relative z-10">
              "My mission is to apply rigorous computational logic and modern development frameworks to build software that is both technically superior and user-friendly."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-indigo-100 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Code size={24} />
              </div>
              <h5 className="font-bold text-slate-900 mb-2">Clean Code</h5>
              <p className="text-sm text-slate-500 leading-relaxed">Focused on writing self-documenting, maintainable codebases for long-term scalability.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-indigo-100 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <BookText size={24} />
              </div>
              <h5 className="font-bold text-slate-900 mb-2">Life-long Learner</h5>
              <p className="text-sm text-slate-500 leading-relaxed">Dedicated to staying at the forefront of the tech stack as a CSE scholar.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
