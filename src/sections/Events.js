"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { GlowCard } from "@/components/GlowCard";

const events = [
  {
    date: "MAY 24",
    day: "Fri",
    time: "6:30 PM",
    title: "Bend Town Hall",
    venue: "The Tower Theatre",
    city: "Bend, OR",
    img: "https://picsum.photos/seed/bend-townhall/800/600",
    rsvp: "Open seating",
  },
  {
    date: "JUN 02",
    day: "Sun",
    time: "11:00 AM",
    title: "Riverwalk Canvass",
    venue: "Tom McCall Park",
    city: "Portland, OR",
    img: "https://picsum.photos/seed/portland-riverwalk/800/600",
    rsvp: "Bring water",
  },
  {
    date: "JUN 14",
    day: "Fri",
    time: "5:00 PM",
    title: "Coast Fish Fry",
    venue: "Cannery Pier",
    city: "Astoria, OR",
    img: "https://picsum.photos/seed/astoria-coast/800/600",
    rsvp: "Free, family-friendly",
  },
  {
    date: "JUN 22",
    day: "Sat",
    time: "10:00 AM",
    title: "Roundtable: Rural Healthcare",
    venue: "Eastern OR Univ.",
    city: "La Grande, OR",
    img: "https://picsum.photos/seed/la-grande-healthcare/800/600",
    rsvp: "Q&A welcome",
  },
];

export function Events() {
  return (
    <SectionFrame
      id="events"
      eyebrow="05 · On the Road"
      className="relative bg-ink py-28 sm:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <AnimatedHeading
            text="Come find us. We'll bring the coffee."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-md text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              The single best way to know a candidate is to look them in the
              eye. Here&apos;s where John will be this month — every event is
              free and open.
            </p>
            <div className="mt-6">
              <Button as="a" href="#newsletter" variant="ghost">
                Subscribe to event drops
              </Button>
            </div>
          </Reveal>
        </div>

        <RevealGroup
          stagger={0.1}
          delay={0.35}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {events.map((ev) => (
            <GlowCard
              key={ev.title}
              as="article"
              variants={revealItem}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              glow="rgba(200,16,46,0.22)"
              size={420}
              className="relative flex flex-col overflow-hidden rounded-3xl border border-cream/10 bg-bark"
            >
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
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                {/* Date chip with subtle floating */}
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="floaty absolute left-4 top-4 grid h-16 w-16 place-items-center rounded-2xl border border-cream/30 bg-ink/50 backdrop-blur"
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
                <div className="absolute right-4 top-4 rounded-full border border-cream/30 bg-ink/40 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cream backdrop-blur">
                  {ev.time}
                </div>
              </div>

              <div className="relative flex flex-1 flex-col gap-3 p-5 sm:p-6">
                <h3 className="font-display text-xl font-light leading-snug text-cream">
                  {ev.title}
                </h3>
                <div className="text-[12px] uppercase tracking-[0.18em] text-cream-muted">
                  {ev.venue} · {ev.city}
                </div>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="text-xs text-cream/70">{ev.rsvp}</span>
                  <a
                    href="#rsvp"
                    className="link-underline text-[11px] uppercase tracking-[0.22em] text-cream"
                  >
                    RSVP →
                  </a>
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
