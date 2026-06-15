"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export function PostsCallout() {
  return (
    <section className="relative isolate overflow-hidden bg-bark py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_20%_30%,rgba(200,16,46,0.18),transparent_60%)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 grain opacity-100" />

      <Container>
        <Reveal y={26} duration={0.9} className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-cream-muted">
              <span className="block h-px w-10 bg-cream/50" />
              <span className="grid h-1.5 w-1.5 rounded-full bg-ember flag-pulse" />
              Use the kit
            </div>
            <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-tight text-cream sm:text-4xl lg:text-5xl">
              Share the campaign{" "}
              <span className="italic text-cream-soft">on your feed.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75">
              Every creative in this library is open for organizers, volunteers,
              and supporters. Right-click any post to save it, or open the
              detail page for the full-resolution view and a direct download.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row lg:flex-col lg:items-end lg:text-right">
            <Button as="a" href="/volunteer" variant="primary">
              Join the team
              <ArrowRight />
            </Button>
            <Button as="a" href="/contact" variant="outline">
              Press inquiries
              <ArrowRight />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 16 16"
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
