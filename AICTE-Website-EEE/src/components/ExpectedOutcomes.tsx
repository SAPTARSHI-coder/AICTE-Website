import React from "react";
import { CheckCircle2 } from "lucide-react";
import { WORKSHOP_DATA } from "@/data/workshopData";

export default function ExpectedOutcomes() {
  return (
    <section
      className="py-20 md:py-28 border-b bg-transparent border-slate-200/60 dark:border-white/8 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="section-badge">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Assessment Metrics</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Expected Learning Outcomes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Upon successful completion of the two-day rigorous module track, participants will have attained verified competencies:
          </p>
        </div>

        {/* 10 Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {WORKSHOP_DATA.outcomes.map((outcome, idx) => (
            <div
              key={idx}
              className="clean-card p-5 sm:p-6 flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-mono tracking-wider font-semibold text-blue-700 dark:text-blue-400 uppercase block mb-1">
                  Outcome {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-[15px] leading-relaxed">
                  {outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
