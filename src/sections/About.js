"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { FloatingShapes } from "@/components/FloatingShapes";

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const noteY = useTransform(scrollYProgress, [0, 1], [-30, 50]);

  return (
    <SectionFrame
      id="about"
      eyebrow="01 · Who is John"
      className="relative bg-ink py-28 sm:py-36"
    >
      <FloatingShapes variant="warm" />
      <Container>
        <div ref={ref} className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Image side */}
          <motion.div style={{ y: imgY }} className="relative">
            <Reveal
              y={60}
              duration={1.1}
              className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-cream/15"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src="https://picsum.photos/seed/john-listening-tour/900/1125"
                  alt="John meeting voters"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
              {/* Inner sheen on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-x-32 -top-32 h-72 rotate-12 bg-gradient-to-r from-transparent via-cream/10 to-transparent opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div className="font-display text-sm text-cream">
                  Listening tour · Klamath Falls
                </div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-cream-muted">
                  March 2026
                </div>
              </div>
            </Reveal>

            {/* Floating mini card */}
            <motion.div
              style={{ y: noteY }}
              className="absolute -bottom-6 -right-4 hidden md:block"
            >
              <Reveal
                delay={0.35}
                className="floaty-rot w-56 rounded-2xl border border-cream/15 bg-bark/90 p-5 backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-cream font-display text-base text-ink">
                    20
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-cream-muted">
                      Years
                    </div>
                    <div className="font-display text-sm text-cream">
                      Teaching in Oregon
                    </div>
                  </div>
                </div>
                <div className="mt-4 h-px bg-cream/10" />
                <p className="mt-3 text-xs leading-relaxed text-cream/70">
                  Reed College philosophy professor, AFT union rep, dad of three
                  kids in public schools.
                </p>
              </Reveal>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <div className="flex flex-col">
            <AnimatedHeading
              as="h2"
              text="Born in Coos Bay. Made by Oregon."
              className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl"
            />

            <Reveal y={20} delay={0.35} className="mt-8 max-w-xl space-y-5 text-cream/80">
              <p className="text-lg leading-relaxed">
                I grew up where the river meets the sea — and where the mill
                closing meant my father drove forty miles for a new shift. My
                mother taught third grade for thirty-one years. They paid for
                college on a teacher&apos;s salary because Oregon used to make
                that possible.
              </p>
              <p className="leading-relaxed">
                I&apos;m running because that Oregon — the one that built me —
                is slipping away from the next generation. Housing is out of
                reach. Wildfires are bigger every summer. Rural hospitals are
                closing. We don&apos;t need another consultant in Washington.
                We need a neighbor.
              </p>
            </Reveal>

            <Reveal delay={0.55} className="mt-10 flex flex-wrap gap-4">
              <Button as="a" href="#issues" variant="primary">
                See where John stands
              </Button>
              <Button as="a" href="#endorsements" variant="ghost">
                Read endorsements
              </Button>
            </Reveal>

            {/* Inline credentials */}
            <Reveal delay={0.7} className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream/10 sm:grid-cols-4">
              {[
                ["B.A.", "Reed College"],
                ["Ph.D.", "U. of Oregon"],
                ["Dad of", "3 kids"],
                ["Lived in", "All 36 counties"],
              ].map(([k, v], i) => (
                <motion.div
                  key={k}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.8 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative bg-bark/60 p-4 text-center backdrop-blur transition-colors duration-500 hover:bg-umber/40"
                >
                  <div className="font-display text-lg text-cream">{k}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-cream-muted">
                    {v}
                  </div>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-3 bottom-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-500 group-hover:scale-x-100"
                  />
                </motion.div>
              ))}
            </Reveal>
          </div>
        </div>
      </Container>
    </SectionFrame>
  );
}
