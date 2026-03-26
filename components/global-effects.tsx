"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { SterlingGateKineticNavigation } from "@/components/ui/sterling-gate-kinetic-navigation";
import { StickyFooter } from "@/components/ui/sticky-footer";

export function GlobalEffects({ children }: { children: ReactNode }) {
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
    <>
      {/* Persistent Background Shader */}
      <WebGLShader />

      {/* Persistent Navigation */}
      <SterlingGateKineticNavigation />

      {/* Page Content */}
      {children}

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
