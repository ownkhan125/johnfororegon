"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal } from "@/components/Reveal";

const stops = [
  {
    date: "Spring 2025",
    title: "Launch the campaign",
    body: "Filed, hit 24 of 36 counties in the first month, opened HQ in Salem.",
    status: "done",
  },
  {
    date: "Summer 2025",
    title: "Listening tour",
    body: "1,200 conversations across timber towns, fishing ports, and suburban kitchens.",
    status: "done",
  },
  {
    date: "Fall 2025",
    title: "Platform released",
    body: "Six-pillar plan published — every line item costed by independent economists.",
    status: "active",
  },
  {
    date: "May 2026",
    title: "Democratic Primary",
    body: "Earn the nomination block by block. Door by door.",
    status: "next",
  },
  {
    date: "Nov 2026",
    title: "Election Day",
    body: "Send a working-class voice to the U.S. Senate.",
    status: "next",
  },
];

export function Roadmap() {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 80%", "end 30%"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const pathProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <SectionFrame
      id="roadmap"
      eyebrow="03 · The Road"
      className="relative bg-ink py-28 sm:py-36"
    >
      {/* Ambient glow */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-ember/[0.06] blur-3xl"
      />

      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <AnimatedHeading
            text="A campaign you can map."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-md text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              No surprise pivots, no quiet promises. Here&apos;s exactly how
              we get from launch to November — and where we are right now.
            </p>
          </Reveal>
        </div>

        <div ref={trackRef} className="relative mt-20">
          {/* Vertical guide line */}
          <div
            aria-hidden
            className="absolute left-4 top-0 h-full w-px bg-cream/10 sm:left-1/2 sm:-translate-x-1/2"
          />
          {/* Scroll-driven progress fill */}
          <motion.div
            aria-hidden
            style={{ height: progress }}
            className="absolute left-4 top-0 w-[2px] bg-ember sm:left-1/2 sm:-translate-x-1/2"
          />
          {/* Glowing leader dot at the head of the fill */}
          <motion.div
            aria-hidden
            style={{ top: progress }}
            className="absolute left-4 -translate-x-1/2 sm:left-1/2"
          >
            <span className="relative -mt-1.5 block h-3 w-3">
              <span className="absolute inset-0 rounded-full bg-ember opacity-70 blur-md" />
              <span className="absolute inset-[3px] rounded-full bg-cream" />
            </span>
          </motion.div>

          <ol className="relative space-y-14 sm:space-y-20">
            {stops.map((stop, i) => {
              const isRight = i % 2 === 1;
              return (
                <li key={stop.title} className="relative pl-14 sm:grid sm:grid-cols-2 sm:gap-10 sm:pl-0">
                  {/* Dot */}
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-4 top-2 -translate-x-1/2 sm:left-1/2"
                  >
                    <span
                      className={`relative grid h-4 w-4 place-items-center rounded-full ${
                        stop.status === "done"
                          ? "bg-cream"
                          : stop.status === "active"
                            ? "bg-ember pulse-soft"
                            : "bg-bark border border-cream/30"
                      }`}
                    >
                      {stop.status === "active" && (
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-70" />
                      )}
                    </span>
                  </motion.span>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isRight ? 40 : -40, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.85,
                      delay: 0.25 + i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -4 }}
                    className={`group relative overflow-hidden rounded-2xl border border-cream/10 bg-bark/70 p-6 backdrop-blur sm:p-7 ${
                      isRight ? "sm:col-start-2" : "sm:col-start-1"
                    }`}
                  >
                    {/* Soft hover sheen */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -inset-x-12 -top-12 h-32 rotate-12 bg-gradient-to-r from-transparent via-cream/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    />
                    <div className="relative flex items-center justify-between gap-4">
                      <span className="text-[11px] uppercase tracking-[0.32em] text-cream-muted">
                        {stop.date}
                      </span>
                      <StatusPill status={stop.status} />
                    </div>
                    <h3 className="relative mt-4 font-display text-2xl font-light leading-snug text-cream">
                      {stop.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-cream/70">
                      {stop.body}
                    </p>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-700 group-hover:scale-x-100"
                    />
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </SectionFrame>
  );
}

function StatusPill({ status }) {
  const map = {
    done: { label: "Complete", cls: "bg-cream/15 text-cream" },
    active: { label: "In Progress", cls: "bg-ember/20 text-ember" },
    next: { label: "Upcoming", cls: "bg-cream/5 text-cream-muted" },
  };
  const { label, cls } = map[status];
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] ${cls}`}
    >
      {label}
    </span>
  );
}
