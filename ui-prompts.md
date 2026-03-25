Primary monotone color - White
Seconsary colors - Orange Green and purple


Avoid vibe-coded wetisite patterns:
COLORS & VISUAL
-No default purple gradients uniess brand-appropriate
Remove sparkles, emals from hero headings
Eliminate generic glowing hover effects
TYPOGRAPHY
Consistent weight hierarchy (avoid oversized headings ultra-thin body)
-Uniform line-neight and paragraph spacing
-Define type scale, stick to it
LAYOUT & COMPONENTS
-Identical component placement across pages
Consistent border radius values (define 2-3 max)
Subtle hover states (2-4px ft max)
-Proportional icon sizing relative to text
Remove non-functional social icons
ANIMATIONS & INTERACTIONS
Add easing curves (cubic-bezier)
Stagger timing intentionally
-Every animation serves purpose
UX BEHAVIORS
-Loading states for all async actions
Progress indicators on buttons
Functional toggles/carousels/interactions
-Skeleton screens for data-heavy sections
COPYWRITING
Remove ers-dash overuse
-Avoid vague phrases: "Launch faster", "Build your dreams", "Create without limits
-No fake testimonials
-No generic Al faces or "Sarah Chen" placeholder names
CORE PRINCIPLE
to avoid all of these vibe
Create a design system first. Eve Coding giveaways-ation should reference that system. Inconsistency signals vibe-co




    You are given a task to integrate an existing React component in the codebase
>> 
>> The codebase should support:
>> - shadcn project structure  
>> - Tailwind CSS
>> - Typescript
>>
>> If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.
>>
>> Determine the default path for components and styles.
>> If default path for components is not /components/ui, provide instructions on why it's important to
 create this folder
