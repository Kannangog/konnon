"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code } from "lucide-react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-slate-600 text-sm tracking-widest">
      Loading...
    </div>
  )
});

interface HeroSectionProps {
  mode: "hardware" | "software";
  setMode: (mode: "hardware" | "software") => void;
}

export function HeroSection({ mode, setMode }: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#050505]">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        {mode === "hardware" ? (
          <Spline scene="https://prod.spline.design/WqRXKFkICTAdJvFx/scene.splinecode" />
        ) : (
          <Spline scene="https://prod.spline.design/u1NJmT-8nQfrokiH/scene.splinecode" />
        )}
        {/* Overlay to hide Spline branding logo */}
        <div className="absolute bottom-0 right-0 w-48 h-16 bg-[#050505] z-10 pointer-events-none"></div>
      </div>

      {/* UI Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-4">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-4xl text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 leading-tight">
            {mode === "hardware" 
              ? "Next-Generation Intelligent Hardware" 
              : "Advanced AI & Software Platforms"}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            {mode === "hardware"
              ? "We design powerful physical systems, IoT devices, and advanced silicon architectures for the future of computing."
              : "Building intelligent operating systems, cognitive agents, and scalable cloud infrastructures."}
          </p>
        </motion.div>

        {/* Toggle Controls */}
        <div className="mt-8 flex flex-col items-center justify-center gap-6 pointer-events-auto">
          <div className="flex items-center justify-center gap-4 flex-col md:flex-row bg-white/5 backdrop-blur-md p-2 rounded-2xl md:rounded-full border border-white/10">
            <button
              onClick={() => setMode("hardware")}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl md:rounded-full transition-all duration-400 font-medium ${
                mode === "hardware"
                  ? "bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-[0_0_30px_rgba(255,255,255,0.15)] scale-105 border border-gray-600"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Cpu className="w-5 h-5" />
              Explore Hardware
            </button>

            <button
              onClick={() => setMode("software")}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl md:rounded-full transition-all duration-400 font-medium ${
                mode === "software"
                  ? "bg-gradient-to-r from-blue-700 to-cyan-500 text-white shadow-[0_0_30px_rgba(0,243,255,0.35)] scale-105 border border-cyan-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Code className="w-5 h-5" />
              Explore Software
            </button>
          </div>

          <AnimatePresence mode="wait">
            {mode === "software" && (
              <motion.a
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                href="https://ronnon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-purple-600/80 to-blue-600/80 hover:from-purple-500 hover:to-blue-500 text-white font-medium transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] border border-purple-500/50 hover:border-purple-400 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Build Anything with Ronnon AI
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </motion.a>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
