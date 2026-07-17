import Image from "next/image";
import {
  Section,
  Container,
  PaddingSection,
  SectionLabel,
  DisplayHeading,
} from "@/components/Layout";

const CARDS = [
  { icon: "/images/notebook.png", text: "Foundational Understanding of AI Core Concepts" },
  { icon: "/images/thumb-up.png", text: "Hands-On-Experience with AI Environments" },
  { icon: "/images/puzzle.png", text: "AI Value Creation, Strategic Principles & Leadership" },
];

export default function Overview() {
  return (
    <Section id="overview" tabIndex={0}>
      <Container size="small">
        <PaddingSection>
          <div className="flex w-full flex-col items-start justify-start gap-12">
            <div className="flex w-full flex-col items-start justify-center gap-4">
              <SectionLabel>AI CLARITY OVERVIEW</SectionLabel>
              <DisplayHeading>
                As a leader in your industry, clarity in AI is non-negotiable
                because there&#39;s too much at stake.
              </DisplayHeading>
              <p className="text-sm md:text-base">
                AI Clarity for Chiefs provide leaders with the strategic clarity
                required to make smart AI decisions. The program demystifies
                industry ambiguity by establishing foundational understanding
                and providing hands-on experience with AI environments.
                Executives learn critical security, governance, and leadership
                principles, enabling them to safely integrate AI into their
                personal workflow and confidently influence their
                organization&#39;s responsible adoption strategy.
              </p>
            </div>

            <div className="flex w-full flex-col items-stretch justify-center gap-16 md:flex-row max-md:gap-8">
              {CARDS.map((c) => (
                <div
                  key={c.text}
                  className="flex flex-row items-center justify-start gap-2 bg-[#a9a9a926] p-4 "
                >
                  <Image
                    src={c.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="size-12 shrink-0"
                  />
                  <div className="text-sm md:text-base">{c.text}</div>
                </div>
              ))}
            </div>
          </div>
        </PaddingSection>
      </Container>
    </Section>
  );
}
