import gsap from "gsap";

export function heroIntro(scope) {
  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
  });

  // 1. Lines / dividers draw in first — the "frame" arrives ahead of content.
  tl.from(scope.querySelectorAll("[data-hero-line]"), {
    scaleX: 0,
    transformOrigin: "left center",
    duration: 1.1,
    stagger: 0.08,
  })
    // 2. Eyebrow + tagline
    .from(
      scope.querySelectorAll("[data-hero-eyebrow] > *"),
      {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.05,
      },
      "-=0.7",
    )
    // 3. Headline words (mask + slide-up + slight rotation)
    .from(
      scope.querySelectorAll("[data-hero-word]"),
      {
        yPercent: 110,
        rotate: 4,
        opacity: 0,
        duration: 1.05,
        stagger: 0.07,
      },
      "-=0.5",
    )
    // 4. Body copy
    .from(
      scope.querySelector("[data-hero-body]"),
      { y: 22, opacity: 0, duration: 0.8 },
      "-=0.6",
    )
    // 5. CTAs
    .from(
      scope.querySelectorAll("[data-hero-cta] > *"),
      { y: 18, opacity: 0, duration: 0.7, stagger: 0.08 },
      "-=0.5",
    )
    // 6. Stats
    .from(
      scope.querySelectorAll("[data-hero-stat]"),
      { y: 28, opacity: 0, duration: 0.85, stagger: 0.1 },
      "-=0.4",
    )
    // 7. Controls under the card stack
    .from(
      scope.querySelectorAll("[data-hero-stack-controls] > *"),
      { y: 16, opacity: 0, duration: 0.7, stagger: 0.08 },
      "-=0.5",
    );

  return tl;
}
