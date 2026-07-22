import Image from "next/image";
import { Section, Container, PaddingSection, SectionLabel } from "@/components/Layout";

const HIGHLIGHTS = [
  {
    icon: "/images/chat.png",
    title: "Tailored 1:1 Strategic Coaching",
    text: "This is not a generic program. Your curriculum is dynamically tailored to your specific C-suite role, industry, and strategic priorities. We strip away the noise to focus exclusively on the use cases, risks, and leadership questions that matter to your P&L and your governance mandate.",
  },
  {
    icon: "/images/lab.png",
    title: "Personal Adoption Pilot",
    text: 'Execute a controlled "mini-project" to rigorously test AI capabilities against your actual workflow. You will experiment with secure tools to handle a specific pain point, observing the quality of the output and the efficiency gains. This hands-on validation provides the data you need to make a definitive decision on your personal adoption pace.',
  },
  {
    icon: "/images/project.png",
    title: "Post-Program Strategic Capstone",
    text: "Translate your learning into action in the following 3 months. After the 4-week program, you will select one of six distinct capstone options and apply it to your preferred environment (corporate workplace, personal business, consulting practice, or your wider platform). You drive the research and strategy development to ensure you emerge as a true AI leader, supported by our expert strategic counsel to refine your final output.",
  },
  {
    icon: "/images/Governance-kit.png",
    title: "Proprietary Governance & Policy Toolkit",
    text: 'Don\'t start from scratch. Gain exclusive access to our library of "Board-Ready" frameworks, including risk assessment matrices, ethical usage checklists, and policy templates. These tools allow you to immediately operationalize responsible AI within your teams.',
  },
  {
    icon: "/images/Access.png",
    title: "6-Month Strategic Intelligence Access",
    text: "AI evolves daily. Your investment includes 6 months of extended access, keeping you current with curriculum updates, session recordings, and curated intelligence on the latest frameworks and regulatory shifts.",
  },
];

export default function Highlights() {
  return (
    <Section tabIndex={0}>
      <Container size="small">
        <PaddingSection>
          <div className="flex w-full flex-col items-start justify-start gap-12">
            <div className="flex w-full flex-col items-start justify-center gap-4">
              <SectionLabel as="h2">PROGRAM HIGHLIGHTS</SectionLabel>
              <p className="relative font-inter text-5xl font-semibold leading-[1.2] max-lg:text-4xl max-md:text-3xl">
                Tailored counsel and the high-impact resources required to translate
                clarity into immediate executive action.
              </p>
            </div>

            <div className="grid w-full grid-cols-2 gap-8 max-md:grid-cols-1">
              {HIGHLIGHTS.map((h) => (
                <div key={h.title} className="w-full">
                  <div className="flex w-full items-center justify-start gap-2 bg-[#a9a9a926] p-4">
                    <Image src={h.icon} alt="" width={48} height={48} className="flex-none" />
                    <div className="text-base font-medium">{h.title}</div>
                  </div>
                  <p className="px-6 py-2">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </PaddingSection>
      </Container>
    </Section>
  );
}
