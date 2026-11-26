"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, Minimize2, Send, User, X } from "lucide-react";
import { profile } from "@/data/portfolio";

type CopilotAction =
  | { type: "navigate"; path: string }
  | { type: "scroll"; id: string }
  | { type: "external"; url: string }
  | { type: "download"; url: string }
  | null;

interface Message {
  id: string;
  role: "bot" | "user";
  text: string;
}

const knowledgeRules: {
  keywords: string[];
  response: string;
  action: CopilotAction;
}[] = [
  {
    keywords: ["download cv", "download resume", "get resume", "get cv"],
    response: "Starting Krisha's resume download now!",
    action: { type: "download", url: profile.resumePdf },
  },
  {
    keywords: ["resume", "cv", "curriculum", "open resume", "view resume"],
    response: "Opening Krisha's Resume page right away!",
    action: { type: "navigate", path: "/resume" },
  },
  {
    keywords: [
      "projects",
      "work",
      "signverse",
      "talkwell",
      "hospital",
      "house price",
      "cognitive",
      "portfolio",
      "built",
    ],
    response:
      "Taking you to Krisha's Projects page — featuring SignVerse AI, TalkWell, Hospital Management System, House Price Predictor, and more!",
    action: { type: "navigate", path: "/projects" },
  },
  {
    keywords: [
      "patent",
      "research",
      "paper",
      "medical",
      "automated",
      "achievement",
      "certification",
      "gemini",
      "infosys",
    ],
    response:
      'Krisha published a patent titled **"Automated Medical Storage and Dispensing System"** (Jan 2026) and a research paper titled **"TalkWell – AI-Based Mental Health Detection Using NLP"** (Published: 8 May 2026)! Taking you to view them…',
    action: { type: "scroll", id: "achievements" },
  },
  {
    keywords: ["about", "who are you", "education", "marwadi", "darshan", "internship", "tss"],
    response:
      "Krisha Raval is pursuing B.Tech in Computer Engineering (AI) at **Marwadi University** (CGPA 8.60), holds a Diploma from **Darshan University** (CGPA 8.64), and completed an internship at **TSS Consultancy Pvt. Ltd.** Opening the About page!",
    action: { type: "navigate", path: "/about" },
  },
  {
    keywords: [
      "skills",
      "tech stack",
      "technologies",
      "python",
      "react",
      "node",
      "firebase",
      "mysql",
      "machine learning",
      "nlp",
    ],
    response:
      "Krisha works with **Python, JavaScript, HTML5, CSS, React, Node.js, MySQL, Machine Learning & NLP**. Taking you to the full Skills page!",
    action: { type: "navigate", path: "/skills" },
  },
  {
    keywords: ["case study", "case studies", "stories", "process"],
    response: "Navigating to Case Studies & Thought Process!",
    action: { type: "navigate", path: "/case-studies" },
  },
  {
    keywords: ["contact", "hire", "reach", "message", "collaborate", "email", "phone"],
    response:
      `Opening the Contact page! You can also reach Krisha directly at **${profile.email}** or **${profile.phone}**`,
    action: { type: "navigate", path: "/contact" },
  },
  {
    keywords: ["github", "code", "repos"],
    response: "Opening Krisha's GitHub profile in a new tab!",
    action: { type: "external", url: profile.socials.github },
  },
  {
    keywords: ["linkedin", "profile"],
    response: "Opening Krisha's LinkedIn profile in a new tab!",
    action: { type: "external", url: profile.socials.linkedin },
  },
  {
    keywords: ["home", "main", "start"],
    response: "Taking you back to the Home page!",
    action: { type: "navigate", path: "/" },
  },
];

const fallbackReplies = [
  "Hmm, I'm not sure about that one. Try asking about **Projects**, **Patent & Research**, **Skills**, **Resume**, or **Contact**!",
  "You can ask me to navigate anywhere — try *'Show me your projects'*, *'Tell me about your patent and research'*, or *'Open Resume'*.",
  "I'm Krisha's portfolio guide! Ask about **SignVerse AI**, **TalkWell**, **Marwadi University**, or **skills**.",
];

function matchReply(input: string) {
  const q = input.toLowerCase().trim();
  for (const rule of knowledgeRules) {
    if (rule.keywords.some((kw) => q.includes(kw))) {
      return { response: rule.response, action: rule.action };
    }
  }
  return {
    response: fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)],
    action: null,
  };
}

