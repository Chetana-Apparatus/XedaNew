import {
  Droplets,
  HeartPulse,
  Leaf,
  Microscope,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

const matters = [
  {
    icon: Droplets,
    title: "Rapid Absorption",
    desc: "Chlorophyll closely mimics hemoglobin, allowing for quick and efficient uptake into the bloodstream.",
  },
  {
    icon: HeartPulse,
    title: "Improved Oxygenation",
    desc: "Supports the body's natural ability to carry oxygen to cells and tissues.",
  },
  {
    icon: Leaf,
    title: "Builds Healthy Blood",
    desc: "Helps stimulate the production of healthy red blood cells.",
  },
  {
    icon: ShieldCheck,
    title: "Detox & Alkalize",
    desc: "Supports detoxification and helps maintain a healthy pH balance.",
  },
];

const facts = [
  {
    icon: Microscope,
    text: "Research shows that chlorophyll’s structure is nearly identical to hemoglobin, differing only by one central atom.",
  },
  {
    icon: Leaf,
    text: "This makes wheatgrass juice a powerful natural ally for blood health, energy, and overall vitality.",
  },
  {
    icon: HeartPulse,
    text: "Traditionally used in natural medicine for anemia, fatigue, detoxification, and immune support.",
  },
];

export const metadata: Metadata = {
  title: "Green Blood — The Science | Xeda",
  description:
    "Why chlorophyll is called green blood: hemoglobin comparison, absorption, and wheatgrass for blood health.",
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-background py-14 text-secondary md:py-20 lg:py-24">
        <div className="absolute inset-0 " />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 space-y-8 lg:order-1">
              <div>
                <span className="inline-flex items-center gap-2 text-xl font-medium tracking-wide text-foreground">
                  <span aria-hidden>•</span>
                  The Science Behind Wheatgrass
                  <span aria-hidden>•</span>
                </span>

                <h2 className="mt-6 font-semibold leading-tight tracking-tight text-secondary ">
                  Why is Chlorophyll called{" "}
                  <span className="text-foreground">“Green Blood”?</span>
                </h2>
              </div>

              <div className="border-l border-foreground pl-5">
                <p className="text-base leading-8 text-secondary  ">
                  Chlorophyll and Hemoglobin share a nearly identical molecular
                  structure known as a porphyrin ring. The only significant
                  difference is their central atom: Chlorophyll is built around
                  Magnesium, while Hemoglobin is built around Iron.
                </p>

                <p className="mt-5 text-base leading-8 text-secondary/90 md:text-lg">
                  This structural mimicry allows fresh wheatgrass to support
                  efficient oxygen transport in the human bloodstream, boosting
                  natural energy and blood purification.
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-white/50 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <div className="relative h-[300px] sm:h-[450px] lg:h-[620px]">
                  <Image
                    src="/images/GB1.jpg"
                    alt="Chlorophyll vs Hemoglobin"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SCIENTIFIC CORE — full-width secondary band */}
        <div className="mt-24 w-full bg-secondary text-background md:mt-28 lg:mt-32">
          <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
            <div className="max-w-4xl">
              <span className="text-xl font-medium tracking-wide text-foreground">
                <span aria-hidden>•</span>
                The Scientific Core
                <span aria-hidden>•</span>
              </span>

              <h2 className="mt-4 font-semibold tracking-tight text-background ">
                The Hemoglobin–Chlorophyll Comparison
              </h2>

              <p className="mt-6 text-base leading-8 text-background">
                The reason wheatgrass is called “Green Blood” is due to the
                structural similarity between the Chlorophyll molecule in plants
                and the Hemoglobin molecule in human blood.
              </p>
            </div>

            {/* CARDS */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className=" border border-foreground/20 bg-[#2b5254] p-6">
                <h3 className="text-xl font-semibold text-background">
                  The Structure
                </h3>
                <p className="mt-4 leading-7 text-background/80">
                  Both molecules are built around a porphyrin ring.
                </p>
              </div>

              <div className=" border border-foreground/20 bg-[#2b5254] p-6">
                <h3 className="text-xl font-semibold text-background">
                  The Difference
                </h3>
                <p className="mt-4 leading-7 text-background/80">
                  The central atom in Chlorophyll is Magnesium (Mg²⁺), while in
                  Hemoglobin, it is Iron (Fe²⁺).
                </p>
              </div>

              <div className=" border border-foreground/20 bg-[#2b5254] p-6">
                <h3 className="text-xl font-semibold text-background">
                  The Benefit
                </h3>
                <p className="mt-4 leading-7 text-background/80">
                  Because they are so similar, the body can easily assimilate
                  chlorophyll to help build healthy red blood cells, improving
                  oxygenation and energy.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12">
          {/* WHY THIS MATTERS */}
          <div className="mt-24">
            <div className="text-center">
              <span className="text-xl font-medium tracking-wide text-foreground">
                <span aria-hidden>•</span>
                Why This Matters
                <span aria-hidden>•</span>
              </span>

              <h2 className="mt-4 font-semibold tracking-tight text-secondary ">
                How Wheatgrass Supports Your Body
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {matters.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className=" border border-foreground/20 bg-background p-6 "
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-700/10 text-green-700">
                        <Icon className="h-7 w-7" />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>

                        <p className="mt-3 leading-7 text-secondary/80">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SCIENCE FACTS */}
          <div className="mt-24 overflow-hiddenborder border-foreground/20 bg-background/70 shadow-[0_20px_70px_-40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <div className="border-b border-foreground/20 bg-secondary px-6 py-4 text-center">
              <h2 className="text-lg font-semibold tracking-wide text-background">
                SCIENCE BACKED FACTS
              </h2>
            </div>

            <div className="grid gap-0 md:grid-cols-3">
              {facts.map((fact) => {
                const Icon = fact.icon;

                return (
                  <div
                    key={fact.text}
                    className="border-b border-foreground/20 p-6 last:border-b-0 md:border-b-0 md:border-r last:md:border-r-0"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 rounded-2xl bg-secondary/10 p-3 text-secondary">
                        <Icon className="h-6 w-6" />
                      </div>

                      <p className="leading-7 text-secondary/85">{fact.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
