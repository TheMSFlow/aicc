import CanvasBackground from "@/components/interactions/CanvasBackground";
import { Container, SectionLabel, DisplayHeading } from "@/components/Layout";
import Button from "@/components/Button";

export const metadata = {
  title: "Page Not Found | AI Clarity for Chiefs",
};

// Utility 404 — the navy field and dot-grid ambience carry the brand; one
// label, one heading, one button. Mirrors the original Webflow utility page.
export default function NotFound() {
  return (
    <>
      <CanvasBackground />

      <main id="main" className="relative z-0 flex min-h-screen w-full items-center">
        <Container size="small">
          <div className="mx-auto flex w-full flex-col items-center gap-8 py-32 text-center max-md:py-16">
            <SectionLabel>404 PAGE NOT FOUND</SectionLabel>
            <DisplayHeading as="h1">
              The page you are looking for doesn&rsquo;t exist or has been
              moved.
            </DisplayHeading>
            <Button href="/" variant="hero">
              Go Home
            </Button>
          </div>
        </Container>
      </main>
    </>
  );
}