const initialGreeting = `Hi there! I'm **Krisha Copilot**, your guide to Krisha Raval's portfolio.

You can ask me things like:
- *"Show me your projects"*
- *"Tell me about your patent and research"*
- *"Open the Resume"*
- *"What technologies do you use?"*

What would you like to explore?`;

function AvatarBadge({
  size = 32,
  showStatus = true,
  pulse = false,
}: {
  size?: number;
  showStatus?: boolean;
  pulse?: boolean;
}) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      {pulse && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ boxShadow: "0 0 0 0 rgba(108, 71, 255, 0.4)" }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(108,71,255,0.4)",
              "0 0 0 8px rgba(108,71,255,0)",
            ],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
      <div
        className="relative rounded-full overflow-hidden border-2 border-[var(--accent-primary)]/40 flex items-center justify-center"
        style={{ width: size, height: size, background: "linear-gradient(135deg,#090d1a,#0f1629)" }}
      >
        <span style={{
          background: "linear-gradient(135deg,#818cf8,#6366f1,#22d3ee)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontWeight: 900,
          fontSize: Math.round(size * 0.42) + "px",
          letterSpacing: "-0.5px",
          fontFamily: "Syne, system-ui, sans-serif",
          lineHeight: 1,
          userSelect: "none",
        }}>K.</span>
      </div>
      {showStatus && (
        <span
          className="absolute bottom-0 right-0 bg-green-400 rounded-full border-2 border-[var(--bg-card)]"
          style={{ width: size * 0.28, height: size * 0.28 }}
        />
      )}
    </div>
  );
}

