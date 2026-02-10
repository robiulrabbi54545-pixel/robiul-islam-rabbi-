
import React from 'react';
import { BookOpen, Layers, Terminal, Sparkles, Binary } from 'lucide-react';

const LearningJourney: React.FC = () => {
  const journeys = [
    {
      title: "Programming Fundamentals",
      desc: "Mastering the foundational logic of computing through C and C++. Understanding memory management, pointers, and efficient recursion.",
      icon: <Terminal size={32} className="text-indigo-600" />
    },
    {
      title: "Advanced Software Concepts",
      desc: "Exploring high-level system designs, database normalization (MySQL), and Object-Oriented patterns in Java to build scalable backends.",
      icon: <Layers size={32} className="text-indigo-600" />
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Diving deep into the 'brain' of software. Solving complex problems using optimized trees, graphs, and search algorithms for efficiency.",
      icon: <Binary size={32} className="text-indigo-600" />
    },
    {
      title: "Web & Modern Exploration",
      desc: "Integrating backend logic with modern frontends. Exploring React and Tailwind to create seamless user experiences and professional portals.",
      icon: <Sparkles size={32} className="text-indigo-600" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Academic Progression</h2>
        <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">What I’m Learning & Exploring</h3>
        <p className="text-slate-500 text-lg leading-relaxed">
          The path to engineering excellence is a continuous cycle of learning. Here are the core domains I am currently specializing in.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {journeys.map((item, idx) => (
          <div key={idx} className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 text-center flex flex-col items-center">
            <div className="mb-8 p-6 bg-slate-50 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
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
