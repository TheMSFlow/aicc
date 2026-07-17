import { SITE_URL } from "@/lib/site";

// Generates /robots.txt.
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
