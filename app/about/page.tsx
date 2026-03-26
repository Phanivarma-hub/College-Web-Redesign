"use client"

import React from "react";
import { PillBase } from "@/components/ui/3d-adaptive-navigation-bar";
import { RiseUp } from "@/components/ui/rise-up";
import { ArrowRight, Users, Target, BookOpen, Globe, Award, Briefcase, Network, Info, School, FileCheck, Landmark } from "lucide-react";
import { LeadershipStack } from "@/components/ui/glass-cards";

export default function AboutPage() {

  const programs = [
    { code: "CME", name: "Diploma in Computer Engineering", seats: 240, color: "text-purple-400" },
    { code: "ECE", name: "Diploma in Electronics & Communication Engineering", seats: 240, color: "text-orange-400" },
    { code: "EEE", name: "Diploma in Electrical and Electronics Engineering", seats: 120, color: "text-green-400" },
  ];

  const missionItems = [
    "Achieve academic excellence through innovative learning practices",
    "Build confidence among rural students",
    "Promote discipline and values",
    "Strengthen industry partnerships",
    "Support economically weaker sections",
    "Encourage self-employment and skill development",
    "Promote environmentally sustainable practices",
    "Foster innovation through dedicated hubs"
  ];

  const leadershipData = [
    {
      id: 6,
      name: "Dr. G. Srinivasa Rao",
      role: "Director",
      img: "https://seethapoly.edu.in/wp-content/uploads/2025/07/Principal2-1.jpg",
      bio: "With over 32 years of academic experience, he has successfully executed R&D projects worth 8 Cr. He leads institutional development and technology business incubation with global exposure.",
      color: "rgba(163, 163, 163, 0.8)" // Neutral/Silver
    },
    {
      id: 5,
      name: "Kalidindi Sai Sumant",
      role: "Joint Secretary",
      img: "https://seethapoly.edu.in/wp-content/uploads/2024/04/IMG-20240413-WA0004-200x300.jpg",
      bio: "Materials Science engineer from Penn State and MBA from UC Irvine. Expert in synthesized dental ceramics with US patents. Serves as Executive Director at Anjani Tiles, bringing R&D expertise to institutional development.",
      color: "rgba(59, 130, 246, 0.8)" // Blue
    },
    {
      id: 4,
      name: "Aditya Vissam",
      role: "Secretary",
      img: "https://seethapoly.edu.in/wp-content/uploads/2021/01/SECRETARY-IMAGE.jpg",
      bio: "An Industrial Engineer from Penn State and MBA from Imperial College London. Brings global experience from Amazon and Office Depot. Focuses on future skills, teaching pedagogy innovations, and disruptions in higher education.",
      color: "rgba(34, 197, 94, 0.8)" // Green
    },
    {
      id: 3,
      name: "Sri Ravichandran Rajagopal",
      role: "Vice Chairman",
      img: "https://seethapoly.edu.in/wp-content/uploads/2025/08/Screenshot_2025-08-02-11-43-46-85_99c04817c0de5652397fc8b56c3b3817-199x300.jpg",
      bio: "An alumnus of NIT Trichy and IIM Calcutta, he combines engineering expertise with management excellence. He aspires to bring a change in the educational sector by providing governance and translating founder visions into actionable goals.",
      color: "rgba(99, 102, 241, 0.8)" // Indigo
    },
    {
      id: 2,
      name: "Sri K. V. Vishnu Raju",
      role: "Chairman",
      img: "https://seethapoly.edu.in/wp-content/uploads/2020/03/chairman.jpg",
      bio: "An accomplished chemical engineer with global exposure and leadership in polymers and ceramics. He continues to lead Sri Vishnu Educational Society with a focus on innovation, research, and future-ready education, pinning big bets on research parks to empower students.",
      color: "rgba(168, 85, 247, 0.8)" // Purple
    },
    {
      id: 1,
      name: "Padma Bhushan Dr. B. V. Raju",
      role: "Founder Chairman",
      img: "https://seethapoly.edu.in/wp-content/uploads/2020/01/founder-1.png",
      bio: "A visionary leader who rose from humble beginnings to become a pioneer in the cement industry, Dr. Raju believed education was the key to human development. He played a major role in establishing industries and educational institutions across India. He was honored with Padma Shri (1977) and Padma Bhushan (2001).",
      color: "rgba(249, 115, 22, 0.8)" // Orange
    }
  ];

  const governingBody = [
    { name: "Sri K.V. Vishnu Raju", role: "Chairman", category: "Management" },
    { name: "Sri R. Ravichandran", role: "Member", category: "Management" },
    { name: "Sri Aditya Vissam", role: "Member", category: "Management" },
    { name: "Sri K. Sai Sumant", role: "Member", category: "Management" },
    { name: "Dr. G. Srinivasa Rao", role: "Member", category: "Management" },
    { name: "SBTET Nominee", role: "Member", category: "Nominated by Board" },
    { name: "AICTE Nominee", role: "Member", category: "Nominated by AICTE" },
    { name: "State Govt. Nominee", role: "Member", category: "Nominated by State Govt." },
    { name: "Sri Ch. Rama Krishna", role: "Member Secretary", category: "Principal" },
    { name: "Management Nominee", role: "Member", category: "Nominated by Management" },
    { name: "Academic Expert", role: "Member", category: "Institutional Council" },
  ];

  const responsibilities = [
    { title: "Intake Decisions", desc: "Strategic planning for academic capacity and student enrollment optimization." },
    { title: "Budget Approval", desc: "Overseeing financial allocations for infrastructure and technological development." },
    { title: "Academic Review", desc: "Maintaining institutional excellence through regular pedagogical audits." },
    { title: "Resource Mobilization", desc: "Strategic sourcing of advanced lab equipment and specialized faculty." },
    { title: "Planning Board", desc: "Implementing roadmap initiatives for institutional growth and R&D." },
    { title: "Stakeholder Feedback", desc: "Integrating input from industry, parents, and alumni for continuous improvement." }
  ];

  return (
    <main className="relative min-h-screen">

      <PillBase />

      {/* Hero-like offset for global nav if needed */}
      <div className="relative z-10 bg-black/80 pt-32 pb-24 selection:bg-white selection:text-black shadow-[0_50px_100px_rgba(0,0,0,0.9)]">
        <div className="max-w-7xl mx-auto px-6">

          {/* SECTION 1: OVERVIEW */}
          <section id="overview" className="scroll-mt-32">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <RiseUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-widest uppercase mb-6">
                  <Globe size={14} /> Institution Identity
                </div>
                <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none text-white">
                  ABOUT<br /><span className="text-neutral-500">COLLEGE</span>
                </h1>
                <div className="space-y-6 text-xl text-neutral-400 leading-relaxed font-medium">
                  <p>
                    Smt. B. Seetha Polytechnic was established on 9th December 1997 at Vishpnpur, Bhimavaram, West Godavari District, Andhra Pradesh by <span className="text-white">Sri Vishnu Educational Society (SVES)</span>, founded in 1992 by Padma Bhushan Dr. B. V. Raju.
                  </p>
                  <p>
                    The institution was established with a vision to provide quality technical education to rural students. Spread across a modern 50,000 sq.ft. building with state-of-the-art laboratories and a rich library, the college has consistently achieved excellent results.
                  </p>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 font-black">27+</div>
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest leading-relaxed">
                      Years of legacy in technical education excellence • Started co-education in 2000
                    </p>
                  </div>
                </div>
              </RiseUp>

              <div className="space-y-8">
                <RiseUp delay={0.2}>
                  <div className="p-8 rounded-[2.5rem] bg-neutral-900 border border-white/10">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                      <BookOpen className="text-purple-400" size={24} /> Programs Snapshot
                    </h3>
                    <div className="grid gap-4">
                      {programs.map((p) => (
                        <div key={p.code} className="flex items-center justify-between p-4 rounded-2xl bg-[#0a0a0a] border border-white/5 group hover:border-white/10 transition-colors">
                          <div>
                            <span className={`text-sm font-black ${p.color}`}>{p.code}</span>
                            <p className="text-white font-medium">{p.name}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-black text-white">{p.seats}</span>
                            <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Seats</p>
                          </div>
                        </div>
                      ))}
                      <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center px-2">
                        <span className="text-neutral-500 text-xs font-bold uppercase tracking-widest">College Code: SSBV</span>
                        <div className="text-right">
                          <span className="text-lg font-black text-white">600 Total Intake</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </RiseUp>

                <RiseUp delay={0.3}>
                  <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-green-400">
                      <Target size={24} /> Vision & Mission
                    </h3>
                    <p className="text-neutral-300 mb-6 italic">&quot;Transform the society through excellence in Education, Community empowerment and sustained Environmental protection.&quot;</p>
                    <ul className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                      {missionItems.map((m, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-neutral-400 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </RiseUp>
              </div>
            </div>
          </section>

          <div className="h-px bg-neutral-800 my-24" />

          {/* SECTION 2: ABOUT SOCIETY */}
          <section id="society" className="scroll-mt-32">
            <RiseUp>
              <div className="p-10 md:p-16 rounded-[3.5rem] bg-neutral-900 border border-neutral-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent pointer-events-none" />
                <div className="relative z-10 grid lg:grid-cols-5 gap-16 items-center">
                  <div className="lg:col-span-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6 text-white">
                      <Award size={14} /> Sri Vishnu Educational Society
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none uppercase text-white">
                      Foundation of <br /><span className="text-purple-500">Excellence</span>
                    </h2>
                    <div className="space-y-6 text-lg text-neutral-400 leading-relaxed font-medium">
                      <p>
                        Founded in 1992 by the legendary Padma Bhushan Dr. B. V. Raju, Sri Vishnu Educational Society (SVES) has become a benchmark for technical and professional education in Andhra Pradesh and Telangana.
                      </p>
                      <p>
                        Through the <span className="text-white">Dr. B. V. Raju Foundation</span>, the society extends its mission beyond education to impactful social initiatives, community healthcare, and rural empowerment. SVES manages over 12 institutions, creating a massive scale of institutional impact focused on innovation and values.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-10">
                      <a 
                        href="https://www.srivishnu.edu.in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <button className="px-8 py-3 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-neutral-200 transition-all border border-white">
                          Visit SVES Website <ArrowRight size={18} />
                        </button>
                      </a>
                  </div>
                </div>
                <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center p-6 text-center shadow-2xl">
                    <Users className="text-purple-400 mb-3" size={40} />
                    <span className="text-3xl font-black block text-white">12+</span>
                    <span className="text-[10px] text-neutral-500 font-black uppercase tracking-widest">Institutions</span>
                  </div>
                  <div className="aspect-square rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center p-6 text-center shadow-2xl">
                    <Network className="text-orange-400 mb-3" size={40} />
                    <span className="text-3xl font-black block text-white">100k+</span>
                    <span className="text-[10px] text-neutral-500 font-black uppercase tracking-widest">Alumni Network</span>
                  </div>
                </div>
              </div>
            </div>
          </RiseUp>
        </section>

        <div className="h-px bg-neutral-800 my-24" />

        {/* SECTION 3: LEADERSHIP */}
        <section id="leadership" className="mb-48">
          <LeadershipStack leaders={leadershipData} />
        </section>

        <div className="h-px bg-neutral-800 my-24" />

        {/* SECTION 4: GOVERNANCE */}
        <section id="governance" className="scroll-mt-32">
          <RiseUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold tracking-widest uppercase mb-4">
                  <Network size={14} /> Structural Integrity
                </div>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase text-white">
                  Govern<span className="text-neutral-500">ance</span>
                </h2>
              </div>
            </div>
          </RiseUp>

          <div className="mb-20">
            <div className="space-y-8">
              <RiseUp delay={0.1}>
                <div className="rounded-[2.5rem] bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl">
                  <div className="p-8 border-b border-neutral-800 flex justify-between items-center bg-white/[0.02]">
                    <h3 className="text-2xl font-bold tracking-tight text-white">Governing Body</h3>
                    <div className="px-3 py-1 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-neutral-500">Academic Year 2025-26</div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-[#080808] text-neutral-600 text-[10px] uppercase font-black">
                        <tr>
                          <th className="px-8 py-4">Name</th>
                          <th className="px-8 py-4">Role</th>
                          <th className="px-8 py-4">Category</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-800/40">
                        {governingBody.map((m, i) => (
                          <tr key={i} className="hover:bg-white/[0.01] transition-colors">
                            <td className="px-8 py-5 text-white font-bold text-sm whitespace-nowrap">{m.name}</td>
                            <td className="px-8 py-5 text-neutral-400 text-xs">{m.role}</td>
                            <td className="px-8 py-5 text-neutral-500 text-[10px] font-black uppercase italic tracking-wider whitespace-nowrap">{m.category}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </RiseUp>
            </div>
          </div>

          {/* STRATEGIC RESPONSIBILITIES */}
          <div className="mb-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {responsibilities.map((res, i) => (
                <RiseUp key={i} delay={0.1 * i}>
                  <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all group/res">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center mb-6 group-hover/res:bg-green-500 group-hover/res:text-white transition-all">
                      <FileCheck size={20} />
                    </div>
                    <h4 className="text-lg font-black text-white mb-2 uppercase tracking-tighter">{res.title}</h4>
                    <p className="text-sm text-neutral-500 font-medium leading-relaxed">{res.desc}</p>
                  </div>
                </RiseUp>
              ))}
            </div>
          </div>

          {/* HIERARCHY MAP */}
          <RiseUp>
            <div className="p-12 md:p-16 rounded-[4rem] bg-neutral-900 border border-neutral-800 relative overflow-hidden group/chart">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 text-white">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-widest uppercase mb-6">
                    <Network size={14} /> SBSP Connected Hierarchy
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-6">
                    ARCHITECTURAL<br />HIERARCHY
                  </h3>
                  <p className="text-neutral-500 font-medium">
                    Our integrated structural framework ensures seamless communication between boards, administrative bodies, and academic departments.
                  </p>
                </div>
              </div>

              {/* THE MAP FLOW (React-built) */}
              <div className="relative flex flex-col items-center text-white">
                {/* Tier 1 */}
                <div className="relative z-10 w-64 p-6 bg-neutral-900 border border-white/10 rounded-xl text-center shadow-2xl">
                  <h4 className="text-sm font-black uppercase tracking-widest mb-1">Governing Body</h4>
                  <p className="text-[8px] text-neutral-500 font-bold uppercase tracking-widest">Management Board</p>
                </div>

                <div className="h-12 w-px bg-white/10" />

                {/* Tier 2 Container */}
                <div className="w-full flex justify-center items-center gap-12">
                  <div className="flex flex-col gap-4 items-end">
                    <div className="w-40 p-3 bg-neutral-950 border border-neutral-800 rounded-lg text-right group/box transition-all hover:border-white/20">
                      <span className="text-[9px] font-black uppercase text-neutral-500 group-hover/box:text-white transition-colors">Academic Council</span>
                    </div>
                    <div className="w-40 p-3 bg-neutral-950 border border-neutral-800 rounded-lg text-right group/box transition-all hover:border-white/20">
                      <span className="text-[9px] font-black uppercase text-neutral-500 group-hover/box:text-white transition-colors">Board of Studies</span>
                    </div>
                  </div>

                  <div className="relative z-10 w-72 p-8 bg-neutral-950 border border-white/20 rounded-2xl text-center shadow-2xl ring-1 ring-white/5">
                    <span className="text-[9px] font-black uppercase tracking-widest text-neutral-500 mb-2 block">Executive Head</span>
                    <h4 className="text-2xl font-black uppercase text-white">Principal</h4>
                  </div>

                  <div className="flex flex-col gap-4 items-start">
                    <div className="w-40 p-3 bg-neutral-950 border border-neutral-800 rounded-lg group/box transition-all hover:border-white/20">
                      <span className="text-[9px] font-black uppercase text-neutral-500 group-hover/box:text-white transition-colors">Finance Committee</span>
                    </div>
                    <div className="w-40 p-3 bg-neutral-950 border border-neutral-800 rounded-lg group/box transition-all hover:border-white/20">
                      <span className="text-[9px] font-black uppercase text-neutral-500 group-hover/box:text-white transition-colors">IQAC Committee</span>
                    </div>
                  </div>
                </div>

                <div className="h-16 w-px bg-white/10" />

                {/* Tier 3: The 4 Columns */}
                <div className="w-full grid md:grid-cols-4 gap-6">
                  {[
                    { title: "Departments", icon: <School size={16} />, items: ["HoDs", "Faculty", "Technical Staff", "Supporting Staff"] },
                    { title: "Examination", icon: <FileCheck size={16} />, items: ["Exam Cell Co-ordinator", "In-house Exam Committee", "Evaluators"] },
                    { title: "Admin Office", icon: <Landmark size={16} />, items: ["Admission Section", "Accounts Section", "Students Welfare", "Establishment"] },
                    { title: "Auxiliary", icon: <Briefcase size={16} />, items: ["Placements & Training", "Library Management", "Physical Education", "Hostels & Canteen"] }
                  ].map((col, idx) => (
                    <div key={idx} className="p-6 bg-neutral-950/50 border border-white/5 rounded-3xl hover:border-white/10 transition-colors group/col">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center group-hover/col:bg-orange-500 group-hover/col:text-white transition-all">
                          {col.icon}
                        </div>
                        <h5 className="text-xs font-black uppercase tracking-widest text-white">{col.title}</h5>
                      </div>
                      <ul className="space-y-3">
                        {col.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className="w-1 h-3 bg-neutral-800 rounded-full group-hover/col:bg-neutral-600 transition-colors" />
                            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-tighter">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 text-center">
                <p className="text-[10px] text-neutral-700 font-bold uppercase tracking-[0.3em]">Institutional Power Hierarchy • Validated 2025</p>
              </div>
            </div>
          </RiseUp>
        </section>
      </div>
    </div>
    </main>
  );
}
