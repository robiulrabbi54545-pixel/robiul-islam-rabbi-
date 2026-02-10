
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, MessageCircle, ChevronDown, CheckCircle2, ShieldCheck, Tag, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', topic: 'General Inquiry', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  const setTopic = (topic: string) => {
    setFormState(prev => ({ ...prev, topic }));
  };

  const contactItems = [
    { 
      label: 'Professional Email', 
      val: 'robiulrabbi4@gmail.com', 
      link: 'mailto:robiulrabbi4@gmail.com',
      icon: <Mail size={20} />, 
      color: 'text-indigo-400' 
    },
    { 
      label: 'Direct Mobile', 
      val: '+91 9779949325', 
      link: 'tel:+919779949325',
      icon: <Phone size={20} />, 
      color: 'text-emerald-400' 
    },
    { 
      label: 'LinkedIn Profile', 
      val: 'linkedin.com/in/robiul-rabbi', 
      link: 'https://www.linkedin.com/in/robiul-rabbi-32750a191/',
      icon: <Linkedin size={20} />, 
      color: 'text-blue-400' 
    }
  ];

  const quickTopics = [
    { label: "Hire Me", topic: "Internship Opportunity" },
    { label: "Greeting", topic: "General Inquiry" },
    { label: "Collaboration", topic: "Project Collaboration" }
  ];

  const topics = [
    "General Inquiry",
    "Internship Opportunity",
    "Project Collaboration",
    "Technical Consultation",
    "Academic Discussion"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <div className="lg:sticky lg:top-32">
          <h2 className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-xs mb-4">Availability</h2>
          <h3 className="text-5xl font-extrabold mb-8 text-white leading-tight">Connect with Robiul</h3>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            I am currently based in <span className="text-white font-semibold">Punjab, India</span> and open to software development internships, academic collaborations, or professional networking.
          </p>

          <div className="space-y-8">
            {contactItems.map((item, i) => (
              <a 
                key={i} 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center transition-all group-hover:bg-indigo-600 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-indigo-500/20">
                   <div className={`${item.color} group-hover:text-white transition-colors`}>{item.icon}</div>
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{item.label}</p>
                  <p className="text-lg font-semibold text-slate-200 group-hover:text-indigo-400 transition-colors">{item.val}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 p-8 bg-indigo-500/5 rounded-[2rem] border border-indigo-500/10 flex items-center gap-5">
             <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                <CheckCircle2 size={24} />
             </div>
             <p className="text-slate-400 leading-relaxed">Active and responsive. Typical turnaround time for all professional inquiries is <span className="text-indigo-400 font-bold">24 hours</span>.</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-indigo-800 rounded-[3rem] blur opacity-10"></div>
          <form onSubmit={handleSubmit} className="relative bg-slate-800/80 backdrop-blur-2xl p-10 lg:p-12 rounded-[2.5rem] border border-slate-700/50 shadow-2xl space-y-8">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3 text-indigo-400">
                <MessageCircle />
                <h4 className="text-xl font-bold text-white tracking-tight">Direct Message</h4>
              </div>
              <ShieldCheck size={20} className="text-slate-600" />
            </div>
            
            {isSent ? (
              <div className="py-20 text-center animate-fade-in-up">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-emerald-500/20">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-3xl font-bold text-white mb-2 tracking-tight">Message Received</h4>
                <p className="text-slate-400 max-w-xs mx-auto">Thank you for reaching out, {formState.name}. I'll get back to you soon!</p>
                <button 
                  type="button" 
                  onClick={() => {
                    setIsSent(false);
                    setFormState({ name: '', email: '', topic: 'General Inquiry', message: '' });
                  }}
                  className="mt-10 px-8 py-3 bg-slate-700 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-600 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Tag size={12} className="text-indigo-400" /> Select a Topic
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {quickTopics.map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setTopic(item.topic)}
                        className={`px-4 py-2 rounded-xl text-[11px] font-bold transition-all border ${
                          formState.topic === item.topic 
                            ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/30' 
                            : 'bg-slate-700/50 border-slate-600 text-slate-300 hover:border-indigo-400'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all placeholder:text-slate-600"
                      placeholder="e.g. Robiul Rabbi"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Category</label>
                    <div className="relative">
                      <select 
                        value={formState.topic}
                        onChange={(e) => setFormState({...formState, topic: e.target.value})}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 appearance-none cursor-pointer"
                      >
                        {topics.map(t => <option key={t} value={t} className="bg-slate-900 text-white">{t}</option>)}
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Professional Email</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all placeholder:text-slate-600"
                    placeholder="name@email.com"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Message Content</label>
                  <textarea 
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none placeholder:text-slate-600"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <div className="flex flex-col gap-6">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-indigo-600/20 active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </button>
                  <div className="flex items-center justify-center gap-3 opacity-30">
                     <span className="text-[10px] font-black uppercase tracking-widest text-white">Safe & Secure Transmission</span>
                     <ShieldCheck size={14} className="text-emerald-400" />
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
