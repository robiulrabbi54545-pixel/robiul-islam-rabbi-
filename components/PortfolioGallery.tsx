
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
      image: "https://picsum.photos/seed/sms/800/600"
    },
    {
      id: 2,
      title: "Algorithm Visualizer",
      description: "A Python project that visualizes sorting and searching algorithms to help students understand complexity. Interactive controls for speed and data size.",
      tech: ["Python", "Pygame"],
      category: "Python",
      image: "https://picsum.photos/seed/algo/800/600"
    },
    {
      id: 3,
      title: "Library Portal",
      description: "A C++ console application implementing advanced data structures like AVL trees and Hash Maps for efficient book tracking and member management.",
      tech: ["C++", "File I/O"],
      category: "C++",
      image: "https://picsum.photos/seed/library/800/600"
    },
    {
      id: 4,
      title: "Task Automation Script",
      description: "A collection of Python scripts designed to automate repetitive daily academic tasks, file organization, and data scraping.",
      tech: ["Python", "OS Library"],
      category: "Python",
      image: "https://picsum.photos/seed/auto/800/600"
    },
    {
      id: 5,
      title: "Weather Tracker App",
      description: "An academic project using Java and OpenWeatherMap API to fetch and display local weather data with dynamic icons.",
      tech: ["Java", "API", "JSON"],
      category: "Java",
      image: "https://picsum.photos/seed/weather/800/600"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio designed to showcase my skills and academic journey using React and Tailwind CSS.",
      tech: ["React", "Tailwind"],
      category: "Web",
      image: "https://picsum.photos/seed/web/800/600"
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
              className="group flex items-center gap-2 text-gray-500 hover:text-orange-500 font-semibold transition-colors"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">Project Gallery</h1>
            <p className="text-xl text-gray-500 max-w-xl">
              A curated showcase of my academic projects, minor explorations, and technical challenges.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-gray-400 mr-4">
            <Filter size={18} />
            <span className="text-sm font-bold uppercase tracking-wider">Filter By:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                filter === cat 
                  ? 'bg-gray-900 text-white border-gray-900 shadow-lg shadow-gray-200' 
                  : 'bg-white text-gray-500 border-gray-100 hover:border-orange-500 hover:text-orange-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group flex flex-col h-full bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <button className="p-4 bg-white rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition-colors">
                    <Github size={24} />
                  </button>
                  <button className="p-4 bg-white rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition-colors">
                    <ExternalLink size={24} />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-black uppercase tracking-widest rounded-lg shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center border-2 border-dashed border-gray-100 rounded-3xl">
            <Search size={48} className="mx-auto text-gray-200 mb-4" />
            <h3 className="text-xl font-bold text-gray-400">No projects found in this category</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioGallery;
