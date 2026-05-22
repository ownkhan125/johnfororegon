"use client";

import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";

const cols = [
  {
    title: "Campaign",
    links: ["About John", "Issues", "Roadmap", "Endorsements", "Press"],
  },
  {
    title: "Get Involved",
    links: ["Donate", "Volunteer", "Host an event", "Yard signs", "Phone bank"],
  },
  {
    title: "Connect",
    links: ["Newsletter", "Instagram", "TikTok", "Facebook", "Spotify"],
  },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-ink">
      {/* Top border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
        className="h-px bg-ember/40"
      />

      <Container className="py-20 sm:py-24">
        {/* Massive display lockup */}
        <Reveal y={50} duration={1.2}>
          <h2 className="font-display text-[clamp(3rem,12vw,12rem)] font-light leading-[0.85] tracking-[-0.04em] text-cream">
            JOHN
            <span className="block text-cream/30">FOR OREGON</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <Reveal delay={0.2} className="max-w-sm">
            <p className="text-cream/75">
              A people-powered campaign for U.S. Senate, 2026. No corporate
              PAC money. No backroom deals. Just Oregon.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {["X", "IG", "FB", "TT"].map((s) => (
                <motion.a
                  key={s}
                  href={`#${s}`}
                  whileHover={{ y: -3 }}
                  className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-[11px] uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-cream hover:text-ink"
                >
                  {s}
                </motion.a>
              ))}
            </div>
          </Reveal>

          <RevealGroup
            stagger={0.1}
            delay={0.3}
            className="contents"
          >
            {cols.map((c) => (
              <motion.div key={c.title} variants={revealItem}>
                <div className="text-[11px] uppercase tracking-[0.32em] text-cream-muted">
                  {c.title}
                </div>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="link-underline text-sm text-cream/85 hover:text-cream"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.55} className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-cream/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-cream-muted">
            Paid for by Hartwell for Oregon. Not authorized by any candidate or
            candidate&apos;s committee.
          </p>
          <p className="text-[11px] uppercase tracking-[0.28em] text-cream-muted">
            © 2026 · Built in Salem, OR
          </p>
        </Reveal>
      </Container>
    </footer>
  );
}
