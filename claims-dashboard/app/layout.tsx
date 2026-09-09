import type { Metadata } from "next";
import { Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unified Policy Administration System",
  description: "Claims dashboard for EFU Life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${ibmPlexMono.variable}`}>
      <body className="font-sans antialiased bg-[var(--canvas)] text-[var(--ink)]">
        <TopNav />
        {/* Push content below the fixed top nav (h-11 = 44px) */}
        <div className="pt-11 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
