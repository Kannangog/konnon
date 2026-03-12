"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Database, Network, BrainCircuit, Globe } from "lucide-react";

const features = [
  {
    title: "AI Systems",
    description: "Deploying machine learning models, neural networks, and generative AI to solve complex business challenges.",
    icon: <BrainCircuit className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile experiences designed for speed, fluidity, and user delight.",
    icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: "Custom Platforms",
    description: "Scalable, secure, and distributed cloud architectures tailored to specific enterprise needs.",
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: "Advanced Computing",
    description: "High-performance data processing, real-time analytics, and secure scalable databases.",
    icon: <Database className="w-6 h-6 text-cyan-400" />,
  },
];

export function SoftwareSection() {
  return (
    <section id="software" className="relative py-28 bg-[#020617] overflow-hidden">
      {/* Reduced blur blobs */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-cyan-900/15 rounded-full blur-[80px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-blue-900/15 rounded-full blur-[70px] translate-x-1/3 pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-800 mb-6">
              <Code2 className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-semibold tracking-wider uppercase text-cyan-400">Software Division</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">
              Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Platforms</span>
            </h2>
            <p className="text-xl text-slate-300/80 mb-8 leading-relaxed">
              We build advanced software platforms including AI systems, intelligent developer tools, and next-generation computing environments.
            </p>
            <div className="space-y-5">
              {[
                { icon: <Network className="w-5 h-5" />, text: "Distributed Cloud Infrastructure" },
                { icon: <Database className="w-5 h-5" />, text: "Real-time AI Model Inference" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-cyan-100">
                  <div className="w-10 h-10 rounded-full bg-cyan-950/80 flex items-center justify-center border border-cyan-800/50">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {/* Ronnon AI Feature Card */}
            <div className="col-span-1 sm:col-span-2 p-7 rounded-2xl bg-gradient-to-br from-purple-900/40 to-blue-900/20 border border-cyan-500/30 hover:border-cyan-400/50 hover:from-purple-900/50 hover:to-blue-900/30 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-[40px] group-hover:bg-cyan-500/20 transition-colors" />
              <div className="flex items-start justify-between relative z-10">
                <div>
                  <div className="w-12 h-12 bg-purple-900/80 border border-purple-500/50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <BrainCircuit className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">RONNON AI</h3>
                  <p className="text-slate-300 leading-relaxed max-w-md mb-6">
                    Ronnon is our AI coding agent designed to build software automatically, assist developers, and accelerate software development.
                  </p>
                </div>
              </div>
              <a 
                href="https://ronnon.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:scale-105 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.4)] relative z-10"
              >
                Open Ronnon
              </a>
            </div>

            {features.slice(0, 2).map((feature, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-900/50 border border-cyan-900/30 hover:border-cyan-500/50 hover:bg-slate-800/70 transition-all group"
              >
                <div className="w-12 h-12 bg-cyan-950/80 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
