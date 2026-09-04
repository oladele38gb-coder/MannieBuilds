import React from 'react';
import { Palette, TrendingUp, Cpu, Bot } from 'lucide-react';

export const WhyWorkWithMannie: React.FC = () => {
  const blocks = [
    {
      icon: Palette,
      title: 'Design + Development',
      subtitle: 'Single Source of Engineering Craft',
      description: 'Eliminate the friction between designers and developers. I bridge high-end visual design systems with production-grade React/TypeScript code without dropping a pixel.'
    },
    {
      icon: TrendingUp,
      title: 'Business Thinking',
      subtitle: 'Conversion & ROI Focused',
      description: 'Pretty code means nothing without business ROI. Every layout, copy structure, and animation hierarchy is engineered to increase conversion rates, user retention, and customer trust.'
    },
    {
      icon: Cpu,
      title: 'Automation Mindset',
      subtitle: 'Self-Healing Workflows',
      description: 'Don’t waste manual hours on administrative tasks. I architect event-driven backend pipelines and webhook integrations that keep your business operating effortlessly 24/7.'
    },
    {
      icon: Bot,
      title: 'AI-Augmented Delivery',
      subtitle: 'Rapid Iteration & Superior Speed',
      description: 'Leveraging cutting-edge AI orchestration (OpenAI, Gemini) within development workflows to prototype, test, and ship full-scale products 3x faster than traditional agencies.'
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-[#0E0E10] text-[#F7F6F3] border-t border-neutral-800">
      <div className="container-editorial">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-8 mb-16 gap-6">
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs text-orange-500 uppercase tracking-widest block font-semibold">
              04 / WHY PARTNER WITH MANNIE
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-none text-white">
              THE UNFAIR <span className="text-orange-500">ADVANTAGE.</span>
            </h2>
          </div>

          <p className="font-body text-neutral-400 text-sm sm:text-base max-w-md">
            Why leading founders, SaaS teams, and high-growth companies hire Oladele Emmanuel over traditional multi-person agencies.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <div
                key={idx}
                className="p-8 sm:p-12 bg-neutral-900/60 rounded-2xl border border-neutral-800 hover:border-orange-500/50 transition-all duration-500 group space-y-6"
              >
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-xl bg-neutral-800 group-hover:bg-orange-500 text-orange-500 group-hover:text-white flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold">
                    PILLAR 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-white group-hover:text-orange-500 transition-colors">
                    {block.title}
                  </h3>
                  <p className="font-mono text-xs text-orange-500 uppercase tracking-wider">
                    {block.subtitle}
                  </p>
                </div>

                <p className="font-body text-neutral-300 text-base leading-relaxed">
                  {block.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
