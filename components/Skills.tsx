
import React from 'react';
import { Cpu, Globe, Database, Command } from 'lucide-react';

const Skills: React.FC = () => {
  const stack = [
    {
      category: "Core Languages",
      icon: <Command size={20} />,
      skills: ["Java (SE)", "C++", "Python", "C"],
      color: "bg-indigo-50 text-indigo-700 border-indigo-100"
    },
    {
      category: "Frameworks & Libraries",
      icon: <Globe size={20} />,
      skills: ["Java Swing", "React", "Tailwind CSS", "PyGame"],
      color: "bg-emerald-50 text-emerald-700 border-emerald-100"
    },
    {
      category: "Technical Tools",
      icon: <Cpu size={20} />,
      skills: ["Git/GitHub", "IntelliJ IDEA", "PyCharm", "VS Code"],
      color: "bg-blue-50 text-blue-700 border-blue-100"
    },
    {
      category: "Data & Systems",
      icon: <Database size={20} />,
      skills: ["MySQL", "Relational DBs", "File Systems", "OOP Principles"],
      color: "bg-amber-50 text-amber-700 border-amber-100"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Technical Proficiency</h2>
        <h3 className="text-4xl font-extrabold text-slate-900">Expertise Stack</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stack.map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all border-b-4 hover:border-b-indigo-500">
            <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 mb-6">
              {item.icon}
            </div>
            <h4 className="font-bold text-lg text-slate-900 mb-6">{item.category}</h4>
            <div className="flex flex-wrap gap-2">
              {item.skills.map(skill => (
                <span key={skill} className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${item.color}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="text-2xl font-black text-slate-400 tracking-tighter uppercase italic">Java Enthusiast</div>
        <div className="text-2xl font-black text-slate-400 tracking-tighter uppercase italic">Python Dev</div>
        <div className="text-2xl font-black text-slate-400 tracking-tighter uppercase italic">C++ Coder</div>
        <div className="text-2xl font-black text-slate-400 tracking-tighter uppercase italic">LPU Scholar</div>
      </div>
    </div>
  );
};

export default Skills;
