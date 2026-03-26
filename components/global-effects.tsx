"use client";

import { useEffect, useState, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, AnimatePresence } from "framer-motion";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { SterlingGateKineticNavigation } from "@/components/ui/sterling-gate-kinetic-navigation";
import { StickyFooter } from "@/components/ui/sticky-footer";
import KineticDotsLoader from "@/components/ui/kinetic-dots-loader";

export function GlobalEffects({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Set to 2.5s as requested

    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="initial-loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] }
            }}
            className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="relative transform scale-125">
              <KineticDotsLoader />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-8 text-white uppercase tracking-[0.4em] font-light text-[0.6rem] animate-pulse"
            >
              Loading SBSP Portal
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Background Shader */}
      <WebGLShader />

      {/* Persistent Navigation */}
      <SterlingGateKineticNavigation />

      {/* Page Content */}
      <motion.div
        initial={false}
        animate={{ opacity: isLoading ? 0.2 : 1 }}
        transition={{ duration: 1.5 }}
      >
        {children}
      </motion.div>

      {/* Persistent Sticky Footer */}
      <div 
        className="relative h-[800px] md:h-[720px] w-full"
        style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      >
        <div className="fixed bottom-0 h-[800px] md:h-[720px] w-full z-0">
          <StickyFooter className="h-full" />
        </div>
      </div>
    </>
  );
}
