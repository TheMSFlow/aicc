"use client";

import { useState } from "react";
import { Section, Container, PaddingSection, SectionLabel } from "@/components/Layout";
import { AccordionItem } from "@/components/interactions/Accordion";
import CurrencyPrice from "@/components/CurrencyPrice";
import { PRICING } from "@/lib/pricing";

// USD figure for the FAQPage schema (schema text is plain strings; on-page
// answers keep CurrencyPrice for location-aware display).
const usd = (n) => `$${n.toLocaleString("en-US")}`;

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
    a: (
      <>
        The Strategic Briefing (<CurrencyPrice {...PRICING.strategicBriefing} />) is a
        single, high-impact session for leaders who need immediate clarity and answers
        before committing further. The Full Program (
        <CurrencyPrice {...PRICING.fullProgram} />) is the complete 4-week engagement,
        including the guided AI Labs, strategic governance frameworks, and the
        post-program Capstone.
      </>
    ),
    plain: `The Strategic Briefing (${usd(PRICING.strategicBriefing.usd)}) is a single, high-impact session for leaders who need immediate clarity and answers before committing further. The Full Program (${usd(PRICING.fullProgram.usd)}) is the complete 4-week engagement, including the guided AI Labs, strategic governance frameworks, and the post-program Capstone.`,
  },
  {
    q: "Do you offer payment plans or installments?",
    a: (
      <>
        No. Each pathway is a single investment, paid in full to secure your seat. The
        Strategic Briefing is a complete, standalone session; the Full Program and The
        Council are paid upfront.
        <br />
        <br />
        Please note that the program&rsquo;s high-value assets, the Personal Adoption
        Pilot, the Strategic Capstone, the Governance Toolkit, and the 6-Month
        Intelligence Access, belong to the Full Program and The Council experience.
      </>
    ),
    plain:
      "No. Each pathway is a single investment, paid in full to secure your seat. The Strategic Briefing is a complete, standalone session; the Full Program and The Council are paid upfront. Please note that the program’s high-value assets, the Personal Adoption Pilot, the Strategic Capstone, the Governance Toolkit, and the 6-Month Intelligence Access, belong to the Full Program and The Council experience.",
  },
  {
    q: "What is the time commitment?",
    a: "The program is a paced 4-week engagement consisting of 8 live sessions. To respect your time while ensuring depth, the curriculum uses a mixture of 60-minute and 90-minute strategic sessions.",
  },
  {
    q: "How are the sessions scheduled?",
    a: "To ensure consistent momentum, we offer dedicated Executive Windows. You can select a recurring slot that fits your workflow (Mon & Wed or Tue & Thu). Weekend intensive slots are also available on Saturdays. Once accepted, we will secure the recurring window that best aligns with your calendar.",
  },
  {
    q: "Can I bring my team?",
    a: (
      <>
        For the individual pathways, the focus is on your personal leadership evolution.
        For organizations and high-trust groups who want to align three leaders, an
        executive team, a founder and two lieutenants, or partners who already move
        together, we offer The Council (<CurrencyPrice {...PRICING.council} />, 3 seats,
        minimum 2 at Executive/Leadership level). It blends group and individual sessions
        for cross-functional alignment and a unified direction.
      </>
    ),
    plain: `For the individual pathways, the focus is on your personal leadership evolution. For organizations and high-trust groups who want to align three leaders, an executive team, a founder and two lieutenants, or partners who already move together, we offer The Council (${usd(PRICING.council.usd)}, 3 seats, minimum 2 at Executive/Leadership level). It blends group and individual sessions for cross-functional alignment and a unified direction.`,
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
    plain:
      "The program is designed to deliver tangible assets, not just theory. Key highlights include: Tailored 1:1 Strategic Coaching customized to your specific role. Personal Adoption Pilot to validate AI productivity in your own workflow. Proprietary Governance Toolkit containing Board-ready policy frameworks. Strategic Capstone Project where you define a major organizational asset with expert counsel. 6-Month Extended Access to our strategic intelligence learning center.",
  },
  {
    q: "What happens after the 4 weeks?",
    a: "Your transformation continues. You will have 3 months of Strategic Counsel support to finalize your Capstone project, plus 6 months of extended access to our Learning Center for updates on the rapidly changing AI landscape.",
  },
];

// FAQPage structured data. String answers are reused verbatim; JSX answers
// use their `plain` mirror above.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: typeof f.a === "string" ? f.a : f.plain,
    },
  })),
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section id="faq" tabIndex={0}>
      <Container size="small">
        <PaddingSection>
          <div className="flex w-full flex-col items-center gap-8">
            <SectionLabel as="h2">FREQUENTLY ASKED QUESTIONS</SectionLabel>
            <ul className="flex w-full list-none flex-col gap-2 rounded-[20px] bg-[linear-gradient(168.08deg,#860471,#6368da)] p-2 pl-2">
              {FAQS.map((f, i) => (
                <li key={f.q} className="w-full">
                  <AccordionItem
                    question={f.q}
                    open={openIndex === i}
                    onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
                  >
                    {f.a}
                  </AccordionItem>
                </li>
              ))}
            </ul>
          </div>
        </PaddingSection>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </Section>
  );
}
