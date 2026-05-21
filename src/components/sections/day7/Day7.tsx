export default function Day7() {
  return (
    <section className="benefits-section-gradient py-10 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12">
        <div>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="inline-flex items-center gap-2 font-extrabold tracking-[0.2em]  md:normal-case md:tracking-normal text-primary">
                How Does Harvest Precision Work ?
              </h2>

              <h1 className="mt-4 max-w-3xl font-semibold leading-[1.05] tracking-tight text-background">
                The 7-Day Peak Nutrient Window
              </h1>
            </div>

            <div className="relative inline-flex w-fit items-center overflow-hidden rounded-full px-[1px] py-[1px]">
              {/* Animated Glossy Border */}
              <div className="absolute inset-0 rounded-full bg-[linear-gradient(110deg,rgba(255,255,255,0.05),rgba(255,255,255,0.7),rgba(255,255,255,0.05))] bg-[length:200%_100%] animate-[shine_4s_linear_infinite]" />

              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-olive/20 blur-md" />

              {/* Inner Content */}
              <div className="relative rounded-full bg-secondary/10 px-5 py-2 backdrop-blur-2xl">
                {/* Inner Gloss */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 via-white/10 to-transparent" />

                <span className="relative z-10 text-sm font-medium text-primary">
                  Harvested at Day 7
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-5 text-base leading-[2] text-background">
            <p>
              Did you know that the nutritional value of wheatgrass peaks at
              exactly 7th day?
            </p>

            <p>
              This is known as the &quot;jointing stage.&quot; At{" "}
              <span className="font-bold ">XEDA FARM</span>, we harvest at this
              precise moment to ensure maximum concentration of enzymes and
              chlorophyll.
            </p>

            <p>
              Harvesting late causes the plant to convert its simple sugars into
              complex structures, significantly reducing its
              <span className="  px-2 py-1 font-bold text-background">
                Therapeutic Potency
              </span>
            </p>
          </div>
          <div className="mt-8">
            <div className="relative">
              {/* Track */}
              <div className="relative h-[4px] w-full overflow-hidden rounded-full bg-foreground/10">
                {/* Progress */}
                <div className="relative h-full w-[60%] overflow-hidden rounded-full bg-olive shadow-[0_0_20px_hsl(var(--olive)/0.6)]">
                  {/* Glossy Shine */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent" />

                  {/* Soft Glow */}
                  <div className="absolute inset-0 bg-olive/40 blur-[6px]" />
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-[60%] top-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Outer Glow */}
                <div className="absolute inset-0 rounded-full bg-olive/50 blur-md" />

                {/* Main Dot */}
                <div className="relative h-5 w-5 rounded-full border border-white/20 bg-olive shadow-[0_0_20px_hsl(var(--olive)/0.9)]">
                  {/* Gloss Highlight */}
                  <div className="absolute left-[3px] top-[3px] h-2 w-2 rounded-full bg-white/70 blur-[1px]" />
                </div>
              </div>
            </div>

            <div className="relative mt-5 min-h-[1.25rem] text-sm">
              <span className="absolute left-0 text-background">
                Seed Stage
              </span>
              <span className="absolute left-[35%] -translate-x-1/2 text-background">
                Growth
              </span>
              <span className="absolute left-[60%] -translate-x-1/2 font-bold  whitespace-nowrap text-olive">
                Day 7 Peak
              </span>
              <span className="absolute right-0 text-background">
                Over Mature
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
