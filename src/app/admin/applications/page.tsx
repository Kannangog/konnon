"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Loader2, Briefcase, ExternalLink, Trash2, Mail, User, CalendarDays, MapPin } from "lucide-react";

interface Application {
  id: string;
  jobRole: string;
  applicantName: string;
  applicantEmail: string;
  linkedinUrl?: string;
  coverLetter?: string;
  resumeUrl: string;
  createdAt?: any;
}

export default function ApplicationsManager() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const q = query(collection(db, "applications"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Application));
      setApplications(data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this application?")) return;
    try {
      await deleteDoc(doc(db, "applications", id));
      setApplications(prev => prev.filter(a => a.id !== id));
    } catch (error) {
      console.error("Error deleting application:", error);
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
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Job Applications</h1>
          <p className="text-slate-400">Submitted applications from candidates.</p>
        </div>
        <span className="px-4 py-2 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 font-semibold text-sm">
          {applications.length} Total
        </span>
      </div>

      {applications.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/30 border border-slate-800 border-dashed rounded-2xl">
          <Briefcase className="w-8 h-8 text-slate-600 mx-auto mb-4" />
          <p className="text-slate-400">No applications submitted yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {applications.map((app) => (
            <div key={app.id} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-widest px-2 py-1 bg-cyan-900/30 text-cyan-400 border border-cyan-500/20 rounded-full">
                      {app.jobRole}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2 mt-2">
                    <User className="w-4 h-4 text-slate-400" /> {app.applicantName}
                  </h3>
                  <a href={`mailto:${app.applicantEmail}`} className="text-sm text-cyan-400 hover:underline flex items-center gap-1 mt-1">
                    <Mail className="w-3 h-3" /> {app.applicantEmail}
                  </a>
                  {app.linkedinUrl && (
                    <a href={app.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline flex items-center gap-1 mt-1">
                      <ExternalLink className="w-3 h-3" /> LinkedIn Profile
                    </a>
                  )}
                </div>
                <div className="flex flex-col items-end gap-2">
                  {app.createdAt && (
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <CalendarDays className="w-3 h-3" />
                      {new Date(app.createdAt.seconds * 1000).toLocaleString()}
                    </span>
                  )}
                  <div className="flex gap-2 mt-1">
                    <a
                      href={app.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl bg-white/5 border border-slate-700 text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Resume
                    </a>
                    <button
                      onClick={() => handleDelete(app.id)}
                      className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/30 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              {app.coverLetter && (
                <div className="mt-3 pt-3 border-t border-slate-800">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Cover Letter</p>
                  <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">{app.coverLetter}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
