"use client";

import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal } from "@/components/Reveal";

const milestones = [
  { year: "1985", title: "Born in Coos Bay", body: "Public school all the way through." },
  { year: "2003", title: "B.A. — Reed College", body: "Philosophy. First in the family to graduate." },
  { year: "2009", title: "Ph.D. — U. of Oregon", body: "Political philosophy. Began teaching at Reed." },
  { year: "2014", title: "AFT Local Steward", body: "Started organizing adjuncts and grad workers." },
  { year: "2019", title: "Faculty Senate Chair", body: "Negotiated the 22% adjunct raise." },
  { year: "2024", title: "Statewide Listening Tour", body: "1,200 conversations across all 36 counties." },
  { year: "2026", title: "U.S. Senate Run", body: "On the ballot. People-powered. No PAC money." },
];

export function AboutTimeline() {
  return (
    <SectionFrame
      eyebrow="03 · The Journey"
      className="relative bg-ink py-28 sm:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          <AnimatedHeading
            text="A four-decade timeline."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-md text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              From Coos Bay grade school to a Senate run. Every step in
              public service, on the record.
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

        <div className="relative mt-16">
          {/* Vertical rail */}
          <motion.span
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-ember via-cream/40 to-transparent sm:left-1/2 sm:-translate-x-1/2"
          />

          <ol className="relative space-y-12 sm:space-y-16">
            {milestones.map((m, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.li
                  key={m.year}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid grid-cols-[2.5rem_1fr] gap-4 sm:grid-cols-2 sm:gap-12"
                >
                  {/* Dot */}
                  <motion.span
                    aria-hidden
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.25 + i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-ember shadow-[0_0_16px_rgba(200,16,46,0.7)] sm:left-1/2"
                  />

                  {/* Left card (or empty on right rows) */}
                  <div className={`hidden sm:block ${isRight ? "" : "sm:order-1"}`}>
                    {!isRight && (
                      <Card year={m.year} title={m.title} body={m.body} align="right" />
                    )}
                  </div>

                  {/* Mobile: content always on right */}
                  <div className="sm:hidden">
                    <Card year={m.year} title={m.title} body={m.body} align="left" />
                  </div>

                  {/* Right card */}
                  <div className={`hidden sm:block ${isRight ? "" : "sm:order-2"}`}>
                    {isRight && (
                      <Card year={m.year} title={m.title} body={m.body} align="left" />
                    )}
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </SectionFrame>
  );
}

function Card({ year, title, body, align }) {
  return (
    <div
      className={`relative rounded-2xl border border-cream/10 bg-bark/60 p-5 backdrop-blur transition-colors duration-500 hover:border-ember/40 sm:p-6 ${
        align === "right" ? "sm:text-right" : ""
      }`}
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-cream-muted">
        {year}
      </div>
      <h3 className="mt-2 font-display text-xl font-light leading-snug text-cream">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-cream/70">{body}</p>
      <span
        aria-hidden
        className={`pointer-events-none absolute bottom-0 h-px w-12 bg-ember/60 ${
          align === "right" ? "right-5" : "left-5"
        }`}
      />
    </div>
  );
}
