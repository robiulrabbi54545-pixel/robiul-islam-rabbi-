
import React from 'react';
import { ExternalLink, Github, ArrowRight, FolderCode } from 'lucide-react';

interface ProjectsProps {
  onViewMore: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewMore }) => {
  const projects = [
    {
      title: "Secure Student Registry",
      description: "A comprehensive records management system built in Java. Implements JDBC for MySQL database connectivity, featuring a Swing GUI for efficient data entry, validation, and persistent storage.",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
      category: "Backend Systems",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Logic Visualization Engine",
      description: "An interactive algorithm visualizer developed in Python. Utilizes Pygame to demonstrate sorting and searching logic in real-time, helping clarify time-complexity concepts visually.",
      tech: ["Python", "Pygame", "Logic Design"],
      category: "Visualization Tools",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Optimized Library Registry",
      description: "A high-performance C++ application for book indexing. Implements advanced data structures (Hash Tables and Binary Search Trees) to achieve logarithmic search efficiency and file-based data persistence.",
      tech: ["C++", "File I/O", "Data Structures"],
      category: "System Utilities",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "DevOps Automation Suite",
      description: "A suite of Python-driven scripts designed to automate local environment configuration and academic resource scrapers, streamlining development workflows for fellow CSE students.",
      tech: ["Python", "Automation", "Shell"],
      category: "Automation-DevOps",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Project Showcase</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 leading-tight">Academic & Minor Projects</h3>
        </div>
        <button 
          onClick={onViewMore}
          className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 font-bold hover:border-indigo-600 hover:text-indigo-600 transition-all group shadow-sm"
        >
          View Full Project Gallery <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <div key={idx} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <div className="flex gap-4">
                  <button className="p-3 bg-white/20 backdrop-blur-md text-white rounded-xl hover:bg-white hover:text-slate-900 transition-all">
                    <Github size={20} />
                  </button>
                  <button className="p-3 bg-white/20 backdrop-blur-md text-white rounded-xl hover:bg-white hover:text-slate-900 transition-all">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-10 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-lg">
                  {project.category}
                </span>
                <FolderCode size={18} className="text-slate-200 group-hover:text-indigo-100 transition-colors" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h4>
              <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-slate-50 text-slate-500 text-[11px] font-bold rounded-lg border border-slate-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
