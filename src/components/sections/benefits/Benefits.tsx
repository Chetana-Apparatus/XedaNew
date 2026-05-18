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
        "relative scroll-mt-24 bg-secondary py-14 md:scroll-mt-28 md:py-20 lg:py-24",
        variant === "full" && " mt-5 pt-32 md:pt-36",
      )}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.055]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xl font-medium leading-relaxed tracking-[0.2em] text-foreground md:normal-case md:tracking-normal">
            <span aria-hidden className="shrink-0">
              •
            </span>

            <span className="shrink-0">
              {variant === "full" ? "All benefits" : "Benefits"}
            </span>

            <span aria-hidden className="shrink-0">
              •
            </span>
          </p>

          <h2 className="mt-4 font-semibold leading-[1.05] tracking-tight text-background md:mt-5">
            what you need to know
          </h2>

          <p className="mt-3 leading-relaxed text-background md:mt-4 md:leading-relaxed">
            Click a question to expand the answer. Refresh the page to discover
            different benefit cards.
          </p>
        </div>

        {/* Desktop */}
        <div className="mt-9 hidden gap-3 md:mt-11 md:grid md:grid-cols-2 md:gap-4 lg:mt-12 lg:gap-5">
          <div className="flex min-w-0 flex-col gap-2.5 md:gap-3 lg:gap-3.5">
            {leftColumn.map((item, i) => (
              <BenefitCard
                key={item.slug}
                index={i}
                title={item.question}
                description={item.answer}
                evidence={item.evidence}
                href={item.url}
              />
            ))}
          </div>

          <div className="flex min-w-0 flex-col gap-2.5 md:gap-3 lg:gap-3.5">
            {rightColumn.map((item, j) => (
              <BenefitCard
                key={item.slug}
                index={j}
                title={item.question}
                description={item.answer}
                evidence={item.evidence}
                href={item.url}
              />
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-9 flex flex-col gap-2.5 md:hidden">
          {list.map((item, i) => (
            <BenefitCard
              key={item.slug}
              index={i}
              title={item.question}
              description={item.answer}
              evidence={item.evidence}
              href={item.url}
            />
          ))}
        </div>

        {/* Button */}
        {variant === "home" ? (
          <div className="mt-9 flex justify-center md:mt-11 lg:mt-12">
            <Button
              href="/benefits"
              theme="foreground"
              className="min-w-[10.5rem] font-semibold tracking-tight"
            >
              Learn More
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
