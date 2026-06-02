"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SocialIcons } from "@/components/SocialIcons";

const linkColumns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Volunteer", href: "/volunteer" },
      { label: "Donate", href: "/donate" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const contactRows = [
  { label: "Call", value: "(503) 555-0101", href: "tel:+15035550101" },
  {
    label: "Email",
    value: "info@johnfororegon.com",
    href: "mailto:info@johnfororegon.com",
  },
  { label: "Mail", value: "PO Box 1776, Salem, OR 97301" },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-ink">
      {/* Top accent line — draws in on view */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
        aria-hidden
        className="h-px bg-ember/60"
      />

      {/* Subtle ambient wash so the footer reads as its own surface */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_85%_0%,rgba(200,16,46,0.10),transparent_65%)]"
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-[1.35fr_1fr_1fr_0.85fr] lg:gap-14">
          {/* Brand block */}
          <Reveal y={24} className="max-w-sm">
            <Link href="/" className="group inline-flex items-center gap-3">
              <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-cream/30 transition-colors duration-500 group-hover:border-cream/60">
                <span className="absolute inset-0 bg-ember" />
                <span className="relative font-display text-base font-semibold text-cream">
                  J
                </span>
              </span>
              <div className="leading-tight">
                <div className="font-display text-[15px] tracking-tight text-cream">
                  John Hartwell
                </div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-cream-muted">
                  For Oregon · 2026
                </div>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-relaxed text-cream/70">
              A people-powered U.S. Senate campaign. No corporate PAC money.
              No backroom deals. Just Oregon.
            </p>

            <div className="mt-8">
              <div className="text-[10px] uppercase tracking-[0.32em] text-cream-muted">
                Follow the campaign
              </div>
              <SocialIcons variant="bordered" size="md" className="mt-4" />
            </div>
          </Reveal>

          {/* Link columns — each gets its own reveal so the intersection
              observer fires reliably (RevealGroup with display:contents has
              no box and never triggers). */}
          {linkColumns.map((col, i) => (
            <Reveal
              key={col.title}
              y={28}
              delay={0.25 + i * 0.08}
              duration={0.8}
            >
              <div className="text-[10px] uppercase tracking-[0.32em] text-cream-muted">
                {col.title}
              </div>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="group relative inline-flex items-center gap-3 text-sm text-cream/80 transition-colors duration-300 hover:text-cream-soft"
                    >
                      <span
                        aria-hidden
                        className="block h-px w-0 bg-ember transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-5"
                      />
                      <span>{l.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* Contact strip — separate row, breathing room */}
        <Reveal
          delay={0.4}
          className="mt-14 grid gap-8 border-t border-cream/10 pt-10 sm:grid-cols-3"
        >
          {contactRows.map((c) => (
            <div key={c.label} className="text-sm">
              <div className="text-[10px] uppercase tracking-[0.32em] text-cream-muted">
                {c.label}
              </div>
              <div className="mt-2 font-display text-base font-light text-cream">
                {c.href ? (
                  <a
                    href={c.href}
                    className="link-underline transition-colors hover:text-cream-soft"
                  >
                    {c.value}
                  </a>
                ) : (
                  <span>{c.value}</span>
                )}
              </div>
            </div>
          ))}
        </Reveal>

        {/* Copyright strip */}
        <Reveal
          delay={0.55}
          className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-cream/10 pt-6 sm:flex-row sm:items-center"
        >
          <p className="text-[11px] uppercase tracking-[0.28em] text-cream-muted">
            © 2026 Hartwell for Oregon · Built in Salem, OR
          </p>
          <p className="text-[11px] uppercase tracking-[0.28em] text-cream-muted">
            Paid for by Hartwell for Oregon · Not authorized by any candidate
            or candidate&apos;s committee.
          </p>
        </Reveal>
      </Container>
    </footer>
  );
}
