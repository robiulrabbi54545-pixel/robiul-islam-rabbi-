
import React from 'react';
import { BookOpen, Layers, Code, Zap } from 'lucide-react';

const LearningJourney: React.FC = () => {
  const journeys = [
    {
      title: "Programming Fundamentals",
      desc: "Deep diving into core concepts like OOP, Data Structures, and Algorithms using Java and C++.",
      icon: <Code size={32} className="text-orange-500" />
    },
    {
      title: "Software Dev Concepts",
      desc: "Exploring system design, software development lifecycles, and architectural patterns.",
      icon: <Layers size={32} className="text-blue-500" />
    },
    {
      title: "Multi-language Problem Solving",
      desc: "Practicing competitive programming and real-world logic building across multiple languages.",
      icon: <Zap size={32} className="text-yellow-500" />
    },
    {
      title: "Modern Technologies",
      desc: "Currently exploring web technologies and cloud foundations to complement my backend skills.",
      icon: <BookOpen size={32} className="text-green-500" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">— Learning Journey</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What I’m Learning & Exploring</h3>
        <p className="text-gray-600">
          As a final year student, I focus on building a strong core before diving into specialization. 
          Here's what my current growth path looks like.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {journeys.map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center">
            <div className="mb-6 inline-block p-4 bg-gray-50 rounded-2xl group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningJourney;