>> Copy-paste this component to /components/ui folder:
>> ```tsx
>> sterling-gate-kinetic-navigation.tsx
>>
>> import React, { useEffect, useRef, useState } from "react";
>> import gsap from "gsap";
>> import { CustomEase } from "gsap/CustomEase";
>>
>> // Register GSAP Plugins safely
>> if (typeof window !== "undefined") {
>>   gsap.registerPlugin(CustomEase);
>> }
>>
>> export function Component() {
>>   // We need a ref for the parent container to scope GSAP
>>   const containerRef = useRef<HTMLDivElement>(null);
>>   const [isMenuOpen, setIsMenuOpen] = useState(false);
>>
>>   // Initial Setup & Hover Effects
>>   useEffect(() => {
>>     if (!containerRef.current) return;
>>
>>     // Create custom easing
>>     try {
>>         if (!gsap.parseEase("main")) {
>>             CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
>>             gsap.defaults({ ease: "main", duration: 0.7 });
>>         }
>>     } catch (e) {
>>         console.warn("CustomEase failed to load, falling back to default.", e);
>>         gsap.defaults({ ease: "power2.out", duration: 0.7 });
>>     }
>>
>>     const ctx = gsap.context(() => {
>>       // 1. Arrow Animation (Removed from indicator, but keeping logic if arrow existed/restored elsewhere)
>>       // Since arrow is removed from JSX, this selector won't find anything, which is fine (safe check).
>>       const arrowLine = document.querySelector(".arrow-line");
>>       if (arrowLine) {
>>         const pathLength = (arrowLine as SVGPathElement).getTotalLength();
>>         gsap.set(arrowLine, { strokeDasharray: pathLength, strokeDashoffset: pathLength });        
>>         const arrowTl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
>>         arrowTl
>>           .to(arrowLine, { strokeDashoffset: 0, duration: 1, ease: "power2.out" })
>>           .to({}, { duration: 1.2 })
>>           .to(arrowLine, { strokeDashoffset: -pathLength, duration: 0.6, ease: "power2.in" })      
>>           .set(arrowLine, { strokeDashoffset: pathLength });
>>       }
>>
>>       // 2. Shape Hover
>>       // Updated Selectors: .menu-list-item -> .menu-list-item, .abstract-shapes -> .ambient-background-shapes
>>       const menuItems = containerRef.current!.querySelectorAll(".menu-list-item[data-shape]");     
>>       const shapesContainer = containerRef.current!.querySelector(".ambient-background-shapes");   
>>
>>       menuItems.forEach((item) => {
>>         const shapeIndex = item.getAttribute("data-shape");
>>         // Updated Selector: .shape -> .bg-shape
>>         const shape = shapesContainer ? shapesContainer.querySelector(`.bg-shape-${shapeIndex}`) : null;
>>
>>         if (!shape) return;
>>
>>         // Updated Selector: .shape-el -> .shape-element
>>         const shapeEls = shape.querySelectorAll(".shape-element");
>>
>>         const onEnter = () => {
>>              if (shapesContainer) {
>>                  // Updated Selector: .shape -> .bg-shape
>>                  shapesContainer.querySelectorAll(".bg-shape").forEach((s) => s.classList.remove("active"));
>>              }
>>              shape.classList.add("active");
>>
>>              gsap.fromTo(shapeEls,
>>                 { scale: 0.5, opacity: 0, rotation: -10 },
>>                 { scale: 1, opacity: 1, rotation: 0, duration: 0.6, stagger: 0.08, ease: "back.out(1.7)", overwrite: "auto" }
>>              );
>>         };
>>
>>         const onLeave = () => {
>>             gsap.to(shapeEls, {
>>                 scale: 0.8, opacity: 0, duration: 0.3, ease: "power2.in",
>>                 onComplete: () => shape.classList.remove("active"),
>>                 overwrite: "auto"
>>             });
>>         };
>>
>>         item.addEventListener("mouseenter", onEnter);
>>         item.addEventListener("mouseleave", onLeave);
>>
>>         (item as any)._cleanup = () => {
>>             item.removeEventListener("mouseenter", onEnter);
>>             item.removeEventListener("mouseleave", onLeave);
>>         };
>>       });
>>
>>     }, containerRef);
>>
>>     return () => {
>>         ctx.revert();
>>         if (containerRef.current) {
>>             const items = containerRef.current.querySelectorAll(".menu-list-item[data-shape]");    
>>             items.forEach((item: any) => item._cleanup && item._cleanup());
>>         }
>>     };
>>   }, []);
>>
>>   // Menu Open/Close Animation Effect
>>   useEffect(() => {
>>       if (!containerRef.current) return;
>>
>>       const ctx = gsap.context(() => {
>>         // Updated Selectors: .nav -> .nav-overlay-wrapper, .menu -> .menu-content
>>         const navWrap = containerRef.current!.querySelector(".nav-overlay-wrapper");
>>         const menu = containerRef.current!.querySelector(".menu-content");
>>         const overlay = containerRef.current!.querySelector(".overlay");
>>         // Updated Selector: .bg-panel -> .backdrop-layer
>>         const bgPanels = containerRef.current!.querySelectorAll(".backdrop-layer");
>>         // Updated Selector: .menu-link -> .nav-link
>>         const menuLinks = containerRef.current!.querySelectorAll(".nav-link");
>>         const fadeTargets = containerRef.current!.querySelectorAll("[data-menu-fade]");
>>
>>         // Updated Selector: .menu-button -> .nav-close-btn
>>         const menuButton = containerRef.current!.querySelector(".nav-close-btn");
>>         const menuButtonTexts = menuButton?.querySelectorAll("p");
>>         // Updated Selector: .menu-button-icon -> .menu-button-icon (unchanged in CSS/JSX?) No, wait, CSS had .menu-button-icon
>>         const menuButtonIcon = menuButton?.querySelector(".menu-button-icon");
>>
>>         const tl = gsap.timeline();
>>
>>         if (isMenuOpen) {
>>             // OPEN
>>             if (navWrap) navWrap.setAttribute("data-nav", "open");
>>
>>             tl.set(navWrap, { display: "block" })
>>               .set(menu, { xPercent: 0 }, "<")
>>               // Animate Button Text Swapping if it exists
>>               .fromTo(menuButtonTexts, { yPercent: 0 }, { yPercent: -100, stagger: 0.2 })
>>               .fromTo(menuButtonIcon, { rotate: 0 }, { rotate: 315 }, "<")
>>
>>               .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
>>               .fromTo(bgPanels, { xPercent: 101 }, { xPercent: 0, stagger: 0.12, duration: 0.575 }, "<")
>>               .fromTo(menuLinks, { yPercent: 140, rotate: 10 }, { yPercent: 0, rotate: 0, stagger: 0.05 }, "<+=0.35");
>>
>>             if (fadeTargets.length) {
>>                 // Keep clearProps: "all" for blog entry fix
>>                 tl.fromTo(fadeTargets, { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, stagger: 0.04, clearProps: "all" }, "<+=0.2");
>>             }
>>
>>         } else {
>>             // CLOSE
>>             if (navWrap) navWrap.setAttribute("data-nav", "closed");
>>
>>             tl.to(overlay, { autoAlpha: 0 })
>>               .to(menu, { xPercent: 120 }, "<")
>>               // Animate Button Text and Icon Back
>>               .to(menuButtonTexts, { yPercent: 0 }, "<")
>>               .to(menuButtonIcon, { rotate: 0 }, "<")
>>
>>               .set(navWrap, { display: "none" });
>>         }
>>
>>       }, containerRef);
>>
>>       return () => ctx.revert();
>>   }, [isMenuOpen]);
>>
>>   // keydown Escape handling
>>   useEffect(() => {
>>     const handleEsc = (e: KeyboardEvent) => {
>>         if (e.key === "Escape" && isMenuOpen) {
>>             setIsMenuOpen(false);
>>         }
>>     };
>>     window.addEventListener("keydown", handleEsc);
>>     return () => window.removeEventListener("keydown", handleEsc);
>>   }, [isMenuOpen]);
>>
>>   const toggleMenu = () => setIsMenuOpen(prev => !prev);
>>   const closeMenu = () => setIsMenuOpen(false);
>>
>>   return (
>>     <div ref={containerRef}>
>>         <div className="site-header-wrapper">
>>           <header className="header">
>>             <div className="container is--full">
>>               <nav className="nav-row">
>>                 <a href="#" aria-label="home" className="nav-logo-row w-inline-block"></a>
>>                 <div className="nav-row__right">
>>                   {/* Clean Menu Indicator (Arrow Removed) */}
>>                   <div className="nav-toggle-label" onClick={toggleMenu} style={{ cursor: 'pointer', pointerEvents: 'auto' }}>
>>                     <span className="toggle-text">click me</span>
>>                   </div>
>>
>>                   {/* Restored Menu Button */}
>>                   <button role="button" className="nav-close-btn" onClick={toggleMenu} style={{ pointerEvents: 'auto' }}>
>>                     <div className="menu-button-text">
>>                       <p className="p-large">Menu</p>
>>                       <p className="p-large">Close</p>
>>                     </div>
>>                     <div className="icon-wrap">
>>                       <svg
>>                         xmlns="http://www.w3.org/2000/svg"
>>                         width="100%"
>>                         viewBox="0 0 16 16"
>>                         fill="none"
>>                         className="menu-button-icon"
>>                       >
>>                         <path
>>                           d="M7.33333 16L7.33333 -3.2055e-07L8.66667 -3.78832e-07L8.66667 16L7.33333 16Z"
>>                           fill="currentColor"
>>                         ></path>
>>                         <path
>>                           d="M16 8.66667L-2.62269e-07 8.66667L-3.78832e-07 7.33333L16 7.33333L16 8.66667Z"
>>                           fill="currentColor"
>>                         ></path>
>>                         <path
>>                           d="M6 7.33333L7.33333 7.33333L7.33333 6C7.33333 6.73637 6.73638 7.33333 6 7.33333Z"
>>                           fill="currentColor"
>>                         ></path>
>>                         <path
>>                           d="M10 7.33333L8.66667 7.33333L8.66667 6C8.66667 6.73638 9.26362 7.33333 10 7.33333Z"
>>                           fill="currentColor"
>>                         ></path>
>>                         <path
>>                           d="M6 8.66667L7.33333 8.66667L7.33333 10C7.33333 9.26362 6.73638 8.66667 6 8.66667Z"
>>                           fill="currentColor"
>>                         ></path>
>>                         <path
>>                           d="M10 8.66667L8.66667 8.66667L8.66667 10C8.66667 9.26362 9.26362 8.66667 10 8.66667Z"
>>                           fill="currentColor"
>>                         ></path>
>>                       </svg>
>>                     </div>
>>                   </button>
>>                 </div>
>>               </nav>
>>             </div>
>>           </header>
>>         </div>
>>
>>       <section className="fullscreen-menu-container">
>>         <div data-nav="closed" className="nav-overlay-wrapper">
>>           {/* Overlay must stay above or below depending on desired clickability.
>>               The original has it cover content. */}
>>           <div className="overlay" onClick={closeMenu}></div>
>>           <nav className="menu-content">
>>             <div className="menu-bg">
>>               <div className="backdrop-layer first"></div>
>>               <div className="backdrop-layer second"></div>
>>               <div className="backdrop-layer"></div>
>>
>>               {/* Abstract shapes container */}
>>               <div className="ambient-background-shapes">
>>                 {/* Shape 1: Floating circles */}
>>                 <svg className="bg-shape bg-shape-1" viewBox="0 0 400 400" fill="none">
>>                   <circle className="shape-element" cx="80" cy="120" r="40" fill="rgba(99,102,241,0.15)" />
>>                   <circle className="shape-element" cx="300" cy="80" r="60" fill="rgba(139,92,246,0.12)" />
>>                   <circle className="shape-element" cx="200" cy="300" r="80" fill="rgba(236,72,153,0.1)" />
>>                   <circle className="shape-element" cx="350" cy="280" r="30" fill="rgba(99,102,241,0.15)" />
>>                 </svg>
>>
>>                 {/* Shape 2: Wave pattern */}
>>                 <svg className="bg-shape bg-shape-2" viewBox="0 0 400 400" fill="none">
>>                   <path
>>                     className="shape-element"
>>                     d="M0 200 Q100 100, 200 200 T 400 200"
>>                     stroke="rgba(99,102,241,0.2)"
>>                     strokeWidth="60"
>>                     fill="none"
>>                   />
>>                   <path
>>                     className="shape-element"
>>                     d="M0 280 Q100 180, 200 280 T 400 280"
>>                     stroke="rgba(139,92,246,0.15)"
>>                     strokeWidth="40"
>>                     fill="none"
>>                   />
>>                 </svg>
>>
>>                 {/* Shape 3: Grid dots */}
>>                 <svg className="bg-shape bg-shape-3" viewBox="0 0 400 400" fill="none">
>>                   <circle className="shape-element" cx="50" cy="50" r="8" fill="rgba(99,102,241,0.3)" />
>>                   <circle className="shape-element" cx="150" cy="50" r="8" fill="rgba(139,92,246,0.3)" />
>>                   <circle className="shape-element" cx="250" cy="50" r="8" fill="rgba(236,72,153,0.3)" />
>>                   <circle className="shape-element" cx="350" cy="50" r="8" fill="rgba(99,102,241,0.3)" />
>>                   <circle className="shape-element" cx="100" cy="150" r="12" fill="rgba(139,92,246,0.25)" />
>>                   <circle className="shape-element" cx="200" cy="150" r="12" fill="rgba(236,72,153,0.25)" />
>>                   <circle className="shape-element" cx="300" cy="150" r="12" fill="rgba(99,102,241,0.25)" />
>>                   <circle className="shape-element" cx="50" cy="250" r="10" fill="rgba(236,72,153,0.3)" />
>>                   <circle className="shape-element" cx="150" cy="250" r="10" fill="rgba(99,102,241,0.3)" />
>>                   <circle className="shape-element" cx="250" cy="250" r="10" fill="rgba(139,92,246,0.3)" />
>>                   <circle className="shape-element" cx="350" cy="250" r="10" fill="rgba(236,72,153,0.3)" />
>>                   <circle className="shape-element" cx="100" cy="350" r="6" fill="rgba(99,102,241,0.3)" />
>>                   <circle className="shape-element" cx="200" cy="350" r="6" fill="rgba(139,92,246,0.3)" />
>>                   <circle className="shape-element" cx="300" cy="350" r="6" fill="rgba(236,72,153,0.3)" />
>>                 </svg>
>>
>>                 {/* Shape 4: Organic blobs */}
>>                 <svg className="bg-shape bg-shape-4" viewBox="0 0 400 400" fill="none">
>>                   <path
>>                     className="shape-element"
>>                     d="M100 100 Q150 50, 200 100 Q250 150, 200 200 Q150 250, 100 200 Q50 150, 100 100"
>>                     fill="rgba(99,102,241,0.12)"
>>                   />
>>                   <path
>>                     className="shape-element"
>>                     d="M250 200 Q300 150, 350 200 Q400 250, 350 300 Q400 250, 350 300 Q300 350, 250 300 Q200 250, 250 200"
>>                     fill="rgba(236,72,153,0.1)"
>>                   />
>>                 </svg>
>>
>>                 {/* Shape 5: Diagonal lines */}
>>                 <svg className="bg-shape bg-shape-5" viewBox="0 0 400 400" fill="none">
>>                   <line className="shape-element" x1="0" y1="100" x2="300" y2="400" stroke="rgba(99,102,241,0.15)" strokeWidth="30" />
>>                   <line className="shape-element" x1="100" y1="0" x2="400" y2="300" stroke="rgba(139,92,246,0.12)" strokeWidth="25" />
>>                   <line className="shape-element" x1="200" y1="0" x2="400" y2="200" stroke="rgba(236,72,153,0.1)" strokeWidth="20" />
>>                 </svg>
>>               </div>
>>             </div>
>>
>>             <div className="menu-content-wrapper">
>>               <ul className="menu-list">
>>                 <li className="menu-list-item" data-shape="1">
>>                   <a href="#" className="nav-link w-inline-block">
>>                     <p className="nav-link-text">About us</p>
>>                     <div className="nav-link-hover-bg"></div>
>>                   </a>
>>                 </li>
>>                 <li className="menu-list-item" data-shape="2">
>>                   <a href="#" className="nav-link w-inline-block">
>>                     <p className="nav-link-text">Our work</p>
>>                     <div className="nav-link-hover-bg"></div>
>>                   </a>
>>                 </li>
>>                 <li className="menu-list-item" data-shape="3">
>>                   <a href="#" className="nav-link w-inline-block">
>>                     <p className="nav-link-text">Services</p>
>>                     <div className="nav-link-hover-bg"></div>
>>                   </a>
>>                 </li>
>>                 <li className="menu-list-item" data-shape="4">
>>                   <a href="#" className="nav-link w-inline-block">
>>                     <p className="nav-link-text" data-menu-fade>Blog</p>
>>                     <div className="nav-link-hover-bg"></div>
>>                   </a>
>>                 </li>
>>                 <li className="menu-list-item" data-shape="5">
>>                   <a href="#" className="nav-link w-inline-block">
>>                     <p className="nav-link-text">Contact us</p>
>>                     <div className="nav-link-hover-bg"></div>
>>                   </a>
>>                 </li>
>>               </ul>
>>             </div>
>>           </nav>
>>         </div>
>>       </section>
>>     </div>
>>   );
>> }
>>
>>
>> demo.tsx
>> import { Component } from "@/components/ui/sterling-gate-kinetic-navigation";
>>
>> export default function DemoOne() {
>>   return <Component />;
>> }
>>
>> ```
>>
>> Install NPM dependencies:
>> ```bash
>> gsap
>> ```
>>
>> Extend existing Tailwind 4 index.css with this code (or if project uses Tailwind 3, extend tailwind.config.js or globals.css):
>> ```css
>> @import "tailwindcss";
>> @import "tw-animate-css";
>>
>> :root {
>>   --color-primary: #6366f1;
>>   --color-dark: #131313;
>>   --color-neutral-100: #f5f5f5;
>>   --color-neutral-200: #e5e5e5;
>>   --color-neutral-300: #d4d4d4;
>>   --color-neutral-800: #262626;
>>   --size-container: 1400px;
>>   --container-padding: 2em;
>>   --section-padding: 4em;
>>   --gap: 1.5em;
>>   --cubic-default: cubic-bezier(0.65, 0.05, 0, 1);
>> }
>>
>> ```
>>
>> Implementation Guidelines
>>  1. Analyze the component structure and identify all required dependencies
>>  2. Review the component's argumens and state
>>  3. Identify any required context providers or hooks and install them
>>  4. Questions to Ask
>>  - What data/props will be passed to this component?
>>  - Are there any specific state management requirements?
>>  - Are there any required assets (images, icons, etc.)?
>>  - What is the expected responsive behavior?
>>  - What is the best place to use this component in the app?
>>
>> Steps to integrate
>>  0. Copy paste all the code above in the correct directories
>>  1. Install external dependencies
>>  2. Fill image assets with Unsplash stock images you know exist
>>  3. Use lucide-react icons for svgs or logos if component requires them
>>
>>





