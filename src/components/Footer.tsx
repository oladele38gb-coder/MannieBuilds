import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E0E10] text-[#F7F6F3] border-t border-neutral-900 py-12">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-neutral-900">
          
          {/* Left Brand */}
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-white">
              MANNIE BUILDS
            </h3>
            <p className="font-mono text-xs text-neutral-400 uppercase">
              OLADELE EMMANUEL — DESIGN, BUILD & AUTOMATE
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 font-mono text-xs uppercase text-neutral-400">
            <button onClick={() => onNavigate('hero')} className="hover:text-orange-500 transition-colors">Home</button>
            <button onClick={() => onNavigate('work')} className="hover:text-orange-500 transition-colors">Work</button>
            <button onClick={() => onNavigate('services')} className="hover:text-orange-500 transition-colors">Services</button>
            <button onClick={() => onNavigate('process')} className="hover:text-orange-500 transition-colors">Process</button>
            <button onClick={() => onNavigate('blog')} className="hover:text-orange-500 transition-colors">Blog</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-orange-500 transition-colors">Contact</button>
          </div>

          {/* Right Scroll Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="flex items-center gap-2 font-mono text-xs uppercase px-4 py-2 rounded-full border border-neutral-800 hover:border-orange-500 hover:text-orange-500 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 font-mono text-xs text-neutral-500 uppercase tracking-wider">
          <div>
            © {new Date().getFullYear()} MANNIE BUILDS. ALL RIGHTS RESERVED.
          </div>

          <div>
            LOCATION: LAGOS, NIGERIA • AVAILABLE WORLDWIDE
          </div>
        </div>

      </div>
    </footer>
  );
};
