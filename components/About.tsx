
import React from 'react';
import { BookText, Code, Target, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-6 space-y-10">
          <div>
            <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Biography</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-[1.1]">The Journey of a Code Enthusiast.</h3>
            <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
              <p>
                My name is <span className="text-slate-900 font-bold">Robiul Islam Rabbi</span>, and I am currently carving my path in the tech world as a final-year B.Tech student at <span className="text-indigo-600 font-semibold">Lovely Professional University</span>. Living in Punjab has given me a unique perspective on the fast-growing Indian tech landscape.
              </p>
              <p>
                What started as curiosity about how software works has transformed into a dedicated pursuit of engineering excellence. I specialize in backend logic using <span className="font-bold text-slate-700">Java</span> and <span className="font-bold text-slate-700">Python</span>, while constantly refining my problem-solving skills with <span className="font-bold text-slate-700">C++</span>.
              </p>
              <p>
                Beyond code, I believe in consistency and the power of a growth mindset. I am not just looking to build applications; I am looking to build solutions that are scalable, efficient, and user-centric.
              </p>
            </div>
          </div>
          
          <div className="p-10 bg-indigo-600 rounded-[2.5rem] text-white shadow-2xl shadow-indigo-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 transform group-hover:scale-150 transition-transform">
              <Target size={120} />
            </div>
            <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
              <Briefcase size={24} className="text-indigo-200" />
              My Professional Mission
            </h4>
            <p className="text-indigo-100 text-lg leading-relaxed relative z-10">
              "To leverage computational thinking and advanced algorithms to solve real-world problems, while maintaining the highest standards of code integrity and professional consistency."
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 grid md:grid-cols-2 gap-8 self-center">
          {[
            {
              title: "Academic Background",
              desc: "Currently maintaining a high academic standard at LPU with a focus on Algorithm Design and Software Systems.",
              icon: <BookText className="text-indigo-600" />,
              badge: "B.Tech CSE"
            },
            {
              title: "Logical Problem Solving",
              desc: "Trained in identifying complex system bottlenecks and implementing data-driven optimizations in Java & C++.",
              icon: <Code className="text-indigo-600" />,
              badge: "Core Engineering"
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
          
          <div className="md:col-span-2 p-1 bg-gradient-to-r from-indigo-500 to-indigo-800 rounded-[2.5rem]">
            <div className="bg-white p-10 rounded-[2.4rem] grid grid-cols-2 gap-10">
               <div className="text-center">
                  <div className="text-4xl font-black text-indigo-600 tracking-tighter">95%</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-2">Consistency Rate</div>
               </div>
               <div className="text-center">
                  <div className="text-4xl font-black text-slate-900 tracking-tighter">2025</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-2">Graduation Year</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
