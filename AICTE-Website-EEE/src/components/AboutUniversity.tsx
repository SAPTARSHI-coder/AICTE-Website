import React from "react";
import Image from "next/image";
import { Landmark, MapPin, Award } from "lucide-react";

const STATS = [
  { value: "120 Acres", label: "Green Campus", sub: "Barasat, Kolkata" },
  { value: "7,500+", label: "Current Students", sub: "UG & PG Cohort" },
  { value: "~2,000", label: "Residents", sub: "Scholars & Faculty" },
  { value: "10 Schools", label: "Schools of Studies", sub: "Interdisciplinary" },
  { value: "10th Year", label: "Academic Journey", sub: "Excellence & Growth" },
  { value: "13 km", label: "To Airport", sub: "NSCBI International" },
];

export default function AboutUniversity() {
  return (
    <section className="py-20 md:py-28 border-b bg-transparent border-slate-200/60 dark:border-white/8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="section-badge">
            <Landmark className="w-3.5 h-3.5" />
            <span>Host Institution</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            About Adamas University
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Adamas Knowledge City, Barasat – Barrackpore Road, Jagannathpur, Kolkata, West Bengal 700126
          </p>
        </div>

        {/* Narrative + Aerial Photograph Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          <div className="lg:col-span-6 space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
              <Award className="w-3.5 h-3.5" />
              <span>NAAC A Grade Accredited University</span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white leading-snug">
              Imparting World-Class Education with Advanced Research Infrastructure
            </h3>
            <p>
              Adamas University, with a sprawling green campus extending over <strong className="text-slate-900 dark:text-white font-semibold">120 acres</strong>, nestled in Barasat (13 kms away from the Netaji Subhash Chandra Bose International Airport, Kolkata), and in its 10th year of operation, aspires to impart the finest quality education to the young minds of West Bengal.
            </p>
            <p>
              The University boasts established high-quality research facilities and a powerful team of renowned teachers. It has spearheaded numerous international initiatives, actively collaborating with leading high-tech industries and premier educational institutes worldwide to facilitate projects, advanced research, and student exchange programs.
            </p>
            <p>
              Currently, the campus hosts <strong className="text-slate-900 dark:text-white font-semibold">7500+ students</strong> and approximately <strong className="text-slate-900 dark:text-white font-semibold">2000 resident students and faculty members</strong> across its 10 Schools of Studies.
            </p>
          </div>

          {/* Aerial Campus Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 group aspect-[4/3]">
              <Image
                src="/images/campus-aerial.png"
                alt="Aerial panoramic photograph of Adamas University 120-acre green campus"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-5 text-white">
                <div className="flex items-center gap-1.5 text-sky-300 text-xs font-mono uppercase tracking-wider mb-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Adamas Knowledge City Campus</span>
                </div>
                <p className="font-display font-semibold text-sm sm:text-base">
                  120-Acre Lush Green Integrated Educational Ecosystem
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Clean Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {STATS.map((s, idx) => (
            <div key={idx} className="clean-card p-4 sm:p-5 text-center">
              <p className="font-display font-extrabold text-xl text-blue-700 dark:text-blue-400">
                {s.value}
              </p>
              <p className="font-display font-semibold text-xs sm:text-sm text-slate-900 dark:text-white mt-1">
                {s.label}
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
