import CanvasBackground from "@/components/interactions/CanvasBackground";
import SmoothScroll from "@/components/interactions/SmoothScroll";
import Cursor from "@/components/interactions/Cursor";
import Menu from "@/components/sections/Menu";
import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import Niche from "@/components/sections/Niche";
import Curriculum from "@/components/sections/Curriculum";
import Highlights from "@/components/sections/Highlights";
import Apply from "@/components/sections/Apply";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import SkipLinks from "@/components/SkipLinks";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const offer = (name, price, category) => ({
  "@type": "Offer",
  name,
  price,
  priceCurrency: "USD",
  category,
  availability: "https://schema.org/LimitedAvailability",
  url: `${SITE_URL}/#apply`,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "AI Clarity for Chiefs",
  description:
    "A four-week, one-on-one executive engagement designed for C-suite leaders and VIPs, delivered through eight private online sessions covering AI clarity, governance, risk oversight, leadership alignment, and value strategy.",
  url: SITE_URL,
  provider: {
    "@type": "Organization",
    name: "Michael Steve Clarity Studio",
    url: "https://michaelsteve.com",
  },
  educationalLevel: "Executive",
  occupationalCategory: [
    "Chief Executives",
    "C-Suite Executives",
    "Senior Leadership",
    "Public Figures and Institutional Leaders",
  ],
  coursePrerequisites:
    "A minimum of 10 years of professional experience with strategic or P&L decision-making authority.",
  teaches: [
    "AI value creation",
    "AI governance and risk oversight",
    "AI security and data safety",
    "Responsible AI adoption and leadership",
  ],
  offers: [
    offer("Strategic Briefing (Individual)", "1500", "Individual"),
    offer("Full Program (Individual)", "10000", "Individual"),
    offer("The Council (3 seats)", "27500", "Group"),
  ],
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT12H",
      description:
        "Eight private online sessions over four weeks (two sessions per week).",
    },
  ],
};

export default function Home() {
  return (
    <>
      <SkipLinks />
      <CanvasBackground />
      <SmoothScroll />
      <Cursor />
      <Menu />

      <main id="main" className="relative z-0 w-full">
        <Hero />
        <Overview />
        <Niche />
        <Curriculum />
        <Highlights />
        <Apply />
        <Faq />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
