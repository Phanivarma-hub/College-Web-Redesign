"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { 
  BookOpen, 
  Download, 
  ExternalLink, 
  Award, 
  Trophy, 
  Calendar, 
  Clock, 
  ChevronRight, 
  X, 
  Sparkles, 
  GraduationCap 
} from "lucide-react";
import AnimatedList from "@/components/ui/AnimatedList";

// Register ScrollTrigger safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ----------------------------------------------------
// DATA DEFINITIONS
// ----------------------------------------------------

const departments = [
  {
    code: "CME",
    name: "Computer Engineering",
    objective: "Develop efficient and dynamic computer engineers with academic excellence, leadership skills and integrity.",
    buttonColor: "#D5FF37",
    imgUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
  },
  {
    code: "ECE",
    name: "Electronics & Communication Engineering",
    objective: "Quality education in modern technologies including DSP, Wireless Communication, Microprocessors and Embedded Systems.",
    buttonColor: "#7DD6FF",
    imgUrl: "https://images.unsplash.com/photo-1631553127989-470a2a1b1836?auto=format&fit=crop&q=80&w=1000",
  },
  {
    code: "EEE",
    name: "Electrical & Electronics Engineering",
    objective: "Building innovative engineers with entrepreneurial mindset and strong technical foundations.",
    buttonColor: "#FFA0B0",
    imgUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    code: "Basic Sciences",
    name: "Basic Sciences",
    objective: "The foundation for all engineering disciplines through application-oriented scientific learning.",
    buttonColor: "#FFA17B",
    imgUrl: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=1000",
  }
];

const resources = [
  { name: "C23 CME Syllabus", size: "1.92 MB", file: "/downloads/c23-cme.pdf", isExternal: false },
  { name: "C23 ECE Syllabus", size: "1.49 MB", file: "/downloads/c23-ece.pdf", isExternal: false },
  { name: "C23 EEE Syllabus", size: "1.93 MB", file: "/downloads/c23-eee.pdf", isExternal: false },
  { name: "Academic Calendar", size: "PDF Link", file: "https://seethapoly.edu.in/wp-content/uploads/2025/06/56_Academic_calender_2025-26.pdf", isExternal: true }
];

const toppers = [
  { id: 1, batch: "1997-2000", pin: "97093-CM-001", name: "BOMMAREDDY SATYAVANI", percentage: "83.63" },
  { id: 2, batch: "1998-2001", pin: "98093-CM-015", name: "KARUTURI PRASANTHI", percentage: "89.50" },
  { id: 3, batch: "1999-2002", pin: "99093-CM-001", name: "ANITHA SONY KAKARA", percentage: "89.45" },
  { id: 4, batch: "2000-2003", pin: "00093-EC-016", name: "G KRISHNA CHAITANYA", percentage: "87.28" },
  { id: 5, batch: "2001-2004", pin: "01093-EC-014", name: "DEEVI SATYA CHAITANYA", percentage: "86.51" },
  { id: 6, batch: "2002-2005", pin: "02093-EC-105", name: "ANNAM UMAKANTH REDDY", percentage: "88.44" },
  { id: 7, batch: "2003-2006", pin: "03093-EE-034", name: "JONNALAGADDA KODANDA RAM", percentage: "88.67" },
  { id: 8, batch: "2004-2007", pin: "04093-CM-018", name: "GUTTALA HEMALATHA", percentage: "90.20" },
  { id: 9, batch: "2005-2008", pin: "05093-EE-077", name: "VADRAVU SAI KAMESH", percentage: "88.37" },
  { id: 10, batch: "2006-2009", pin: "06093-CM-082", name: "TADALA VEERANNA BABU", percentage: "91.97" },
  { id: 11, batch: "2007-2010", pin: "07093-EC-029", name: "GANGISETTI SATYAKRISHNA", percentage: "96.03" },
  { id: 12, batch: "2008-2011", pin: "08093-CM-098", name: "TADI RAMA KRISHNA", percentage: "94.23" },
  { id: 13, batch: "2009-2012", pin: "09093-EC-319", name: "YARLAGADDA NARENDRA", percentage: "95.66" },
  { id: 14, batch: "2010-2013", pin: "10093-EC-054", name: "KOPPOLU SOWMYA", percentage: "93.44" },
  { id: 15, batch: "2011-2014", pin: "11093-CM-013", name: "CHAGANTI SAI AKHILA", percentage: "95.66" },
  { id: 16, batch: "2012-2015", pin: "12093-EC-103", name: "REVURI LAKSHMI DURGA", percentage: "94.06" },
  { id: 17, batch: "2013-2016", pin: "13093-EC-101", name: "SEERA HARI PRIYA", percentage: "96.00" },
  { id: 18, batch: "2014-2017", pin: "14093-EE-090", name: "P.ADI VENKATA NARAYANA", percentage: "97.15" },
  { id: 19, batch: "2015-2018", pin: "15093-CM-082", name: "PALA USHA KALYANI", percentage: "96.89" },
  { id: 20, batch: "2016-2019", pin: "16093-EC-024", name: "DOMMETI KOMALEE CHANDRA", percentage: "96.40" },
  { id: 21, batch: "2017-2020", pin: "17093-EC-015", name: "CHENNU HARI NAGA SRI PALLAVI", percentage: "97.91" },
  { id: 22, batch: "2018-2021", pin: "18093-EC-058", name: "KONDAPALLI JAYA LAKSHMI", percentage: "97.32" },
  { id: 23, batch: "2019-2022", pin: "19093-CM-092", name: "PATTI LILA PRASANTHI", percentage: "96.65" },
  { id: 24, batch: "2020-2023", pin: "20093-EE-003", name: "ALAPATI YUGANDHAR", percentage: "88.32" },
  { id: 25, batch: "2021-2024", pin: "21093-EE-094", name: "KETHA VENKATHA NAGA SAI SATYANARAYANA", percentage: "91.11" },
  { id: 26, batch: "2022-2025", pin: "22093-CM-069", name: "KATNAM SESHA SAI SRI LAKSHMI RATNAM", percentage: "98.34" }
].reverse();

