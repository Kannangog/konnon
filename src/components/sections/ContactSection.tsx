"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Mail, MapPin } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-[#020202] overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-5/12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Transmission</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12">
              Ready to build the future? Reach out to schedule a technical consultation or explore partnership opportunities.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-slate-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-1">Direct Inquiries</p>
                  <a href="mailto:kannan7k.rlm@gmail.com" className="text-lg text-white font-medium hover:text-cyan-400 transition-colors">
                    kannan7k.rlm@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-slate-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-1">Global HQ</p>
                  <p className="text-lg text-white font-medium">Research Triangle, NC</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-7/12"
          >
            <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl bg-slate-900/40 border border-slate-800 shadow-2xl backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400">Identification Code (Name)</label>
                  <input
                    id="name"
                    required
                    type="text"
                    className="bg-black/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-slate-500 transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400">Comms Relay (Email)</label>
                  <input
                    id="email"
                    required
                    type="email"
                    className="bg-black/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-slate-500 transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2 mb-8">
                <label htmlFor="message" className="text-sm font-medium text-slate-400">Transmission Payload (Message)</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="bg-black/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-slate-500 transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full py-4 rounded-xl bg-white text-black font-semibold tracking-wide hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : status === "success" ? (
                  "Transmission Sent"
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Transmit Data
                  </>
                )}
              </button>
              
              {status === "error" && (
                <p className="text-red-400 text-sm text-center mt-4">Failed to send transmission. Please try again.</p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
