import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 section container-xl max-w-4xl">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Case Studies
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag">{project.categoryLabel}</span>
            <span className="text-xs font-mono text-[var(--text-tertiary)]">
              {project.year}
            </span>
          </div>
          <h1 className="text-heading-xl font-display font-extrabold text-[var(--text-primary)] mb-4">
            {project.title}
          </h1>
          <p className="text-body-lg text-[var(--text-secondary)]">
            {project.longDescription}
          </p>
        </div>

        <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-[var(--border)] bg-[#080808] mb-10 shadow-lg">
          {project.coverImage ? (
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center p-8 text-center"
              style={{
                background:
                  "linear-gradient(135deg, #090d1a 0%, rgba(99,102,241,0.35) 50%, rgba(34,211,238,0.25) 100%)",
              }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-white/80 mb-3 px-3 py-1 rounded-full border border-white/20 bg-white/5">
                {project.categoryLabel} · {project.year}
              </span>
              <span className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
                {project.title}
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {project.metrics.map((m) => (
            <div key={m.label} className="card p-6">
              <div className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider mb-1">
                {m.label}
              </div>
              <div className="text-lg font-display font-bold text-[var(--text-primary)]">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="card p-8 border-l-4 border-l-[var(--accent-primary)]">
            <h2 className="text-heading-sm font-display font-bold mb-3">
              The Challenge
            </h2>
            <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
              {project.challenge}
            </p>
          </div>
          <div className="card p-8 border-l-4 border-l-[var(--accent-secondary)]">
            <h2 className="text-heading-sm font-display font-bold mb-3">
              The Solution
            </h2>
            <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="card p-8 mb-10">
          <h2 className="text-heading-sm font-display font-bold mb-4">
            Key Highlights
          </h2>
          <ul className="space-y-3">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 text-[15px] text-[var(--text-secondary)]"
              >
                <CheckCircle2
                  size={18}
                  className="text-emerald-500 mt-0.5 shrink-0"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-[var(--border)]">
            {project.tags.map((t) => (
              <span key={t} className="tag-neutral tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/projects" className="btn-primary">
            <ArrowLeft size={16} /> Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
