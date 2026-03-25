import { SterlingGateKineticNavigation } from '@/components/ui/sterling-gate-kinetic-navigation';
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { HeroSubheading } from '@/components/ui/hero-subheading';
import { FramerCarousel } from '@/components/ui/framer-carousel';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Shader */}
      <WebGLShader />

      {/* Navigation */}
      <SterlingGateKineticNavigation />

      {/* Hero Section */}
      <div className="relative z-10 w-full px-4 pt-40 pb-16 flex flex-col items-center">
        <div className="text-center mb-20">
          <h1 className="mb-6 text-white text-center text-6xl md:text-8xl font-black tracking-tighter leading-none">
            Experience Our Campus
          </h1>
          <HeroSubheading />
        </div>

        {/* Carousel Section */}
        <section className="w-full max-w-6xl mx-auto relative z-10">
          <FramerCarousel />
        </section>
      </div>
    </main>
  );
}
