"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";

export function EventRelated({ events }) {
  if (!events?.length) return null;

  return (
    <SectionFrame
      eyebrow="06 · More Coming Up"
      className="relative bg-bark py-28 sm:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          <AnimatedHeading
            text="Related upcoming events."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-md text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              Three more chances to catch the campaign in the next few weeks.
              Free, open, and on the trail.
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
          {events.map((ev) => (
            <GlowCard
              key={ev.slug}
              as="article"
              variants={revealItem}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              glow="rgba(200,16,46,0.22)"
              size={420}
              className="relative flex flex-col overflow-hidden rounded-3xl border border-cream/10 bg-ink"
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
                <div className="absolute left-4 top-4 grid h-14 w-14 place-items-center rounded-2xl border border-cream/30 bg-ink/55 backdrop-blur">
                  <div className="text-center">
                    <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-cream-muted">
                      {ev.day}
                    </div>
                    <div className="font-display text-xs leading-tight text-cream">
                      {ev.date}
                    </div>
                  </div>
                </div>
                <span className="absolute right-4 top-4 rounded-full border border-flag/40 bg-flag/20 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-paper backdrop-blur">
                  {ev.type}
                </span>
              </div>

              <div className="relative flex flex-1 flex-col gap-3 p-5 sm:p-6">
                <h3 className="font-display text-lg font-light leading-snug text-cream">
                  {ev.title}
                </h3>
                <div className="text-[12px] uppercase tracking-[0.18em] text-cream-muted">
                  {ev.venue} · {ev.city}
                </div>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="text-xs text-cream/70">{ev.time}</span>
                  <span className="link-underline text-[11px] uppercase tracking-[0.22em] text-cream">
                    Details →
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
