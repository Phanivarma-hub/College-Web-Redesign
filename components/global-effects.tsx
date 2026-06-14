"use client";

import { useEffect, useState, useRef, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { SterlingGateKineticNavigation } from "@/components/ui/sterling-gate-kinetic-navigation";
import { StickyFooter } from "@/components/ui/sticky-footer";
import { gsap } from "gsap";

export function GlobalEffects({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isBypassed, setIsBypassed] = useState(false);

  const preloaderRef = useRef<HTMLDivElement>(null);
  const preloaderContentRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if loader has already run in this session
    const isDone = sessionStorage.getItem("sbsp-loader-done") === "true";
    if (isDone) {
      setIsLoading(false);
      setIsBypassed(true);
      if (typeof window !== "undefined") {
        (window as any).__loaderFinished = true;
        window.dispatchEvent(new Event("loaderFinished"));
      }
      return;
    }



    // Prevent scrolling during load
    document.body.style.overflow = "hidden";

    // Initialize Lenis scroll and pause it
    const lenis = new Lenis();
    lenis.stop();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Setup GSAP Timeline
    const counter = { val: 0 };
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tl = gsap.timeline({
      onComplete: () => {
        // Restore scroll and Lenis
        document.body.style.overflow = "";
        lenis.start();

        // Mark loader as completed
        sessionStorage.setItem("sbsp-loader-done", "true");
        if (typeof window !== "undefined") {
          (window as any).__loaderFinished = true;
          window.dispatchEvent(new Event("loaderFinished"));
        }
        setIsLoading(false);
      }
    });

    if (prefersReducedMotion) {
      // Instant transition for users with reduced motion preferences
      tl.to(counter, { val: 100, duration: 0.1 });
      if (preloaderContentRef.current) {
        tl.to(preloaderContentRef.current, { opacity: 0, duration: 0.1 });
      }
      if (preloaderRef.current) {
        tl.set(preloaderRef.current, { display: "none" });
      }
      if (revealRef.current) {
        const blinds = revealRef.current.querySelectorAll(".blind");
        tl.to(blinds, { scaleX: 0, duration: 0.1 });
      }
      if (contentRef.current) {
        tl.to(contentRef.current, { opacity: 1, y: 0, duration: 0.1 });
      }
    } else {
      // 1. Counter 0-100 & Progress Bar fill
      tl.to(counter, {
        val: 100,
        duration: 2.5,
        ease: "power2.inOut",
        onUpdate: () => {
          if (percentageRef.current) {
            percentageRef.current.textContent = Math.round(counter.val) + "%";
          }
          if (progressBarRef.current) {
            progressBarRef.current.style.width = counter.val + "%";
          }
        }
      });

      // 2. Brief pause at 100% (0.2s)
      tl.to({}, {}, "+=0.2");

      // 3. Fade out preloader content (text, progress bar)
      if (preloaderContentRef.current) {
        tl.to(preloaderContentRef.current, {
          opacity: 0,
          duration: 0.25,
          ease: "power2.out"
        });
      }

      // Hide the solid preloader container background instantly
      if (preloaderRef.current) {
        tl.set(preloaderRef.current, { display: "none" });
      }

      // 4. Blind reveal animation (collapse into center line)
      if (revealRef.current) {
        const blinds = revealRef.current.querySelectorAll(".blind");
        if (blinds.length > 0) {
          tl.to(blinds, {
            scaleX: 0,
            duration: 0.7,
            stagger: {
              amount: 0.5,
              from: "edges"
            },
            ease: "power3.inOut"
          }); // starts immediately after preloader background is hidden
        }
      }

      // 5. Main Content Entrance
      if (contentRef.current) {
        tl.fromTo(contentRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out" // Natural ease-out deceleration
          },
          "-=0.25" // slight overlap with blinds reveal
        );
      }
    }

    // Cleanup on unmount
    return () => {
      tl.kill();
      lenis.destroy();
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* Percentage Preloader */}
      {!isBypassed && isLoading && (
        <div
          ref={preloaderRef}
          className="fixed inset-0 z-[10000] bg-[#0a0a0b] flex flex-col items-center justify-center pointer-events-auto"
        >
          <div
            ref={preloaderContentRef}
            className="flex flex-col items-center max-w-xs md:max-w-md w-full px-8"
          >
            <span className="text-[#a1a1aa] font-sans tracking-[0.4em] text-[0.6rem] md:text-[0.65rem] uppercase mb-4 opacity-60 text-center">
              Smt. B. Seetha Polytechnic
            </span>
            <div
              ref={percentageRef}
              className="text-serif text-[#e3e3e6] font-bold text-7xl md:text-8xl tracking-tight my-2 select-none"
            >
              0%
            </div>
            <div className="w-full h-[2px] bg-[#27272a] rounded-full overflow-hidden mt-4 relative">
              <div
                ref={progressBarRef}
                className="absolute left-0 top-0 bottom-0 w-0 bg-[#22c55e]"
              />
            </div>
          </div>
        </div>
      )}

      {/* Page Reveal Blinds */}
      {!isBypassed && isLoading && (
        <div
          ref={revealRef}
          className="fixed inset-0 z-[9999] grid grid-cols-8 pointer-events-none"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="blind w-full h-full bg-[#0a0a0b]"
              style={{ transformOrigin: "center center", willChange: "transform" }}
            />
          ))}
        </div>
      )}

      {/* Persistent Background Shader */}
      <WebGLShader />

      {/* Persistent Navigation */}
      <SterlingGateKineticNavigation />

      {/* Page Content */}
      <div
        ref={contentRef}
        className="page-content"
        style={
          isBypassed
            ? {}
            : { opacity: 0, transform: "translateY(40px)" }
        }
      >
        {children}
      </div>

      {/* Persistent Sticky Footer */}
      <div
        className="relative h-[800px] md:h-[720px] w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0 h-[800px] md:h-[720px] w-full z-0">
          <StickyFooter className="h-full" />
        </div>
      </div>
    </>
  );
}
