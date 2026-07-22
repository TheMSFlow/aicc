import { Container } from "@/components/Layout";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex h-screen w-full flex-col items-start justify-center border-y-[0.625rem] border-blue-200"
    >
      <Container size="medium" hero>
        <div className="flex w-full flex-col items-center justify-center py-32 max-md:py-16">
          <div className="flex w-full flex-row items-center justify-start gap-20">
            <div className="flex w-full flex-col items-start justify-start gap-6">
              <div className="flex w-full flex-col gap-16 max-lg:gap-10">
                {/* Main heading */}
                <div className="w-full">
                  <h1 className="relative font-inter text-[4rem] font-medium leading-normal max-lg:text-[3.5rem] max-md:text-[10vw] max-md:leading-[1.2]">
                    You can only give{" "}
                    <span className="italic font-medium">clarity</span>, if you
                    have <span className="italic font-medium">clarity</span>.
                  </h1>
                </div>

                {/* Sub text — 3-col grid */}
                <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1 max-md:gap-4">
                  <div className="max-md:hidden" />
                  <p className="text-xl font-light max-md:text-lg">
                    <strong>AI Clarity For Chiefs</strong> is a four-week,
                    one-on-one executive engagement designed for C-suite
                    leaders and VIPs.
                  </p>
                  <p className="text-xl font-light max-md:text-lg">
                    Delivered through eight private online sessions, leaders
                    gain practical clarity on AI governance, risk oversight,
                    leadership alignment, and value strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
