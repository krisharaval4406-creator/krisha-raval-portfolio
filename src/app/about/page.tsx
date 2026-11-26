"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Brain,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Puzzle,
  Sparkles,
  Target,
  User,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import {
  achievementsAndCertifications,
  certificates,
  education,
  experience,
  profile,
  workshopsAndActivities,
} from "@/data/portfolio";

const values = [
  {
    icon: Puzzle,
    color: "#818cf8",
    title: "Problem Solving",
    description:
      "I enjoy breaking down complex challenges into simple, elegant, and data-driven solutions.",
  },
  {
    icon: BookOpen,
    color: "#22d3ee",
    title: "Continuous Learning",
    description:
      "AI and Web3 move fast. I stay sharp by constantly building with new models, frameworks, and tools.",
  },
  {
    icon: Brain,
    color: "#a78bfa",
    title: "Human-Centered AI",
    description:
      "I design intelligent systems—from sign language translation to mental health NLP—with real people in mind.",
  },
  {
    icon: Target,
    color: "#f472b6",
    title: "Quality First",
    description:
      "Clean architecture, dependable models, and thoughtful interfaces are always my baseline.",
  },
  {
    icon: Lightbulb,
    color: "#fbbf24",
    title: "Innovation",
    description:
      "From publishing a healthcare patent to prototyping blockchain apps, I love turning fresh ideas into reality.",
  },
  {
    icon: HeartHandshake,
    color: "#34d399",
    title: "Collaboration",
    description:
      "Through hackathons, IEEE volunteering, and team projects, I value clear communication and shared ownership.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <section className="section container-xl">
          <FadeIn className="max-w-3xl">
            <div className="section-label mb-6">
              <User size={14} className="text-[var(--accent-primary)]" /> About Me
            </div>
            <h1 className="text-[clamp(28px,3.5vw,44px)] font-display font-extrabold text-[var(--text-primary)] mb-6 leading-tight">
              I Build Things That{" "}
              <span className="gradient-text">Matter</span>
            </h1>
            <div className="space-y-4 text-body-lg text-[var(--text-secondary)] max-w-2xl">
              <p>
                Hey — I&apos;m{" "}
                <strong className="text-[var(--text-primary)]">
                  {profile.name}
                </strong>
                , an AI Engineer in training, Machine Learning &amp; NLP builder,
                and Blockchain &amp; Web developer based in Rajkot, Gujarat,
                India.
              </p>
              <p>{profile.aboutExtended}</p>
            </div>
          </FadeIn>
        </section>

        <section className="section-sm bg-[var(--bg-secondary)] relative overflow-hidden">
          <div className="container-xl">
            <FadeIn className="text-center mb-10">
              <h2 className="text-heading-lg font-display font-bold text-[var(--text-primary)]">
                What I Stand For
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((val, idx) => (
                <FadeIn key={val.title} delay={0.08 * idx}>
                  <div className="card card-glow p-6 h-full">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-[var(--border)] bg-[var(--bg-secondary)]" style={{ color: val.color }}>
                      <val.icon size={22} />
                    </div>
                    <h3 className="text-[15px] font-display font-bold text-[var(--text-primary)] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="section container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn direction="left">
              <div className="card card-glow p-8 h-full border-l-4 border-l-[var(--accent-primary)]">
                <h2 className="text-heading-sm font-display font-bold text-[var(--accent-primary)] mb-3">
                  Mission
                </h2>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                  {profile.mission}
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="card card-glow p-8 h-full border-l-4 border-l-[var(--accent-secondary)]">
                <h2 className="text-heading-sm font-display font-bold text-[var(--accent-secondary)] mb-3">
                  Vision
                </h2>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                  {profile.vision}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="section-sm bg-[var(--bg-secondary)] relative overflow-hidden">
          <div className="container-xl">
            <FadeIn className="mb-10">
              <div className="section-label mb-4">
                <GraduationCap size={14} /> Education
              </div>
              <h2 className="text-heading-lg font-display font-bold text-[var(--text-primary)]">
                Academic Background
              </h2>
            </FadeIn>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <FadeIn key={edu.degree} delay={0.1 * idx}>
                  <div className="card card-glow p-6 flex flex-col sm:flex-row items-start gap-5">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-[var(--text-inverse)] flex-shrink-0">
                      <GraduationCap size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <div className="text-[12px] font-mono text-[var(--accent-primary)]">
                          {edu.period}
                        </div>
                        <span className="tag">{edu.score}</span>
                      </div>
                      <h3 className="text-[16px] font-display font-bold text-[var(--text-primary)] mb-1">
                        {edu.degree}
                      </h3>
                      <div className="text-[14px] text-[var(--text-secondary)] mb-2">
                        {edu.institution}
                      </div>
                      <p className="text-[13px] text-[var(--text-tertiary)]">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="section container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="flex flex-col">
              <FadeIn className="mb-6">
                <div className="section-label mb-4">
                  <Briefcase size={14} /> Experience, Patent &amp; Research
                </div>
                <h2 className="text-heading-md font-display font-bold text-[var(--text-primary)]">
                  Industry &amp; Innovation
                </h2>
              </FadeIn>
              <div className="space-y-4 flex-1 flex flex-col justify-between">
                {experience.map((exp) => (
                  <FadeIn key={exp.role}>
                    <div className="card card-glow p-6">
                      <div className="text-[12px] font-mono text-[var(--accent-primary)] mb-1">
                        {exp.period}
                      </div>
                      <h3 className="text-[16px] font-display font-bold text-[var(--text-primary)] mb-1">
                        {exp.role}
                      </h3>
                      <div className="text-[14px] text-[var(--text-secondary)] mb-2">
                        {exp.company}
                      </div>
                      <p className="text-[13px] text-[var(--text-tertiary)]">
                        {exp.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}

                {achievementsAndCertifications.slice(0, 2).map((item, idx) => (
                  <FadeIn key={item.title} delay={0.1 * (idx + 1)}>
                    <div
                      className={`card card-glow p-6 border-l-4 ${
                        idx === 0
                          ? "border-l-[var(--accent-primary)]"
                          : "border-l-[var(--accent-secondary)]"
                      }`}
                    >
                      <div className="flex items-center gap-2 text-[12px] font-mono text-[var(--accent-primary)] mb-1">
                        <Award size={14} />{" "}
                        {idx === 0 ? "Published Patent" : "Published Research Paper"} ·{" "}
                        {item.year}
                      </div>
                      <h3 className="text-[16px] font-display font-bold text-[var(--text-primary)] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-[var(--text-secondary)]">
                        {item.issuer}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <FadeIn className="mb-6">
                <div className="section-label mb-4">
                  <Sparkles size={14} /> Activities &amp; Certificates
                </div>
                <h2 className="text-heading-md font-display font-bold text-[var(--text-primary)]">
                  Activities &amp; Certifications
                </h2>
              </FadeIn>
              <FadeIn delay={0.1} className="flex-1 flex">
                <div className="card p-6 space-y-3 flex-1 flex flex-col">
                  {workshopsAndActivities.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      className="flex items-start gap-3 p-3 rounded-xl bg-[var(--bg-secondary)]/60 border border-[var(--border)]"
                    >
                      <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] mt-2 shrink-0" />
                      <span className="text-[14px] text-[var(--text-primary)]">
                        {item}
                      </span>
                    </motion.div>
                  ))}

                  <div className="pt-4 border-t border-[var(--border)] flex-1 flex flex-col">
                    <p className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-tertiary)] mb-3">
                      Verified Certificates ({certificates.length})
                    </p>
                    <div className="space-y-2.5 max-h-[260px] overflow-y-auto pr-1">
                      {certificates.map((cert) => (
                        <div
                          key={cert.title + cert.date}
                          className="flex items-start justify-between gap-3 p-3 rounded-xl bg-[var(--bg-secondary)]/60 border border-[var(--border)]"
                        >
                          <div className="min-w-0">
                            <p className="text-[13px] font-semibold text-[var(--text-primary)] leading-snug">
                              {cert.title}
                            </p>
                            <p className="text-[12px] text-[var(--text-secondary)] mt-0.5">
                              {cert.issuer}
                            </p>
                          </div>
                          <span className="text-[11px] font-mono text-[var(--accent-primary)] shrink-0">
                            {cert.date}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[var(--border)] flex flex-wrap gap-2 mt-auto">
                    <span className="tag-neutral tag">AI Research</span>
                    <span className="tag-neutral tag">Web &amp; Mobile</span>
                    <span className="tag-neutral tag">Healthcare Tech</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
