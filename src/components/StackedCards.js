"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/utils/cn";

/**
 * StackedCards
 * A premium stacked card carousel. Cards fan into the distance with depth,
 * scale, slight rotation, and opacity falloff. Advancing sends the current
 * top card to the back of the stack while the next card slides forward.
 *
 * Controls:
 *   - drag the top card left/right to advance / rewind
 *   - prev / next buttons
 *   - peek a back card by clicking it
 *   - auto-advance with pause-on-hover (configurable)
 */
export function StackedCards({
  cards,
  autoplayMs = 5200,
  className,
}) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const total = cards.length;

  const next = useCallback(() => {
    setDirection(1);
    setActive((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((i) => (i - 1 + total) % total);
  }, [total]);

  // Auto-advance
  useEffect(() => {
    if (paused || !autoplayMs) return;
    const t = setInterval(() => {
      setDirection(1);
      setActive((i) => (i + 1) % total);
    }, autoplayMs);
    return () => clearInterval(t);
  }, [paused, autoplayMs, total]);

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const progressKey = `${active}-${direction}`;
  const activeCard = cards[active];

  return (
    <div
      data-hero-stack
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className={cn(
        "relative isolate w-full select-none",
        className,
      )}
      style={{ perspective: 1600 }}
    >
      {/* Stage */}
      <div className="relative mx-auto aspect-[4/5] w-full max-w-[28rem]">
        {/* Backdrop label — current card index, animated */}
        <div className="pointer-events-none absolute -top-9 left-0 right-0 z-30 flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-cream-muted sm:text-[11px]">
          <span className="flex items-center gap-2">
            <span className="grid h-1.5 w-1.5 rounded-full bg-flag flag-pulse" />
            {activeCard.label}
          </span>
          <span className="font-mono text-cream/80">
            {String(active + 1).padStart(2, "0")}
            <span className="text-cream-muted"> / {String(total).padStart(2, "0")}</span>
          </span>
        </div>

        {cards.map((card, i) => {
          const offset = (i - active + total) % total;
          return (
            <StackCard
              key={card.id}
              card={card}
              offset={offset}
              total={total}
              isActive={offset === 0}
              onAdvance={next}
              onRewind={prev}
              onPeek={() => {
                if (offset === 0) return;
                setDirection(1);
                setActive(i);
              }}
              entryDelay={0.55 + i * 0.12}
              direction={direction}
            />
          );
        })}
      </div>

      {/* Controls */}
      <div
        data-hero-stack-controls
        className="mt-9 flex items-center gap-5"
      >
        <button
          type="button"
          onClick={prev}
          aria-label="Previous card"
          className="group grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-cream transition-all duration-500 hover:border-flag hover:bg-flag hover:text-white"
        >
          <ArrowIcon className="rotate-180" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next card"
          className="group grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-cream transition-all duration-500 hover:border-flag hover:bg-flag hover:text-white"
        >
          <ArrowIcon />
        </button>

        {/* Progress meter */}
        <div className="relative ml-1 flex-1 overflow-hidden">
          <div className="h-px w-full bg-cream/15" />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={progressKey}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: paused ? 0.05 : 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: paused ? 0.4 : autoplayMs / 1000,
                ease: paused ? [0.22, 1, 0.36, 1] : "linear",
              }}
              style={{ transformOrigin: "left" }}
              className="absolute inset-x-0 top-0 h-px bg-ember"
            />
          </AnimatePresence>
        </div>

        <div className="hidden font-mono text-[11px] uppercase tracking-[0.32em] text-cream-muted sm:block">
          {activeCard.accent}
        </div>
      </div>
    </div>
  );
}

/**
 * Single card — handles its own entry + carousel transform.
 */
