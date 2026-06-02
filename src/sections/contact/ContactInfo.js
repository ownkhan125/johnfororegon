"use client";

import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";

const blocks = [
  {
    label: "Call us",
    title: "(503) 555-0101",
    sub: "Weekdays · 9am – 6pm PT",
    href: "tel:+15035550101",
    icon: PhoneIcon,
  },
  {
    label: "Email",
    title: "info@johnfororegon.com",
    sub: "We reply within 2 business days",
    href: "mailto:info@johnfororegon.com",
    icon: MailIcon,
  },
  {
    label: "Mail",
    title: "PO Box 1776",
    sub: "Salem, OR 97301",
    href: "https://maps.google.com",
    icon: PinIcon,
  },
];

export function ContactInfo() {
  return (
    <SectionFrame
      eyebrow="02 · Reach Us"
      className="relative bg-bark py-28 sm:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          <AnimatedHeading
            text="Three ways to find us."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-md text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              Phone, email, or a postcard to Salem. Whatever&apos;s easiest —
              we&apos;ll get back to you.
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
          delay={0.35}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {blocks.map((b) => (
            <GlowCard
              key={b.label}
              as="a"
              href={b.href}
              variants={revealItem}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              glow="rgba(200,16,46,0.24)"
              size={420}
              className="relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-cream/10 bg-ink/70 p-7 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.32em] text-cream-muted">
                  {b.label}
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-cream">
                  <b.icon />
                </span>
              </div>
              <div className="font-display text-2xl font-light leading-snug text-cream sm:text-3xl">
                {b.title}
              </div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-cream-muted">
                {b.sub}
              </div>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-700 group-hover:scale-x-100" />
            </GlowCard>
          ))}
        </RevealGroup>
      </Container>
    </SectionFrame>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3.5 3.5h2l1 3-1.5 1a8 8 0 003.5 3.5l1-1.5 3 1v2a1 1 0 01-1 1A11 11 0 012.5 4.5a1 1 0 011-1z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2.5" y="3.5" width="11" height="9" rx="1.2" />
      <path d="M3 5l5 3.5L13 5" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M8 13.5s4-4 4-7a4 4 0 10-8 0c0 3 4 7 4 7z" />
      <circle cx="8" cy="6.5" r="1.4" />
    </svg>
  );
}
