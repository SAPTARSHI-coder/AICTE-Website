"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, Copy, Check, Users } from "lucide-react";
import { WORKSHOP_DATA } from "@/data/workshopData";
import PlaceholderAvatar from "@/components/PlaceholderAvatar";

export default function CoordinatorsSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section
      className="py-20 md:py-28 border-b bg-transparent border-slate-200/60 dark:border-white/8 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="section-badge">
            <Users className="w-3.5 h-3.5" />
            <span>Direct Faculty Inquiries</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Workshop Coordinators
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Official points of contact for candidate registration assistance, logistics, and technical inquiries.
          </p>
        </div>

        {/* 2 Coordinator Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {WORKSHOP_DATA.coordinators.map((c, idx) => (
            <div
              key={idx}
              className="clean-card p-6 sm:p-8 flex flex-col items-center text-center group"
            >
              {/* Photo */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-sm ring-4 ring-white dark:ring-slate-800 shrink-0 mb-4 bg-slate-100 dark:bg-slate-800">
                {c.image ? (
                  <Image
                    src={c.image}
                    alt={`Photograph of ${c.name}`}
                    fill
                    className={`object-cover ${c.imageClassName || "object-center"}`}
                    sizes="128px"
                  />
                ) : (
                  <PlaceholderAvatar name={c.name} />
                )}
              </div>

              {/* Role badge */}
              <span className="inline-block text-[10px] font-mono font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 mb-2">
                {c.role} · DEPT. OF EEE
              </span>

              {/* Name */}
              <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                {c.name}
              </h3>
              <p className="text-xs text-blue-700 dark:text-blue-400 font-semibold mt-1">
                {c.designation}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                {c.organization}
              </p>

              {/* Contacts */}
              <div className="w-full mt-6 space-y-2 pt-5 border-t border-slate-100 dark:border-white/5">
                {/* Phone */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-white/5">
                  <a
                    href={`tel:+91${c.phoneRaw}`}
                    className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
                      <Phone className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-mono font-medium">{c.phone}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => copyText(c.phoneRaw, `phone-${idx}`)}
                    className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                    title="Copy phone"
                  >
                    {copiedKey === `phone-${idx}` ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-white/5">
                  <a
                    href={`mailto:${c.email}`}
                    className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors truncate max-w-[85%]"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
                      <Mail className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-mono text-[11px] truncate">{c.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => copyText(c.email, `email1-${idx}`)}
                    className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                    title="Copy email"
                  >
                    {copiedKey === `email1-${idx}` ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
