import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { SERVICES } from '../data/services';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose, onNavigate }) => {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col justify-between p-6 md:p-12 transition-opacity duration-500 overflow-y-auto"
      style={{ backgroundColor: '#0E0E10', color: '#F7F6F3' }}
    >
      {/* Menu Header */}
      <div className="flex items-center justify-between border-b border-neutral-800 pb-6">
        <div className="flex items-center gap-3">
          <span className="font-heading font-black tracking-tighter text-xl uppercase">MANNIE BUILDS</span>
          <span className="inline-block w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:oladele4emmanuel@gmail.com"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase border border-neutral-700 px-4 py-2 rounded-full hover:border-orange-500 hover:text-orange-500 transition-colors"
          >
            Let's Talk <ArrowUpRight className="w-3 h-3" />
          </a>
          <button
            onClick={onClose}
            aria-label="Close menu overlay"
            className="flex items-center gap-2 bg-neutral-800 hover:bg-orange-500 text-white px-5 py-2.5 rounded-full font-heading font-bold text-sm uppercase tracking-wider transition-all duration-300"
          >
            MENU <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Menu Links & Services */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto py-12">
        {/* Left Column: Primary Links */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          {[
            { label: 'Home', id: 'hero' },
            { label: 'Work', id: 'work' },
            { label: 'Services', id: 'services' },
            { label: 'Process', id: 'process' },
            { label: 'Blog', id: 'blog' },
            { label: 'Contact', id: 'contact' }
          ].map((item, idx) => (
            <div key={item.id} className="group border-b border-neutral-850 pb-2">
              <button
                onClick={() => handleLinkClick(item.id)}
                className="w-full text-left font-heading font-black text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase transition-all duration-300 group-hover:pl-4 group-hover:text-orange-500 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="font-mono text-lg text-neutral-600 group-hover:text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  0{idx + 1}
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Right Column: Expanded Services & Quick Info */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 border-t lg:border-t-0 lg:border-l border-neutral-800 pt-8 lg:pt-0 lg:pl-12">
          {/* Services Accordion Preview */}
          <div className="space-y-4">
            <button
              onClick={() => setServicesExpanded(!servicesExpanded)}
              className="w-full flex items-center justify-between text-left font-heading font-bold text-2xl uppercase border-b border-neutral-800 pb-3 text-neutral-300 hover:text-orange-500 transition-colors"
            >
              <span>Our Expertise</span>
              <span className="font-mono text-sm">{servicesExpanded ? '[ – ]' : '[ + ]'}</span>
            </button>

            {servicesExpanded && (
              <div className="space-y-3 pl-2 transition-all duration-300">
                {SERVICES.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => handleLinkClick('services')}
                    className="cursor-pointer group p-3 rounded-lg hover:bg-neutral-900 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-bold text-lg text-neutral-200 group-hover:text-orange-500">
                        {srv.title}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-orange-500 transition-colors" />
                    </div>
                    <p className="text-xs text-neutral-400 mt-1 line-clamp-1">{srv.shortDesc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Location & Time Info */}
          <div className="space-y-6 pt-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest">
                <Globe className="w-3.5 h-3.5 text-orange-500" /> Location & Time
              </div>
              <p className="font-heading font-bold text-lg text-neutral-200">
                Lagos, Nigeria <span className="text-neutral-500 font-mono text-sm ml-2">({currentTime} WAT)</span>
              </p>
              <p className="text-xs text-neutral-400">Available Worldwide for Remote Product Sprints</p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">Direct Contact</span>
              <a href="mailto:oladele4emmanuel@gmail.com" className="font-heading font-bold text-xl text-orange-500 hover:underline cursor-pointer block">
                oladele4emmanuel@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-neutral-800 pt-6 gap-4 font-mono text-xs text-neutral-500 uppercase tracking-wider">
        <div>© {new Date().getFullYear()} MANNIE BUILDS. ALL RIGHTS RESERVED.</div>
        <div className="flex items-center gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition-colors">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition-colors">GitHub</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition-colors">X / Twitter</a>
        </div>
      </div>
    </div>
  );
};

export const Navbar: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-4 bg-[#F7F6F3]/90 backdrop-blur-md border-b border-neutral-300/50' : 'py-6'
        }`}
      >
        <div className="container-editorial flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('hero')}
            className="flex items-center gap-3 group text-left"
          >
            <span className="font-heading font-black tracking-tighter text-xl sm:text-2xl uppercase text-[#0E0E10] group-hover:text-orange-600 transition-colors">
              MANNIE BUILDS
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
          </button>

          {/* Action Navigation Right */}
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              onClick={() => onNavigate('contact')}
              className="hidden sm:inline-flex items-center gap-2 border border-neutral-900/15 hover:border-orange-500 text-neutral-900 hover:text-white hover:bg-orange-500 px-5 py-2.5 rounded-full font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-sm"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 bg-[#0E0E10] hover:bg-orange-600 text-[#F7F6F3] px-5 py-2.5 rounded-full font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md"
            >
              <span>MENU</span>
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Overlay */}
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} onNavigate={onNavigate} />
    </>
  );
};
