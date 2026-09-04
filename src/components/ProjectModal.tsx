import React from 'react';
import { X, ArrowUpRight, CheckCircle2, Zap, Layers, Cpu } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12 overflow-y-auto bg-black/85 backdrop-blur-md transition-all duration-300">
      <div 
        className="relative w-full max-w-6xl bg-[#0E0E10] text-[#F7F6F3] rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Fixed Header */}
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-neutral-800 bg-[#0E0E10] sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
              {project.category}
            </span>
            <span className="text-neutral-500 font-mono text-xs">•</span>
            <span className="font-mono text-xs text-neutral-400 uppercase">{project.client} ({project.year})</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-orange-500 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-12 overflow-y-auto space-y-12 flex-1">
          
          {/* Title & Subtitle */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase text-white tracking-tight leading-none">
              {project.title}
            </h2>
            <p className="font-body text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Large Hero Banner */}
          <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 group">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-[320px] sm:h-[480px] md:h-[560px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Results Metrics Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 bg-neutral-900/80 rounded-xl border border-neutral-800">
            {project.results.map((res, idx) => (
              <div key={idx} className="space-y-1">
                <span className="font-heading font-black text-3xl sm:text-4xl text-orange-500 uppercase tracking-tight block">
                  {res.metric}
                </span>
                <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider block">
                  {res.label}
                </span>
              </div>
            ))}
          </div>

          {/* Detailed Storytelling Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
            
            {/* Challenge */}
            <div className="space-y-3 p-6 bg-neutral-900/40 rounded-xl border border-neutral-800/60">
              <div className="flex items-center gap-2 font-mono text-xs text-orange-500 uppercase tracking-wider">
                <Zap className="w-4 h-4" /> 01. The Challenge
              </div>
              <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                {project.challenge}
              </p>
            </div>

            {/* Approach */}
            <div className="space-y-3 p-6 bg-neutral-900/40 rounded-xl border border-neutral-800/60">
              <div className="flex items-center gap-2 font-mono text-xs text-orange-500 uppercase tracking-wider">
                <Layers className="w-4 h-4" /> 02. The Strategic Approach
              </div>
              <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                {project.approach}
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-3 p-6 bg-neutral-900/40 rounded-xl border border-neutral-800/60">
              <div className="flex items-center gap-2 font-mono text-xs text-orange-500 uppercase tracking-wider">
                <Cpu className="w-4 h-4" /> 03. Execution & Solution
              </div>
              <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                {project.solution}
              </p>
            </div>

            {/* Outcome */}
            <div className="space-y-3 p-6 bg-neutral-900/40 rounded-xl border border-neutral-800/60">
              <div className="flex items-center gap-2 font-mono text-xs text-orange-500 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" /> 04. Measured Outcome
              </div>
              <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                {project.outcome}
              </p>
            </div>

          </div>

          {/* Technology & Deliverables */}
          <div className="space-y-4 pt-6 border-t border-neutral-800">
            <h3 className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              TECHNOLOGY STACK USED
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technology.map((tech, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs uppercase bg-neutral-800 text-neutral-200 px-4 py-2 rounded-full border border-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="flex items-center justify-between p-6 border-t border-neutral-800 bg-[#0E0E10]">
          <span className="font-mono text-xs text-neutral-500 uppercase">ROLE: {project.role}</span>
          <button
            onClick={onClose}
            className="btn-inverse text-xs px-6 py-3"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
