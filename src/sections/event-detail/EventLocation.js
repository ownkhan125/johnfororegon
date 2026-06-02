"use client";

import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export function EventLocation({ event }) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    event.address,
  )}`;
  const calUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    event.title,
  )}&details=${encodeURIComponent(event.summary)}&location=${encodeURIComponent(
    event.address,
  )}`;

  return (
    <SectionFrame
      eyebrow="02 · Date · Time · Location"
      className="relative bg-bark py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_30%,rgba(200,16,46,0.14),transparent_70%)]"
      />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          <AnimatedHeading
            text="When and where."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-md text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              All the practical details in one place. Add the event to your
              calendar or pull directions on the way out the door.
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

        <Reveal delay={0.35} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-cream/10 bg-ink/70 p-6 sm:p-10 lg:p-12">
            <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-ember/60" />

            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
              <ul className="space-y-7">
                <Row label="Date" value={event.fullDate} delay={0.1} />
                <Row
                  label="Time"
                  value={`${event.time} – ${event.endTime} PT`}
                  delay={0.2}
                />
                <Row label="Venue" value={event.venue} delay={0.3} />
                <Row label="Address" value={event.address} delay={0.4} />
              </ul>

              <div className="flex flex-col gap-6">
                {/* Decorative map placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden rounded-2xl border border-cream/15 bg-bark/60"
                >
                  <div className="relative aspect-[5/3]">
                    <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_60%,rgba(200,16,46,0.18),transparent_70%)]" />
                    {/* SVG grid map */}
                    <svg
                      viewBox="0 0 400 240"
                      className="absolute inset-0 h-full w-full"
                      aria-hidden
                    >
                      <defs>
                        <pattern
                          id="grid"
                          width="32"
                          height="32"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 32 0 L 0 0 0 32"
                            fill="none"
                            stroke="rgba(245,245,245,0.08)"
                            strokeWidth="1"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                      <motion.path
                        d="M 40 200 C 100 160, 160 180, 200 130 S 320 80, 360 50"
                        fill="none"
                        stroke="rgba(200,16,46,0.8)"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <motion.circle
                        cx="200"
                        cy="130"
                        r="6"
                        fill="#c8102e"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <motion.circle
                        cx="200"
                        cy="130"
                        r="14"
                        fill="none"
                        stroke="rgba(200,16,46,0.6)"
                        strokeWidth="1.5"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: [1, 1.6, 1], opacity: [0.8, 0, 0.8] }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          delay: 1.2,
                          duration: 2.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </svg>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent p-5">
                      <div className="text-[10px] uppercase tracking-[0.32em] text-cream-muted">
                        Approximate location
                      </div>
                      <div className="mt-1 font-display text-sm text-cream">
                        {event.venue} · {event.city}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="flex flex-wrap gap-3">
                  <Button as="a" href={mapsUrl} variant="primary">
                    Get directions
                    <Arrow />
                  </Button>
                  <Button as="a" href={calUrl} variant="outline">
                    Add to calendar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionFrame>
  );
}

function Row({ label, value, delay }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative border-l border-cream/15 pl-5"
    >
      <span aria-hidden className="absolute -left-px top-2 h-5 w-px bg-ember" />
      <div className="text-[10px] uppercase tracking-[0.28em] text-cream-muted">
        {label}
      </div>
      <div className="mt-1 font-display text-lg font-light text-cream sm:text-xl">
        {value}
      </div>
    </motion.li>
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
