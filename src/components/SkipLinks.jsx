"use client";

/*
  Accessibility skip-links — ports .skip-blocks_component from the original.
  Hidden off-screen until focused, then slide into the top-left; activating one
  moves keyboard focus to the target section (which is focusable, tabIndex 0).
*/
const LINKS = [
  { id: "overview", label: 'Skip to "Overview"' },
  { id: "apply", label: 'Skip to "Application Details"' },
];

export default function SkipLinks() {
  const focusTarget = (id) => {
    const el = document.getElementById(id);
    if (el) el.focus();
  };

  return (
    <nav aria-label="Skip links">
      {LINKS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={() => focusTarget(id)}
          className="absolute left-0 top-0 z-[9999] m-2 flex -translate-y-[400px] items-center rounded-md bg-lilac-100 px-4 py-2 font-bold transition-transform duration-200 focus:translate-y-0 focus:border-[3px] focus:border-blue-200 focus-visible:translate-y-0 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white-100"
        >
          <span className="font-inter font-medium text-blue-100">{label}</span>
          <span className="ml-5 rounded-[30px] bg-blue-100 px-5 py-2 text-base text-white">
            Enter
          </span>
        </a>
      ))}
    </nav>
  );
}
