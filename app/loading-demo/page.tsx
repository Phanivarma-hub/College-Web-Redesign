"use client";

export default function LoadingDemo() {
  const handleReset = () => {
    sessionStorage.removeItem("sbsp-loader-done");
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0b] text-[#e3e3e6] px-4 text-center">
      <h1 className="text-serif font-bold text-3xl md:text-4xl mb-6">
        SBSP Preloader Demonstration
      </h1>
      <p className="text-sans text-[#a1a1aa] max-w-[500px] mb-8 leading-relaxed">
        The GSAP percentage preloader runs once per session to ensure a clean, high-performance user experience. Use the button below to clear the session flag and replay the preloader animation.
      </p>
      <button 
        onClick={handleReset}
        className="px-6 py-3 bg-[#22c55e] text-[#0a0a0b] rounded-[6px] font-sans font-medium hover:bg-[#22c55e]/90 transition-colors"
      >
        Clear Session & Replay Animation
      </button>
    </div>
  );
}
