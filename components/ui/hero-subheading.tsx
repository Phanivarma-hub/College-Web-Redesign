"use client"

import { Typewriter } from "@/components/ui/typewriter"

export function HeroSubheading() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center text-lg md:text-xl text-white/60 max-w-2xl whitespace-pre font-medium">
        <span>A vibrant campus with </span>
        <span className="text-white font-bold ml-1">
          <Typewriter 
            words={[
              "Modern Facilities",
              "Practical Learning",
              "Endless Opportunities",
            ]} 
            speed={80} 
            delayBetweenWords={2000} 
            cursor={true} 
            cursorChar="|" 
          />
        </span>
      </div>
    </div>
  )
}
