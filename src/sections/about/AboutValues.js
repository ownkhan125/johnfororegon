"use client";

import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { Tilt3DCard } from "@/components/Tilt3DCard";

const values = [
  {
    n: "01",
    title: "Accountability",
    body:
      "No PAC money. No stock trades in office. Town halls in every county, every year. If you can&apos;t look a constituent in the eye, you don&apos;t belong on a ballot.",
    bullets: ["No PAC money", "No stock trades", "36 town halls / yr"],
  },
  {
    n: "02",
    title: "Evidence over ideology",
    body:
      "Pick the policy that works — even when it&apos;s not on your team&apos;s talking points. Voters can smell a slogan from a mile away.",
    bullets: ["Outcomes-first", "Data-driven", "No purity tests"],
  },
  {
    n: "03",
    title: "Community first",
    body:
      "Washington forgot Oregon a long time ago. We&apos;ll write policy at kitchen tables, union halls, and tribal councils — then take it to D.C.",
    bullets: ["Listen, then legislate", "Open offices in every county", "Tribal partnerships"],
  },
];

export function AboutValues() {
  return (
    <SectionFrame
      eyebrow="04 · The Values"
      className="relative bg-bark py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_30%,rgba(200,16,46,0.14),transparent_70%)]"
      />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
          <AnimatedHeading
            text="Three values. No exceptions."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-xl text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              These aren&apos;t poll-tested. They&apos;re the rules John runs by
              — the ones you can hold him to from day one.
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
          {values.map((v) => (
            <Tilt3DCard
              key={v.n}
              variants={revealItem}
              intensity={6}
              glareSize={420}
              lift={20}
              className="h-full"
              innerClassName="conic-border relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-cream/10 bg-bark/90 p-7 transition-colors duration-500 group-hover:bg-umber/40 sm:p-8"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ember/10 blur-3xl opacity-50"
              />
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-cream-muted">
                  {v.n}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 text-cream">
                  <DotIcon />
                </span>
              </div>
              <h3 className="font-display text-2xl font-light leading-snug tracking-tight text-cream">
                {v.title}
              </h3>
              <p
                className="text-sm leading-relaxed text-cream/70"
                dangerouslySetInnerHTML={{ __html: v.body }}
              />
              <ul className="mt-auto space-y-2 border-t border-cream/10 pt-5">
                {v.bullets.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.55,
                      delay: 0.4 + i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-cream/80"
                  >
                    <span className="h-1 w-1 rounded-full bg-ember" />
                    {b}
                  </motion.li>
                ))}
              </ul>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-700 group-hover:scale-x-100" />
            </Tilt3DCard>
          ))}
        </RevealGroup>
      </Container>
    </SectionFrame>
  );
}

function DotIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden
    >
      <circle cx="8" cy="8" r="3" fill="currentColor" />
    </svg>
  );
}
