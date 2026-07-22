import Image from "next/image";

const APPLY_URL = "https://intelligence.michaelsteve.com/form/program/aicc";
const INQUIRY_URL = "https://intelligence.michaelsteve.com/form/inquiry?src=AICC";
const STUDIO_URL = "https://michaelsteve.com";
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full px-4 pb-4 pt-8 md:px-6 md:pb-6">
      {/* Floating frosted panel — same glass treatment as the Menu bar */}
      <div className="mx-auto flex w-full max-w-[75rem] flex-col gap-5 rounded-2xl bg-grey-90 px-6 py-6 shadow-[0_4px_4px_#00000040] backdrop-blur-[5px] md:flex-row md:items-center md:justify-between">
        <Image
          src="/images/aicc_mobile.svg"
          alt="AI Clarity for Chiefs"
          width={295}
          height={48}
          className="h-auto w-[180px]"
        />

        <nav className="flex items-center gap-6 font-inter text-sm text-blue-200 max-md:flex-wrap max-md:gap-x-5 max-md:gap-y-2">
          <a
            href={INQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-accent"
          >
            Email for inquiries
          </a>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-accent"
          >
            Apply Now
          </a>
          <a
            href={STUDIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-accent"
          >
            <span className="text-blue-200/70">
              © {YEAR} Michael Steve Clarity Studio
            </span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
