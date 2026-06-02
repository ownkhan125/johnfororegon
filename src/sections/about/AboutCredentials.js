"use client";

import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";

const recognitions = [
  {
    year: "2014",
    title: "Oregon Educator of the Year",
    body: "Awarded by the Oregon Federation of Teachers for two decades of mentorship in public higher education.",
  },
  {
    year: "2019",
    title: "Salem Chamber Public Service Award",
    body: "Recognized for legislative testimony on student debt forgiveness and rural broadband.",
  },
  {
    year: "2022",
    title: "AFT Local 3544 Negotiator",
    body: "Lead bargaining rep on the contract that raised adjunct floors by 22% statewide.",
  },
];

const credentials = [
  "B.A., Reed College",
  "Ph.D., University of Oregon",
  "AFT Local 3544 — Negotiations Chair",
  "Oregon State Board of Higher Ed — Public Member",
  "Coos County Salmon Recovery Council",
  "Reed College Faculty Senate, 2017–2024",
];

export function AboutCredentials() {
  return (
    <SectionFrame
      eyebrow="02 · The Receipts"
      className="relative bg-bark py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_30%,rgba(200,16,46,0.12),transparent_70%)]"
      />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          <AnimatedHeading
            text="Recognition. Service. Receipts."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-md text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              A career of public service — measured in awards earned, contracts
              negotiated, and bills written. Not press releases. Outcomes.
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
          delay={0.3}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {recognitions.map((r) => (
            <GlowCard
              key={r.title}
              variants={revealItem}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              glow="rgba(200,16,46,0.22)"
              size={400}
              className="relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-cream/10 bg-bark/90 p-7 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-cream-muted">
                  {r.year}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 text-cream">
                  <StarIcon />
                </span>
              </div>
              <h3 className="font-display text-xl font-light leading-snug tracking-tight text-cream">
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed text-cream/70">
                {r.body}
              </p>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-700 group-hover:scale-x-100" />
            </GlowCard>
          ))}
        </RevealGroup>

        {/* Credentials list */}
        <Reveal delay={0.45} className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-cream/10 bg-ink/60 p-8 sm:p-10">
            <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-ember/60" />
            <div className="text-[11px] uppercase tracking-[0.32em] text-cream-muted">
              Memberships & Boards
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {credentials.map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-3 border-l border-cream/15 pl-4"
                >
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-ember" />
                  <span className="text-sm text-cream/85">{c}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionFrame>
  );
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M8 2l1.8 3.65 4.02.58-2.91 2.83.69 4-3.6-1.89-3.6 1.89.69-4L2.18 6.23l4.02-.58L8 2z" />
    </svg>
  );
}
