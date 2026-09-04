import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TransitionSection } from './components/TransitionSection';
import { Marquee } from './components/Marquee';
import { FeaturedWork } from './components/FeaturedWork';
import { Services } from './components/Services';
import { WhyWorkWithMannie } from './components/WhyWorkWithMannie';
import { Process } from './components/Process';
import { TechStack } from './components/TechStack';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { BlogPreview } from './components/BlogPreview';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll for smooth 60fps editorial scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F6F3] text-[#0E0E10] selection:bg-orange-500 selection:text-white antialiased">
      <Navbar onNavigate={handleNavigate} />
      
      <main>
        <Hero onNavigate={handleNavigate} />
        <TransitionSection onNavigate={handleNavigate} />
        <Marquee />
        <FeaturedWork />
        <Services onNavigate={handleNavigate} />
        <WhyWorkWithMannie />
        <Process />
        <TechStack />
        <Testimonials />
        <FAQSection />
        <BlogPreview />
        <ContactSection />
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
