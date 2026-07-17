import { Section, Container, PaddingSection, SectionLabel } from "@/components/Layout";
import { AccordionItem } from "@/components/interactions/Accordion";

const FAQS = [
  {
    q: "Who is the ideal candidate for this program?",
    a: "The program is engineered for Strategic Leaders across all industries who have a minimum of 10 years of professional experience. It is designed for those who hold decision-making authority and recognize the urgent need to acquire strategic AI fluency.",
  },
  {
    q: "I am not a technical leader. Do I need coding or tech experience?",
    a: "Absolutely not. This program is designed for strategy and leadership, not engineering. You will learn to command the technology, mitigate risks, and spot value. These are skills far more valuable to a leader than coding.",
  },
  {
    q: 'What is the difference between the "Strategic Briefing" and the "Full Program"?',
    a: "The Strategic Briefing ($500) is a single, high-impact session for leaders who need immediate clarity and answers before committing further. The Full Program ($3,000) is the complete 4-week transformation, including the hands-on AI Labs, strategic governance frameworks, and the post-program Capstone.",
  },
  {
    q: "Do you offer payment plans or installments?",
    a: (
      <>
        We do not offer installments, but we do offer phased enrollment for leaders who
        wish to pace their investment and schedule. While the Full Program ($3,000) offers
        the best value, you may choose to enroll in specific phase blocks:
        <br />
        <br />
        <strong>Option 1:</strong> Begin with the Strategic Briefing (AI Foundations) for
        $500. When ready, enroll in the remainder of the program for $2,500.
        <br />
        <br />
        <strong>Option 2:</strong> Complete Phases 1 &amp; 2 (AI Foundations + AI Labs) for
        $1,500. When ready, enroll in Phase 3 (AI Leader) for $1,500.
        <br />
        <br />
        Please note that specific high-value assets are tied to program progression:
        <br />
        - The Personal Adoption Pilot is conducted exclusively during Phase 2.
        <br />- The Strategic Capstone, Governance Toolkit, and 6-Month Intelligence Access
        are unlocked only upon completion of all three phases.
      </>
    ),
  },
  {
    q: "What is the time commitment?",
    a: "The program is an accelerated 4-week sprint consisting of 8 live sessions. To respect your time while ensuring depth, the curriculum uses a mixture of 60-minute and 90-minute strategic sessions.",
  },
  {
    q: "How are the sessions scheduled?",
    a: "To ensure consistent momentum, we offer dedicated Executive Windows. You can select a recurring slot that fits your workflow (Mon & Wed or Tue & Thu). Weekend intensive slots are also available on Saturdays. Once accepted, we will secure the recurring window that best aligns with your calendar.",
  },
  {
    q: "Can I bring my team?",
    a: "For the Individual Tracks, the focus is on your personal leadership evolution. However, for companies wishing to align multiple stakeholders (e.g., CFO, CTO, and COO), we offer the Enterprise Track ($10,000). This cohort-based approach focuses on cross-functional alignment and unified roadmap creation.",
  },
  {
    q: 'How is my data protected during the hands-on "AI Labs"?',
    a: 'Security is our primary operating principle. All hands-on experimentation is conducted using enterprise-grade platforms that contractually guarantee your data is not used to train public models. You will also learn our proprietary "Safe-Data" protocols to prevent inadvertent leakage.',
  },
  {
    q: "What are the key highlights of the program experience?",
    a: (
      <>
        The program is designed to deliver tangible assets, not just theory. Key highlights
        include:
        <br />
        <strong>Tailored 1:1 Strategic Coaching</strong> customized to your specific role.
        <br />
        <strong>Personal Adoption Pilot</strong> to validate AI productivity in your own
        workflow.
        <br />
        <strong>Proprietary Governance Toolkit</strong> containing Board-ready policy
        frameworks.
        <br />
        <strong>Strategic Capstone Project</strong> where you define a major organizational
        asset with expert counsel.
        <br />
        <strong>6-Month Extended Access</strong> to our strategic intelligence learning
        center.
      </>
    ),
  },
  {
    q: "What happens after the 4 weeks?",
    a: "Your transformation continues. You will have 2–3 months of Strategic Counsel support to finalize your Capstone project, plus 6 months of extended access to our Learning Center for updates on the rapidly changing AI landscape.",
  },
];

export default function Faq() {
  return (
    <Section id="faq" tabIndex={0}>
      <Container size="small">
        <PaddingSection>
          <div className="flex w-full flex-col items-center gap-8">
            <SectionLabel>FREQUENTLY ASKED QUESTIONS</SectionLabel>
            <ul className="flex w-full list-none flex-col gap-2 rounded-[20px] bg-[linear-gradient(168.08deg,#860471,#6368da)] p-2 pl-2">
              {FAQS.map((f) => (
                <li key={f.q} className="w-full">
                  <AccordionItem question={f.q}>{f.a}</AccordionItem>
                </li>
              ))}
            </ul>
          </div>
        </PaddingSection>
      </Container>
    </Section>
  );
}
