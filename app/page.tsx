"use client";


import { HeroSubheading } from '@/components/ui/hero-subheading';
import { FramerCarousel } from '@/components/ui/framer-carousel';
import { CircularTestimonialsDemo } from '@/components/circular-testimonials-demo';
import ExpandablePrograms from '@/components/ui/expand-cards';
import EventsGalleryDemo from '@/components/events-gallery-demo';

import { RiseUp } from "@/components/ui/rise-up";

import { MagneticText } from "@/components/ui/morphing-cursor";

export default function Home() {
  return (
    <main className="relative min-h-screen">

      {/* Main Content Wrapper */}
      <div className="relative z-10 bg-black/80 shadow-[0_50px_100px_rgba(0,0,0,0.9)]">
        {/* Hero Section */}
        <div className="relative w-full px-4 pt-40 pb-16 flex flex-col items-center overflow-hidden">
          <div className="text-center mb-20 flex flex-col items-center">
            <RiseUp delay={0.2} className="mb-6">
              <MagneticText 
                text="EXPERIENCE OUR" 
                hoverText="DISCOVER MORE" 
                className="block"
              />
              <div className="mt-2">
                <MagneticText 
                  text="CAMPUS" 
                  hoverText="JOIN US" 
                  className="block"
                />
              </div>
            </RiseUp>
            <HeroSubheading />
          </div>

          {/* Carousel Section */}
          <RiseUp delay={0.6} className="w-full max-w-6xl mx-auto relative z-10">
            <FramerCarousel />
          </RiseUp>
        </div>

        {/* Testimonials Section */}
        <RiseUp amount={0.1}>
          <CircularTestimonialsDemo />
        </RiseUp>

        {/* Our Programs Section */}
        <div className="relative w-full px-4 pt-32 pb-24 flex flex-col items-center">
          <RiseUp className="w-full max-w-7xl mx-auto flex flex-col items-center mb-10">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-4 uppercase text-center">
              Our Programs
            </h2>
            <div className="h-px w-20 bg-green-500 mb-6" />
          </RiseUp>
          
          <RiseUp delay={0.2} className="w-full">
            <ExpandablePrograms />
          </RiseUp>
        </div>

        {/* Events Gallery Section */}
        <RiseUp amount={0.1}>
          <EventsGalleryDemo />
        </RiseUp>
      </div>
    </main>
  );
}
