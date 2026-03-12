import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, ArrowRight, X, Upload } from "lucide-react";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";

interface Job {
  id: string;
  role: string;
  type: string;
  loc: string;
  dept: string;
}

export function CareersSection() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    coverLetter: ""
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const querySnapshot = await getDocs(collection(db, "jobs"));
        const jobsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Job));
        setJobs(jobsData);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }
    fetchJobs();
  }, []);

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob || !resumeFile) return;

    setIsSubmitting(true);
    try {
      // 1. Upload Resume
      const resumeRef = ref(storage, `resumes/${Date.now()}_${resumeFile.name}`);
      const uploadResult = await uploadBytes(resumeRef, resumeFile);
      const resumeUrl = await getDownloadURL(uploadResult.ref);

      // 2. Save Application
      await addDoc(collection(db, "applications"), {
        jobId: selectedJob.id,
        jobRole: selectedJob.role,
        applicantName: formData.name,
        applicantEmail: formData.email,
        linkedinUrl: formData.linkedin,
        coverLetter: formData.coverLetter,
        resumeUrl,
        createdAt: serverTimestamp()
      });

      setSubmitSuccess(true);
      setTimeout(() => {
        setSelectedJob(null);
        setSubmitSuccess(false);
        setFormData({ name: "", email: "", linkedin: "", coverLetter: "" });
        setResumeFile(null);
      }, 3000);

    } catch (error) {
      console.error("Error applying:", error);
      alert("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToRoles = () => {
    document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="careers" className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 bg-blue-950/30 border-blue-800/50 text-blue-300">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold tracking-wider uppercase">
              Join Our Team
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight leading-tight">
            We are building the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              future of computing.
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            We are looking for engineers, researchers, and innovators who want to build advanced software and hardware systems.
          </p>

          <button 
            onClick={scrollToRoles}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-slate-200 transition-colors uppercase tracking-wider group"
          >
            View Open Positions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Perks and Benefits */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mt-32 text-left"
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center md:text-left">Life at Konnon</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {[
               { title: "Uncapped R&D Budget", desc: "Access to state-of-the-art silicon, compute clusters, and prototyping materials." },
               { title: "Remote-First Architecture", desc: "Work from anywhere in the world. We care about execution, not office hours." },
               { title: "Comprehensive Health", desc: "Top-tier medical, dental, and vision coverage for you and your dependents." },
               { title: "Continuous Learning", desc: "Stipends for conferences, courses, and literature to keep you at the bleeding edge." }
             ].map((perk, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-blue-950/10 border border-blue-900/30 flex flex-col justify-center">
                   <h4 className="text-xl font-bold text-white mb-2">{perk.title}</h4>
                   <p className="text-slate-400">{perk.desc}</p>
                </div>
             ))}
          </div>
        </motion.div>

        {/* Open Roles */}
        <motion.div
           id="open-roles"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mt-32 text-left pb-16"
        >
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-white">Open Roles</h3>
            <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full text-sm font-medium">
              {jobs.length} {jobs.length === 1 ? 'Position' : 'Positions'}
            </span>
          </div>

          <div className="space-y-4">
            {jobs.length === 0 ? (
              <div className="text-center py-12 border border-slate-800 rounded-2xl bg-slate-900/20">
                <p className="text-slate-400 font-medium">No open roles currently. Please check back later.</p>
              </div>
            ) : (
              jobs.map((job) => (
               <div 
                 key={job.id} 
                 onClick={() => setSelectedJob(job)}
                 className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all cursor-pointer"
               >
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">{job.role}</h4>
                    <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-400">
                      <span className="px-2 py-1 bg-slate-800 rounded-md text-white">{job.dept}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.loc}</span>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0">
                     <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                       <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
                     </div>
                  </div>
               </div>
             ))
            )}
          </div>
        </motion.div>

      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-6 flex justify-between items-center z-10">
                <div>
                  <h3 className="text-2xl font-bold text-white">Apply for {selectedJob.role}</h3>
                  <p className="text-slate-400 text-sm mt-1">{selectedJob.loc} • {selectedJob.type}</p>
                </div>
                <button 
                  onClick={() => !isSubmitting && setSelectedJob(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Application Submitted!</h4>
                    <p className="text-slate-400">Thank you for your interest. Our team will review your application and get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleApply} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">LinkedIn Profile URL</label>
                      <input
                        type="url"
                        value={formData.linkedin}
                        onChange={e => setFormData({...formData, linkedin: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50"
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Resume / CV (PDF) *</label>
                      <label className={`block w-full border-2 border-dashed ${resumeFile ? 'border-cyan-500 text-cyan-400' : 'border-slate-700 text-slate-500'} rounded-xl p-6 text-center cursor-pointer hover:border-cyan-500 hover:text-cyan-400 transition-colors`}>
                        <input 
                          type="file" 
                          accept=".pdf,.doc,.docx" 
                          required 
                          className="hidden"
                          onChange={e => setResumeFile(e.target.files?.[0] || null)}
                        />
                        <Upload className="w-8 h-8 mx-auto mb-2" />
                        <span className="font-medium">
                          {resumeFile ? resumeFile.name : "Click to upload your resume"}
                        </span>
                      </label>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Cover Letter / Note</label>
                      <textarea
                        rows={4}
                        value={formData.coverLetter}
                        onChange={e => setFormData({...formData, coverLetter: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 resize-y"
                        placeholder="Tell us why you are a great fit..."
                      />
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex justify-end gap-4">
                      <button 
                        type="button" 
                        onClick={() => setSelectedJob(null)}
                        className="px-6 py-3 rounded-xl font-bold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit" 
                        disabled={isSubmitting || !resumeFile}
                        className="px-8 py-3 rounded-xl font-bold bg-white text-black hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            Submitting...
                          </>
                        ) : "Submit Application"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
