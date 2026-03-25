"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const programs = [
  {
    id: 1,
    title: "VEDIC",
    subtitle: "Interactive Training",
    description: "VEDIC is an interactive training designed to encourage, support, and improve participant's research aptitude, providing vital information for advanced research.",
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Lake Class Room",
    subtitle: "Experimental Learning",
    description: "Learn to manage personal finances, deliver effective speeches, and make ethical decisions in a serene, nature-inspired environment.",
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "CISCO",
    subtitle: "Training Program",
    description: "Courses in this broad field will help you think abstractly, approach problems methodically, and master modern networking infrastructures.",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "ECET",
    subtitle: "Entrance Success",
    description: "Specialized training for students preparing for the Common Entrance Test for Higher Education, ensuring a smooth transition to advanced academic pursuits.",
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "SOFT SKILLS",
    subtitle: "People Mastery",
    description: "Develop critical people skills including communication, leadership, problem solving, work ethic, and efficient team collaboration.",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Radio Jockey",
    subtitle: "Vishnu FM",
    description: "Comprehensive training for on-air events, voice modulation, and dealing with global topics in the dynamic world of radio broadcasting.",
    src: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800&auto=format&fit=crop",
  },
];

const ExpandablePrograms = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div 
          className="flex flex-col lg:flex-row items-center justify-center gap-4 min-h-[500px]"
          onMouseLeave={() => setExpandedId(null)}
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              onClick={() => setExpandedId(program.id)}
              onMouseEnter={() => setExpandedId(program.id)}
              className="relative cursor-pointer overflow-hidden rounded-[2rem] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group"
              animate={{
                width: expandedId === program.id ? "100%" : "120px",
                height: expandedId === program.id ? "500px" : "500px",
              }}
              style={{
                flex: expandedId === program.id ? "3" : "0.5",
                minWidth: expandedId === program.id ? "300px" : "120px",
              }}
            >
              {/* Background Image */}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                src={program.src}
                alt={program.title}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedId === program.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.2 }}
                    className="absolute inset-0 p-8 flex flex-col justify-end"
                  >
                    <div className="max-w-xl">
                        <motion.span 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="inline-block text-green-500 font-bold tracking-[0.2em] text-xs mb-2 uppercase"
                        >
                            {program.subtitle}
                        </motion.span>
                        <motion.h3 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-none"
                        >
                            {program.title}
                        </motion.h3>
                        <motion.p 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="text-neutral-300 text-lg leading-relaxed font-medium"
                        >
                            {program.description}
                        </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .flex-col > div {
            width: 100% !important;
            height: auto !important;
            min-height: 120px;
            flex: initial !important;
          }
          .flex-col > .group {
             height: 120px !important;
          }
          .flex-col > .group[style*="flex: 3"] {
             height: 400px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ExpandablePrograms;
