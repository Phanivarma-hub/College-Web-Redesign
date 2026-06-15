"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import {
  GraduationCap,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Info,
  ShieldCheck,
  Award,
  ChevronDown,
  ChevronUp,
  DollarSign,
  FileText,
  Clock,
  Sparkles,
  ArrowDown
} from "lucide-react";

// Register ScrollTrigger safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ----------------------------------------------------
// DATA DEFINITIONS
// ----------------------------------------------------

const programs = [
  {
    code: "CME",
    name: "Computer Engineering",
    duration: "3 Years",
    intake: 240,
    desc: "Focuses on software development, computer networks, database systems, and modern computing architectures.",
    color: "#22c55e"
  },
  {
    code: "ECE",
    name: "Electronics & Communication Engineering",
    duration: "3 Years",
    intake: 240,
    desc: "Covers modern communication systems, digital signal processing, microprocessors, and embedded hardware design.",
    color: "#ff9800"
  },
  {
    code: "EEE",
    name: "Electrical & Electronics Engineering",
    duration: "3 Years",
    intake: 120,
    desc: "Prepares students in power systems, electrical machines, control circuits, and renewable energy technologies.",
    color: "#7DD6FF"
  }
];

const timelineSteps = [
  {
    step: "Step 1",
    title: "Appear for AP POLYCET",
    desc: "Candidates must qualify in the State-level Common Entrance Test (AP POLYCET) conducted by SBTET AP."
  },
  {
    step: "Step 2",
    title: "Participate in Counselling",
    desc: "Attend online web counseling rounds based on your POLYCET entrance exam rank and merit."
  },
  {
    step: "Step 3",
    title: "Choose College Code SSBV",
    desc: "During option entry, choose Smt. B. Seetha Polytechnic with the official college code: SSBV."
  },
  {
    step: "Step 4",
    title: "Seat Allotment",
    desc: "Seats are allotted based on POLYCET rank, web options, and Government of Andhra Pradesh reservation rules."
  },
  {
    step: "Step 5",
    title: "Report to College",
    desc: "Visit the campus with your seat allotment order and original academic certificates for verification."
  },
  {
    step: "Step 6",
    title: "Admission Confirmation",
    desc: "Complete the fee formalities, submit documents, and secure your official admission confirmation."
  }
];

const scholarships = [
  {
    id: "ap-govt",
    title: "AP State Government Scholarship",
    subtitle: "State-supported fee initiatives",
    benefits: "Tuition fee, maintenance allowance & academic expenses coverage.",
    eligibility: "Candidates whose family annual income is ₹2.50 Lakhs or less are eligible for full tuition fee reimbursement.",
    duration: "Entire course duration (3 Years).",
    details: "Exempted candidates must apply online through the Jnanabhumi portal. All cash transfers are strictly linked to Aadhaar-based verification."
  },
  {
    id: "pragati",
    title: "Pragati Scholarship",
    subtitle: "AICTE Flagship Initiative for Girls",
    benefits: "₹50,000 per annum (lump sum for academic expenses).",
    eligibility: "Meritorious girl students enrolled in AICTE-approved institutions for diploma programs. Max 2 girls per family.",
    duration: "Up to 3 years maximum (diploma courses).",
    details: "Aims to support and encourage girl students to pursue technical education. Selection based on qualifying exam merit."
  },
  {
    id: "saksham",
    title: "Saksham Scholarship",
    subtitle: "AICTE Support for Specially-Abled",
    benefits: "₹50,000 per annum (covers tuition, books, equipment, and stationeries).",
    eligibility: "Specially-abled students with a certified disability level of 40% or more, enrolled in AICTE-approved diploma programs.",
    duration: "Up to 3 years maximum.",
    details: "Designed to encourage specially-abled students to pursue technical careers. Hostel and medical charges are not included in the benefit."
  },
  {
    id: "swanath",
    title: "Swanath Scholarship",
    subtitle: "AICTE Support for Tragic Circumstances",
    benefits: "₹50,000 per annum (lump sum academic grant).",
    eligibility: "Orphaned students, students who lost either/both parents to COVID-19, or children of armed forces/paramilitary personnel martyred in action.",
    duration: "Up to 3 years maximum.",
    details: "Ensures that deserving students facing exceptional personal tragedies are not deprived of a sound technical education."
  },
  {
    id: "yashasvi",
    title: "Yashasvi Scholarship",
    subtitle: "AICTE Support for Core Disciplines",
    benefits: "₹50,000 per annum.",
    eligibility: "Students admitted in the first year of AICTE-approved institutions in core engineering branches (Electrical, Electronics & Communication, etc.).",
    duration: "For every year of study (up to 4 years for degree, 3 years for diploma).",
    details: "Aimed at promoting technical education in core foundational branches of engineering to build strong industrial capability."
  }
];

