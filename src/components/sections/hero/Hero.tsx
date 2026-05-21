"use client";

import Button from "@/components/ui/button/Button";
import { useContactModal } from "@/contexts/ContactModalContext";
export default function Hero() {
  const { openContactModal } = useContactModal();

  return (
    <section
      id="home"
      className="relative isolate flex min-h-dvh min-h-screen w-full items-end overflow-hidden pb-10 pt-20 md:pb-14 md:pt-24"
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
          <source src="/videos/homepage.webm" type="video/webm" />
        </video>

        <div className="absolute inset-0 z-[1] bg-primary/45" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl text-left">
          <h1 className="space-y-2 leading-[1.1] text-background">
            <span className="block ">Precision Farming</span>

            <span className="block">XEDA SHOT for Daily Wellness,</span>

            <span className="block">Energy, and Immunity.</span>
          </h1>
          <Button
            onClick={openContactModal}
            theme="foreground"
            className="mt-6 md:mt-8"
          >
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
}
