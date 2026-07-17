/*
  CSS-only infinite marquee (replaces Webflow's IX2-driven scroll).
  Renders the group twice inside a max-content track animated by -50%.
*/

export default function Marquee({
  children,
  duration = 20,
  reverse = false,
  className = "",
  itemClassName = "",
}) {
  const group = <div className={`flex flex-none ${itemClassName}`}>{children}</div>;
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        className={`marquee-track${reverse ? " reverse" : ""}`}
        style={{ "--marquee-duration": `${duration}s` }}
        aria-hidden="true"
      >
        {group}
        {group}
      </div>
    </div>
  );
}
