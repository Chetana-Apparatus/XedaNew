"use client";

import { useEffect, useMemo, useState } from "react";
import BenefitCard from "@/components/common/cards/BenefitCard";
import Button from "@/components/ui/button/Button";
import { benefits } from "@/data/benefits";
import { cn } from "@/lib/utils";

type Variant = "home" | "full";

export default function Benefits({ variant = "home" }: { variant?: Variant }) {
  const [homeSix, setHomeSix] = useState<(typeof benefits)[number][]>([]);

  useEffect(() => {
    if (variant !== "home") return;

    // Shuffle benefits randomly
    const shuffled = [...benefits].sort(() => Math.random() - 0.5);

    // Take first 6 random cards
    setHomeSix(shuffled.slice(0, 6));
  }, [variant]);

  const list = variant === "home" ? homeSix : benefits;

  const [leftColumn, rightColumn] = useMemo(() => {
    const mid = Math.ceil(list.length / 2);

    return [list.slice(0, mid), list.slice(mid)] as const;
  }, [list]);

  return (
    <section
      id="benefits"
      className={cn(
        "benefits-section-gradient relative scroll-mt-24 border-0 py-10 md:scroll-mt-28 md:py-14 lg:py-16",
        variant === "full" && "mt-5 pt-32 md:pt-36",
      )}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.055]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1  font-medium leading-relaxed tracking-[0.2em] text-black md:normal-case md:tracking-normal"></p>

          <h2 className="mt-0 leading-[1.05] tracking-tight text-background md:mt-6">
            What You Need To Know ?
          </h2>
        </div>

        {/* Desktop */}
        <div className="mt-6 hidden gap-3 md:mt-8 md:grid md:grid-cols-2 md:gap-3 lg:mt-10 lg:gap-4">
          <div className="flex min-w-0 flex-col gap-2.5 md:gap-3 lg:gap-3.5">
            {leftColumn.map((item) => (
              <BenefitCard
                key={item.slug}
                title={item.question}
                description={item.answer}
                evidence={item.evidence}
                href={item.url}
              />
            ))}
          </div>

          <div className="flex min-w-0 flex-col gap-2.5 md:gap-3 lg:gap-3.5">
            {rightColumn.map((item) => (
              <BenefitCard
                key={item.slug}
                title={item.question}
                description={item.answer}
                evidence={item.evidence}
                href={item.url}
              />
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-6 flex flex-col gap-2.5 md:hidden">
          {list.map((item) => (
            <BenefitCard
              key={item.slug}
              title={item.question}
              description={item.answer}
              evidence={item.evidence}
              href={item.url}
            />
          ))}
        </div>

        {/* Button */}
        {variant === "home" ? (
          <div className="mt-6 flex justify-center md:mt-8 lg:mt-10">
            <Button href="/benefits" theme="light" className="min-w-[10.5rem]">
              Learn More
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
