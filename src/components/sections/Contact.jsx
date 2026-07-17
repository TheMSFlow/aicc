import Image from "next/image";
import { Section, Container } from "@/components/Layout";

const INQUIRY_URL = "https://intelligence.michaelsteve.com/form/inquiry?src=AICC";

export default function Contact() {
  return (
    <Section id="contact" tabIndex={0}>
      <Container size="medium">
        <div className="flex w-full flex-col items-start justify-center">
          <div className="relative flex w-full flex-col items-start">
            <a
              href={INQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative z-40 flex w-full flex-grow items-center justify-center gap-8 py-24 focus-visible:rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-white-100 max-md:flex-col max-md:gap-4"
            >
              <div className="flex flex-none items-center justify-start">
                <Image
                  src="/images/email-icon.png"
                  alt=""
                  width={100}
                  height={100}
                  className="block h-auto w-[100px] object-cover"
                />
              </div>
              <h3 className="font-inter text-5xl font-extralight text-grey-100 decoration-lilac-100 decoration-2 underline-offset-8 group-hover:underline max-md:text-3xl">
                Email for inquiries
              </h3>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
