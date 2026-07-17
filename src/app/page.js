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
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "AI Clarity for Chiefs",
  description:
    "A four-week, one-on-one executive engagement designed for C-suite and senior leaders, delivered through eight private online sessions covering AI governance, risk oversight, leadership alignment, and enterprise-grade strategy.",
  provider: {
    "@type": "Organization",
    name: "Michael Steve",
    url: "https://michaelsteve.com",
  },
};

export default function Home() {
  return (
    <>
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
        <Contact />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
