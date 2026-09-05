import React, { useState } from 'react';
import { ArrowUpRight, Calendar, Mail, Check, Copy, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', budget: '$10k - $25k', message: '' });

  const email = 'oladele4emmanuel@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#0E0E10] text-[#F7F6F3] relative overflow-hidden">
      <div className="container-editorial">
        
        {/* Section Header Tag */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-8 mb-16">
          <span className="font-mono text-xs text-orange-500 uppercase tracking-widest font-bold">
            10 / INITIATE COLLABORATION
          </span>
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
            AVAILABLE FOR NEW SPRINTS
          </span>
        </div>

        {/* Oversized Marcelo-Inspired Headline */}
        <div className="max-w-6xl mb-16 space-y-6">
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] uppercase tracking-tight leading-[0.88] text-white">
            LET'S BUILD <br />
            SOMETHING <br />
            <span className="text-orange-500">WORTH REMEMBERING.</span>
          </h2>
          <p className="font-body text-neutral-400 text-lg sm:text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
            Have an ambitious web application, UI design system, or complex automation pipeline you want to bring to life? Let's discuss your roadmap.
          </p>
        </div>

        {/* Action Buttons & Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8 border-t border-neutral-800">
          
          {/* Left Column: Quick Booking & Direct Links */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Discovery Call Button */}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-between p-6 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl font-heading font-bold text-xl uppercase tracking-wider transition-all duration-300 shadow-xl group"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                <span>Book a Discovery Call</span>
              </div>
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            {/* Email Copy Card */}
            <div className="p-6 bg-neutral-900 rounded-2xl border border-neutral-800 space-y-3">
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider block">DIRECT EMAIL</span>
              <div className="flex items-center justify-between gap-4">
                <span className="font-heading font-bold text-xl sm:text-2xl text-white truncate">
                  {email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 font-mono text-xs uppercase px-4 py-2 rounded-full bg-neutral-800 hover:bg-orange-500 text-white transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block">SOCIAL & NETWORK</span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-neutral-900 hover:bg-neutral-800 rounded-xl border border-neutral-800 text-neutral-200 flex items-center justify-between font-heading font-bold text-sm uppercase transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4 text-orange-500" />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-neutral-900 hover:bg-neutral-800 rounded-xl border border-neutral-800 text-neutral-200 flex items-center justify-between font-heading font-bold text-sm uppercase transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-4 h-4 text-orange-500" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 bg-neutral-900/70 p-8 sm:p-12 rounded-3xl border border-neutral-800">
            {formSubmitted ? (
              <div className="py-16 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-black text-3xl uppercase text-white">INQUIRY RECEIVED</h3>
                <p className="font-body text-neutral-300 max-w-md mx-auto">
                  Thank you for reaching out. Emmanuel will review your project parameters and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-heading font-bold text-2xl uppercase text-white border-b border-neutral-800 pb-4">
                  SEND DIRECT INQUIRY
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase text-neutral-400">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase text-neutral-400">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-neutral-400">Estimated Project Investment</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-white focus:outline-none focus:border-orange-500 transition-colors font-mono text-sm"
                  >
                    <option value="$5k - $10k">$5,000 – $10,000</option>
                    <option value="$10k - $25k">$10,000 – $25,000</option>
                    <option value="$25k+">$25,000+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-neutral-400">Project Details & Objectives *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your product requirements, target timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-inverse justify-center py-4 text-sm"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
