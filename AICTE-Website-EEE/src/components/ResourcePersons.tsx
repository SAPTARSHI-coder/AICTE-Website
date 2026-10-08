import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { WORKSHOP_DATA } from "@/data/workshopData";
import PlaceholderAvatar from "@/components/PlaceholderAvatar";

export default function ResourcePersons() {
  return (
    <section
      id="speakers"
      className="py-20 md:py-28 border-b bg-transparent border-slate-200/60 dark:border-white/8 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Faculty &amp; Industry Eminence</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Distinguished Resource Persons
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            An unprecedented gathering of semiconductor corporate executives, foundry directors, and venerable professors delivering technical lectures in Bengali.
          </p>
        </div>

        {/* Clean, Unboxed Speakers Grid — Photo & Name Focused */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-14">
          {WORKSHOP_DATA.speakers.map((speaker, idx) => (
            <div
              key={speaker.id}
              className="group flex flex-col items-center text-center transition-transform duration-200"
            >
              {/* Photo Container — Circular, elegant, unboxed */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md ring-4 ring-white dark:ring-slate-800 group-hover:ring-blue-500/80 dark:group-hover:ring-blue-400 transition-all duration-300 group-hover:scale-105 shrink-0 bg-slate-100 dark:bg-slate-800">
                {speaker.image ? (
                  <Image
                    src={speaker.image}
                    alt={`Photograph of ${speaker.name}`}
                    fill
                    className={`object-cover ${speaker.imageClassName || "object-center"}`}
                    sizes="(max-width: 640px) 140px, (max-width: 1024px) 160px, 180px"
                  />
                ) : (
                  <PlaceholderAvatar name={speaker.name} />
                )}
              </div>

              {/* Session Tag */}
              <div className="mt-3.5">
                <span className="inline-block text-[10px] font-mono font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                  {speaker.sessionNumber || `Session 0${idx + 1}`} · Day {speaker.day}
                </span>
              </div>

              {/* Speaker Name */}
              <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                {speaker.name}
              </h3>

              {/* Designation & Organization */}
              <p className="text-xs text-blue-700 dark:text-blue-400 font-semibold mt-1 line-clamp-2">
                {speaker.designation}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 line-clamp-1 font-medium">
                {speaker.organization}
              </p>

              {/* Topic in clean typography */}
              <p className="text-[12px] text-slate-700 dark:text-slate-300 mt-2.5 font-medium leading-relaxed max-w-[200px] line-clamp-3">
                &ldquo;{speaker.topic}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
