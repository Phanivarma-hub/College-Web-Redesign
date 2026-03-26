"use client"

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface LeaderData {
    id: number;
    name: string;
    role: string;
    img: string;
    bio: string;
    color: string;
}

interface CardProps {
    leader: LeaderData;
    index: number;
    totalCards: number;
}

const Card: React.FC<CardProps> = ({ leader, index, totalCards }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const card = cardRef.current;
        const container = containerRef.current;
        if (!card || !container) return;

        const targetScale = 1 - (totalCards - index) * 0.05;

        gsap.set(card, {
            scale: 1,
            transformOrigin: "center top"
        });

        ScrollTrigger.create({
            trigger: container,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const scale = gsap.utils.interpolate(1, targetScale, progress);
                gsap.set(card, {
                    scale: Math.max(scale, targetScale),
                    transformOrigin: "center top"
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [index, totalCards]);

    return (
        <div
            ref={containerRef}
            className="w-full h-screen flex items-center justify-center sticky top-0"
        >
            <div
                ref={cardRef}
                className="relative w-[85%] max-w-4xl h-[550px] rounded-[2.5rem] overflow-hidden group shadow-2xl transition-all duration-500"
                style={{
                  top: `calc(-2vh + ${index * 25}px)`
                }}
            >
                {/* Electric Border Border */}
                <div
                    className="absolute -inset-[2px] rounded-[2.6rem] z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `conic-gradient(from 0deg, transparent 0deg, ${leader.color} 60deg, transparent 180deg, ${leader.color} 240deg, transparent 360deg)`
                    }}
                />

                {/* Main Card Content */}
                <div className="relative w-full h-full bg-neutral-900/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] flex overflow-hidden z-10">
                    {/* Image Side */}
                    <div className="w-[40%] h-full relative overflow-hidden hidden md:block">
                        <img 
                          src={leader.img} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                          alt={leader.name} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-neutral-900" />
                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-900 to-transparent" />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
                        {/* Mobile Image Overlay */}
                        <div className="md:hidden absolute inset-0 opacity-10 pointer-events-none">
                            <img src={leader.img} className="w-full h-full object-cover" alt="" />
                        </div>

                        <div className="relative z-20">
                            <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-6">
                              {leader.role}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-none">
                                {leader.name.split(' ').map((word, i) => (
                                  <span key={i} className={i === 0 ? "text-white" : "text-neutral-500"}>
                                    {word}{' '}
                                  </span>
                                ))}
                            </h2>
                            <p className="text-neutral-400 text-sm md:text-base font-medium leading-relaxed line-clamp-4 mb-8">
                                {leader.bio}
                            </p>
                            
                            <button 
                                onClick={() => setExpanded(true)}
                                className="group/btn flex items-center gap-2 text-white font-black uppercase tracking-widest text-[10px] hover:text-white transition-colors"
                            >
                                Read More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Animated Shine */}
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-full transition-all duration-[1.5s]" />
            </div>

            <AnimatePresence>
                {expanded && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12 overflow-y-auto"
                        onClick={() => setExpanded(false)}
                    >
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="w-full max-w-3xl bg-neutral-900 border border-white/10 rounded-[3rem] p-10 md:p-16 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setExpanded(false)}
                                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-24 h-24 rounded-3xl overflow-hidden shrink-0 border border-white/10">
                                        <img src={leader.img} className="w-full h-full object-cover" alt="" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{leader.role}</span>
                                        <h3 className="text-3xl font-black tracking-tighter text-white">{leader.name}</h3>
                                    </div>
                                </div>
                                <div className="h-px bg-white/5" />
                                <p className="text-neutral-400 text-lg leading-relaxed font-medium">
                                    {leader.bio}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const LeadershipStack: React.FC<{ leaders: LeaderData[] }> = ({ leaders }) => {
    return (
        <div className="relative py-24">
            <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-4 block">Leadership Authority</span>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                    PILARS OF<br/><span className="text-neutral-700">EXCELLENCE</span>
                </h2>
            </div>
            <div className="relative">
                {leaders.map((leader, index) => (
                    <Card
                        key={leader.id}
                        leader={leader}
                        index={index}
                        totalCards={leaders.length}
                    />
                ))}
            </div>
            {/* Added spacer to handle final card stacking over background */}
            <div className="h-[20vh]" />
        </div>
    );
};
