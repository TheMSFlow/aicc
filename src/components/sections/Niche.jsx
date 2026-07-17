import {
  Section,
  Container,
  SectionLabel,
  DisplayHeading,
} from "@/components/Layout";
import Marquee from "@/components/Marquee";
import Button from "@/components/Button";

const EXECS =
  "CEO     COO     CFO    CTO     CIO     CMO     CHRO     CSO     CRO     CLO     GM     MD     VP     ";
const APPLY_URL = "https://intelligence.michaelsteve.com/form/program/aicc";

export default function Niche() {
  return (
    <Section id="niche" tabIndex={0}>
      <Container size="small">
        {/* padding-section top (no bottom padding) */}
        <div className="flex w-full flex-col items-start justify-center gap-8 pt-32 max-lg:pt-24 max-md:pt-16">
          <div className="flex w-full flex-col items-start justify-center gap-4">
            <SectionLabel>WHO IS IT FOR?</SectionLabel>
            <DisplayHeading>
              The AI Clarity for Chiefs program is designed for executives and
              strategic leaders who know that AI proficiency is the
              non-negotiable next layer of leadership.
            </DisplayHeading>
            <p className="text-sm md:text-base">
              <strong>Every leader is now an AI leader</strong>...but the
              mandate extends far beyond profits and productivity. Today&rsquo;s
              leaders must be informed and intentional, establishing the
              governance, ethics, and security required to ensure AI serves both
              the workplace and humanity responsibly.
            </p>
          </div>
        </div>
      </Container>

      {/* Scrolling executive titles */}
      <div className="mt-8 w-full">
        <Marquee duration={22} itemClassName="bg-[#a9a9a926] py-4">
          <span className="whitespace-pre font-inter text-[5vw] font-extralight text-grey-100">
            {EXECS}
          </span>
        </Marquee>
      </div>

      {/* Pillars */}
      <div className="px-6 pb-32 max-md:px-5 max-md:pb-16">
        <Container size="small">
          <p className="my-4 mb-12 max-w-3xl text-xs">
            <strong>Your title is not listed?</strong> This list includes common
            examples and is <strong>not exhaustive.</strong> We encourage
            applications from <strong>Executive Leaders</strong> and{" "}
            <strong>Managers </strong> who hold significant P&amp;L or strategic
            decision-making authority.{" "}
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lilac-100 underline"
            >
              Apply to see if you qualify
            </a>
          </p>
          <p className="text-sm md:text-base">
            The program equips you to move beyond observation and speculation,
            ensuring you confidently lead in this new era by focusing on three
            essential pillars:
          </p>
          <ul className="mt-4 flex w-full list-[square] flex-col gap-4 pl-6">
            <li>
              <strong>Foundational Clarity:</strong> Gain the non-technical
              fundamentals of AI that enables you move from ambiguity to
              informed decision-making regarding your level of adoption and
              rules of engagement.
            </li>
            <li>
              <strong>Practical Productivity:</strong> Achieve hands-on mastery
              in a safe, secure environment, using your toughest daily
              challenges as use cases. You will validate AI&#39;s potential and
              gain the practical fluency needed to confidently integrate it into
              your personal workflow when you are ready.
            </li>
            <li>
              <strong>Strategic Mandate:</strong> Emerge as an AI Value Creator
              and Ethical Champion, equipped to protect company assets (data and
              talent) and strategically position your firm for success by
              leading the essential cultural and strategic changes.
            </li>
          </ul>
        </Container>
        <div className="mx-auto max-w-[350px] pt-12">
          <Button href={APPLY_URL} external variant="button" className="w-full">
            APPLY TO SEE IF YOU QUALIFY
          </Button>
        </div>
      </div>
    </Section>
  );
}
