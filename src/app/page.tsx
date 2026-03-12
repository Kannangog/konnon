"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { SoftwareSection } from "@/components/sections/SoftwareSection";
import { HardwareSection } from "@/components/sections/HardwareSection";
import Link from "next/link";

function HomeContent() {
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<"hardware" | "software">("hardware");

  useEffect(() => {
    const urlMode = searchParams.get("mode");
    if (urlMode === "hardware" || urlMode === "software") {
      setMode(urlMode);
    }
  }, [searchParams]);

  const isHardware = mode === "hardware";
  const accent = isHardware ? "#94a3b8" : "#06b6d4";
  const accentBorder = isHardware ? "rgba(148,163,184,0.15)" : "rgba(6,182,212,0.15)";

  return (
    <>
      <Navbar mode={mode} setMode={setMode} />
      <HeroSection mode={mode} setMode={setMode} />
      {isHardware ? <HardwareSection /> : <SoftwareSection />}

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer
        className="border-t transition-colors duration-500"
        style={{ background: "#030407", borderColor: accentBorder }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 text-center md:text-left">
            
            {/* Brand Column */}
            <div className="md:col-span-5 lg:col-span-6">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg border"
                  style={{ borderColor: accentBorder }}>
                  <span className="text-sm font-bold" style={{ color: accent }}>K</span>
                </div>
                <span className="text-lg font-semibold tracking-wide text-white">KONNON</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto md:mx-0 font-light">
                Engineering precision hardware, autonomous software agents, and the infrastructure of tomorrow. Built in Bengaluru, India.
              </p>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-7 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {[
                {
                  title: "Company",
                  links: [
                    { label: "About Us", href: "/about" },
                    { label: "Careers", href: "/careers" },
                    { label: "Contact", href: "/contact" },
                  ],
                },
                {
                  title: "Innovation",
                  links: [
                    { label: "Ronnon AI", href: "https://ronnon.com" },
                    { label: "Research Lab", href: "/research" },
                    { label: "Concepts", href: "/innovations" },
                  ],
                },
                {
                  title: "Divisions",
                  links: [
                    { label: "Hardware", href: "/?mode=hardware" },
                    { label: "Software", href: "/?mode=software" },
                  ],
                },
              ].map((col) => (
                <div key={col.title}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 transition-colors duration-500" style={{ color: accent }}>
                    {col.title}
                  </p>
                  <ul className="space-y-4">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="text-sm text-slate-400 hover:text-white transition-colors font-light"
                          {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderColor: accentBorder }}>
            <p className="text-slate-600 text-xs font-light">
              © {new Date().getFullYear()} Konnon Technologies Private Limited.
            </p>
            <p className="text-slate-600 text-xs font-light tracking-widest uppercase">
              All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030407] text-slate-200">
      <Suspense fallback={<div className="min-h-screen bg-[#030407]" />}>
        <HomeContent />
      </Suspense>
    </main>
  );
}
