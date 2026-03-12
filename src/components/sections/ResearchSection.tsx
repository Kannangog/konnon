"use client";

import { motion } from "framer-motion";
import { FlaskConical, Atom, BrainCircuit, Network, Cpu, Battery, ArrowRight } from "lucide-react";

const researchTopics = [
  {
    title: "Intelligent Task Classification",
    category: "Exploration Area",
    description: "Researching an operating system architecture where artificial intelligence assists system-level decision making and task scheduling.",
    icon: <BrainCircuit className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Adaptive Computation Optimization",
    category: "Exploration Area",
    description: "Exploring how AI can analyze computational patterns and dynamically optimize how tasks are executed inside a computing system.",
    icon: <Network className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Efficient System Resource Management",
    category: "Exploration Area",
    description: "Investigating whether AI-driven orchestration can improve efficiency in hardware resource allocation for future computing platforms.",
    icon: <Battery className="w-8 h-8 text-slate-300" />,
  },
  {
    title: "AI-Assisted Performance Tuning",
    category: "Exploration Area",
    description: "Continuously profiling system behavior to intelligently adapt and tune performance parameters in real-time.",
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
            Research Overview
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          Konnon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Research</span>
        </h2>
        <div className="text-xl text-slate-400 max-w-2xl mx-auto space-y-4">
          <p>Konnon Technologies is currently conducting early-stage research focused on next-generation computing architectures and intelligent operating systems.</p>
          <p>Our primary research initiative explores how artificial intelligence can be integrated into system-level computing to improve efficiency, adaptability, and performance.</p>
          <p>The research is currently in the <strong className="text-white">prototype and experimental phase</strong>, and no formal publications or commercial deployments have been released yet.</p>
        </div>
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
                <button 
                  onClick={() => document.getElementById('current-stage')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider group/btn mx-auto sm:mx-0"
                >
                  Active Focus
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
          <div className="text-center mb-14" id="current-stage">
            <h3 className="text-3xl font-bold text-white mb-4">Current Development Stage</h3>
            <p className="text-slate-400 max-w-xl mx-auto">The project is still in its early research phase and is not yet publicly released.</p>
          </div>
          <div className="space-y-6">
          {[
            {
              title: "Concept Validation & Architecture Design",
              authors: "Active Research",
              date: "Ongoing",
              abstract: "We are currently focused on validating the core concepts behind an AI-integrated operating system and drafting the initial architecture design for intelligent system-level decision making."
            },
            {
              title: "Early Prototype Development",
              authors: "Active Research",
              date: "In Progress",
              abstract: "Our team is actively engaged in early prototype development, establishing the foundation for how artificial intelligence can analyze computational patterns and execute tasks dynamically."
            },
            {
              title: "Simulation and Experimentation",
              authors: "Active Research",
              date: "In Progress",
              abstract: "We utilize rigorous simulation and experimentation to verify that adaptive computation optimization and intelligent task classification improve overall system efficiency."
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
              <h3 className="text-3xl font-bold text-white mb-6">Future Research Direction & Status</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-3xl">
              As the research progresses, Konnon Technologies aims to further explore advanced operating system architectures, intelligent system optimization, and AI-assisted computing frameworks. Future updates, publications, and prototypes will be shared as the research advances.
              <br/><br/>
              <strong className="text-white">Current Status: Active Research & Prototype Development.</strong> No official publications, patents, or production systems have been released at this stage. The focus is on experimentation, development, and technical exploration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: "01", label: "Advanced OS Architectures", desc: "Exploring the integration of AI directly into low-level operating system components." },
                { step: "02", label: "Intelligent System Optimization", desc: "Developing frameworks for AI-assisted performance tuning and efficient resource management." },
                { step: "03", label: "Energy-Efficient Computing", desc: "Investigating energy-efficient AI computing models for sustainable, high-performance systems." }
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
