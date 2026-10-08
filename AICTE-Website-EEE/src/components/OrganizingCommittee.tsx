import React from "react";
import Image from "next/image";
import { Landmark } from "lucide-react";
import { WORKSHOP_DATA } from "@/data/workshopData";
import PlaceholderAvatar from "@/components/PlaceholderAvatar";

function UnboxedPerson({
  name,
  title,
  org,
  image,
  imageClassName,
  role,
  size = "md",
}: {
  name: string;
  title: string;
  org?: string;
  image?: string;
  imageClassName?: string;
  role: string;
  size?: "lg" | "md" | "sm";
}) {
  const imgSize =
    size === "lg"
      ? "w-28 h-28 sm:w-32 sm:h-32"
      : size === "md"
      ? "w-24 h-24 sm:w-28 sm:h-28"
      : "w-20 h-20";

  return (
    <div className="flex flex-col items-center text-center group transition-transform duration-200 hover:-translate-y-1">
      <div className={`relative ${imgSize} rounded-full overflow-hidden shadow-sm ring-4 ring-white dark:ring-slate-800 group-hover:ring-blue-500/70 transition-all duration-300 shrink-0 bg-slate-100 dark:bg-slate-800`}>
        {image ? (
          <Image
            src={image}
            alt={`Portrait of ${name}`}
            fill
            className={`object-cover ${imageClassName || "object-center"}`}
            sizes="128px"
          />
        ) : (
          <PlaceholderAvatar name={name} />
        )}
      </div>

      <span className="text-[10px] font-mono tracking-wider font-semibold uppercase text-blue-700 dark:text-blue-400 mt-3 px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/50 dark:border-blue-800/50">
        {role}
      </span>

      <h4 className="font-display font-bold text-[15px] sm:text-[16px] text-slate-900 dark:text-white mt-1.5 leading-snug">
        {name}
      </h4>

      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium leading-tight">
        {title}
      </p>

      {org && (
        <p className="text-[11px] text-slate-500 dark:text-slate-500 mt-0.5">
          {org}
        </p>
      )}
    </div>
  );
}

export default function OrganizingCommittee() {
  const { chiefPatron, patron, advisors, mentors, members } = WORKSHOP_DATA.committee;

  return (
    <section
      id="committee"
      className="py-20 md:py-28 border-b bg-transparent border-slate-200/60 dark:border-white/8 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="section-badge">
            <Landmark className="w-3.5 h-3.5" />
            <span>Academic Governance</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Organizing Committee
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Governed under the visionary guidance of Adamas University executive leadership and engineering faculty.
          </p>
        </div>

        {/* 1. Honorable Patrons */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
              HONORABLE PATRONS
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl mx-auto">
            <UnboxedPerson
              name={chiefPatron.name}
              title={chiefPatron.title}
              org={chiefPatron.organization}
              image={chiefPatron.image}
              role="Chief Patron"
              size="lg"
            />
            <UnboxedPerson
              name={patron.name}
              title={patron.title}
              org={patron.organization}
              image={patron.image}
              role="Patron"
              size="lg"
            />
          </div>
        </div>

        {/* 2. Advisors & Mentors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
              ADVISORS &amp; MENTORS
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {advisors.map((a, i) => (
              <UnboxedPerson
                key={`adv-${i}`}
                name={a.name}
                title={a.title}
                org={a.organization}
                image={a.image}
                role="Advisor"
                size="md"
              />
            ))}
            {mentors.map((m, i) => (
              <UnboxedPerson
                key={`men-${i}`}
                name={m.name}
                title={m.title}
                org={m.organization}
                image={m.image}
                role="Mentor"
                size="md"
              />
            ))}
          </div>
        </div>

        {/* 3. Organizing Committee Members */}
        <div>
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
              ORGANIZING FACULTY MEMBERS
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 max-w-6xl mx-auto">
            {members.map((m, i) => (
              <div
                key={`mem-${i}`}
                className="w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] md:w-[calc(25%-18px)] lg:w-[calc(16.666%-20px)] min-w-[130px] max-w-[170px] flex justify-center"
              >
                <UnboxedPerson
                  name={m.name}
                  title={m.designation}
                  image={m.image}
                  imageClassName={m.imageClassName}
                  role="Member"
                  size="sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
