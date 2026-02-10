
import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  onViewMore: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewMore }) => {
  const projects = [
    {
      title: "Student Management System",
      description: "A robust Java-based application to manage student records, grades, and schedules with an intuitive UI.",
      tech: ["Java", "Swing", "MySQL"],
      category: "Academic Project",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Algorithm Visualizer",
      description: "A Python project that visualizes sorting and searching algorithms to help students understand complexity.",
      tech: ["Python", "Pygame"],
      category: "Minor Project",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Library Portal",
      description: "A C++ console application implementing advanced data structures for efficient book tracking.",
      tech: ["C++", "File I/O"],
      category: "Minor Project",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Task Automation Script",
      description: "A collection of Python scripts designed to automate repetitive daily academic tasks and file organization.",
      tech: ["Python", "OS Library"],
      category: "Minor Project",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Featured Work</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 leading-tight">Academic & Minor Projects</h3>
        </div>
        <button 
          onClick={onViewMore}
          className="flex items-center gap-2 text-slate-900 font-bold hover:text-indigo-600 transition-colors group"
        >
          View Full Gallery <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <div key={idx} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
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
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-lg">
                  {project.category}
                </span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h4>
              <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
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
