"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Loader2, TestTube, Plus, Pencil, Trash2 } from "lucide-react";

export default function ResearchManager() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<any>(null);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    date: "",
    author: ""
  });

  const fetchArticles = async () => {
    try {
      const snap = await getDocs(collection(db, "research"));
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setArticles(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleOpenForm = (article: any = null) => {
    if (article) {
      setCurrentArticle(article);
      setFormData({
        title: article.title || "",
        content: article.content || "",
        date: article.date || "",
        author: article.author || ""
      });
    } else {
      setCurrentArticle(null);
      setFormData({ title: "", content: "", date: "", author: "" });
    }
    setIsEditing(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (currentArticle) {
        await updateDoc(doc(db, "research", currentArticle.id), formData);
      } else {
        await addDoc(collection(db, "research"), formData);
      }
      setIsEditing(false);
      fetchArticles();
    } catch (error) {
      console.error("Error saving article:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this article?")) return;
    setLoading(true);
    try {
      await deleteDoc(doc(db, "research", id));
      fetchArticles();
    } catch (error) {
      console.error("Error deleting article:", error);
      setLoading(false);
    }
  };

  if (loading && !isEditing) {
    return (
      <div className="flex items-center justify-center p-20">
        <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="max-w-2xl bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-6">
          {currentArticle ? "Edit Article" : "New Article"}
        </h2>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="text-sm text-slate-400 block mb-1">Title</label>
            <input
              required
              className="w-full bg-black/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm text-slate-400 block mb-1">Content</label>
            <textarea
              required
              rows={6}
              className="w-full bg-black/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-400 block mb-1">Date</label>
              <input
                required
                type="date"
                className="w-full bg-black/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm text-slate-400 block mb-1">Author</label>
              <input
                required
                className="w-full bg-black/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              />
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-xl transition"
            >
              {loading ? "Saving..." : "Save Article"}
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <TestTube className="w-8 h-8 text-purple-400" />
          <h1 className="text-3xl font-bold text-white">Research Manager</h1>
        </div>
        <button
          onClick={() => handleOpenForm()}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 px-5 py-2.5 rounded-xl font-medium transition-colors"
        >
          <Plus className="w-5 h-5" /> Add Article
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {articles.map(article => (
          <div key={article.id} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row justify-between gap-6 group">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
              <div className="flex items-center gap-4 text-xs text-purple-300 uppercase tracking-widest font-medium mb-4">
                <span>{article.author}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
              <p className="text-slate-400 text-sm line-clamp-2">{article.content}</p>
            </div>
            
            <div className="flex md:flex-col justify-end gap-2 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6 min-w-32">
              <button
                onClick={() => handleOpenForm(article)}
                className="flex items-center justify-center gap-2 text-sm text-slate-300 hover:text-white px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-700 transition"
              >
                <Pencil className="w-4 h-4" /> Edit
              </button>
              <button
                onClick={() => handleDelete(article.id)}
                className="flex items-center justify-center gap-2 text-sm text-rose-400 hover:text-rose-300 px-3 py-2 rounded-lg bg-rose-950/30 hover:bg-rose-900/50 transition"
              >
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            </div>
          </div>
        ))}
        {articles.length === 0 && (
           <div className="col-span-full p-8 text-center text-slate-500 bg-slate-900/40 rounded-2xl border border-white/5">
             No articles found. Start by adding one.
           </div>
        )}
      </div>
    </div>
  );
}
