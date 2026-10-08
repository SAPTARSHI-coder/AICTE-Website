"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Clock,
  CheckCircle2,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-transparent text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-white/10 transition-colors duration-200"
    >
      {/* Soft frosted diffusion layer to ensure text has high contrast and zero distraction */}
      <div className="absolute inset-0 bg-white/35 dark:bg-[#050814]/25 backdrop-blur-[1px] pointer-events-none" />

      {/* Gentle radiant ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 60% 30%, rgba(219, 234, 254, 0.45), transparent 70%)",
        }}
      />
      <div
        className="hidden dark:block absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 60% 40%, rgba(30, 58, 138, 0.25), transparent 70%)",
        }}
      />

      {/* Subtle Semiconductor & Circuit SVG geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-0 right-0 w-[700px] h-[700px] opacity-[0.07] dark:opacity-[0.12]"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern id="circuits" patternUnits="userSpaceOnUse" width="160" height="160">
            <path
              d="M 10 10 L 50 10 L 70 30 L 130 30 M 70 30 L 70 80 L 110 120 L 150 120 M 30 150 L 30 100 L 60 70 M 130 150 L 130 110"
              fill="none"
              stroke="#2563eb"
              strokeLinecap="round"
              strokeWidth="1.2"
            />
            <circle cx="10" cy="10" fill="#2563eb" r="3" />
            <circle cx="150" cy="120" fill="#2563eb" r="3" />
            <circle cx="60" cy="70" fill="#2563eb" r="2.5" />
            <rect fill="none" height="24" stroke="#2563eb" strokeWidth="1" width="24" x="75" y="65" />
          </pattern>
          <rect width="500" height="500" fill="url(#circuits)" />
        </svg>

        {/* Silicon wafer rings */}
        <svg
          className="absolute -top-10 -right-16 w-[520px] h-[520px] opacity-[0.05] dark:opacity-[0.08]"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle cx="250" cy="250" r="240" stroke="#2563eb" strokeWidth="1" strokeDasharray="6 4" />
          <circle cx="250" cy="250" r="185" stroke="#0284c7" strokeWidth="1.5" />
          <circle cx="250" cy="250" r="130" stroke="#1e40af" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M10 250 H490 M250 10 V490" stroke="#0284c7" strokeWidth="0.8" opacity="0.7" />
        </svg>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Left Content */}
          <div className="lg:col-span-8">
            {/* Sponsorship badge row */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 inline-block animate-pulse" />
                AICTE-VAANI SPONSORED
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 shadow-xs">
                TWO-DAY WORKSHOP
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-xs">
                বাংলায় শিক্ষাদান · BENGALI
              </span>
            </div>

            {/* Institution line */}
            <p className="text-xs font-mono tracking-widest text-blue-700 dark:text-sky-400 uppercase font-semibold mb-3">
              ADAMAS UNIVERSITY · DEPARTMENT OF ELECTRICAL &amp; ELECTRONICS ENGINEERING
            </p>

            {/* Main title */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-[-0.03em] text-slate-900 dark:text-white mb-3">
              Emerging Trends in{" "}
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 dark:from-sky-400 dark:via-blue-300 dark:to-cyan-200 bg-clip-text text-transparent">
                Semiconductor IC Design
              </span>
            </h1>

            <h2 className="font-display font-semibold text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-slate-300 tracking-[-0.015em] leading-snug mb-4 max-w-3xl">
              Industry, Innovation, and Future Technologies in Bengali
            </h2>

            {/* Bengali subtitle */}
            <p
              className="text-base text-slate-600 dark:text-slate-400 mb-8"
              style={{ fontFamily: "var(--font-bengali), serif" }}
            >
              সেমিকন্ডাক্টর আইসি ডিজাইনে উদীয়মান প্রবণতা · VLSI Design &amp; Semiconductor Implementation
            </p>

            {/* Metadata ribbon */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-slate-900/50 backdrop-blur-xs">
              {[
                {
                  icon: <Calendar className="w-5 h-5 text-blue-600 dark:text-sky-400" />,
                  label: "Dates",
                  value: "05–06 November 2026",
                },
                {
                  icon: <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />,
                  label: "Timing · Mode",
                  value: "09:30 AM – 05:30 PM · Offline",
                },
                {
                  icon: <MapPin className="w-5 h-5 text-blue-600 dark:text-sky-400" />,
                  label: "Venue",
                  value: "Adamas Knowledge City, Kolkata",
                },
              ].map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-3.5 py-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/10 shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-wider text-slate-500 dark:text-slate-400 uppercase font-semibold">
                      {label}
                    </p>
                    <p className="font-display font-bold text-sm text-slate-900 dark:text-white leading-tight">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <Link
                href="https://atalacademy.aicte.gov.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20 group"
              >
                <span>Register via ATAL Portal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#schedule"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-display font-semibold text-sm uppercase tracking-wider text-slate-800 dark:text-white bg-white dark:bg-slate-800 border border-slate-300 dark:border-white/20 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-xs"
              >
                View Schedule
              </Link>
            </div>

            {/* Credibility notes */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 dark:text-slate-400">
              {[
                { text: "Registration Fee: <strong class='text-emerald-700 dark:text-emerald-400'>NIL (Free)</strong>" },
                { text: "Capacity: <strong class='text-blue-700 dark:text-sky-300'>50 Seats</strong> · First-Come First-Served" },
                { text: "Certification: <strong class='text-indigo-700 dark:text-indigo-300'>AICTE-VAANI e-Certificate</strong>" },
              ].map(({ text }, idx) => (
                <div key={idx} className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span dangerouslySetInnerHTML={{ __html: text }} />
                </div>
              ))}
            </div>
          </div>

            {/* Mobile / Tablet Chip Preview Card */}
            <div className="lg:hidden mb-8 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-white/10 shadow-md flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-slate-200 dark:border-cyan-500/30 shadow-xs">
                <Image
                  src="/images/semiconductor-chip.jpg"
                  alt="AICTE-VAANI Semiconductor Chip"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-300 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                  VLSI IC DESIGN
                </span>
                <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white leading-tight mt-0.5">
                  AICTE-VAANI Semiconductor Prototype
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                  28nm CMOS · EDA Workflows in Bengali
                </p>
              </div>
            </div>

          {/* Institutional & Semiconductor IC Showcase Column */}
          <div className="hidden lg:col-span-4 lg:flex flex-col items-center justify-center">
            <div className="w-full max-w-sm rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-white/10 p-6 shadow-xl shadow-slate-200/50 dark:shadow-2xl flex flex-col items-center gap-5">
              {/* Photorealistic 3D Semiconductor IC Chip */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-slate-200/80 dark:border-cyan-500/30 shadow-lg group">
                <Image
                  src="/images/semiconductor-chip.jpg"
                  alt="AICTE-VAANI Semiconductor IC Design Chip Processor"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                {/* Live Chip Status Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-cyan-300 flex items-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>VLSI IC DESIGN</span>
                </div>
                {/* Bottom Chip Specification Banner */}
                <div className="absolute bottom-2.5 inset-x-2.5 p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-white flex items-center justify-between shadow-md">
                  <div>
                    <p className="text-[11px] font-display font-extrabold leading-tight text-white">
                      AICTE-VAANI SILICON
                    </p>
                    <p className="text-[9px] font-mono text-cyan-300 uppercase">
                      Adamas Univ · SOET EEE
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-400/15 border border-amber-400/30">
                    28nm EDA
                  </span>
                </div>
              </div>

              {/* Host Institution & AICTE Logos Side-by-Side */}
              <div className="w-full grid grid-cols-2 gap-3 pt-1">
                {/* Adamas Logo Box */}
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/70 dark:border-white/10 flex items-center gap-2.5">
                  <div className="relative w-9 h-9 p-1 rounded-lg bg-white/90 dark:bg-slate-900/90 shrink-0 shadow-2xs border border-slate-200/60 dark:border-white/10">
                    <Image
                      src="/images/adamas-logo.png"
                      alt="Adamas University"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-display font-bold text-[11px] text-slate-900 dark:text-white uppercase truncate">
                      ADAMAS
                    </p>
                    <p className="text-[9px] text-slate-500 dark:text-slate-400 font-mono">
                      Host Dept
                    </p>
                  </div>
                </div>

                {/* AICTE Logo Box */}
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/70 dark:border-white/10 flex items-center gap-2.5">
                  <div className="relative w-9 h-9 p-1 rounded-lg bg-white/90 dark:bg-slate-900/90 shrink-0 shadow-2xs border border-slate-200/60 dark:border-white/10">
                    <Image
                      src="/images/aicte-logo.png"
                      alt="AICTE Official Seal"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-display font-bold text-[11px] text-slate-900 dark:text-white uppercase truncate">
                      AICTE
                    </p>
                    <p className="text-[9px] text-blue-600 dark:text-sky-400 font-mono">
                      Sponsor
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Banner */}
              <div className="w-full text-center py-2 px-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 font-mono text-[11px] font-semibold">
                AICTE-VAANI INITIATIVE · EEE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 dark:text-white/30 animate-bounce">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}

