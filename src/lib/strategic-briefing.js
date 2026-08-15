// The Strategic Briefing is a standalone package, not a curriculum phase.
// It draws on the material of Session 1 but is its own product and runs 2hrs.
// The Full Program's S1 is a separate thing and stays at 90mins — see the
// UNDERSTAND phase in src/components/sections/Curriculum.jsx. Changing one
// must not change the other.
//
// Figures are never written here. Money comes from PRICING, seats from SEATS.
import { PRICING, SEATS } from "@/lib/pricing";

const seats = SEATS.strategicBriefing;

export const STRATEGIC_BRIEFING = {
  pathway: "Strategic Briefing",
  audience: "INDIVIDUAL",
  seatLabel: `${seats} ${seats === 1 ? "seat" : "seats"}`,
  price: PRICING.strategicBriefing,
  // Session count and Q&A split are deliberately not exposed to the reader.
  duration: "S1 - 2hrs",
  case:
    "This pathway is designed for the strategic leader whose priority is immediate and definitive clarity. It delivers the foundational knowledge and precise answers necessary to fully address all critical questions on AI value and risk. This session fulfills your core need; the option to continue into the full 4-week program remains open should you choose to go deeper.",
  notes:
    "The Strategic Briefing is a complete, standalone session. Should you decide to continue into the Full Program, our team will arrange the transition with you directly.",
};