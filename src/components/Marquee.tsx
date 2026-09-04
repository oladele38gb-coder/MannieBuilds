import React from 'react';
import { Sparkles } from 'lucide-react';

export const Marquee: React.FC = () => {
  const items = [
    'WEB DEVELOPMENT',
    'UI/UX DESIGN',
    'AUTOMATION',
    'FINTECH',
    'SAAS',
    'HEALTHCARE',
    'AI PRODUCTS',
    'E-COMMERCE'
  ];

  return (
    <div className="py-8 bg-orange-600 text-white overflow-hidden select-none border-y border-orange-500 shadow-inner">
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee flex items-center space-x-12 whitespace-nowrap">
          {items.concat(items).concat(items).map((item, idx) => (
            <div key={idx} className="flex items-center space-x-12 font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tighter">
              <span>{item}</span>
              <Sparkles className="w-6 h-6 text-white/70 fill-white" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
