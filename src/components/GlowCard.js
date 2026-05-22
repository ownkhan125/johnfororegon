"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";

/**
 * GlowCard
 * Pointer-tracked radial glow + animated border highlight on hover.
 * Lighter than Tilt3DCard — no rotation — so it composes well with motion
 * components that already use whileHover/variants.
 */
export function GlowCard({
  as = "div",
  className,
  glow = "rgba(200,16,46,0.20)",
  size = 420,
  border = true,
  children,
  ...props
}) {
  const ref = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--gx", `${e.clientX - r.left}px`);
    el.style.setProperty("--gy", `${e.clientY - r.top}px`);
  }

  const sharedProps = {
    ref,
    onMouseMove: handleMove,
    style: { "--gx": "50%", "--gy": "50%", ...(props.style || {}) },
    className: cn("group relative", className),
    ...props,
  };

  const overlay = (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${size}px circle at var(--gx) var(--gy), ${glow}, transparent 60%)`,
        }}
      />
      {border && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(${
              size * 0.85
            }px circle at var(--gx) var(--gy), rgba(200,16,46,0.55), transparent 55%)`,
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: 1,
          }}
        />
      )}
    </>
  );

  if (as === "article") {
    return (
      <motion.article {...sharedProps}>
        {overlay}
        {children}
      </motion.article>
    );
  }
  if (as === "figure") {
    return (
      <motion.figure {...sharedProps}>
        {overlay}
        {children}
      </motion.figure>
    );
  }
  if (as === "a") {
    return (
      <motion.a {...sharedProps}>
        {overlay}
        {children}
      </motion.a>
    );
  }
  return (
    <motion.div {...sharedProps}>
      {overlay}
      {children}
    </motion.div>
  );
}
