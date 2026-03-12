"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { InnovationsSection } from "@/components/sections/InnovationsSection";
import { SoftwareSection } from "@/components/sections/SoftwareSection";
import { HardwareSection } from "@/components/sections/HardwareSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { CareersSection } from "@/components/sections/CareersSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const [mode, setMode] = useState<"hardware" | "software">("hardware");

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
      <Navbar mode={mode} setMode={setMode} />
      <HeroSection mode={mode} setMode={setMode} />
      <AboutSection />
      <InnovationsSection />
      <SoftwareSection />
      <HardwareSection />
      <ResearchSection />
      <CareersSection />
      <ContactSection />

      <footer className="py-8 text-center text-slate-500 border-t border-white/5 bg-black">
        <p>&copy; {new Date().getFullYear()} Konnon Technologies Private Limited. All rights reserved.</p>
      </footer>
    </main>
  );
}
