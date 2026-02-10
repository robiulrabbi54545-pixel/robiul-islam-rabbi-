
import React from 'react';
import { ExternalLink, Github, Folder, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  onViewMore: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewMore }) => {
  const projects = [
    {
      title: "Student Management System",
      description: "A robust Java-based application to manage student records, grades, and schedules with an intuitive UI.",
      tech: ["Java", "Swing", "MySQL"],
      category: "Academic Project"
    },
    {
      title: "Algorithm Visualizer",
      description: "A Python project that visualizes sorting and searching algorithms to help students understand complexity.",
      tech: ["Python", "Pygame"],
      category: "Minor Project"
    },
    {
      title: "Library Portal",
      description: "A C++ console application implementing advanced data structures for efficient book tracking and member management.",
      tech: ["C++", "File I/O"],
      category: "Minor Project"
    },
    {
      title: "Task Automation Script",
      description: "A collection of Python scripts designed to automate repetitive daily academic tasks and file organization.",
      tech: ["Python", "OS Library"],
      category: "Minor Project"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">— Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Academic & Minor Projects</h3>
        </div>
        <button 
          onClick={onViewMore}
          className="flex items-center gap-2 text-gray-900 font-bold hover:text-orange-500 transition-colors group"
        >
          View Full Gallery <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all p-8 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Folder size={28} />
              </div>
              <div className="flex gap-3 text-gray-400">
                <Github size={20} className="hover:text-gray-900 cursor-pointer" />
                <ExternalLink size={20} className="hover:text-gray-900 cursor-pointer" />
              </div>
            </div>
            
            <div className="flex-grow">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">{project.category}</span>
              <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-bold rounded-md uppercase border border-gray-100">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
