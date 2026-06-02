"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export function EventRsvp({ event }) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <SectionFrame
      id="rsvp"
      eyebrow="04 · Reserve a Seat"
      className="relative bg-bark py-28 sm:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <AnimatedHeading
            text="Save your spot."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-xl text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              RSVP keeps your seat reserved and helps the host get headcount
              right. We&apos;ll send a reminder 24 hours before the event.
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
          <div className="relative overflow-hidden rounded-3xl border border-cream/10 bg-ink/70 p-6 sm:p-10 lg:p-12">
            <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-ember/60" />

            {submitted ? (
              <SuccessState event={event} onReset={() => setSubmitted(false)} />
            ) : (
              <form onSubmit={onSubmit} className="grid gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="First name" required>
                    <input
                      type="text"
                      name="firstName"
                      required
                      autoComplete="given-name"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Last name" required>
                    <input
                      type="text"
                      name="lastName"
                      required
                      autoComplete="family-name"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Email" required>
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Phone (optional)">
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Guests joining you?">
                    <select name="guests" className="form-input" defaultValue="1">
                      <option value="1">Just me</option>
                      <option value="2">+ 1 guest</option>
                      <option value="3">+ 2 guests</option>
                      <option value="4">+ 3 guests</option>
                      <option value="5">+ 4 or more</option>
                    </select>
                  </Field>
                  <Field label="ZIP code">
                    <input
                      type="text"
                      name="zip"
                      inputMode="numeric"
                      pattern="\d{5}"
                      autoComplete="postal-code"
                      className="form-input"
                    />
                  </Field>
                </div>

                <Field label="Anything we should know?">
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="Accessibility, accommodations, or a quick note for the host."
                    className="form-input resize-none"
                  />
                </Field>

                <label className="flex items-start gap-3 text-sm text-cream/80">
                  <input
                    type="checkbox"
                    name="sms"
                    className="form-checkbox mt-0.5"
                  />
                  <span>
                    Send me a text reminder 24 hours before the event. Reply
                    STOP to unsubscribe.
                  </span>
                </label>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button type="submit" variant="primary">
                    Reserve my seat
                    <Arrow />
                  </Button>
                  <span className="text-[11px] uppercase tracking-[0.28em] text-cream-muted">
                    Confirmation by email.
                  </span>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </SectionFrame>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.28em] text-cream-muted">
        {label}
        {required ? <span className="ml-1 text-ember">*</span> : null}
      </span>
      {children}
    </label>
  );
}

function SuccessState({ event, onReset }) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-ember/60 bg-ember/15"
      >
        <CheckIcon />
      </motion.div>
      <h3 className="mt-6 font-display text-3xl font-light text-cream">
        Seat reserved.
      </h3>
      <p className="mt-3 text-cream/75">
        We&apos;ll see you on {event.fullDate} at {event.venue}. Look out for a
        confirmation email shortly.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="link-underline mt-6 text-[12px] uppercase tracking-[0.28em] text-cream-muted hover:text-cream"
      >
        RSVP another guest
      </button>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-5 w-5 text-cream"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 8.5l3.2 3.2L13 4.8" />
    </svg>
  );
}
function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2 8h11" />
      <path d="M9 4l4 4-4 4" />
    </svg>
  );
}
