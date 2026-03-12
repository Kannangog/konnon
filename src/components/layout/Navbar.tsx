"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  mode: "hardware" | "software";
  setMode: (mode: "hardware" | "software") => void;
}

export function Navbar({ mode, setMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Links that switch mode AND scroll to top
  const modeLinks = [
    { name: "Hardware", mode: "hardware" as const },
    { name: "Software", mode: "software" as const },
  ];

  // Links that just scroll to their section anchor
  const anchorLinks = [
    { name: "About", href: "#about" },
    { name: "Innovations", href: "#innovations" },
    { name: "Research", href: "#research" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  const handleModeSwitch = (newMode: "hardware" | "software") => {
    setMode(newMode);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/75 backdrop-blur-xl py-4" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* LOGO */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="Go to top"
        >
          {/* K hexagon mark */}
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            {/* Hexagon outline */}
            <path
              d="M17 2L31 10V26L17 34L3 26V10L17 2Z"
              stroke="url(#logoGrad)"
              strokeWidth="1.5"
              fill="none"
              className="group-hover:opacity-80 transition-opacity"
            />
            {/* Inner glow fill */}
            <path
              d="M17 5L29 12V26L17 33L5 26V12L17 5Z"
              fill="url(#logoGrad)"
              fillOpacity="0.08"
            />
            {/* K letterform */}
            <text
              x="17"
              y="22.5"
              textAnchor="middle"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="14"
              fontWeight="700"
              fill="url(#logoGrad)"
              letterSpacing="-0.5"
            >K</text>
          </svg>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-gray-300 transition-all">
            KONNON
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {/* Mode-switching links */}
          {modeLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleModeSwitch(link.mode)}
              className={`text-sm font-medium uppercase tracking-widest relative group transition-colors pb-1 ${
                mode === link.mode ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                  mode === link.mode ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}

          {/* Divider */}
          <span className="w-px h-4 bg-white/15" />

          {/* Anchor-only links */}
          {anchorLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest relative group pb-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-3xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {modeLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleModeSwitch(link.mode)}
                  className={`text-left text-base font-medium uppercase tracking-widest transition-colors ${
                    mode === link.mode ? "text-cyan-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="h-px bg-white/10" />
              {anchorLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-300 hover:text-white uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
