"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import Agentation with SSR disabled so it does not interfere with Next.js SSR/hydration
const Agentation = dynamic(
  () => import("agentation").then((mod) => mod.Agentation),
  { ssr: false }
);

interface AgentationProviderProps {
  children: React.ReactNode;
}

export function AgentationProvider({ children }: AgentationProviderProps) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <>
      {children}
      {isDev && <Agentation />}
    </>
  );
}
