import React from "react";
import { User } from "lucide-react";

interface PlaceholderAvatarProps {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  subtitle?: string;
}

export default function PlaceholderAvatar({
  name,
  className = "",
}: PlaceholderAvatarProps) {
  const cleanName = name.replace(/^(Prof\.|Dr\.|Mr\.|Mrs\.|Ms\.)\s*/gi, "").trim();
  const parts = cleanName.split(/\s+/).filter(Boolean);
  const initials = parts.length > 1
    ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    : (parts[0]?.slice(0, 2) || "AU").toUpperCase();

  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center select-none bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-600 dark:text-slate-300 ${className}`}
      aria-label={`Portrait placeholder for ${name}`}
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="w-12 h-12 rounded-full bg-white/80 dark:bg-slate-700/80 shadow-xs flex items-center justify-center">
          <span className="font-display font-bold text-base tracking-wider text-slate-700 dark:text-slate-200">
            {initials}
          </span>
        </div>
      </div>
    </div>
  );
}
