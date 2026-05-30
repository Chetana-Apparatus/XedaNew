import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";

import HexIcon from "@/components/xeda-shot/HexIcon";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Xeda Shot | Xeda",
  description:
    "Learn about Xeda Shot — wheatgrass shot product details and benefits.",
};

const accent = "text-foreground";

/** Page-wide type scale (one step up from default) */
const t = {
  h1: "text-4xl md:text-5xl",
  h2: "text-3xl font-bold leading-tight md:text-4xl",
  h2Section: "text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
  h3: "text-2xl font-bold md:text-3xl",
  h3Large: "text-3xl font-bold md:text-4xl",
  h4: "text-xl font-bold md:text-2xl",
  body: "text-lg leading-relaxed md:text-xl",
  bodyLg: "text-xl leading-relaxed md:text-2xl",
  bodyXl: "text-2xl leading-relaxed md:text-3xl",
  list: "text-lg leading-snug md:text-2xl",
  check: "text-lg leading-snug md:text-xl",
  small: "text-base md:text-lg",
} as const;

const lifestyleItems = [
  {
    icon: "/images/Calnder.png",
    alt: "Calendar",
    text: "Easy to introduce into daily routines",
  },
  {
    icon: "/images/Layer 6.png",
    alt: "Training",
    text: "Supports training outcomes",
  },
  {
    icon: "/images/Dimond.png",
    alt: "Wellness",
    text: "Helps support recovery and wellness",
  },
  {
    icon: "/images/runing.png",
    alt: "Active lifestyle",
    text: "Fits modern health-focused lifestyles",
  },
] as const;

const shotBenefits = [
  "Daily energy",
  "Reduced fatigue",
  "Faster recovery",
  "Consistent performance",
] as const;

const experienceItems = [
  "Natural Energy Boost",
  "Faster Recovery",
  "Strong Immunity",
  "Better Digestion",
  "Fat Loss Support",
  "Healthier Skin & Hair",
] as const;

function CheckItem({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">
        ✓
      </span>
      <span
        className={cn(
          "min-w-0 flex-1",
          t.check,
          onDark ? "font-medium text-background" : "text-secondary",
        )}
      >
        {children}
      </span>
    </div>
  );
}

function CheckList({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("space-y-3", className)}>{children}</div>;
}

