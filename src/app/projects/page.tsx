"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, FolderKanban } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All" },
  { id: "ai-ml", label: "AI & ML" },
  { id: "web", label: "Web & Mobile Apps" },
  { id: "blockchain", label: "Blockchain" },
  { id: "analytics", label: "Business Analytics & Web Mining" },
] as const;

const categoryColors: Record<string, string> = {
  "ai-ml": "#6C47FF",
  web: "#00D4FF",
  blockchain: "#FFB347",
  analytics: "#10B981",
};

export default function ProjectsPage() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 section container-xl">
        <FadeIn className="text-center mb-12">
          <div className="section-label mx-auto w-fit mb-6">
            <FolderKanban size={14} className="text-[var(--accent-primary)]" /> Portfolio
          </div>
          <h1 className="text-heading-xl font-display font-extrabold text-[var(--text-primary)] mb-4">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-body-lg text-[var(--text-secondary)] max-w-xl mx-auto">
            A complete collection of my work — AI platforms, NLP models, data
            mining systems, and full-stack web applications.
          </p>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="flex flex-wrap justify-center items-center gap-2 mb-12"
        >
          <Filter
            size={14}
            className="text-[var(--text-tertiary)] mr-1"
            aria-hidden="true"
          />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-[13px] font-semibold transition-fast border cursor-pointer",
                active === cat.id
                  ? "gradient-primary text-[var(--text-inverse)] border-transparent shadow-glow"
                  : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              )}
            >
              {cat.label}
            </button>
          ))}
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="h-full"
            >
              <ProjectCard
                project={project}
                color={categoryColors[project.category] || "#6C47FF"}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
