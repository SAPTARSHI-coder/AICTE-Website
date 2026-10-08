import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-inter)", "monospace"],
      },
      colors: {
        // Stitch design system tokens — light palette
        surface: "#f9f9ff",
        "surface-dim": "#d0daf2",
        "surface-bright": "#f9f9ff",
        "surface-lowest": "#ffffff",
        "surface-low": "#f0f3ff",
        "surface-container": "#e8eeff",
        "surface-high": "#dfe8ff",
        "surface-highest": "#d9e3fb",
        "on-surface": "#111c2d",
        "on-surface-variant": "#44474c",
        "inverse-surface": "#273143",
        "inverse-on-surface": "#ecf0ff",
        outline: "#75777d",
        "outline-variant": "#c5c6cd",
        "surface-tint": "#535f74",
        // Primary — deep navy
        primary: "#071426",
        "on-primary": "#ffffff",
        "primary-container": "#0f1c2e",
        "on-primary-container": "#78849b",
        "inverse-primary": "#bbc7e0",
        "primary-fixed": "#d7e3fc",
        "primary-fixed-dim": "#bbc7e0",
        "on-primary-fixed": "#0f1c2e",
        "on-primary-fixed-variant": "#3b475c",
        // Secondary — royal indigo
        secondary: "#3046a8",
        "on-secondary": "#ffffff",
        "secondary-container": "#8297fe",
        "on-secondary-container": "#0c298d",
        "secondary-fixed": "#dee1ff",
        "secondary-fixed-dim": "#b9c3ff",
        "on-secondary-fixed": "#001257",
        "on-secondary-fixed-variant": "#263d9f",
        // Tertiary — precision cyan
        tertiary: "#16b9d4",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#001f25",
        "on-tertiary-container": "#0091a7",
        "tertiary-fixed": "#a7edff",
        "tertiary-fixed-dim": "#4dd7f3",
        "on-tertiary-fixed": "#001f25",
        "on-tertiary-fixed-variant": "#004e5b",
        // Dark substrate variants
        "dark-substrate": "#0b1f3a",
        "soft-cyan-tint": "#dff8fc",
        "off-white": "#f7f9fc",
        // Error
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        // Legacy semiconductor scale (kept for hero dark bg)
        semiconductor: {
          950: "#040814",
          900: "#071426",
          850: "#0b1f3a",
          800: "#0f1c2e",
          700: "#1a2e63",
          600: "#3046a8",
        },
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(7, 20, 38, 0.08)",
        "card-hover": "0 0 0 1px #16b9d4, 0 4px 16px -4px rgba(22, 185, 212, 0.25)",
        "dark-card": "0 4px 24px -4px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "wafer-grid": `linear-gradient(to right, rgba(22, 185, 212, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(22, 185, 212, 0.07) 1px, transparent 1px)`,
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
