import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/process';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 md:py-36 bg-[#F7F6F3] text-[#0E0E10] border-t border-neutral-300">
      <div className="container-editorial">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-300 pb-8 mb-16 gap-6">
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs text-orange-600 uppercase tracking-widest block font-semibold">
              05 / WORKFLOW ROADMAP
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-none text-[#0E0E10]">
              THE 5-STEP <span className="text-orange-600">PROCESS.</span>
            </h2>
          </div>

          <p className="font-body text-neutral-600 text-sm sm:text-base max-w-md">
            A battle-tested 5-stage sprint model designed to eliminate guesswork, keep timelines tight, and guarantee exceptional execution.
          </p>
        </div>

        {/* Process Steps Accordion & Interactive Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Numbered Timeline Navigation */}
          <div className="lg:col-span-5 space-y-4">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#0E0E10] text-[#F7F6F3] border-[#0E0E10] shadow-xl'
                      : 'bg-white text-neutral-800 border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono font-bold text-lg ${isActive ? 'text-orange-500' : 'text-neutral-400'}`}>
                        {step.number}
                      </span>
                      <h3 className="font-heading font-black text-2xl uppercase tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    <ArrowRight className={`w-5 h-5 transition-transform ${isActive ? 'text-orange-500 translate-x-1' : 'text-neutral-300'}`} />
                  </div>
                  <p className={`text-xs mt-2 ${isActive ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {step.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Active Step Showcase */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-neutral-300 shadow-xl space-y-8 min-h-[480px] flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <span className="font-mono text-sm text-orange-600 font-bold uppercase tracking-widest">
                  STAGE {PROCESS_STEPS[activeStep].number} OF 05
                </span>
                <span className="font-heading font-bold text-lg uppercase text-neutral-400">
                  {PROCESS_STEPS[activeStep].title}
                </span>
              </div>

              <h3 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#0E0E10]">
                {PROCESS_STEPS[activeStep].subtitle}
              </h3>

              <p className="font-body text-neutral-700 text-lg leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>

            </div>

            {/* Deliverables Box */}
            <div className="bg-[#F7F6F3] p-6 rounded-2xl border border-neutral-200 space-y-3">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block font-bold">
                EXPECTED STAGE DELIVERABLES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROCESS_STEPS[activeStep].deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2.5 font-body text-neutral-800 text-sm">
                    <CheckCircle className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
