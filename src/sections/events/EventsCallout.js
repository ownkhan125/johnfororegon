"use client";

import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export function EventsCallout() {
  return (
    <SectionFrame
      eyebrow="02 · Host"
      className="relative bg-bark py-28 sm:py-36"
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-cream/10 bg-ink p-8 sm:p-12 lg:p-16">
          <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-ember/60" />
          <motion.div
            aria-hidden
            animate={{ opacity: [0.4, 0.65, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-ember/15 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <AnimatedHeading
                text="Host an event in your town."
                className="font-display text-3xl font-light leading-tight tracking-tight text-cream sm:text-4xl"
              />
              <Reveal delay={0.3} className="mt-5">
                <p className="max-w-md text-cream/75">
                  Living room. Backyard. Union hall. We&apos;ll bring the
                  organizer and the materials — you bring the neighbors.
                </p>
              </Reveal>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Button as="a" href="/contact" variant="primary">
                Propose a date
                <Arrow />
              </Button>
              <Button as="a" href="/volunteer" variant="outline">
                Volunteer instead
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
