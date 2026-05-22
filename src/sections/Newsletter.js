"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <SectionFrame
      id="newsletter"
      eyebrow="08 · Stay Close"
      className="relative overflow-hidden bg-bark py-28 sm:py-36"
    >
      {/* Decorative rings */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="floaty absolute -left-32 top-1/2 -z-0 h-[480px] w-[480px] -translate-y-1/2 rounded-full border border-cream/10"
      />
      <motion.div
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute -right-40 top-1/2 -z-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-cream/5"
      />

      {/* Inner orbiting dot */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 -z-0 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      >
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-ember shadow-[0_0_20px_rgba(200,16,46,0.75)]" />
      </motion.div>
      <motion.div
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 -z-0 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      >
        <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cream/80 shadow-[0_0_18px_rgba(245,245,245,0.5)]" />
      </motion.div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedHeading
            as="h2"
            text="Letters from John. No spam, ever."
            className="mx-auto justify-center font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl"
          />

          <Reveal delay={0.35} className="mx-auto mt-6 max-w-xl">
            <p className="text-cream/75">
              One handwritten note a week from the candidate. Policy drops,
              field updates, and the occasional dispatch from a roadside diner.
            </p>
          </Reveal>

          <Reveal delay={0.55} className="mx-auto mt-10 max-w-xl">
            <motion.form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col gap-3 overflow-hidden rounded-full border border-cream/15 bg-ink/60 p-2 backdrop-blur sm:flex-row sm:items-center sm:gap-0 sm:pl-6"
            >
              {/* Inner sheen */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(360px circle at var(--gx,50%) var(--gy,50%), rgba(200,16,46,0.22), transparent 60%)",
                }}
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@oregon.com"
                className="relative flex-1 bg-transparent px-4 py-3 text-cream placeholder:text-cream-muted focus:outline-none sm:px-0"
              />
              <Button type="submit" className="relative w-full sm:w-auto">
                {sent ? "You're in" : "Subscribe"}
                <Arrow />
              </Button>
            </motion.form>
            <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-cream-muted">
              Free · Unsubscribe anytime
            </p>
          </Reveal>
        </div>
      </Container>
    </SectionFrame>
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
