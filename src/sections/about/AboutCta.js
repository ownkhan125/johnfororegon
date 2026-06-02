"use client";

import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export function AboutCta() {
  return (
    <SectionFrame
      eyebrow="06 · Your Move"
      className="relative bg-bark py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_50%,rgba(200,16,46,0.18),transparent_70%)]"
      />
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-ember/30 bg-ink p-8 sm:p-12 lg:p-16">
          <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-ember" />
          <div className="grain absolute inset-0" />
          <motion.div
            aria-hidden
            animate={{ opacity: [0.4, 0.65, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-ember/15 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-cream-muted">
                A quote that started this campaign
              </div>
              <Reveal delay={0.2}>
                <p className="mt-5 font-display text-2xl leading-snug text-cream sm:text-3xl">
                  &ldquo;John doesn&apos;t need to be taught how Washington
                  works. He needs to be sent there to remind it how Oregon
                  does.&rdquo;
                </p>
                <div className="mt-5 text-[11px] uppercase tracking-[0.32em] text-cream-muted">
                  — Karla Reyes, retired UFCW Local 555 organizer
                </div>
              </Reveal>
            </div>

            <div>
              <AnimatedHeading
                text="Be part of it."
                className="font-display text-3xl font-light leading-tight tracking-tight text-cream sm:text-4xl"
              />
              <p className="mt-5 max-w-md text-cream/75">
                The campaign moves at the speed of its volunteers. Join us —
                or chip in $10 and put a sign in a window.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Button as="a" href="/volunteer" variant="primary">
                  Volunteer
                  <Arrow />
                </Button>
                <Button as="a" href="/donate" variant="outline">
                  Donate
                </Button>
              </div>
            </div>
          </div>
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
