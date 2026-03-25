"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { SterlingGateKineticNavigation } from '@/components/ui/sterling-gate-kinetic-navigation';
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { HeroSubheading } from '@/components/ui/hero-subheading';
import { FramerCarousel } from '@/components/ui/framer-carousel';
import { CircularTestimonialsDemo } from '@/components/circular-testimonials-demo';
import ExpandablePrograms from '@/components/ui/expand-cards';
import EventsGalleryDemo from '@/components/events-gallery-demo';
import { StickyFooter } from "@/components/ui/sticky-footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Background Shader */}
      <WebGLShader />

      {/* Navigation */}
      <SterlingGateKineticNavigation />

      {/* Main Content Wrapper */}
      <div className="relative z-10 bg-black shadow-[0_50px_100px_rgba(0,0,0,0.9)]">
        {/* Hero Section */}
        <div className="relative w-full px-4 pt-40 pb-16 flex flex-col items-center">
          <div className="text-center mb-20">
            <h1 className="mb-6 text-white text-center text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
              Experience Our Campus
            </h1>
            <HeroSubheading />
          </div>

          {/* Carousel Section */}
          <section className="w-full max-w-6xl mx-auto relative z-10">
            <FramerCarousel />
          </section>
        </div>

        {/* Testimonials Section */}
        <CircularTestimonialsDemo />

        {/* Our Programs Section */}
        <div className="relative w-full px-4 pt-32 pb-24 flex flex-col items-center">
          <div className="w-full max-w-7xl mx-auto flex flex-col items-center mb-10">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-4 uppercase text-center">
              Our Programs
            </h2>
            <div className="h-px w-20 bg-green-500 mb-6" />
          </div>
          <ExpandablePrograms />
        </div>

        {/* Events Gallery Section */}
        <EventsGalleryDemo />
      </div>

      {/* Sticky Footer Reveal Wrapper */}
      <div 
        className="relative h-[800px] md:h-[720px] w-full"
        style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      >
        <div className="fixed bottom-0 h-[800px] md:h-[720px] w-full z-0">
          <StickyFooter className="h-full" />
        </div>
      </div>
    </main>
  );
}
