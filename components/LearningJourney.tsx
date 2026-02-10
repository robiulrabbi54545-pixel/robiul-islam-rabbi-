
import React from 'react';
import { Coffee, Layers, Terminal, Sparkles, BrainCircuit, Box } from 'lucide-react';

const LearningJourney: React.FC = () => {
  const journeys = [
    {
      title: "Core Programming Foundations",
      desc: "Mastering the fundamentals of computation via C and C++. Deep focus on memory addressing, pointers, and iterative vs recursive problem solving.",
      icon: <Terminal size={32} className="text-indigo-600" />
    },
    {
      title: "Object-Oriented Architecture",
      desc: "In-depth study of OO paradigms in Java. Implementing Abstraction, Encapsulation, Inheritance, and Polymorphism to build scalable modules.",
      icon: <Box size={32} className="text-indigo-600" />
    },
    {
      title: "Complexity & Data Logic",
      desc: "Analyzing algorithmic efficiency. Mastering Trees, Graphs, and Hash-based structures to optimize system performance and data retrieval.",
      icon: <BrainCircuit size={32} className="text-indigo-600" />
    },
    {
      title: "Full-Stack Interconnectivity",
      desc: "Learning to bridge backend logic with user-facing interfaces. Exploring React and Tailwind to create cohesive, responsive web applications.",
      icon: <Sparkles size={32} className="text-indigo-600" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Academic Roadmap</h2>
        <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">What I’m Learning & Exploring</h3>
        <p className="text-slate-500 text-lg leading-relaxed">
          The journey of an engineer is one of constant evolution. Here are the core pillars of my current technical focus as a CSE scholar at LPU.
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