export function KrishaCopilot() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "0", role: "bot", text: initialGreeting },
  ]);
  const endRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (open && !minimized) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open, minimized]);

  useEffect(() => {
    if (open && !minimized) {
      const timer = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [open, minimized]);

  const executeAction = (action: CopilotAction) => {
    if (!action) return;
    setTimeout(() => {
      switch (action.type) {
        case "navigate":
          setOpen(false);
          router.push(action.path);
          break;
        case "scroll": {
          const el = document.getElementById(action.id);
          if (el) {
            setOpen(false);
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            setOpen(false);
            router.push(`/#${action.id}`);
          }
          break;
        }
        case "external":
          window.open(action.url, "_blank", "noopener,noreferrer");
          break;
        case "download": {
          const a = document.createElement("a");
          a.href = action.url;
          a.download = "Krisha-Raval-Resume.pdf";
          a.click();
          break;
        }
      }
    }, 650);
  };

  const sendMessage = async (textOverride?: string) => {
    const query = (textOverride ?? input).trim();
    if (!query) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: query,
    };
    setMessages((prev) => [...prev, userMsg]);
    if (!textOverride) setInput("");
    setTyping(true);
    await new Promise((r) => setTimeout(r, 600));
    const { response, action } = matchReply(query);
    setMessages((prev) => [
      ...prev,
      { id: (Date.now() + 1).toString(), role: "bot", text: response },
    ]);
    setTyping(false);
    executeAction(action);
  };

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            key="fab"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setOpen(true)}
            aria-label="Open Krisha Copilot"
            id="copilot-fab"
            className="fixed bottom-6 right-6 z-[9000] rounded-full shadow-lg shadow-[var(--accent-primary)]/20 hover:shadow-xl hover:shadow-[var(--accent-primary)]/40 transition-shadow cursor-pointer"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-[var(--accent-primary)]/20"
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <AvatarBadge size={54} showStatus />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="fixed bottom-6 right-6 z-[9000] w-[min(390px,calc(100vw-24px))] flex flex-col rounded-2xl shadow-2xl overflow-hidden"
            style={{
              height: minimized ? "68px" : "540px",
              background: "var(--bg-card)",
              border: "1px solid var(--border-strong)",
              transition: "height 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            <div className="flex items-center gap-3 px-4 py-3 shrink-0 bg-[var(--text-primary)] transition-colors">
              <AvatarBadge size={38} showStatus pulse={typing} />
              <div className="flex-1 min-w-0">
                <p className="text-[var(--bg-primary)] font-bold text-[14px] leading-tight">
                  Krisha Copilot
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  {typing ? (
                    <p className="text-[var(--bg-primary)] opacity-70 text-[11px] italic">
                      Typing…
                    </p>
                  ) : (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <p className="text-[var(--bg-primary)] opacity-70 text-[11px]">
                        Always available
                      </p>
                    </>
                  )}
                </div>
              </div>
              <button
                onClick={() => setMinimized((m) => !m)}
                aria-label={minimized ? "Expand" : "Minimize"}
                className="w-7 h-7 rounded-full bg-[var(--bg-primary)]/10 hover:bg-[var(--bg-primary)]/20 flex items-center justify-center text-[var(--bg-primary)] transition-colors"
              >
                {minimized ? <Maximize2 size={13} /> : <Minimize2 size={13} />}
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="w-7 h-7 rounded-full bg-[var(--bg-primary)]/10 hover:bg-[var(--bg-primary)]/20 flex items-center justify-center text-[var(--bg-primary)] transition-colors"
              >
                <X size={13} />
              </button>
            </div>

            {!minimized && (
              <>
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex items-end gap-2 ${
                        msg.role === "user" ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      {msg.role === "bot" ? (
                        <AvatarBadge size={26} showStatus={false} />
                      ) : (
                        <div className="w-[26px] h-[26px] rounded-full shrink-0 bg-[var(--border-strong)] flex items-center justify-center">
                          <User
                            size={13}
                            className="text-[var(--text-secondary)]"
                          />
                        </div>
                      )}
                      <div
                        className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                          msg.role === "user"
                            ? "text-white rounded-br-sm"
                            : "bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border)] rounded-bl-sm"
                        }`}
                        style={
                          msg.role === "user"
                            ? {
                                background:
                                  "linear-gradient(135deg, #6C47FF, #4f35cc)",
                              }
                            : undefined
                        }
                      >
                        {msg.text
                          .split(/(\*\*[^*]+\*\*|\*[^*]+\*|\n)/g)
                          .map((part, idx) => {
                            if (part === "\n") return <br key={idx} />;
                            if (part.startsWith("**") && part.endsWith("**"))
                              return (
                                <strong key={idx}>{part.slice(2, -2)}</strong>
                              );
                            if (part.startsWith("*") && part.endsWith("*"))
                              return <em key={idx}>{part.slice(1, -1)}</em>;
                            if (part.startsWith("- "))
                              return (
                                <span
                                  key={idx}
                                  className="block pl-2 before:content-['•'] before:mr-2 before:text-[var(--accent-primary)]"
                                >
                                  {part.slice(2)}
                                </span>
                              );
                            return <span key={idx}>{part}</span>;
                          })}
                      </div>
                    </motion.div>
                  ))}

                  {typing && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-end gap-2"
                    >
                      <AvatarBadge size={26} showStatus={false} />
                      <div className="px-3.5 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl rounded-bl-sm flex gap-1 items-center">
                        {[0, 0.15, 0.3].map((delay, i) => (
                          <motion.span
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-[var(--text-tertiary)]"
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.8,
                              delay,
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                  <div ref={endRef} />
                </div>

                <div className="px-4 pb-2 flex gap-2 overflow-x-auto shrink-0">
                  {[
                    "Projects",
                    "Patent & Research",
                    "Skills",
                    "Resume",
                    "Contact",
                  ].map((chip) => (
                    <button
                      type="button"
                      key={chip}
                      onClick={() => sendMessage(chip)}
                      className="shrink-0 px-3 py-1.5 text-[11px] font-medium rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] bg-[var(--bg-secondary)] transition-all whitespace-nowrap cursor-pointer"
                    >
                      {chip}
                    </button>
                  ))}
                </div>

                <div className="px-4 pb-4 pt-2 border-t border-[var(--border)] shrink-0">
                  <div className="flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl px-3 py-2 focus-within:border-[var(--accent-primary)] transition-colors">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          sendMessage();
                        }
                      }}
                      placeholder="Ask me anything…"
                      id="copilot-input"
                      className="flex-1 bg-transparent border-none outline-none text-[13px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]"
                    />
                    <motion.button
                      onClick={() => sendMessage()}
                      disabled={!input.trim()}
                      id="copilot-send"
                      aria-label="Send message"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed transition-opacity shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #6C47FF, #4f35cc)",
                      }}
                    >
                      <Send size={12} />
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