export default function XedaShotPage() {
  return (
    <main className="xeda-shot-page min-h-screen bg-background pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/XedaS.jpg"
            alt="Xeda Shot"
            width={1920}
            height={1080}
            priority
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Card 1 — Lifestyle */}
        <section className="mt-16 rounded-3xl bg-primary p-8 md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className={cn("text-background", t.h2Section)}>
                Why <span className={accent}>Wheatgrass Shots</span>
                <br />
                Fits Your <span className={accent}>Lifestyle</span>
              </h2>

              <ul className="mt-8 space-y-5">
                {lifestyleItems.map((item) => (
                  <li key={item.text} className="flex items-center gap-4">
                    <HexIcon src={item.icon} alt={item.alt} size="md" />
                    <span className={cn(t.list, "text-background")}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t-2 border-foreground pt-8 lg:border-t-0 lg:border-l-2 lg:pt-0 lg:pl-10">
              <h3 className={cn(t.h3Large, "leading-tight text-primary")}>
                Your Body Don&apos;t Just
                <br />
                Need Workouts.
              </h3>

              <p
                className={cn("mt-4 font-bold leading-tight", t.bodyXl, accent)}
              >
                It Need Daily Nutrition That
                <br />
                Supports Performance
              </p>

              <p className={cn("mt-6 text-background", t.bodyLg)}>
                Most focus on training. But real results come from what happens
                after the session.
              </p>
            </div>
          </div>
        </section>

        {/* Card 2 — Where Xeda Farms Shot fits */}
        <section className="mt-16 rounded-3xl bg-primary p-8 md:p-10 lg:p-12">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4">
              <HexIcon src="/images/icon5.png" alt="" size="lg" />
              <h2 className={cn(t.h2Section, "text-background")}>
                This Is Where
                <br />
                <span className={accent}>Xeda Farms Shot</span> Fits In
              </h2>
            </div>

            <p className={cn("mt-6 text-background", t.bodyLg)}>
              A concentrated green shot designed to support the following
            </p>

            <CheckList className="mt-8">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                {shotBenefits.map((benefit) => (
                  <CheckItem key={benefit} onDark>
                    {benefit}
                  </CheckItem>
                ))}
              </div>
            </CheckList>
          </div>
        </section>

        {/* Card 3 — 7th Day Harvest */}
        <section className="mt-16 rounded-3xl bg-primary p-8 md:p-10 lg:p-12">
          <div className="max-w-4xl space-y-10">
            <div className="flex items-start gap-4 md:gap-5">
              <HexIcon
                src="/images/Calnder.png"
                alt="Harvest timing"
                size="lg"
                className="mt-1"
              />
              <div className="min-w-0 flex-1">
                <h2 className={cn(t.h2, "text-background")}>
                  Why <span className={accent}>7th Day Harvest?</span>
                </h2>
                <p
                  className={cn("mt-1 font-semibold text-background", t.bodyLg)}
                >
                  Because timing isn&apos;t random.
                </p>
                <p className={cn("mt-4 text-background", t.bodyLg)}>
                  Harvested at peak nutrient density, this delivers a more
                  effective, more usable nutritional boost your body can
                  actually feel.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-5">
              <HexIcon
                src="/images/icon7.png"
                alt="Upgrade"
                size="lg"
                className="mt-1"
              />
              <div className="min-w-0 flex-1">
                <h2 className={cn(t.h2, "text-background")}>
                  This Isn&apos;t an Add-On.
                </h2>
                <p className={cn("mt-1 font-bold", t.h3Large, accent)}>
                  It&apos;s an upgrade.
                </p>

                <div className="mt-6 flex items-start gap-4">
                  <HexIcon
                    src="/images/icon8.png"
                    alt="Explore more"
                    size="sm"
                    className="mt-1"
                  />
                  <div className="min-w-0 flex-1">
                    <p className={cn("font-bold text-background", t.bodyLg)}>
                      See how this fits into your lifestyle.
                    </p>
                    <p className={cn("mt-1 text-background", t.body)}>
                      Explore more on the next page
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nutrition Profile */}
        <section className="mt-16 rounded-3xl bg-primary p-8 md:p-10 lg:p-12">
          <h2 className={cn(t.h2Section, "text-background")}>
            <span className={accent}>Nutrition</span> Profile
          </h2>

          <div className="mt-4 flex items-center gap-4">
            <HexIcon src="/images/icon5.png" alt="Wheatgrass shot" size="lg" />
            <h3 className={cn(t.h2, "text-background")}>
              What&apos;s Inside Every{" "}
              <span className={accent}>Wheatgrass Shot</span>
            </h3>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-foreground bg-background">
              <div
                className={cn(
                  "bg-foreground py-4 text-center font-bold text-background",
                  t.h3,
                )}
              >
                Core Nutrition
              </div>

              <div className="grid gap-8 p-8 md:grid-cols-2">
                <div className="text-center">
                  <div className="mx-auto flex justify-center">
                    <HexIcon src="/images/icon5.png" alt="Vitamins" size="lg" />
                  </div>
                  <h4 className={cn("mt-4", t.h4, accent)}>Vitamins</h4>
                  <p className={cn("mt-4 text-secondary/80", t.body)}>
                    Vitamin A · C · E · K
                  </p>
                  <p className={cn("mt-2 text-secondary/80", t.body)}>
                    Vitamin B Complex (B1, B2, B3, B5, B6, B12, Folate)
                  </p>
                </div>

                <div className="text-center">
                  <div className="mx-auto flex justify-center">
                    <HexIcon
                      src="/images/Layer 13.png"
                      alt="Minerals"
                      size="lg"
                    />
                  </div>
                  <h4 className={cn("mt-4", t.h4, accent)}>Minerals</h4>
                  <p className={cn("mt-4 text-secondary/80", t.body)}>
                    Iron · Calcium · Magnesium · Potassium
                  </p>
                  <p className={cn("mt-2 text-secondary/80", t.body)}>
                    Zinc · Phosphorus · Selenium · Manganese
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4">
                <HexIcon
                  src="/images/Layer 11.png"
                  alt="Power compounds"
                  size="lg"
                />
                <h3 className={cn(t.h2, accent)}>Power Compounds</h3>
              </div>

              <p className={cn("mt-2 text-background", t.bodyLg)}>
                Note: Supports better absorption and faster utilisation.
              </p>

              <CheckList className="mt-8">
                {[
                  {
                    title: "Chlorophyll",
                    desc: "Natural detox support",
                  },
                  {
                    title: "Active Enzymes",
                    desc: "Better digestion & absorption",
                  },
                  {
                    title: "Antioxidants",
                    desc: "Recovery & cell protection",
                  },
                ].map((item) => (
                  <CheckItem key={item.title} onDark>
                    <span className="font-bold">{item.title}</span> →{" "}
                    {item.desc}
                  </CheckItem>
                ))}
              </CheckList>
            </div>
          </div>
        </section>

        {/* Amino acids & experience */}
        <section className="mt-16 rounded-3xl bg-primary p-8 md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="flex items-center gap-4">
                <HexIcon
                  src="/images/Layer 14.png"
                  alt="Amino acids"
                  size="lg"
                />
                <h2 className={cn(t.h2, accent)}>Essential Amino Acids</h2>
              </div>
              <div className={cn("mt-6 space-y-3 text-background", t.bodyLg)}>
                <p>Leucine · Isoleucine · Valine</p>
                <p>Lysine · Methionine · Phenylalanine</p>
                <p>Threonine · Tryptophan</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4">
                <HexIcon
                  src="/images/Layer 10.png"
                  alt="Experience"
                  size="lg"
                />
                <h2 className={cn(t.h2, accent)}>What You May Experience</h2>
              </div>
              <CheckList className="mt-6">
                {experienceItems.map((item) => (
                  <CheckItem key={item} onDark>
                    {item}
                  </CheckItem>
                ))}
              </CheckList>
            </div>
          </div>
        </section>

        {/* Why it works grid */}
        <section className="mt-16 rounded-3xl bg-primary p-8 md:p-10 lg:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: "/images/Layer 15.png",
                alt: "Why it works",
                title: "Why It Works",
                body: "Every component is backed to support strength, recovery, and daily performance.",
              },
              {
                icon: "/images/Layer 14.png",
                alt: "Muscle recovery",
                title: "Why It Works",
                bullets: [
                  "Muscle growth & faster recovery",
                  "Better workout energy",
                  "Reduced fatigue",
                ],
              },
              {
                icon: "/images/Layer 2.png",
                alt: "Vitamins",
                title: "Vitamin Advantage",
                bullets: [
                  "Energy & stamina support",
                  "Recovery & immunity boost",
                  "Muscle protection",
                ],
              },
              {
                icon: "/images/Layer 5.png",
                alt: "Minerals",
                title: "Mineral Support",
                bullets: [
                  "Strength & endurance",
                  "Hydration & muscle function",
                  "Repair & recovery",
                ],
              },
            ].map((card) => (
              <div
                key={card.title + card.icon}
                className="rounded-2xl bg-background p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <HexIcon src={card.icon} alt={card.alt} size="lg" />
                  <div className="min-w-0 flex-1">
                    <h3 className={cn(t.h3, accent)}>{card.title}</h3>
                    {"body" in card && card.body ? (
                      <p className={cn("mt-3 text-secondary/80", t.body)}>
                        {card.body}
                      </p>
                    ) : null}
                    {"bullets" in card && card.bullets ? (
                      <div className="mt-4 space-y-3">
                        {card.bullets.map((item) => (
                          <CheckItem key={item}>{item}</CheckItem>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
