"use client";

import { useEffect } from "react";

import "img-comparison-slider/dist/styles.css";
import "img-comparison-slider";

import Button from "@/components/ui/button/Button";

type ComparisonSlider = HTMLElement & { value: number };

export default function GreenBloodSection() {
  useEffect(() => {
    let direction = 1;
    let value = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    const slider = document.querySelector(
      ".greenblood-comparison",
    ) as ComparisonSlider | null;

    if (slider) {
      slider.value = 0;
    }

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        const activeSlider = document.querySelector(
          ".greenblood-comparison",
        ) as ComparisonSlider | null;

        if (!activeSlider) return;

        value += direction * 5;

        if (value >= 100) {
          direction = -1;
        }

        if (value <= 0) {
          direction = 1;
        }

        activeSlider.value = value;
      }, 50);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="greenblood"
      className="relative scroll-mt-24 bg-background py-12 text-secondary md:scroll-mt-28 md:py-16"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 md:px-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-12">
        {/* IMAGE */}
        <div className="relative order-1 min-w-0 lg:order-none">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img-comparison-slider
              value="0"
              className="greenblood-comparison block w-full overflow-hidden rounded-[2rem]"
            >
              <figure slot="first" className="relative m-0">
                {/* biome-ignore lint/performance/noImgElement: native img required for img-comparison-slider slots */}
                <img
                  src="/images/bb.jpg"
                  alt="Chlorophyll molecular structure"
                  className="block h-auto w-full object-contain"
                />
              </figure>

              <figure slot="second" className="relative m-0">
                {/* biome-ignore lint/performance/noImgElement: native img required for img-comparison-slider slots */}
                <img
                  src="/images/hh.jpg"
                  alt="Hemoglobin molecular structure"
                  className="block h-auto w-full object-contain"
                />
              </figure>
            </img-comparison-slider>
          </div>
        </div>

        {/* CONTENT */}
        <div className="order-2 min-w-0 lg:order-none">
          <h2 className="font-semibold leading-[1.02] tracking-tight text-primary">
            Did you know that wheatgrass is molecularly almost identical to
            human blood?
          </h2>

          <div className="mt-6 border-l border-foreground pl-6">
            <p className="text-base leading-8 text-primary">
              The only major difference between a molecule of chlorophyll and
              hemoglobin is their central atom: chlorophyll contains magnesium,
              while hemoglobin contains iron. This structural mimicry allows
              wheatgrass to be absorbed rapidly, helping to build healthy red
              blood cells and improve oxygenation throughout the body.
            </p>
          </div>

          <Button
            href="/green-blood"
            theme="foreground"
            text="Learn More"
            className="relative z-10 mt-8"
          />
        </div>
      </div>
    </section>
  );
}
