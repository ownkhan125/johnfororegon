"use client";

import { useEffect, useRef, useState } from "react";

/**
 * PostFrame
 * Renders a social-media HTML creative inside an iframe at its exact native
 * pixel size (1080×1080 or 1080×1920) and scales the iframe with a CSS
 * transform so the whole creative is visible — never cropped, stretched, or
 * padded with letterbox/pillarbox strips. The outer wrapper uses the native
 * aspect-ratio so the layout box matches the creative one-for-one.
 */
export function PostFrame({
  src,
  nativeWidth,
  nativeHeight,
  title,
  className = "",
  lazy = true,
  interactive = false,
}) {
  const wrapRef = useRef(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;
    const compute = () => {
      const rect = node.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const next = Math.min(rect.width / nativeWidth, rect.height / nativeHeight);
      setScale(next);
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(node);
    return () => ro.disconnect();
  }, [nativeWidth, nativeHeight]);

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{
        aspectRatio: `${nativeWidth} / ${nativeHeight}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <iframe
        src={src}
        title={title}
        loading={lazy ? "lazy" : "eager"}
        style={{
          width: nativeWidth,
          height: nativeHeight,
          border: 0,
          display: "block",
          transform: `scale(${scale || 0.0001})`,
          transformOrigin: "top left",
          pointerEvents: interactive ? "auto" : "none",
          background: "transparent",
          opacity: scale > 0 ? 1 : 0,
          transition: "opacity 400ms ease",
        }}
        sandbox="allow-same-origin allow-scripts"
        scrolling="no"
        tabIndex={interactive ? 0 : -1}
      />
    </div>
  );
}
