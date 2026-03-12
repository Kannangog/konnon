"use client";

import { motion } from "framer-motion";
import { FlaskConical, Atom, BrainCircuit, Network, Cpu, Battery, ArrowRight } from "lucide-react";

const researchTopics = [
  {
    title: "AI Kernel Architecture",
    category: "Software R&D",
    description: "Developing extremely low-level operating system architectures purpose-built for AI and machine learning workloads, bypassing legacy inefficiencies.",
    icon: <BrainCircuit className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Intelligent Computing Systems",
    category: "Systems R&D",
    description: "Designing holistic platforms where distributed compute nodes act as a single, coherent artificial intelligence organism.",
    icon: <Network className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Wireless Energy Systems",
    category: "Hardware R&D",
    description: "Exploring safe, high-efficiency resonant inductive coupling and advanced directed energy transfer for tetherless devices.",
    icon: <Battery className="w-8 h-8 text-slate-300" />,
  },
  {
    title: "Embedded AI Hardware",
    category: "Hardware R&D",
    description: "Creating ultra-low-power local inference chips that bring massive intelligence to edge devices without cloud dependency.",
    icon: <Cpu className="w-8 h-8 text-slate-300" />,
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="relative py-28 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 bg-blue-950/30 border-blue-800/50 text-blue-300">
            <FlaskConical className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold tracking-wider uppercase">
              Advanced Studies
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Konnon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Research</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We are dedicated to pushing the boundaries of what is possible, exploring fundamental breakthroughs in both physical and computational sciences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchTopics.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all group hover:bg-slate-900/80"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-950/40 border border-blue-800/40 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-blue-400 font-semibold tracking-widest uppercase text-xs mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <button className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider group/btn mx-auto sm:mx-0">
                  Read Paper
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Abstracts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="text-center mb-14">
            <h3 className="text-3xl font-bold text-white mb-4">Selected Publications & Abstracts</h3>
            <p className="text-slate-400 max-w-xl mx-auto">Ongoing internal research that shapes the engineering of our products.</p>
          </div>
          <div className="space-y-6">
            {[
              {
                title: "Towards an AI-Native Kernel: Architecture for Low-Level Neural Execution",
                authors: "K. Thangadurai et al. — Konnon Technologies Internal Research",
                date: "Q1 2026",
                abstract: "This paper presents a novel kernel architecture in which neural network inference is treated as a first-class scheduling primitive. By moving model execution into ring-0 operations, we demonstrate up to a 3.7× improvement in end-to-end agent response latency versus application-layer inference frameworks, while preserving POSIX-compatible system call interfaces."
              },
              {
                title: "High-Efficiency Resonant Inductive Power Transfer at Medium Range",
                authors: "K. Thangadurai et al. — Konnon Technologies Internal Research",
                date: "Q3 2025",
                abstract: "We investigate a shaped-coil resonant coupling topology capable of sustained power delivery at distances up to 0.4 meters at efficiencies exceeding 82%. The system employs active impedance matching and real-time frequency hopping to maintain stable transfer despite receiver misalignment, enabling practical wireless charging for desk-top computing and wearable form factors."
              },
              {
                title: "Ambient Intelligence through Sensor Fusion on Low-Power Edge SoCs",
                authors: "K. Thangadurai et al. — Konnon Technologies Internal Research",
                date: "Q2 2025",
                abstract: "This work presents a multi-modal sensor fusion pipeline — combining vision, audio, and environmental telemetry — that runs entirely on a sub-1W ARM Cortex-M SoC. Using a custom quantisation scheme, we fit a 200M-parameter multimodal model within 512 KB of SRAM, achieving contextual awareness inference at 14 FPS without cloud dependency."
              }
            ].map((paper, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <h4 className="text-xl font-bold text-white max-w-2xl">{paper.title}</h4>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/50 text-blue-400 flex-shrink-0">{paper.date}</span>
                </div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mb-4">{paper.authors}</p>
                <p className="text-slate-400 leading-relaxed">{paper.abstract}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 pb-16"
        >
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-blue-950/40 to-black border border-blue-900/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">Research Methodology</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-3xl">
                Every Konnon research initiative begins with a well-defined falsifiable hypothesis and a commitment to reproducible results. We operate an internal review process where all findings are vetted by cross-functional teams spanning software, hardware, and applied sciences before influencing product roadmaps.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { step: "01", label: "Hypothesis", desc: "Define a clear, falsifiable problem statement grounded in first-principles analysis." },
                  { step: "02", label: "Experimentation", desc: "Build minimum viable experiments in controlled lab environments using internal testbeds." },
                  { step: "03", label: "Integration", desc: "Validate at scale and integrate proven findings directly into product architecture." }
                ].map((m, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="text-3xl font-black text-blue-900/70 flex-shrink-0">{m.step}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{m.label}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
