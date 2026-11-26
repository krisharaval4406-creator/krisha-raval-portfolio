"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile, quotes } from "@/data/portfolio";

const footerSocials = [
  { href: profile.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: profile.socials.github, icon: Github, label: "GitHub" },
  { href: profile.socials.email, icon: Mail, label: "Email" },
];

export function Footer() {
  const pathname = usePathname();
  const [quoteIdx] = useState(0);

  const quote = quotes[quoteIdx];

  return (
    <footer className="relative overflow-hidden">
      {pathname === "/" && (
        <>
          <div className="container-xl pt-16 pb-12">
            <div className="max-w-2xl mx-auto bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm p-6 md:p-8 relative">
              <span className="text-4xl font-serif text-[var(--text-tertiary)] absolute top-4 left-4 opacity-40 leading-none">
                "
              </span>
              <p className="text-[14px] md:text-[15px] text-[var(--text-primary)] font-medium leading-relaxed mb-4 mt-2 z-10 pl-2">
                {quote.text}
              </p>
              <p className="text-[13px] text-[var(--text-secondary)] text-right z-10">
                — {quote.author}
              </p>
            </div>
          </div>
          <div className="w-full h-px bg-[var(--border)]" />
        </>
      )}

      <div className="relative container-xl py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-[13px] font-mono text-[var(--text-secondary)] gap-2">
            <p>
              © {new Date().getFullYear()} {profile.name}
            </p>
            <p className="text-[var(--text-tertiary)]">
              Built with curiosity, AI &amp; clean code
            </p>
          </div>
          <div className="flex items-center gap-3">
            {footerSocials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-transparent border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-card)] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <s.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
