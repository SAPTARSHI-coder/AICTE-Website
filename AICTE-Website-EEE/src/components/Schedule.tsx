"use client";

import React, { useState } from "react";
import { Calendar, Clock, User, Building2 } from "lucide-react";
import { WORKSHOP_DATA } from "@/data/workshopData";

export default function Schedule() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const currentSchedule =
    activeDay === 1 ? WORKSHOP_DATA.schedule.day1 : WORKSHOP_DATA.schedule.day2;

  return (
    <section
      id="schedule"
      className="py-20 md:py-28 border-b bg-slate-50/20 dark:bg-white/[0.015] border-slate-200/60 dark:border-white/8 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="section-badge">
            <Clock className="w-3.5 h-3.5" />
            <span>Conference Programme</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Two-Day Technical Programme
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Comprehensive technical itinerary for 05 &amp; 06 November 2026 at Adamas Knowledge City.
          </p>
        </div>

        {/* Centered Day Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/10 gap-1.5">
            {([1, 2] as const).map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => setActiveDay(day)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeDay === day
                    ? "bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-300 shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Day {day} · {day === 1 ? "05 Nov" : "06 Nov"} 2026</span>
              </button>
            ))}
          </div>
        </div>

        {/* Day Subtitle Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-5 mb-6 border-b border-slate-200 dark:border-white/10 text-center sm:text-left gap-2">
          <div>
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
              {currentSchedule.dayLabel}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Venue: Adamas Knowledge City, Kolkata · Offline Workshop
            </p>
          </div>
          <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
            {currentSchedule.sessions.length} Scheduled Segments
          </span>
        </div>

        {/* Schedule Rows Stack */}
        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xs">
          {currentSchedule.sessions.map((session, idx) => {
            const isSpecial =
              session.sessionNumber.toLowerCase().includes("lunch") ||
              session.sessionNumber.toLowerCase().includes("evaluation") ||
              session.sessionNumber.toLowerCase().includes("valedictory") ||
              session.sessionNumber.toLowerCase().includes("inauguration");

            return (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row sm:items-start gap-4 p-5 sm:p-6 border-b last:border-b-0 border-slate-100 dark:border-white/5 transition-colors ${
                  idx % 2 === 0
                    ? "bg-white dark:bg-[#0f172a]"
                    : "bg-slate-50/70 dark:bg-[#090d16]"
                }`}
              >
                {/* Time & Session badge */}
                <div className="sm:w-48 shrink-0 flex sm:flex-col gap-2 sm:gap-1.5 items-start">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="font-mono text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {session.time}
                    </span>
                  </div>
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase ${
                      isSpecial
                        ? "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                        : "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60"
                    }`}
                  >
                    {session.sessionNumber}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="font-display font-semibold text-base sm:text-lg text-slate-900 dark:text-white leading-snug mb-2">
                    {session.topic}
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                      <span className="font-medium text-slate-800 dark:text-slate-200">
                        {session.speakerName}
                      </span>
                    </div>
                    {session.speakerOrganization && (
                      <div className="flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                        <span>{session.speakerOrganization}</span>
                      </div>
                    )}
                  </div>
                  {session.speakerDesignation && (
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      {session.speakerDesignation}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
