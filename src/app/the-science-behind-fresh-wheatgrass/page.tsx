import type { Metadata } from "next";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { scienceFacts } from "@/data/data";

export const metadata: Metadata = {
  title: "The Science Behind Fresh Wheatgrass | Xeda",
  description:
    "Discover how fresh wheatgrass supports energy, detoxification, recovery, immunity, and overall wellness.",
};

export default function ScienceBehindFreshWheatgrassPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1fr]">
            <div className="order-1 min-w-0 lg:sticky lg:top-28 lg:h-fit lg:order-none">
              <div className="overflow-hidden">
                <div className="relative aspect-[3/4] min-h-[320px] w-full overflow-hidden md:min-h-[420px] lg:h-[min(850px,calc(100dvh-8rem))] lg:min-h-0">
                  <Image
                    src="/images/Science.webp"
                    alt="Xeda Farm Science"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="order-2 min-w-0 lg:order-none">
              <span className="inline-flex items-center gap-2 text-xl font-medium uppercase tracking-[0.2em] md:normal-case md:tracking-normal text-primary">
                <span aria-hidden>•</span>
                Xeda Farm Research
                <span aria-hidden>•</span>
              </span>

              <h2 className="mt-5 leading-[1.02] tracking-tight text-primary">
                The Science Behind Fresh Wheatgrass
              </h2>

              <p className="mt-6 max-w-xl text-base leading-[2] text-secondary">
                Discover how fresh wheatgrass naturally supports energy,
                detoxification, recovery, immunity, and overall wellness through
                powerful nutrients and active enzymes.
              </p>

              <div className="mt-14 flex flex-col gap-6">
                {scienceFacts.map((item, index) => (
                  <Card
                    key={item.id}
                    className="rounded-none border border-foreground/20 benefits-section-gradient text-background"
                  >
                    <CardContent className="p-8 md:p-10">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="shrink-0 text-xl tabular-nums tracking-tight font-bold text-background">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className=" leading-snug tracking-tight !font-bold text-background">
                          {item.title}
                        </p>
                      </div>

                      <div
                        className="my-6 border-t border-foreground/20"
                        aria-hidden
                      />

                      <div className="space-y-4 text-[15px] leading-[1.85] text-background md:text-base md:leading-[2]">
                        {item.paragraphs.slice(0, 2).map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
