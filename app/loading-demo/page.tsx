import KineticDotsLoader from "@/components/ui/kinetic-dots-loader";

export default function LoadingDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h1 className="text-white text-xl font-light tracking-widest uppercase mb-12">
        Loading System
      </h1>
      <KineticDotsLoader />
      <p className="text-white/40 text-sm mt-8 animate-pulse">
        Initializing campus resources...
      </p>
    </div>
  );
}
