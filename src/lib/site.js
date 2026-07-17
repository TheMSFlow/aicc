// Central site config. The production origin lives in .env.local
// (NEXT_PUBLIC_SITE_URL); the fallback keeps builds working if it's unset.
// Used by metadata (canonical/OG), robots.txt, and sitemap.xml.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aiclarityforchiefs.com";
