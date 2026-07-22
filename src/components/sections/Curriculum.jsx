import { Section, Container, PaddingSection, SectionLabel, DisplayHeading } from "@/components/Layout";
import Image from "next/image";
import Tabs from "@/components/interactions/Tabs";
import PhaseTable from "@/components/PhaseTable";

const UNDERSTAND = (
  <PhaseTable
    header={{ label: "UNDERSTAND", value: "AI Foundations" }}
    topPairs={[
      { label: "MODE", value: "Conversational" },
    ]}
    rows={[
      {
        label: "DURATION",
        valueIcon: "/images/group.svg",
        value: "S1 - 90mins →  Session: 60mins |  Q&A: 30mins",
        inline: true,
      },
      {
        label: "OVERVIEW",
        value:
          "This 90-minute session is a high-context, jargon-free strategic briefing designed to cut through industry noise and establish immediate clarity. At the end of the session, you'll be able to use insights gathered against your current position to gain clarity on your next steps.",
      },
      {
        label: "KEY TOPICS",
        value: (
          <>
            1. What is AI: Foundational Concepts &amp; Capabilities (LLM, Generative AI, Predictive AI)
            <br />
            2. The AI Value Curve: Quantifying potential impact vs. liability in your domain
            <br />
            3. Communicating with Intelligent Systems
            <br />
            4. AI Governance &amp; Data Security
            <br />
            5. The Executive Mandate: Defining strategic questions and the leadership mindset required to drive responsible adoption.
          </>
        ),
      },
      {
        label: "OUTCOMES",
        value: (
          <>
            1. Understand core AI concepts in simple terms
            <br />
            2. Get answers to top AI questions on your mind
            <br />
            3. Gather enough insights to form an unbiased perspective about AI and advance with confidence.
          </>
        ),
      },
    ]}
  />
);

const EXPERIMENT = (
  <PhaseTable
    header={{ label: "EXPERIMENT", value: "AI Labs" }}
    topPairs={[
      { label: "MODE", value: "Classroom - Hands-on" },
    ]}
    rows={[
      {
        label: "DURATION",
        valueIcon: "/images/group.svg",
        value: "3 Sessions (S2, S3, S4) spread over 2 weeks.",
        inline: true,
      },
      {
        label: "OVERVIEW",
        value:
          "This paced, three-session lab provides a safe AI environment for experimentation, taken as deep as you want it to go. We begin with the two most important topics: data safety (where the biggest risks are) and expert communication skills (how to get the highest quality output). You'll spend time safely testing AI against the tasks that slow you down, finishing with a clear, validated plan for your Personal Adoption.",
      },
      {
        label: "KEY TOPICS",
        value: (
          <>
            Session 2: Data Safety and Trust Validation → 60mins
            <br />
            Session 3: Efficient AI Communication &amp; Quality Output → 90mins
            <br />
            Session 4: Controlled Experimentation using Your Current Workflow as Case Study → 90mins
          </>
        ),
      },
      {
        label: "OUTCOMES",
        value: (
          <>
            1. Establish a secure environment for testing, safe data handling, and quality outputs.
            <br />
            2. Achieve high-level fluency in AI communication skills.
            <br />
            3. Test and validate AI&rsquo;s ability to solve your high-priority pain points.
          </>
        ),
      },
    ]}
  />
);

const GOVERN = (
  <PhaseTable
    header={{ label: "GOVERN", value: "AI Leader" }}
    topPairs={[
      { label: "MODE", value: "Boardroom - Strategic" },
    ]}
    rows={[
      {
        label: "DURATION",
        valueIcon: "/images/group.svg",
        value: "3 Sessions (S5, S6, S7) spread over 2 weeks.",
        inline: true,
      },
      {
        label: "OVERVIEW",
        value:
          "This final arc is your strategic capstone, designed to convert your new AI clarity into leadership and influence. We focus on spotting high-value opportunities, extracting value deliberately, managing risk, and understanding the human barriers to adoption. You will exit with frameworks to confidently champion AI and lead your next strategic move.",
      },
      {
        label: "KEY TOPICS",
        value: (
          <>
            Session 5: AI Value Creation → 90mins
            <br />
            Session 6: AI Ethics &amp; Risk Management → 60mins
            <br />
            Session 7: Leadership &amp; Advocacy → 90mins
          </>
        ),
      },
      {
        label: "OUTCOMES",
        value: (
          <>
            1. Identify high-value areas across your domain where AI will deliver the greatest return.
            <br />
            2. Define the foundational strategic questions and frameworks needed to launch pilots in your organization or domain.
            <br />
            3. Lead and advocate for responsible adoption by effectively influencing technical teams, management, and culture.
          </>
        ),
      },
      {
        label: "FINAL SESSION",
        valueIcon: "/images/group.svg",
        value: "Program Review & Next Steps → 90mins",
        inline: true,
      },
    ]}
  />
);

const TABS = [
  { label: "Understand", icon: "/images/chat.png", content: UNDERSTAND },
  { label: "Experiment", icon: "/images/lab.png", content: EXPERIMENT },
  { label: "Govern", icon: "/images/Governance-kit.png", content: GOVERN },
];

export default function Curriculum() {
  return (
    <Section id="curriculum" tabIndex={0}>
      <Container size="small">
        <PaddingSection>
          <div className="flex w-full flex-col items-start justify-center gap-4">
            <SectionLabel>AI CLARITY CURRICULUM</SectionLabel>
            <DisplayHeading>
              AI Clarity for Chiefs is a paced, four-week journey through three arcs,
              expertly tailored to your role and domain, requiring no prior technology
              background.
            </DisplayHeading>
          </div>

          <div className="flex w-full flex-col gap-6">
            <div className="mt-12 pb-4 text-xs">
              * Click on the tabs to view information *
            </div>
            <Tabs tabs={TABS} defaultIndex={0} />
            <div className="flex flex-row items-center gap-4 pt-4 font-display">
              <Image src="/images/group.svg" alt="Council Group Session" width={28} height={28} />
              <div>Council Group Session</div>
            </div>
          </div>
        </PaddingSection>
      </Container>
    </Section>
  );
}
