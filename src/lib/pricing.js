// All AICC prices in one place. Amounts are raw numbers; CurrencyPrice formats them.
// The three offers are the only offers. No phase pricing, no installments.
// Backend package keys (intelligence): STRATEGIC_BRIEFING, FULL_INDIVIDUAL, THE_COUNCIL.
export const PRICING = {
  strategicBriefing: { usd: 1500, ngn: 1875000 },
  fullProgram: { usd: 10000, ngn: 12500000 },
  council: { usd: 27500, ngn: 35000000 },
};

export const SEATS = {
  strategicBriefing: 1,
  fullProgram: 1,
  council: 3,
};
