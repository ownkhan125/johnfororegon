"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal } from "@/components/Reveal";

export function EventDetails({ event }) {
  return (
    <SectionFrame
      eyebrow="01 · About this event"
      className="relative bg-ink py-28 sm:py-36"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-20">
          {/* Featured image */}
          <Reveal
            y={60}
            duration={1.1}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-cream/15"
          >
            <Image
              src={event.img}
              alt={event.title}
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div className="font-display text-sm text-cream">
                {event.venue}
              </div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-cream-muted">
                {event.city}
              </div>
            </div>
          </Reveal>

          {/* Body */}
          <div>
            <AnimatedHeading
              text="What to expect."
              className="font-display text-3xl font-light leading-tight tracking-tight text-cream sm:text-4xl"
            />
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
              className="mt-7 block h-px w-20 bg-ember"
            />

            <Reveal delay={0.5} className="mt-7 max-w-xl space-y-5 text-cream/80">
              <p className="leading-relaxed sm:text-lg">
                {event.description}
              </p>
              <p className="leading-relaxed">
                Hosted by Hartwell for Oregon and our regional volunteer team.
                Press inquiries are welcome — please email{" "}
                <a
                  href="mailto:press@johnfororegon.com"
                  className="link-underline text-cream"
                >
                  press@johnfororegon.com
                </a>{" "}
                for credentials.
              </p>
            </Reveal>

            <Reveal delay={0.65} className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream/10 sm:grid-cols-3">
              {[
                ["Type", event.type],
                ["Capacity", `${event.capacity.toLocaleString()} seats`],
                ["City", event.city],
              ].map(([k, v], i) => (
                <motion.div
                  key={k}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative bg-bark/60 p-5 transition-colors duration-500 hover:bg-umber/40"
                >
                  <div className="text-[10px] uppercase tracking-[0.28em] text-cream-muted">
                    {k}
                  </div>
                  <div className="mt-2 font-display text-base text-cream">
                    {v}
                  </div>
                </motion.div>
              ))}
            </Reveal>
          </div>
        </div>
      </Container>
    </SectionFrame>
  );
}