You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS  
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
framer-carousel.tsx
'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'motion/react';

export const items = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=880&auto=format&fit=crop',
    title: 'Misty Mountain Majesty',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1539552678512-4005a33c64db?q=80&w=880&auto=format&fit=crop',
    title: 'Winter Wonderland',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1709983966747-58c311fa6976?q=80&w=880&auto=format&fit=crop',
    title: 'Autumn Mountain Retreat',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1683722319473-f851deb3fdf2?q=80&w=880&auto=format&fit=crop',
    title: 'Tranquil Lake Reflection',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1560790671-b76ca4de55ef?q=80&w=734&auto=format&fit=crop',
    title: 'Misty Mountain Peaks',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1698774303292-7af9410c3a57?q=80&w=436&auto=format&fit=cropv',
    title: 'Golden Hour Glow',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1643994542584-1247b5266429?q=80&w=869&auto=format&fit=crop',
    title: 'Snowy Mountain Highway',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1613681230409-6423a38c43e1?q=80&w=871&auto=format&fit=crop',
    title: 'Foggy Mountain Forest',
  },
];

export function FramerCarousel() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x]);

  return (
    <div className='lg:p-10 sm:p-4 p-2 max-w-4xl mx-auto'>
      <div className='flex flex-col gap-3'>
        <div className='relative overflow-hidden rounded-lg' ref={containerRef}>
          <motion.div className='flex' style={{ x }}>
            {items.map((item) => (
              <div key={item.id} className='shrink-0 w-full h-[500px]'>
                <img
                  src={item.url}
                  alt={item.title}
                  className='w-full h-full object-cover rounded-lg select-none pointer-events-none'
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === 0
                  ? 'opacity-40 cursor-not-allowed'
                  : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </motion.button>

          {/* Next Button */}
          <motion.button
            disabled={index === items.length - 1}
            onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === items.length - 1
                  ? 'opacity-40 cursor-not-allowed'
                  : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round' 
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </motion.button>
          {/* Progress Indicator */}
          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-white/20 rounded-xl border border-white/30'>
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


demo.tsx
import { FramerCarousel } from "@/components/ui/framer-carousel";

export default function DemoOne() {
  return <FramerCarousel />;
}

```

Install NPM dependencies:
```bash
motion
```

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them
