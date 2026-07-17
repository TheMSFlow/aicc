"use client";

import { useState } from "react";
import Image from "next/image";

/*
  Generic tab widget replacing Webflow's .w-tabs (used by Curriculum & Apply).
  tabs: [{ label, icon, content }]. Fade transition on pane change.
*/
export default function Tabs({ tabs, defaultIndex = 0 }) {
  const [active, setActive] = useState(defaultIndex);

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 place-items-stretch gap-0 bg-[linear-gradient(168.08deg,#860471,#6368da)] p-4 max-md:p-2">
        {tabs.map((tab, i) => {
          const current = i === active;
          return (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={current}
              className={`flex h-full w-full flex-row items-center justify-center gap-2 bg-lilac-100 px-2 text-center font-display text-blue-100 transition-[font-size,border-width] duration-200 max-md:flex-col max-md:gap-1
                ${
                  current
                    ? "border-8 border-blue-25 text-2xl max-md:border-4 max-md:text-lg"
                    : "border border-blue-10 text-xl max-md:text-base"
                }`}
            >
              <Image src={tab.icon} alt="" width={40} height={40} className="h-10 w-10 object-contain max-md:h-8 max-md:w-8" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div>
        {tabs.map((tab, i) => (
          <div
            key={tab.label}
            className={`pt-12 transition-opacity duration-300 ${
              i === active ? "block opacity-100" : "hidden opacity-0"
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
