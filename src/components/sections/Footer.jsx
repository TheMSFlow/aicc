import Marquee from "@/components/Marquee";

const THANKS =
  "thank you     merci     gracias    danke     xièxiè     obrigado     arigatō     grazie     dankie     takk     Dankjewel";

export default function Footer() {
  return (
    <footer className="w-full">
      <Marquee duration={30}>
        <span className="whitespace-pre pr-[5vw] font-inter text-[5vw] font-extralight text-grey-100">
          {THANKS}
        </span>
      </Marquee>
    </footer>
  );
}
