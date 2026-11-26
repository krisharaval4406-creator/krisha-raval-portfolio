"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hand } from "lucide-react";
import { profile } from "@/data/portfolio";

export function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      return;
    }
    setVisible(true);
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase(1), 80);
    const t2 = setTimeout(() => setPhase(2), 1650);
    const t3 = setTimeout(() => setPhase(3), 3100);
    const t4 = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "unset";
    }, 4600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!mounted) return null;

  const ease = [0.16, 1, 0.3, 1] as const;
  const itemVariants = {
    hidden: { y: 20, opacity: 0, filter: "blur(8px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease },
    },
    exit: {
      y: -20,
      opacity: 0,
      filter: "blur(8px)",
      transition: { duration: 0.6, ease },
    },
  };

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("splash_shown", "1");
    document.body.style.overflow = "unset";
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onClick={dismiss}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--bg-primary)] pointer-events-auto overflow-hidden cursor-pointer"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--bg-secondary)]/30 via-[var(--bg-primary)] to-[var(--bg-primary)]" />
          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md px-6 text-center">
            <AnimatePresence mode="wait">
              {phase === 1 && (
                <motion.div
                  key="phase1"
                  className="flex flex-col items-center"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                >
                  <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4 flex items-center gap-3"
                  >
                    Hello
                    <motion.span
                      animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                      className="origin-bottom-right inline-flex items-center text-[var(--accent-primary)]"
                    >
                      <Hand size={40} />
                    </motion.span>
                  </motion.h1>
                  <motion.p
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium tracking-tight"
                  >
                    Nice to meet you.
                  </motion.p>
                </motion.div>
              )}

              {phase === 2 && (
                <motion.div
                  key="phase2"
                  className="flex flex-col items-center"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                >
                  <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4"
                  >
                    I&apos;m {profile.name}
                  </motion.h1>
                  <motion.p
                    variants={itemVariants}
                    className="text-xl md:text-2xl font-medium tracking-tight bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text text-transparent"
                  >
                    {profile.role}
                  </motion.p>
                </motion.div>
              )}

              {phase === 3 && (
                <motion.div
                  key="phase3"
                  className="flex flex-col items-center"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                >
                  <motion.div
                    variants={{
                      hidden: { scale: 0.8, opacity: 0, filter: "blur(10px)" },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        filter: "blur(0px)",
                        transition: { duration: 1, ease },
                      },
                      exit: {
                        scale: 1.1,
                        opacity: 0,
                        filter: "blur(10px)",
                        transition: { duration: 0.6, ease },
                      },
                    }}
                    className="relative mb-8"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-full bg-[var(--text-primary)] blur-2xl"
                    />
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative flex h-28 w-28 items-center justify-center rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-2xl"
                    >
                      <span className="text-4xl font-bold tracking-tighter">
                        {profile.shortMonogram}
                      </span>
                    </motion.div>
                  </motion.div>
                  <motion.p
                    variants={itemVariants}
                    className="text-sm md:text-base font-medium tracking-[0.2em] text-[var(--text-secondary)] uppercase"
                  >
                    Building Intelligent Experiences
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span className="absolute bottom-8 text-[11px] font-mono uppercase tracking-widest text-[var(--text-tertiary)] opacity-60">
            Click anywhere to skip
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
