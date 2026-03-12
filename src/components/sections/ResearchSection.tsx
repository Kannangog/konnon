"use client";

import { motion } from "framer-motion";
import { FlaskConical, Atom, BrainCircuit, Network, Cpu, Battery, ArrowRight } from "lucide-react";

const researchTopics = [
  {
    title: "AI Kernel Architecture",
    category: "Software R&D",
    description: "Developing extremely low-level operating system architectures purpose-built for AI and machine learning workloads, bypassing legacy inefficiencies.",
    icon: <BrainCircuit className="w-8 h-8 text-purple-400" />,
  },
  {
    title: "Intelligent Computing Systems",
    category: "Systems R&D",
    description: "Designing holistic platforms where distributed compute nodes act as a single, coherent artificial intelligence organism.",
    icon: <Network className="w-8 h-8 text-indigo-400" />,
  },
  {
    title: "Wireless Energy Systems",
    category: "Hardware R&D",
    description: "Exploring safe, high-efficiency resonant inductive coupling and advanced directed energy transfer for tetherless devices.",
    icon: <Battery className="w-8 h-8 text-fuchsia-400" />,
  },
  {
    title: "Embedded AI Hardware",
    category: "Hardware R&D",
    description: "Creating ultra-low-power local inference chips that bring massive intelligence to edge devices without cloud dependency.",
    icon: <Cpu className="w-8 h-8 text-pink-400" />,
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="relative py-28 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 bg-purple-950/30 border-purple-800/50 text-purple-300">
            <FlaskConical className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-semibold tracking-wider uppercase">
              Advanced Studies
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Konnon <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Research</span>
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
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-purple-500/30 transition-all group hover:bg-slate-900/80"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-950/40 border border-purple-800/40 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-purple-400 font-semibold tracking-widest uppercase text-xs mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <button className="flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors uppercase tracking-wider group/btn mx-auto sm:mx-0">
                  Read Paper
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
