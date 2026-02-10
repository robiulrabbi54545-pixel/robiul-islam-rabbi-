
import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Search, Filter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  image: string;
}

interface PortfolioGalleryProps {
  onBack: () => void;
}

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onBack }) => {
  const [filter, setFilter] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: "Student Management System",
      description: "A robust Java-based application to manage student records, grades, and schedules with an intuitive UI. Features include database integration and real-time reporting.",
      tech: ["Java", "Swing", "MySQL"],
      category: "Java",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Algorithm Visualizer",
      description: "A Python project that visualizes sorting and searching algorithms to help students understand complexity. Interactive controls for speed and data size.",
      tech: ["Python", "Pygame"],
      category: "Python",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Library Portal",
      description: "A C++ console application implementing advanced data structures like AVL trees and Hash Maps for efficient book tracking and member management.",
      tech: ["C++", "File I/O"],
      category: "C++",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Task Automation Script",
      description: "A collection of Python scripts designed to automate repetitive daily academic tasks, file organization, and data scraping.",
      tech: ["Python", "OS Library"],
      category: "Python",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "Weather Tracker App",
      description: "An academic project using Java and OpenWeatherMap API to fetch and display local weather data with dynamic icons.",
      tech: ["Java", "API", "JSON"],
      category: "Java",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio designed to showcase my skills and academic journey using React and Tailwind CSS.",
      tech: ["React", "Tailwind"],
      category: "Web",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const categories = ['All', 'Java', 'Python', 'C++', 'Web'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <button 
              onClick={onBack}
              className="group inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold transition-colors"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight">Project Gallery</h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              Exploration and implementation of software engineering principles through academic and personal challenges.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-16">
          <div className="flex items-center gap-2 text-slate-400 mr-4">
            <Filter size={18} />
            <span className="text-[10px] font-black uppercase tracking-widest">Sort By Segment:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-xl text-xs font-bold transition-all border ${
                filter === cat 
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xl shadow-indigo-200' 
                  : 'bg-white text-slate-500 border-slate-100 hover:border-indigo-600 hover:text-indigo-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group flex flex-col h-full bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
                  <button className="p-4 bg-white rounded-2xl text-slate-900 hover:bg-indigo-600 hover:text-white transition-all shadow-xl active:scale-90">
                    <Github size={24} />
                  </button>
                  <button className="p-4 bg-white rounded-2xl text-slate-900 hover:bg-indigo-600 hover:text-white transition-all shadow-xl active:scale-90">
                    <ExternalLink size={24} />
                  </button>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-lg shadow-sm border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-32 text-center border-4 border-dashed border-slate-50 rounded-[3rem]">
            <Search size={64} className="mx-auto text-slate-100 mb-6" />
            <h3 className="text-2xl font-bold text-slate-300">No matching projects located</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioGallery;
