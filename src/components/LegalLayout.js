"use client";

import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { AnimatedHeading } from "@/components/AnimatedHeading";

/**
 * LegalLayout
 * Premium dark layout for static legal pages (Privacy, Terms).
 * Same typography + line-reveal animations as other pages.
 */
export function LegalLayout({ eyebrow, title, updated, children }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-32 pb-28 sm:pt-40 sm:pb-36 lg:pt-44">
      {/* Ambient washes */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_55%_at_85%_10%,rgba(200,16,46,0.2),transparent_55%),radial-gradient(80%_50%_at_10%_20%,rgba(10,37,64,0.45),transparent_60%)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 grain opacity-100" />

      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
        className="absolute inset-x-0 top-0 h-px bg-ember/40"
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-cream-muted"
        >
          <span className="grid h-1.5 w-1.5 rounded-full bg-flag flag-pulse" />
          {eyebrow}
        </motion.div>
        <AnimatedHeading
          as="h1"
          text={title}
          delay={0.3}
          className="mt-6 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1] tracking-[-0.02em] text-cream"
        />
        {updated ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-[11px] uppercase tracking-[0.28em] text-cream-muted"
          >
            Last updated · {updated}
          </motion.div>
        ) : null}
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
          className="mt-10 block h-px w-28 bg-cream/40"
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 max-w-3xl space-y-12 text-cream/80"
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}

export function LegalSection({ heading, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative border-t border-cream/10 pt-10"
    >
      <span aria-hidden className="absolute left-0 top-10 h-6 w-px bg-ember" />
      <h2 className="font-display text-2xl font-light leading-snug text-cream sm:text-3xl">
        {heading}
      </h2>
      <div className="mt-5 space-y-4 text-base leading-relaxed text-cream/80">
        {children}
      </div>
    </motion.section>
  );
}
