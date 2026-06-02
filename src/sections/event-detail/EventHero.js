"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Button } from "@/components/Button";

export function EventHero({ event }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44">
      {/* Featured background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={event.img}
          alt={event.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink" />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_55%_at_85%_10%,rgba(200,16,46,0.22),transparent_55%),radial-gradient(80%_50%_at_10%_20%,rgba(10,37,64,0.45),transparent_60%)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 grain opacity-100" />

      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
        className="absolute inset-x-0 top-0 h-px bg-ember/40"
      />
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "right" }}
        className="absolute inset-x-0 bottom-0 h-[2px] bg-ember"
      />

      <Container className="relative">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-cream-muted"
        >
          <Link href="/events" className="link-underline text-cream/80 hover:text-cream">
            Events
          </Link>
          <span aria-hidden>/</span>
          <span className="text-cream/60">{event.type}</span>
        </motion.div>

        <div className="mt-8 grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: title + summary */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-cream-muted"
            >
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left" }}
                className="block h-px w-10 bg-cream/50"
              />
              <span className="flex items-center gap-2">
                <span className="grid h-1.5 w-1.5 rounded-full bg-flag flag-pulse" />
                {event.fullDate}
              </span>
            </motion.div>

            <AnimatedHeading
              as="h1"
              text={event.title}
              delay={0.4}
              className="mt-6 font-display text-[clamp(2.4rem,6vw,4.75rem)] font-light leading-[1] tracking-[-0.02em] text-cream"
            />

            <motion.div
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
              className="mt-7 h-px w-28 bg-cream/40"
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
            >
              {event.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button as="a" href="#rsvp" variant="primary">
                Reserve a seat
                <Arrow />
              </Button>
              <Button as="a" href="/events" variant="outline">
                All events
              </Button>
            </motion.div>
          </div>

          {/* Right: quick facts card */}
          <motion.aside
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full"
          >
            <span
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-[2rem] border border-flag/25 sm:-inset-5"
            />
            <span aria-hidden className="pointer-events-none absolute -left-2 -top-2 z-10 h-5 w-5 border-l border-t border-flag/70" />
            <span aria-hidden className="pointer-events-none absolute -right-2 -top-2 z-10 h-5 w-5 border-r border-t border-flag/70" />
            <span aria-hidden className="pointer-events-none absolute -left-2 -bottom-2 z-10 h-5 w-5 border-l border-b border-flag/70" />
            <span aria-hidden className="pointer-events-none absolute -right-2 -bottom-2 z-10 h-5 w-5 border-r border-b border-flag/70" />

            <div className="relative overflow-hidden rounded-3xl border border-cream/15 bg-bark/80 p-6 backdrop-blur sm:p-8">
              <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-ember" />

              <div className="flex items-center justify-between">
                <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-cream-muted">
                  Event brief
                </div>
                <span className="rounded-full border border-flag/40 bg-flag/15 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-paper">
                  {event.type}
                </span>
              </div>

              <ul className="mt-7 space-y-5">
                <FactRow label="Date" value={event.fullDate} icon={CalendarIcon} delay={0.4} />
                <FactRow label="Time" value={`${event.time} – ${event.endTime} PT`} icon={ClockIcon} delay={0.5} />
                <FactRow label="Venue" value={event.venue} icon={PinIcon} delay={0.6} />
                <FactRow label="Capacity" value={`${event.capacity.toLocaleString()} seats`} icon={UsersIcon} delay={0.7} />
              </ul>

              <div className="mt-7 flex flex-wrap gap-2 border-t border-cream/10 pt-5">
                {event.tags.map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.85 + i * 0.06 }}
                    className="rounded-full border border-cream/15 bg-ink/40 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cream/80"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}

function FactRow({ label, value, icon: Icon, delay = 0.4 }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-start gap-4"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-cream/20 text-cream">
        <Icon />
      </span>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.28em] text-cream-muted">
          {label}
        </div>
        <div className="mt-1 break-words font-display text-base font-light text-cream">
          {value}
        </div>
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
function CalendarIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2.5" y="3.5" width="11" height="10" rx="1.2" />
      <path d="M2.5 6.5h11M5.5 2v3M10.5 2v3" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="8" cy="8" r="5.5" />
      <path d="M8 5v3l2 1.5" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 13.5s4-4 4-7a4 4 0 10-8 0c0 3 4 7 4 7z" />
      <circle cx="8" cy="6.5" r="1.4" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="11.5" cy="6.5" r="1.8" />
      <path d="M2 13c0-2.2 1.8-3.5 4-3.5s4 1.3 4 3.5M10 13c0-1.6 1.4-2.8 3-2.8" />
    </svg>
  );
}
