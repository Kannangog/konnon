"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Loader2, FileText, CheckCircle2 } from "lucide-react";

export default function ContentManager() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const [content, setContent] = useState({
    heroHeadline: "Building the Next Generation of AI Operating Systems and Intelligent Hardware",
    heroSubtext: "Konnon Technologies is an early-stage research and development company focused on building advanced computing systems, intelligent software platforms, and next-generation hardware technologies.",
    aboutText: "Konnon Technologies Private Limited is a research and development company focused on building advanced software systems, intelligent computing platforms, and future hardware technologies.",
    aboutMission: "Our mission is to develop powerful AI-driven systems that redefine how computing, automation, and digital infrastructure work.",
    careersText: "We are looking for engineers, researchers, and innovators who want to build advanced software and hardware systems."
  });

  useEffect(() => {
    async function fetchContent() {
      try {
        const docRef = doc(db, "siteContent", "homepage");
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setContent({ ...content, ...docSnap.data() });
        }
      } catch (error) {
        console.error("Error fetching content:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchContent();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    
    try {
      await setDoc(doc(db, "siteContent", "homepage"), content);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error("Error saving content:", error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-20">
        <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <FileText className="w-8 h-8 text-cyan-400" />
          <h1 className="text-3xl font-bold text-white">Content Manager</h1>
        </div>
      </div>

      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 relative">
        <form onSubmit={handleSave} className="space-y-8">
          
          {/* Hero Section */}
          <div className="bg-black/20 p-6 rounded-2xl border border-white/5 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400" /> Hero Section
            </h3>
            <div>
              <label className="text-sm text-slate-400 block mb-1">Headline</label>
              <textarea
                rows={2}
                className="w-full bg-black/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                value={content.heroHeadline}
                onChange={(e) => setContent({ ...content, heroHeadline: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm text-slate-400 block mb-1">Subtext</label>
              <textarea
                rows={3}
                className="w-full bg-black/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                value={content.heroSubtext}
                onChange={(e) => setContent({ ...content, heroSubtext: e.target.value })}
              />
            </div>
          </div>

          {/* About Section */}
          <div className="bg-black/20 p-6 rounded-2xl border border-white/5 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400" /> About Section
            </h3>
            <div>
              <label className="text-sm text-slate-400 block mb-1">Company Overview</label>
              <textarea
                rows={3}
                className="w-full bg-black/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                value={content.aboutText}
                onChange={(e) => setContent({ ...content, aboutText: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm text-slate-400 block mb-1">Mission Statement</label>
              <textarea
                rows={3}
                className="w-full bg-black/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                value={content.aboutMission}
                onChange={(e) => setContent({ ...content, aboutMission: e.target.value })}
              />
            </div>
          </div>

          {/* Careers Section */}
          <div className="bg-black/20 p-6 rounded-2xl border border-white/5 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400" /> Careers Section
            </h3>
            <div>
              <label className="text-sm text-slate-400 block mb-1">Description Text</label>
              <textarea
                rows={2}
                className="w-full bg-black/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                value={content.careersText}
                onChange={(e) => setContent({ ...content, careersText: e.target.value })}
              />
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
            <button
              type="submit"
              disabled={saving}
              className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-8 py-3 rounded-xl transition-all disabled:opacity-70 flex items-center gap-2"
            >
              {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : "Publish Changes"}
            </button>
            {saved && (
              <span className="text-emerald-400 font-medium flex items-center gap-1 animate-pulse">
                <CheckCircle2 className="w-5 h-5" /> All content saved to blockchain (Firestore)
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
