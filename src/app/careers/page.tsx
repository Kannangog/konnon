"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { CareersSection } from "@/components/sections/CareersSection";

export default function CareersPage() {
  const [mode, setMode] = useState<"hardware" | "software">("hardware");

  return (
    <main className="min-h-screen bg-[#050505] text-slate-200 flex flex-col pt-24">
      <Navbar mode={mode} setMode={setMode} />
      
      <div className="flex-1">
        <CareersSection />
      </div>

      <footer className="py-8 text-center text-slate-500 border-t border-slate-900 bg-[#020617]">
        <p>&copy; {new Date().getFullYear()} Konnon Technologies Private Limited. All rights reserved.</p>
      </footer>
    </main>
  );
}
