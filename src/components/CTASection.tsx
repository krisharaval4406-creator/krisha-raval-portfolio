"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Globe, Mail, Sparkles, Zap } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function CTASection() {
  return (
    <section
      id="cta"
      className="container-xl max-w-4xl mb-24 relative overflow-hidden card p-10 border border-[var(--border)] shadow-sm"
    >
      <div className="relative z-10 container-xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-label mx-auto w-fit mb-6">
              <Sparkles size={14} className="text-[var(--accent-primary)]" /> Open to Opportunities
            </div>
            <h2 className="text-[clamp(22px,3vw,38px)] font-display font-extrabold text-[var(--text-primary)] mb-6 leading-tight">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Extraordinary</span> Together
            </h2>
            <p className="text-body-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
              Whether you&apos;re looking for an AI engineering intern, an ML &amp;
              NLP collaborator, or a dedicated builder for your next product —
              I&apos;m ready.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/contact"
                  id="cta-contact"
                  className="btn-primary text-[15px] px-8 py-4 gap-2.5"
                >
                  <Mail size={16} />
                  Start a Conversation
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[13px] text-[var(--text-tertiary)]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Available for internships &amp; projects
              </span>
              <span className="flex items-center gap-2">
                <Zap size={14} className="text-[var(--accent-primary)]" />
                Fast learner &amp; builder
              </span>
              <span className="flex items-center gap-2">
                <Award size={14} className="text-[#FFB347]" />
                Published Patent (2026)
              </span>
              <span className="flex items-center gap-2">
                <Globe size={14} className="text-[var(--accent-secondary)]" />
                Remote-friendly
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