const developmentCategories = [
  {
    id: "clubs",
    title: "Academic Clubs",
    items: [
      { title: "English Literary Club", desc: "Organizes Speech Craft, Essay Writing, and Spelling Bee competitions to enrich communication.", detail: "Recent Events: Essay writing 'Is artificial intelligence a boon or bane?', Spelling Bee (I year), Speech Craft Competitions." },
      { title: "Power & Control Club", desc: "EEE club hosting technical quiz contests, prototype modeling, and idea sharing panels.", detail: "Recent Events: Technical Quiz Competition, Idea Sharing Activities, Power & Control Club activities at SRKR." },
      { title: "Creative Thinkers Club", desc: "ECE club focused on presenting trending technologies and organizing project expos.", detail: "Recent Events: Poster Presentation on 'Present Trends in ECE', project design expos judged by SVECW experts." },
      { title: "IEEE Student Chapter", desc: "Fosters technological innovation and engineering research in partnership with SVECW.", detail: "Recent Events: Women's Wellness & Psychology sessions, guest lectures on Fundamentals of Electrical Engineering." }
    ]
  },
  {
    id: "workshops",
    title: "Workshops & Projects",
    items: [
      { title: "Networking & Cyber Security", desc: "Two-day hands-on workshop focused on IP configurations, topologies, and routing safety.", detail: "Conducted for CME Students. Resource Persons: Mr. G. Sudheer Das (Lecturer), Dr. B. Prasad (Professor)." },
      { title: "PCB Manufacturing", desc: "Practical hands-on training for ECE students covering PCB layout design and etching.", detail: "Partner: Silicon Touch Technologies, Vijayawada. Staggered lab sessions for practical exposure." },
      { title: "Electrical Home Appliances", desc: "Practical safety and servicing workshops run in partnership with APSSDC.", detail: "Certification course covering household wiring, safety fuses, and home appliance maintenance." },
      { title: "Hands-on Innovation Projects", desc: "First-year physics workshop for developing real-world hardware models.", detail: "Deliverables: Students successfully fabricated bluetooth speakers, water level indicators, and tap sensors." }
    ]
  },
  {
    id: "lectures",
    title: "Guest Lectures",
    items: [
      { title: "Optical Fiber Communication", desc: "Exploring the fundamentals of light transmission, optical cables, and high-speed links.", detail: "Speaker: Tirumala Rao, Associate Professor, BS&H Department, VIT." },
      { title: "Fundamentals of Chemistry", desc: "Interactive academic lectures on atomic structures, chemical bonds, and engineering applications.", detail: "Speaker: CH.Swapna, Lecturer from B.V.Raju Degree/Chemistry College." },
      { title: "Computer Engineering Scope", desc: "Discussing modern software trends, cloud systems, and industry expectations.", detail: "Speaker: Dr. P. R. Sudha Rani, HOD of CSE, SVECW." },
      { title: "Electrical Engineering Scope", desc: "Focusing on smart grid setups, electrical vehicles, and green energy futures.", detail: "Speaker: Dr. S. M. Padmaja, HOD of EEE, SVECW." }
    ]
  },
  {
    id: "achievements",
    title: "Achievements & Awards",
    items: [
      { title: "Cisco Best Performance Award", desc: "Received state-level recognition for outstanding training outcomes in Networking.", detail: "Awarded by Dr. Adimulapu Suresh, Minister of Education, Government of Andhra Pradesh." },
      { title: "PolyTech Fest Project Expo Winners", desc: "Secured 1st and 2nd prizes at the District Level Regional PolyTech Fest.", detail: "Organized by AP SBTET. Awarded for innovative student-led engineering design models." },
      { title: "IPSGM District Overall Girls Championship", desc: "Won the prestigious overall championship trophy across sports categories.", detail: "Represented by 25 boys & 25 girls. Dominant wins in volleyball, badminton, chess, and relays." },
      { title: "IPSGM State Level Achievements", desc: "Notable victories including Chess Winners and Badminton Singles Runners.", detail: "Winner (Chess): V. Yuvaraj Yugesh, Runner (Badminton Singles): B. Sai Lakshmi." }
    ]
  }
];

// Flatten student development category data for the infinite loop carousel
const devItems = developmentCategories.flatMap(cat => 
  cat.items.map(item => ({
    category: cat.title,
    title: item.title,
    desc: item.desc,
    detail: item.detail,
    themeColor: cat.id === "clubs" ? "#D5FF37" : cat.id === "workshops" ? "#7DD6FF" : cat.id === "lectures" ? "#FFA0B0" : "#FFA17B"
  }))
);

