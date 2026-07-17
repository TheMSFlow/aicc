import { Section, Container, PaddingSection, SectionLabel, DisplayHeading } from "@/components/Layout";
import Image from "next/image";
import Tabs from "@/components/interactions/Tabs";
import PhaseTable from "@/components/PhaseTable";

const GroupImg = ({ ml = false }) => (
  <span className={`group-img${ml ? " ml" : ""}`}> </span>
);

const PHASE1 = (
  <PhaseTable
    header={{ label: "PHASE 1", value: "AI Foundations" }}
    topPairs={[
      { label: "INVESTMENT", value: "$500" },
      { label: "MODE", value: "Conversational" },
    ]}
    rows={[
      {
        label: "DURATION",
        valueIcon: "/images/group.svg",
        value: "S1 - 90mins →  Session: 60mins |  Q&A: 30mins",
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
            2. The AI Value Curve: Quantifying potential business impact vs. Liability
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

const PHASE2 = (
  <PhaseTable
    header={{ label: "PHASE 2", value: "AI Labs" }}
    topPairs={[
      { label: "INVESTMENT", value: "$1000" },
      { label: "MODE", value: "Classroom - Hands-on" },
    ]}
    rows={[
      { label: "DURATION", value: "3 Sessions (S2, S3, S4) spread over 2 weeks." },
      {
        label: "OVERVIEW",
        value:
          "This rapid, three-session lab provides a safe AI environment for experimentation. We jump immediately into the two most important topics: data safety (where the biggest risks are) and expert communication skills (how to get the highest quality output). You'll spend time safely testing AI against the tasks that slow you down, enabling you to finish Phase 2 with a clear, validated plan for your Personal Adoption.",
      },
      {
        label: "KEY TOPICS",
        value: (
          <>
            <GroupImg />
            Session 2: Data Safety and Trust Validation → 60mins
            <br />
            <GroupImg />
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

const PHASE3 = (
  <PhaseTable
    header={{ label: "PHASE 3", value: "AI Leader" }}
    topPairs={[
      { label: "INVESTMENT", value: "$1500" },
      { label: "MODE", value: "Boardroom - Strategic" },
    ]}
    rows={[
      {
        label: "DURATION",
        valueIcon: "/images/group.svg",
        value: "3 Sessions (S5, S6, S7) spread over 2 weeks.",
      },
      {
        label: "OVERVIEW",
        value:
          "This final phase is your strategic capstone, designed to convert your new AI skills into organizational leadership and influence. We focus on spotting high-value opportunities, managing risk and understanding the human barriers to adoption. You will exit this phase with frameworks to confidently champion AI and lead your company's next strategic move.",
      },
      {
        label: "KEY TOPICS",
        value: (
          <>
            <GroupImg />
            Session 5: AI Value Creation → 90mins
            <br />
            <GroupImg />
            Session 6: AI Ethics &amp; Risk Management→ 60mins  •  Group Session for Enterprise  •
            <br />
            <GroupImg />
            Session 7: Leadership &amp; Advocacy → 90mins  •  Group Session for Enterprise  •
          </>
        ),
      },
      {
        label: "OUTCOMES",
        value: (
          <>
            1. Identify high-value areas across the enterprise where AI will deliver the greatest return.
            <br />
            2. Define the foundational strategic questions and frameworks needed to launch organizational pilots.
            <br />
            3. Lead and advocate for responsible adoption by effectively influencing technical teams, management, and the organizational culture.
          </>
        ),
      },
      {
        label: "FINAL SESSION",
        value: (
          <>
            <GroupImg />
            Program Review &amp; Next Steps → 90mins  •  Group Session for Enterprise  •
          </>
        ),
      },
    ]}
  />
);

const TABS = [
  { label: "Understand", icon: "/images/chat.png", content: PHASE1 },
  { label: "Experiment", icon: "/images/lab.png", content: PHASE2 },
  { label: "Govern", icon: "/images/Governance-kit.png", content: PHASE3 },
];

export default function Curriculum() {
  return (
    <Section id="curriculum" tabIndex={0}>
      <Container size="small">
        <PaddingSection>
          <div className="flex w-full flex-col items-start justify-center gap-4">
            <SectionLabel>AI CLARITY CURRICULUM</SectionLabel>
            <DisplayHeading>
              AI Clarity for Chiefs is a three-phase experience, expertly tailored to your
              executive role and industry, requiring no prior technology background.
            </DisplayHeading>
          </div>

          <div className="flex w-full flex-col gap-6">
            <div className="mt-12 pb-4 text-xs">
              * Click on the tabs to view information *
            </div>
            <Tabs tabs={TABS} defaultIndex={0} />
            <div className="flex flex-row items-center gap-4 pt-4 font-display">
              <Image src="/images/group.svg" alt="Group Session For Enterprise" width={28} height={28} />
              <div>Group Session for Enterprise</div>
            </div>
          </div>
        </PaddingSection>
      </Container>
    </Section>
  );
}
