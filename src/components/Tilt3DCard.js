"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/utils/cn";

/**
 * Tilt3DCard
 * Mouse-reactive perspective tilt wrapper. Children render inside an inner
 * div that rotates around X/Y based on cursor position. Includes an optional
 * radial glare that follows the cursor.
 *
 * Pass motion variants on the outer div via standard props (e.g. variants,
 * initial, whileInView) and the entry animations chain normally.
 */
export function Tilt3DCard({
  className,
  innerClassName,
  children,
  intensity = 7,
  scale = 1.025,
  glare = true,
  glareSize = 360,
  glareColor = "rgba(245,245,245,0.22)",
  perspective = 1200,
  lift = 18,
  ...props
}) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 22, mass: 0.55 });
  const sy = useSpring(my, { stiffness: 200, damping: 22, mass: 0.55 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-intensity, intensity]);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    mx.set(px - 0.5);
    my.set(py - 0.5);
    if (glare) {
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
    }
  }
  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      {...props}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{
        scale,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      }}
      style={{
        perspective,
        "--mx": "50%",
        "--my": "50%",
        ...(props.style || {}),
      }}
      className={cn("group relative", className)}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative h-full w-full will-change-transform",
          innerClassName,
        )}
      >
        <div
          style={{ transform: `translateZ(${lift}px)` }}
          className="relative h-full w-full"
        >
          {children}
        </div>
        {glare && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `radial-gradient(${glareSize}px circle at var(--mx) var(--my), ${glareColor}, transparent 60%)`,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
