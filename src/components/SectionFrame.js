"use client";

import { motion } from "motion/react";
import { cn } from "@/utils/cn";

/**
 * SectionFrame
 * A wrapper that runs the cinematic section-build pattern:
 * 1. Top + bottom horizontal lines draw in (scaleX 0 → 1)
 * 2. Optional vertical line guides
 * 3. The children (a motion container) reveal with stagger
 *
 * Children should use `revealParent` + `revealChild` from motionVariants
 * to chain into the build.
 */
export function SectionFrame({
  as: Tag = "section",
  id,
  className,
  innerClassName,
  eyebrow,
  showLines = true,
  children,
  viewportMargin = "-80px",
}) {
  return (
    <Tag id={id} className={cn("relative isolate", className)}>
      {showLines && (
        <>
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: viewportMargin }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute inset-x-0 top-0 h-px bg-ember/40"
          />
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: viewportMargin }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            style={{ transformOrigin: "right" }}
            className="absolute inset-x-0 bottom-0 h-px bg-ember/25"
          />
        </>
      )}

      {eyebrow ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: viewportMargin }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="absolute left-5 top-6 z-10 hidden items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-cream-muted sm:left-8 sm:flex lg:left-12"
        >
          <span className="h-px w-8 bg-cream/40" />
          {eyebrow}
        </motion.div>
      ) : null}

      <div className={cn("relative", innerClassName)}>{children}</div>
    </Tag>
  );
}
