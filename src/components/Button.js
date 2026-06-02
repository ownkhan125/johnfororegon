"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/utils/cn";

const variantStyles = {
  primary:
    "bg-ember text-cream-soft border border-ember hover:bg-umber",
  outline:
    "bg-transparent text-cream border border-cream/40 hover:border-ember",
  paper:
    "bg-cream text-ink border border-cream hover:bg-cream-soft",
  dark:
    "bg-bark text-cream border border-bark hover:border-ember/60",
  ghost:
    "bg-transparent text-cream border border-transparent hover:border-ember/40",
};

export function Button({
  as = "button",
  variant = "primary",
  className,
  children,
  magnetic = true,
  ...props
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 250, damping: 18, mass: 0.5 });
  const ySpring = useSpring(y, { stiffness: 250, damping: 18, mass: 0.5 });

  const innerX = useTransform(xSpring, (v) => v * 0.4);
  const innerY = useTransform(ySpring, (v) => v * 0.4);

  function handleMove(e) {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.45);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const sharedProps = {
    ref,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    style: { x: xSpring, y: ySpring },
    className: cn(
      // Mobile-first: smaller, tighter; scale up at sm+ for desktop comfort.
      "group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full px-5 text-[11.5px] font-medium uppercase tracking-[0.16em] transition-colors duration-500 ease-out",
      "sm:h-12 sm:px-7 sm:text-[13px] sm:tracking-[0.18em]",
      variantStyles[variant],
      className,
    ),
    ...props,
  };

  const inner = (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cream-soft/30 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-cream/0 transition-all duration-500 group-hover:ring-cream-soft/30 group-hover:[box-shadow:0_0_30px_-5px_rgba(200,16,46,0.55)]"
      />
      <motion.span
        style={{ x: innerX, y: innerY }}
        className="relative z-10 flex items-center gap-1.5 transition-colors duration-500 group-hover:text-cream sm:gap-2 [&_svg]:h-3 [&_svg]:w-3 sm:[&_svg]:h-3.5 sm:[&_svg]:w-3.5"
      >
        {children}
      </motion.span>
    </>
  );

  if (as === "a") {
    return <motion.a {...sharedProps}>{inner}</motion.a>;
  }
  return <motion.button {...sharedProps}>{inner}</motion.button>;
}
