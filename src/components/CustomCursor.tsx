"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const targetRef = useRef({ x: -300, y: -300, active: false });
  const glowRef = useRef({ x: -300, y: -300, scale: 1 });
  const rafRef = useRef<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setMounted(true);

    const onMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      targetRef.current.active = true;
    };

    const onLeave = () => {
      targetRef.current.active = false;
    };

    const onOver = (e: MouseEvent) => {
      const interactive = (e.target as HTMLElement | null)?.closest(
        "a, button, [role='button'], input, select, textarea"
      );
      glowRef.current.scale = interactive ? 1.25 : 1;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      if (
        canvas.width !== window.innerWidth ||
        canvas.height !== window.innerHeight
      ) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (targetRef.current.active) {
        const g = glowRef.current;
        g.x += (targetRef.current.x - g.x) * 0.14;
        g.y += (targetRef.current.y - g.y) * 0.14;

        const isDark = document.documentElement.classList.contains("dark");
        const radius = 220 * g.scale;

        // Primary ambient indigo-to-cyan gradient aura
        const outerGrad = ctx.createRadialGradient(
          g.x,
          g.y,
          0,
          g.x,
          g.y,
          radius
        );
        if (isDark) {
          outerGrad.addColorStop(0, "rgba(129, 140, 248, 0.18)");
          outerGrad.addColorStop(0.45, "rgba(34, 211, 238, 0.08)");
          outerGrad.addColorStop(1, "rgba(34, 211, 238, 0)");
        } else {
          outerGrad.addColorStop(0, "rgba(99, 102, 241, 0.12)");
          outerGrad.addColorStop(0.45, "rgba(8, 145, 178, 0.06)");
          outerGrad.addColorStop(1, "rgba(8, 145, 178, 0)");
        }

        ctx.beginPath();
        ctx.arc(g.x, g.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = outerGrad;
        ctx.fill();

        // Subtle crisp center ring following pointer closely
        ctx.beginPath();
        ctx.arc(g.x, g.y, 16 * g.scale, 0, Math.PI * 2);
        ctx.strokeStyle = isDark
          ? "rgba(129, 140, 248, 0.35)"
          : "rgba(91, 33, 182, 0.25)";
        ctx.lineWidth = 1.25;
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafRef.current);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
