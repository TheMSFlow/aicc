<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
---

# Frontend Design — Always Do First

**Before writing any frontend or design code, every session, no exceptions:**

1. Invoke the `frontend-design` skill (`frontend-design:frontend-design`)
2. Read `agent-guides/DESIGN_GUIDE.md` and `agent-guides/AICC_BRIEF.md`
3. State your design plan — palette use, type pairing, layout concept, and one signature element — before touching any component

**Screenshot comparison loop (mandatory for all design tasks):**

- Dev server runs at `http://localhost:3000` via `npm run dev` — never start a second instance
- After each change: screenshot → read the PNG → compare against intent → fix mismatches → re-screenshot
- Do **at least 2 comparison rounds**. Stop only when no visible gaps remain or the user says so
- Be specific when comparing: "label tracking too loose", "accent appears twice in one viewport"
- If no screenshot script exists yet, copy the `screenshot.mjs` pattern from the sibling `aisc` project

---

# AICC Agent System

This project is the landing page for **AI Clarity for Chiefs (AICC)** — a four-week, one-on-one executive engagement by Michael Steve for Chiefs and VIPs. It is the laid back, well-paced, sophisticated sibling of the AI Stakeholder Challenge (aisc). Before working on any copy, design, or content task, read the relevant guide below.

## Guides

- **`agent-guides/AICC_BRIEF.md`** — Start here. The definitive AICC foundation: what it is, the three emphases (AI Clarity, AI Leadership, AI Value-as-extraction), the Chiefs + VIPs audience, The Council, pricing, the relationship to AISC, and what AICC is NOT.

- **`agent-guides/COPY_GUIDE.md`** — For copywriting tasks. The calm AICC register, inherited studio voice and headline rules, Chief hooks, the full forbidden-phrases table (including AICC-specific bans), CTA principles, and section-by-section direction.

- **`agent-guides/DESIGN_GUIDE.md`** — For design and frontend tasks. AICC's own navy visual identity, tokens, typography, layout primitives, interaction layer, motion rules, and pricing display rules.

## When to read which guide

| Task type | Read |
|-----------|------|
| Writing hero, headlines, or section copy | AICC_BRIEF + COPY_GUIDE |
| Redesigning or rebuilding a section | AICC_BRIEF + DESIGN_GUIDE |
| Building a new component | AICC_BRIEF + DESIGN_GUIDE |
| Refining pricing, Apply, FAQ, or curriculum | AICC_BRIEF + COPY_GUIDE + DESIGN_GUIDE |
| Anything involving The Council or offers | AICC_BRIEF (pricing rules) + COPY_GUIDE |
| Cross-ecosystem facts (org name, other programs, links) | `../ecosystem/SOURCE_OF_TRUTH.md` at the ECOSYSTEM root |

## Hard rules

- Prices are defined once in `src/lib/pricing.js`. Components never hardcode figures.
- The three offers are Strategic Briefing, Full Program, The Council. There are no phases to buy, no installments, no "Enterprise".
- "Challenge" is AISC's word. AICC is an engagement.
- No em-dashes in rendered copy. No AI jargon (LLM, prompt, model, tokens).
- `msaicc.webflow/` is read-only reference. Do not modify or import from it.

## Source context (read-only reference)

- `msaicc.webflow/` — the original Webflow export this site was ported from.
- `../ecosystem/` (ECOSYSTEM root) — the studio knowledge base: SOURCE_OF_TRUTH, LINK_MAP, WORKING_RULES. Respect WORKING_RULES (never commit, never push; the user reviews personally).

## Audience priority

Lead all copy and hero-level design decisions toward **Chiefs and VIPs** in the full breadth defined in AICC_BRIEF (executives, politicians, faith leaders, public figures, institutional leaders) — not corporations only. The engagement is personal; the copy speaks to one leader, not a procurement committee.
