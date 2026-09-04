import React, { useState } from 'react';
import { TECH_STACK, TechItem } from '../data/techStack';
import { Code, Terminal, Cpu, Sparkles } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);

  const categories = ['All', 'Frontend', 'Backend & DB', 'Automation & AI', 'Motion & Craft'];

  const filteredStack = TECH_STACK.filter((tech) => {
    if (selectedCategory === 'All') return true;
    return tech.category === selectedCategory;
  });

  return (
    <section className="py-24 md:py-36 bg-[#0E0E10] text-[#F7F6F3] border-t border-neutral-800">
      <div className="container-editorial">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-8 mb-16 gap-6">
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs text-orange-500 uppercase tracking-widest block font-semibold">
              06 / TECHNICAL STACK & TOOLING
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-none text-white">
              CRAFTED WITH <span className="text-orange-500">PRECISION.</span>
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-xs uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white border-orange-500 font-bold'
                    : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredStack.map((tech) => {
            const isHovered = hoveredTech?.name === tech.name;

            return (
              <div
                key={tech.name}
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-48 relative overflow-hidden group ${
                  isHovered
                    ? 'bg-neutral-800 border-orange-500 shadow-2xl scale-[1.02]'
                    : 'bg-neutral-900/60 border-neutral-800/80 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-start justify-between z-10">
                  <span className="font-mono text-[11px] text-orange-500 uppercase tracking-wider font-semibold">
                    {tech.category}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase px-2 py-0.5 rounded bg-neutral-800">
                    {tech.level}
                  </span>
                </div>

                <div className="z-10 space-y-1">
                  <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-white group-hover:text-orange-500 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="font-mono text-xs text-neutral-400 line-clamp-1">
                    {tech.role}
                  </p>
                </div>

                {/* Hover Reveal Description */}
                <div className="z-10 border-t border-neutral-800 pt-2 text-[11px] font-body text-neutral-300 opacity-90">
                  {tech.description}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
