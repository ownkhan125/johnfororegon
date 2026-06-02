"use client";

import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal } from "@/components/Reveal";

export function VolunteerMission() {
  return (
    <SectionFrame
      eyebrow="01 · Why It Matters"
      className="relative bg-ink py-28 sm:py-36"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          <AnimatedHeading
            text="A campaign moves at the speed of its volunteers."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-xl text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed sm:text-lg">
              Every door knocked, every call dialed, every yard sign in a window
              widens the margin. We&apos;re running a people-powered campaign —
              and the people are you.
            </p>
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
              className="mt-8 block h-px w-24 bg-ember"
            />
          </Reveal>
        </div>
      </Container>
    </SectionFrame>
  );
}
