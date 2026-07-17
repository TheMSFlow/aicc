import { SITE_URL } from "@/lib/site";

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
