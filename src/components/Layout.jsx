/*
  Layout primitives ported from Webflow's container system (msaicc.css):
    section > .padding-global > .container-{medium|small} > .padding-section > component
*/

export function Section({ id, className = "", children, ...props }) {
  return (
    <section id={id} className={`w-full ${className}`} {...props}>
      {children}
    </section>
  );
}

const MAX = {
  medium: "max-w-[75rem]",
  small: "max-w-[59rem]",
  article: "max-w-[45rem]",
  full: "max-w-none",
};

// .padding-global (px 1.5rem; hero variant 4rem) + .container-{size}
export function Container({ size = "small", hero = false, className = "", children }) {
  const px = hero ? "px-16 max-lg:px-6 max-md:px-5" : "px-6 max-md:px-5";
  return (
    <div className={`flex w-full flex-col items-center justify-center ${px}`}>
      <div
        className={`mx-auto flex w-full flex-col items-start justify-center ${MAX[size]} ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

// .h2-heading-style — small PT Sans Narrow label
// Renders a <p> kicker by default; pass as="h2" in sections where the label
// is the only heading, so each section keeps exactly one meaningful h2.
export function SectionLabel({ as: Tag = "p", children, className = "" }) {
  return (
    <Tag
      className={`font-display text-xl font-normal leading-normal max-md:text-lg ${className}`}
    >
      {children}
    </Tag>
  );
}

// .display-style — large Inter display heading
export function DisplayHeading({ as: Tag = "h2", children, className = "" }) {
  return (
    <Tag
      className={`relative font-inter text-4xl font-semibold leading-[1.2] max-lg:text-3xl max-md:text-2xl ${className}`}
    >
      {children}
    </Tag>
  );
}

// .padding-section — 8rem vertical rhythm, 2rem gap
export function PaddingSection({ className = "", children }) {
  return (
    <div
      className={`flex w-full flex-col items-start justify-center gap-8 py-32 max-lg:py-24 max-md:py-16 ${className}`}
    >
      {children}
    </div>
  );
}
