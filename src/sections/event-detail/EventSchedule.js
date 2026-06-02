"use client";

import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal } from "@/components/Reveal";

export function EventSchedule({ event }) {
  return (
    <SectionFrame
      eyebrow="03 · Schedule"
      className="relative bg-ink py-28 sm:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          <AnimatedHeading
            text="Run of show."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-md text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              Minute-by-minute timing so you can plan your visit. Doors open
              30 minutes before the program.
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

        <div className="relative mt-16">
          {/* Vertical rail */}
          <motion.span
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-ember via-cream/30 to-transparent sm:left-1/2 sm:-translate-x-1/2"
          />

          <ol className="relative space-y-10 sm:space-y-14">
            {event.schedule.map((step, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.li
                  key={`${step.time}-${i}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.75,
                    delay: 0.1 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid grid-cols-[1.75rem_1fr] gap-4 sm:grid-cols-2 sm:gap-12"
                >
                  <motion.span
                    aria-hidden
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.25 + i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-[7px] top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-ember shadow-[0_0_16px_rgba(200,16,46,0.7)] sm:left-1/2"
                  />

                  {/* Left card */}
                  <div className={`hidden sm:block ${isRight ? "" : "sm:order-1"}`}>
                    {!isRight && (
                      <ScheduleCard
                        time={step.time}
                        label={step.label}
                        align="right"
                      />
                    )}
                  </div>

                  {/* Mobile: always left-aligned */}
                  <div className="sm:hidden">
                    <ScheduleCard
                      time={step.time}
                      label={step.label}
                      align="left"
                    />
                  </div>

                  {/* Right card */}
                  <div className={`hidden sm:block ${isRight ? "" : "sm:order-2"}`}>
                    {isRight && (
                      <ScheduleCard
                        time={step.time}
                        label={step.label}
                        align="left"
                      />
                    )}
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </SectionFrame>
  );
}

function ScheduleCard({ time, label, align }) {
  return (
    <div
      className={`relative rounded-2xl border border-cream/10 bg-bark/60 p-5 backdrop-blur transition-colors duration-500 hover:border-ember/40 sm:p-6 ${
        align === "right" ? "sm:text-right" : ""
      }`}
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-ember">
        {time}
      </div>
      <div className="mt-2 font-display text-base font-light leading-snug text-cream sm:text-lg">
        {label}
      </div>
      <span
        aria-hidden
        className={`pointer-events-none absolute bottom-0 h-px w-10 bg-ember/60 ${
          align === "right" ? "right-5" : "left-5"
        }`}
      />
    </div>
  );
}
