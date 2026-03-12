"use client";

import { motion } from "framer-motion";
import { Cpu, Microchip, Layers, Settings, Activity } from "lucide-react";

const features = [
  {
    title: "Hardware Prototyping",
    description: "Rapid iteration cycles from concept to physical prototypes using advanced CAD and 3D printing.",
    icon: <Layers className="w-6 h-6 text-slate-300" />,
  },
  {
    title: "Embedded Systems",
    description: "Custom PCB design, firmware development, and microcontroller programming for specialized functions.",
    icon: <Microchip className="w-6 h-6 text-slate-300" />,
  },
  {
    title: "IoT Device Development",
    description: "Building connected smart devices with edge computing capabilities and robust security protocols.",
    icon: <Activity className="w-6 h-6 text-slate-300" />,
  },
  {
    title: "Product Lifecycle",
    description: "End-to-end manufacturing support, from initial DFM (Design for Manufacturing) to mass production.",
    icon: <Settings className="w-6 h-6 text-slate-300" />,
  },
];

export function HardwareSection() {
  return (
    <section id="hardware" className="relative py-28 bg-[#080b12] overflow-hidden">
      {/* Reduced blur decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-800/15 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-600/8 rounded-full blur-[70px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-6">
            <Cpu className="w-5 h-5 text-slate-300" />
            <span className="text-sm font-semibold tracking-wider uppercase text-slate-300">Hardware Division</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Hardware <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500">Research</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We design intelligent hardware systems including IoT devices, smart sensors, and embedded AI platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:bg-slate-800/60 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
