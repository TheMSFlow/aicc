"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Next Monday, formatted like the original inline script (e.g. "JULY 21, 2026").
function useNextMonday() {
  const [label, setLabel] = useState("");
  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() + ((8 - d.getDay()) % 7 || 7));
    // Client-only so the date stays live rather than frozen at static-build time.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLabel(
      d
        .toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
        .toUpperCase()
    );
  }, []);
  return label;
}

function Detail({ heading, children }) {
  return (
    <div className="flex h-full flex-col gap-1 py-4">
      <div className="font-display text-base font-bold text-blue-200">
        {heading}
      </div>
      <div className="font-display text-xl font-normal text-blue-200">
        {children}
      </div>
    </div>
  );
}

export default function Menu() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [open, setOpen] = useState(false); // mobile drawer toggle
  const [revealed, setRevealed] = useState(false); // desktop scroll-up reveal
  const [heroInView, setHeroInView] = useState(true); // suppress menu over the hero
  const starts = useNextMonday();

  // Track desktop vs. mobile (matches the original's 768px hamburger breakpoint).
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Desktop: reveal on scroll up, hide on scroll down.
  useEffect(() => {
    // On mobile `visible` is driven by `open`, so `revealed` is ignored here.
    if (!isDesktop) return;
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < last - 4) setRevealed(true);
      else if (y > last + 4) setRevealed(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isDesktop]);

  // Keep the menu hidden on desktop while any part of the hero is in view.
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  const visible = isDesktop ? revealed && !heroInView : open;

  return (
    <>
      {/* Mobile hamburger — fixed bottom-right (hidden on desktop) */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open menu"
        aria-expanded={open}
        className="fixed bottom-4 right-4 z-[999] flex h-16 w-16 items-center justify-center md:hidden"
      >
        <Image src="/images/menu-bg.svg" alt="" fill className="z-[998] object-contain" />
        <Image src="/images/menu.png" alt="menu" width={40} height={40} className="z-[999]" />
      </button>

      {/* Mobile close (X) — fixed top-right, only while open */}
      {open && (
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="fixed right-0 top-2 z-[1001] flex h-12 w-12 items-center justify-center bg-lilac-100/50 md:hidden"
        >
          <span className="gradient-text font-panton text-2xl font-bold">
            X
          </span>
        </button>
      )}

      {/* Slide-in navbar drawer */}
      <div
        className={`fixed inset-x-0 top-2 z-[1000] mx-auto block rounded-b-lg bg-grey-90 px-4 shadow-[0_4px_4px_#00000040] backdrop-blur-[5px] transition-all duration-500 ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto flex w-full items-center justify-center py-2">
          <div className="grid w-full grid-cols-5 place-items-center gap-4 max-lg:grid-cols-4 max-md:grid-cols-2 max-md:gap-x-8 max-md:gap-y-0">
            <Detail heading="STARTS">{starts}</Detail>
            <Detail heading="DURATION">
              • 4 weeks
              <br />• 8 Sessions, online
              <br />• 2 sessions per week
            </Detail>
            <Detail heading="INVESTMENT">
              Individual → $3,000
              <br />
              Enterprise → $10,000
              <a
                href="#apply"
                onClick={() => setOpen(false)}
                className="mt-1 block text-base text-blue-200 underline transition-all hover:text-[1.025rem]"
              >
                See application details
              </a>
            </Detail>
            <Detail heading="ELIGIBILITY">
              A minimum of 10
              <br />
              years of work
              <br />
              experience
            </Detail>
            <a
              href="#main"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center py-3 max-lg:col-span-4 max-md:col-span-2"
            >
              <Image
                src="/images/MSAC-logo.svg"
                alt="MSAC"
                width={131}
                height={46}
                className="h-auto w-[131px]"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
