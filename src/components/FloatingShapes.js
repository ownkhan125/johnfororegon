"use client";

import { motion } from "motion/react";
import { cn } from "@/utils/cn";

/**
 * FloatingShapes
 * A decorative, performance-conscious background layer of slow-moving
 * 3D-feeling shapes (rings, blurred orbs, faint dots). Lives behind the
 * content. Variants tune the palette per section.
 */
export function FloatingShapes({ variant = "warm", className }) {
  const palette =
    variant === "cool"
      ? {
          ringA: "rgba(245,245,245,0.10)",
          ringB: "rgba(245,245,245,0.06)",
          orbA: "rgba(245,245,245,0.06)",
          orbB: "rgba(200,16,46,0.14)",
        }
      : {
          ringA: "rgba(200,16,46,0.22)",
          ringB: "rgba(245,245,245,0.10)",
          orbA: "rgba(200,16,46,0.22)",
          orbB: "rgba(245,245,245,0.08)",
        };

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      {/* Big slow ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -left-32 top-1/3 h-[520px] w-[520px] rounded-full border"
        style={{ borderColor: palette.ringA }}
      />
      {/* Counter ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -right-40 bottom-0 h-[640px] w-[640px] rounded-full border"
        style={{ borderColor: palette.ringB }}
      />
      {/* Floating blurred orb */}
      <motion.div
        animate={{ y: [0, -22, 0], x: [0, 14, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[12%] top-[18%] h-40 w-40 rounded-full blur-3xl"
        style={{ background: palette.orbA }}
      />
      <motion.div
        animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.4,
        }}
        className="absolute right-[10%] bottom-[14%] h-56 w-56 rounded-full blur-3xl"
        style={{ background: palette.orbB }}
      />
      {/* Tiny dot constellation */}
      <svg
        className="absolute inset-0 h-full w-full opacity-50"
        viewBox="0 0 600 400"
        preserveAspectRatio="none"
      >
        {[
          [80, 60],
          [180, 110],
          [320, 70],
          [470, 140],
          [540, 280],
          [120, 320],
          [260, 360],
          [400, 250],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={1.2}
            fill="rgba(245,245,245,0.6)"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.9, 0.2] }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
