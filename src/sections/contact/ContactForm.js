"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <SectionFrame
      eyebrow="01 · Send a Message"
      className="relative bg-ink py-28 sm:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <AnimatedHeading
            text="Drop us a note."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-xl text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              The fastest way to reach the campaign. Press inquiries are
              prioritized — for urgent media, please call.
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
          <div className="relative overflow-hidden rounded-3xl border border-cream/10 bg-bark/60 p-6 sm:p-10 lg:p-12">
            <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-ember/60" />

            {submitted ? (
              <SuccessState onReset={() => setSubmitted(false)} />
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
                </div>

                <Field label="What's on your mind?" required>
                  <select name="topic" required className="form-input">
                    <option value="">Choose a topic</option>
                    <option>General message</option>
                    <option>Press / media</option>
                    <option>Event scheduling</option>
                    <option>Volunteer follow-up</option>
                    <option>Policy idea</option>
                  </select>
                </Field>

                <Field label="Message" required>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Share the details — we read every note."
                    className="form-input resize-none"
                  />
                </Field>

                <div className="space-y-3">
                  <label className="flex items-start gap-3 text-sm text-cream/80">
                    <input
                      type="checkbox"
                      name="sms-updates"
                      className="form-checkbox mt-0.5"
                    />
                    <span>
                      I&apos;d like SMS updates from the campaign. Reply STOP
                      to unsubscribe.
                    </span>
                  </label>
                  <label className="flex items-start gap-3 text-sm text-cream/80">
                    <input
                      type="checkbox"
                      name="sms-promo"
                      className="form-checkbox mt-0.5"
                    />
                    <span>
                      Send me event invitations &amp; promotional messages by
                      SMS.
                    </span>
                  </label>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button type="submit" variant="primary">
                    Send message
                    <Arrow />
                  </Button>
                  <span className="text-[11px] uppercase tracking-[0.28em] text-cream-muted">
                    We&apos;ll reply within 2 business days.
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

function SuccessState({ onReset }) {
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
        Message sent.
      </h3>
      <p className="mt-3 text-cream/75">
        Thanks for reaching out. We&apos;ll be in touch within two business
        days.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="link-underline mt-6 text-[12px] uppercase tracking-[0.28em] text-cream-muted hover:text-cream"
      >
        Send another message
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
