"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/portfolio";

function getIconSlug(tag: string): string | null {
  const t = tag.toLowerCase();
  if (t.includes("next")) return "nextdotjs";
  if (t.includes("react")) return "react";
  if (t.includes("typescript")) return "typescript";
  if (t.includes("javascript")) return "javascript";
  if (t.includes("tailwind")) return "tailwindcss";
  if (t.includes("firebase")) return "firebase";
  if (t.includes("node")) return "nodedotjs";
  if (t.includes("python")) return "python";
  if (t.includes("mysql")) return "mysql";
  if (t.includes("solidity")) return "solidity";
  if (t.includes("css")) return "css";
  if (t.includes("html")) return "html5";
  if (t.includes("tensor")) return "tensorflow";
  if (t.includes("web3")) return "web3dotjs";
  if (t.includes("ethereum")) return "ethereum";
  if (t.includes("figma")) return "figma";
  return null;
}

function TechBadge({ tag }: { tag: string }) {
  const [errored, setErrored] = useState(false);
  const slug = getIconSlug(tag);

  return (
    <div
      className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0 border border-[#e5e7eb]"
      title={tag}
    >
      {slug && !errored ? (
        <img
          src={`https://cdn.simpleicons.org/${slug}/black`}
          alt={tag}
          className="w-5 h-5 object-contain"
          onError={() => setErrored(true)}
        />
      ) : (
        <span className="text-[11px] font-bold text-black uppercase">
          {tag.substring(0, 2)}
        </span>
      )}
    </div>
  );
}

export function ProjectCard({
  project,
  color = "#6C47FF",
}: {
  project: Project;
  color?: string;
}) {
  const [imgErr, setImgErr] = useState(false);

  return (
    <motion.div
      className="card p-4 h-full flex flex-col group spotlight bg-[var(--bg-card)] border border-[var(--border)] rounded-[24px]"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <Link
        href={`/case-studies/${project.id}`}
        className="relative w-full aspect-[16/10] rounded-[16px] overflow-hidden mb-5 bg-[#080808] border border-[var(--border)] shrink-0 block"
      >
        {project.coverImage && !imgErr ? (
          <img
            src={project.coverImage}
            alt={`Cover image for ${project.title} project - Krisha Raval`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            onError={() => setImgErr(true)}
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, #090d1a 0%, ${color}33 55%, #0f172a 100%)`,
            }}
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-white/75 mb-2 px-2.5 py-0.5 rounded-full border border-white/20 bg-white/5">
              {project.categoryLabel}
            </span>
            <span className="text-xl font-display font-extrabold text-white tracking-tight">
              {project.title}
            </span>
          </div>
        )}
      </Link>

      <div className="flex items-start justify-between gap-4 mb-3">
        <Link
          href={`/case-studies/${project.id}`}
          className="text-[22px] md:text-[24px] font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors tracking-tight"
        >
          {project.title}
        </Link>
      </div>

      <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
        {project.description}
      </p>

      <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-6">
        <Link
          href={`/case-studies/${project.id}`}
          className="btn-primary flex-1 justify-center text-sm py-2.5"
        >
          <ExternalLink size={16} /> View Case Study
        </Link>
      </div>

      <div className="flex flex-wrap gap-3 mt-auto">
        {project.tags.slice(0, 4).map((tag) => (
          <TechBadge key={tag} tag={tag} />
        ))}
      </div>
    </motion.div>
  );
}
