"use client";

const items = [
  "The Oregonian",
  "Portland Mercury",
  "Willamette Week",
  "AFL-CIO Oregon",
  "Sierra Club PNW",
  "Oregon Education Assn.",
  "Working Families Party",
  "Eugene Weekly",
  "Bend Bulletin",
];

export function Marquee() {
  return (
    <section
      aria-label="Endorsements"
      className="relative overflow-hidden border-y border-cream/10 bg-bark py-6"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bark to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bark to-transparent" />
      <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-12 text-[13px] uppercase tracking-[0.28em] text-cream/70"
          >
            <Star />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5 text-ember"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 1.5l1.9 4 4.4.6-3.2 3.1.8 4.4L8 11.5 4.1 13.6l.8-4.4L1.7 6.1l4.4-.6z" />
    </svg>
  );
}
