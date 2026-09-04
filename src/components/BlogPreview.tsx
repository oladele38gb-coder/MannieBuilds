import React from 'react';
import { ArrowUpRight, BookOpen, Clock, Sparkles } from 'lucide-react';

export const BlogPreview: React.FC = () => {
  return (
    <section id="blog" className="py-24 md:py-36 bg-[#F7F6F3] text-[#0E0E10] border-t border-neutral-300">
      <div className="container-editorial">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-300 pb-8 mb-16 gap-6">
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs text-orange-600 uppercase tracking-widest block font-semibold">
              09 / ESSAYS & ARCHITECTURE
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-none text-[#0E0E10]">
              WRITING & <span className="text-orange-600">THOUGHTS.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-[#0E0E10] text-[#F7F6F3] px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>ARCHITECTURAL JOURNAL</span>
          </div>
        </div>

        {/* Coming Soon Teaser Architecture Block */}
        <div className="bg-[#0E0E10] text-[#F7F6F3] p-8 sm:p-16 rounded-3xl border border-neutral-800 relative overflow-hidden space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-800 pb-6 gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-orange-500 animate-ping"></span>
              <span className="font-mono text-xs text-orange-500 uppercase tracking-widest font-bold">
                PUBLISHING PIPELINE IN PROGRESS
              </span>
            </div>

            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              COMING SOON • LATE 2026
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h3 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-none">
              IN-DEPTH ESSAYS ON WEB ARCHITECTURE, DESIGN TOKENS & AUTOMATION WORKFLOWS.
            </h3>
            <p className="font-body text-neutral-400 text-lg sm:text-xl font-light">
              Preparing a series of technical articles breaking down real-world case studies, React 19 performance patterns, GSAP animation orchestration, and building autonomous LLM agents.
            </p>
          </div>

          {/* Upcoming Article Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-neutral-800">
            <div className="p-6 bg-neutral-900/80 rounded-2xl border border-neutral-800 space-y-2">
              <span className="font-mono text-xs text-orange-500 uppercase block">ESSAY 01 (UPCOMING)</span>
              <h4 className="font-heading font-bold text-lg uppercase text-white">Sub-Millisecond Next.js Architectures</h4>
              <p className="text-xs text-neutral-400">Optimizing server components and WebSocket payloads for high-concurrency fintech portals.</p>
            </div>

            <div className="p-6 bg-neutral-900/80 rounded-2xl border border-neutral-800 space-y-2">
              <span className="font-mono text-xs text-neutral-500 uppercase block">ESSAY 02 (UPCOMING)</span>
              <h4 className="font-heading font-bold text-lg uppercase text-white">The Death of Generic SaaS Cards</h4>
              <p className="text-xs text-neutral-400">Why editorial typography and high-contrast layouts drive higher conversion rates.</p>
            </div>

            <div className="p-6 bg-neutral-900/80 rounded-2xl border border-neutral-800 space-y-2">
              <span className="font-mono text-xs text-neutral-500 uppercase block">ESSAY 03 (UPCOMING)</span>
              <h4 className="font-heading font-bold text-lg uppercase text-white">Autonomous LLM Webhook Engines</h4>
              <p className="text-xs text-neutral-400">Engineering self-healing automation pipelines with PostgreSQL and OpenAI APIs.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
