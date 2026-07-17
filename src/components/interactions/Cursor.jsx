"use client";

import { useEffect, useRef } from "react";

/*
  Custom circle cursor — ports .cursor-wrapper/.cursor from msaicc.css.
  A 1.5rem white dot with mix-blend-mode: difference that follows the pointer.
  Only enabled for fine pointers (mouse); touch devices keep native behavior.
*/
export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;

    document.body.classList.add("custom-cursor");

    const move = (e) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      el.style.opacity = "1";
    };
    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[10000] -ml-3 -mt-3 h-6 w-6 rounded-full bg-white-100 opacity-0 mix-blend-difference transition-opacity duration-200 max-md:hidden"
    />
  );
}
