import { Section, Container, PaddingSection, SectionLabel, DisplayHeading } from "@/components/Layout";
import Tabs from "@/components/interactions/Tabs";
import PhaseTable from "@/components/PhaseTable";
import Button from "@/components/Button";
import CurrencyPrice from "@/components/CurrencyPrice";
import { PRICING } from "@/lib/pricing";
import { STRATEGIC_BRIEFING } from "@/lib/strategic-briefing";
import { APPLY_URL } from "@/lib/links";

// The Strategic Briefing is a standalone package; its details live in
// src/lib/strategic-briefing.js, not inline here.
const BRIEFING = (
  <PhaseTable
    header={{
      label: STRATEGIC_BRIEFING.audience,
      value: STRATEGIC_BRIEFING.seatLabel,
    }}
    topPairs={[
      { label: "INVESTMENT", value: <CurrencyPrice {...STRATEGIC_BRIEFING.price} /> },
      { label: "PATHWAY", value: STRATEGIC_BRIEFING.pathway },
    ]}
    rows={[
      { label: "DURATION", value: STRATEGIC_BRIEFING.duration, inline: true },
      { label: "CASE", value: STRATEGIC_BRIEFING.case },
      { label: "NOTES", value: STRATEGIC_BRIEFING.notes },
    ]}
  />
);

const FULL = (
  <PhaseTable
    header={{ label: "INDIVIDUAL", value: "1 seat" }}
    topPairs={[
      { label: "INVESTMENT", value: <CurrencyPrice {...PRICING.fullProgram} /> },
      { label: "PATHWAY", value: "Full Program" },
    ]}
    rows={[
      { label: "DURATION", value: "4 weeks  |  8 Sessions |  2 sessions per week", inline: true },
      {
        label: "CASE",
        value:
          "This pathway is for the strategic leader who recognizes AI proficiency as a personal mandate. Across four paced weeks of private counsel, you acquire the clarity, judgment, and governance frameworks to confidently lead adoption and set the direction for the people who look to you.",
      },
      {
        label: "NOTES",
        value:
          "Full payment is required upfront to secure your place in the complete, 4-week AI Clarity for Chiefs Program.",
      },
    ]}
  />
);

const COUNCIL = (
  <PhaseTable
    header={{ label: "THE COUNCIL", value: "3 seats" }}
    topPairs={[
      { label: "INVESTMENT", value: <CurrencyPrice {...PRICING.council} /> },
      { label: "PATHWAY", value: "The Council" },
    ]}
    rows={[
      { label: "DURATION", value: "4 weeks  |  8 Sessions |  2 sessions per week", inline: true },
      {
        label: "COMMITMENT",
        value: "3 Representatives (Minimum 2 must be Executive/Leadership level).",
      },
      {
        label: "CASE",
        value:
          "This pathway is for organizations and high-trust groups of three: an executive team, a founder and two lieutenants, partners in a venture, or leaders who already move together. The Council ensures all three achieve a unified understanding of AI risk and value, eliminating siloed thinking and building the collective judgment needed to direct a shared future.",
      },
      {
        label: "NOTES",
        value: (
          <>
            The Council combines
            <span className="group-img ml"> </span>group and individual sessions for the
            best outcomes. The fee covers the full engagement for three seats, and at
            least 2 representatives should be Executive/Leadership level. Please indicate
            this preference on your application if interested.
          </>
        ),
      },
    ]}
  />
);

const TABS = [
  { label: STRATEGIC_BRIEFING.pathway, icon: "/images/target.png", content: BRIEFING },
  { label: "Full Program", icon: "/images/star.png", content: FULL },
  { label: "The Council", icon: "/images/people.png", content: COUNCIL },
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
              based on your level of strategic commitment and the people you bring with
              you.
            </p>
          </div>

          <div className="flex w-full flex-col gap-6">
            <div className="mt-12 pb-4 text-xs">
              * Click on the tabs to view information *
            </div>
            <Tabs tabs={TABS} defaultIndex={1} />
          </div>

          <div className="mx-auto max-w-87.5 pt-12">
            <Button href={APPLY_URL} external variant="button" className="w-full">
              APPLY TO SEE IF YOU QUALIFY
            </Button>
          </div>
        </PaddingSection>
      </Container>
    </Section>
  );
}
