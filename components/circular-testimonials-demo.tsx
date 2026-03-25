"use client";
import React from "react";
import { CircularTestimonials } from '@/components/ui/circular-testimonials';

const testimonials = [
  {
    quote:
      "Padma Bhushan Dr. B. V. Raju, Founder Chairman of SVES, rose from a humble background to become a visionary leader. He believed education is the key to personal growth and societal progress.",
    name: "Dr. B. V. Raju",
    designation: "Founder, Sri Vishnu Educational Society",
    src: "https://seethapoly.edu.in/wp-content/uploads/2020/01/founder-1.png",
  },
  {
    quote:
      "Sri K. V. Vishnu Raju, Chairman of SVES, brings global experience in engineering and industry leadership. His work spans research, cement industry management, and organizational growth.",
    name: "Sri K. V. Vishnu Raju",
    designation: "Chairman, SVES",
    src: "https://seethapoly.edu.in/wp-content/uploads/2020/03/chairman.jpg",
  },
  {
    quote:
      "Sri Ravichandran Rajagopal, Vice Chairman, combines engineering expertise with management excellence. His experience includes innovation, product development, and strategic leadership.",
    name: "Sri Ravichandran Rajagopal",
    designation: "Vice Chairman, SVES",
    src: "https://seethapoly.edu.in/wp-content/uploads/2025/08/Screenshot_2025-08-02-11-43-46-85_99c04817c0de5652397fc8b56c3b3817-199x300.jpg",
  },
  {
    quote:
      "Aditya Vissam, Secretary of SVES, brings international exposure from the US and UK. He focuses on future-ready education, innovation, and modern learning systems across institutions.",
    name: "Aditya Vissam",
    designation: "Secretary, SVES",
    src: "https://seethapoly.edu.in/wp-content/uploads/2021/01/SECRETARY-IMAGE.jpg",
  },
  {
    quote:
      "Kalidindi Sai Sumant, Joint Secretary, has expertise in materials science and business management. His background in R&D and innovation supports academic and institutional advancement.",
    name: "Kalidindi Sai Sumant",
    designation: "Joint Secretary, SVES",
    src: "https://seethapoly.edu.in/wp-content/uploads/2024/04/IMG-20240413-WA0004-200x300.jpg",
  },
];

export const CircularTestimonialsDemo = () => (
  <section className="relative z-10 w-full px-4 pt-16 pb-32 flex flex-col items-center">
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center relative overflow-hidden">
      <div className="w-full text-center mb-16 max-w-4xl relative z-10 flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase">Leadership & Vision</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
          Hear from the visionaries who built our foundation and continue to guide our educational journey into the future.
        </p>
      </div>
      <div
        className="items-center justify-center relative flex w-full"
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#ffffff",
            designation: "#a3a3a3",
            testimony: "#e5e5e5",
            arrowBackground: "rgba(255, 255, 255, 0.05)",
            arrowForeground: "#ffffff",
            arrowHoverBackground: "#9333ea",
          }}
          fontSizes={{
            name: "28px",
            designation: "14px",
            quote: "20px",
          }}
        />
      </div>
    </div>
  </section>
);

export default CircularTestimonialsDemo;
