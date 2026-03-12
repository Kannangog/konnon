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

        {/* Technical Specifications (Featured Product) */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mt-32"
        >
          <div className="p-10 md:p-14 rounded-3xl bg-slate-950 border border-slate-800 relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="lg:w-1/2 relative z-10">
               <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Flagship Platform</span>
               <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Konnon OS Architecture</h3>
               <p className="text-slate-400 text-lg leading-relaxed mb-8">
                 Unlike traditional operating systems that treat AI as an application-layer add-on, Konnon OS integrates neural network execution directly into the kernel scheduler.
               </p>
               <ul className="space-y-4">
                 {[
                   "Zero-copy tensor memory management",
                   "Hardware-accelerated context switching",
                   "Native agent-to-agent communication protocol",
                   "Real-time sensor fusion APIs"
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-slate-300">
                     <div className="w-2 h-2 rounded-full bg-cyan-400" />
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
            
            <div className="lg:w-1/2 w-full relative z-10">
               <div className="aspect-video rounded-2xl bg-black/50 border border-slate-800 flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                 <div className="relative z-10 text-center">
                   <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center mb-4 backdrop-blur-md">
                     <Layers className="w-8 h-8 text-cyan-400" />
                   </div>
                   <p className="text-white font-medium tracking-widest uppercase text-sm">System Diagram</p>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 pb-16"
        >
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm font-medium tracking-widest uppercase text-purple-400 mb-6 inline-block">
              What&apos;s Next
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upcoming Pipeline
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              A preview of what our engineering teams are building. Select programs are open to early-access partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Konnon Ambient Wearable",
                eta: "Q3 2026",
                tag: "Hardware R&D",
                color: "from-purple-500/10 to-pink-500/5",
                borderHover: "hover:border-purple-500/40",
                badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
                desc: "A sub-20g compute-capable wearable with on-device LLM inference, environmental sensing, and gesture recognition. Designed for continuous ambient intelligence without a phone dependency.",
              },
              {
                title: "KonnOS Mobile Runtime",
                eta: "Q4 2026",
                tag: "Software R&D",
                color: "from-cyan-500/10 to-blue-500/5",
                borderHover: "hover:border-cyan-500/40",
                badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
                desc: "A port of the Konnon OS kernel to ARM mobile SoCs, enabling native AI-agent execution on smartphones without Android or iOS virtualization overhead.",
              },
              {
                title: "Autonomous Energy Mesh",
                eta: "2027",
                tag: "Hardware R&D",
                color: "from-amber-500/10 to-orange-500/5",
                borderHover: "hover:border-amber-500/40",
                badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
                desc: "A self-organizing mesh of wireless power transfer nodes that dynamically route energy between devices in a room, eliminating cables for desk and personal computing environments.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-3xl bg-gradient-to-br ${item.color} border border-slate-800 ${item.borderHover} transition-all duration-300 flex flex-col`}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-widest ${item.badgeColor}`}>
                    {item.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    ETA {item.eta}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{item.desc}</p>
                <div className="mt-8 pt-6 border-t border-slate-800/60">
                  <button className="text-sm font-semibold text-slate-400 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-2 group">
                    Request Early Access
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
