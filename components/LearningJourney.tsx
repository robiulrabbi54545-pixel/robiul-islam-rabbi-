
import React from 'react';
import { BookOpen, Layers, Code, Zap } from 'lucide-react';

const LearningJourney: React.FC = () => {
  const journeys = [
    {
      title: "Programming Fundamentals",
      desc: "Deep diving into the building blocks of computing: memory management, pointer logic, and OOP paradigms using C/C++ and Java.",
      icon: <Code size={32} className="text-indigo-600" />
    },
    {
      title: "Software Concepts",
      desc: "Exploring system architecture, database normalization, and scalable design patterns for real-world software applications.",
      icon: <Layers size={32} className="text-indigo-600" />
    },
    {
      title: "Algorithmic Logic",
      desc: "Solving complex problems with optimized data structures. Focusing on consistency and logical thinking in every line of code.",
      icon: <Zap size={32} className="text-indigo-600" />
    },
    {
      title: "Modern Tech Stacks",
      desc: "Branching into modern web development with React and exploring how cross-platform ecosystems integrate with core backends.",
      icon: <BookOpen size={32} className="text-indigo-600" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Journey Highlights</h2>
        <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">What I’m Learning & Exploring</h3>
        <p className="text-slate-500 text-lg leading-relaxed">
          I am committed to continuous growth. My academic journey at LPU focuses on these core pillars of software development.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {journeys.map((item, idx) => (
          <div key={idx} className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 text-center flex flex-col items-center">
            <div className="mb-8 p-6 bg-slate-50 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningJourney;
