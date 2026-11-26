"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { achievementsAndCertifications } from "@/data/portfolio";

export function AchievementsCertifications() {
  return (
    <section id="achievements" className="container-xl max-w-4xl mb-24">
      <h3 className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest mb-6">
        Achievements &amp; Certifications
      </h3>
      <div className="flex flex-col gap-4">
        {achievementsAndCertifications.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * idx, duration: 0.4 }}
            className="card p-4 px-6 flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-tertiary)] shrink-0">
                <Award size={14} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-0.5">
                  {item.title}
                </h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  {item.issuer}
                </p>
              </div>
            </div>
            <div className="text-xs font-bold text-[var(--text-tertiary)] ml-4 shrink-0">
              {item.year}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
