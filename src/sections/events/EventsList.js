"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";
import { EVENTS } from "@/data/events";

export function EventsList() {
  return (
    <SectionFrame
      eyebrow="01 · Upcoming"
      className="relative bg-ink py-28 sm:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          <AnimatedHeading
            text="Upcoming events. Don't miss out."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-md text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              Six stops this summer across six counties. Click any event for
              the full schedule and to reserve a seat.
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
          stagger={0.1}
          delay={0.35}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {EVENTS.map((ev) => (
            <GlowCard
              key={ev.slug}
              as="article"
              variants={revealItem}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              glow="rgba(200,16,46,0.22)"
              size={420}
              className="relative flex flex-col overflow-hidden rounded-3xl border border-cream/10 bg-bark"
            >
              <Link
                href={`/events/${ev.slug}`}
                className="absolute inset-0 z-30"
                aria-label={`See details for ${ev.title}`}
              >
                <span className="sr-only">{ev.title}</span>
              </Link>

              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={ev.img}
                    alt={ev.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />

                {/* Date chip */}
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="floaty absolute left-4 top-4 grid h-16 w-16 place-items-center rounded-2xl border border-cream/30 bg-ink/55 backdrop-blur"
                >
                  <div className="text-center">
                    <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-cream-muted">
                      {ev.day}
                    </div>
                    <div className="font-display text-sm leading-tight text-cream">
                      {ev.date}
                    </div>
                  </div>
                </motion.div>

                <div className="absolute right-4 top-4 flex flex-col items-end gap-2">
                  <span className="rounded-full border border-cream/30 bg-ink/40 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cream backdrop-blur">
                    {ev.time}
                  </span>
                  <span className="rounded-full border border-flag/40 bg-flag/20 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-paper backdrop-blur">
                    {ev.type}
                  </span>
                </div>
              </div>

              <div className="relative flex flex-1 flex-col gap-3 p-5 sm:p-6">
                <h3 className="font-display text-xl font-light leading-snug text-cream">
                  {ev.title}
                </h3>
                <div className="text-[12px] uppercase tracking-[0.18em] text-cream-muted">
                  {ev.venue} · {ev.city}
                </div>
                <p className="text-sm leading-relaxed text-cream/70">
                  {ev.summary}
                </p>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="link-underline text-[11px] uppercase tracking-[0.22em] text-cream">
                    Details &amp; RSVP →
                  </span>
                  <span className="text-xs text-cream/60">
                    {ev.city.split(",")[0]}
                  </span>
                </div>
              </div>

              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-700 group-hover:scale-x-100" />
            </GlowCard>
          ))}
        </RevealGroup>
      </Container>
    </SectionFrame>
  );
}
