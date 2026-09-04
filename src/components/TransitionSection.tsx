import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface TransitionSectionProps {
  onNavigate: (id: string) => void;
}

export const TransitionSection: React.FC<TransitionSectionProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-24 md:py-36 bg-[#0E0E10] text-[#F7F6F3] relative overflow-hidden">
      <div className="container-editorial">
        
        {/* Top Tagline */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-6 mb-16">
          <span className="font-mono text-xs text-orange-500 uppercase tracking-widest">
            01 / PHILOSOPHY & EXPERTISE
          </span>
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
            BRIDGING CREATIVE DIRECTION & ENGINEERING
          </span>
        </div>

        {/* Big Editorial Quote Intro */}
        <div className="max-w-6xl mb-20">
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.05] tracking-tight text-neutral-100">
            "I DO NOT BUILD TEMPLATES. I CRAFT <span className="text-orange-500">DIGITAL ARCHITECTURE</span> THAT DRIVES MEASURABLE BUSINESS GROWTH, DEEP USER ENGAGEMENT AND UNMATCHED SPEED."
          </h2>
        </div>

        {/* Two Column Grid: B&W Portrait (Mannie port hero 1) + Expertise Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Image Column (Hero 1) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group">
              <img
                src="/images/mannie-hero-1.jpg"
                alt="Oladele Emmanuel — Mannie Builds Headshot Portrait"
                className="w-full h-[540px] sm:h-[600px] object-cover object-top filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs text-orange-500 uppercase tracking-widest block">CREATIVE DIRECTOR & LEAD ENGINEER</span>
                  <span className="font-heading font-bold text-xl uppercase text-white">OLADELE EMMANUEL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content Column */}
          <div className="lg:col-span-7 flex flex-col space-y-10">
            <p className="font-body text-neutral-300 text-lg sm:text-xl leading-relaxed">
              With a multi-disciplinary background spanning frontend engineering, visual product design, and system automation, I help early-stage startups and enterprise brands turn complex ideas into refined, market-ready digital products.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-neutral-800">
              
              {/* Pillar 1 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800/80 space-y-3">
                <span className="font-mono text-xs text-orange-500 uppercase tracking-wider block">PRIMARY</span>
                <h3 className="font-heading font-bold text-xl uppercase text-white">WEB DEVELOPMENT</h3>
                <p className="text-xs text-neutral-400 leading-normal">Next.js, React, TypeScript, Node.js, Sub-second rendering & 90+ Lighthouse score.</p>
              </div>

              {/* Pillar 2 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800/80 space-y-3">
                <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider block">SECONDARY</span>
                <h3 className="font-heading font-bold text-xl uppercase text-white">UI/UX DESIGN</h3>
                <p className="text-xs text-neutral-400 leading-normal">Design systems, Figma tokens, high-density dashboard layouts, typography scale.</p>
              </div>

              {/* Pillar 3 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800/80 space-y-3">
                <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider block">SECONDARY</span>
                <h3 className="font-heading font-bold text-xl uppercase text-white">AUTOMATION</h3>
                <p className="text-xs text-neutral-400 leading-normal">Webhook pipelines, OpenAI/Gemini integration, Stripe billing, serverless triggers.</p>
              </div>

            </div>

            {/* Action Link */}
            <div className="pt-4 flex items-center gap-6">
              <button
                onClick={() => onNavigate('services')}
                className="btn-inverse inline-flex items-center gap-3"
              >
                <span>Explore Full Services</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>

              <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-neutral-400">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>Zero Outsourcing. 100% Craft.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
