"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Loader2, Mail, Trash2 } from "lucide-react";

export default function MessagesManager() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    try {
      setLoading(true);
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return;
    try {
      await deleteDoc(doc(db, "messages", id));
      setMessages(prev => prev.filter(m => m.id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
      alert("Failed to delete message. Check console for details.");
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
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Mail className="w-8 h-8 text-cyan-400" />
        <h1 className="text-3xl font-bold text-white">Contact Messages</h1>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {messages.length === 0 ? (
          <div className="p-8 text-center text-slate-500 bg-slate-900/40 rounded-2xl border border-white/5">
            No messages found.
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-colors relative">
              <button 
                onClick={() => handleDelete(msg.id)}
                className="absolute top-6 right-6 p-2 text-slate-500 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-all"
                title="Delete Message"
              >
                <Trash2 className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row justify-between gap-4 mb-4 pr-10">
                <div>
                  <h3 className="text-lg font-bold text-white">{msg.name}</h3>
                  <a href={`mailto:${msg.email}`} className="text-sm text-cyan-400 hover:underline">{msg.email}</a>
                </div>
                {msg.createdAt && (
                  <span className="text-xs text-slate-500 font-medium">
                    {new Date(msg.createdAt.seconds * 1000).toLocaleString()}
                  </span>
                )}
              </div>
              <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                <p className="text-slate-300 whitespace-pre-wrap">{msg.message}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
