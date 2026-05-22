"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";

const testimonials = [
  {
    quote:
      "John is the rarest kind of candidate — one who actually does the reading. He showed up at our union hall with notes from our last bargaining session.",
    name: "Maria Delgado",
    role: "Steelworkers Local 1097, Portland",
    img: "https://picsum.photos/seed/maria-delgado/240/240",
  },
  {
    quote:
      "I&apos;ve voted Republican my whole life. John is the first Democrat who came to my ranch, drank my coffee, and listened more than he talked.",
    name: "Hank Olsen",
    role: "Cattle rancher, Wallowa County",
    img: "https://picsum.photos/seed/hank-olsen/240/240",
  },
  {
    quote:
      "Our ER almost closed in 2023. John spent three days here. Six months later, the funding bill he co-wrote saved it.",
    name: "Dr. Priya Shah",
    role: "Emergency physician, Burns",
    img: "https://picsum.photos/seed/priya-shah/240/240",
  },
];

const logos = [
  "AFL-CIO Oregon",
  "Sierra Club",
  "Working Families",
  "OR Education Assn.",
  "Service Employees",
  "Pacific Coast Federation",
];

export function Endorsements() {
  return (
    <SectionFrame
      id="endorsements"
      eyebrow="04 · The People"
      className="relative bg-bark py-28 sm:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <AnimatedHeading
            text="Why Oregonians are showing up."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-md text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              From the docks of Astoria to the orchards of Hood River — this
              campaign belongs to the people who built it. Here&apos;s a few
              of them.
            </p>
          </Reveal>
        </div>

        <RevealGroup
          stagger={0.12}
          delay={0.35}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <GlowCard
              key={t.name}
              as="figure"
              variants={revealItem}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              glow="rgba(200,16,46,0.20)"
              size={460}
              className="relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-cream/10 bg-ink p-7 sm:p-8"
            >
              <Quote />
              <blockquote
                className="relative z-10 font-display text-lg font-light leading-snug text-cream sm:text-xl"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }}
              />
              <figcaption className="relative z-10 mt-auto flex items-center gap-4 border-t border-cream/10 pt-5">
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-cream/20"
                >
                  <Image
                    src={t.img}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </motion.div>
                <div>
                  <div className="font-display text-sm text-cream">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-cream-muted">
                    {t.role}
                  </div>
                </div>
              </figcaption>

              {/* hover underline */}
              <span className="pointer-events-none absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-700 group-hover:scale-x-100" />
            </GlowCard>
          ))}
        </RevealGroup>

        {/* Endorser logos */}
        <Reveal
          delay={0.4}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 sm:grid-cols-3 lg:grid-cols-6"
        >
          {logos.map((l, i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: 0.5 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -3 }}
              className="group relative bg-bark px-6 py-7 text-center font-display text-sm uppercase tracking-[0.16em] text-cream/75 transition-colors duration-500 hover:bg-umber hover:text-cream"
            >
              <span className="relative z-10">{l}</span>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-4 bottom-2 h-px origin-left scale-x-0 bg-ember transition-transform duration-500 group-hover:scale-x-100"
              />
            </motion.div>
          ))}
        </Reveal>
      </Container>
    </SectionFrame>
  );
}

function Quote() {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      viewBox="0 0 24 24"
      className="h-7 w-7 text-ember"
      fill="currentColor"
      aria-hidden
    >
      <path d="M7 17h-3l2-9h3l-2 9zm10 0h-3l2-9h3l-2 9z" />
    </motion.svg>
  );
}
