"use client";

import { motion } from "motion/react";
import { cn } from "@/utils/cn";

const SOCIALS = [
  {
    name: "X",
    href: "https://x.com/johnfororegon",
    label: "Follow on X (Twitter)",
    Icon: XIcon,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/johnfororegon",
    label: "Follow on Instagram",
    Icon: InstagramIcon,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/johnfororegon",
    label: "Follow on Facebook",
    Icon: FacebookIcon,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@johnfororegon",
    label: "Follow on TikTok",
    Icon: TikTokIcon,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@johnfororegon",
    label: "Watch on YouTube",
    Icon: YouTubeIcon,
  },
];

/**
 * SocialIcons
 * Consistent SVG social icon row used across the site.
 * Hover: red ring, subtle lift, icon color flip to cream.
 *
 * variant="bordered" (default) — circular outline buttons (footer / hero)
 * variant="ghost"             — borderless icons on light surfaces
 */
export function SocialIcons({
  variant = "bordered",
  size = "md",
  className,
  iconClassName,
}) {
  const sizeMap = {
    sm: { btn: "h-9 w-9", icon: "h-3.5 w-3.5" },
    md: { btn: "h-10 w-10", icon: "h-4 w-4" },
    lg: { btn: "h-11 w-11", icon: "h-[18px] w-[18px]" },
  };
  const sz = sizeMap[size] || sizeMap.md;

  const base =
    variant === "bordered"
      ? "border border-cream/20 bg-transparent text-cream/85 hover:border-ember hover:text-cream"
      : "text-cream/80 hover:text-cream";

  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {SOCIALS.map(({ name, href, label, Icon }, i) => (
        <li key={name}>
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.05 + i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -3 }}
            className={cn(
              "group relative grid place-items-center rounded-full transition-colors duration-300",
              sz.btn,
              base,
            )}
          >
            {/* Hover red glow ring (bordered variant) */}
            {variant === "bordered" && (
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  boxShadow: "0 0 0 1px rgba(200,16,46,0.55), 0 0 22px -2px rgba(200,16,46,0.5)",
                }}
              />
            )}
            <Icon className={cn(sz.icon, iconClassName)} />
          </motion.a>
        </li>
      ))}
    </ul>
  );
}

/* ──────────────────────────────────────────────────────
   Icons — currentColor + stroke-free for crispness at any size
   ────────────────────────────────────────────────── */

function XIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.53 3H20.7l-6.93 7.93L22 21h-6.4l-5-6.55L4.83 21H1.66l7.41-8.48L1.5 3h6.56l4.52 5.99L17.53 3zm-1.12 16.2h1.76L7.7 4.7H5.82L16.41 19.2z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M13.5 21v-7.5h2.55l.45-3h-3V8.55c0-.87.27-1.46 1.51-1.46h1.6V4.42c-.28-.04-1.23-.12-2.34-.12-2.31 0-3.9 1.41-3.9 4v2.2H7.5v3h2.87V21h3.13z" />
    </svg>
  );
}

function TikTokIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M16.6 3a5.8 5.8 0 004.4 4.5v3a8.7 8.7 0 01-4.4-1.5v6.3a5.7 5.7 0 11-5.7-5.7c.32 0 .63.03.94.08v3.13a2.65 2.65 0 102.65 2.65V3h2.11z" />
    </svg>
  );
}

function YouTubeIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M22 8.2a3 3 0 00-2.1-2.1C18.1 5.5 12 5.5 12 5.5s-6.1 0-7.9.6A3 3 0 002 8.2C1.5 10 1.5 12 1.5 12s0 2 .5 3.8a3 3 0 002.1 2.1C5.9 18.5 12 18.5 12 18.5s6.1 0 7.9-.6A3 3 0 0022 15.8c.5-1.8.5-3.8.5-3.8s0-2-.5-3.8zM10 15V9l5.2 3L10 15z" />
    </svg>
  );
}
