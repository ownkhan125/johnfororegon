"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { POST_FORMATS, getPostSrc } from "@/data/social-posts";
import { PostFrame } from "@/sections/social-posts/PostFrame";

/**
 * PostDetailHero
 * The detail view of a single creative. The post is shown at its native
 * aspect ratio — fitting the available column without scaling past 1× and
 * without cropping. A "full view" button opens a true 1:1 lightbox so the
 * user can see the creative at native resolution, scrollable if larger
 * than the viewport.
 */
export function PostDetailHero({ post, prev, next }) {
  const meta = POST_FORMATS[post.format];
  const [w, h] = meta.native;
  const [lightbox, setLightbox] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  return (
    <section className="relative isolate overflow-hidden bg-ink pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Ambient washes — match the home / inner-page hero look */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_55%_at_85%_10%,rgba(200,16,46,0.20),transparent_55%),radial-gradient(80%_50%_at_10%_20%,rgba(10,37,64,0.45),transparent_60%)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 grain opacity-100" />
      <div aria-hidden className="hero-grid absolute inset-0 -z-10 opacity-60" />
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
        className="absolute inset-x-0 top-0 h-px bg-ember/40"
      />

      <Container>
        {/* Breadcrumb / index pill */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <Link
            href="/social-media-posts"
            className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-cream-muted hover:text-cream"
          >
            <ArrowLeft className="h-3 w-3 transition-transform duration-500 group-hover:-translate-x-0.5" />
            All posts
          </Link>
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-cream/55">
            #{String(post.number).padStart(2, "0")} · {meta.label} ·{" "}
            {meta.ratioLabel}
          </span>
        </motion.div>

        <div className="mt-10 grid items-start gap-12 lg:mt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left — meta */}
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.02] tracking-[-0.02em] text-cream"
            >
              {post.title}.
            </motion.h1>

            <motion.div
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
              className="mt-6 h-px w-24 bg-cream/40"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-cream/75 sm:text-lg"
            >
              {post.summary}
            </motion.p>

            {/* Spec grid */}
            <motion.dl
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.65 }}
              className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-cream/10 pt-8 sm:max-w-md"
            >
              <Spec label="Format" value={meta.label} />
              <Spec label="Ratio" value={meta.ratioLabel} />
              <Spec label="Resolution" value={`${w} × ${h}`} />
              <Spec label="Series" value={post.subtitle} />
            </motion.dl>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-cream/15 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-cream/70"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button
                as="button"
                variant="primary"
                onClick={() => setLightbox(true)}
              >
                Full view
                <ExpandIcon />
              </Button>
              <Button as="a" href={getPostSrc(post.slug)} variant="outline" target="_blank" rel="noreferrer">
                Open creative
                <ArrowOut />
              </Button>
            </motion.div>
          </div>

          {/* Right — the creative itself */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 w-full lg:order-2"
          >
            {/* The creative wrapper caps its width so a 9:16 story still
                fits the viewport on desktop — for feed posts the wrapper
                fills the column. No padding, no border, no strips applied
                to the creative itself. */}
            <div
              className="mx-auto w-full"
              style={{
                maxWidth: post.format === "story" ? 480 : 720,
              }}
            >
              <PostFrame
                src={getPostSrc(post.slug)}
                nativeWidth={w}
                nativeHeight={h}
                title={post.title}
                lazy={false}
                interactive
                className="w-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Prev / Next navigation */}
        <div className="mt-16 flex flex-col items-stretch gap-3 border-t border-cream/10 pt-8 sm:mt-20 sm:flex-row sm:gap-6">
          <NavCard
            direction="prev"
            label="Previous"
            target={prev}
          />
          <NavCard
            direction="next"
            label="Next"
            target={next}
          />
        </div>
      </Container>

      {/* Full-view lightbox — portaled out of the section so the navbar
          doesn't bleed through the section's isolated stacking context. */}
      {mounted
        ? createPortal(
            <LightboxOverlay
              open={lightbox}
              onClose={() => setLightbox(false)}
              post={post}
              w={w}
              h={h}
            />,
            document.body,
          )
        : null}
    </section>
  );
}

function LightboxOverlay({ open, onClose, post, w, h }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-ink/95 px-4 py-6 backdrop-blur"
          onClick={onClose}
        >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-cream/30 bg-ink/70 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-cream backdrop-blur hover:border-ember/80 sm:right-6 sm:top-6"
              aria-label="Close full view"
            >
              Close
              <CloseIcon />
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
              style={{
                // Cap by whichever viewport axis is the binding constraint
                // while preserving the creative's exact aspect-ratio.
                width: `min(92vw, calc(88vh * ${w} / ${h}))`,
                aspectRatio: `${w} / ${h}`,
              }}
            >
              <PostFrame
                src={getPostSrc(post.slug)}
                nativeWidth={w}
                nativeHeight={h}
                title={`${post.title} — full view`}
                lazy={false}
                interactive
                className="h-full w-full"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
  );
}

function Spec({ label, value }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.32em] text-cream-muted">
        {label}
      </dt>
      <dd className="mt-2 font-display text-lg font-light text-cream">
        {value}
      </dd>
    </div>
  );
}

function NavCard({ direction, label, target }) {
  if (!target) return null;
  const isPrev = direction === "prev";
  return (
    <Link
      href={`/social-media-posts/${target.slug}`}
      className={`group flex flex-1 items-center justify-between gap-5 rounded-2xl border border-cream/10 bg-bark/40 p-5 transition-colors duration-500 hover:border-ember/60 ${
        isPrev ? "sm:text-left" : "sm:text-right"
      } ${isPrev ? "" : "sm:flex-row-reverse"}`}
    >
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cream/15 text-cream/80 transition-colors duration-500 group-hover:border-ember group-hover:text-cream-soft">
        {isPrev ? <ArrowLeft className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
      </div>
      <div className="flex-1">
        <div className="text-[10px] uppercase tracking-[0.32em] text-cream-muted">
          {label}
        </div>
        <div className="mt-1 font-display text-lg font-light text-cream group-hover:text-cream-soft">
          {target.title}
        </div>
        <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-cream/55">
          #{String(target.number).padStart(2, "0")} ·{" "}
          {POST_FORMATS[target.format].label}
        </div>
      </div>
    </Link>
  );
}

function ArrowRight({ className = "h-3.5 w-3.5" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2 8h11" />
      <path d="M9 4l4 4-4 4" />
    </svg>
  );
}

function ArrowLeft({ className = "h-3.5 w-3.5" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 8H3" />
      <path d="M7 4L3 8l4 4" />
    </svg>
  );
}

function ArrowOut() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 3h7v7" />
      <path d="M13 3L6.5 9.5" />
      <path d="M11 13H3V5" />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 6V3h3" />
      <path d="M13 6V3h-3" />
      <path d="M3 10v3h3" />
      <path d="M13 10v3h-3" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3 w-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 4l8 8" />
      <path d="M12 4l-8 8" />
    </svg>
  );
}
