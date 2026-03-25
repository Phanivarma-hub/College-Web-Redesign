"use client"

import { LayoutGroup, motion } from "motion/react"
import { TextRotate } from "@/components/ui/text-rotate"

export function HeroSubheading() {
  return (
    <div className="flex items-center justify-center">
      <LayoutGroup>
        <motion.div
          className="flex flex-wrap items-center justify-center text-lg md:text-xl text-white/60 max-w-2xl whitespace-pre font-medium"
          layout
        >
          <motion.span
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            A vibrant campus with{" "}
          </motion.span>
          <TextRotate
            texts={[
              "Modern Facilities",
              "Practical Learning",
              "Endless Opportunities",
            ]}
            mainClassName="text-white px-3 md:px-4 bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden py-1 justify-center rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            staggerFrom="last"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
        </motion.div>
      </LayoutGroup>
    </div>
  )
}
