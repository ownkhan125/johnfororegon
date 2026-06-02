"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal } from "@/components/Reveal";

const pillars = [
  {
    n: "01",
    title: "Public schools that compete.",
    body: "Fund K–12 like we mean it. Forgive teacher debt for ten-year stays. Pay support staff a living wage — full stop.",
  },
  {
    n: "02",
    title: "Free teachers to teach.",
    body: "Cut paperwork. End the testing arms race. Give classroom teachers the same trust we give the doctors who treat our kids.",
  },
  {
    n: "03",
    title: "Equal funding. Real reform.",
    body: "Coos County kids deserve the same shot as Lake Oswego kids. Tie state funding to per-pupil equity, not zip-code wealth.",
  },
];

export function AboutPolicy() {
  return (
    <SectionFrame
      eyebrow="05 · Lead Policy"
      className="relative bg-ink py-28 sm:py-36"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          {/* Image side */}
          <Reveal
            y={60}
            duration={1.1}
            className="relative aspect-[5/6] w-full overflow-hidden rounded-[2rem] border border-cream/15"
          >
            <Image
              src="https://picsum.photos/seed/john-school-policy/1000/1200"
              alt="John meeting with public school teachers"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div className="font-display text-sm text-cream">
                Roosevelt H.S. roundtable
              </div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-cream-muted">
                Portland · 2026
              </div>
            </div>
            {/* Floating quote tag */}
            <motion.div
              initial={{ opacity: 0, x: -20, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: -3 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="floaty-rot pointer-events-none absolute -left-3 top-8 hidden items-center gap-2 rounded-full border border-flag/40 bg-flag/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.32em] text-paper backdrop-blur sm:flex"
            >
              <span className="grid h-1.5 w-1.5 rounded-full bg-flag flag-pulse" />
              Trust teachers
            </motion.div>
          </Reveal>

          {/* Copy side */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-cream-muted">
              Lead policy · Education
            </div>
            <AnimatedHeading
              text="Trust parents. Free teachers."
              className="mt-4 font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
            />
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
              className="mt-8 block h-px w-24 bg-cream/40"
            />

            <Reveal delay={0.5} className="mt-8 max-w-xl">
              <p className="leading-relaxed text-cream/80 sm:text-lg">
                Oregon ranks near the bottom of the country in math and reading.
                That isn&apos;t a kid problem. It&apos;s a system that pays
                lobbyists more than substitute teachers — and we&apos;re going
                to fix it.
              </p>
            </Reveal>

            <ol className="mt-12 space-y-6">
              {pillars.map((p, i) => (
                <motion.li
                  key={p.n}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid grid-cols-[3rem_1fr] gap-5 border-t border-cream/10 pt-6 first:border-t-0 first:pt-0"
                >
                  <div className="font-mono text-base text-ember">{p.n}</div>
                  <div>
                    <h4 className="font-display text-xl font-light leading-snug text-cream">
                      {p.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-cream/70">
                      {p.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>

            {/* Supporting stat */}
            <Reveal delay={0.6} className="mt-12 flex items-center gap-5 rounded-2xl border border-cream/10 bg-bark/60 p-5">
              <div className="font-display text-4xl font-light text-cream sm:text-5xl">
                47
                <span className="text-ember">th</span>
              </div>
              <div className="text-sm text-cream/75">
                Oregon&apos;s national rank for 8th-grade math proficiency.
                We&apos;ve been here too long.
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </SectionFrame>
  );
}
