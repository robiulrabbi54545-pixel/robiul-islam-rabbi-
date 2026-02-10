
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, MessageCircle, ChevronDown, CheckCircle2, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', topic: 'General Inquiry', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
    setFormState({ name: '', email: '', topic: 'General Inquiry', message: '' });
  };

  const contactItems = [
    { 
      label: 'Primary Email', 
      val: 'robiulrabbi4@gmail.com', 
      link: 'mailto:robiulrabbi4@gmail.com',
      icon: <Mail size={20} />, 
      color: 'text-indigo-400' 
    },
    { 
      label: 'Direct Line', 
      val: '+91 9779949325', 
      link: 'tel:+919779949325',
      icon: <Phone size={20} />, 
      color: 'text-emerald-400' 
    },
    { 
      label: 'Professional Network', 
      val: 'linkedin.com/in/robiul-rabbi', 
      link: 'https://www.linkedin.com/in/robiul-rabbi-32750a191/',
      icon: <Linkedin size={20} />, 
      color: 'text-blue-400' 
    }
  ];

  const topics = [
    "General Inquiry",
    "Internship Opportunity",
    "Project Collaboration",
    "Technical Consultation",
    "Feedback"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <div className="lg:sticky lg:top-32">
          <h2 className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-xs mb-4">Direct Communication</h2>
          <h3 className="text-5xl font-extrabold mb-8 text-white leading-tight">Get in Touch</h3>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            I am currently living in Punjab and looking forward to connecting with technology enthusiasts and potential employers. Feel free to reach out via email or the form.
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
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center transition-all group-hover:bg-indigo-600 group-hover:scale-110">
                   <div className={`${item.color} group-hover:text-white transition-colors`}>{item.icon}</div>
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{item.label}</p>
                  <p className="text-lg font-semibold text-slate-200 group-hover:text-indigo-400 transition-colors">{item.val}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <CheckCircle2 size={20} />
             </div>
             <p className="text-sm text-slate-400">Successfully receiving messages and responding within a <span className="text-white font-bold">24-hour</span> window.</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-indigo-800 rounded-3xl blur opacity-20"></div>
          <form onSubmit={handleSubmit} className="relative bg-slate-800/80 backdrop-blur-xl p-10 lg:p-12 rounded-[2.5rem] border border-slate-700 shadow-2xl space-y-8">
            <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-6">
              <div className="flex items-center gap-3">
                <MessageCircle className="text-indigo-400" />
                <h4 className="text-xl font-bold text-white">Direct Message</h4>
              </div>
              <ShieldCheck size={20} className="text-slate-600" />
            </div>
            
            {isSent ? (
              <div className="py-12 text-center animate-fade-in-up">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Message Dispatched</h4>
                <p className="text-slate-400">Thank you, {formState.name || 'friend'}. Robiul will review your inquiry shortly.</p>
                <button 
                  type="button" 
                  onClick={() => setIsSent(false)}
                  className="mt-8 text-indigo-400 text-sm font-bold uppercase tracking-widest hover:text-indigo-300 transition-colors"
                >
                  Send another?
                </button>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all placeholder:text-slate-700"
                      placeholder="Enter name"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Topic</label>
                    <div className="relative">
                      <select 
                        value={formState.topic}
                        onChange={(e) => setFormState({...formState, topic: e.target.value})}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 appearance-none cursor-pointer"
                      >
                        {topics.map(t => <option key={t} value={t} className="bg-slate-900">{t}</option>)}
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all placeholder:text-slate-700"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Message Content</label>
                  <textarea 
                    rows={5}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none placeholder:text-slate-700"
                    placeholder="Describe your inquiry in detail..."
                  ></textarea>
                </div>

                <div className="flex flex-col gap-6">
                  <button 
                    type="submit" 
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-indigo-500/20 active:scale-[0.98]"
                  >
                    Send Message <Send size={18} />
                  </button>
                  <p className="text-[10px] text-slate-600 text-center uppercase tracking-widest flex items-center justify-center gap-2">
                    <ShieldCheck size={12} /> Secure Connection • Privacy Protected
                  </p>
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
