"use client";

import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { Tilt3DCard } from "@/components/Tilt3DCard";

const issues = [
  {
    n: "01",
    title: "Housing Oregonians can afford",
    body:
      "Build 500,000 new homes by 2032. End corporate hoarding of single-family rentals. Make first-time buying actually possible again.",
    bullets: ["State-backed first-time loans", "Cap institutional landlords", "Permit reform"],
  },
  {
    n: "02",
    title: "A healthcare bill that doesn't bury you",
    body:
      "Cap out-of-pocket prescriptions at $35/mo. Protect rural hospitals. Fund mental health care like it&apos;s a real emergency — because it is.",
    bullets: ["$35/mo Rx cap", "Save rural ERs", "Real mental health parity"],
  },
  {
    n: "03",
    title: "Clean rivers, working forests",
    body:
      "Defend the Columbia. Restore salmon runs. Pay forest workers a fair wage to thin fire fuel before it burns down whole towns.",
    bullets: ["Salmon recovery", "Wildfire workforce", "Climate-resilient grid"],
  },
  {
    n: "04",
    title: "Schools that actually compete",
    body:
      "Fully fund public schools. Forgive student debt for nurses, teachers, and tradespeople who stay in Oregon for 10 years.",
    bullets: ["K–12 funding floor", "10-year debt forgiveness", "Free community college"],
  },
  {
    n: "05",
    title: "Manufacturing in Made-in-Oregon",
    body:
      "Bring chip fab and battery jobs home with strings attached — union scale, local hiring, no kickbacks to private equity.",
    bullets: ["Union scale or no deal", "Local hire mandates", "Pacific NW trade corridor"],
  },
  {
    n: "06",
    title: "Democracy you can trust",
    body:
      "Public financing for state campaigns. Ban congressional stock trading. End gerrymandering with independent commissions.",
    bullets: ["Public financing", "No stock trades in office", "Independent maps"],
  },
];

export function Issues() {
  return (
    <SectionFrame
      id="issues"
      eyebrow="02 · The Platform"
      className="relative bg-bark py-28 sm:py-36"
    >
      {/* Ambient warm wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_30%,rgba(200,16,46,0.14),transparent_70%)]"
      />

      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
          <div>
            <AnimatedHeading
              text="Six priorities. No mush."
              className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
            />
          </div>
          <Reveal delay={0.3} className="max-w-xl text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              We don&apos;t need vibes. We need a list. Here&apos;s what John
              will fight for in his first term — written plainly so you can
              hold him to it.
            </p>
          </Reveal>
        </div>

        {/* Animated framing line above grid */}
        <motion.div
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{ transformOrigin: "left" }}
          className="mt-14 h-px w-full bg-ember/40"
        />

        <RevealGroup
          stagger={0.1}
          delay={0.35}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {issues.map((issue) => (
            <Tilt3DCard
              key={issue.n}
              variants={revealItem}
              intensity={7}
              glareSize={420}
              lift={22}
              className="h-full"
              innerClassName="conic-border relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-cream/10 bg-bark/90 p-7 transition-colors duration-500 group-hover:bg-umber/40 sm:p-8"
            >
              {/* Tilted depth layers */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ember/10 blur-3xl transition-opacity duration-700 group-hover:opacity-100 opacity-50"
              />

              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-cream-muted">
                  {issue.n}
                </span>
                <ArrowOut />
              </div>
              <h3 className="font-display text-2xl font-light leading-snug tracking-tight text-cream">
                {issue.title}
              </h3>
              <p
                className="text-sm leading-relaxed text-cream/70"
                dangerouslySetInnerHTML={{ __html: issue.body }}
              />
              <ul className="mt-auto space-y-2 border-t border-cream/10 pt-5">
                {issue.bullets.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.55,
                      delay: 0.5 + i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-cream/80"
                  >
                    <span className="h-1 w-1 rounded-full bg-ember" />
                    {b}
                  </motion.li>
                ))}
              </ul>
              {/* hover glow line */}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-700 group-hover:scale-x-100" />
            </Tilt3DCard>
          ))}
        </RevealGroup>
      </Container>
    </SectionFrame>
  );
}

function ArrowOut() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-4 w-4 text-cream-muted transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cream"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 12L12 4" />
      <path d="M6 4h6v6" />
    </svg>
  );
}
