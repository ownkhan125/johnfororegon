// Catalog of campaign social-media creatives.
// Each HTML file lives in /public/campaign-social/<slug>.html and renders at
// its native pixel resolution; do not modify, crop, or restyle them.

export const SOCIAL_POSTS = [
  {
    slug: "feed-01-editorial-portrait",
    number: 1,
    format: "feed",
    title: "Editorial Portrait",
    subtitle: "Vol. 01 · MMXXVI",
    summary:
      "Dimensional portrait card layered with blueprint corner marks and a hand-drawn editorial headline.",
    tags: ["Portrait", "Editorial", "Square"],
  },
  {
    slug: "feed-02-pull-quote",
    number: 2,
    format: "feed",
    title: "Editorial Pull Quote",
    subtitle: "Quote Card",
    summary:
      "Stage-lit pull quote with serif typography, red attribution rule, and ambient navy wash.",
    tags: ["Quote", "Editorial", "Square"],
  },
  {
    slug: "feed-03-stat-triptych",
    number: 3,
    format: "feed",
    title: "Stat Triptych",
    subtitle: "By the Numbers",
    summary:
      "Three-column statistic triptych — the numbers that define the campaign at a glance.",
    tags: ["Stats", "Data", "Square"],
  },
  {
    slug: "feed-04-county-map",
    number: 4,
    format: "feed",
    title: "County Map",
    subtitle: "Across Oregon",
    summary:
      "Stylized county outline of Oregon with rally dots, route lines, and a legend strip.",
    tags: ["Map", "Geography", "Square"],
  },
  {
    slug: "feed-05-event-stacked",
    number: 5,
    format: "feed",
    title: "Event Stacked Cards",
    subtitle: "Upcoming Stops",
    summary:
      "Stacked event card composition listing the next set of dates in a tactile invitation.",
    tags: ["Events", "Schedule", "Square"],
  },
  {
    slug: "feed-06-issue-trio",
    number: 6,
    format: "feed",
    title: "Issue Trio · Glass Tiles",
    subtitle: "Policy Pillars",
    summary:
      "Three frosted-glass policy tiles — wages, water, and wildfire — set on a deep navy field.",
    tags: ["Issues", "Policy", "Square"],
  },
  {
    slug: "feed-07-magazine-cover",
    number: 7,
    format: "feed",
    title: "Magazine Cover",
    subtitle: "Issue No. 01",
    summary:
      "Newsstand-style magazine cover with a bold dropcap headline and stamped issue mark.",
    tags: ["Magazine", "Cover", "Square"],
  },
  {
    slug: "feed-08-invite-card",
    number: 8,
    format: "feed",
    title: "Floating Invite Card",
    subtitle: "RSVP",
    summary:
      "Floating invite card tilted in 3D space with a Save the Date eyebrow and gold-flag rule.",
    tags: ["Invite", "Event", "Square"],
  },
  {
    slug: "feed-09-endorsement",
    number: 9,
    format: "feed",
    title: "Endorsement Card",
    subtitle: "On the Record",
    summary:
      "Endorsement quote card with portrait crest and dimensional bookmark ribbon.",
    tags: ["Endorsement", "Quote", "Square"],
  },
  {
    slug: "feed-10-roadmap",
    number: 10,
    format: "feed",
    title: "Roadmap Path",
    subtitle: "The Plan",
    summary:
      "Looping campaign roadmap rendered as a chalk path with milestone pins.",
    tags: ["Roadmap", "Plan", "Square"],
  },
  {
    slug: "story-11-portrait-editorial",
    number: 11,
    format: "story",
    title: "Vertical Portrait Editorial",
    subtitle: "Story · Editorial",
    summary:
      "Full-bleed vertical portrait with a stamped seal and ribbon callout for stories.",
    tags: ["Portrait", "Editorial", "Vertical"],
  },
  {
    slug: "story-12-centered-poster",
    number: 12,
    format: "story",
    title: "Centered Serif Poster",
    subtitle: "Story · Poster",
    summary:
      "Centered serif poster with hairline rules — a classic broadside, retuned for vertical.",
    tags: ["Poster", "Typography", "Vertical"],
  },
  {
    slug: "story-13-vertical-timeline",
    number: 13,
    format: "story",
    title: "Vertical Timeline",
    subtitle: "Story · Timeline",
    summary:
      "Stacked timeline of campaign milestones with dotted leaders and date plates.",
    tags: ["Timeline", "Data", "Vertical"],
  },
  {
    slug: "story-14-numeric-hero",
    number: 14,
    format: "story",
    title: "Numeric Hero",
    subtitle: "Story · Stats",
    summary:
      "Outsized numeric hero — a single statistic blown up to fill the full vertical canvas.",
    tags: ["Stats", "Typography", "Vertical"],
  },
  {
    slug: "story-15-event-poster",
    number: 15,
    format: "story",
    title: "Vertical Event Poster",
    subtitle: "Story · Event",
    summary:
      "Concert-poster styled event announcement — large date, venue tier, ticket call-to-action.",
    tags: ["Event", "Poster", "Vertical"],
  },
  {
    slug: "story-16-pull-quote",
    number: 16,
    format: "story",
    title: "Dimensional Pull Quote",
    subtitle: "Story · Quote",
    summary:
      "Floating quote slab over a navy washboard background with a flagged attribution.",
    tags: ["Quote", "Editorial", "Vertical"],
  },
  {
    slug: "story-17-map-storytelling",
    number: 17,
    format: "story",
    title: "Vertical Map Storytelling",
    subtitle: "Story · Map",
    summary:
      "Top-down Oregon map with narrative annotations stacked down the right rail.",
    tags: ["Map", "Story", "Vertical"],
  },
  {
    slug: "story-18-layered-portrait-stack",
    number: 18,
    format: "story",
    title: "Layered Portrait Stack",
    subtitle: "Story · Portrait",
    summary:
      "Three offset portrait tiles stacked vertically with a foil headline plate.",
    tags: ["Portrait", "Layered", "Vertical"],
  },
  {
    slug: "story-19-magazine-spread",
    number: 19,
    format: "story",
    title: "Vertical Magazine Spread",
    subtitle: "Story · Magazine",
    summary:
      "Magazine-style spread reimagined for stories — columns, callout, page numbers.",
    tags: ["Magazine", "Editorial", "Vertical"],
  },
  {
    slug: "story-20-cta-poster",
    number: 20,
    format: "story",
    title: "CTA Poster",
    subtitle: "Story · CTA",
    summary:
      "Closing call-to-action poster with a sweeping headline and a thumb-zone CTA chip.",
    tags: ["CTA", "Poster", "Vertical"],
  },
];

export const POST_FORMATS = {
  feed: { label: "Feed Post", ratio: [1, 1], ratioLabel: "1 : 1", native: [1080, 1080] },
  story: { label: "Story / Reel", ratio: [9, 16], ratioLabel: "9 : 16", native: [1080, 1920] },
};

export const getPostSrc = (slug) => `/campaign-social/${slug}.html`;
export const getPostPreview = (slug) => `/campaign-social/previews/${slug}.png`;

export function findPostBySlug(slug) {
  return SOCIAL_POSTS.find((p) => p.slug === slug);
}

export function getAdjacentPosts(slug) {
  const idx = SOCIAL_POSTS.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  const prev = SOCIAL_POSTS[(idx - 1 + SOCIAL_POSTS.length) % SOCIAL_POSTS.length];
  const next = SOCIAL_POSTS[(idx + 1) % SOCIAL_POSTS.length];
  return { prev, next };
}

export function getAllTags() {
  const seen = new Set();
  for (const post of SOCIAL_POSTS) {
    for (const tag of post.tags) seen.add(tag);
  }
  return [...seen].sort();
}