function StackCard({
  card,
  offset,
  total,
  isActive,
  onAdvance,
  onRewind,
  onPeek,
  entryDelay,
  direction,
}) {
  const visible = offset < 4;

  // Stack transform: cards recede up-right with depth and rotation.
  const x = offset * 28;
  const y = -offset * 18;
  const rotate = offset * 4.5;
  const scale = 1 - offset * 0.06;
  const opacity = offset >= 3 ? 0 : 1 - offset * 0.18;
  const zIndex = total - offset;

  return (
    <motion.div
      data-hero-stack-card
      initial={{ opacity: 0, y: 80, scale: 0.85, rotate: -6 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      transition={{
        duration: 1,
        delay: entryDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute inset-0"
      style={{ zIndex, pointerEvents: visible ? "auto" : "none" }}
    >
      <motion.button
        type="button"
        animate={{ x, y, rotate, scale, opacity }}
        transition={{
          type: "spring",
          stiffness: 140,
          damping: 22,
          mass: 0.9,
        }}
        drag={isActive ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.18}
        onDragEnd={(_, info) => {
          if (info.offset.x < -90 || info.velocity.x < -500) onAdvance();
          else if (info.offset.x > 90 || info.velocity.x > 500) onRewind();
        }}
        whileTap={isActive ? { scale: 0.99 } : undefined}
        onClick={isActive ? undefined : onPeek}
        aria-label={isActive ? card.title : `Bring "${card.title}" to front`}
        tabIndex={isActive ? 0 : -1}
        className={cn(
          "absolute inset-0 block overflow-hidden rounded-[2rem] border text-left will-change-transform",
          isActive
            ? "cursor-grab border-flag/40 shadow-[0_30px_70px_-25px_rgba(255,0,0,0.55),0_20px_40px_-20px_rgba(10,37,64,0.6)] active:cursor-grabbing"
            : "cursor-pointer border-cream/10",
        )}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Image */}
        <div className="absolute inset-0">
          <Image
            src={card.img}
            alt={card.title}
            fill
            priority={isActive}
            sizes="(max-width: 1024px) 80vw, 28rem"
            className="object-cover"
          />
        </div>

        {/* Tinted gradient overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t mix-blend-multiply",
            card.tint || "from-ink/85 via-ink/20 to-ink/30",
          )}
        />
        {/* Top vignette */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-ink/40 to-transparent" />
        {/* Bottom heavy gradient for readability */}
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-ink/95 via-ink/55 to-transparent" />

        {/* Inner ring */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-cream/10"
        />

        {/* Top label + accent */}
        <div className="relative z-10 flex items-start justify-between p-6 sm:p-7">
          <span className="rounded-full border border-paper/30 bg-navy/40 px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-paper backdrop-blur-md">
            {card.label}
          </span>
          <span className="flex items-center gap-2 rounded-full border border-flag/60 bg-flag/30 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-paper backdrop-blur">
            <span className="grid h-1.5 w-1.5 rounded-full bg-paper flag-pulse" />
            {card.accent}
          </span>
        </div>

        {/* Bottom meta */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3 p-6 sm:p-7"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="h-[3px] w-14 bg-flag shadow-[0_0_18px_rgba(255,0,0,0.55)]" />
          <div className="font-display text-[clamp(1.5rem,3.5vw,2.25rem)] font-light leading-[1.05] text-paper">
            {card.title}
          </div>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-paper/80">
            {card.meta}
          </div>
          {card.body ? (
            <p className="mt-1 max-w-xs text-sm leading-relaxed text-paper/80">
              {card.body}
            </p>
          ) : null}
        </div>

        {/* Corner crosshair marks */}
        <CornerMark className="left-3 top-3" />
        <CornerMark className="right-3 top-3 rotate-90" />
        <CornerMark className="left-3 bottom-3 -rotate-90" />
        <CornerMark className="right-3 bottom-3 rotate-180" />
      </motion.button>
    </motion.div>
  );
}

function CornerMark({ className }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute h-4 w-4 border-l border-t border-flag/60",
        className,
      )}
    />
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={cn("h-3.5 w-3.5", className)}
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
