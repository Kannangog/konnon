"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Layers, Battery, Eye, PenTool, Zap } from "lucide-react";

const innovations = [
  {
    title: "AI Operating System",
    description: "A next-generation OS built from the ground up for artificial intelligence, optimizing compute resources for autonomous agents and intelligent applications.",
    icon: <Layers className="w-8 h-8 text-cyan-400" />,
    color: "from-cyan-500/20 to-blue-500/5",
  },
  {
    title: "Smart Water Quality Monitoring",
    description: "IoT-enabled sensors providing real-time analytics on water purity, ensuring environmental safety and resource management at scale.",
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    color: "from-blue-500/20 to-indigo-500/5",
  },
  {
    title: "Wireless Energy Transfer",
    description: "Revolutionary resonant inductive coupling systems capable of transmitting power over medium distances without physical connections.",
    icon: <Battery className="w-8 h-8 text-purple-400" />,
    color: "from-purple-500/20 to-pink-500/5",
  },
  {
    title: "Smart Glasses with AR",
    description: "Lightweight augmented reality hardware blending digital overlays seamlessly with the physical environment for industrial and daily use.",
    icon: <Eye className="w-8 h-8 text-emerald-400" />,
    color: "from-emerald-500/20 to-teal-500/5",
  },
  {
    title: "Smart Pen Digitizer",
    description: "High-precision stylus technology that digitizes handwriting and sketches in real-time, bridging analog creativity and digital workflow.",
    icon: <PenTool className="w-8 h-8 text-amber-400" />,
    color: "from-amber-500/20 to-orange-500/5",
  },
  {
    title: "Automotive Energy Generator",
    description: "Kinetic and thermal energy recovery systems designed to extend electric vehicle range and optimize overall powertrain efficiency.",
    icon: <Cpu className="w-8 h-8 text-rose-400" />,
    color: "from-rose-500/20 to-red-500/5",
  },
];

export function InnovationsSection() {
  return (
    <section id="innovations" className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm font-medium tracking-widest uppercase text-cyan-400">
              Products & Innovations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">
            Pioneering the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Future of Technology
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From intelligent software platforms to advanced physical hardware, we engineer solutions that redefine what's possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 group relative overflow-hidden bg-gradient-to-br ${item.color}`}
            >
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                {item.description}
              </p>
              
              <button className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider group/btn mt-auto">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
