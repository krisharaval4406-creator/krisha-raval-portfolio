"use client";

import { useState, type FormEvent } from "react";
import { Check, CheckCircle2, Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { profile } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "919313479022";
const EMAIL = profile.email;

type SendChannel = "whatsapp" | "email" | null;

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [channel, setChannel] = useState<SendChannel>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsappUrl = () => {
    const body = `Hi Krisha,\n\nName: ${form.name}\nEmail: ${form.email}\n\nSubject: ${form.subject}\n\n${form.message}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
  };

  const getMailtoUrl = () => {
    const body = `Hi Krisha,\n\nFrom: ${form.name} (${form.email})\n\n${form.message}`;
    return `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };

  const sendVia = (via: "whatsapp" | "email") => {
    setChannel(via);
  };

  const reset = () => {
    setForm({ name: "", email: "", subject: "", message: "" });
    setSubmitted(false);
    setChannel(null);
  };

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 section container-xl">
        <FadeIn className="text-center mb-16">
          <div className="section-label mx-auto w-fit mb-6">
            <Mail size={14} /> Contact
          </div>
          <h1 className="text-[clamp(28px,4vw,52px)] font-display font-extrabold text-[var(--text-primary)] mb-4 leading-tight">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-body-lg text-[var(--text-secondary)] max-w-xl mx-auto">
            Fill the form below — then choose to send via WhatsApp or Email.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left column */}
          <FadeIn direction="left" className="lg:col-span-2 flex flex-col gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[13px] font-semibold text-green-500 uppercase tracking-widest">
                  Available for Opportunities
                </span>
              </div>
              <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">
                Open to AI/ML internships, research collaborations, and full-stack projects. Typical response time: within 24 hours.
              </p>
            </div>
            <div className="card p-6">
              <h2 className="text-[15px] font-semibold text-[var(--text-primary)] mb-4">Contact Details</h2>
              <ul className="space-y-3 text-[13px] text-[var(--text-secondary)]">
                <li className="flex items-center gap-3">
                  <Mail size={15} className="text-[var(--accent-primary)] shrink-0" />
                  <a href={`mailto:${EMAIL}`} className="hover:text-[var(--accent-primary)] transition-fast break-all">{EMAIL}</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={15} className="text-[var(--accent-primary)] shrink-0" />
                  <span>Rajkot, Gujarat, India – 360009</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={15} className="text-[var(--accent-primary)] shrink-0" />
                  <span>+91 93134 79022</span>
                </li>
              </ul>
            </div>
            <div className="card p-6">
              <h2 className="text-[15px] font-semibold text-[var(--text-primary)] mb-4">Follow Me</h2>
              <div className="flex gap-4">
                <a href={profile.socials.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-fast">
                  <Github size={15} /> GitHub
                </a>
                <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-fast">
                  <Linkedin size={15} /> LinkedIn
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right column — form or send-channel picker */}
          <FadeIn direction="right" className="lg:col-span-3">
            <div className="card p-8 min-h-[520px] flex flex-col">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  /* ── STEP 1: FORM ── */
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col flex-1"
                  >
                    <h2 className="text-[20px] font-display font-bold text-[var(--text-primary)] mb-6">
                      Send a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[13px] font-medium text-[var(--text-secondary)] block mb-1.5">Full Name *</label>
                          <input required placeholder="Your Name" value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none focus:border-[var(--accent-primary)] transition-fast" />
                        </div>
                        <div>
                          <label className="text-[13px] font-medium text-[var(--text-secondary)] block mb-1.5">Email Address *</label>
                          <input required type="email" placeholder="you@example.com" value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none focus:border-[var(--accent-primary)] transition-fast" />
                        </div>
                      </div>
                      <div>
                        <label className="text-[13px] font-medium text-[var(--text-secondary)] block mb-1.5">Subject *</label>
                        <input required placeholder="What's this about?" value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none focus:border-[var(--accent-primary)] transition-fast" />
                      </div>
                      <div className="flex-1">
                        <label className="text-[13px] font-medium text-[var(--text-secondary)] block mb-1.5">Message *</label>
                        <textarea required rows={6} placeholder="Tell me about your project or opportunity..." value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none focus:border-[var(--accent-primary)] transition-fast resize-none" />
                      </div>
                      <button type="submit" className="btn-primary w-full justify-center text-[15px] py-3.5 mt-auto">
                        Continue →
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  /* ── STEP 2: SEND CHANNEL PICKER ── */
                  <motion.div
                    key="picker"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col flex-1"
                  >
                    {channel ? (
                      /* Sent confirmation — only after user clicked "I've sent it" */
                      <div className="flex flex-col items-center justify-center flex-1 text-center gap-6 py-8">
                        <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center text-green-500">
                          <CheckCircle2 size={36} />
                        </div>
                        <div>
                          <p className="text-[18px] font-bold text-[var(--text-primary)] mb-2">
                            Message sent via {channel === "whatsapp" ? "WhatsApp" : "Email"}!
                          </p>
                          <p className="text-[13px] text-[var(--text-secondary)]">I'll get back to you within 24 hours.</p>
                        </div>
                        <button onClick={reset} className="text-[13px] text-[var(--accent-primary)] hover:underline">
                          Send another message
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="mb-6">
                          <h2 className="text-[20px] font-display font-bold text-[var(--text-primary)] mb-1">
                            How should I receive it?
                          </h2>
                          <p className="text-[13px] text-[var(--text-secondary)]">
                            Your message is ready — pick a channel to send it.
                          </p>
                        </div>

                        {/* Quick preview of the message */}
                        <div className="mb-6 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[12px] text-[var(--text-secondary)] space-y-1">
                          <p><span className="font-semibold text-[var(--text-primary)]">From:</span> {form.name} ({form.email})</p>
                          <p><span className="font-semibold text-[var(--text-primary)]">Subject:</span> {form.subject}</p>
                          <p className="line-clamp-2"><span className="font-semibold text-[var(--text-primary)]">Message:</span> {form.message}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-5 flex-1">
                          {/* WhatsApp — real anchor, never blocked */}
                          <motion.a
                            href={getWhatsappUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03, y: -4 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex flex-col items-center gap-4 p-7 rounded-2xl border-2 border-[#25D366]/30 bg-[#25D366]/5 hover:bg-[#25D366]/10 hover:border-[#25D366]/60 transition-all cursor-pointer group"
                          >
                            <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all">
                              <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                              </svg>
                            </div>
                            <div className="text-center">
                              <p className="font-semibold text-[15px] text-[var(--text-primary)] mb-1">WhatsApp</p>
                              <p className="text-[12px] text-[var(--text-secondary)]">Opens WhatsApp with your message</p>
                            </div>
                            <span className="text-[12px] font-medium text-[#25D366] border border-[#25D366]/40 rounded-full px-4 py-1">
                              Open WhatsApp →
                            </span>
                          </motion.a>

                          {/* Email — real anchor, opens mail client */}
                          <motion.a
                            href={getMailtoUrl()}
                            whileHover={{ scale: 1.03, y: -4 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex flex-col items-center gap-4 p-7 rounded-2xl border-2 border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/5 hover:bg-[var(--accent-primary)]/10 hover:border-[var(--accent-primary)]/60 transition-all cursor-pointer group"
                          >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6366f1] to-[#0891b2] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all">
                              <Mail size={26} className="text-white" />
                            </div>
                            <div className="text-center">
                              <p className="font-semibold text-[15px] text-[var(--text-primary)] mb-1">Email</p>
                              <p className="text-[12px] text-[var(--text-secondary)]">Opens your email app with your message</p>
                            </div>
                            <span className="text-[12px] font-medium text-[var(--accent-primary)] border border-[var(--accent-primary)]/40 rounded-full px-4 py-1">
                              Open Email →
                            </span>
                          </motion.a>
                        </div>

                        {/* Explicit confirmation after user has actually sent */}
                        <div className="mt-6 pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3">
                          <p className="text-[12px] text-[var(--text-tertiary)]">
                            Click a button above to open WhatsApp or your email app, then send from there.
                          </p>
                          <div className="flex gap-3 shrink-0">
                            <button
                              onClick={() => sendVia("whatsapp")}
                              className="text-[12px] px-3 py-1.5 rounded-lg border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 transition-fast flex items-center gap-1.5 cursor-pointer"
                            >
                              <Check size={13} /> Sent via WhatsApp
                            </button>
                            <button
                              onClick={() => sendVia("email")}
                              className="text-[12px] px-3 py-1.5 rounded-lg border border-[var(--accent-primary)]/40 text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 transition-fast flex items-center gap-1.5 cursor-pointer"
                            >
                              <Check size={13} /> Sent via Email
                            </button>
                          </div>
                        </div>

                        <button onClick={reset} className="mt-2 text-[12px] text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-fast">
                          ← Edit my message
                        </button>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
