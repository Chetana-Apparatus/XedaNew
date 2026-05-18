"use client";

import Button from "@/components/ui/button/Button";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function Hero() {
  const { openContactModal } = useContactModal();

  return (
    <section
      id="home"
      className="relative isolate flex min-h-dvh min-h-screen w-full items-end overflow-hidden pb-14 pt-24 md:pb-20 md:pt-28"
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          aria-label="Hero background video"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-[1] bg-primary/45" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl text-left">
          <h1 className="leading-[1.1] text-background">
            Precision-grown wheatgrass shots for clean daily wellness, energy,
            and performance.
          </h1>

          <Button
            onClick={openContactModal}
            theme="foreground"
            className="mt-8 !rounded-full !px-8 !py-4 text-base font-medium md:mt-10"
          >
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
}
