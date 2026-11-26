"use client";

import { motion } from "framer-motion";
import { Blocks, Brain, Code2, Database, Sparkles, Zap } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { skillCategories } from "@/data/portfolio";

const iconMap = {
  code: Code2,
  brain: Brain,
  blocks: Blocks,
  database: Database,
  sparkles: Sparkles,
};

// Map numeric level → proficiency label + style
function getProficiency(level: number): { label: string; color: string; bg: string } {
  if (level >= 90)
    return { label: "Project Experience", color: "#22d3ee", bg: "rgba(34,211,238,0.12)" };
  if (level >= 80)
    return { label: "Project Experience", color: "#818cf8", bg: "rgba(129,140,248,0.12)" };
  if (level >= 70)
    return { label: "Familiar", color: "#6ee7b7", bg: "rgba(110,231,183,0.12)" };
  return { label: "Learning", color: "#fbbf24", bg: "rgba(251,191,36,0.12)" };
}

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 section container-xl">
        <FadeIn className="text-center mb-16">
          <div className="section-label mx-auto w-fit mb-6">
            <Zap size={14} className="text-[var(--accent-primary)]" /> Skills
          </div>
          <h1 className="text-heading-xl font-display font-extrabold text-[var(--text-primary)] mb-4">
            My <span className="gradient-text">Technical Arsenal</span>
          </h1>
          <p className="text-body-lg text-[var(--text-secondary)] max-w-xl mx-auto">
            A comprehensive overview of my skills across AI, Machine Learning,
            Blockchain, Databases, and Web Development.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-[12px]">
            {[
              { label: "Project Experience", color: "#818cf8", bg: "rgba(129,140,248,0.12)" },
              { label: "Familiar", color: "#6ee7b7", bg: "rgba(110,231,183,0.12)" },
              { label: "Learning", color: "#fbbf24", bg: "rgba(251,191,36,0.12)" },
            ].map((p) => (
              <span
                key={p.label}
                className="px-3 py-1 rounded-full font-medium border"
                style={{ color: p.color, background: p.bg, borderColor: p.color + "40" }}
              >
                {p.label}
              </span>
            ))}
          </div>
        </FadeIn>

        {skillCategories.map((cat, catIdx) => {
          const Icon = iconMap[cat.icon];
          return (
            <FadeIn key={cat.id} delay={0.08 * catIdx} className="mb-10">
              <div className="card p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                    style={{ background: cat.color }}
                  >
                    <Icon size={20} />
                  </div>
                  <h2 className="text-heading-sm font-display font-bold text-[var(--text-primary)]">
                    {cat.title}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, sIdx) => {
                    const prof = getProficiency(skill.level);
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.04 * sIdx }}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border"
                        style={{
                          borderColor: prof.color + "40",
                          background: prof.bg,
                        }}
                      >
                        {skill.iconUrl && (
                          <img
                            src={skill.iconUrl}
                            alt={skill.name}
                            className="w-4 h-4 object-contain shrink-0"
                            loading="lazy"
                          />
                        )}
                        <span className="text-[13px] font-semibold text-[var(--text-primary)]">
                          {skill.name}
                        </span>
                        <span
                          className="text-[11px] font-medium px-2 py-0.5 rounded-full border ml-1"
                          style={{
                            color: prof.color,
                            borderColor: prof.color + "50",
                            background: prof.bg,
                          }}
                        >
                          {prof.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
