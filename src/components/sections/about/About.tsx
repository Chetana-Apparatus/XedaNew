"use client";

import Image from "next/image";

import Button from "@/components/ui/button/Button";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function About() {
  const { openContactModal } = useContactModal();

  return (
    <section id="about" className="bg-background py-12 md:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 md:px-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-12">
        <div className="relative overflow-hidden lg:order-2">
          <Image
            src="/images/About1.webp"
            alt="Xeda Farm Wheatgrass"
            width={1200}
            height={1200}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <div className="lg:order-1">
          <h2 className="inline-flex items-center gap-2  tracking-[0.2em] md:normal-case md:tracking-normal text-primary">
            About Xeda Farm ?
          </h2>

          <p className="mt-4 leading-[1.05] tracking-tight text-olive underline decoration-olive decoration-1 underline-offset-4">
            Pure Wellness Grown from Nature.
          </p>

          <p className="mt-6 leading-8 text-secondary">
            At XEDA FARM, with{" "}
            <span className="  px-2 py-1 font-bold text-secondary">
              Precision Farming
            </span>
            we cultivate premium wheatgrass through sustainable, small batch
            farming to deliver the purest form of green nutrition.
          </p>

          <p className="mt-4 text-base leading-8 text-secondary">
            Every tray is carefully grown, harvested, and cold pressed with
            precision to preserve freshness, nutrient density, and natural
            vitality creating not just a product, but a lifestyle rooted in
            clean and conscious wellness.
          </p>

          <Button
            onClick={openContactModal}
            theme="foreground"
            className="relative z-10 mt-8"
          >
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
}
