"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  FolderKanban,
  Github,
  Home,
  Linkedin,
  Mail,
  Menu,
  Search,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";
import { CommandPalette } from "./CommandPalette";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/case-studies", label: "Case Studies", icon: BookOpen },
  { href: "/skills", label: "Skills", icon: Sparkles },
  { href: "/resume", label: "Resume", icon: FileText },
  { href: "/contact", label: "Contact", icon: Mail },
];

const socialLinks = [
  { href: profile.socials.github, icon: Github, label: "GitHub profile" },
  { href: profile.socials.linkedin, icon: Linkedin, label: "LinkedIn profile" },
  { href: profile.socials.email, icon: Mail, label: "Email Krisha" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      setSearchOpen(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass border-b border-[var(--glass-border)] py-3"
            : "bg-transparent py-5"
        )}
        style={{ height: "var(--nav-height)" }}
      >
        <nav
          aria-label="Main navigation"
          className="container-xl h-full flex items-center justify-between"
        >
          <Link href="/" className="flex items-center gap-3 group" id="nav-logo">
            <motion.div
              className="relative w-9 h-9 rounded-full flex items-center justify-center shadow-sm border border-[var(--border)]"
              style={{ background: "linear-gradient(135deg,#090d1a,#0f1629)" }}
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span style={{
                background: "linear-gradient(135deg,#818cf8,#6366f1,#22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 900,
                fontSize: "15px",
                letterSpacing: "-0.5px",
                fontFamily: "Syne, system-ui, sans-serif",
              }}>K.</span>
            </motion.div>
            <span className="font-display font-bold text-[var(--text-primary)] text-[16px] tracking-tight">
              {profile.name}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  id={`nav-${item.label.toLowerCase()}`}
                  className={cn(
                    "relative px-3 py-1.5 rounded-lg text-[13px] font-medium transition-fast",
                    active
                      ? "text-[var(--accent-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-[var(--accent-glow)] rounded-lg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              id="nav-search"
              aria-label="Search website (Press ⌘K)"
              onClick={() => setSearchOpen(true)}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border)] text-[var(--text-tertiary)] text-[13px] hover:border-[var(--border-strong)] hover:text-[var(--text-secondary)] transition-fast"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Search size={13} />
              <span>Search</span>
              <kbd className="ml-1 px-1 py-0.5 text-[10px] bg-[var(--bg-secondary)] rounded border border-[var(--border)]">
                ⌘K
              </kbd>
            </motion.button>

            <div className="hidden md:flex items-center gap-1">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-fast"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={15} />
                </motion.a>
              ))}
            </div>

            <ThemeToggle />

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                id="nav-cta"
                className="hidden md:inline-flex btn-primary text-sm py-2 px-4"
              >
                Hire Me
              </Link>
            </motion.div>

            <motion.button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] transition-fast"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              id="mobile-navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-[var(--bg-card)] border-l border-[var(--border)] p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-bold text-lg">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close mobile menu"
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navItems.map((item, idx) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * idx }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium transition-fast",
                          active
                            ? "bg-[var(--accent-glow)] text-[var(--accent-primary)]"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                        )}
                      >
                        <item.icon size={16} />
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border)]">
                <div className="flex items-center gap-3 mb-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-fast"
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center text-sm"
                >
                  Hire Me
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CommandPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
