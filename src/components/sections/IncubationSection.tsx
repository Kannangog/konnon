"use client";

import { motion } from "framer-motion";
import { Handshake, GraduationCap, Building2, Users, Code2, Cpu, Layers, Globe } from "lucide-react";

interface IncubationSectionProps {
  mode: "hardware" | "software";
}

export function IncubationSection({ mode }: IncubationSectionProps) {
  const isHardware = mode === "hardware";

  const badgeColor = isHardware
    ? "bg-emerald-950/30 border-emerald-800/50 text-emerald-300"
    : "bg-cyan-950/30 border-cyan-800/50 text-cyan-300";
  const accent = isHardware ? "from-emerald-400 to-teal-500" : "from-cyan-400 to-blue-500";
  const btnPrimary = isHardware ? "bg-emerald-600 hover:bg-emerald-500" : "bg-cyan-600 hover:bg-cyan-500";

  const cards = isHardware
    ? [
        {
          icon: <Building2 className="w-10 h-10 text-emerald-400 mb-5" />,
          title: "Hardware Ventures",
          desc: "Equity-based engineering support for IoT, PCB, and embedded hardware startups scaling from prototype to production.",
        },
        {
          icon: <GraduationCap className="w-10 h-10 text-emerald-400 mb-5" />,
          title: "University Labs",
          desc: "Joint research programs, hackathons, and fellowships focused on advanced manufacturing and chip design.",
          offset: true,
        },
        {
          icon: <Users className="w-10 h-10 text-emerald-400 mb-5" />,
          title: "Maker Community",
          desc: "A 500+ global network of electronics engineers, hardware founders, and investors shaping physical tech.",
          span: true,
        },
      ]
    : [
        {
          icon: <Code2 className="w-10 h-10 text-cyan-400 mb-5" />,
          title: "SaaS & AI Startups",
          desc: "Technical co-builder support for early-stage software companies building AI-first and cloud-native products.",
        },
        {
          icon: <Globe className="w-10 h-10 text-cyan-400 mb-5" />,
          title: "Developer Programs",
          desc: "API enablement, open-source contributions, and platform grants for developer tool creators.",
          offset: true,
        },
        {
          icon: <Layers className="w-10 h-10 text-cyan-400 mb-5" />,
          title: "Global Network",
          desc: "500+ software engineers, ML researchers, and enterprise investors accelerating digital product launches.",
          span: true,
        },
      ];

  return (
    <section id="incubation" className="relative py-28 bg-[#02050a] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='103.923' viewBox='0 0 60 103.923' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 17.32v34.64l-30 17.32-30-17.32V17.32L30 0z' fill-opacity='0' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${badgeColor}`}>
              {isHardware ? <Cpu className="w-5 h-5 text-emerald-400" /> : <Code2 className="w-5 h-5 text-cyan-400" />}
              <span className="text-sm font-semibold tracking-wider uppercase">
                {isHardware ? "Hardware Incubation" : "Software Incubation"}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">
              Fueling the{" "}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${accent}`}>
                {isHardware ? "Hardware Ecosystem" : "Software Ecosystem"}
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              {isHardware
                ? "We partner with hardware startups and universities to co-create groundbreaking physical tech. Our program provides capital, lab access, engineering resources, and manufacturing guidance."
                : "We partner with software founders and research labs to build the next wave of intelligent applications. Our program provides funding, cloud infrastructure, engineering mentorship, and go-to-market strategy."}
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className={`px-6 py-3 rounded-full text-white font-medium transition-colors ${btnPrimary}`}>
                {isHardware ? "Apply for Incubation" : "Apply for Incubation"}
              </button>
              <button className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700">
                Partner with Us
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.93 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`p-7 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-colors ${
                  card.offset ? "sm:translate-y-8" : ""
                } ${card.span ? "col-span-1 sm:col-span-2 sm:-translate-y-4" : ""}`}
              >
                {card.icon}
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