// ----------------------------------------------------
// HELPERS
// ----------------------------------------------------

const FlowArrow = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;
    
    // Animate the dashed path offset dynamically to show direction of flow
    const animation = gsap.to(pathRef.current, {
      strokeDashoffset: -20,
      repeat: -1,
      duration: 1.2,
      ease: "none"
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="flex items-center justify-center shrink-0 py-2 md:py-0">
      {/* Horizontal Arrow for Desktop */}
      <svg className="hidden md:block w-12 h-6" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          ref={pathRef}
          d="M 2 12 L 42 12" 
          stroke="#22c55e" 
          strokeWidth="2.5" 
          strokeDasharray="6 4" 
        />
        <path 
          d="M 36 6 L 44 12 L 36 18" 
          stroke="#22c55e" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
      {/* Vertical Arrow for Mobile */}
      <svg className="md:hidden w-6 h-12" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          ref={pathRef}
          d="M 12 2 L 12 42" 
          stroke="#22c55e" 
          strokeWidth="2.5" 
          strokeDasharray="6 4" 
        />
        <path 
          d="M 6 36 L 12 44 L 18 36" 
          stroke="#22c55e" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  );
};

// ----------------------------------------------------
// MAIN ROUTE PAGE COMPONENT
// ----------------------------------------------------

