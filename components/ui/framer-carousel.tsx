"use client";
import React, { useCallback, useEffect, useRef, useState, useLayoutEffect } from 'react';
import { motion, useMotionValue, animate } from 'motion/react';

const items = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1471&auto=format&fit=crop', // Campus architecture
    title: 'University Campus',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1470&auto=format&fit=crop', // Modern lecture hall
    title: 'Modern Classrooms',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1470&auto=format&fit=crop', // Students in classroom
    title: 'Student Innovation',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1470&auto=format&fit=crop', // Library
    title: 'Research Library',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1470&auto=format&fit=crop', // Academic excellence
    title: 'Academic Excellence',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1470&auto=format&fit=crop', // Library interior
    title: 'University Library',
  },
];

export function FramerCarousel() {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // Measure container width reliably
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Update position when index or width changes
  useEffect(() => {
    if (width > 0) {
      animate(x, -index * width, {
        type: 'spring',
        stiffness: 260,
        damping: 30,
        mass: 1,
      });
    }
  }, [index, width, x]);

  const prev = useCallback(() => setIndex(i => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex(i => Math.min(items.length - 1, i + 1)), []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div
        className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_48px_80px_-20px_rgba(0,0,0,0.9)] group bg-zinc-950"
        ref={containerRef}
      >
        <motion.div 
          className="flex" 
          style={{ x }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="relative shrink-0 w-full overflow-hidden aspect-[21/9] min-h-[400px] md:min-h-[550px]"
              style={{ width: width > 0 ? width : '100%' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover select-none brightness-50 transition-all duration-[1.5s] ease-in-out group-hover:scale-105"
                draggable={false}
                loading="eager"
              />
              {/* Cinematic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
              
              {/* Content Layer */}
              <div className="absolute bottom-12 left-12 text-white pointer-events-none w-[70%]">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                >
                  <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
                    {item.title}
                  </h3>
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation Controls on Sides */}
        <button
          disabled={index === 0}
          onClick={prev}
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-3xl border border-white/5 transition-all z-30 pointer-events-auto
            ${index === 0 ? 'opacity-0 scale-90 translate-x-4' : 'bg-white/5 hover:bg-white hover:text-black hover:scale-110 active:scale-95 text-white opacity-100 translate-x-0 outline-none'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          disabled={index === items.length - 1}
          onClick={next}
          className={`absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-3xl border border-white/10 transition-all z-30 pointer-events-auto
            ${index === items.length - 1 ? 'opacity-0 scale-90 -translate-x-4' : 'bg-white/5 hover:bg-white hover:text-black hover:scale-110 active:scale-95 text-white opacity-100 translate-x-0 outline-none'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress Dots - Moved outside image container to prevent obstruction */}
      <div className="flex justify-center mt-8 gap-3">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
              i === index ? 'w-14 bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)]' : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
