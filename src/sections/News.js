"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { SectionFrame } from "@/components/SectionFrame";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";

const posts = [
  {
    tag: "Op-Ed",
    title: "Why I&apos;m running: a letter to my kids.",
    excerpt:
      "I tucked them in last night and realized the world I&apos;m leaving them is smaller than the one my dad left me. So I&apos;m doing something about it.",
    date: "Mar 11, 2026",
    read: "5 min read",
    img: "https://picsum.photos/seed/letter-kids/800/600",
  },
  {
    tag: "Policy",
    title: "Saving rural ERs without breaking the bank.",
    excerpt:
      "Burns Memorial almost shut its doors last fall. Here&apos;s the three-line bill that kept it open — and how it can scale.",
    date: "Feb 24, 2026",
    read: "8 min read",
    img: "https://picsum.photos/seed/rural-hospital/800/600",
  },
  {
    tag: "Field",
    title: "Notebook: a week in Wallowa County.",
    excerpt:
      "What I learned eating breakfast with ranchers, loggers, and one very skeptical math teacher.",
    date: "Feb 09, 2026",
    read: "6 min read",
    img: "https://picsum.photos/seed/wallowa-county/800/600",
  },
];

export function News() {
  return (
    <SectionFrame
      id="news"
      eyebrow="07 · The Record"
      className="relative bg-ink py-28 sm:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <AnimatedHeading
            text="Latest from the trail."
            className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl"
          />
          <Reveal delay={0.3} className="max-w-md text-cream/75 lg:justify-self-end">
            <p className="leading-relaxed">
              Long-form notes from John, policy drops, and reporting from the
              road. No press-release fluff.
            </p>
          </Reveal>
        </div>

        <RevealGroup
          stagger={0.1}
          delay={0.35}
          className="mt-16 grid gap-10 md:grid-cols-3"
        >
          {posts.map((p) => (
            <motion.article
              key={p.title}
              variants={revealItem}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col gap-5"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-cream/10">
                <motion.div
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>
                {/* Glow gradient on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ember/30 via-transparent to-cream/10 opacity-0 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-100"
                />
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute left-4 top-4 rounded-full border border-cream/30 bg-ink/50 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-cream backdrop-blur"
                >
                  {p.tag}
                </motion.div>
              </div>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-cream-muted">
                <span>{p.date}</span>
                <span className="h-px w-6 bg-cream/30" />
                <span>{p.read}</span>
              </div>
              <h3
                className="font-display text-2xl font-light leading-snug text-cream transition-colors duration-500 group-hover:text-cream-soft"
                dangerouslySetInnerHTML={{ __html: p.title }}
              />
              <p
                className="text-sm leading-relaxed text-cream/70"
                dangerouslySetInnerHTML={{ __html: p.excerpt }}
              />
              <a
                href="#post"
                className="link-underline mt-auto inline-flex w-fit items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-cream"
              >
                Read the piece
                <motion.span
                  aria-hidden
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  className="inline-block"
                >
                  →
                </motion.span>
              </a>
            </motion.article>
          ))}
        </RevealGroup>
      </Container>
    </SectionFrame>
  );
}
