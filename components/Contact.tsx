
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry received. I will review and respond within 24 hours.");
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-xs mb-4">Engagement</h2>
          <h3 className="text-5xl font-extrabold mb-8 text-white leading-tight">Initiate a Conversation</h3>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            I am available for professional inquiries, technical collaboration, and internship opportunities starting in 2025.
          </p>

          <div className="space-y-6">
            {[
              { label: 'Primary Email', val: 'robiulrabbi4@gmail.com', icon: <Mail size={20} />, color: 'text-indigo-400' },
              { label: 'Direct Line', val: '+91 9779949325', icon: <Phone size={20} />, color: 'text-emerald-400' },
              { label: 'Professional Network', val: 'linkedin.com/in/robiul-rabbi', icon: <Linkedin size={20} />, color: 'text-blue-400' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center transition-all group-hover:bg-slate-700">
                   <div className={item.color}>{item.icon}</div>
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{item.label}</p>
                  <p className="text-lg font-semibold text-slate-200 group-hover:text-indigo-400 transition-colors cursor-pointer">{item.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl blur opacity-20"></div>
          <form onSubmit={handleSubmit} className="relative bg-slate-800/80 backdrop-blur-md p-10 rounded-3xl border border-slate-700 shadow-2xl space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="text-indigo-400" />
              <h4 className="text-xl font-bold text-white">Project Inquiry</h4>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Full Name</label>
              <input 
                type="text" 
                required
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all placeholder:text-slate-700"
                placeholder="Ex. Jane Smith"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Email Address</label>
              <input 
                type="email" 
                required
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all placeholder:text-slate-700"
                placeholder="jane@company.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Message Body</label>
              <textarea 
                rows={4}
                required
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none placeholder:text-slate-700"
                placeholder="Detailed inquiry or proposal..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-indigo-500/20 active:scale-[0.98]"
            >
              Dispatch Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
