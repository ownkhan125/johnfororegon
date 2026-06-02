"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { FloatingShapes } from "@/components/FloatingShapes";

const chapters = [
  {
    n: "01",
    label: "Oregon Native",
    title: "Coos Bay kid, Reed College mind.",
    body:
      "Born where the river meets the sea. Public school every year. A scholarship to Reed and a Ph.D. from the U. of Oregon. The same Oregon that built me is the one I want to defend.",
    img: "https://picsum.photos/seed/coos-bay-childhood/900/1200",
  },
  {
    n: "02",
    label: "Two decades teaching",
    title: "Twenty years in a classroom.",
    body:
      "Reed College philosophy professor. AFT union rep. I&apos;ve mentored thousands of students from every corner of the state — and I&apos;ve watched what happens when politicians stop listening to teachers.",
    img: "https://picsum.photos/seed/reed-college-class/900/1200",
  },
  {
    n: "03",
    label: "The listening tour",
    title: "All 36 counties. Every kitchen table.",
    body:
      "Over the last 18 months I had 1,200 conversations across all 36 counties. Mill workers in Coos. Nurses in Bend. Loggers in Wallowa. Same answer everywhere: Washington has stopped listening.",
    img: "https://picsum.photos/seed/listening-tour-rural/900/1200",
  },
  {
    n: "04",
    label: "Why the Senate",
    title: "Because Oregon deserves a neighbor.",
    body:
      "I&apos;m not a consultant. I&apos;m not from out of state. I&apos;m the guy you stand next to at the grocery store. That&apos;s the standard for who represents Oregon — and it&apos;s the standard I&apos;ll meet.",
    img: "https://picsum.photos/seed/oregon-senate-run/900/1200",
  },
];

export function AboutStory() {
  return (
    <SectionFrame
      eyebrow="01 · The Story"
      className="relative bg-ink py-28 sm:py-36"
    >
      <FloatingShapes variant="warm" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
          <AnimatedHeading
            text="Four chapters. One Oregonian."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-xl text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              John&apos;s story isn&apos;t a brochure. It&apos;s sixty years of
              showing up — in classrooms, union halls, school board meetings,
              and on the back roads of every county in the state.
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
          delay={0.3}
          className="mt-16 space-y-24 sm:space-y-32"
        >
          {chapters.map((c, i) => (
            <motion.div
              key={c.n}
              variants={revealItem}
              className={`grid gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -left-2 -top-2 z-10 h-5 w-5 border-l border-t border-flag/60"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -bottom-2 z-10 h-5 w-5 border-r border-b border-flag/60"
                />
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-cream/10">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={c.img}
                      alt={c.title}
                      fill
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-cream-muted">
                  Chapter {c.n} · {c.label}
                </div>
                <h3 className="mt-5 font-display text-3xl font-light leading-[1.1] tracking-tight text-cream sm:text-4xl">
                  {c.title}
                </h3>
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "left" }}
                  className="mt-6 block h-px w-16 bg-ember"
                />
                <p
                  className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
                  dangerouslySetInnerHTML={{ __html: c.body }}
                />
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </SectionFrame>
  );
}
