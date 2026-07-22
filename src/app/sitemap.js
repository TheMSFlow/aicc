const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

// Generates /sitemap.xml. Single-page site (the landing page).
// LAST_CONTENT_CHANGE: update manually when page content meaningfully changes
// (a per-build `new Date()` teaches crawlers to distrust the date).
const LAST_CONTENT_CHANGE = "2026-07-17"; // re-pricing to the three offers

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: LAST_CONTENT_CHANGE,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
