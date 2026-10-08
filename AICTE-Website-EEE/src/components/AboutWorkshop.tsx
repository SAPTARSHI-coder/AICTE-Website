import React from "react";
import { Cpu, Layers, Sparkles, Network, ArrowRight, CheckCircle2 } from "lucide-react";

const PILLARS = [
  {
    icon: Cpu,
    title: "IC Design & Methodologies",
    description:
      "Modern IC design flows, low-power and high-performance architectures, System-on-Chip (SoC) integration, and advanced chiplet packaging.",
    tag: "TRACK 01 // HARDWARE",
  },
  {
    icon: Layers,
    title: "EDA Tools & Workflows",
    description:
      "Cutting-edge Electronic Design Automation toolchains, synthesis pipelines, static timing analysis, and physical implementation workflows.",
    tag: "TRACK 02 // AUTOMATION",
  },
  {
    icon: Sparkles,
    title: "AI-Driven Chip Design",
    description:
      "Neural accelerators, AI-driven physical design optimization, automated floorplanning, and the impact of generative AI in VLSI.",
    tag: "TRACK 03 // INTELLIGENCE",
  },
  {
    icon: Network,
    title: "Industry & Ecosystem Bridge",
    description:
      "India's semiconductor mission, industry testing, post-silicon validation, career roadmaps, and research opportunities across the ecosystem.",
    tag: "TRACK 04 // INDUSTRY",
  },
];

export default function AboutWorkshop() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 border-b bg-transparent border-slate-200/60 dark:border-white/8 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic &amp; Technical Scope</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            About the Workshop
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The two-day workshop on{" "}
            <strong className="text-slate-900 dark:text-white font-semibold">
              &ldquo;Emerging Trends in Semiconductor IC Design: Industry, Innovation, and Future Technologies in Bengali&rdquo;
            </strong>
            , scheduled for <strong className="text-blue-700 dark:text-blue-400">05 &amp; 06 November 2026</strong>, provides participants with a comprehensive overview of the rapidly evolving semiconductor landscape.
          </p>
        </div>

        {/* Narrative Block */}
        <div className="clean-card p-6 sm:p-10 mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              The workshop highlights recent advancements in{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">IC design methodologies</strong>,{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">EDA tools</strong>,{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">low-power and high-performance architectures</strong>,{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">System-on-Chip (SoC)</strong>,{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">AI-driven chip design</strong>,{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">chiplet technologies</strong>, and next-generation semiconductor innovations.
            </p>
            <p>
              It brings together academicians, researchers, industry experts, engineers, and students to share knowledge, discuss current industry practices and challenges, and explore emerging research areas. The workshop provides valuable insights into the growing semiconductor ecosystem, skill requirements, career opportunities, and future technologies—thereby helping participants bridge the gap between academic knowledge and industrial applications.
            </p>
          </div>

          {/* Quick Highlights Box */}
          <div className="p-5 sm:p-6 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-3">
                Key Highlights
              </span>
              <ul className="space-y-3">
                {[
                  "Demystify complex VLSI through Bengali instruction",
                  "Direct interaction with leaders from GlobalFoundries, HPE, M31",
                  "Official AICTE-VAANI E-Certificate (≥80% attendance)",
                  "50 verified seats — first-come, first-served",
                ].map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="clean-card p-6 flex flex-col justify-between group">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                    {p.tag}
                  </span>
                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
