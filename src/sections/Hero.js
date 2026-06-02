"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { useGsap } from "@/hooks/useGsap";
import { heroIntro } from "@/animations/gsapTimelines";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { StackedCards } from "@/components/StackedCards";

const HEADLINE = ["Honest", "work.", "Higher", "ground."];

const HERO_CARDS = [
  {
    id: "candidate",
    label: "Candidate · 2026",
    accent: "Live",
    title: "John Hartwell",
    meta: "Democrat · Portland, OR",
    body: "Reed College professor. AFT union rep. Dad of three.",
    img: "https://picsum.photos/seed/hartwell-portrait/900/1125",
    tint: "from-ink/85 via-ink/10 to-[#ff0000]/15",
  },
  {
    id: "tour",
    label: "Listening Tour",
    accent: "36 / 36",
    title: "1,200 conversations.",
    meta: "Wallowa County · 2025",
    body: "Every county. Every kitchen table. Every shift change.",
    img: "https://picsum.photos/seed/john-listening-tour/900/1125",
    tint: "from-ink/90 via-ink/10 to-[#0a2540]/40",
  },
  {
    id: "townhall",
    label: "Town Hall",
    accent: "This Friday",
    title: "Bend — Tower Theatre.",
    meta: "May 24 · 6:30 PM PT",
    body: "Free, open seating. Hard questions welcome.",
    img: "https://picsum.photos/seed/bend-townhall/900/1125",
    tint: "from-ink/90 via-ink/20 to-[#ff0000]/25",
  },
  {
    id: "win",
    label: "Field Win",
    accent: "Bill SB-114",
    title: "Rural ER bill, signed.",
    meta: "Burns Memorial · Sep 2025",
    body: "Three-line bill. Three counties. One open ER.",
    img: "https://picsum.photos/seed/rural-er-win/900/1125",
    tint: "from-ink/90 via-ink/10 to-[#b91c2c]/30",
  },
];

