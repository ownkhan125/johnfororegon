"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    q: "How do I volunteer?",
    a: "Head to the Volunteer page and fill out the form. A regional captain will reach out within 48 hours with your first shift.",
  },
  {
    q: "Can I host an event in my town?",
    a: "Yes. Use the contact form above and select 'Event scheduling.' We&apos;ll match you with a campaign organizer who can co-plan logistics.",
  },
  {
    q: "Where do donations go?",
    a: "Directly into field operations — yard signs, canvassing materials, gas reimbursement for organizers, and event venues. We take no PAC money.",
  },
  {
    q: "How do I unsubscribe from SMS updates?",
    a: "Reply STOP to any text from us. You can also email info@johnfororegon.com with the subject line UNSUBSCRIBE.",
  },
  {
    q: "Are events ADA accessible?",
    a: "Yes. Every event venue is selected with wheelchair access and ASL availability on request. Email us 72 hours ahead to arrange accommodations.",
  },
];

export function ContactFaq() {
  return (
    <SectionFrame
      eyebrow="03 · Common Questions"
      className="relative bg-ink py-28 sm:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          <AnimatedHeading
            text="Frequently asked questions."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-md text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              Five quick answers to the things we&apos;re asked most. Still
              stuck? The form above goes straight to a real human.
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

        <Reveal delay={0.35} className="mt-12">
          <ul className="overflow-hidden rounded-3xl border border-cream/10 bg-bark/60">
            {faqs.map((f, i) => (
              <FaqRow key={f.q} item={f} index={i} isLast={i === faqs.length - 1} />
            ))}
          </ul>
        </Reveal>
      </Container>
    </SectionFrame>
  );
}

function FaqRow({ item, index, isLast }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        delay: 0.05 + index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group ${isLast ? "" : "border-b border-cream/10"}`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 p-6 text-left transition-colors hover:bg-ink/40 sm:p-8"
        aria-expanded={open}
      >
        <span className="flex items-start gap-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-ember">
            0{index + 1}
          </span>
          <span className="font-display text-lg font-light leading-snug text-cream sm:text-xl">
            {item.q}
          </span>
        </span>
        <motion.span
          aria-hidden
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-cream/20 text-cream"
        >
          <PlusIcon />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p
              className="px-6 pb-8 pl-16 text-sm leading-relaxed text-cream/75 sm:px-8 sm:pl-20"
              dangerouslySetInnerHTML={{ __html: item.a }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M8 3v10" />
      <path d="M3 8h10" />
    </svg>
  );
}
