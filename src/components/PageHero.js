"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { AnimatedHeading } from "@/components/AnimatedHeading";

/**
 * PageHero
 * Inner-page hero that mirrors the home page design language:
 * red eyebrow line, big serif headline, two-column with image card,
 * borders/lines reveal first, content reveals after.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imageCaption,
  imageMeta,
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44">
      {/* Ambient washes */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_55%_at_85%_10%,rgba(200,16,46,0.22),transparent_55%),radial-gradient(80%_50%_at_10%_20%,rgba(10,37,64,0.45),transparent_60%)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 grain opacity-100" />
      <div aria-hidden className="hero-grid absolute inset-0 -z-10 opacity-60" />

      {/* Animated framing lines */}
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
        className="absolute inset-x-0 top-0 h-px bg-ember/40"
      />
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "right" }}
        className="absolute inset-x-0 bottom-0 h-[2px] bg-ember"
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-cream-muted"
          >
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
              className="block h-px w-10 bg-cream/50"
            />
            <span className="flex items-center gap-2">
              <span className="grid h-1.5 w-1.5 rounded-full bg-flag flag-pulse" />
              {eyebrow}
            </span>
          </motion.div>

          <AnimatedHeading
            as="h1"
            text={title}
            delay={0.35}
            className="relative mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[0.98] tracking-[-0.02em] text-cream"
          />

          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="mt-7 h-px w-28 bg-cream/40"
          />

          {description ? (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
            >
              {description}
            </motion.p>
          ) : null}
        </div>

        {/* Image side */}
        {image ? (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full"
          >
            {/* Decorative blueprint frame */}
            <span
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] border border-flag/25 sm:-inset-6"
            />
            {/* Corners */}
            <span aria-hidden className="pointer-events-none absolute -left-2 -top-2 z-10 h-5 w-5 border-l border-t border-flag/70" />
            <span aria-hidden className="pointer-events-none absolute -right-2 -top-2 z-10 h-5 w-5 border-r border-t border-flag/70" />
            <span aria-hidden className="pointer-events-none absolute -left-2 -bottom-2 z-10 h-5 w-5 border-l border-b border-flag/70" />
            <span aria-hidden className="pointer-events-none absolute -right-2 -bottom-2 z-10 h-5 w-5 border-r border-b border-flag/70" />

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-cream/15">
              <Image
                src={image}
                alt={imageAlt || title}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              {(imageCaption || imageMeta) && (
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  {imageCaption ? (
                    <div className="font-display text-sm text-cream">
                      {imageCaption}
                    </div>
                  ) : <span />}
                  {imageMeta ? (
                    <div className="text-[10px] uppercase tracking-[0.32em] text-cream-muted">
                      {imageMeta}
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </motion.div>
        ) : null}
      </Container>
    </section>
  );
}
