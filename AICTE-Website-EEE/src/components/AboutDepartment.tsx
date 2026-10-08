import React from "react";
import {
  Cpu, Zap, Radio, Bot, Activity, Car, Lightbulb, BookOpen, Layers,
} from "lucide-react";

const DOMAINS = [
  { name: "Semiconductor Design", icon: Cpu },
  { name: "Power Systems", icon: Zap },
  { name: "Renewable Energy", icon: Lightbulb },
  { name: "Electronics", icon: Layers },
  { name: "Telecommunications", icon: Radio },
  { name: "Automation & PLC", icon: Bot },
  { name: "IoT & Smart Tech", icon: Activity },
  { name: "Robotics", icon: Bot },
  { name: "Biomedical Engg.", icon: Activity },
  { name: "Embedded Systems", icon: Cpu },
  { name: "Electric Vehicles", icon: Car },
  { name: "Smart Grid Tech", icon: Zap },
];

const PEDAGOGIES = [
  { title: "Practical Lab Training", desc: "State-of-the-art simulation & hardware prototyping labs." },
  { title: "Semester-wise Projects", desc: "Hands-on projects addressing real societal challenges." },
  { title: "Industrial Internships", desc: "Direct industry exposure and corporate networking." },
  { title: "Research & Publications", desc: "High-impact IEEE/Scopus publications and patents." },
];

export default function AboutDepartment() {
  return (
    <section
      className="py-20 md:py-28 border-b bg-slate-50/20 dark:bg-white/[0.015] border-slate-200/60 dark:border-white/8 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="section-badge">
            <Cpu className="w-3.5 h-3.5" />
            <span>Academic Department</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Department of Electrical &amp; Electronics Engineering
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            School of Engineering and Technology (SOET) · Adamas University, Kolkata
          </p>
        </div>

        {/* Narrative Block */}
        <div className="clean-card p-6 sm:p-10 mb-12 max-w-4xl mx-auto space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed text-center sm:text-left">
          <p>
            <strong className="text-slate-900 dark:text-white font-semibold">Electrical and Electronics Engineering (EEE)</strong> is a dynamic discipline that deals with the generation, transmission, distribution, control, and application of electrical and electronic technologies. The field encompasses an extensive spectrum of applications in semiconductor design, power systems, renewable energy, electronics, telecommunications, automation, IoT, robotics, biomedical engineering, embedded systems, electric vehicles, and smart technologies.
          </p>
          <p>
            The Department is committed to providing quality education through innovative teaching methodologies, practical laboratory training, semester-wise projects, industrial visits, workshops, internships, and deep industry interaction. Students develop technical expertise, problem-solving abilities, creativity, and professional skills through hands-on learning and real-world exposure.
          </p>
          <p>
            The Department actively promotes research and innovation through multidisciplinary projects, publications, conferences, and continuous interaction with industry and academic experts.
          </p>
        </div>

        {/* Domain Grid */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
              CORE FIELDS OF APPLICATION
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {DOMAINS.map((d, i) => {
              const Icon = d.icon;
              return (
                <div
                  key={i}
                  className="clean-card p-4 flex flex-col items-center text-center gap-2 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                    {d.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Pedagogical Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PEDAGOGIES.map((p, i) => (
            <div key={i} className="clean-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-blue-700 dark:text-blue-400 font-bold block mb-2">
                  {`0${i + 1} // FOCUS`}
                </span>
                <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2">
                  {p.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
