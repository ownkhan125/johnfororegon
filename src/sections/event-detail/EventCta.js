"use client";

import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export function EventCta({ event }) {
  return (
    <SectionFrame
      eyebrow="05 · Spread the Word"
      className="relative bg-ink py-28 sm:py-36"
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-ember/30 bg-bark p-8 sm:p-12 lg:p-16">
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
                Help fill the room
              </div>
              <AnimatedHeading
                text="Bring three friends."
                className="mt-5 font-display text-3xl font-light leading-tight tracking-tight text-cream sm:text-4xl"
              />
              <Reveal delay={0.3} className="mt-5">
                <p className="max-w-md text-cream/75">
                  The fastest way to grow this campaign is word of mouth.
                  Forward this page to three friends who care about{" "}
                  {event.city.split(",")[0]} as much as you do.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Button as="a" href="/volunteer" variant="primary">
                Volunteer with us
                <Arrow />
              </Button>
              <Button as="a" href="/contact" variant="outline">
                Host an event
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </SectionFrame>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2 8h11" />
      <path d="M9 4l4 4-4 4" />
    </svg>
  );
}
