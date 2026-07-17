import Image from "next/image";

/*
  Presentational phase/pricing table shared by Curriculum and Apply tab panes.
  Ports .phase-component > .phase-wrapper (row3-3 header row + row1-1 rows).
*/

function ContentCell({ children, icon, className = "" }) {
  return (
    <div
      className={`flex h-full w-full items-center gap-2 border border-grey-150 p-2 font-display text-xl text-white-100 ${className}`}
    >
      {icon ? (
        <Image src={icon} alt="" width={24} height={24} className="flex-none" />
      ) : null}
      <div>{children}</div>
    </div>
  );
}

// .grid2-2 — [auto 1fr] label/value pair
function Pair({ label, value, valueIcon }) {
  return (
    <div className="grid w-full grid-cols-[auto_1fr]">
      <ContentCell className="items-center justify-center whitespace-nowrap font-bold">
        {label}
      </ContentCell>
      <ContentCell icon={valueIcon}>{value}</ContentCell>
    </div>
  );
}

export default function PhaseTable({ header, topPairs = [], rows = [] }) {
  return (
    <div className="border-4 border-[#a9a9a933]">
      <div className="mb-6 grid gap-6 px-6 pt-6">
        {/* row3-3 — heading pair + two inline pairs */}
        <div className="flex flex-row items-stretch justify-center gap-6 max-md:flex-col">
          <div className="grid w-full grid-cols-[auto_1fr]">
            <div className="flex h-full items-center justify-center bg-lilac-100 p-2">
              <div className="gradient-text font-display text-xl font-bold">
                {header.label}
              </div>
            </div>
            <ContentCell>{header.value}</ContentCell>
          </div>
          {topPairs.map((p) => (
            <Pair key={p.label} label={p.label} value={p.value} />
          ))}
        </div>

        {/* row1-1 — full-width pairs */}
        {rows.map((r) => (
          <Pair key={r.label} label={r.label} value={r.value} valueIcon={r.valueIcon} />
        ))}
      </div>
    </div>
  );
}
