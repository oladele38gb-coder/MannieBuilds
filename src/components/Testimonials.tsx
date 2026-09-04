import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 md:py-36 bg-[#F7F6F3] text-[#0E0E10] border-t border-neutral-300">
      <div className="container-editorial">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-neutral-300 pb-8 mb-16">
          <span className="font-mono text-xs text-orange-600 uppercase tracking-widest font-semibold">
            07 / TESTIMONIALS & RECOGNITION
          </span>
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
            {currentIndex + 1} OF {TESTIMONIALS.length}
          </span>
        </div>

        {/* Minimal High-Typography Editorial Layout (No cards, no stars) */}
        <div className="max-w-5xl space-y-12">
          
          <Quote className="w-12 h-12 text-orange-600 opacity-80" />

          <p className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-[1.05] text-[#0E0E10]">
            "{current.quote}"
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-neutral-300 pt-8 gap-6">
            <div className="space-y-1">
              <h3 className="font-heading font-extrabold text-2xl uppercase tracking-tight text-[#0E0E10]">
                {current.author}
              </h3>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                {current.role} — <span className="text-neutral-900 font-bold">{current.company}</span>
              </p>
            </div>

            <div className="flex items-center gap-6">
              {/* Business Metric Tag */}
              <div className="bg-[#0E0E10] text-[#F7F6F3] px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider">
                {current.metric}
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous quote"
                  className="w-12 h-12 rounded-full border border-neutral-300 hover:border-orange-600 hover:bg-orange-600 hover:text-white flex items-center justify-center transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next quote"
                  className="w-12 h-12 rounded-full border border-neutral-300 hover:border-orange-600 hover:bg-orange-600 hover:text-white flex items-center justify-center transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
