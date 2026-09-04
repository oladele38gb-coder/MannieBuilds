import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq';
import { Plus, Minus } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 md:py-36 bg-[#0E0E10] text-[#F7F6F3] border-t border-neutral-800">
      <div className="container-editorial">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-8 mb-16 gap-6">
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs text-orange-500 uppercase tracking-widest block font-semibold">
              08 / FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-none text-white">
              CLEAR & <span className="text-orange-500">TRANSPARENT.</span>
            </h2>
          </div>

          <p className="font-body text-neutral-400 text-sm sm:text-base max-w-md">
            Everything you need to know about pricing, delivery timelines, engineering stack, and ongoing support.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-neutral-800 max-w-5xl">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-6 md:py-8 transition-colors">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between text-left group gap-4"
                >
                  <div className="flex items-center gap-4 sm:gap-8">
                    <span className="font-mono text-xs text-orange-500 font-bold uppercase">
                      0{idx + 1}
                    </span>
                    <h3 className="font-heading font-bold text-xl sm:text-3xl uppercase tracking-tight text-white group-hover:text-orange-500 transition-colors">
                      {item.question}
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-neutral-900 group-hover:bg-orange-500 text-neutral-300 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pl-8 sm:pl-16 pr-4 font-body text-neutral-300 text-base sm:text-lg leading-relaxed animate-fadeIn">
                    <p>{item.answer}</p>
                    <span className="inline-block mt-3 font-mono text-[11px] text-neutral-500 uppercase tracking-widest border border-neutral-800 px-3 py-1 rounded">
                      Category: {item.category}
                    </span>
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
