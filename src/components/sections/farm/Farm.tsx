"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

import Button from "@/components/ui/button/Button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: "20+",
    label: "Active Enzymes",
  },
  {
    value: "18",
    label: "Amino Acids",
  },
  {
    value: "12",
    label: "Essential Vitamins",
  },
  {
    value: "8",
    label: "Vital Minerals",
  },
  {
    value: "70%",
    label: "Natural Chlorophyll",
  },
  {
    value: "100%",
    label: "Fresh Daily Harvest",
  },
];

const marqueeStats = [...stats, ...stats, ...stats];

function StatStar({ className }: { className?: string }) {
  return (
    <Image
      src="/images/Xedas.svg" // add your svg inside public/images
      alt="Xeda"
      width={30}
      height={30}
      className={cn("h-12 w-12 shrink-0", className)}
    />
  );
}
function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2 whitespace-nowrap text-base md:text-lg">
      <span className="font-medium tracking-tight text-foreground">
        {value}
      </span>
      <span className="text-primary" aria-hidden>
        /
      </span>
      <span className="font-normal tracking-wide text-primary">{label}</span>
    </div>
  );
}

function StatMarqueeSegment({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex shrink-0 items-center">
      <div
        className="flex shrink-0 items-center justify-center px-6 md:px-8"
        aria-hidden
      >
        <StatStar className="text-foreground" />
      </div>
      <StatBlock value={value} label={label} />
    </div>
  );
}

export default function XedaNutritionSection() {
  return (
    <section
      id="farm"
      className="relative overflow-hidden bg-background pt-12 pb-0 md:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage: "url('/images/image.jpg')",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* left content */}
          <div className="order-2 max-w-2xl lg:order-1">
            <h2 className="inline-flex items-center gap-2   tracking-[0.2em]  md:normal-case md:tracking-normal text-primary">
              What’s Inside ?
            </h2>

            <p className="mt-4 max-w-3xl  leading-[1.05] tracking-tight text-olive">
              XEDA SHOT WheatGrass is Packed with Essential Nutrients Your Body
              Needs Daily.
            </p>

            <p className="mt-4 max-w-xl leading-relaxed text-secondary">
              Every fresh wheatgrass shot delivers a concentrated blend of
              vitamins, minerals, amino acids, enzymes, and chlorophyll designed
              to naturally support energy, recovery, immunity, and overall
              wellness.
            </p>

            <Button
              text="Explore Nutrition"
              theme="foreground"
              href="/benefits"
              className="mt-8"
            />
          </div>

          {/* right feature card */}
          <Card className="order-1 overflow-hidden rounded-none border-0 bg-foreground lg:order-2">
            <div className="relative h-[320px] overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src="/images/roots.webp"
                  alt="Fresh Wheatgrass"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <CardContent className="p-8 text-left md:p-10">
              <p className="w-full font-medium leading-[1.2] tracking-tight text-secondary">
                <span className="font-bold">High Potency</span> and Naturally
                rich in enzymes, amino acids, vitamins, and minerals that help
                fuel your body daily.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="relative z-10 mt-8 w-full border-t border-border/30 py-3 md:mt-10 md:py-4">
        <Marquee speed={40} gradient={false} pauseOnHover autoFill>
          <div className="flex items-center">
            {marqueeStats.map((item, index) => (
              <StatMarqueeSegment
                key={`${item.label}-${index}`}
                value={item.value}
                label={item.label}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
