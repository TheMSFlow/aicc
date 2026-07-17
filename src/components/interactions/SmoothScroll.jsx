"use client";

import { useEffect } from "react";

/*
  Lenis momentum smooth scroll — ports the inline Lenis init from index.html.
  (The original also wired [data-target] scroll buttons, but the page markup
  contains none, so only the raf loop is needed here.)
*/
export default function SmoothScroll() {
  useEffect(() => {
    let lenis;
    let rafId;

    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        lerp: 0.1,
        wheelMultiplier: 0.7,
        infinite: false,
        gestureOrientation: "vertical",
        smoothWheel: true,
      });

      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return null;
}
