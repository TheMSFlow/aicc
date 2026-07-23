/**
 * GA4 event helper. Safe to call anywhere on the client: no-ops during SSR
 * and when NEXT_PUBLIC_GA_ID is unset (gtag never loads).
 *
 * Mirrors aisc's src/lib/analytics.js so event tracking works the same way
 * across the studio's properties.
 */
export function trackEvent(name, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", name, params);
}
