"use client";

import Image from "next/image";

import Button from "@/components/ui/button/Button";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function About() {
  const { openContactModal } = useContactModal();

  return (
    <section id="about" className="bg-background py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-4 md:px-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12">
        <div className="relative overflow-hidden lg:order-2">
          <Image
            src="/images/About.webp"
            alt="Xeda Farm Wheatgrass"
            width={1200}
            height={1200}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <div className="lg:order-1">
          <span className="inline-flex items-center gap-2 text-xl font-medium uppercase tracking-[0.2em] md:normal-case md:tracking-normal md:text-foreground">
            <span aria-hidden>•</span>
            About Xeda Farm
            <span aria-hidden>•</span>
          </span>

          <h2 className="mt-6 font-semibold leading-[1.05] tracking-tight text-secondary">
            Pure wellness grown
            <span className="block text-secondary">from nature.</span>
          </h2>

          <p className="mt-8 leading-8 text-secondary">
            At Xeda Farm, we cultivate premium wheatgrass through sustainable,
            small-batch farming to deliver the purest form of green nutrition.
          </p>

          <p className="mt-6 text-base leading-8 text-secondary">
            Every bottle is carefully grown, harvested, and cold-pressed with
            precision to preserve freshness, nutrient density, and natural
            vitality — creating not just a product, but a lifestyle rooted in
            clean and conscious wellness.
          </p>

          <Button
            onClick={openContactModal}
            theme="foreground"
            className="relative z-10 mt-10 !px-8 !py-4 text-base font-medium"
          >
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
}
