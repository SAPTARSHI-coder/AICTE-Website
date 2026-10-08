import React from "react";
import Image from "next/image";
import { MapPin, Navigation, Plane, Train, Car, ExternalLink } from "lucide-react";
import { WORKSHOP_DATA } from "@/data/workshopData";

const TRANSIT = [
  {
    mode: "Air Travel",
    desc: "13 km (approx. 25 mins) from Netaji Subhash Chandra Bose International Airport (CCU).",
    icon: Plane,
  },
  {
    mode: "Rail",
    desc: "Easily accessible from Barasat Railway Station (4.5 km) and Sealdah/Howrah mainline stations.",
    icon: Train,
  },
  {
    mode: "Road Access",
    desc: "Direct connectivity via Barasat – Barrackpore Road with ample on-campus parking.",
    icon: Car,
  },
];

export default function VenueSection() {
  const { venue } = WORKSHOP_DATA;

  return (
    <section
      id="venue"
      className="py-20 md:py-28 border-b bg-slate-50/20 dark:bg-white/[0.015] border-slate-200/60 dark:border-white/8 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="section-badge">
            <MapPin className="w-3.5 h-3.5" />
            <span>Event Location</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Campus &amp; Venue
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Adamas Knowledge City · Barasat – Barrackpore Road, Jagannathpur, Kolkata, West Bengal 700126
          </p>
        </div>

        {/* Venue Showcase Card */}
        <div className="clean-card p-6 sm:p-10 mb-10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Gate Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 aspect-[4/3] group">
                <Image
                  src="/images/campus-gate.png"
                  alt="Adamas Knowledge City Grand Entrance Gate"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-5 text-white">
                  <span className="text-[11px] font-mono uppercase text-sky-300 font-semibold block mb-0.5">
                    Main Entrance Landmark
                  </span>
                  <p className="font-display font-bold text-sm sm:text-base">
                    Adamas Knowledge City Grand Portal
                  </p>
                </div>
              </div>
            </div>

            {/* Venue Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-widest block mb-1">
                  OFFICIAL WORKSHOP VENUE
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                  {venue.name}
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                  Adamas University Technical Campus
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/5 space-y-2">
                <div className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{venue.street}</p>
                    <p>{venue.city}, {venue.state} – {venue.pincode}</p>
                    <p className="text-xs text-blue-700 dark:text-blue-400 font-mono mt-1">{venue.landmark}</p>
                  </div>
                </div>
              </div>

              {/* Transit Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TRANSIT.map((t, idx) => {
                  const Icon = t.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-white/5 flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-2 mb-1.5 text-blue-600 dark:text-blue-400">
                        <Icon className="w-4 h-4" />
                        <span className="font-display font-bold text-xs text-slate-900 dark:text-white">
                          {t.mode}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Map CTA */}
              <div className="pt-2">
                <a
                  href={venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
