import React from 'react';
import { ArrowDownRight, ArrowUpRight, Code, Sparkles, Cpu } from 'lucide-react';

interface HeroProps {
  onNavigate: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 flex flex-col justify-between relative overflow-hidden bg-[#F7F6F3]">
      <div className="container-editorial w-full my-auto">
        
        {/* Top Editorial Sub-header Tag */}
        <div className="flex flex-wrap items-center justify-between border-b border-neutral-300/70 pb-6 mb-12 gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-orange-600 bg-orange-500/10 px-3 py-1 rounded-full font-semibold">
              OLADELE EMMANUEL
            </span>
            <span className="text-neutral-400 font-mono text-xs">•</span>
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-600">
              POSITIONING: DESIGN, BUILD & AUTOMATE
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono uppercase text-neutral-500">
            <span className="flex items-center gap-1.5"><Code className="w-3.5 h-3.5 text-orange-500" /> Web Development</span>
            <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-neutral-700" /> UI/UX Design</span>
            <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-neutral-700" /> Automation</span>
          </div>
        </div>

        {/* Hero Main Grid: Left Portrait + Right Oversized Editorial Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Portrait Framing */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-300 shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
              <img
                src="/images/mannie-hero-2.jpg"
                alt="Oladele Emmanuel — Mannie Builds Hero Portrait"
                className="w-full h-[520px] sm:h-[620px] lg:h-[680px] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                loading="eager"
              />
              
              {/* Studio Backdrop Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10]/80 via-transparent to-transparent opacity-90"></div>

              {/* In-Image Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white border-t border-white/20 pt-4">
                <div>
                  <h2 className="font-heading font-black text-xl uppercase tracking-tight">OLADELE EMMANUEL</h2>
                  <p className="font-mono text-xs text-neutral-300 uppercase tracking-widest mt-0.5">MANAGING FOUNDER & ENGINEER</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
                  <ArrowDownRight className="w-5 h-5 animate-bounce" />
                </div>
              </div>
            </div>

            {/* Corner Badge Accent */}
            <div className="absolute -top-4 -right-4 hidden sm:flex bg-[#0E0E10] text-[#F7F6F3] p-4 rounded-xl border border-neutral-800 shadow-xl flex-col space-y-1">
              <span className="font-mono text-[10px] text-orange-500 uppercase tracking-widest">STATUS</span>
              <span className="font-heading font-bold text-xs uppercase tracking-wider">AVAILABLE FOR Q3/Q4</span>
            </div>
          </div>

          {/* Right Column: Oversized Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="space-y-2">
              <h1 className="font-heading font-black tracking-tighter text-[#0E0E10] text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-[110px] leading-[0.88] uppercase">
                BUILDING<br />
                DIGITAL<br />
                PRODUCTS<br />
                THAT<br />
                <span className="text-orange-600 underline decoration-orange-600/30 underline-offset-8">PERFORM.</span>
              </h1>
            </div>

            <p className="font-body text-neutral-700 text-lg sm:text-xl md:text-2xl max-w-2xl font-normal leading-relaxed">
              I design, develop and automate digital experiences for startups, SaaS companies and ambitious businesses.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('work')}
                className="btn-primary"
              >
                <span>View Work</span>
                <ArrowDownRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="btn-secondary"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Editorial Grid Details */}
      <div className="container-editorial w-full mt-16 pt-8 border-t border-neutral-300/70 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono text-neutral-500 uppercase tracking-wider">
        <div>
          <span className="block text-neutral-400">LOCATION</span>
          <span className="font-bold text-neutral-900">LAGOS, NIGERIA</span>
        </div>
        <div>
          <span className="block text-neutral-400">FOCUS</span>
          <span className="font-bold text-neutral-900">FULL-STACK & AUTOMATION</span>
        </div>
        <div>
          <span className="block text-neutral-400">EXPERIENCE</span>
          <span className="font-bold text-neutral-900">6+ YEARS INDUSTRY CRAFT</span>
        </div>
        <div>
          <span className="block text-neutral-400">RATING</span>
          <span className="font-bold text-orange-600">AWWWARDS LEVEL CRAFT</span>
        </div>
      </div>
    </section>
  );
};
