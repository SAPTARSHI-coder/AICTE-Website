# AICTE-VAANI Sponsored Workshops Portal

This repository consolidates the web portals for the AICTE-VAANI Sponsored National Workshops hosted by **Adamas University**, featuring both the Department of Computer Science & Engineering (CSE) and the Department of Electrical & Electronic Engineering (EEE).

---

## 📁 Repository Structure

```text
.
├── AICTE-Website-CSE/    # Static HTML/CSS/JS portal for CSE Department Workshop
├── AICTE-Website-EEE/    # Next.js 14 + Tailwind CSS + TypeScript portal for EEE Department Workshop
├── package.json          # Root scripts to orchestrate EEE build and development
├── vercel.json           # Vercel deployment configuration
└── README.md
```

---

## 🏛️ Projects Overview

### 1. [Department of Electrical & Electronic Engineering (EEE)](./AICTE-Website-EEE)
- **Topic:** Recent Trends in Semiconductor Devices, VLSI Design, and Microelectronics
- **Stack:** Next.js 14, React 18, Tailwind CSS, TypeScript, Lucide React
- **Features:** Interactive 3D constellation particle canvas, bilingual support (English/Bengali), dark/light mode themes, ATAL registration workflow.

### 2. [Department of Computer Science & Engineering (CSE)](./AICTE-Website-CSE)
- **Topic:** Three-Day National Workshop on Emerging Technologies
- **Stack:** HTML5, CSS3, JavaScript, Tailwind CSS (CDN)
- **Features:** Session timeline, speaker profiles, language toggle, and workshop brochure downloads.

---

## 🚀 Quick Start (EEE Next.js Portal)

From the repository root:

```bash
# Install dependencies
npm run postinstall

# Start development server
npm run dev

# Run production build
npm run build

# Run linter
npm run lint
```

Or navigate directly to `AICTE-Website-EEE/` and run standard Next.js npm commands.

---

## 🌐 Deploying to Vercel

This repository is pre-configured with `vercel.json` and a root `package.json` to seamlessly build and deploy the Next.js application from the root directory.
