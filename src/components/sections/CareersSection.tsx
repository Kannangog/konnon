"use client";

import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";

export function CareersSection() {
  return (
    <section id="careers" className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 bg-cyan-950/30 border-cyan-800/50 text-cyan-300">
            <Users className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-semibold tracking-wider uppercase">
              Join Our Team
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight leading-tight">
            We are building the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              future of computing.
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            We are looking for engineers, researchers, and innovators who want to build advanced software and hardware systems.
          </p>

          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-slate-200 transition-colors uppercase tracking-wider group">
            View Open Positions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
