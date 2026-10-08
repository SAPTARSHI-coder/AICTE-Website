import React from "react";
import { Calendar, Users, DollarSign, Languages, MapPin, Award } from "lucide-react";

const ITEMS = [
  {
    label: "Duration",
    value: "2 Days",
    sub: "05–06 Nov 2026",
    icon: Calendar,
    iconColor: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-50 dark:bg-blue-950/50",
  },
  {
    label: "Capacity",
    value: "50 Seats",
    sub: "First-Come Basis",
    icon: Users,
    iconColor: "text-indigo-600 dark:text-indigo-400",
    iconBg: "bg-indigo-50 dark:bg-indigo-950/50",
  },
  {
    label: "Registration Fee",
    value: "NIL",
    sub: "100% Sponsored",
    icon: DollarSign,
    iconColor: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/50",
  },
  {
    label: "Language",
    value: "Bengali",
    sub: "বাংলায় শিক্ষাদান",
    icon: Languages,
    iconColor: "text-sky-600 dark:text-sky-400",
    iconBg: "bg-sky-50 dark:bg-sky-950/50",
  },
  {
    label: "Delivery Mode",
    value: "Offline",
    sub: "Adamas Knowledge City",
    icon: MapPin,
    iconColor: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-50 dark:bg-amber-950/50",
  },
  {
    label: "Certification",
    value: "AICTE",
    sub: "Official E-Certificate",
    icon: Award,
    iconColor: "text-blue-700 dark:text-blue-300",
    iconBg: "bg-blue-50 dark:bg-blue-950/50",
  },
];

export default function EventAtAGlance() {
  return (
    <section className="py-10 md:py-14 border-b bg-slate-50/20 dark:bg-white/[0.015] border-slate-200/60 dark:border-white/8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="clean-card p-4 sm:p-5 flex flex-col items-center text-center group"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${item.iconBg}`}>
                  <Icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                  {item.label}
                </span>
                <p className="font-display font-extrabold text-xl text-slate-900 dark:text-white mt-1">
                  {item.value}
                </p>
                <p className="text-[12px] text-slate-600 dark:text-slate-400 mt-0.5">
                  {item.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
