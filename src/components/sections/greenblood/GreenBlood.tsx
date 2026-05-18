import Image from "next/image";

import Button from "@/components/ui/button/Button";

export default function GreenBloodSection() {
  return (
    <section
      id="greenblood"
      className="relative scroll-mt-24 overflow-hidden bg-background py-14 text-secondary md:scroll-mt-28 md:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="grid items-start gap-16 lg:grid-cols-[0.95fr_1fr]">
          <div className="relative order-1 lg:order-none">
            <div className="sticky top-28 overflow-hidden   ">
              <div className="relative h-[min(420px,70vh)] overflow-hidden md:h-[520px] lg:h-[620px]">
                <Image
                  src="/images/GB1.jpg"
                  alt="Chlorophyll vs Hemoglobin"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 " />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-2 space-y-14 lg:order-none">
            <div>
              <span className="inline-flex items-center gap-2 text-xl font-medium tracking-wide text-foreground md:text-base">
                <span aria-hidden>•</span>
                The Science Behind Wheatgrass
                <span aria-hidden>•</span>
              </span>
              <h2 className="mt-6 max-w-3xl font-semibold leading-[1.02] tracking-tight text-secondary">
                Did you know that wheatgrass is molecularly almost identical to
                human blood?
              </h2>
            </div>
            <div className="border-l border-foreground pl-6">
              <p className="mt-6 text-base leading-[2] text-secondary">
                The only major difference between a molecule of chlorophyll and
                hemoglobin is their central atom: chlorophyll contains
                magnesium, while hemoglobin contains iron. This structural
                mimicry allows wheatgrass to be absorbed rapidly, helping to
                build healthy red blood cells and improve oxygenation throughout
                the body.
              </p>
            </div>
            <Button
              href="/green-blood"
              theme="foreground"
              className="rounded-full !px-8 !py-4 text-base font-medium"
              text="Learn More"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
