/*
  Gradient pill CTA — ports .button / .hero-button / .cta-button from msaicc.css.
  Gradient: linear-gradient(144.65deg, #860471, #6368da); reversed on hover.
*/

const RADIUS = {
  button: "rounded-xl", // 12px
  hero: "rounded-[20px]",
  cta: "rounded-[20px]",
};

export default function Button({
  href = "#",
  children,
  variant = "button",
  external = false,
  className = "",
}) {
  const size = variant === "button" ? "text-base" : "text-sm";
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...externalProps}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 ${size} ${RADIUS[variant]}
        text-white-100 transition-[background-image] duration-300 ease-in
        bg-[linear-gradient(144.65deg,#860471,#6368da)]
        hover:bg-[linear-gradient(144.65deg,#6368da,#860471)]
        focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white-100
        ${className}`}
    >
      {children}
    </a>
  );
}
