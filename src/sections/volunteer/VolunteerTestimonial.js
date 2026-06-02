"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { Reveal } from "@/components/Reveal";

export function VolunteerTestimonial() {
  return (
    <SectionFrame
      eyebrow="03 · Voices"
      className="relative bg-ink py-28 sm:py-36"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <Reveal
            y={60}
            duration={1.1}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-cream/15"
          >
            <Image
              src="https://picsum.photos/seed/volunteer-portrait-marisol/1000/1250"
              alt="Marisol Chen, volunteer captain"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-display text-sm text-cream">
                Marisol Chen
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.32em] text-cream-muted">
                Multnomah captain · 412 doors
              </div>
            </div>
            {/* Quote chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="floaty pointer-events-none absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full border border-flag/40 bg-flag/15 text-cream backdrop-blur"
            >
              <QuoteIcon />
            </motion.div>
          </Reveal>

          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-cream-muted">
              Volunteer story
            </div>
            <Reveal delay={0.25} y={40}>
              <p className="mt-6 font-display text-3xl font-light leading-snug text-cream sm:text-4xl">
                &ldquo;I&apos;d never knocked a door in my life. Two weekends in
                and I knew half the block by name. This campaign treats
                volunteers like the strategy — because we are.&rdquo;
              </p>
            </Reveal>

            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
              className="mt-8 block h-px w-24 bg-ember"
            />

            <Reveal delay={0.55} className="mt-6 text-cream/70">
              <p>
                Marisol joined the campaign in January. She now runs the
                Saturday canvass out of Lents — and recruited 18 of her own
                neighbors in the process.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </SectionFrame>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M5 4a3 3 0 00-3 3v5h4V8H4.5A1.5 1.5 0 016 6.5V4H5zm6 0a3 3 0 00-3 3v5h4V8h-1.5A1.5 1.5 0 0112 6.5V4h-1z" />
    </svg>
  );
}
