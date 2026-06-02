"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { Reveal } from "@/components/Reveal";

const stats = [
  { v: 2480, l: "Volunteers signed up", suffix: "+" },
  { v: 38400, l: "Doors knocked", suffix: "+" },
  { v: 64, l: "Events held in 2026", suffix: "" },
];

export function VolunteerStats() {
  return (
    <SectionFrame
      eyebrow="02 · By the Numbers"
      className="relative bg-bark py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_30%,rgba(200,16,46,0.12),transparent_70%)]"
      />
      <Container>
        <Reveal y={28} className="max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.32em] text-cream-muted">
            Field totals · live
          </div>
          <h2 className="mt-4 font-display text-3xl font-light leading-tight text-cream sm:text-4xl">
            What you&apos;ve already built.
          </h2>
        </Reveal>

        <motion.div
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
          className="mt-12 h-px w-full bg-ember/40"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <StatCard key={s.l} stat={s} delay={i * 0.1} />
          ))}
        </div>
      </Container>
    </SectionFrame>
  );
}

function StatCard({ stat, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const dur = 1600;
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      setN(Math.round(stat.v * ease(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, stat.v]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-cream/10 bg-bark/80 p-7 sm:p-8"
    >
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-ember/60" />
      <div className="font-display text-5xl font-light tracking-tight text-cream sm:text-6xl">
        {n.toLocaleString()}
        <span className="text-ember">{stat.suffix}</span>
      </div>
      <div className="mt-3 text-[11px] uppercase tracking-[0.28em] text-cream-muted">
        {stat.l}
      </div>
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-700 group-hover:scale-x-100" />
    </motion.div>
  );
}
