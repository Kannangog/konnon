"use client";

import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";

export function CareersSection() {
  return (
    <section id="careers" className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 bg-blue-950/30 border-blue-800/50 text-blue-300">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold tracking-wider uppercase">
              Join Our Team
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight leading-tight">
            We are building the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
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

        {/* Perks and Benefits */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mt-32 text-left"
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center md:text-left">Life at Konnon</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {[
               { title: "Uncapped R&D Budget", desc: "Access to state-of-the-art silicon, compute clusters, and prototyping materials." },
               { title: "Remote-First Architecture", desc: "Work from anywhere in the world. We care about execution, not office hours." },
               { title: "Comprehensive Health", desc: "Top-tier medical, dental, and vision coverage for you and your dependents." },
               { title: "Continuous Learning", desc: "Stipends for conferences, courses, and literature to keep you at the bleeding edge." }
             ].map((perk, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-blue-950/10 border border-blue-900/30 flex flex-col justify-center">
                   <h4 className="text-xl font-bold text-white mb-2">{perk.title}</h4>
                   <p className="text-slate-400">{perk.desc}</p>
                </div>
             ))}
          </div>
        </motion.div>

        {/* Open Roles */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mt-32 text-left pb-16"
        >
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-white">Open Roles</h3>
            <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full text-sm font-medium">
              3 Positions
            </span>
          </div>

          <div className="space-y-4">
             {[
               { role: "AI Systems Engineer", type: "Full-time", loc: "Remote", dept: "Software R&D" },
               { role: "Hardware Architect", type: "Full-time", loc: "Research Triangle, NC", dept: "Hardware R&D" },
               { role: "UI/UX Designer (Spatial)", type: "Contract", loc: "Remote", dept: "Product Design" },
             ].map((job, idx) => (
               <div key={idx} className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all cursor-pointer">
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">{job.role}</h4>
                    <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-400">
                      <span className="px-2 py-1 bg-slate-800 rounded-md">{job.dept}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.loc}</span>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0">
                     <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                       <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
