import React, { useState } from 'react';
import { ArrowUpRight, Filter, Eye } from 'lucide-react';
import { PROJECTS, Project } from '../data/projects';
import { ProjectModal } from './ProjectModal';

export const FeaturedWork: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Development') return proj.categoryShort === 'Development';
    if (activeFilter === 'UI/UX') return proj.categoryShort === 'UI/UX';
    if (activeFilter === 'Automation') return proj.categoryShort === 'Automation';
    return true;
  });

  return (
    <section id="work" className="py-24 md:py-36 bg-[#F7F6F3] text-[#0E0E10]">
      <div className="container-editorial">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-300 pb-8 mb-16 gap-6">
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs text-orange-600 uppercase tracking-widest block font-semibold">
              02 / SELECTED CASE STUDIES ({PROJECTS.length} TOTAL)
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-none">
              FEATURED <span className="text-orange-600">WORK.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: 'All Projects (13)', value: 'All' },
              { label: 'Web Dev (6)', value: 'Development' },
              { label: 'UI/UX Design (6)', value: 'UI/UX' },
              { label: 'Automation (1)', value: 'Automation' }
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`font-mono text-xs uppercase px-4 py-2.5 rounded-full border transition-all duration-300 ${
                  activeFilter === tab.value
                    ? 'bg-[#0E0E10] text-[#F7F6F3] border-[#0E0E10] shadow-md font-bold'
                    : 'bg-transparent text-neutral-600 border-neutral-300 hover:border-neutral-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Alternating Large Editorial Projects List */}
        <div className="space-y-24 md:space-y-36">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer border-b border-neutral-300/80 pb-16 md:pb-24 transition-all duration-500"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-300 shadow-xl group-hover:shadow-2xl transition-all duration-700">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-[360px] sm:h-[480px] md:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>

                      {/* Floating View Case Study Badge */}
                      <div className="absolute top-6 right-6 bg-[#0E0E10] text-white px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2 shadow-lg">
                        <span>Inspect Case Study</span>
                        <Eye className="w-3.5 h-3.5 text-orange-500" />
                      </div>
                    </div>
                  </div>

                  {/* Text Details Column */}
                  <div className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    
                    <div className="flex items-center justify-between border-b border-neutral-300/70 pb-3">
                      <span className="font-mono text-xs text-orange-600 uppercase font-semibold">
                        0{index + 1} / {project.category}
                      </span>
                      <span className="font-mono text-xs text-neutral-500">{project.year}</span>
                    </div>

                    <h3 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0E0E10] group-hover:text-orange-600 transition-colors leading-tight">
                      {project.title}
                    </h3>

                    <p className="font-body text-neutral-600 text-base sm:text-lg leading-relaxed line-clamp-3">
                      {project.subtitle}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 py-3 bg-neutral-200/50 p-4 rounded-xl border border-neutral-300/60">
                      {project.results.slice(0, 2).map((res, rIdx) => (
                        <div key={rIdx}>
                          <span className="font-heading font-extrabold text-lg text-neutral-900 block">{res.metric}</span>
                          <span className="font-mono text-[11px] text-neutral-500 uppercase block">{res.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-[11px] uppercase bg-neutral-200 text-neutral-800 px-3 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Arrow */}
                    <div className="pt-2 flex items-center gap-3 font-heading font-bold text-sm uppercase tracking-wider text-[#0E0E10] group-hover:text-orange-600 transition-colors">
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
