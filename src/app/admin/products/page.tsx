"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Loader2, Package, Plus, Pencil, Trash2 } from "lucide-react";

export default function ProductsManager() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<any>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    link: ""
  });

  const fetchProducts = async () => {
    try {
      const snap = await getDocs(collection(db, "products"));
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleOpenForm = (product: any = null) => {
    if (product) {
      setCurrentProduct(product);
      setFormData({
        title: product.title || "",
        description: product.description || "",
        image: product.image || "",
        link: product.link || ""
      });
    } else {
      setCurrentProduct(null);
      setFormData({ title: "", description: "", image: "", link: "" });
    }
    setIsEditing(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (currentProduct) {
        await updateDoc(doc(db, "products", currentProduct.id), formData);
      } else {
        await addDoc(collection(db, "products"), formData);
      }
      setIsEditing(false);
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    setLoading(true);
    try {
      await deleteDoc(doc(db, "products", id));
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      setLoading(false);
    }
  };

  if (loading && !isEditing) {
    return (
      <div className="flex items-center justify-center p-20">
        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="max-w-2xl bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-6">
          {currentProduct ? "Edit Product" : "New Product"}
        </h2>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="text-sm text-slate-400 block mb-1">Title</label>
            <input
              required
              className="w-full bg-black/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm text-slate-400 block mb-1">Description</label>
            <textarea
              required
              rows={4}
              className="w-full bg-black/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm text-slate-400 block mb-1">Image URL</label>
            <input
              className="w-full bg-black/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm text-slate-400 block mb-1">Learn More Link</label>
            <input
              className="w-full bg-black/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              value={formData.link}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
            />
          </div>
          
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition"
            >
              {loading ? "Saving..." : "Save Product"}
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
          <Package className="w-8 h-8 text-blue-400" />
          <h1 className="text-3xl font-bold text-white">Product Manager</h1>
        </div>
        <button
          onClick={() => handleOpenForm()}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-xl font-medium transition-colors"
        >
          <Plus className="w-5 h-5" /> Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(prod => (
          <div key={prod.id} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 group">
            {prod.image && (
              <img src={prod.image} alt={prod.title} className="w-full h-40 object-cover rounded-xl mb-4 opacity-80" />
            )}
            <h3 className="text-xl font-bold text-white mb-2">{prod.title}</h3>
            <p className="text-slate-400 text-sm mb-4 line-clamp-3">{prod.description}</p>
            {prod.link && (
              <a href={prod.link} target="_blank" rel="noreferrer" className="text-blue-400 text-sm hover:underline mb-4 block">
                {prod.link}
              </a>
            )}
            <div className="flex gap-2 border-t border-slate-800 pt-4">
              <button
                onClick={() => handleOpenForm(prod)}
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800/50 hover:bg-slate-700 transition"
              >
                <Pencil className="w-4 h-4" /> Edit
              </button>
              <button
                onClick={() => handleDelete(prod.id)}
                className="flex items-center gap-2 text-sm text-rose-400 hover:text-rose-300 px-3 py-1.5 rounded-lg bg-rose-950/30 hover:bg-rose-900/50 transition ml-auto"
              >
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            </div>
          </div>
        ))}
        {products.length === 0 && (
           <div className="col-span-full p-8 text-center text-slate-500 bg-slate-900/40 rounded-2xl border border-white/5">
             No products found. Start by adding one.
           </div>
        )}
      </div>
    </div>
  );
}
