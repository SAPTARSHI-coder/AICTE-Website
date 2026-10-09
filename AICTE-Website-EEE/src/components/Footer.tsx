"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ExternalLink } from "lucide-react";
import { WORKSHOP_DATA } from "@/data/workshopData";
import LanguageToggleButton from "@/components/LanguageSwitcher";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-slate-50 dark:bg-[#030712] text-slate-600 dark:text-slate-400 pt-12 pb-8 border-t border-slate-200/90 dark:border-white/10 relative overflow-hidden transition-colors duration-200">
      {/* Ambient backlight - light blue in light mode, deep blue in dark mode */}
      <div
        className="dark:hidden absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 900px 450px at 50% 100%, rgba(219, 234, 254, 0.5), transparent 70%)",
        }}
      />
      <div
        className="hidden dark:block absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 900px 450px at 50% 100%, rgba(30, 58, 138, 0.28), transparent 70%)",
        }}
      />

      {/* Wafer grid subtle texture */}
      <div className="absolute inset-0 wafer-grid opacity-20 dark:opacity-30 pointer-events-none" />

      {/* Compact CTA Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="rounded-2xl border border-blue-600/20 dark:border-blue-500/30 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-950/90 dark:via-slate-900 dark:to-indigo-950/90 backdrop-blur-md p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-600/10 dark:shadow-2xl">
          <div>
            <p className="text-[11px] font-mono tracking-wider text-blue-100 dark:text-sky-400 uppercase font-semibold mb-1.5">
              Applications Now Open
            </p>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-snug">
              Shape the Future of Semiconductor<br className="hidden sm:block" /> Innovation in Bengali
            </h3>
          </div>
          <a
            href={WORKSHOP_DATA.registration.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-blue-700 bg-white hover:bg-blue-50 dark:text-white dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-lg shadow-black/10 shrink-0"
          >
            <span>Register via ATAL Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-200 dark:border-white/10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/10 p-1 flex items-center justify-center shadow-xs">
                <Image
                  src="/images/adamas-logo.png"
                  alt="Adamas University"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="w-10 h-10 rounded-lg bg-white/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/10 p-1 flex items-center justify-center shadow-xs">
                <Image
                  src="/images/aicte-logo.png"
                  alt="AICTE"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-900 dark:text-white text-[14px] tracking-tight">
                  ADAMAS UNIVERSITY
                </h4>
                <p className="text-[10px] text-blue-700 dark:text-sky-400 font-mono tracking-wider font-semibold">
                  DEPT. OF EEE · AICTE-VAANI WORKSHOP
                </p>
              </div>
            </div>
            <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-[20px] max-w-sm">
              AICTE-VAANI Sponsored Two-Day Workshop on Emerging Trends in Semiconductor IC Design: Industry, Innovation, and Future Technologies in Bengali.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-mono pt-1">
              <span className="px-2.5 py-1 rounded bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 shadow-2xs">
                05–06 NOV 2026
              </span>
              <span className="px-2.5 py-1 rounded bg-blue-50 dark:bg-white/5 border border-blue-200 dark:border-white/10 text-blue-700 dark:text-sky-300">
                APP ID: 2218582108
              </span>
              <span className="px-2.5 py-1 rounded bg-emerald-50 dark:bg-white/5 border border-emerald-200 dark:border-white/10 text-emerald-700 dark:text-emerald-400">
                50 SEATS · NIL FEE
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3.5">
              Navigation
            </h5>
            <ul className="space-y-2 text-[13px]">
              {[
                ["#home", "Home"],
                ["#about", "About Workshop"],
                ["#focus", "Focus Areas"],
                ["#objectives", "Objectives"],
                ["#speakers", "Resource Persons"],
                ["#schedule", "Schedule"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Links */}
          <div>
            <h5 className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3.5">
              Official Links
            </h5>
            <ul className="space-y-2 text-[13px]">
              {[
                ["https://atalacademy.aicte.gov.in/login", "ATAL Academy Portal"],
                ["https://adamasuniversity.ac.in", "Adamas University"],
                ["https://www.aicte-india.org", "AICTE Official"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                  >
                    <span>{label}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </li>
              ))}
              {[
                ["#registration", "Registration Info"],
                ["#committee", "Organizing Committee"],
                ["#venue", "Campus Directions"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Host Campus */}
          <div>
            <h5 className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3.5">
              Host Campus
            </h5>
            <address className="not-italic text-[13px] space-y-1.5 text-slate-600 dark:text-slate-400">
              <p className="font-semibold text-slate-900 dark:text-white">Adamas Knowledge City</p>
              <p>Barasat – Barrackpore Road</p>
              <p>Jagannathpur, Kolkata</p>
              <p>West Bengal 700126, India</p>
              <div className="pt-2.5 space-y-1">
                <p className="text-[11px] font-mono text-blue-700 dark:text-sky-400">
                  semanti.chakraborty2@adamasuniversity.ac.in
                </p>
                <p className="text-[11px] font-mono text-slate-700 dark:text-slate-300">
                  +91 8697308776 / +91 9800714248
                </p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar with author credit & language switcher */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-slate-600 dark:text-slate-400">
          <p className="text-center sm:text-left leading-relaxed">
            Designed and Developed by{" "}
            <a
              href="https://saptarshisadhu.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-700 hover:text-blue-800 dark:text-sky-400 dark:hover:text-sky-300 hover:underline transition-colors inline-flex items-center gap-1"
            >
              <span>Saptarshi Sadhu</span>
              <ExternalLink className="w-3 h-3" />
            </a>{" "}
            <span className="text-slate-400 dark:text-slate-600">|</span> Department of Computer Science and Engineering{" "}
            <span className="text-slate-400 dark:text-slate-600">|</span> Centre of Excellence in AI
          </p>

          <div className="flex items-center gap-3 shrink-0">
            <LanguageToggleButton />
            <span
              className="text-[12px] font-mono text-blue-700/90 dark:text-sky-400/90 hidden sm:inline"
              style={{ fontFamily: "var(--font-bengali), serif" }}
            >
              বাংলায় উচ্চপ্রযুক্তি শিক্ষা
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 dark:bg-white/10 dark:hover:bg-white/15 border border-slate-200 dark:border-white/15 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white transition-colors shadow-2xs"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono font-semibold">TOP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
