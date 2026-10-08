"use client";

import React, { useState } from "react";
import { ExternalLink, Award, CheckCircle2, Copy, Check, Key } from "lucide-react";
import { WORKSHOP_DATA } from "@/data/workshopData";

export default function Registration() {
  const [copied, setCopied] = useState(false);

  const copyAppId = () => {
    navigator.clipboard.writeText(WORKSHOP_DATA.registration.applicationId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const specs = [
    { label: "Total Capacity", value: "50 Seats", sub: "Strict Intake" },
    { label: "Registration Fee", value: "NIL (Free)", sub: "100% Sponsored" },
    { label: "Last Date", value: "31 Oct 2026", sub: "Final Deadline" },
    { label: "Session Timing", value: "9:30 – 5:30 PM", sub: "Both Days" },
    { label: "Host Campus", value: "Adamas Univ.", sub: "Barasat, Kolkata" },
    { label: "Event Format", value: "Offline", sub: "Interactive Labs" },
  ];

  return (
    <section
      id="registration"
      className="py-20 md:py-28 border-b bg-transparent border-slate-200/60 dark:border-white/8 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="section-badge">
            <Key className="w-3.5 h-3.5" />
            <span>Admission &amp; Enrollment</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Registration Information
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Official application procedure via AICTE ATAL Academy Portal
          </p>
        </div>

        {/* Main Enrollment Card */}
        <div className="clean-card p-6 sm:p-10 mb-10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>OFFICIAL PORTAL ENROLLMENT OPEN</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-snug">
                Apply Exclusively via AICTE ATAL Academy Portal
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                As per official AICTE-VAANI guidelines, registration is allowed{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">only through the ATAL Academy portal</strong>. Participants are admitted on a strict{" "}
                <strong className="text-blue-700 dark:text-blue-400 font-semibold">first-come, first-served</strong> basis up to the intake limit of 50 seats.
              </p>

              {/* Application Number Box with Copy */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono block">
                    ATAL Application ID (search on portal):
                  </span>
                  <span className="font-mono font-extrabold text-2xl text-blue-700 dark:text-blue-400 tracking-wider">
                    {WORKSHOP_DATA.registration.applicationId}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyAppId}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 border border-slate-200 dark:border-white/10 text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 transition-colors shadow-xs"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied ID!" : "Copy Application ID"}</span>
                </button>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={WORKSHOP_DATA.registration.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-bold text-sm uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all"
                >
                  <span>REGISTER ON ATAL PORTAL</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={WORKSHOP_DATA.registration.participantUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-semibold text-xs sm:text-sm uppercase tracking-wider text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-white/10 shadow-xs transition-all"
                >
                  <span>Direct FDP Catalog &amp; Sign Up</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Certification Criteria */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/40 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-blue-700 dark:text-blue-300">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                  Mandatory Certification Criteria
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  &ldquo;E-Certificate will be issued by AICTE-VAANI to all participants having attendance more than 80% and qualifying the post-session MCQ evaluation.&rdquo;
                </p>
                <div className="flex items-center gap-2 text-xs font-mono font-medium text-blue-700 dark:text-blue-300 pt-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Officially Verified Digital Credential</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Specs Grid */}
          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {specs.map((s, idx) => (
              <div key={idx} className="text-center">
                <p className="font-display font-extrabold text-base sm:text-lg text-blue-700 dark:text-blue-400">
                  {s.value}
                </p>
                <p className="font-display font-semibold text-xs text-slate-900 dark:text-white mt-0.5">
                  {s.label}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Portal Workflow */}
        <div className="clean-card p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-white/5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1.5">
                <span>Guided Walkthrough</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                Steps to Register on ATAL Portal
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              Follow these 5 simple steps to submit your official application before the 31 Oct deadline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Step 1 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between hover:border-blue-400/60 dark:hover:border-blue-500/60 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-display font-extrabold text-xs flex items-center justify-center ring-2 ring-blue-500/10">
                    01
                  </span>
                  <span className="text-[10px] font-mono font-semibold uppercase text-slate-400 dark:text-slate-500">
                    Portal
                  </span>
                </div>
                <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-2">
                  Access ATAL Portal
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Open the official AICTE ATAL Academy portal login page.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200/60 dark:border-white/5">
                <a
                  href={WORKSHOP_DATA.registration.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <span>Open Portal Login</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between hover:border-blue-400/60 dark:hover:border-blue-500/60 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-display font-extrabold text-xs flex items-center justify-center ring-2 ring-blue-500/10">
                    02
                  </span>
                  <span className="text-[10px] font-mono font-semibold uppercase text-slate-400 dark:text-slate-500">
                    Auth
                  </span>
                </div>
                <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-2">
                  Sign In / Register
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Log in with your existing account, or register as a new participant.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200/60 dark:border-white/5">
                <span className="inline-block text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  New users: Free registration
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between hover:border-blue-400/60 dark:hover:border-blue-500/60 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-display font-extrabold text-xs flex items-center justify-center ring-2 ring-blue-500/10">
                    03
                  </span>
                  <span className="text-[10px] font-mono font-semibold uppercase text-slate-400 dark:text-slate-500">
                    Catalog
                  </span>
                </div>
                <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-2">
                  Open FDP Catalog
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Navigate to participant view and click the <strong>&lsquo;FDP&rsquo;</strong> tab.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200/60 dark:border-white/5">
                <a
                  href={WORKSHOP_DATA.registration.participantUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <span>Go to FDP Catalog &amp; Sign Up</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between hover:border-blue-400/60 dark:hover:border-blue-500/60 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-display font-extrabold text-xs flex items-center justify-center ring-2 ring-blue-500/10">
                    04
                  </span>
                  <span className="text-[10px] font-mono font-semibold uppercase text-slate-400 dark:text-slate-500">
                    Filters
                  </span>
                </div>
                <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-2">
                  Apply Filters
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                  Select these 3 catalog filters:
                </p>
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50">
                    Scheme: Vaani
                  </span>
                  <span className="inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300">
                    Nov 2026
                  </span>
                  <span className="inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200/50 dark:border-amber-800/50">
                    Semiconductor
                  </span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200/60 dark:border-white/5">
                <span className="text-[11px] text-slate-400 dark:text-slate-500">
                  Quick domain filter
                </span>
              </div>
            </div>

            {/* Step 5 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between hover:border-blue-400/60 dark:hover:border-blue-500/60 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-display font-extrabold text-xs flex items-center justify-center ring-2 ring-blue-500/10">
                    05
                  </span>
                  <span className="text-[10px] font-mono font-semibold uppercase text-emerald-600 dark:text-emerald-400">
                    Submit
                  </span>
                </div>
                <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-2">
                  Select &amp; Apply
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  Locate Adamas University workshop and click Apply.
                </p>
                <div className="p-2 rounded-lg bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 mb-2">
                  <span className="block text-[10px] font-mono uppercase text-blue-600 dark:text-blue-400">
                    Application ID
                  </span>
                  <span className="font-mono font-bold text-xs text-slate-900 dark:text-white">
                    {WORKSHOP_DATA.registration.applicationId}
                  </span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={copyAppId}
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy ID</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
