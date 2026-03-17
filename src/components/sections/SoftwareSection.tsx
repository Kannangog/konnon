"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Globe, Database, Network, Terminal, Layers, ArrowUpRight } from "lucide-react";

/* ─── Data ─────────────────────────────────────────── */
const capabilities = [
  { icon: BrainCircuit, title: "Autonomous Agents", text: "Multi-modal AI architectures capable of reasoning, planning, and executing complex software workflows." },
  { icon: Globe, title: "Enterprise Platforms", text: "Global-scale SaaS infrastructure designed for extreme concurrency, tenant isolation, and 99.99% uptime." },
  { icon: Database, title: "Intelligent Data Ops", text: "Real-time vector pipelines, RAG implementations, and petabyte-scale streaming analytics engines." },
  { icon: Network, title: "Cloud Native", text: "Immutable Kubernetes deployments, zero-trust service meshes, and GitOps-driven delivery pipelines." },
];

const stack = [
  { label: "Core", items: ["TypeScript", "Rust", "Go", "Python"] },
  { label: "AI & ML", items: ["PyTorch", "JAX", "vLLM", "TensorRT"] },
  { label: "Compute", items: ["GCP", "Kubernetes", "Ray", "Fly.io"] },
  { label: "State", items: ["ClickHouse", "PostgreSQL", "Redis", "Kafka"] },
];

/* ─── Shared Styles ───────────────────────────────── */
const CY = "#06b6d4";
const BORDER = "rgba(6,182,212,0.15)";
const CARD_BG = "rgba(255,255,255,0.015)";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }),
};

export function SoftwareSection() {
  return (
    <div id="software" className="bg-[#030407] selection:bg-cyan-900 selection:text-white">

      {/* ── Ronnon Hero ───────────────────────────────── */}
      <section className="relative py-32 overflow-hidden border-t" style={{ borderColor: BORDER }}>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: `linear-gradient(${CY} 1px, transparent 1px), linear-gradient(90deg, ${CY} 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }} variants={fadeUp} custom={0} 
            className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 p-10 md:p-16 rounded-3xl border overflow-hidden relative group"
            style={{ background: `linear-gradient(135deg, ${CARD_BG}, rgba(6,182,212,0.03))`, borderColor: BORDER, willChange: "transform, opacity" }}>
            
            {/* Ambient Background Glow */}
            <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] rounded-full mix-blend-screen opacity-20 pointer-events-none transition-opacity duration-1000 group-hover:opacity-40"
              style={{ background: `radial-gradient(circle, ${CY}, transparent 70%)`, transform: "translate(40%, -40%)", filter: "blur(60px)", willChange: "opacity" }} />

            <div className="flex-1 relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 block" style={{ color: CY }}>Flagship AI Assistant</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-[1.1]">
                RONNON AI
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed font-light max-w-xl mb-10">
                The world’s first truly autonomous AI software engineer. Ronnon doesn't just autocomplete code; it architectures systems, writes tests, debugs natively, and deploys global applications.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-12">
                {["Autonomous Reasoning", "Full-Stack Generation", "Self-Healing Workflows"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full text-sm font-semibold border tracking-wide"
                    style={{ color: CY, borderColor: BORDER, background: "rgba(6,182,212,0.05)" }}>
                    {tag}
                  </span>
                ))}
              </div>

              <a href="https://ronnon.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105"
                style={{ background: CY, color: "#030407", boxShadow: `0 0 30px rgba(6,182,212,0.3)` }}>
                Try Ronnon Free <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="lg:w-[400px] shrink-0 border rounded-2xl p-6 relative z-10 md:backdrop-blur-xl" style={{ borderColor: BORDER, background: "rgba(3,4,7,0.8)" }}>
               <div className="flex gap-2 items-center mb-6">
                 <div className="w-2 h-2 rounded-full bg-red-500/50" />
                 <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                 <div className="w-2 h-2 rounded-full bg-green-500/50" />
               </div>
               <div className="space-y-4 font-mono text-sm leading-relaxed" style={{ color: CY }}>
                 <p className="opacity-60">$ ronnon generate system</p>
                 <p className="text-slate-300">&gt; Analyzing requirements...</p>
                 <p className="text-slate-300">&gt; Building scalable architecture...</p>
                 <p className="text-slate-300">&gt; Writing 48 components...</p>
                 <p className="text-white font-bold">&gt; Deployment successful. ⚡</p>
               </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── Capabilities ──────────────────────────────── */}
      <section className="relative py-24 border-t" style={{ borderColor: BORDER }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div key={cap.title} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="p-8 rounded-2xl border transition-colors group relative overflow-hidden"
                  style={{ borderColor: BORDER, background: CARD_BG }}>
                  <div className="absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, transparent, ${CY}, transparent)` }} />
                  <Icon className="w-6 h-6 mb-6 transition-transform group-hover:scale-110" style={{ color: CY }} />
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{cap.title}</h3>
                  <p className="text-slate-400 text-base leading-relaxed font-light">{cap.text}</p>
                </motion.div>
              );
            })}
          </div>

          {/* ── Stack ── */}
          <div className="border-t pt-24" style={{ borderColor: BORDER }}>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-12 block text-center" style={{ color: CY }}>Technology Stack</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 max-w-4xl mx-auto">
              {stack.map((group, gi) => (
                <motion.div key={gi} custom={gi} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center md:text-left">
                  <span className="text-xs font-semibold uppercase tracking-widest block mb-4" style={{ color: CY }}>
                    {group.label}
                  </span>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="text-base text-slate-400 font-light flex items-center justify-center md:justify-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full opacity-50" style={{ background: CY }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
