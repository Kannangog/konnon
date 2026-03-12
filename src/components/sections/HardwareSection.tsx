"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Microchip, Activity, Settings, Zap, ShieldAlert, Wifi } from "lucide-react";

/* ─── Data ────────────────────────────────────────── */
const capabilities = [
  { icon: Layers, title: "Prototyping & CAD", text: "High-fidelity rapid prototyping leveraging advanced stereolithography and 5-axis CNC machining workflows." },
  { icon: Microchip, title: "Embedded Engineering", text: "Multi-layer PCB design and dense component routing for space-constrained edge compute and IoT devices." },
  { icon: Activity, title: "Firmware Architecture", text: "Bare-metal and RTOS firmware in C/Rust targeting ARM Cortex and RISC-V with secure OTA capabilites." },
  { icon: Settings, title: "Lifecycle & DFM", text: "End-to-end design for manufacturing. We manage BOM risk, yield tracking, and certified CM handoffs." },
];

const timeline = [
  { no: "01", title: "Feasibility Analysis", desc: "Thermal modeling, BOM costing, and technical derisking." },
  { no: "02", title: "Schematic & Routing", desc: "Signal integrity verification and impedance-controlled routing." },
  { no: "03", title: "Pre-Flight Testing", desc: "Hardware-in-the-loop validation and EMI pre-compliance." },
  { no: "04", title: "Scale & Production", desc: "Mass manufacturing transfer, quality assurance, and global logistics." },
];

/* ─── Shared Styles ───────────────────────────────── */
const ACCENT = "#94a3b8"; // Silver/Slate
const BORDER = "rgba(148,163,184,0.1)";
const CARD_BG = "rgba(255,255,255,0.015)";
const CARD_HOVER = "rgba(148,163,184,0.03)";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};

export function HardwareSection() {
  return (
    <div id="hardware" className="bg-[#030407] selection:bg-slate-800">
      
      {/* ── Capabilities ──────────────────────────────── */}
      <section className="relative py-32 overflow-hidden border-t" style={{ borderColor: BORDER }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
            
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={0} className="md:w-1/3 shrink-0">
              <div className="sticky top-32">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block" style={{ color: ACCENT }}>01 / Capabilities</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6 leading-tight">
                  Precision<br />Engineering.
                </h2>
                <p className="text-slate-400 leading-relaxed font-light mb-8">
                  We don't just design hardware; we architect physical systems meant to survive and scale in the real world.
                </p>
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  <Cpu className="w-4 h-4" /> Silicon to Systems
                </div>
              </div>
            </motion.div>

            <div className="md:w-2/3 grid sm:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <motion.div key={cap.title} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="p-8 rounded-2xl border transition-colors group"
                    style={{ borderColor: BORDER, background: CARD_BG }}>
                    <Icon className="w-6 h-6 mb-6 transition-transform group-hover:scale-110" style={{ color: ACCENT }} />
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{cap.title}</h3>
                    <p className="text-slate-400 text-base leading-relaxed font-light">{cap.text}</p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────── */}
      <section className="relative py-32 border-t" style={{ borderColor: BORDER }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-16 md:text-center max-w-2xl md:mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block" style={{ color: ACCENT }}>02 / Workflow</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
              The Path to Production
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {timeline.map((step, i) => (
              <motion.div key={step.no} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="relative p-8 border rounded-2xl"
                style={{ borderColor: BORDER, background: CARD_BG }}>
                <div className="text-4xl font-light mb-8 opacity-20 transition-opacity" style={{ color: ACCENT }}>{step.no}</div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Applications ─────────────────────────────── */}
      <section className="relative py-32 border-t" style={{ borderColor: BORDER }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-6">
            
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={0} 
              className="lg:col-span-1 p-8 rounded-2xl border flex flex-col justify-end min-h-[300px]"
              style={{ borderColor: BORDER, background: `linear-gradient(180deg, ${CARD_BG}, rgba(148,163,184,0.05))` }}>
              <Zap className="w-8 h-8 mb-auto" style={{ color: ACCENT }} />
              <h3 className="text-3xl font-bold text-white tracking-tight mb-4">Energy Systems</h3>
              <p className="text-slate-400 text-base font-light leading-relaxed max-w-sm">Micro-grid controllers, EV infrastructure, and high-voltage embedded monitoring.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={1} 
              className="lg:col-span-1 p-8 rounded-2xl border flex flex-col justify-end min-h-[300px]"
              style={{ borderColor: BORDER, background: `linear-gradient(180deg, ${CARD_BG}, rgba(148,163,184,0.05))` }}>
              <ShieldAlert className="w-8 h-8 mb-auto" style={{ color: ACCENT }} />
              <h3 className="text-3xl font-bold text-white tracking-tight mb-4">Defense / Aerospace</h3>
              <p className="text-slate-400 text-base font-light leading-relaxed max-w-sm">Ruggedized compute modules tested against extreme shock, vibration, and thermal envelopes.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={2} 
              className="lg:col-span-1 p-8 rounded-2xl border flex flex-col justify-end min-h-[300px]"
              style={{ borderColor: BORDER, background: `linear-gradient(180deg, ${CARD_BG}, rgba(148,163,184,0.05))` }}>
              <Wifi className="w-8 h-8 mb-auto" style={{ color: ACCENT }} />
              <h3 className="text-3xl font-bold text-white tracking-tight mb-4">Industrial IoT</h3>
              <p className="text-slate-400 text-base font-light leading-relaxed max-w-sm">Low-power wide-area sensor networks predicting mechanical failure on the factory floor.</p>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
