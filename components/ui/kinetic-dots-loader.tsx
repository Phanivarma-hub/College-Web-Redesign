'use client';

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SECONDARY_COLORS = [
  { from: '#ff9800', to: '#e65100', shadow: 'rgba(255, 152, 0, 0.6)' }, // Orange
  { from: '#4caf50', to: '#1b5e20', shadow: 'rgba(76, 175, 80, 0.6)' },  // Green
  { from: '#9c27b0', to: '#4a148c', shadow: 'rgba(156, 39, 176, 0.6)' }, // Purple
];

export default function KineticDotsLoader() {
  const dots = 4;
  const [dotColors, setDotColors] = useState<{ from: string; to: string; shadow: string }[]>([]);

  useEffect(() => {
    const generateColors = () => {
      return [...Array(dots)].map(() => 
        SECONDARY_COLORS[Math.floor(Math.random() * SECONDARY_COLORS.length)]
      );
    };

    // Set initial colors
    setDotColors(generateColors());

    // Update colors every 0.5 seconds
    const interval = setInterval(() => {
      setDotColors(generateColors());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  if (dotColors.length === 0) return null;

  return (
    <div className='flex items-center justify-center min-h-[250px] p-8 bg-transparent'>
      <div className='flex gap-5'>
        {[...Array(dots)].map((_, i) => {
          const color = dotColors[i];
          return (
            <div
              key={i}
              className='relative flex flex-col items-center justify-end h-20 w-6'
            >
              {/* 1. THE BOUNCING DOT */}
              <div
                className='relative w-5 h-5 z-10'
                style={{
                  animation: 'gravity-bounce 1.4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
                  animationDelay: `${i * 0.15}s`,
                  willChange: 'transform'
                }}
              >
                <div 
                  className='w-full h-full rounded-full'
                  style={{
                    background: `linear-gradient(to bottom, ${color.from}, ${color.to})`,
                    boxShadow: `0 0 15px ${color.shadow}`,
                    animation: 'rubber-morph 1.4s linear infinite',
                    animationDelay: `${i * 0.15}s`,
                    willChange: 'transform'
                  }} 
                />
                
                {/* Specular highlight for liquid look */}
                <div className='absolute top-1 left-1 w-1.5 h-1.5 bg-white/60 rounded-full blur-[0.5px]' />
              </div>

              {/* 2. FLOOR RIPPLE (Shockwave on impact) */}
              <div 
                 className='absolute bottom-0 w-10 h-3 border rounded-[100%] opacity-0'
                 style={{
                   borderColor: color.from,
                   boxShadow: `0 0 10px ${color.shadow}`,
                   animation: 'ripple-expand 1.4s linear infinite',
                   animationDelay: `${i * 0.15}s`,
                 }}
              />

              {/* 3. REFLECTIVE SHADOW */}
              <div 
                className='absolute -bottom-1 w-5 h-1.5 rounded-[100%] blur-sm'
                style={{
                  background: color.shadow,
                  animation: 'shadow-breathe 1.4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes gravity-bounce {
          0% { transform: translateY(0); animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1); }
          50% { transform: translateY(-40px); animation-timing-function: cubic-bezier(0.32, 0, 0.67, 0); }
          100% { transform: translateY(0); }
        }

        @keyframes rubber-morph {
          0% { transform: scale(1.4, 0.6); }
          5% { transform: scale(0.9, 1.1); }
          15% { transform: scale(1, 1); }
          50% { transform: scale(1, 1); }
          85% { transform: scale(0.9, 1.1); }
          100% { transform: scale(1.4, 0.6); }
        }

        @keyframes shadow-breathe {
          0% { transform: scale(1.4); opacity: 0.6; }
          50% { transform: scale(0.5); opacity: 0.1; }
          100% { transform: scale(1.4); opacity: 0.6; }
        }

        @keyframes ripple-expand {
          0% { transform: scale(0.5); opacity: 0; border-width: 4px; }
          5% { opacity: 0.8; }
          30% { transform: scale(1.5); opacity: 0; border-width: 0px; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
