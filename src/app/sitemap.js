const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

// Generates /sitemap.xml. Single-page site (the landing page).
export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
