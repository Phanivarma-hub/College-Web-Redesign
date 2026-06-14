import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { GlobalEffects } from "@/components/global-effects";
import { AgentationProvider } from "@/components/agentation-provider";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Smt. B. Seetha Polytechnic (SBSP)",
  description: "Smt. B. Seetha Polytechnic (SBSP) - Practical, empowering, and trustworthy education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased bg-[#0a0a0b] text-[#e3e3e6]">
        <AgentationProvider>
          <GlobalEffects>
            {children}
          </GlobalEffects>
        </AgentationProvider>
      </body>
    </html>
  );
}
