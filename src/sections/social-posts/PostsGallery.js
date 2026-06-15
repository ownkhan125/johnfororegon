"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import {
  SOCIAL_POSTS,
  POST_FORMATS,
  getPostSrc,
} from "@/data/social-posts";
import { PostFrame } from "./PostFrame";

const FORMAT_FILTERS = [
  { id: "all", label: "All", count: SOCIAL_POSTS.length },
  {
    id: "feed",
    label: "Feed · 1:1",
    count: SOCIAL_POSTS.filter((p) => p.format === "feed").length,
  },
  {
    id: "story",
    label: "Story · 9:16",
    count: SOCIAL_POSTS.filter((p) => p.format === "story").length,
  },
];

export function PostsGallery() {
  const [format, setFormat] = useState("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SOCIAL_POSTS.filter((p) => {
      if (format !== "all" && p.format !== format) return false;
      if (!q) return true;
      const haystack = [
        p.title,
        p.subtitle,
        p.summary,
        ...(p.tags ?? []),
        p.format,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [format, query]);

  return (
    <section className="relative isolate overflow-hidden bg-ink pb-24 pt-10 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_40%_at_50%_-10%,rgba(200,16,46,0.12),transparent_70%)]"
      />

      <Container>
        {/* Controls */}
        <Reveal y={20} duration={0.8} className="mb-10 sm:mb-14">
          <div className="flex flex-col gap-5 border-b border-cream/10 pb-6 sm:flex-row sm:items-end sm:justify-between sm:pb-8">
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-cream-muted">
                The Library
              </div>
              <h2 className="mt-3 font-display text-3xl font-light tracking-tight text-cream sm:text-4xl">
                Every creative,{" "}
                <span className="italic text-cream-soft">unclipped.</span>
              </h2>
            </div>

            {/* Search */}
            <div className="relative w-full sm:max-w-xs">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-cream/50" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts, tags…"
                aria-label="Search social posts"
                className="form-input pl-10"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
            {FORMAT_FILTERS.map((f) => {
              const active = format === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFormat(f.id)}
                  aria-pressed={active}
                  className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                    active
                      ? "border-ember bg-ember text-cream-soft"
                      : "border-cream/20 text-cream/80 hover:border-cream/50 hover:text-cream"
                  }`}
                >
                  <span>{f.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-px text-[10px] tracking-normal ${
                      active
                        ? "bg-cream-soft/15 text-cream-soft"
                        : "bg-cream/5 text-cream/60"
                    }`}
                  >
                    {f.count}
                  </span>
                </button>
              );
            })}

            <div className="ml-auto text-[11px] uppercase tracking-[0.28em] text-cream-muted">
              Showing {visible.length} / {SOCIAL_POSTS.length}
            </div>
          </div>
        </Reveal>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          {visible.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="grid place-items-center rounded-2xl border border-dashed border-cream/15 px-6 py-24 text-center"
            >
              <div className="max-w-md">
                <div className="text-[10px] uppercase tracking-[0.32em] text-cream-muted">
                  No matches
                </div>
                <p className="mt-3 font-display text-2xl font-light text-cream">
                  Nothing in the library matched that.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setFormat("all");
                  }}
                  className="mt-6 text-[11px] uppercase tracking-[0.28em] text-ember hover:text-cream"
                >
                  Reset filters →
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.ul
              key={`grid-${format}`}
              layout
              className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-3 lg:gap-x-10"
            >
              {visible.map((post, i) => (
                <motion.li
                  layout
                  key={post.slug}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.7,
                    delay: Math.min(i * 0.04, 0.32),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <PostCard post={post} />
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}

function PostCard({ post }) {
  const meta = POST_FORMATS[post.format];
  const [w, h] = meta.native;

  return (
    <Link
      href={`/social-media-posts/${post.slug}`}
      className="group block focus:outline-none"
    >
      {/* Eyebrow row */}
      <div className="mb-3 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.32em] text-cream-muted">
        <span className="inline-flex items-center gap-2">
          <span className="inline-grid h-1.5 w-1.5 place-items-center rounded-full bg-ember" />
          {meta.label}
        </span>
        <span className="font-mono text-cream/55">
          #{String(post.number).padStart(2, "0")} · {meta.ratioLabel}
        </span>
      </div>

      {/* The frame itself — no extra borders / no padding around the creative.
          A faint cream/5 outline sits *outside* the frame edge on focus only,
          so it never overlays or alters the creative's design. */}
      <div className="relative">
        <PostFrame
          src={getPostSrc(post.slug)}
          nativeWidth={w}
          nativeHeight={h}
          title={post.title}
          className="relative w-full"
        />

        {/* Hover overlay — outside the creative pixels, fades in over a
            transparent layer so we don't tint or recolor the design. The
            navy gradient sits underneath the chip and only at the bottom
            edge, leaving the creative fully visible on hover. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,22,40,0) 0%, rgba(10,22,40,0.85) 100%)",
          }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-ink/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-cream backdrop-blur">
            View post
            <ArrowRight className="h-3 w-3" />
          </span>
          <span className="rounded-full bg-cream-soft/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-cream-soft backdrop-blur">
            Full view
          </span>
        </div>

        {/* Focus ring lives outside the frame box so the creative is
            never visually altered. */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-2 rounded-[18px] ring-0 ring-cream/0 transition-all duration-500 group-hover:ring-1 group-hover:ring-cream/15 group-focus-visible:ring-2 group-focus-visible:ring-ember/70"
        />
      </div>

      {/* Caption */}
      <div className="mt-5 flex flex-col">
        <h3 className="font-display text-xl font-light leading-snug text-cream group-hover:text-cream-soft sm:text-2xl">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 max-w-md text-sm leading-relaxed text-cream/65">
          {post.summary}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cream/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-cream/65"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function ArrowRight({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
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

function SearchIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="7" cy="7" r="4.5" />
      <path d="M13.5 13.5L10.5 10.5" />
    </svg>
  );
}
