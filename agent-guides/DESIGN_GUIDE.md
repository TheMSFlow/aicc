# AICC Design Guide

Read `AICC_BRIEF.md` first, then `COPY_GUIDE.md`. AICC keeps its **own visual identity** — the deep-navy, canvas-lit, Webflow-born system it launched with. Do NOT port the aisc palette or its light/ice sections. What transfers from the studio is the design philosophy, not the paint.

## Register

Premium, private, unhurried. The site should feel like a quiet floor of a good building: dark, spacious, assured. Reference points: a private bank's client site, a strategy firm's partner page. Not: SaaS landing page, AI startup, coaching bootcamp.

Three guiding words (shared with the studio): **Restrained. Deliberate. Heavy.**
AICC leans hardest into *restrained* — it is the laid back, sophisticated property.

## Color system (tokens in `src/app/globals.css` — use tokens, never inline hex)

| Token | Value | Usage |
|---|---|---|
| `blue-100` | `#01067a` | Brand navy. The site's ground; the p5 canvas paints `rgb(1,6,122)`. |
| `blue-200` | `#00034c` | Deeper navy for contrast zones. |
| `blue-100/85…10` | opacity variants | Layering on the navy field. |
| `blue-accent` | `#0082f3` | The single accent. Sparingly: links, highlights, one element per viewport. |
| `lilac-100` | `#e9eaff` | Primary text-on-dark and soft highlights. |
| `white-100` | `#fff` | Pure white moments. |
| `grey-100/90/70`, `grey-150`, `grey-200` | greys | Secondary text, hairlines, muted UI. |

Principles adopted from the studio:
- Sections earn their color; no two consecutive sections should read identically.
- Maximum 4 elements competing for attention per viewport. Editorial design removes.
- Whitespace is structure. AICC's dark field makes generous spacing read as luxury; protect it.
- `.gradient-text` (the `#041986 → #6368da` clipped-gradient headings) is **legacy jewelry**: allowed only where it already exists; do not add new gradient text. The studio-wide rule is text is never gradient; AICC's existing usage is grandfathered until a design pass retires it.

## Typography

- **Inter** (`--font-inter` / `--font-sans`) — body and UI.
- **PT Sans Narrow** (`--font-display`) — section labels and display moments (all-caps, tight tracking).
- **Panton Narrow** (`--font-panton`, local woff2) — brand/display accents. Note: current files are trial-license cuts; flag before any commercial redesign leans harder on it.
- Body copy stays light-weight with relaxed leading; contrast with headings is structural. Numbers used as proof are set large and bold inline.

## Layout system (`src/components/Layout.jsx` — reuse, don't reinvent)

- `Section` — focusable section wrapper.
- `Container` — sizes: medium 75rem / small 59rem / article 45rem / full; `hero` variant widens padding.
- `SectionLabel` — PT Sans Narrow label (the "AI CLARITY OVERVIEW" pattern).
- `DisplayHeading` — Inter semibold display heading, configurable tag.
- `PaddingSection` — 8rem vertical rhythm. Respect it; do not compress sections.
- `Button.jsx` — gradient pill anchor, variants button/hero/cta, hover reverses gradient. The only button.
- `PhaseTable.jsx` — the paired-rows data table used for offers (and formerly phases). Presentational; reuse for any tabular offer/detail layout.

## Interaction layer (`src/components/interactions/` — all solid, all reusable)

- `CanvasBackground` — p5.js dot grid on navy; dots brighten near cursor. The site's signature ambience. Keep it subtle; never add a second ambient effect on top.
- `SmoothScroll` — Lenis (lerp 0.1, wheelMultiplier 0.7). Site-wide.
- `Cursor` — custom circle cursor, fine-pointer only, mix-blend-difference.
- `Tabs` — generic tab widget (Curriculum, Apply). Fade transitions, aria-pressed.
- `Accordion` — FAQ; grid-rows 0fr→1fr height trick.
- `Marquee` — CSS-only infinite marquee (exec titles, footer thank-yous).
- `SkipLinks` — a11y skip links.

Motion rules (studio-wide): 200–300ms ease-out, transform/opacity only. No parallax, no scroll-jacking. AICC's pace means fewer, slower, softer moves than aisc.

## Breakpoints

Webflow desktop-first mapping preserved in Tailwind v4 theme: sm 480 / md 768 / lg 992 / xl 1280 — `max-*` variants match the original media queries. Design desktop-down.

## Pricing display rules

- All prices come from `src/lib/pricing.js`. Never hardcode a figure in a component.
- Dual currency: NGN for Nigerian visitors, USD otherwise (LocationContext). Currency rendering goes through the shared price component; never format currency ad hoc.
- Only the Apply section carries full pricing tables; the Menu stats bar carries the two headline figures. Curriculum carries none.

## Workflow (mandatory for design tasks)

1. Invoke the `frontend-design` skill first, every session.
2. Read this guide + `AICC_BRIEF.md`; state your design plan (palette use, type, layout concept, one signature element) before touching components.
3. Dev server: `npm run dev` at `http://localhost:3000` — never start a second instance.
4. Screenshot loop: screenshot → read the PNG → compare against intent → fix → re-screenshot. Minimum 2 rounds. Be specific in comparisons ("label tracking too loose", "accent used twice in viewport").
   (If no screenshot script exists yet, copy the `screenshot.mjs` pattern from `../aisc/screenshot.mjs`.)

## Tech notes

- Next.js 16 — read `node_modules/next/dist/docs/` before writing framework code; this version differs from training data.
- Tailwind CSS v4 — CSS-based config in `globals.css`, no tailwind.config.js. Use canonical v4 classes.
- Check `src/components/` before creating any new component.
- `msaicc.webflow/` is the read-only Webflow source reference — never import from it, never modify it.
