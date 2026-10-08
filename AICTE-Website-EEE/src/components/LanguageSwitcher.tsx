"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Languages, Loader2 } from "lucide-react";

interface LanguageContextType {
  isBengali: boolean;
  toggleLanguage: () => void;
  isTranslating: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  isBengali: false,
  toggleLanguage: () => {},
  isTranslating: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [isBengali, setIsBengali] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    // Read saved language preference
    const saved = typeof window !== "undefined" ? localStorage.getItem("workshop_language") : null;
    if (saved === "bengali") {
      setIsBengali(true);
    }

    const initTranslate = () => {
      if (typeof window !== "undefined" && (window as any).translate) {
        const t = (window as any).translate;
        try {
          t.language.setLocal("english");
          t.service.use("client.edge");
          t.selectLanguageTag.show = false;
          if (t.ignore && t.ignore.class) {
            t.ignore.class.push("no-translate");
          }
          t.execute();

          if (saved === "bengali") {
            t.changeLanguage("bengali");
          }
        } catch (err) {
          console.warn("translate.js init:", err);
        }
      }
    };

    // Wait for script to be available on window
    const timer = setInterval(() => {
      if (typeof window !== "undefined" && (window as any).translate) {
        clearInterval(timer);
        initTranslate();
      }
    }, 150);

    const timeout = setTimeout(() => clearInterval(timer), 8000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  const toggleLanguage = () => {
    if (typeof window === "undefined") return;
    const t = (window as any).translate;

    setIsTranslating(true);
    const nextBengali = !isBengali;
    setIsBengali(nextBengali);
    localStorage.setItem("workshop_language", nextBengali ? "bengali" : "english");

    if (t && typeof t.changeLanguage === "function") {
      try {
        t.changeLanguage(nextBengali ? "bengali" : "english");
      } catch (e) {
        console.error("Language change error:", e);
      }
    }

    setTimeout(() => {
      setIsTranslating(false);
    }, 1200);
  };

  return (
    <LanguageContext.Provider value={{ isBengali, toggleLanguage, isTranslating }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export default function LanguageToggleButton({ className = "" }: { className?: string }) {
  const { isBengali, toggleLanguage, isTranslating } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      disabled={isTranslating}
      title={isBengali ? "Switch to English" : "বাংলায় পুরো পেজ অনুবাদ করুন (Translate whole page to Bengali)"}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150 select-none ${
        isBengali
          ? "bg-blue-600 text-white border-blue-500 shadow-xs hover:bg-blue-700"
          : "bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-800 dark:text-slate-200 border-slate-300/80 dark:border-white/10"
      } ${className}`}
      aria-label="Toggle Bengali / English"
    >
      {isTranslating ? (
        <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-600 dark:text-sky-300" />
      ) : (
        <Languages className="w-3.5 h-3.5 text-blue-600 dark:text-sky-300" />
      )}
      <span className="font-mono text-[11px] font-bold">
        {isBengali ? "English" : "বাংলা"}
      </span>
    </button>
  );
}
