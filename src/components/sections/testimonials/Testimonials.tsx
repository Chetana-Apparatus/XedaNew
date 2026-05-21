"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";
import Marquee from "react-fast-marquee";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "../../ui/card/Card";

const marqueeData = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const count = testimonials.length;

  const goPrev = useCallback(() => {
    setMobileIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setMobileIndex((i) => (i + 1) % count);
  }, [count]);

  const current = testimonials[mobileIndex] ?? testimonials[0];

  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-background py-10 md:py-16"
    >
      <div className="mx-auto mb-6 max-w-4xl px-4 text-center md:mb-10">
        <h2 className="mt-2 max-md:[text-wrap:wrap] tracking-[0.06em] text-primary sm:tracking-[0.12em] md:normal-case md:tracking-normal">
          What Customers Say.
        </h2>
      </div>

      {/* Mobile: single card + lime circular controls */}
      <div className="mx-auto max-w-md px-4 pb-2 md:hidden">
        <TestimonialCard
          key={current.name + mobileIndex}
          variant="featured"
          name={current.name}
          location={current.location}
          text={current.text}
          avatar={current.avatar}
        />

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c8f06a] text-neutral-900 shadow-sm transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="h-6 w-6 stroke-[2]" aria-hidden />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c8f06a] text-neutral-900 shadow-sm transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <ChevronRight className="h-6 w-6 stroke-[2]" aria-hidden />
          </button>
        </div>
      </div>

      {/* Desktop: marquees */}
      <div className="hidden flex-col gap-5 md:flex">
        <Marquee autoFill speed={40} gradient={false} pauseOnHover>
          <div className="flex items-stretch gap-5 pr-5">
            {marqueeData.map((item) => (
              <TestimonialCard key={`top-${item.name}`} {...item} />
            ))}
          </div>
        </Marquee>

        <Marquee
          autoFill
          speed={40}
          direction="right"
          gradient={false}
          pauseOnHover
        >
          <div className="flex items-stretch gap-5 pr-5">
            {marqueeData.map((item) => (
              <TestimonialCard key={`bottom-${item.name}`} {...item} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
