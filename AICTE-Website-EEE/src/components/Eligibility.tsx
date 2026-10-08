import React from "react";
import { GraduationCap, FlaskConical, BookOpen, Briefcase, CheckCircle2, UserCheck } from "lucide-react";
import { WORKSHOP_DATA } from "@/data/workshopData";

const categoryIcons = [GraduationCap, FlaskConical, BookOpen, Briefcase];

export default function Eligibility() {
  return (
    <section
      className="py-20 md:py-24 border-b bg-slate-50/20 dark:bg-white/[0.015] border-slate-200/60 dark:border-white/8 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="section-badge">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Participant Profile</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Eligibility Criteria
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Open to faculty, researchers, post-graduate students, and semiconductor industry stakeholders nationwide.
          </p>
        </div>

        {/* 4 Eligibility Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {WORKSHOP_DATA.eligibility.map((item, idx) => {
            const Icon = categoryIcons[idx] || UserCheck;
            return (
              <div
                key={idx}
                className="clean-card p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-2">
                    {item.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 dark:text-blue-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Eligible Participant</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selection Policy Banner */}
        <div className="p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse shrink-0" />
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">
              <strong className="font-semibold text-slate-900 dark:text-white">Selection Policy:</strong> Candidates are admitted on a strict{" "}
              <span className="text-blue-700 dark:text-blue-400 font-bold">First-Come, First-Served</span> basis up to the intake limit of 50 participants.
            </p>
          </div>
          <span className="px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-bold shrink-0 shadow-xs">
            50 SEATS INTAKE
          </span>
        </div>
      </div>
    </section>
  );
}
