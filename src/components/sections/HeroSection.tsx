"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code, ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-[10px] tracking-[0.3em] uppercase text-slate-600 animate-pulse">Initializing Scene...</div>
    </div>
  ),
});

interface HeroSectionProps {
  mode: "hardware" | "software";
  setMode: (mode: "hardware" | "software") => void;
}

export function HeroSection({ mode, setMode }: HeroSectionProps) {
  const isHw = mode === "hardware";
  const accent = isHw ? "#94a3b8" : "#06b6d4";
  const accentGlow = isHw
    ? "rgba(148,163,184,0.15)"
    : "rgba(6,182,212,0.2)";

  const scrollDown = () => {
    const next = document.getElementById(isHw ? "hardware" : "software");
    next?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#030407]">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen">
        {isHw ? (
          <Spline scene="https://prod.spline.design/WqRXKFkICTAdJvFx/scene.splinecode" />
        ) : (
          <Spline scene="https://prod.spline.design/u1NJmT-8nQfrokiH/scene.splinecode" />
        )}
        {/* Hide Spline branding */}
        <div className="absolute bottom-0 right-0 w-64 h-20 bg-[#030407] z-10 pointer-events-none" />
      </div>

      {/* Deep Vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, #030407 100%)",
        }}
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(${accent} 1px, transparent 1px), linear-gradient(90deg, ${accent} 1px, transparent 1px)`, backgroundSize: "80px 80px" }}
      />

      {/* UI Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-6 pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl text-center"
          >
            {/* Minimal Mode Badge */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="w-8 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent})` }} />
              <div
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em]"
                style={{ color: accent }}
              >
                {isHw ? <Cpu className="w-3.5 h-3.5" /> : <Code className="w-3.5 h-3.5" />}
                {isHw ? "Hardware Division" : "Software Division"}
              </div>
              <span className="w-8 h-px" style={{ background: `linear-gradient(-90deg, transparent, ${accent})` }} />
            </div>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter leading-[1.05]"
              style={{
                color: "#fff",
                textShadow: `0 0 80px ${accentGlow}`,
              }}
            >
              {isHw
                ? "Precision Engineered Physical Systems"
                : "Autonomous Code & Intelligence"}
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              {isHw
                ? "Foundational hardware architectures, IoT fleets, and embedded systems built for scale."
                : "Agentic software platforms, autonomous AI operating systems, and scalable enterprise architectures."}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Toggle Controls */}
        <div className="mt-14 flex flex-col items-center gap-6 pointer-events-auto">
          <div
            className="flex items-center p-1 rounded-full backdrop-blur-xl border"
            style={{
              borderColor: "rgba(255,255,255,0.04)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <button
              onClick={() => setMode("hardware")}
              className="flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500"
              style={
                isHw
                  ? { background: "#fff", color: "#030407", boxShadow: "0 0 30px rgba(148,163,184,0.3)" }
                  : { color: "#64748b" }
              }
            >
              Hardware
            </button>
            <button
              onClick={() => setMode("software")}
              className="flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500"
              style={
                !isHw
                  ? { background: accent, color: "#030407", boxShadow: `0 0 30px ${accentGlow}` }
                  : { color: "#64748b" }
              }
            >
              Software
            </button>
          </div>

          <AnimatePresence>
            {!isHw && (
              <motion.a
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                href="https://ronnon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-2 rounded-full border border-cyan-900/40 bg-cyan-950/20 hover:bg-cyan-900/30 transition-colors"
                style={{ color: accent }}
              >
                <span className="text-xs font-semibold tracking-wide">Ship instantly with Ronnon AI</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.a>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors pointer-events-auto group"
        aria-label="Scroll down"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-50 group-hover:opacity-100 transition-opacity">Explore</span>
        <div className="w-8 h-12 rounded-full border border-slate-700/50 flex justify-center p-2 group-hover:border-slate-500 transition-colors">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-slate-400"
          />
        </div>
      </button>
    </section>
  );
}
