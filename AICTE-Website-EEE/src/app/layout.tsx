import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Manrope, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageSwitcher";
import ParticleBackground from "@/components/ParticleBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  variable: "--font-bengali",
  display: "swap",
  weight: ["500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aicte-vaani-eee.adamasuniversity.ac.in"),
  title: "AICTE-VAANI Workshop | Emerging Trends in Semiconductor IC Design | Adamas University",
  description:
    "AICTE-VAANI sponsored two-day workshop on Emerging Trends in Semiconductor IC Design: Industry, Innovation, and Future Technologies in Bengali at Adamas University, 05–06 November 2026.",
  keywords: [
    "AICTE-VAANI",
    "Semiconductor IC Design",
    "VLSI Design",
    "Adamas University",
    "Department of Electrical and Electronics Engineering",
    "EDA Tools",
    "Bengali Language Workshop",
    "ATAL Academy",
    "Kolkata",
    "Hardware Design",
  ],
  authors: [{ name: "Department of Electrical and Electronics Engineering, Adamas University" }],
  openGraph: {
    title: "AICTE-VAANI Workshop | Emerging Trends in Semiconductor IC Design | Adamas University",
    description:
      "AICTE-VAANI sponsored two-day workshop on Emerging Trends in Semiconductor IC Design at Adamas University, 05–06 November 2026.",
    url: "https://aicte-vaani-eee.adamasuniversity.ac.in",
    siteName: "AICTE-VAANI Adamas University",
    images: [
      {
        url: "/images/adamas-aicte-banner.png",
        width: 1200,
        height: 630,
        alt: "AICTE-VAANI Workshop at Adamas University",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/adamas-logo.png",
    apple: "/images/adamas-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${notoSerifBengali.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="antialiased relative min-h-screen">
        <ThemeProvider>
          <LanguageProvider>
            <ParticleBackground />
            <div className="relative z-10 min-h-screen flex flex-col">
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
        <Script src="/js/translate.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
