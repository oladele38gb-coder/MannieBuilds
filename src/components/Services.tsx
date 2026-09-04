import React, { useState } from 'react';
import { ArrowUpRight, Check, Plus, Minus } from 'lucide-react';
import { SERVICES } from '../data/services';

interface ServicesProps {
  onNavigate: (id: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const [activeService, setActiveService] = useState<string | null>(SERVICES[0].id);

  return (
    <section id="services" className="py-24 md:py-36 bg-[#FFFFFF] text-[#0E0E10] border-t border-neutral-200">
      <div className="container-editorial">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 pb-8 mb-16 gap-6">
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs text-orange-600 uppercase tracking-widest block font-semibold">
              03 / WHAT WE DO
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-none text-[#0E0E10]">
              SERVICES & <span className="text-orange-600">CAPABILITIES.</span>
            </h2>
          </div>

          <p className="font-body text-neutral-600 text-sm sm:text-base max-w-md">
            End-to-end digital product design, frontend engineering, and automation architecture built to scale your business.
          </p>
        </div>

        {/* Marcelo-Inspired Services Accordion List (White Background, Black Text) */}
        <div className="divide-y divide-neutral-200">
          {SERVICES.map((service) => {
            const isExpanded = activeService === service.id;

            return (
              <div
                key={service.id}
                className="py-8 md:py-12 transition-all duration-300 group"
              >
                {/* Accordion Header Row */}
                <div
                  onClick={() => setActiveService(isExpanded ? null : service.id)}
                  className="flex flex-col md:flex-row md:items-center justify-between cursor-pointer gap-4"
                >
                  <div className="flex items-baseline gap-6 md:gap-12">
                    <span className="font-mono text-lg md:text-xl text-neutral-400 font-medium group-hover:text-orange-600 transition-colors">
                      {service.number}
                    </span>
                    <h3 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#0E0E10] group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6 self-end md:self-auto">
                    <p className="hidden xl:block font-body text-neutral-500 text-sm max-w-xs text-right">
                      {service.shortDesc}
                    </p>
                    <div className="w-12 h-12 rounded-full border border-neutral-300 group-hover:border-orange-600 group-hover:bg-orange-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                      {isExpanded ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Content Reveal */}
                {isExpanded && (
                  <div className="mt-8 pt-8 border-t border-neutral-100 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fadeIn">
                    
                    {/* Left Column: Full Description & Tech */}
                    <div className="lg:col-span-6 space-y-6">
                      <p className="font-body text-neutral-700 text-lg leading-relaxed">
                        {service.fullDesc}
                      </p>

                      <div className="space-y-3">
                        <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block">
                          TECHNOLOGIES & STACK
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="font-mono text-xs uppercase bg-neutral-100 border border-neutral-200 text-neutral-800 px-3.5 py-1.5 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => onNavigate('contact')}
                          className="btn-primary text-xs"
                        >
                          <span>Request {service.title} Sprint</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Key Deliverables List */}
                    <div className="lg:col-span-6 bg-[#F7F6F3] p-8 rounded-2xl border border-neutral-200 space-y-4">
                      <span className="font-mono text-xs text-orange-600 uppercase tracking-widest block font-bold">
                        KEY SCOPE DELIVERABLES
                      </span>
                      <ul className="space-y-3">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 font-body text-neutral-800 text-base">
                            <Check className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
