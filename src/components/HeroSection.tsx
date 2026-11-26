"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Check,
  Copy,
  FileText,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/portfolio";

function TiltAvatar() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springCfg = { stiffness: 300, damping: 20, mass: 0.5 };
  const sx = useSpring(mx, springCfg);
  const sy = useSpring(my, springCfg);
  const rotateX = useTransform(sy, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-15, 15]);
  const glareX = useTransform(sx, [-0.5, 0.5], ["-50%", "50%"]);
  const glareY = useTransform(sy, [-0.5, 0.5], ["-50%", "50%"]);

  return (
    <div
      className="relative w-full h-full"
      style={{ perspective: "1000px" }}
      ref={ref}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        mx.set((e.clientX - (rect.left + rect.width / 2)) / rect.width);
        my.set((e.clientY - (rect.top + rect.height / 2)) / rect.height);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        mx.set(0);
        my.set(0);
      }}
    >
      <motion.div
        className="w-full h-full relative rounded-full overflow-hidden bg-[#090d1a]"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <div
          className="w-full h-full flex items-center justify-center rounded-full"
          style={{ background: "linear-gradient(135deg,#090d1a,#0f1629)" }}
        >
          <span style={{
            background: "linear-gradient(135deg,#818cf8,#6366f1,#22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: 900,
            fontSize: "clamp(36px,8vw,52px)",
            letterSpacing: "-2px",
            fontFamily: "Syne, system-ui, sans-serif",
            lineHeight: 1,
          }}>K.</span>
        </div>
        <motion.div
          className="absolute inset-0 z-10 rounded-full pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.3) 50%, transparent 80%)",
            opacity: hovered ? 1 : 0,
            x: glareX,
            y: glareY,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </div>
  );
}

function TypewriterText({
  texts,
  speed = 70,
  waitTime = 1500,
  deleteSpeed = 40,
  className,
}: {
  texts: string[];
  speed?: number;
  waitTime?: number;
  deleteSpeed?: number;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState("");
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const current = texts[wordIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (deleting) {
      if (displayed === "") {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % texts.length);
        setCharIdx(0);
      } else {
        timer = setTimeout(
          () => setDisplayed((s) => s.slice(0, -1)),
          deleteSpeed
        );
      }
    } else if (charIdx < current.length) {
      timer = setTimeout(() => {
        setDisplayed((s) => s + current[charIdx]);
        setCharIdx((i) => i + 1);
      }, speed);
    } else if (texts.length > 1) {
      timer = setTimeout(() => setDeleting(true), waitTime);
    }

    return () => clearTimeout(timer);
  }, [charIdx, displayed, deleting, speed, deleteSpeed, waitTime, texts, wordIdx]);

  return (
    <div
      className={cn(
        "inline-flex items-center tracking-tight whitespace-nowrap",
        className
      )}
    >
      <span>{displayed}</span>
      <motion.span
        className="ml-1"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.01,
            repeat: Infinity,
            repeatDelay: 0.4,
            repeatType: "reverse",
          },
        }}
      >
        |
      </motion.span>
    </div>
  );
}

const heroSocials = [
  { href: profile.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: profile.socials.github, icon: Github, label: "GitHub" },
  { href: profile.socials.email, icon: Mail, label: "Email" },
  { href: profile.resumePdf, icon: FileText, label: "Resume" },
];

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative pt-24 md:pt-32 pb-16 flex flex-col items-center justify-center"
    >
      <div className="container-xl max-w-4xl flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-[3px] border-[var(--bg-secondary)] shadow-sm mb-6 bg-[var(--bg-card)] flex items-center justify-center"
        >
          <TiltAvatar />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6 min-h-[48px] w-full"
        >
          <h1 className="text-[clamp(1.2rem,4.5vw,2.25rem)] font-bold tracking-tight text-[var(--text-primary)] flex items-center justify-center whitespace-nowrap">
            <span>I am&nbsp;</span>
            <span className="inline-flex items-center whitespace-nowrap flex-shrink-0">
              {mounted && <TypewriterText texts={profile.heroSubtitles} />}
            </span>
            <BadgeCheck
              className="text-[var(--bg-primary)] fill-[var(--text-primary)] -ml-1 sm:ml-0.5 flex-shrink-0"
              size={24}
            />
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative flex items-center gap-2 mb-6 cursor-pointer group"
          onClick={copyEmail}
        >
          <motion.div
            className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full border transition-all ${
              copied
                ? "bg-green-500/10 border-green-500/40 text-green-500"
                : "bg-[var(--bg-card)] border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
            }`}
            animate={copied ? { scale: [1, 1.04, 1] } : {}}
            transition={{ duration: 0.2 }}
          >
            <span className="font-mono text-[13px]">{profile.email}</span>
            {copied ? (
              <BadgeCheck size={14} className="text-green-500 shrink-0" />
            ) : (
              <Copy
                size={14}
                className="opacity-50 shrink-0 group-hover:opacity-100 transition-opacity"
              />
            )}
          </motion.div>
          <AnimatePresence>
            {copied && (
              <motion.span
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: -32 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 -translate-x-1/2 top-0 text-[11px] font-semibold px-3 py-1 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] whitespace-nowrap pointer-events-none shadow-md flex items-center gap-1"
              >
                <Check size={12} /> Copied!
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-base text-[var(--text-secondary)] max-w-xl mx-auto mb-8 leading-relaxed"
        >
          {profile.heroDescription}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <Link
            href="/projects"
            className="flex items-center gap-2 btn-primary !rounded-full !px-6 !py-3 text-sm font-medium hover:scale-105 active:scale-95 transition-all"
          >
            View My Work
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] px-6 py-3 rounded-full text-sm font-medium hover:border-[var(--border-strong)] hover:scale-105 active:scale-95 transition-all shadow-sm"
          >
            Let&apos;s Talk
            <ArrowDown size={16} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center justify-center gap-3"
        >
          {heroSocials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all shadow-sm"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <s.icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
