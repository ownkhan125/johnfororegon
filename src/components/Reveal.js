"use client";

import { motion } from "motion/react";
import { cn } from "@/utils/cn";

/**
 * Reveal — viewport-triggered fade/translate wrapper.
 */
export function Reveal({
  as = "div",
  delay = 0,
  y = 28,
  x = 0,
  duration = 0.9,
  once = true,
  amount = 0.1,
  className,
  children,
  ...props
}) {
  const sharedProps = {
    initial: { opacity: 0, y, x },
    whileInView: { opacity: 1, y: 0, x: 0 },
    viewport: { once, amount },
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    className: cn(className),
    ...props,
  };

  if (as === "section") return <motion.section {...sharedProps}>{children}</motion.section>;
  if (as === "article") return <motion.article {...sharedProps}>{children}</motion.article>;
  if (as === "ul") return <motion.ul {...sharedProps}>{children}</motion.ul>;
  if (as === "li") return <motion.li {...sharedProps}>{children}</motion.li>;
  if (as === "p") return <motion.p {...sharedProps}>{children}</motion.p>;
  if (as === "span") return <motion.span {...sharedProps}>{children}</motion.span>;
  return <motion.div {...sharedProps}>{children}</motion.div>;
}

export function RevealGroup({
  as = "div",
  stagger = 0.12,
  delay = 0.15,
  className,
  children,
  amount = 0.08,
  once = true,
  ...props
}) {
  const variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const sharedProps = {
    initial: "hidden",
    whileInView: "show",
    viewport: { once, amount },
    variants,
    className: cn(className),
    ...props,
  };

  if (as === "ul") return <motion.ul {...sharedProps}>{children}</motion.ul>;
  if (as === "ol") return <motion.ol {...sharedProps}>{children}</motion.ol>;
  if (as === "section") return <motion.section {...sharedProps}>{children}</motion.section>;
  return <motion.div {...sharedProps}>{children}</motion.div>;
}

export const revealItem = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};
