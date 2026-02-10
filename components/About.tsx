
import React from 'react';
import { BookText, Code, Rocket, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5">
          <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Biography</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-[1.1]">Student, Developer, Visionary.</h3>
          <p className="text-slate-500 text-lg leading-relaxed mb-8">
            Currently living in Punjab, India, I am a B.Tech student in Computer Science and Engineering at Lovely Professional University. I am deeply passionate about learning and building through technology, focusing on creating efficient and professional software solutions.
          </p>
          <div className="p-8 bg-slate-900 rounded-[2rem] text-white shadow-2xl shadow-indigo-900/10">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-3">
              <Briefcase size={20} className="text-indigo-400" />
              Mindset & Dedication
            </h4>
            <p className="text-slate-400 leading-relaxed">
              My approach to engineering is centered on curiosity, a growth mindset, and a relentless dedication to mastering the fundamentals of modern technology.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 grid md:grid-cols-2 gap-8 self-center">
          {[
            {
              title: "Academic Focus",
              desc: "Final Year Student at LPU, Punjab. Specializing in high-performance computing and complex data structures.",
              icon: <BookText className="text-indigo-600" />,
              badge: "B.Tech CSE"
            },
            {
              title: "Technical Logic",
              desc: "Dedicated to solving real-world problems with logical thinking and consistent coding practices in multiple languages.",
              icon: <Code className="text-indigo-600" />,
              badge: "Logic First"
            }
          ].map((item, i) => (
            <div key={i} className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:border-indigo-100 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <span className="text-[10px] font-black uppercase text-indigo-500 mb-3 block tracking-[0.2em]">{item.badge}</span>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
          <div className="md:col-span-2 p-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2rem]">
            <div className="bg-white p-8 rounded-[1.9rem] flex items-center justify-center gap-8 text-center">
               <div>
                  <div className="text-3xl font-black text-slate-900">4.0</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Tech Stack Strength</div>
               </div>
               <div className="h-10 w-px bg-slate-100"></div>
               <div>
                  <div className="text-3xl font-black text-slate-900">2025</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Graduation Year</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
