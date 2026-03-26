"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface RiseUpProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: "some" | "all" | number;
}

export function RiseUp({
  children,
  className,
  delay = 0,
  duration = 0.8,
  once = true,
  amount = 0.2,
  ...props
}: RiseUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: once, amount: amount }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
