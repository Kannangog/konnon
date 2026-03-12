"use client";

import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Loader2, Trash2, Plus, Briefcase } from "lucide-react";

interface Job {
  id: string;
  role: string;
  type: string;
  loc: string;
  dept: string;
  createdAt?: any;
}

export default function AdminJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  
  const [newJob, setNewJob] = useState({
    role: "",
    type: "Full-time",
    loc: "Remote",
    dept: "Software R&D"
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const q = query(collection(db, "jobs"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const jobsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Job));
      setJobs(jobsData);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddJob = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newJob.role || !newJob.type || !newJob.loc || !newJob.dept) return;

    try {
      setIsAdding(true);
      await addDoc(collection(db, "jobs"), {
        ...newJob,
        createdAt: serverTimestamp()
      });
      setNewJob({ role: "", type: "Full-time", loc: "Remote", dept: "Software R&D" });
      await fetchJobs();
    } catch (error) {
      console.error("Error adding job:", error);
      alert("Failed to add job");
    } finally {
      setIsAdding(false);
    }
  };

  const handleDeleteJob = async (id: string) => {
    if (!confirm("Are you sure you want to delete this job?")) return;
    
    try {
      await deleteDoc(doc(db, "jobs", id));
      await fetchJobs();
    } catch (error) {
      console.error("Error deleting job:", error);
      alert("Failed to delete job");
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
          <h1 className="text-3xl font-bold text-white mb-2">Job Openings</h1>
          <p className="text-slate-400">Manage career opportunities at Konnon.</p>
        </div>
        <div className="w-12 h-12 rounded-xl bg-cyan-900/30 border border-cyan-500/30 flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-cyan-400" />
        </div>
      </div>

      {/* Add New Job Form */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Plus className="w-5 h-5 text-cyan-400" /> Post New Job
        </h2>
        <form onSubmit={handleAddJob} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Role Title</label>
            <input
              type="text"
              value={newJob.role}
              onChange={(e) => setNewJob({ ...newJob, role: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50"
              placeholder="e.g. AI Systems Engineer"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Department</label>
            <input
              type="text"
              value={newJob.dept}
              onChange={(e) => setNewJob({ ...newJob, dept: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50"
              placeholder="e.g. Software R&D"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Location</label>
            <input
              type="text"
              value={newJob.loc}
              onChange={(e) => setNewJob({ ...newJob, loc: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50"
              placeholder="e.g. Remote"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Type</label>
            <select
              value={newJob.type}
              onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50"
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div className="md:col-span-2 pt-2">
            <button
              type="submit"
              disabled={isAdding || !newJob.role}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition-colors disabled:opacity-50 flex justify-center items-center gap-2"
            >
              {isAdding ? <Loader2 className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5" />}
              {isAdding ? "Posting..." : "Post Job Opening"}
            </button>
          </div>
        </form>
      </div>

      {/* Existing Jobs List */}
      <h2 className="text-xl font-bold text-white mb-6">Active Job Postings ({jobs.length})</h2>
      
      {jobs.length === 0 ? (
        <div className="text-center py-12 bg-slate-900/30 border border-slate-800 border-dashed rounded-2xl">
          <Briefcase className="w-8 h-8 text-slate-600 mx-auto mb-4" />
          <p className="text-slate-400">No active job postings.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:border-slate-700">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{job.role}</h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                  <span className="bg-slate-800 px-2 py-1 rounded-md text-slate-300">{job.dept}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.loc}</span>
                </div>
              </div>
              <button
                onClick={() => handleDeleteJob(job.id)}
                className="flex items-center gap-2 text-rose-500 hover:text-rose-400 hover:bg-rose-500/10 px-4 py-2 rounded-xl transition-colors shrink-0"
              >
                <Trash2 className="w-5 h-5" />
                <span>Delete</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
