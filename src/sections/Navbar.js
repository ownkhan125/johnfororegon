"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

const links = [
  { label: "About", href: "#about" },
  { label: "Issues", href: "#issues" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Endorsements", href: "#endorsements" },
  { label: "Events", href: "#events" },
  { label: "News", href: "#news" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
          <Container className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="#top" className="group flex items-center gap-3">
              <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-cream/30">
                <span className="absolute inset-0 bg-ember" />
                <span className="relative font-display text-base font-semibold text-cream">
                  J
                </span>
                <span className="absolute -inset-px rounded-full ring-1 ring-cream/0 transition-all duration-500 group-hover:ring-cream/40" />
              </span>
              <div className="leading-tight">
                <div className="font-display text-[15px] tracking-tight text-cream">
                  John Hartwell
                </div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-cream-muted">
                  For Oregon
                </div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 lg:flex">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.06, duration: 0.6 }}
                  className="link-underline text-[13px] uppercase tracking-[0.22em] text-cream/85 hover:text-cream"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Button
                as="a"
                href="#donate"
                variant="primary"
                className="hidden sm:inline-flex"
              >
                Donate
                <ArrowRight />
              </Button>

              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={open}
                className="relative grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-cream lg:hidden"
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
                <div className="h-20" />
                <nav className="flex flex-col justify-center gap-1 px-8">
                  {links.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.15 + i * 0.07,
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group flex items-center justify-between border-b border-cream/10 py-5 font-display text-3xl tracking-tight text-cream sm:text-4xl"
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-xs font-sans tracking-[0.32em] text-cream-muted">
                          0{i + 1}
                        </span>
                        {link.label}
                      </span>
                      <ArrowRight className="opacity-40 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100" />
                    </motion.a>
                  ))}
                </nav>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                  className="border-t border-cream/10 px-8 py-7"
                >
                  <Button
                    as="a"
                    href="#donate"
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
