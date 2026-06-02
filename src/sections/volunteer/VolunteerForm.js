"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

const HELP_OPTIONS = [
  "Door knocking",
  "Phone banking",
  "Host an event",
  "Digital / social media",
  "Photography / video",
  "Driver / logistics",
];

export function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [help, setHelp] = useState([]);

  function toggleHelp(option) {
    setHelp((cur) =>
      cur.includes(option) ? cur.filter((o) => o !== option) : [...cur, option],
    );
  }

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <SectionFrame
      eyebrow="04 · Join the Team"
      className="relative bg-bark py-28 sm:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
          <AnimatedHeading
            text="Sign up. We'll plug you in."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-xl text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              Tell us a little about yourself and how you&apos;d like to help.
              A regional captain will reach out within 48 hours with a shift.
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
                  <Field label="County" required>
                    <select name="county" required className="form-input">
                      <option value="">Select your county</option>
                      {[
                        "Multnomah",
                        "Washington",
                        "Clackamas",
                        "Lane",
                        "Marion",
                        "Deschutes",
                        "Jackson",
                        "Linn",
                        "Other",
                      ].map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Region" required>
                    <select name="region" required className="form-input">
                      <option value="">Select a region</option>
                      <option>Portland metro</option>
                      <option>Willamette Valley</option>
                      <option>Coast</option>
                      <option>Central Oregon</option>
                      <option>Southern Oregon</option>
                      <option>Eastern Oregon</option>
                    </select>
                  </Field>
                  <Field label="Registered to vote in Oregon?" required>
                    <select
                      name="registered"
                      required
                      className="form-input"
                    >
                      <option value="">Choose one</option>
                      <option>Yes</option>
                      <option>No</option>
                      <option>Not sure</option>
                    </select>
                  </Field>
                </div>

                <Field label="How would you like to help?" required>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {HELP_OPTIONS.map((opt) => (
                      <label
                        key={opt}
                        className={`group flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition-colors duration-300 ${
                          help.includes(opt)
                            ? "border-ember/70 bg-ember/15 text-cream"
                            : "border-cream/15 bg-bark/40 text-cream/80 hover:border-cream/30"
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={help.includes(opt)}
                          onChange={() => toggleHelp(opt)}
                        />
                        <span
                          aria-hidden
                          className={`grid h-4 w-4 place-items-center rounded-full border ${
                            help.includes(opt)
                              ? "border-ember bg-ember"
                              : "border-cream/30"
                          }`}
                        >
                          {help.includes(opt) ? (
                            <span className="h-1.5 w-1.5 rounded-full bg-cream" />
                          ) : null}
                        </span>
                        {opt}
                      </label>
                    ))}
                  </div>
                </Field>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="What's your availability?" required>
                    <select
                      name="availability"
                      required
                      className="form-input"
                    >
                      <option value="">Choose one</option>
                      <option>Weekdays</option>
                      <option>Weekends</option>
                      <option>Evenings only</option>
                      <option>A few hours / month</option>
                      <option>Whenever needed</option>
                    </select>
                  </Field>
                  <Field label="Prior campaign experience?">
                    <select name="experience" className="form-input">
                      <option value="">Choose one</option>
                      <option>First time</option>
                      <option>Volunteered before</option>
                      <option>Staff or organizer</option>
                    </select>
                  </Field>
                </div>

                <Field label="Anything else to share?">
                  <textarea
                    name="notes"
                    rows={4}
                    placeholder="Skills, issues you care about, scheduling notes…"
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
                    Send me campaign updates by SMS. Reply STOP to unsubscribe.
                  </span>
                </label>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button type="submit" variant="primary">
                    Sign me up
                    <Arrow />
                  </Button>
                  <span className="text-[11px] uppercase tracking-[0.28em] text-cream-muted">
                    We&apos;ll reply within 48 hours.
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
        You&apos;re in.
      </h3>
      <p className="mt-3 text-cream/75">
        Welcome aboard. A regional captain will be in touch within 48 hours
        with your first shift.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="link-underline mt-6 text-[12px] uppercase tracking-[0.28em] text-cream-muted hover:text-cream"
      >
        Submit another response
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
