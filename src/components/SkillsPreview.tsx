"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { techStackIcons } from "@/data/portfolio";

export function SkillsPreview() {
  const [time, setTime] = useState("12:00 PM");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="skills"
      className="w-full pt-4 pb-12 relative overflow-hidden"
    >
      <div className="absolute top-36 left-0 right-0 h-px bg-[var(--border)] w-full opacity-50" />
      <div className="container-xl max-w-5xl relative z-10">
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="card px-8 py-4 flex items-center justify-center gap-3 shadow-md border border-[var(--border)] rounded-2xl bg-[var(--bg-card)] hover:shadow-lg hover:border-[var(--border-strong)] transition-all cursor-default"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <p className="text-lg font-display font-bold text-[var(--text-primary)] tracking-wide">
              {time}
            </p>
            <span className="text-sm font-medium text-[var(--text-tertiary)] uppercase tracking-widest ml-1">
              LOCAL TIME
            </span>
          </motion.div>
        </div>

        <h3 className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em] mb-8 bg-[var(--bg-primary)] w-fit pr-4">
          TECH STACK
        </h3>

        <div className="flex flex-wrap gap-4 items-center">
          {techStackIcons.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: 0.05 * idx,
                ease: "easeOut",
              }}
              whileHover={{
                y: -4,
                scale: 1.06,
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              }}
              className="w-16 h-16 flex items-center justify-center bg-white border border-[#e5e7eb] rounded-2xl hover:border-[#d1d5db] shadow-sm hover:shadow-md transition-all group"
              title={tech.name}
            >
              <img
                src={tech.iconUrl}
                alt={tech.name}
                className="w-8 h-8 object-contain transition-transform group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
