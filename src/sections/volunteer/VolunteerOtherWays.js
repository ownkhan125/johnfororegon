"use client";

import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { GlowCard } from "@/components/GlowCard";

const ways = [
  {
    label: "Donate",
    title: "Chip in $10",
    body: "Median donation is $27. Every dollar funds yard signs, gas, and door knockers.",
    cta: "Donate now",
    href: "/donate",
  },
  {
    label: "Share",
    title: "Tell five friends",
    body: "Forward the campaign newsletter. Post a yard-sign photo. Word of mouth still wins races.",
    cta: "Share the campaign",
    href: "/contact",
  },
  {
    label: "Host",
    title: "Throw a house party",
    body: "Living rooms, backyards, union halls. We&apos;ll send the organizer and the materials.",
    cta: "Host an event",
    href: "/contact",
  },
];

export function VolunteerOtherWays() {
  return (
    <SectionFrame
      eyebrow="05 · Other Ways to Help"
      className="relative bg-ink py-28 sm:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          <AnimatedHeading
            text="Can't knock doors? Help another way."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-md text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              There&apos;s a job for every schedule, every skillset, and every
              dollar. Pick one and we&apos;ll point you at the team.
            </p>
          </Reveal>
        </div>

        <motion.div
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
          className="mt-14 h-px w-full bg-ember/40"
        />

        <RevealGroup
          stagger={0.12}
          delay={0.35}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {ways.map((w) => (
            <GlowCard
              key={w.label}
              variants={revealItem}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              glow="rgba(200,16,46,0.22)"
              size={420}
              className="relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-cream/10 bg-bark/90 p-7 sm:p-8"
            >
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-cream-muted">
                <span>{w.label}</span>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 text-cream">
                  <Arrow />
                </span>
              </div>
              <h3 className="font-display text-2xl font-light leading-snug tracking-tight text-cream">
                {w.title}
              </h3>
              <p
                className="text-sm leading-relaxed text-cream/70"
                dangerouslySetInnerHTML={{ __html: w.body }}
              />
              <div className="mt-auto pt-4">
                <Button as="a" href={w.href} variant="outline" className="w-full">
                  {w.cta}
                </Button>
              </div>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-700 group-hover:scale-x-100" />
            </GlowCard>
          ))}
        </RevealGroup>
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
