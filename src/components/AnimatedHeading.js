"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";

/**
 * AnimatedHeading
 * Splits text into words (or chars) and reveals them on view.
 * Mask + slide-up + slight rotate, staggered.
 */
export function AnimatedHeading({
  as = "h2",
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.08,
  amount = 0.15,
  splitBy = "word",
  once = true,
}) {
  const tokens = useMemo(() => {
    if (splitBy === "char") return [...text];
    return text.split(" ");
  }, [text, splitBy]);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const item = {
    hidden: { y: "110%", opacity: 0, rotate: 4 },
    show: {
      y: "0%",
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const sharedProps = {
    variants: container,
    initial: "hidden",
    whileInView: "show",
    viewport: { once, amount },
    className: cn("flex flex-wrap", className),
  };

  const inner = tokens.map((token, i) => (
    <span
      key={`${token}-${i}`}
      className="relative inline-block overflow-hidden pb-[0.15em]"
      style={{ marginRight: splitBy === "word" ? "0.28em" : 0 }}
    >
      <motion.span variants={item} className={cn("inline-block", wordClassName)}>
        {token === " " ? " " : token}
      </motion.span>
    </span>
  ));

  if (as === "h1") return <motion.h1 {...sharedProps}>{inner}</motion.h1>;
  if (as === "h3") return <motion.h3 {...sharedProps}>{inner}</motion.h3>;
  if (as === "h4") return <motion.h4 {...sharedProps}>{inner}</motion.h4>;
  if (as === "p") return <motion.p {...sharedProps}>{inner}</motion.p>;
  return <motion.h2 {...sharedProps}>{inner}</motion.h2>;
}