export default function AdmissionsPage() {
  const [expandedScholarship, setExpandedScholarship] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Refs for Animations
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleScholarship = (id: string) => {
    setExpandedScholarship(expandedScholarship === id ? null : id);
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Handles user motion preference: bypass all initial hidden states and animations
    if (prefersReducedMotion) {
      if (lineFillRef.current) {
        lineFillRef.current.style.height = "100%";
      }
      
      const steps = stepRefs.current.filter(Boolean);
      steps.forEach((step) => {
        if (!step) return;
        step.style.opacity = "1";
        const dot = step.querySelector(".timeline-dot") as HTMLElement;
        const number = step.querySelector(".timeline-num") as HTMLElement;
        const content = step.querySelector(".timeline-content") as HTMLElement;
        if (dot) {
          dot.style.backgroundColor = "#22c55e";
          dot.style.borderColor = "#22c55e";
          dot.style.transform = "scale(1.15)";
        }
        if (number) {
          number.style.color = "#0a0a0b";
        }
        if (content) {
          content.style.opacity = "1";
          content.style.color = "#e3e3e6";
        }
      });

      // Activate all highlights instantly
      const highlights = gsap.utils.toArray<HTMLElement>(".text-highlight");
      highlights.forEach(h => h.classList.add("active"));
      return;
    }

    let ctx: gsap.Context;
    let splitText: SplitType;

    const startAnimations = () => {
      ctx = gsap.context(() => {
        // Set initial states programmatically to preserve plain HTML/CSS visibility when JS is disabled
        gsap.set(".hero-fade-up", { opacity: 0, y: 30 });
        gsap.set(".overview-section-reveal", { opacity: 0, y: 40 });
        gsap.set(".directory-row-reveal", { opacity: 0, y: 30 });
        gsap.set(".academic-structure-reveal", { opacity: 0, y: 40 });
        gsap.set(".fee-receipt-reveal", { opacity: 0, y: 40 });
        gsap.set(".scholarship-card", { opacity: 0, y: 40 });
        gsap.set(".help-desk-card", { opacity: 0, y: 40 });

        // Hero Title Reveal Animation (using solid color, NO gradient text)
        if (titleRef.current) {
          splitText = new SplitType(titleRef.current, { types: "lines" });
          splitText.lines?.forEach((line) => {
            const lineWrapper = document.createElement("div");
            lineWrapper.className = "overflow-hidden block py-1";
            line.parentNode?.insertBefore(lineWrapper, line);
            lineWrapper.appendChild(line);
            line.classList.add("text-[#e3e3e6]");
          });

          gsap.fromTo(
            splitText.lines,
            { y: "100%" },
            { y: "0%", duration: 1.0, ease: "power3.out", stagger: 0.1 }
          );
        }

        // Hero Upward Animations
        gsap.to(".hero-fade-up", {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          stagger: 0.15
        });

        // Cards and Sections Entrance triggers
        const triggerSections = [
          { selector: ".overview-section-reveal", start: "top 85%" },
          { selector: ".directory-row-reveal", start: "top 90%" },
          { selector: ".academic-structure-reveal", start: "top 85%" },
          { selector: ".fee-receipt-reveal", start: "top 85%" },
          { selector: ".scholarship-card", start: "top 90%" },
          { selector: ".help-desk-card", start: "top 90%" }
        ];

        triggerSections.forEach(({ selector, start }) => {
          gsap.to(selector, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: selector,
              start: start,
              toggleActions: "play none none none"
            }
          });
        });

        // Vertical timeline scroll fill logic
        if (timelineRef.current && lineFillRef.current) {
          const steps = stepRefs.current.filter(Boolean);

          gsap.fromTo(
            lineFillRef.current,
            { height: "0%" },
            {
              height: "100%",
              ease: "none",
              scrollTrigger: {
                trigger: timelineRef.current,
                start: "top 30%",
                end: "bottom 70%",
                scrub: true
              }
            }
          );

          steps.forEach((step, index) => {
            if (!step) return;

            const dot = step.querySelector(".timeline-dot");
            const number = step.querySelector(".timeline-num");
            const content = step.querySelector(".timeline-content");

            ScrollTrigger.create({
              trigger: step,
              start: "top 55%",
              end: "bottom 45%",
              onEnter: () => {
                gsap.to(dot, { backgroundColor: "#22c55e", borderColor: "#22c55e", scale: 1.15, duration: 0.3 });
                gsap.to(number, { color: "#0a0a0b", duration: 0.3 });
                gsap.to(content, { opacity: 1, scale: 1.02, color: "#e3e3e6", duration: 0.3 });
                gsap.to(step, { opacity: 1, duration: 0.3 });
              },
              onEnterBack: () => {
                gsap.to(dot, { backgroundColor: "#22c55e", borderColor: "#22c55e", scale: 1.15, duration: 0.3 });
                gsap.to(number, { color: "#0a0a0b", duration: 0.3 });
                gsap.to(content, { opacity: 1, scale: 1.02, color: "#e3e3e6", duration: 0.3 });
                gsap.to(step, { opacity: 1, duration: 0.3 });
              },
              onLeaveBack: () => {
                gsap.to(dot, { backgroundColor: "#151517", borderColor: "#27272a", scale: 1.0, duration: 0.3 });
                gsap.to(number, { color: "#a1a1aa", duration: 0.3 });
                gsap.to(content, { opacity: 0.5, scale: 1.0, color: "#a1a1aa", duration: 0.3 });
                gsap.to(step, { opacity: 0.4, duration: 0.3 });
              }
            });
          });
        }

        // Text Highlight scroll triggers
        const highlights = gsap.utils.toArray<HTMLElement>(".text-highlight");
        highlights.forEach((highlight) => {
          ScrollTrigger.create({
            trigger: highlight,
            start: "top 85%",
            onEnter: () => {
              highlight.classList.add("active");
            },
            onLeaveBack: () => {
              highlight.classList.remove("active");
            }
          });
        });
      });
    };

    // Listeners and Loader integration
    let handleLoaderFinished: (() => void) | undefined;
    
    if (typeof window !== "undefined") {
      if ((window as any).__loaderFinished) {
        startAnimations();
      } else {
        handleLoaderFinished = () => {
          startAnimations();
        };
        window.addEventListener("loaderFinished", handleLoaderFinished);
      }
    }

    return () => {
      if (handleLoaderFinished) {
        window.removeEventListener("loaderFinished", handleLoaderFinished);
      }
      if (splitText) splitText.revert();
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden font-sans">
      {/* 
         STACKING CONTEXT WRAPPER (Feedback 1)
         Ensures admissions scrolls up cleanly to cover the footer like academics and about pages.
      */}
      <div className="relative z-10 bg-[#0a0a0b] shadow-[0_50px_100px_rgba(0,0,0,0.9)] pb-32">
        {/* Background Neon Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
        
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#22c55e]/5 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute top-[800px] left-0 w-[600px] h-[600px] bg-[#ff9800]/5 rounded-full blur-[160px] pointer-events-none z-0" />
        <div className="absolute bottom-[400px] right-[10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

        {/* Main Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-36">
          
          {/* =========================================
             1. HERO SECTION & TRUST BADGES
             ========================================= */}
          <section ref={heroRef} className="mb-20 text-left relative max-w-4xl">
            {/* Institution Headers */}
            <div className="hero-fade-up flex items-center gap-3 mb-6">
              <div className="p-1.5 bg-white rounded-lg inline-flex">
                <img
                  src="https://seethapolytechnic093.github.in/img/sbs-logo.png"
                  alt="SBSP Logo"
                  className="size-10 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://seethapoly.edu.in/wp-content/uploads/2020/01/footerlogo1-300x300.png";
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#22c55e] uppercase">
                  Smt. B. Seetha Polytechnic
                </span>
                <span className="text-[8px] md:text-[9px] text-[#a1a1aa] tracking-[0.15em] uppercase font-semibold">
                  Under Sri Vishnu Educational Society (SVES)
                </span>
              </div>
            </div>

            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-[1.05] mb-6 font-serif text-white"
            >
              Admissions
            </h1>

            <p className="hero-fade-up text-lg md:text-xl text-neutral-300 leading-relaxed font-light mb-8 max-w-2xl">
              Join a community of active learners and begin your journey towards a <span className="text-highlight">successful technical career in engineering</span>.
            </p>

            {/* Trust Badges */}
            <div className="hero-fade-up flex flex-wrap gap-3 mb-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#151517] border border-[#27272a] text-xs font-medium text-neutral-200">
                <ShieldCheck className="size-4 text-[#22c55e]" />
                AICTE Approved
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#151517] border border-[#27272a] text-xs font-medium text-neutral-200">
                <GraduationCap className="size-4 text-[#22c55e]" />
                Admissions Through AP POLYCET
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#151517] border border-orange-500/20 bg-orange-500/5 text-xs font-medium text-orange-400">
                <Award className="size-4" />
                College Code: SSBV
              </span>
            </div>

            {/* Hero CTAs */}
            <div className="hero-fade-up flex flex-wrap gap-4 items-center">
              <button
                onClick={() => scrollToSection("admission-process")}
                className="px-6 py-3 bg-[#22c55e] text-[#0a0a0b] hover:bg-[#1ebd52] transition-colors rounded-[6px] font-semibold text-sm inline-flex items-center gap-2 group"
              >
                View Admission Process
                <ArrowDown className="size-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("admissions-help-desk")}
                className="px-6 py-3 border border-[#27272a] hover:bg-[#151517] text-[#e3e3e6] transition-all rounded-[6px] font-semibold text-sm inline-flex items-center gap-2"
              >
                Apply Now
              </button>
            </div>
          </section>



          {/* =========================================
             2. ADMISSION OVERVIEW (Feedback 4: Typography layout replaces cards)
             ========================================= */}
          <section className="mb-24">
            <div className="border-b border-[#27272a] pb-6 mb-12">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#22c55e] block mb-2">Policy Overview</span>
              <h3 className="text-3xl font-bold font-serif text-white">Admission Basis</h3>
            </div>

            <div className="overview-section-reveal grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              <div className="md:col-span-4">
                <h4 className="text-2xl font-bold font-serif text-white mb-4 leading-snug">Direct Merit-Based Admissions</h4>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-[32ch]">
                  Smt. B. Seetha Polytechnic follows a transparent admission policy strictly aligned with state policies, reservation guidelines, and entrance exam rankings.
                </p>
              </div>
              <div className="md:col-span-8 space-y-6 md:border-l md:border-[#27272a] md:pl-8">
                <div>
                  <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-2 font-serif">
                    <CheckCircle2 className="size-4.5 text-[#22c55e]" />
                    Eligibility Criteria
                  </h5>
                  <p className="text-sm text-neutral-400 max-w-[65ch] leading-relaxed">
                    Candidates who have appeared for SSC (Class 10) or an equivalent examination are <span className="text-highlight">eligible to apply through AP POLYCET</span>. Admission selection is subject to production of proof of passing the qualifying examination.
                  </p>
                </div>
                <div>
                  <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-2 font-serif">
                    <FileText className="size-4.5 text-purple-400" />
                    Admission Basis
                  </h5>
                  <p className="text-sm text-neutral-400 max-w-[65ch] leading-relaxed">
                    Admissions are made based on the <span className="text-highlight">rankings obtained in the State-level Common Entrance Test (AP POLYCET)</span> and reservation policies formulated by the Government of Andhra Pradesh.
                  </p>
                </div>
                <div>
                  <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-2 font-serif">
                    <BookOpen className="size-4.5 text-orange-400" />
                    Medium of Instruction
                  </h5>
                  <p className="text-sm text-neutral-400 max-w-[65ch] leading-relaxed">
                    The primary medium of academic instruction, lab training, and examinations is strictly conducted in <strong>English</strong> across all three programs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================
             3. PROGRAMS & COURSE STRUCTURE (Feedback 4: Directory list layout replaces cards)
             ========================================= */}
          <section className="mb-24">
            <div className="border-b border-[#27272a] pb-6 mb-12">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#22c55e] block mb-2">Academic Programs</span>
              <h3 className="text-3xl font-bold font-serif text-white">Departments &amp; Intake Structure</h3>
            </div>

            <div className="space-y-1 mb-12">
              {programs.map((program, idx) => (
                <div
                  key={program.code}
                  className="directory-row-reveal flex flex-col md:flex-row md:items-center justify-between p-6 border-b border-[#27272a] group hover:bg-[#151517]/35 transition-all duration-300 rounded-lg"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono text-neutral-500 pt-1">0{idx + 1}</span>
                    <div>
                      <h4 className="text-xl font-bold font-serif text-white group-hover:text-[#22c55e] transition-colors">
                        {program.name} ({program.code})
                      </h4>
                      <p className="text-sm text-neutral-400 mt-1 max-w-[65ch] leading-relaxed">
                        {program.desc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex gap-6 text-xs text-neutral-400 shrink-0">
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-neutral-500 font-bold mb-1">Duration</span>
                      <span className="font-bold text-neutral-200 block">{program.duration}</span>
                    </div>
                    <div className="border-l border-[#27272a] pl-6">
                      <span className="block text-[9px] uppercase tracking-wider text-neutral-500 font-bold mb-1">Total Intake</span>
                      <span className="font-bold text-[#22c55e] block">{program.intake} Students</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Structure Visual Block (Feedback 3: Custom GSAP Animated Connector) */}
            <div className="academic-structure-reveal p-6 md:p-8 rounded-xl bg-[#151517] border border-[#27272a] max-w-3xl mx-auto">
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#a1a1aa] text-center mb-8 flex items-center justify-center gap-2">
                <Sparkles className="size-4 text-[#22c55e]" />
                Academic Pattern Transition Flow
              </h4>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 max-w-2xl mx-auto">
                {/* Year 1 */}
                <div className="w-full md:flex-1 p-5 rounded-lg bg-[#0a0a0b] border border-[#27272a] text-center">
                  <span className="text-[10px] font-bold text-[#22c55e] uppercase tracking-widest block mb-1">Year 1</span>
                  <span className="text-base font-bold text-white font-serif block">Annual Pattern</span>
                  <span className="text-[10px] text-[#a1a1aa] block mt-1">First-year fundamentals</span>
                </div>

                {/* Animated Flow Arrow */}
                <FlowArrow />

                {/* Year 2 */}
                <div className="w-full md:flex-1 p-5 rounded-lg bg-[#0a0a0b] border border-[#27272a] text-center">
                  <span className="text-[10px] font-bold text-[#22c55e] uppercase tracking-widest block mb-1">Year 2</span>
                  <span className="text-base font-bold text-white font-serif block">Semester Pattern</span>
                  <span className="text-[10px] text-[#a1a1aa] block mt-1">Advanced domain skills</span>
                </div>

                {/* Animated Flow Arrow */}
                <FlowArrow />

                {/* Year 3 */}
                <div className="w-full md:flex-1 p-5 rounded-lg bg-[#0a0a0b] border border-[#27272a] text-center">
                  <span className="text-[10px] font-bold text-[#22c55e] uppercase tracking-widest block mb-1">Year 3</span>
                  <span className="text-base font-bold text-white font-serif block">Semester Pattern</span>
                  <span className="text-[10px] text-[#a1a1aa] block mt-1">Electives &amp; projects</span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 text-center mt-6 italic">
                * Note: The first year follows an annual system. The second and third years follow a semester-based curriculum model.
              </p>
            </div>
          </section>

          {/* =========================================
             4. ADMISSION PROCESS (Timeline centerpiece)
             ========================================= */}
          <section id="admission-process" className="mb-24 scroll-mt-24">
            <div className="border-b border-[#27272a] pb-6 mb-16">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#22c55e] block mb-2">Admissions Step Timeline</span>
              <h3 className="text-3xl font-bold font-serif text-white">SBSP Admission Journey</h3>
            </div>

            <div ref={timelineRef} className="relative max-w-3xl mx-auto pl-6 md:pl-10">
              {/* Desktop and Mobile Connecting line background */}
              <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-[#27272a] z-0" />
              
              {/* GSAP Filled line overlay */}
              <div 
                ref={lineFillRef}
                className="absolute left-[19px] top-4 w-[2px] bg-[#22c55e] z-0 origin-top"
                style={{ height: "0%" }}
              />

              {/* Steps list */}
              <div className="flex flex-col gap-12 relative z-10">
                {timelineSteps.map((step, idx) => (
                  <div 
                    key={step.step}
                    ref={(el) => {
                      stepRefs.current[idx] = el;
                    }}
                    className="flex gap-6 items-start transition-all duration-300"
                  >
                    {/* Circular step badge/dot */}
                    <div className="timeline-dot size-10 rounded-full bg-[#151517] border-2 border-[#27272a] flex items-center justify-center shrink-0 z-10 font-bold transition-all duration-300 text-xs text-neutral-300">
                      <span className="timeline-num text-[#a1a1aa]">{idx + 1}</span>
                    </div>

                    {/* Step content */}
                    <div className="timeline-content pt-1 flex-1 transition-all duration-300">
                      <span className="text-[10px] font-bold text-[#22c55e] uppercase tracking-wider block mb-1">
                        {step.step}
                      </span>
                      <h4 className="text-lg font-bold font-serif text-white mb-2 leading-none">
                        {step.title}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed max-w-[60ch]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================
             5. FEES & SCHOLARSHIPS
             ========================================= */}
          <section id="fees-scholarships" className="mb-24 scroll-mt-24">
            <div className="border-b border-[#27272a] pb-6 mb-12">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#22c55e] block mb-2">Tuition &amp; Aid</span>
              <h3 className="text-3xl font-bold font-serif text-white">Fees &amp; Scholarships Structures</h3>
            </div>

            {/* Fee & Aid Column Layout (Feedback 4: Receipt layout replaces fee cards) */}
            <div className="fee-receipt-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
              {/* Fee Receipt Card */}
              <div className="lg:col-span-5 p-6 md:p-8 rounded-xl bg-[#151517] border border-[#27272a] flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#a1a1aa] mb-6 flex items-center gap-1.5">
                    <FileText className="size-4 text-[#22c55e]" />
                    Annual Fee Breakdown
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-neutral-400">Tuition Fee</span>
                      <span className="font-mono text-white">₹24,000.00</span>
                    </div>
                    <div className="flex justify-between items-center text-sm pb-4 border-b border-[#27272a]">
                      <span className="text-neutral-400">Miscellaneous Fee</span>
                      <span className="font-mono text-white">₹1,000.00</span>
                    </div>
                    <div className="flex justify-between items-center text-base pt-2 font-bold font-serif">
                      <span className="text-[#22c55e]">Total Annual Fee</span>
                      <span className="font-mono text-[#22c55e] text-lg">₹25,000.00</span>
                    </div>
                  </div>
                </div>
                <p className="text-[10px] text-neutral-500 leading-relaxed mt-6 font-mono">
                  * Validated for academic year admissions. Subject to SBTET revisions.
                </p>
              </div>

              {/* Fee Reimbursement Box */}
              <div className="lg:col-span-7 p-6 md:p-8 rounded-xl bg-[#1a120b] border border-orange-500/20 flex flex-col justify-between">
                <div>
                  <div className="size-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6">
                    <Info className="size-5" />
                  </div>
                  <h4 className="text-lg font-bold font-serif text-orange-300 mb-3">AP Government Fee Reimbursement</h4>
                  <p className="text-sm text-neutral-300 leading-relaxed max-w-[65ch] font-light">
                    Under Government of Andhra Pradesh norms (G.O. Ms. No. 115, Social Welfare Dept., dated 30-11-2019), students with a total annual family income up to <strong>₹2.5 Lakhs</strong> are <span className="text-highlight">eligible for full fee exemption</span>. The state government directly reimburses the tuition fee to the institution.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-orange-500/10 text-xs text-neutral-400 font-light">
                  Required: Aadhaar linking and timely registration via the Jnanabhumi portal.
                </div>
              </div>
            </div>

            {/* Scholarships Grid (Feedback 2: items-start grid prevents double stretch) */}
            <div className="border-t border-[#27272a] pt-12 mb-10">
              <h4 className="text-lg font-bold font-serif text-white mb-6 text-left">Available Scholarships for Diploma Programs</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                {scholarships.map((scholarship) => {
                  const isExpanded = expandedScholarship === scholarship.id;
                  return (
                    <div
                      key={scholarship.id}
                      onClick={() => toggleScholarship(scholarship.id)}
                      className="scholarship-card p-6 rounded-xl bg-[#151517] border border-[#27272a] hover:border-[#22c55e]/30 transition-all duration-300 cursor-pointer text-left flex flex-col justify-between self-start"
                    >
                      <div>
                        <div className="flex justify-between items-start gap-4 mb-4">
                          <div>
                            <h5 className="text-base font-bold font-serif text-white">{scholarship.title}</h5>
                            <span className="text-[10px] text-[#a1a1aa] block uppercase tracking-wider font-semibold mt-1">
                              {scholarship.subtitle}
                            </span>
                          </div>
                          <span className="px-2.5 py-1 rounded bg-[#22c55e]/10 border border-[#22c55e]/20 text-xs font-bold text-[#22c55e] whitespace-nowrap shrink-0">
                            {scholarship.id === "ap-govt" ? "Govt Scheme" : "₹50,000 / Year"}
                          </span>
                        </div>
                        
                        {/* Smooth expanding container */}
                        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[380px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                          <div className="pt-4 border-t border-[#27272a] space-y-3.5 text-xs text-neutral-300">
                            <div>
                              <span className="uppercase text-[9px] font-bold text-[#22c55e] tracking-widest block mb-1">Benefits Details</span>
                              <p className="leading-relaxed font-light max-w-[50ch]">{scholarship.benefits}</p>
                            </div>
                            <div>
                              <span className="uppercase text-[9px] font-bold text-[#22c55e] tracking-widest block mb-1">Eligibility Criteria</span>
                              <p className="leading-relaxed font-light max-w-[50ch]">{scholarship.eligibility}</p>
                            </div>
                            <div>
                              <span className="uppercase text-[9px] font-bold text-[#22c55e] tracking-widest block mb-1">Scholarship Duration</span>
                              <p className="leading-relaxed font-light max-w-[50ch]">{scholarship.duration}</p>
                            </div>
                            <div>
                              <span className="uppercase text-[9px] font-bold text-[#22c55e] tracking-widest block mb-1">Official Verification Details</span>
                              <p className="leading-relaxed font-light max-w-[50ch]">{scholarship.details}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-[#27272a]/40 flex justify-between items-center text-xs text-[#a1a1aa]">
                        <span>{isExpanded ? "Click to collapse" : "Click to view eligibility & benefits"}</span>
                        {isExpanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* =========================================
             6. IMPORTANT INFORMATION (Accordion layout)
             ========================================= */}
          <section className="mb-24">
            <div className="border-b border-[#27272a] pb-6 mb-12">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#22c55e] block mb-2">Essential Guidelines</span>
              <h3 className="text-3xl font-bold font-serif text-white">Important Admission Information</h3>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {/* Accordion 1: Reservation Policy */}
              <div className="border border-[#27272a] rounded-xl bg-[#151517] overflow-hidden">
                <button
                  onClick={() => toggleAccordion("reservation")}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-bold text-base text-white font-serif">Reservation Policy</span>
                  {openAccordion === "reservation" ? <ChevronUp className="size-4 text-[#22c55e]" /> : <ChevronDown className="size-4 text-neutral-400" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === "reservation" ? 'max-h-40 border-t border-[#27272a]' : 'max-h-0'}`}>
                  <div className="p-6 text-sm text-neutral-400 leading-relaxed font-light max-w-[65ch]">
                    Admissions are strictly governed by the reservation rules and category allocations prescribed by the Government of Andhra Pradesh from time to time. This includes statutory reservation of seats for SC, ST, BC, EWS, CAP, NCC, Sports, and PH candidates.
                  </div>
                </div>
              </div>

              {/* Accordion 2: Aadhaar Requirement */}
              <div className="border border-[#27272a] rounded-xl bg-[#151517] overflow-hidden">
                <button
                  onClick={() => toggleAccordion("aadhaar")}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-bold text-base text-white font-serif">Aadhaar Verification Requirement</span>
                  {openAccordion === "aadhaar" ? <ChevronUp className="size-4 text-[#22c55e]" /> : <ChevronDown className="size-4 text-neutral-400" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === "aadhaar" ? 'max-h-40 border-t border-[#27272a]' : 'max-h-0'}`}>
                  <div className="p-6 text-sm text-neutral-400 leading-relaxed font-light max-w-[65ch]">
                    All government scholarships and fee reimbursement benefits are strictly linked to Aadhaar-based authentication. Students must provide active, updated Aadhaar numbers and undergo e-KYC validation as per Govt. Memo No. 16635/sw. Edn. 2/2012-4.
                  </div>
                </div>
              </div>

              {/* Accordion 3: Fee Reimbursement Application */}
              <div className="border border-[#27272a] rounded-xl bg-[#151517] overflow-hidden">
                <button
                  onClick={() => toggleAccordion("application")}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-bold text-base text-white font-serif">Fee Reimbursement Portal Registration</span>
                  {openAccordion === "application" ? <ChevronUp className="size-4 text-[#22c55e]" /> : <ChevronDown className="size-4 text-neutral-400" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === "application" ? 'max-h-40 border-t border-[#27272a]' : 'max-h-0'}`}>
                  <div className="p-6 text-sm text-neutral-400 leading-relaxed font-light max-w-[65ch]">
                    Candidates who qualify for the family income fee exemption must submit their reimbursement applications online via the official <strong>Jnanabhumi portal</strong> immediately after reporting to college. Late or incomplete portal registrations will result in reimbursement denial.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================
             7. ADMISSIONS HELP DESK
             ========================================= */}
          <section id="admissions-help-desk" className="scroll-mt-24">
            <div className="border-b border-[#27272a] pb-6 mb-12">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#22c55e] block mb-2">Help Desk</span>
              <h3 className="text-3xl font-bold font-serif text-white">Contact Admissions Office</h3>
            </div>

            <div className="help-desk-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-6 md:p-8 rounded-xl bg-[#151517] border border-[#27272a] max-w-4xl mx-auto">
              {/* Contact details */}
              <div className="lg:col-span-7 space-y-6">
                <h4 className="text-xl font-bold font-serif text-white">Admissions &amp; Academic Office</h4>
                <p className="text-sm text-neutral-400 leading-relaxed font-light max-w-[50ch]">
                  Have questions regarding seat allotment, fee payment, scholarship eligibility, or physical certificate verification? Contact our help desk during college hours.
                </p>
                
                <div className="space-y-4 pt-4 border-t border-[#27272a]">
                  <div className="flex items-start gap-4">
                    <MapPin className="size-5 text-[#22c55e] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-0.5">Campus Address</span>
                      <p className="text-sm text-neutral-200">
                        Vishnupur, West Godavari, Bhimavaram, Andhra Pradesh 534202
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="size-5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-0.5">Email Address</span>
                      <a href="mailto:seethapolytechnic093@gmail.com" className="text-sm text-neutral-200 hover:text-white hover:underline transition-all">
                        seethapolytechnic093@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="size-5 text-[#22c55e] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-0.5">Admissions Helpline</span>
                      <a href="tel:+918816250815" className="text-sm text-neutral-200 hover:text-white hover:underline transition-all">
                        +91 88162 50815
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call Action buttons card */}
              <div className="lg:col-span-5 rounded-lg bg-black border border-[#27272a] p-6 flex flex-col justify-center gap-4 text-center">
                <h5 className="text-xs font-bold text-[#a1a1aa] uppercase tracking-widest mb-2">Direct Contact Actions</h5>
                <a
                  href="tel:+918816250815"
                  className="w-full py-3 bg-[#22c55e] text-[#0a0a0b] hover:bg-[#1ebd52] transition-colors rounded-[6px] font-bold text-sm inline-flex items-center justify-center gap-2"
                >
                  <Phone className="size-4" />
                  Call Admissions
                </a>
                <a
                  href="mailto:seethapolytechnic093@gmail.com"
                  className="w-full py-3 border border-[#27272a] hover:bg-[#151517] text-[#e3e3e6] transition-all rounded-[6px] font-bold text-sm inline-flex items-center justify-center gap-2"
                >
                  <Mail className="size-4" />
                  Email Admissions
                </a>
                <p className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest mt-2">
                  Mon - Sat | 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
      {/* Scroll-triggered text highlights stylesheet */}
      <style dangerouslySetInnerHTML={{ __html: `
        .text-highlight {
          background-image: linear-gradient(to right, rgba(234, 179, 8, 0.25) 0%, rgba(234, 179, 8, 0.25) 100%);
          background-repeat: no-repeat;
          background-size: 0% 100%;
          transition: background-size 2.2s cubic-bezier(0.25, 1, 0.5, 1), color 0.4s ease;
          color: inherit;
          padding: 0 4px;
          border-radius: 4px;
          display: inline;
        }
        .text-highlight.active {
          background-size: 100% 100%;
          color: #ffffff;
        }
      `}} />
    </main>
  );
}
