"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // On first mount, read localStorage. Default = light (no 'dark' class).
    const stored = localStorage.getItem("theme");
    const root = document.documentElement;
    if (stored === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  // Prevent SSR mismatch flash — render children immediately but the
  // html class is applied client-side before paint via useEffect.
  if (!mounted) {
    // Return children without waiting — hydration mismatch is suppressed on <html>
    return <>{children}</>;
  }

  return <>{children}</>;
}
