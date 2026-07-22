"use client";

import { useEffect, useRef } from "react";

/*
  Custom circle cursor — ports .cursor-wrapper/.cursor from msaicc.css.
  A 1.5rem white dot with mix-blend-mode: difference that follows the pointer.
  Only enabled for fine pointers (mouse); touch devices keep native behavior.
*/
export default function Cursor() {
  const ref = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    const dot = dotRef.current;
    if (!el || !dot) return;

    document.body.classList.add("custom-cursor");

    const move = (e) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      el.style.opacity = "1";
    };
    // Slightly enlarge the dot over interactive elements
    const over = (e) => {
      dot.style.scale = e.target.closest("a, button, [role='button']") ? "1.4" : "1";
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.body.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[10000] opacity-0 mix-blend-difference transition-opacity duration-200 max-md:hidden"
    >
      <div
        ref={dotRef}
        className="-ml-3 -mt-3 h-6 w-6 rounded-full bg-white-100 transition-[scale] duration-200"
      />
    </div>
  );
}
