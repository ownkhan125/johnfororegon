"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useGsap(callback, deps = []) {
  const scopeRef = useRef(null);

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;
    const ctx = gsap.context(() => callback(scope), scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scopeRef;
}
