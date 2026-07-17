import { Section, Container, PaddingSection, SectionLabel, DisplayHeading } from "@/components/Layout";
import Tabs from "@/components/interactions/Tabs";
import PhaseTable from "@/components/PhaseTable";
import Button from "@/components/Button";

const APPLY_URL = "https://intelligence.michaelsteve.com/form/program/aicc";

const BRIEFING = (
  <PhaseTable
    header={{ label: "INDIVIDUAL", value: "1 seat" }}
    topPairs={[
      { label: "INVESTMENT", value: "$500" },
      { label: "PATHWAY", value: "Strategic Briefing" },
    ]}
    rows={[
      { label: "DURATION", value: "S1 - 90mins →  Session: 60mins |  Q&A: 30mins" },
      {
        label: "CASE",
        value:
          "This pathway is designed for the strategic leader whose priority is immediate and definitive clarity. It delivers the foundational knowledge and precise answers necessary to fully address all critical questions on AI value and risk. This session fulfills your core need; the option to invest in the full 4-week program remains open should you choose to acquire hands-on and strategic execution skills.",
      },
      {
        label: "NOTES",
        value:
          "This fee covers Phase 1. Should you decide to continue, the investment for the remaining Phases 2 & 3 is $2,500.",
      },
    ]}
  />
);

const FULL = (
  <PhaseTable
    header={{ label: "INDIVIDUAL", value: "1 seat" }}
    topPairs={[
      { label: "INVESTMENT", value: "$3,000" },
      { label: "PATHWAY", value: "Full Program" },
    ]}
    rows={[
      { label: "DURATION", value: "4 weeks  |  8 Sessions |  2 sessions per week" },
      {
        label: "CASE",
        value:
          "This pathway is for the strategic leader who recognizes AI proficiency as an immediate organizational mandate. You understand the urgency of acquiring strategic value and technical fluency, ensuring you confidently lead adoption and influence the future direction of your firm.",
      },
      {
        label: "NOTES",
        value:
          "Full payment is required upfront to secure your place in the complete, 4-week AI Clarity for Chiefs Program.",
      },
    ]}
  />
);

const ENTERPRISE = (
  <PhaseTable
    header={{ label: "ENTERPRISE", value: "3 seats" }}
    topPairs={[
      { label: "INVESTMENT", value: "$10,000" },
      { label: "PATHWAY", value: "Cross-functional" },
    ]}
    rows={[
      { label: "DURATION", value: "4 weeks  |  8 Sessions |  2 sessions per week" },
      {
        label: "COMMITMENT",
        value: "3 Representatives (Minimum 2 must be Executive/Leadership level).",
      },
      {
        label: "CASE",
        value:
          "This pathway is for the forward-thinking company that requires immediate, cross-functional strategic alignment. The program ensures your technical, financial, and operational leaders achieve a unified understanding of AI risk and value. The structure focuses on Group Workshops to build collective awareness, eliminate siloed thinking, and foster the cohesive cultural readiness needed to safely explore the company's strategic future.",
      },
      {
        label: "NOTES",
        value: (
          <>
            This pathway combines
            <span className="group-img ml"> </span>group and individual sessions for the
            best outcomes. The fee covers all three phases for three seats and at least 2
            representatives should be Executive/Leadership level. Please indicate this
            preference on your application if interested.
          </>
        ),
      },
    ]}
  />
);

const TABS = [
  { label: "Strategic Briefing", icon: "/images/target.png", content: BRIEFING },
  { label: "Full Program", icon: "/images/star.png", content: FULL },
  { label: "Enterprise", icon: "/images/people.png", content: ENTERPRISE },
];

export default function Apply() {
  return (
    <Section id="apply" tabIndex={0}>
      <Container size="small">
        <PaddingSection>
          <div className="flex w-full flex-col items-start justify-center gap-4">
            <SectionLabel>APPLICATION DETAILS</SectionLabel>
            <DisplayHeading>
              This program is open to leaders with a minimum of 10 years working
              experience.
            </DisplayHeading>
            <p className="text-lg">
              Enrollment is limited to <strong>5 seats per month</strong> to maintain a
              high-context, individualized experience. We offer three distinct pathways
              based on your level of strategic commitment and organizational need.
            </p>
          </div>

          <div className="flex w-full flex-col gap-6">
            <div className="mt-12 pb-4 text-xs">
              * Click on the tabs to view information *
            </div>
            <Tabs tabs={TABS} defaultIndex={1} />
          </div>

          <div className="mx-auto max-w-[350px] pt-12">
            <Button href={APPLY_URL} external variant="button" className="w-full">
              APPLY TO SEE IF YOU QUALIFY
            </Button>
          </div>
        </PaddingSection>
      </Container>
    </Section>
  );
}
