
import React from 'react';
import { Coffee, Layers, Terminal, Sparkles, BrainCircuit } from 'lucide-react';

const LearningJourney: React.FC = () => {
  const journeys = [
    {
      title: "Core Programming Foundations",
      desc: "Deep diving into C and C++ to understand memory management and low-level hardware interaction. Mastering pointers and standard libraries.",
      icon: <Terminal size={32} className="text-indigo-600" />
    },
    {
      title: "Object-Oriented Excellence",
      desc: "Specializing in Java (SE) to build robust enterprise-grade architectures. Focusing on inheritance, polymorphism, and secure data handling.",
      icon: <Coffee size={32} className="text-indigo-600" />
    },
    {
      title: "Applied Data Structures",
      desc: "Implementing complex algorithmic solutions including Trees, Graphs, and Hash Maps to ensure optimal performance in all projects.",
      icon: <BrainCircuit size={32} className="text-indigo-600" />
    },
    {
      title: "Full-Stack Exploration",
      desc: "Connecting high-performance backends with modern interfaces. Learning React and Tailwind CSS to bridge the gap between logic and UX.",
      icon: <Sparkles size={32} className="text-indigo-600" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Educational Roadmap</h2>
        <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">What I’m Learning & Exploring</h3>
        <p className="text-slate-500 text-lg leading-relaxed">
          The path to engineering excellence is built on a foundation of continuous curiosity. Here are the core pillars of my current academic focus.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {journeys.map((item, idx) => (
          <div key={idx} className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 text-center flex flex-col items-center">
            <div className="mb-8 p-6 bg-slate-50 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningJourney;
