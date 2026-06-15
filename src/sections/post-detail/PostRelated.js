"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { POST_FORMATS, getPostSrc } from "@/data/social-posts";
import { PostFrame } from "@/sections/social-posts/PostFrame";

export function PostRelated({ posts }) {
  if (!posts?.length) return null;
  return (
    <section className="relative isolate overflow-hidden bg-bark py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_90%_10%,rgba(200,16,46,0.10),transparent_70%)]"
      />
      <Container>
        <Reveal y={20} className="mb-10 flex items-end justify-between gap-6 border-b border-cream/10 pb-6 sm:mb-12">
          <div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-cream-muted">
              Keep browsing
            </div>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight text-cream sm:text-4xl">
              More from the library.
            </h2>
          </div>
          <Link
            href="/social-media-posts"
            className="hidden text-[11px] uppercase tracking-[0.28em] text-cream/70 hover:text-cream sm:inline-flex"
          >
            View all →
          </Link>
        </Reveal>

        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
          {posts.map((post) => {
            const meta = POST_FORMATS[post.format];
            const [w, h] = meta.native;
            return (
              <li key={post.slug}>
                <Link
                  href={`/social-media-posts/${post.slug}`}
                  className="group block focus:outline-none"
                >
                  <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-cream-muted">
                    <span className="inline-flex items-center gap-2">
                      <span className="inline-grid h-1.5 w-1.5 place-items-center rounded-full bg-ember" />
                      {meta.label}
                    </span>
                    <span className="font-mono text-cream/55">
                      #{String(post.number).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="relative">
                    <PostFrame
                      src={getPostSrc(post.slug)}
                      nativeWidth={w}
                      nativeHeight={h}
                      title={post.title}
                      className="w-full"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -inset-2 rounded-[18px] ring-0 ring-cream/0 transition-all duration-500 group-hover:ring-1 group-hover:ring-cream/15"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-light text-cream group-hover:text-cream-soft">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-cream/65">
                    {post.summary}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
