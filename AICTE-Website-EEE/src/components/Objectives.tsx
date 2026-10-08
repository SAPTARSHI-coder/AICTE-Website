import React from "react";
import { Target } from "lucide-react";
import { WORKSHOP_DATA } from "@/data/workshopData";

export default function Objectives() {
  return (
    <section
      id="objectives"
      className="py-20 md:py-28 border-b bg-slate-50/20 dark:bg-white/[0.015] border-slate-200/60 dark:border-white/8 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="section-badge">
            <Target className="w-3.5 h-3.5" />
            <span>Pedagogical Framework</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Workshop Objectives
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Designed specifically to calibrate engineering curricula with the technical demands of global semiconductor fabs and design houses.
          </p>
        </div>

        {/* 10 Numbered Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {WORKSHOP_DATA.objectives.map((obj, idx) => {
            const num = String(idx + 1).padStart(2, "0");
            return (
              <div
                key={idx}
                className="clean-card p-5 sm:p-6 flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center shrink-0 font-display font-extrabold text-sm text-blue-700 dark:text-blue-300">
                  {num}
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-[15px] leading-relaxed">
                    {obj}
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