export function Hero() {
  const scopeRef = useGsap((scope) => {
    heroIntro(scope);
  });
  const wrapRef = useRef(null);
  const stageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end start"],
  });
  const stageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const ambientY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Mouse parallax on the right column
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 80, damping: 18, mass: 0.6 });
  const stageTiltY = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const stageTiltX = useTransform(sy, [-0.5, 0.5], [4, -4]);
  const stageShiftX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const stageShiftY = useTransform(sy, [-0.5, 0.5], [-10, 10]);

  function handleStageMove(e) {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function handleStageLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      id="top"
      ref={wrapRef}
      className="relative isolate overflow-hidden bg-ink pb-28 pt-32 sm:pb-36 sm:pt-40 lg:pt-44"
    >
      {/* Ambient washes — palette accents */}
      <motion.div
        aria-hidden
        style={{ y: ambientY }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_60%_at_85%_10%,rgba(255,0,0,0.28),transparent_55%),radial-gradient(80%_55%_at_10%_20%,rgba(10,37,64,0.45),transparent_60%),radial-gradient(70%_40%_at_50%_100%,rgba(185,28,44,0.22),transparent_60%)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 grain opacity-100" />
      <div
        aria-hidden
        className="hero-grid absolute inset-0 -z-10 opacity-70"
      />

      {/* Floating ambient orbs */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[6%] top-[28%] -z-10 h-48 w-48 rounded-full bg-flag/25 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 22, 0], x: [0, -14, 0] }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
        className="absolute right-[8%] top-[40%] -z-10 h-64 w-64 rounded-full bg-navy/40 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, -14, 0], x: [0, 10, 0] }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.4,
        }}
        className="absolute right-[28%] bottom-[10%] -z-10 h-52 w-52 rounded-full bg-flag-deep/30 blur-3xl"
      />

      <div ref={scopeRef}>
        <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* LEFT — text */}
          <motion.div style={{ y: textY }} className="relative">
            <div
              data-hero-eyebrow
              className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-cream-muted"
            >
              <span
                data-hero-line
                className="block h-px w-10 origin-left bg-cream/50"
              />
              <span className="flex items-center gap-2">
                <span className="grid h-1.5 w-1.5 rounded-full bg-flag flag-pulse" />
                Oregon · 2026 Senate Campaign
              </span>
            </div>

            {/* Headline — split words */}
            <h1 className="relative mt-7 font-display text-[clamp(2.75rem,7vw,5.75rem)] font-light leading-[0.95] tracking-[-0.02em] text-cream">
              {/* Vertical accent bar */}
              <span
                aria-hidden
                data-hero-line
                className="absolute -left-4 top-2 hidden h-[68%] w-[3px] origin-top bg-ember sm:block"
              />
              {HEADLINE.map((word, i) => (
                <span
                  key={i}
                  className="relative inline-block overflow-hidden pb-[0.1em] pr-3 align-top sm:pr-5"
                >
                  <span
                    data-hero-word
                    className={`inline-block ${
                      word === "ground." || word === "work."
                        ? "italic text-cream-soft"
                        : ""
                    }`}
                  >
                    {word === "ground." ? (
                      <span className="relative">
                        {word}
                        <motion.span
                          aria-hidden
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 2.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                          style={{ transformOrigin: "left" }}
                          className="absolute -bottom-1 left-0 right-2 h-[3px] bg-flag"
                        />
                      </span>
                    ) : (
                      word
                    )}
                  </span>
                </span>
              ))}
            </h1>

            <div
              data-hero-line
              className="mt-8 h-px w-28 origin-left bg-cream/40"
            />

            <p
              data-hero-body
              className="mt-7 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
            >
              John Hartwell is running for U.S. Senate to put Oregon families
              ahead of corporate donors. Affordable housing, clean rivers, and a
              healthcare system that doesn&apos;t bury you — built block by
              block, with you in the room.
            </p>

            <div
              data-hero-cta
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button as="a" href="/volunteer" variant="primary">
                Join the campaign
                <Arrow />
              </Button>
              <Button as="a" href="/about" variant="outline">
                Meet John
              </Button>
              <a
                href="/events"
                className="link-underline ml-1 hidden text-sm uppercase tracking-[0.22em] text-cream-muted hover:text-cream sm:inline-block"
              >
                Upcoming events
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-cream/10 pt-8">
              {[
                { v: "26K+", l: "Supporters" },
                { v: "$1.4M", l: "Grassroots raised" },
                { v: "36", l: "Counties visited" },
              ].map((s) => (
                <motion.div
                  key={s.l}
                  data-hero-stat
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="font-display text-3xl font-light text-cream sm:text-4xl">
                    {s.v}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-cream-muted">
                    {s.l}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — stacked card stage */}
          <motion.div
            ref={stageRef}
            onMouseMove={handleStageMove}
            onMouseLeave={handleStageLeave}
            style={{ y: stageY, perspective: 1600 }}
            className="relative w-full"
          >
            {/* Decorative blueprint frame */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -inset-6 -z-10 rounded-[2.5rem] border border-flag/25 sm:-inset-10"
            />
            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1.4 }}
              className="absolute -inset-2 -z-10 rounded-[2.25rem] sm:-inset-4"
            >
              <span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-flag/60" />
              <span className="absolute right-0 top-0 h-6 w-6 border-r border-t border-flag/60" />
              <span className="absolute left-0 bottom-0 h-6 w-6 border-l border-b border-flag/60" />
              <span className="absolute right-0 bottom-0 h-6 w-6 border-r border-b border-flag/60" />
            </motion.div>

            {/* Flag stripes accent — vertical strip to the right of the stage */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="flag-stripes pointer-events-none absolute -right-3 top-12 hidden h-40 w-3 sm:block"
            />

            {/* Mouse-parallaxed layer that houses the stack */}
            <motion.div
              style={{
                x: stageShiftX,
                y: stageShiftY,
                rotateY: stageTiltY,
                rotateX: stageTiltX,
                transformStyle: "preserve-3d",
              }}
              className="relative will-change-transform"
            >
              <StackedCards cards={HERO_CARDS} />
            </motion.div>

          </motion.div>
        </Container>

        {/* bottom border line */}
        <div
          aria-hidden
          data-hero-line
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-ember"
        />
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5"
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
