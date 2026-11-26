"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code,
  Lightbulb,
  PenTool,
  Rocket,
  Search,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { projects } from "@/data/portfolio";

const steps = [
  {
    num: "01",
    title: "Problem & Discovery",
    desc: "Deep dive into real-world user pain points, accessibility gaps, and research literature to frame the right AI or software problem.",
    color: "#6C47FF",
    icon: Search,
  },
  {
    num: "02",
    title: "Data & Architecture",
    desc: "Curating datasets, designing schemas or smart contracts, and selecting the optimal ML, NLP, or full-stack architecture.",
    color: "#00D4FF",
    icon: Lightbulb,
  },
  {
    num: "03",
    title: "Interface & Experience",
    desc: "Crafting clean, accessible interfaces so complex machine learning predictions feel intuitive and immediately actionable.",
    color: "#FFB347",
    icon: PenTool,
  },
  {
    num: "04",
    title: "Model & App Engineering",
    desc: "Writing modular Python, JavaScript, Solidity, and SQL code—training models and integrating them with responsive frontends.",
    color: "#4ECDC4",
    icon: Code,
  },
  {
    num: "05",
    title: "Evaluate & Optimize",
    desc: "Validating model accuracy, measuring latency, testing edge cases, and refining reliability across devices and scenarios.",
    color: "#F0932B",
    icon: CheckCircle2,
  },
  {
    num: "06",
    title: "Launch & Iterate",
    desc: "Deploying clean builds, documenting workflows, and gathering real feedback for continuous improvement.",
    color: "#FF6B6B",
    icon: Rocket,
  },
];

export default function CaseStudiesPage() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.7", "end 0.8"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 section container-xl">
        <FadeIn className="text-center mb-16">
          <div className="section-label mx-auto w-fit mb-6">
            <BookOpen size={14} className="text-[var(--accent-primary)]" /> Case Studies
          </div>
          <h1 className="text-heading-xl font-display font-extrabold text-[var(--text-primary)] mb-4">
            Deep-Dive <span className="gradient-text">Stories</span>
          </h1>
          <p className="text-body-lg text-[var(--text-secondary)] max-w-xl mx-auto">
            The thinking, challenges, and engineering decisions behind my most
            impactful AI and software projects.
          </p>
        </FadeIn>

        <div className="mb-32 relative" ref={timelineRef}>
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--text-primary)] mb-6">
              My Thought <span className="gradient-text">Process</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              From the first spark of an idea to a working AI or web product, I
              follow a structured, iterative engineering workflow.
            </p>
          </FadeIn>

          <div className="relative max-w-4xl mx-auto px-4 md:px-8">
            <div className="absolute top-0 bottom-0 left-[43px] md:left-[71px] w-[2px] bg-[var(--border)] rounded-full" />
            <motion.div
              className="absolute top-0 bottom-0 left-[43px] md:left-[71px] w-[2px] bg-gradient-to-b from-[#6C47FF] via-[#00D4FF] to-[#FF6B6B] rounded-full z-10 shadow-[0_0_15px_rgba(108,71,255,0.5)]"
              style={{ transformOrigin: "top", scaleY: lineScale }}
            />

            <div className="flex flex-col gap-12 md:gap-16 relative z-20 py-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0.35, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className="relative flex items-center gap-6 md:gap-12 group"
                >
                  <div className="relative flex-shrink-0 flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-[var(--bg-primary)] shadow-sm z-20">
                    <div
                      className="absolute inset-0 rounded-full blur-md md:blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-40"
                      style={{ background: step.color }}
                    />
                    <div
                      className="relative z-10 bg-[var(--bg-primary)] w-full h-full rounded-full flex items-center justify-center font-display font-bold text-lg md:text-xl text-[var(--text-primary)] border-2 transition-colors duration-300"
                      style={{ borderColor: step.color }}
                    >
                      {step.num}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-primary)] border border-[var(--border)] shadow-sm backdrop-blur-sm overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                      <div
                        className="absolute top-0 left-0 w-full h-1 opacity-70"
                        style={{
                          background: `linear-gradient(90deg, ${step.color}, transparent)`,
                        }}
                      />
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3 md:mb-4">
                        <div
                          className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0"
                          style={{
                            background: `linear-gradient(135deg, ${step.color}, ${step.color}CC)`,
                          }}
                        >
                          <step.icon size={22} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-[var(--text-primary)] tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-[14px] md:text-[16px] text-[var(--text-secondary)] leading-relaxed sm:pl-[4.5rem]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <FadeIn key={project.id} delay={idx * 0.08}>
              <div className="card card-glow overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div
                    className="h-48 lg:h-auto flex items-center justify-center p-6"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(108,71,255,0.08), rgba(0,212,255,0.12))",
                    }}
                  >
                    <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center text-[var(--text-inverse)] text-3xl font-display font-bold shadow-glow">
                      {project.title.charAt(0)}
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="tag">{project.categoryLabel}</span>
                      <span className="text-[12px] text-[var(--text-tertiary)] font-mono">
                        {project.year}
                      </span>
                    </div>
                    <h2 className="text-heading-md font-display font-bold text-[var(--text-primary)] mb-3">
                      {project.title}
                    </h2>
                    <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-4">
                      {project.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-6 mb-5">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="text-[16px] font-bold gradient-text font-display">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-[var(--text-tertiary)]">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((t) => (
                        <span key={t} className="tag-neutral tag">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/case-studies/${project.id}`}
                      className="btn-primary inline-flex text-[13px] py-2.5 px-5"
                    >
                      Read Case Study <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
