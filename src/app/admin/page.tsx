"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { MessageSquare, Package, TestTube, Loader2 } from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ messages: 0, products: 0, research: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [messagesSnap, productsSnap, researchSnap] = await Promise.all([
          getDocs(collection(db, "messages")),
          getDocs(collection(db, "products")),
          getDocs(collection(db, "research"))
        ]);

        setStats({
          messages: messagesSnap.size,
          products: productsSnap.size,
          research: researchSnap.size
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-20">
        <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
      </div>
    );
  }

  const statCards = [
    { label: "Total Messages", value: stats.messages, icon: <MessageSquare className="w-6 h-6 text-purple-400" />, bg: "from-purple-900/40 to-indigo-900/20", border: "border-purple-500/30" },
    { label: "Products / Innovations", value: stats.products, icon: <Package className="w-6 h-6 text-blue-400" />, bg: "from-blue-900/40 to-cyan-900/20", border: "border-blue-500/30" },
    { label: "Research Articles", value: stats.research, icon: <TestTube className="w-6 h-6 text-emerald-400" />, bg: "from-emerald-900/40 to-teal-900/20", border: "border-emerald-500/30" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">System Overview</h1>
      <p className="text-slate-400 mb-8">Metrics and high-level data from the Konnon platform.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((card, idx) => (
          <div key={idx} className={`p-6 rounded-2xl bg-gradient-to-br ${card.bg} border ${card.border} relative overflow-hidden group`}>
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-slate-400 font-medium mb-1">{card.label}</p>
                <h3 className="text-4xl font-bold text-white">{card.value}</h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center">
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
