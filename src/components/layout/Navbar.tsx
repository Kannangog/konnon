"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavbarProps {
  mode: "hardware" | "software";
  setMode: (mode: "hardware" | "software") => void;
}

export function Navbar({ mode, setMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const rafRef = useRef<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const modeLinks = [
    { name: "Hardware", mode: "hardware" as const },
    { name: "Software", mode: "software" as const },
  ];

  const pageLinks = [
    { name: "About", href: "/about" },
    { name: "Research", href: "/research" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const handleModeSwitch = (newMode: "hardware" | "software") => {
    setMode(newMode);
    if (pathname !== "/") {
      router.push(`/?mode=${newMode}`);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const isHw = mode === "hardware";
  const accent = isHw ? "#94a3b8" : "#06b6d4";
  const accentGlow = isHw ? "rgba(148,163,184,0.15)" : "rgba(6,182,212,0.15)";
  const accentBorder = isHw ? "rgba(148,163,184,0.25)" : "rgba(6,182,212,0.25)";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled
            ? "bg-[#030407]/80 backdrop-blur-2xl py-3 border-white/[0.04] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-5 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg overflow-hidden border transition-colors duration-500"
              style={{ borderColor: accentBorder, background: "rgba(255,255,255,0.02)" }}>
              {/* Subtle inner glow */}
              <div className="absolute inset-0 opacity-20 transition-colors duration-500" style={{ background: `radial-gradient(circle at center, ${accent}, transparent 70%)` }} />
              <span className="relative z-10 text-sm font-bold tracking-tighter" style={{ color: accent }}>K</span>
            </div>
            <span className="text-base font-semibold tracking-wide text-white group-hover:opacity-80 transition-opacity">
              KONNON
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Mode Switcher */}
            <div className="flex p-1 rounded-full border bg-[#0a0f18]/50 backdrop-blur-md"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              {modeLinks.map((link) => {
                const isActive = mode === link.mode && pathname === "/";
                return (
                  <button
                    key={link.name}
                    onClick={() => handleModeSwitch(link.mode)}
                    className="relative px-5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-500 overflow-hidden"
                    style={{ color: isActive ? "#030407" : "#64748b" }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navModePill"
                        className="absolute inset-0 rounded-full"
                        style={{ background: accent, boxShadow: `0 0 20px ${accentGlow}` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="w-px h-4 bg-slate-800" />

            {/* Links */}
            <div className="flex items-center gap-6">
              {pageLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xs font-semibold uppercase tracking-widest transition-colors relative group py-2"
                    style={{ color: isActive ? "#fff" : "#64748b" }}
                  >
                    {link.name}
                    <span
                      className="absolute bottom-0 left-0 h-[2px] w-full origin-left transition-transform duration-300"
                      style={{
                        background: accent,
                        transform: isActive ? "scaleX(1)" : "scaleX(0)",
                      }}
                    />
                    {!isActive && (
                      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-slate-700 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#030407]/95 backdrop-blur-2xl flex flex-col"
          >
            <div className="px-6 py-5 flex items-center justify-between border-b border-white/5">
              <span className="text-base font-semibold tracking-wide text-white">MENU</span>
              <button
                className="text-slate-400 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-6 py-10 flex flex-col gap-8">
              {/* Mobile Mode Switcher */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-4">Division</p>
                <div className="flex flex-col gap-2">
                  {modeLinks.map((link) => {
                    const isActive = mode === link.mode && pathname === "/";
                    return (
                      <button
                        key={link.name}
                        onClick={() => handleModeSwitch(link.mode)}
                        className="flex items-center justify-between p-4 rounded-xl border transition-all"
                        style={{
                          borderColor: isActive ? accentBorder : "rgba(255,255,255,0.05)",
                          background: isActive ? accentGlow : "transparent"
                        }}
                      >
                        <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: isActive ? accent : "#94a3b8" }}>
                          {link.name}
                        </span>
                        {isActive && <div className="w-2 h-2 rounded-full" style={{ background: accent, boxShadow: `0 0 10px ${accent}` }} />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="w-full h-px bg-slate-800/50" />

              {/* Mobile Links */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-4">Navigation</p>
                <div className="flex flex-col gap-4">
                  {pageLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xl font-medium tracking-tight transition-colors"
                        style={{ color: isActive ? "#fff" : "#64748b" }}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
