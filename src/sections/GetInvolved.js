"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { GlowCard } from "@/components/GlowCard";

const tiles = [
  {
    label: "Volunteer",
    title: "Knock 10 doors. Change a county.",
    body: "Door-to-door is still how races are won. Sign up for two hours and we&apos;ll pair you up.",
    href: "#volunteer",
    img: "https://picsum.photos/seed/volunteer-door/800/960",
  },
  {
    label: "Donate",
    title: "Chip in $10. Hold the line.",
    body: "We don&apos;t take corporate PAC money. Every dollar comes from people like you.",
    href: "#donate",
    img: "https://picsum.photos/seed/grassroots-donate/800/960",
  },
  {
    label: "Host",
    title: "Throw a house party.",
    body: "Invite five neighbors over. We&apos;ll send a campaign organizer and the snacks.",
    href: "#host",
    img: "https://picsum.photos/seed/house-party/800/960",
  },
];

export function GetInvolved() {
  return (
    <SectionFrame
      id="donate"
      eyebrow="06 · Your Move"
      className="relative bg-bark py-28 sm:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <AnimatedHeading
            text="This is a people-powered campaign."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-md text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              We can&apos;t out-spend the PACs. We can out-organize them. Pick
              one of these three — and watch what 100,000 Oregonians can do.
            </p>
          </Reveal>
        </div>

        <RevealGroup
          stagger={0.12}
          delay={0.35}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {tiles.map((t) => (
            <GlowCard
              key={t.label}
              as="a"
              href={t.href}
              variants={revealItem}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              glow="rgba(200,16,46,0.24)"
              size={520}
              className="relative flex aspect-[5/6] flex-col justify-end overflow-hidden rounded-3xl border border-cream/10 bg-ink p-7 sm:p-8"
            >
              <Image
                src={t.img}
                alt={t.title}
                fill
                sizes="(max-width: 1024px) 90vw, 33vw"
                className="absolute inset-0 z-0 object-cover opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-70"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

              <div className="relative z-20 flex h-full flex-col">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-cream-muted">
                  <span>{t.label}</span>
                  <motion.span
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="grid h-9 w-9 place-items-center rounded-full border border-cream/30 transition-all duration-500 group-hover:bg-cream group-hover:text-ink"
                  >
                    <Arrow />
                  </motion.span>
                </div>

                <div className="mt-auto">
                  <h3 className="font-display text-2xl font-light leading-snug text-cream sm:text-3xl">
                    {t.title}
                  </h3>
                  <p
                    className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70"
                    dangerouslySetInnerHTML={{ __html: t.body }}
                  />
                </div>
              </div>

              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-700 group-hover:scale-x-100" />
            </GlowCard>
          ))}
        </RevealGroup>

        {/* Big donation strip */}
        <Reveal delay={0.4} className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-ember/30 bg-ink p-8 sm:p-12">
            <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-ember" />
            <div className="grain absolute inset-0" />
            {/* Subtle red ambient orb — kept; falls under ambient lighting, not chrome */}
            <motion.div
              aria-hidden
              animate={{ opacity: [0.4, 0.65, 0.4] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-ember/15 blur-3xl"
            />

            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="text-[11px] uppercase tracking-[0.32em] text-cream-muted">
                  Chip in
                </div>
                <h3 className="mt-3 font-display text-3xl font-light leading-tight text-cream sm:text-4xl">
                  Every $10 is a door knocked.
                </h3>
                <p className="mt-4 max-w-md text-cream/75">
                  We&apos;re a no-PAC campaign. Median donation: $27. Pick
                  your amount — or write your own.
                </p>
              </div>
              <div>
                <RevealGroup
                  stagger={0.05}
                  delay={0.3}
                  className="grid grid-cols-3 gap-3"
                >
                  {[10, 27, 50, 100, 250, 500].map((amt) => (
                    <motion.button
                      key={amt}
                      variants={revealItem}
                      whileHover={{ scale: 1.06, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className="group relative overflow-hidden rounded-full border border-cream/30 bg-ink/40 py-3 font-display text-base text-cream backdrop-blur transition-colors duration-300 hover:bg-cream hover:text-ink"
                    >
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-umber via-ember to-umber opacity-50 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
                      />
                      <span className="relative">${amt}</span>
                    </motion.button>
                  ))}
                </RevealGroup>
                <Button
                  as="a"
                  href="#donate-other"
                  className="mt-4 w-full"
                  variant="primary"
                >
                  Donate now
                  <Arrow />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionFrame>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2 8h11" />
      <path d="M9 4l4 4-4 4" />
    </svg>
  );
}