// ----------------------------------------------------
// ANIMATED SUB-COMPONENTS
// ----------------------------------------------------

const Counter = ({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) => {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const obj = { count: 0 };

    const tl = gsap.to(obj, {
      count: value,
      duration: 2.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none none"
      },
      onUpdate: () => {
        if (element) {
          element.textContent = obj.count.toFixed(decimals) + suffix;
        }
      }
    });

    return () => {
      tl.kill();
    };
  }, [value, decimals, suffix]);

  return <span ref={elementRef} className="tabular-nums">0{suffix}</span>;
};

  export default function AcademicsPage() {
  const [isTopperModalOpen, setIsTopperModalOpen] = useState(false);
  const [selectedTopperIndex, setSelectedTopperIndex] = useState(0);

  // Refs for Scroll Animations
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxTextRef = useRef<HTMLDivElement>(null);
  const marqueeTrackRef1 = useRef<HTMLDivElement>(null);
  const marqueeTrackRef2 = useRef<HTMLDivElement>(null);
  const deptsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const examsRef = useRef<HTMLDivElement>(null);
  const excellenceRef = useRef<HTMLDivElement>(null);
  const studentDevRef = useRef<HTMLDivElement>(null);

  // Topper List Map
  const listToppers = [...toppers].reverse();
  const topperItemsList = listToppers.map(
    (t) => `${t.batch}  |  ${t.name}  [${t.percentage}%]`
  );

  const handleTopperSelect = (item: string, index: number) => {
    setSelectedTopperIndex(index);
  };

  useEffect(() => {
    let ctx: gsap.Context;
    let splitInstances: any[] = [];
    let hasStarted = false;
    let fallback: NodeJS.Timeout;

    const startAnimations = () => {
      if (hasStarted) return;
      hasStarted = true;

      if (fallback) clearTimeout(fallback);

      ctx = gsap.context(() => {
        const heroTl = gsap.timeline();
        const targets = document.querySelectorAll('.text-reveal');

        targets.forEach(target => {
          const splitText = new SplitType(target as HTMLElement, { types: 'lines' });
          splitInstances.push(splitText);

          splitText.lines?.forEach(line => {
            const lineWrapper = document.createElement('div');
            lineWrapper.classList.add('line-wrapper');
            lineWrapper.style.overflow = 'hidden';
            lineWrapper.style.display = 'block';
            target.appendChild(lineWrapper);
            lineWrapper.appendChild(line);

            // Copy styling to lines
            line.classList.add("text-transparent", "bg-clip-text", "bg-gradient-to-b");
            if (target.classList.contains("hero-gradient-1")) {
              line.classList.add("from-white", "via-white", "to-neutral-400");
            } else if (target.classList.contains("hero-gradient-2")) {
              line.classList.add("from-orange-400", "via-green-400", "to-purple-500");
            }
          });

          // Animation
          heroTl.fromTo(splitText.lines,
            { y: "100%" },
            {
              y: "0%",
              duration: 1.0,
              ease: "power2.out",
              stagger: 0.15
            },
            0
          );
        });

        // 1b. Animate badge tag & description sentence
        heroTl.fromTo(".hero-animate-up",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.0, ease: "power3.out", stagger: 0.15 },
          "-=0.5"
        );

        // 1c. Horizontal Parallax Ticker Scroll Animation
        const parallaxText = parallaxTextRef.current;
        if (parallaxText && heroRef.current) {
          gsap.to(parallaxText, {
            x: "-25%",
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.2
            }
          });
        }

        // 1d. Infinite Scrolling Marquees (Ticker Controlled)
        const track1 = marqueeTrackRef1.current;
        const track2 = marqueeTrackRef2.current;

        if (track1) {
          track1.innerHTML += track1.innerHTML;

          const totalWidth1 = track1.scrollWidth / 2;
          const speed1 = 60; // pixels per second
          let pos1 = 0;
          let paused1 = false;

          const marqueeContainer1 = track1.parentElement;
          if (marqueeContainer1) {
            const onEnter1 = () => { paused1 = true; };
            const onLeave1 = () => { paused1 = false; };
            marqueeContainer1.addEventListener('mouseenter', onEnter1);
            marqueeContainer1.addEventListener('mouseleave', onLeave1);
            
            (track1 as any)._cleanup = () => {
              marqueeContainer1.removeEventListener('mouseenter', onEnter1);
              marqueeContainer1.removeEventListener('mouseleave', onLeave1);
            };
          }

          const tickHandler1 = () => {
            if (paused1) return;
            pos1 -= speed1 / 60;
            if (pos1 <= -totalWidth1) {
              pos1 += totalWidth1;
            }
            gsap.set(track1, { x: pos1 });
          };

          gsap.ticker.add(tickHandler1);

          (track1 as any)._cleanupTicker = () => {
            gsap.ticker.remove(tickHandler1);
          };
        }

        if (track2) {
          track2.innerHTML += track2.innerHTML;

          const totalWidth2 = track2.scrollWidth / 2;
          const speed2 = 50; // pixels per second
          let pos2 = -totalWidth2;
          let paused2 = false;

          const marqueeContainer2 = track2.parentElement;
          if (marqueeContainer2) {
            const onEnter2 = () => { paused2 = true; };
            const onLeave2 = () => { paused2 = false; };
            marqueeContainer2.addEventListener('mouseenter', onEnter2);
            marqueeContainer2.addEventListener('mouseleave', onLeave2);
            
            (track2 as any)._cleanup = () => {
              marqueeContainer2.removeEventListener('mouseenter', onEnter2);
              marqueeContainer2.removeEventListener('mouseleave', onLeave2);
            };
          }

          const tickHandler2 = () => {
            if (paused2) return;
            pos2 += speed2 / 60; // moves opposite direction (left-to-right)
            if (pos2 >= 0) {
              pos2 -= totalWidth2;
            }
            gsap.set(track2, { x: pos2 });
          };

          gsap.ticker.add(tickHandler2);

          (track2 as any)._cleanupTicker = () => {
            gsap.ticker.remove(tickHandler2);
          };
        }

        // Section entry triggers
        const sections = [
          { ref: resourcesRef, trigger: ".resource-card" },
          { ref: examsRef, trigger: ".exam-card" },
          { ref: excellenceRef, trigger: ".excellence-card" }
        ];

        sections.forEach((sect) => {
          if (!sect.ref.current) return;
          gsap.fromTo(sect.ref.current.querySelectorAll(sect.trigger),
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: sect.ref.current,
                start: "top 80%",
                toggleActions: "play none none none"
              }
            }
          );
        });
      });
    };

    // Delay animations if site loader is currently running
    if (typeof window !== "undefined") {
      if ((window as any).__loaderFinished) {
        startAnimations();
      } else {
        const handleLoaderFinished = () => {
          startAnimations();
          window.removeEventListener("loaderFinished", handleLoaderFinished);
        };
        window.addEventListener("loaderFinished", handleLoaderFinished);

        // Fallback: if loader event is missed, run after 3s
        fallback = setTimeout(() => {
          startAnimations();
          window.removeEventListener("loaderFinished", handleLoaderFinished);
        }, 3000);

        const cleanMarquee = (ref: React.RefObject<HTMLDivElement>) => {
          if (ref.current) {
            const t = ref.current as any;
            if (t._cleanup) t._cleanup();
            if (t._cleanupTicker) t._cleanupTicker();
          }
        };

        return () => {
          window.removeEventListener("loaderFinished", handleLoaderFinished);
          clearTimeout(fallback);
          splitInstances.forEach(inst => inst.revert());
          cleanMarquee(marqueeTrackRef1);
          cleanMarquee(marqueeTrackRef2);
          if (ctx) ctx.revert();
        };
      }
    } else {
      startAnimations();
    }

    const cleanMarquee = (ref: React.RefObject<HTMLDivElement>) => {
      if (ref.current) {
        const t = ref.current as any;
        if (t._cleanup) t._cleanup();
        if (t._cleanupTicker) t._cleanupTicker();
      }
    };

    return () => {
      splitInstances.forEach(inst => inst.revert());
      cleanMarquee(marqueeTrackRef1);
      cleanMarquee(marqueeTrackRef2);
      if (ctx) ctx.revert();
    };
  }, []);

  // 2. Section 1: Scroll Pinned Mask Reveal Scroll Animation for Departments (Desktop & Mobile)
  useEffect(() => {
    if (typeof window === "undefined" || !deptsRef.current) return;

    const wrappers = deptsRef.current.querySelectorAll(".arch__right .img-wrapper");
    wrappers.forEach((element) => {
      const order = element.getAttribute("data-index");
      if (order !== null) {
        (element as HTMLElement).style.zIndex = order;
      }
    });

    const handleMobileLayout = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const leftItems = gsap.utils.toArray<HTMLElement>(".arch__left .arch__info");
      const rightItems = gsap.utils.toArray<HTMLElement>(".arch__right .img-wrapper");

      if (isMobile) {
        leftItems.forEach((item, i) => {
          item.style.order = (i * 2).toString();
        });
        rightItems.forEach((item, i) => {
          item.style.order = (i * 2 + 1).toString();
        });
      } else {
        leftItems.forEach((item) => {
          item.style.order = "";
        });
        rightItems.forEach((item) => {
          item.style.order = "";
        });
      }
    };

    window.addEventListener("resize", handleMobileLayout);
    handleMobileLayout();

    const imgs = gsap.utils.toArray<HTMLElement>(".img-wrapper img");
    const bgColors = ["#091c14", "#1d1208", "#12081d", "#08101e"];

    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".arch",
          start: "top top",
          end: "bottom bottom",
          pin: ".arch__right",
          scrub: true
        }
      });

      gsap.set(imgs, {
        clipPath: "inset(0%)",
        objectPosition: "0px 0%"
      });

      imgs.forEach((_, index) => {
        const currentImage = imgs[index];
        const nextImage = imgs[index + 1] ? imgs[index + 1] : null;

        const sectionTimeline = gsap.timeline();

        if (nextImage) {
          sectionTimeline
            .to(
              "body",
              {
                backgroundColor: bgColors[index],
                duration: 1.5,
                ease: "power2.inOut"
              },
              0
            )
            .to(
              currentImage,
              {
                clipPath: "inset(0px 0px 100% 0px)",
                objectPosition: "0px 60%",
                duration: 1.5,
                ease: "none"
              },
              0
            )
            .to(
              nextImage,
              {
                objectPosition: "0px 40%",
                duration: 1.5,
                ease: "none"
              },
              0
            );
        } else {
          sectionTimeline.to(
            "body",
            {
              backgroundColor: bgColors[index],
              duration: 1.5,
              ease: "power2.inOut"
            },
            0
          );
        }

        mainTimeline.add(sectionTimeline);
      });
    });

    mm.add("(max-width: 768px)", () => {
      const mbTimeline = gsap.timeline();
      gsap.set(imgs, {
        objectPosition: "0px 60%"
      });

      imgs.forEach((image, index) => {
        const innerTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: image,
            start: "top-=70% top+=50%",
            end: "bottom+=200% bottom",
            scrub: true
          }
        });

        innerTimeline
          .to(image, {
            objectPosition: "0px 30%",
            duration: 5,
            ease: "none"
          })
          .to("body", {
            backgroundColor: bgColors[index],
            duration: 1.5,
            ease: "power2.inOut"
          });

        mbTimeline.add(innerTimeline);
      });
    });

    return () => {
      window.removeEventListener("resize", handleMobileLayout);
      mm.revert();
      gsap.set("body", { backgroundColor: "" });
    };
  }, []);

  // 3. Section 5: Student Development Horizontal 3D Infinite Loop Scroll Carousel
  useEffect(() => {
    if (typeof window === "undefined" || !studentDevRef.current) return;

    const cards = gsap.utils.toArray<HTMLElement>('.cards li');
    if (cards.length === 0) return;

    const spacing = 0.1;
    const snap = gsap.utils.snap(spacing);

    // Build loop helper
    function buildSeamlessLoop(items: HTMLElement[], spacing: number) {
      let overlap = Math.ceil(1 / spacing), 
          startTime = items.length * spacing + 0.5, 
          loopTime = (items.length + overlap) * spacing + 1, 
          rawSequence = gsap.timeline({paused: true}), 
          seamlessLoop = gsap.timeline({ 
            paused: true,
            repeat: -1, 
            onRepeat() { 
              this._time === this._dur && (this._tTime += this._dur - 0.01);
            }
          }),
          l = items.length + overlap * 2,
          time = 0,
          i, index, item;

      gsap.set(items, {xPercent: 400, opacity: 0, scale: 0});

      for (i = 0; i < l; i++) {
        index = i % items.length;
        item = items[index];
        time = i * spacing;
        rawSequence.fromTo(item, {scale: 0, opacity: 0}, {scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false}, time)
                   .fromTo(item, {xPercent: 400}, {xPercent: -400, duration: 1, ease: "none", immediateRender: false}, time);
        i <= items.length && seamlessLoop.add("label" + i, time); 
      }
      
      rawSequence.time(startTime);
      seamlessLoop.to(rawSequence, {
        time: loopTime,
        duration: loopTime - startTime,
        ease: "none"
      }).fromTo(rawSequence, {time: overlap * spacing + 1}, {
        time: startTime,
        duration: startTime - (overlap * spacing + 1),
        immediateRender: false,
        ease: "none"
      });
      return { seamlessLoop, startTime };
    }

    const { seamlessLoop, startTime } = buildSeamlessLoop(cards, spacing);

    // Scroll trigger only scrubs playhead relatively without pinning
    const trigger = ScrollTrigger.create({
      trigger: ".gallery",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate(self) {
        const targetTime = startTime + self.progress * (spacing * 10);
        gsap.to(seamlessLoop, {
          totalTime: snap(targetTime),
          duration: 0.5,
          ease: "power3.out",
          overwrite: "auto"
        });
      }
    });

    const handleNext = () => {
      gsap.to(seamlessLoop, {
        totalTime: snap(seamlessLoop.totalTime() + spacing),
        duration: 0.5,
        ease: "power3.out",
        overwrite: "auto"
      });
    };

    const handlePrev = () => {
      gsap.to(seamlessLoop, {
        totalTime: snap(seamlessLoop.totalTime() - spacing),
        duration: 0.5,
        ease: "power3.out",
        overwrite: "auto"
      });
    };

    const nextBtn = studentDevRef.current.querySelector(".next");
    const prevBtn = studentDevRef.current.querySelector(".prev");

    if (nextBtn) nextBtn.addEventListener("click", handleNext);
    if (prevBtn) prevBtn.addEventListener("click", handlePrev);

    return () => {
      trigger.kill();
      seamlessLoop.kill();
      if (nextBtn) nextBtn.removeEventListener("click", handleNext);
      if (prevBtn) prevBtn.removeEventListener("click", handlePrev);
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans">
      
      {/* Background Neon Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[800px] left-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-[400px] right-[10%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Decorative Horizontal Parallax Ticker */}
      <div className="absolute top-48 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none z-0 opacity-15 select-none hidden md:block">
        <div 
          ref={parallaxTextRef} 
          className="text-[12vw] font-black uppercase tracking-widest leading-none text-transparent transform translate-x-[10%]"
          style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.12)" }}
        >
          SEETHA POLYTECHNIC COLLEGE • ACADEMICS • STUDENT GROWTH •
        </div>
      </div>

      {/* Main Page Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-32">
        
        {/* =========================================
           HERO SECTION
           ========================================= */}
        <section ref={heroRef} className="mb-24 text-center relative select-none">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 hero-animate-up opacity-0">
            <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold text-white/70">Academic Catalog 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
            <span className="block text-reveal hero-gradient-1">
              Academics &amp;
            </span>
            <span className="block text-reveal hero-gradient-2 pb-2">
              Student Growth
            </span>
          </h1>

          {/* Criss-Cross Infinite Scrolling Marquees */}
          <div className="relative w-full overflow-visible py-20 my-16 select-none h-48 md:h-64 hero-animate-up opacity-0">
            
            {/* Marquee 1: Slanted Left-to-Right / Right-to-Left (Slanted down at -2.5deg) */}
            <div className="marquee w-[110vw] overflow-hidden absolute top-0 left-1/2 -translate-x-1/2 rotate-[-2.5deg] border-y border-white/10 bg-black z-20 py-3">
              <div ref={marqueeTrackRef1} className="marquee-track flex gap-8 w-max will-change-transform">
                <span className="marquee-item text-md md:text-xl font-black uppercase tracking-wider text-white flex-shrink-0">
                  Empowering next-generation engineers
                </span>
                <span className="marquee-sep text-md md:text-xl opacity-40 flex-shrink-0 text-orange-400">&bull;</span>
                <span className="marquee-item text-md md:text-xl font-black uppercase tracking-wider text-white flex-shrink-0">
                  Industry-focused syllabus
                </span>
                <span className="marquee-sep text-md md:text-xl opacity-40 flex-shrink-0 text-green-400">&bull;</span>
                <span className="marquee-item text-md md:text-xl font-black uppercase tracking-wider text-white flex-shrink-0">
                  Dedicated examination cell
                </span>
                <span className="marquee-sep text-md md:text-xl opacity-40 flex-shrink-0 text-purple-400">&bull;</span>
                <span className="marquee-item text-md md:text-xl font-black uppercase tracking-wider text-white flex-shrink-0">
                  Outstanding topper honors
                </span>
                <span className="marquee-sep text-md md:text-xl opacity-40 flex-shrink-0 text-orange-400">&bull;</span>
                <span className="marquee-item text-md md:text-xl font-black uppercase tracking-wider text-white flex-shrink-0">
                  Holistic student development
                </span>
                <span className="marquee-sep text-md md:text-xl opacity-40 flex-shrink-0 text-green-400">&bull;</span>
              </div>
            </div>

            {/* Marquee 2: Slanted Right-to-Left (Slanted up at 2.5deg, passing under/over the first one) */}
            <div className="marquee w-[110vw] overflow-hidden absolute top-12 md:top-16 left-1/2 -translate-x-1/2 rotate-[2.5deg] border-y border-white/10 bg-black z-10 py-3">
              <div ref={marqueeTrackRef2} className="marquee-track flex gap-8 w-max will-change-transform">
                <span className="marquee-item text-md md:text-xl font-black uppercase tracking-wider text-neutral-300 flex-shrink-0">
                  25+ Years Legacy of Excellence
                </span>
                <span className="marquee-sep text-md md:text-xl opacity-40 flex-shrink-0 text-purple-400">&bull;</span>
                <span className="marquee-item text-md md:text-xl font-black uppercase tracking-wider text-neutral-300 flex-shrink-0">
                  Practical Laboratory Training
                </span>
                <span className="marquee-sep text-md md:text-xl opacity-40 flex-shrink-0 text-orange-400">&bull;</span>
                <span className="marquee-item text-md md:text-xl font-black uppercase tracking-wider text-neutral-300 flex-shrink-0">
                  Cisco Networking Academy Partner
                </span>
                <span className="marquee-sep text-md md:text-xl opacity-40 flex-shrink-0 text-green-400">&bull;</span>
                <span className="marquee-item text-md md:text-xl font-black uppercase tracking-wider text-neutral-300 flex-shrink-0">
                  IPSGM District Sports Champions
                </span>
                <span className="marquee-sep text-md md:text-xl opacity-40 flex-shrink-0 text-purple-400">&bull;</span>
                <span className="marquee-item text-md md:text-xl font-black uppercase tracking-wider text-neutral-300 flex-shrink-0">
                  Expert Faculty Mentorship
                </span>
                <span className="marquee-sep text-md md:text-xl opacity-40 flex-shrink-0 text-orange-400">&bull;</span>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================
           SECTION 1: PROGRAMS & DEPARTMENTS (Scroll Mask reveal pin layout)
           ========================================= */}
        <section ref={deptsRef} className="mb-32">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase mb-4 text-center">
              Programs &amp; Departments
            </h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-orange-500 to-green-500" />
          </div>

          <div className="arch">
            <div className="arch__left">
              {departments.map((dept) => (
                <div key={dept.code} className="arch__info">
                  <div className="content">
                    <h2 className="header text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-none mb-4 text-left">
                      {dept.name}
                    </h2>
                    <p className="desc text-neutral-300 font-light text-sm md:text-base leading-relaxed mb-8 text-left">
                      {dept.objective}
                    </p>
                    <Link 
                      className="link font-bold text-xs uppercase tracking-wider text-black w-fit flex items-center gap-2 rounded-full px-6 py-4 hover:scale-105 active:scale-95 transition-transform" 
                      href="#" 
                      style={{ backgroundColor: dept.buttonColor }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none">
                        <path fill="#121212" d="M5 2c0 1.105-1.895 2-3 2a2 2 0 1 1 0-4c1.105 0 3 .895 3 2ZM11 3.5c0 1.105-.895 3-2 3s-2-1.895-2-3a2 2 0 1 1 4 0ZM6 9a2 2 0 1 1-4 0c0-1.105.895-3 2-3s2 1.895 2 3Z" />
                      </svg> 
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="arch__right">
              {departments.map((dept, index) => (
                <div key={dept.code} className="img-wrapper" data-index={4 - index}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={dept.imgUrl} alt={dept.name} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
           SECTION 2: CURRICULUM & RESOURCES
           ========================================= */}
        <section ref={resourcesRef} className="mb-32">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase mb-4 text-center">
              Syllabus &amp; Academic Calendar
            </h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-green-500 to-purple-500" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((res) => (
              <a
                key={res.name}
                href={res.file}
                target={res.isExternal ? "_blank" : undefined}
                rel={res.isExternal ? "noopener noreferrer" : undefined}
                className="group relative rounded-xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-left hover:-translate-y-1 resource-card opacity-0 shadow-lg"
              >
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange-500 via-green-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />

                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-orange-400 group-hover:border-orange-500/30 transition-all duration-300">
                    {res.isExternal ? <Calendar className="w-5 h-5" /> : <Download className="w-5 h-5" />}
                  </div>

                  <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">
                    {res.name}
                  </h3>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">
                    {res.size}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors">
                  <span>{res.isExternal ? "View Calendar" : "Download PDF"}</span>
                  {res.isExternal ? <ExternalLink className="w-4 h-4" /> : <Download className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" />}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* =========================================
           SECTION 3: EXAMINATION & RESULTS
           ========================================= */}
        <section ref={examsRef} className="mb-32">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase mb-4 text-center">
              Examinations &amp; Results
            </h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-purple-500 to-orange-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 p-8 md:p-10 backdrop-blur-md exam-card opacity-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white">Examination Cell</h3>
                  <p className="text-xs text-purple-400 uppercase tracking-widest font-bold">Protocol &amp; Schedules</p>
                </div>
              </div>

              <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed mb-6">
                The Examination Cell coordinates all registration, scheduling, assessment, and record management routines under standard Board of Technical Education rules. We ensure transparent internal assessments, fair evaluation methodologies, and prompt dissemination of marks reports.
              </p>

              <ul className="space-y-3 mb-8">
                {["Mid-Term Test Rosters", "External Board Practical Schedules", "Evaluation Regulations & Guidelines"].map((li, index) => (
                  <li key={index} className="flex items-center gap-3 text-xs md:text-sm text-neutral-300 font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>

            <div className="group relative rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 p-8 md:p-10 backdrop-blur-md flex flex-col justify-between exam-card opacity-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-white">Diploma Results</h3>
                    <p className="text-xs text-green-400 uppercase tracking-widest font-bold">APSBTET Gateway</p>
                  </div>
                </div>

                <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed mb-6">
                  Check and verify diploma examinations and semester results directly through the Andhra Pradesh State Board of Technical Education and Training (APSBTET) academic results portal.
                </p>
              </div>

              <div className="mt-8 border-t border-white/5 pt-8">
                <a
                  href="https://sbtet.ap.gov.in/APSBTET/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white text-black font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors duration-300 text-center shadow-[0_10px_20px_rgba(255,255,255,0.05)]"
                >
                  <span>View Results Online</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
           SECTION 4: ACADEMIC EXCELLENCE
           ========================================= */}
        <section ref={excellenceRef} className="mb-32">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase mb-4 text-center">
              Academic Excellence
            </h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-orange-500 to-purple-500" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
            <div className="lg:col-span-8 group relative rounded-3xl bg-gradient-to-b from-[#120F17] to-black border border-white/10 p-8 md:p-12 overflow-hidden flex flex-col md:flex-row gap-8 items-center excellence-card opacity-0 shadow-2xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-orange-500/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative shrink-0 w-44 h-44 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 p-1 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-xl bg-black flex flex-col items-center justify-center text-center p-4">
                  <GraduationCap className="w-14 h-14 text-orange-400 mb-2 animate-bounce" />
                  <span className="text-[1.8rem] font-black text-white leading-none">98.34%</span>
                  <span className="text-[0.6rem] font-bold text-neutral-400 tracking-widest uppercase mt-1">PERCENTAGE</span>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
                  <Award className="w-3.5 h-3.5" />
                  <span>Featured Topper Honors</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-white tracking-tight leading-tight mb-2">
                  Katnam Sesha Sai Sri Lakshmi Ratnam
                </h3>
                <p className="text-sm uppercase tracking-widest text-neutral-400 font-bold mb-4">
                  Batch: 2022 - 2025  |  Computer Engineering (CME)
                </p>
                <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed">
                  Graduated with a record-setting 98.34% average, exemplifying the academic rigor, technical dedication, and innovation values embedded within Seetha Polytechnic College.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10 flex flex-col justify-between items-center text-center excellence-card opacity-0 relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
              
              <div className="flex flex-col items-center mt-4">
                <Trophy className="w-14 h-14 text-yellow-500 mb-6 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]" />
                <h4 className="text-xl font-bold uppercase tracking-tight text-white mb-2">25+ Years Legacy</h4>
                <p className="text-neutral-400 font-light text-xs md:text-sm leading-relaxed max-w-xs">
                  Browse the historical database of gold medalists and top performers from 1997 to 2025.
                </p>
              </div>

              <button
                onClick={() => setIsTopperModalOpen(true)}
                className="w-full mt-8 inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 text-sm shadow-md"
              >
                <span>View All Toppers</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/5">
            <div className="text-center p-6 bg-white/[0.02] rounded-xl border border-white/5">
              <div className="text-4xl md:text-6xl font-black tracking-tight text-white mb-2">
                <Counter value={98.34} decimals={2} suffix="%" />
              </div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Highest Percentage</p>
            </div>
            <div className="text-center p-6 bg-white/[0.02] rounded-xl border border-white/5">
              <div className="text-4xl md:text-6xl font-black tracking-tight text-white mb-2">
                <Counter value={26} suffix="" />
              </div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Topper Batches</p>
            </div>
            <div className="text-center p-6 bg-white/[0.02] rounded-xl border border-white/5">
              <div className="text-4xl md:text-6xl font-black tracking-tight text-white mb-2">
                <Counter value={1997} suffix="" />
              </div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Legacy Started</p>
            </div>
          </div>
        </section>

        {/* =========================================
           SECTION 5: STUDENT DEVELOPMENT (Horizontal 3D Loop Carousel)
           ========================================= */}
        <section ref={studentDevRef} className="mb-12 relative">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase mb-4 text-center">
              Student Development
            </h2>
            <p className="text-neutral-400 font-light text-center max-w-lg mt-2">
              Expanding student capabilities outside the standard curriculum. Scroll to scrub or use controls to browse workshops, clubs, guest lectures, and achievements.
            </p>
            <div className="h-[2px] w-20 bg-gradient-to-r from-purple-500 to-teal-500 mt-6" />
          </div>

          {/* Seamless Carousel Component */}
          <div className="gallery">
            <ul className="cards">
              {devItems.map((item, idx) => (
                <li key={idx} className="group">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {/* Badge / Category */}
                      <div className="flex justify-between items-center mb-6">
                        <span 
                          className="text-[0.65rem] font-bold tracking-widest px-3 py-1.5 rounded-md uppercase text-black"
                          style={{ backgroundColor: item.themeColor }}
                        >
                          {item.category}
                        </span>
                        <Sparkles className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                      </div>

                      <h3 className="text-xl font-bold uppercase tracking-tight text-white leading-snug group-hover:text-orange-400 transition-colors mb-3">
                        {item.title}
                      </h3>
                      
                      <p className="text-neutral-400 font-light text-xs md:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 text-[0.7rem] text-neutral-500">
                      <span className="uppercase font-bold tracking-widest text-[0.6rem] text-white/60 block mb-1">Details &amp; Records</span>
                      <span className="text-neutral-300 font-light leading-relaxed block max-h-20 overflow-y-auto no-scrollbar">
                        {item.detail}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="actions">
              <button className="prev">Prev</button>
              <button className="next">Next</button>
            </div>
          </div>
        </section>
        
      </div>

      {/* =========================================
         MODAL / INTERACTIVE LIST DISPLAY OVERLAY
         ========================================= */}
      {isTopperModalOpen && (
        <div className="fixed inset-0 z-[11000] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6 overflow-hidden">
          <button
            onClick={() => setIsTopperModalOpen(false)}
            className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-full max-w-6xl max-h-[85vh] grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
            
            <div className="lg:col-span-6 flex flex-col justify-center min-h-[450px]">
              <div className="mb-4">
                <h3 className="text-2xl font-black uppercase text-white tracking-tight">Academic Honor Roll</h3>
                <p className="text-xs text-neutral-400 uppercase tracking-widest mt-1">
                  Keyboard navigate with Arrow keys / Tab or hover to inspect.
                </p>
              </div>

              <AnimatedList
                items={topperItemsList}
                onItemSelect={handleTopperSelect}
                showGradients={true}
                enableArrowNavigation={true}
                displayScrollbar={true}
                initialSelectedIndex={0}
                className="w-full"
                itemClassName="hover:bg-white/[0.05]"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center items-center">
              <div className="relative w-full max-w-md rounded-2xl bg-gradient-to-b from-[#16121D] to-black border border-white/10 p-8 md:p-10 shadow-2xl text-center flex flex-col justify-between h-[450px] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-500 to-orange-500 p-0.5 flex items-center justify-center mb-6 shadow-lg">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-yellow-500">
                      <GraduationCap className="w-10 h-10" />
                    </div>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full mb-4">
                    Batch Topper Merit
                  </span>

                  <h4 className="text-2xl md:text-3xl font-extrabold uppercase text-white leading-tight tracking-tight max-w-xs mb-3">
                    {listToppers[selectedTopperIndex]?.name || "Topper Name"}
                  </h4>
                  
                  <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-6">
                    Pin: {listToppers[selectedTopperIndex]?.pin || "PIN"}
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-center">
                  <div>
                    <span className="text-[0.6rem] font-bold text-neutral-500 tracking-widest uppercase block text-left">BATCH PERIOD</span>
                    <span className="text-sm font-bold text-white uppercase">{listToppers[selectedTopperIndex]?.batch}</span>
                  </div>
                  <div>
                    <span className="text-[0.6rem] font-bold text-neutral-500 tracking-widest uppercase block text-right">PERCENTAGE</span>
                    <span className="text-lg font-black text-green-400">{listToppers[selectedTopperIndex]?.percentage}%</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}
