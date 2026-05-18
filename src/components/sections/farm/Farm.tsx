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

function StatStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-4 w-4 shrink-0 md:h-5 md:w-5", className)}
      role="presentation"
    >
      <path
        fill="currentColor"
        d="M12 2.5 14.1 9H21l-5.6 4.1 2.1 6.9L12 16.2 6.4 20l2.1-6.9L3 9h6.9L12 2.5z"
      />
    </svg>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2 whitespace-nowrap text-base md:text-lg">
      <span className="font-medium tracking-tight text-foreground">
        {value}
      </span>
      <span className="text-background/80" aria-hidden>
        /
      </span>
      <span className="font-normal lowercase tracking-wide text-background">
        {label}
      </span>
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
        className="flex shrink-0 items-center justify-center px-10 md:px-14"
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
      className="relative overflow-hidden bg-background py-20 md:py-28"
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
        <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* left content */}
          <div className="order-2 max-w-2xl lg:order-1">
            <span className="inline-flex items-center gap-2 text-xl font-medium uppercase tracking-[0.2em]  md:normal-case md:tracking-normal md:text-foreground">
              <span>•</span>
              What’s Inside
              <span>•</span>
            </span>

            <h2 className="mt-6 max-w-3xl font-semibold leading-[1.05] tracking-tight text-secondary">
              Xeda Farm Wheatgrass is packed with essential nutrients your body
              needs daily.
            </h2>

            <p className="mt-6 max-w-xl leading-relaxed text-secondary">
              Every fresh wheatgrass shot delivers a concentrated blend of
              vitamins, minerals, amino acids, enzymes, and chlorophyll designed
              to naturally support energy, recovery, immunity, and overall
              wellness.
            </p>

            <Button
              text="Explore Nutrition"
              theme="foreground"
              href="/nutrition"
              className="mt-10 !rounded-full !px-8 !py-4 text-sm font-semibold tracking-wide"
            />
          </div>

          {/* right feature card */}
          <Card className="order-1 overflow-hidden rounded-none border-0 bg-foreground lg:order-2">
            <div className="relative h-[320px] overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src="/images/Shot.jpg"
                  alt="Fresh Wheatgrass"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <CardContent className="space-y-6 p-8 md:p-10">
              <p className="max-w-md  font-medium leading-[1.2] tracking-tight text-secondary">
                Naturally rich in enzymes, amino acids, vitamins, and minerals
                that help fuel your body daily.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="relative z-10 mt-20 flex w-full items-center justify-center overflow-hidden bg-secondary py-6 md:mt-24 md:py-8">
        <Marquee speed={40} gradient={false} pauseOnHover autoFill>
          {stats.map((item) => (
            <StatMarqueeSegment
              key={item.label}
              value={item.value}
              label={item.label}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
