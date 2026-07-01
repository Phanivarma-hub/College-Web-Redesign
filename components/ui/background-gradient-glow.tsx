import { cn } from "@/lib/utils";
import React from "react";

interface BackgroundGradientGlowProps {
  lightMode?: boolean;
  variant?: "corners" | "diagonal";
  className?: string;
  children?: React.ReactNode;
}

export const BackgroundGradientGlow = ({
  lightMode = false,
  variant = "diagonal",
  className,
  children,
}: BackgroundGradientGlowProps) => {
  // Gradients mapped to college colors (Growth Emerald, Academic Amber, Purple, and soft Yellow)
  const getGradientString = () => {
    if (!lightMode) return "#0a0a0b";

    if (variant === "corners") {
      return `
        radial-gradient(ellipse 85% 65% at 8% 8%, rgba(156, 39, 176, 0.45), transparent 60%),
        radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 249, 145, 0.55), transparent 62%),
        radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 152, 0, 0.40), transparent 62%),
        radial-gradient(ellipse 70% 60% at 92% 92%, rgba(34, 197, 94, 0.45), transparent 62%),
        linear-gradient(180deg, #fbf6ff 0%, #f6fdf8 100%)
      `;
    }

    // "diagonal" variant
    return `
      radial-gradient(ellipse 80% 60% at 5% 40%, rgba(156, 39, 176, 0.48), transparent 67%),
      radial-gradient(ellipse 70% 60% at 45% 45%, rgba(255, 152, 0, 0.41), transparent 67%),
      radial-gradient(ellipse 62% 52% at 83% 76%, rgba(255, 249, 145, 0.48), transparent 63%),
      radial-gradient(ellipse 60% 48% at 75% 20%, rgba(34, 197, 94, 0.38), transparent 66%),
      linear-gradient(45deg, #fbf6ff 0%, #fffcf5 50%, #f5fcf7 100%)
    `;
  };

  return (
    <div className={cn("fixed inset-0 w-full h-full z-0 pointer-events-none", className)}>
      {/* Background container */}
      <div
        className="absolute inset-0 z-0 transition-all duration-500"
        style={{
          background: getGradientString(),
        }}
      />
      {children && (
        <div className="relative z-10 w-full h-full pointer-events-auto">
          {children}
        </div>
      )}
    </div>
  );
};
