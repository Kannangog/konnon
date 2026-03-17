"use client";

import { motion } from "framer-motion";
import { Target, Eye, Compass } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 bg-[#050505] overflow-hidden">
      
      {/* Abstract Background Shapes — hidden on mobile, GPU-isolated on desktop */}
      <div className="hidden md:block absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[60px]" style={{ transform: "translateZ(0)" }} />
      <div className="hidden md:block absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-slate-800/10 rounded-full blur-[80px]" style={{ transform: "translateZ(0)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.1 }}
           transition={{ duration: 0.7 }}
           className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 mb-6">
            <Compass className="w-5 h-5 text-gray-400" />
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-400">Company Overview</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Infrastructure of Tomorrow</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Konnon Technologies Private Limited is a research and development company focused on building advanced software systems, intelligent computing platforms, and future hardware technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="p-10 rounded-3xl bg-slate-900/40 border border-slate-800 relative overflow-hidden group"
          >
            <div className="hidden md:block absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] group-hover:bg-blue-500/20 transition-colors" />
            <Target className="w-12 h-12 text-blue-400 mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                Our mission is to develop powerful AI-driven systems that redefine how computing, automation, and digital infrastructure work.
              </p>
            </motion.div>

            {/* Founder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-10 rounded-3xl bg-slate-900/40 border border-slate-800 relative overflow-hidden group flex flex-col justify-center"
            >
              <div className="hidden md:block absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[50px] group-hover:bg-cyan-500/20 transition-colors" />
              <div className="flex items-center gap-6 mb-4 relative z-10">
                 <div className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-[2px]">
                   <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                     <span className="text-xl font-bold text-white tracking-wide">KT</span>
                   </div>
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-white">Kannan Thangadurai</h3>
                   <p className="text-cyan-400 font-medium tracking-wide uppercase text-sm mt-1">Founder & CEO</p>
                 </div>
              </div>
              <p className="text-lg text-slate-400 leading-relaxed relative z-10 mt-2">
                Driving the vision to seamlessly integrate advanced computational intelligence with next-generation physical hardware systems.
              </p>
            </motion.div>

        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7 }}
          className="mt-32"
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Core Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "First Principles Thinking", desc: "We strip problems down to their fundamental truths and build up from there, ignoring industry dogmas." },
              { title: "Relentless Iteration", desc: "Speed of execution and compounding improvements over time define our engineering culture." },
              { title: "Vertical Integration", desc: "By controlling the full stack from silicon to user experience, we achieve unparalleled optimization." }
            ].map((value, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-black/40 border border-slate-800/50 hover:border-blue-500/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-900/20 flex items-center justify-center text-blue-400 font-bold mb-6 text-xl">
                  0{idx + 1}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Brief History / Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7 }}
          className="mt-32 pb-16"
        >
          <div className="p-12 rounded-3xl bg-gradient-to-br from-slate-900/80 to-black border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent" />
            <h3 className="text-3xl font-bold text-white mb-8">The Journey</h3>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-32 flex-shrink-0">
                  <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">2026</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Expansion into Intelligent Hardware</h4>
                  <p className="text-slate-400">Launch of our advanced R&D divisions focusing on ambient computing, AI-integrated wearables, and decentralized operating topologies.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-32 flex-shrink-0">
                  <span className="text-xl font-black text-slate-600">2024</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Foundation of Konnon Technologies</h4>
                  <p className="text-slate-400">Established with a focus on deep-tech software solutions and redefining the architecture of scalable applications.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
