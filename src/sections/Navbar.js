"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

const links = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 200], [0, 14]);
  const backdrop = useTransform(blur, (v) => `blur(${v}px)`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <motion.div
          style={{ backdropFilter: backdrop, WebkitBackdropFilter: backdrop }}
          className={`transition-colors duration-500 ${
            scrolled
              ? "bg-ink/70 border-b border-cream/10"
              : "bg-transparent border-b border-transparent"
          }`}
        >
          <Container className="flex h-16 items-center justify-between sm:h-20">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
              <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-cream/30 sm:h-10 sm:w-10">
                <span className="absolute inset-0 bg-ember" />
                <span className="relative font-display text-base font-semibold text-cream">
                  J
                </span>
                <span className="absolute -inset-px rounded-full ring-1 ring-cream/0 transition-all duration-500 group-hover:ring-cream/40" />
              </span>
              <div className="leading-tight">
                <div className="font-display text-[14px] tracking-tight text-cream sm:text-[15px]">
                  John Hartwell
                </div>
                <div className="text-[9px] uppercase tracking-[0.30em] text-cream-muted sm:text-[10px] sm:tracking-[0.32em]">
                  For Oregon
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 lg:flex">
              {links.map((link, i) => {
                const active =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.06, duration: 0.6 }}
                  >
                    <Link
                      href={link.href}
                      className={`link-underline text-[13px] uppercase tracking-[0.22em] transition-colors ${
                        active ? "text-cream" : "text-cream/85 hover:text-cream"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Wrapper owns the visibility so `hidden` can't collide with
                  the Button's baked-in `inline-flex` (no tailwind-merge). */}
              <span className="hidden sm:inline-flex">
                <Button as="a" href="/donate" variant="primary">
                  Donate
                  <ArrowRight />
                </Button>
              </span>

              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={open}
                className="relative grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream transition-colors duration-300 hover:border-cream/40 sm:h-11 sm:w-11 lg:hidden"
              >
                <span className="sr-only">Menu</span>
                <span className="flex flex-col items-end gap-[5px]">
                  <span
                    className={`h-px bg-cream transition-all duration-500 ${
                      open ? "w-5 translate-y-[6px] rotate-45" : "w-5"
                    }`}
                  />
                  <span
                    className={`h-px bg-cream transition-all duration-500 ${
                      open ? "w-0 opacity-0" : "w-4"
                    }`}
                  />
                  <span
                    className={`h-px bg-cream transition-all duration-500 ${
                      open ? "w-5 -translate-y-[6px] -rotate-45" : "w-3"
                    }`}
                  />
                </span>
              </button>
            </div>
          </Container>
        </motion.div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative grain h-full w-full overflow-hidden bg-bark"
            >
              <div className="absolute inset-0 bg-ink" />
              <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-ember" />
              <div className="relative grid h-full grid-rows-[auto_1fr_auto]">
                <div className="h-16 sm:h-20" />
                <nav className="flex flex-col justify-center gap-1 px-6 sm:px-8">
                  {links.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.15 + i * 0.07,
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between border-b border-cream/10 py-5 font-display text-3xl tracking-tight text-cream sm:text-4xl"
                      >
                        <span className="flex items-center gap-4">
                          <span className="text-xs font-sans tracking-[0.32em] text-cream-muted">
                            0{i + 1}
                          </span>
                          {link.label}
                        </span>
                        <ArrowRight className="opacity-40 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                  className="border-t border-cream/10 px-6 py-7 sm:px-8"
                >
                  <Button
                    as="a"
                    href="/donate"
                    onClick={() => setOpen(false)}
                    className="w-full"
                  >
                    Donate to the campaign
                    <ArrowRight />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ArrowRight({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`h-3.5 w-3.5 ${className}`}
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
