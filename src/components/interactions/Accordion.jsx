"use client";

import { useState } from "react";

/*
  FAQ accordion item — replaces Webflow's IX2 accordion.
  Plus icon (line1 horizontal + line2 vertical); line2 rotates to form a minus
  when open. Smooth height via the grid-rows 0fr→1fr technique.
*/
export function AccordionItem({ question, children, open: openProp, onToggle }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = onToggle !== undefined;
  const open = isControlled ? openProp : internalOpen;
  const toggle = () =>
    isControlled ? onToggle() : setInternalOpen((o) => !o);

  return (
    <div className="flex w-full flex-col items-start gap-2 bg-blue-20 p-2">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between bg-white p-4 text-left transition-colors duration-300 ease-in hover:bg-lilac-100"
      >
        <h3 className="font-inter text-base font-medium leading-normal text-blue-100">
          {question}
        </h3>
        <span className="flex h-12 w-12 flex-none items-center justify-center">
          <span className="relative flex h-8 w-8 items-center justify-center">
            <span className="absolute h-1 w-6 bg-blue-85" />
            <span
              className={`absolute h-6 w-1 bg-blue-85 transition-transform duration-300 ${
                open ? "rotate-90" : "rotate-0"
              }`}
            />
          </span>
        </span>
      </button>

      <div
        className={`grid w-full overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-b-[0.5px] border-grey-100 bg-white p-4 text-blue-85">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
