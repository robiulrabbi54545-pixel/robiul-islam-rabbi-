
import React from 'react';
import { BookText, Code, Rocket, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Professional Profile</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">Driven by Code, Guided by Logic.</h3>
          <p className="text-slate-500 leading-relaxed mb-8">
            As a final-year B.Tech candidate at Lovely Professional University, I bridge the gap between theoretical computer science and practical software architecture.
          </p>
          <div className="p-6 bg-slate-900 rounded-2xl text-white">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <Briefcase size={18} className="text-indigo-400" />
              Career Objective
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Seeking to leverage my proficiency in Java, Python, and C++ to contribute to high-impact engineering teams while advancing my expertise in full-stack systems.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Academic Excellence",
              desc: "Consistently applying core CSE principles at Lovely Professional University, focusing on high-performance computing and data structures.",
              icon: <BookText className="text-indigo-600" />,
              stat: "B.Tech CSE"
            },
            {
              title: "Problem Solving",
              desc: "A logical mindset dedicated to breaking down complex requirements into maintainable, efficient code snippets and systems.",
              icon: <Code className="text-indigo-600" />,
              stat: "Logic Driven"
            },
            {
              title: "Growth Mindset",
              desc: "Always exploring the bleeding edge of technology. Current focus includes modern web frameworks and cloud-native concepts.",
              icon: <Rocket className="text-indigo-600" />,
              stat: "Continuous Learner"
            }
          ].map((item, i) => (
            <div key={i} className="group p-8 bg-white rounded-3xl border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <span className="text-[10px] font-black uppercase text-indigo-500 mb-2 block tracking-widest">{item.stat}</span>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
