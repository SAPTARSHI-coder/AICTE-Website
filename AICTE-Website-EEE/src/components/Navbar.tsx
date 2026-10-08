"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import LanguageToggleButton from "@/components/LanguageSwitcher";

const NAV_LINKS = [
  { name: "Overview", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Modules", href: "#focus" },
  { name: "Speakers", href: "#speakers" },
  { name: "Schedule", href: "#schedule" },
  { name: "Register", href: "#registration" },
  { name: "Committee", href: "#committee" },
  { name: "Venue", href: "#venue" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((l) => l.href.substring(1));
      const pos = window.scrollY + 160;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= pos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Statutory AICTE Banner */}
      <aside
        aria-label="Accreditation Banner"
        className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-[11px] font-mono tracking-wider py-1.5 px-4 md:px-8 flex flex-wrap justify-between items-center border-b border-slate-200 dark:border-white/10 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-blue-700 dark:text-sky-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-sky-400 inline-block animate-pulse" />
            AICTE-VAANI SPONSORED WORKSHOP
          </span>
          <span className="hidden sm:inline text-slate-400 dark:text-slate-500">|</span>
          <span className="hidden sm:inline text-slate-700 dark:text-slate-300">APPLICATION ID: 2218582108</span>
        </div>
        <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
          <span className="hidden md:inline">ADAMAS UNIVERSITY · BARASAT</span>
          <span className="text-blue-700 dark:text-sky-300 font-semibold">05–06 NOV 2026</span>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 border-b ${
          scrolled
            ? "bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-md border-slate-200/80 dark:border-white/10 shadow-xs"
            : "bg-white/90 dark:bg-[#090d16]/90 backdrop-blur-sm border-slate-200/60 dark:border-white/5"
        }`}
      >
        <div className="flex justify-between items-center w-full px-4 md:px-8 max-w-7xl mx-auto h-16">
          {/* Brand */}
          <Link href="#home" className="flex items-center gap-3 group" onClick={closeMenu}>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg overflow-hidden bg-white/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/10 p-1 flex items-center justify-center shadow-xs">
                <Image
                  src="/images/adamas-logo.png"
                  alt="Adamas University"
                  width={36}
                  height={36}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div className="w-9 h-9 rounded-lg overflow-hidden bg-white/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/10 p-1 flex items-center justify-center shadow-xs">
                <Image
                  src="/images/aicte-logo.png"
                  alt="AICTE"
                  width={36}
                  height={36}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-[13px] tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors leading-tight">
                ADAMAS UNIVERSITY
              </span>
              <span className="text-[10px] font-mono tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                AICTE-VAANI WORKSHOP · EEE
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Language Switcher */}
            <LanguageToggleButton />

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Register CTA */}
            <Link
              href="#registration"
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-150 px-4 py-2 rounded-lg text-[13px] font-semibold shadow-xs"
            >
              <span>Register via ATAL</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-1.5">
            <LanguageToggleButton className="px-2 py-1" />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white dark:bg-[#090d16] border-t border-slate-200 dark:border-white/10 px-4 pb-4 pt-2 shadow-lg">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 font-semibold"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-slate-100 dark:border-white/10 mt-1">
                <Link
                  href="#registration"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs"
                >
                  Register on ATAL Portal
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
