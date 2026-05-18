export default function Day7() {
  return (
    <section className="bg-secondary py-14 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="border-t border-background/10 pt-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-xl font-medium uppercase tracking-[0.2em]  md:normal-case md:tracking-normal md:text-foreground">
                <span aria-hidden>•</span>
                Harvest Precision
                <span aria-hidden>•</span>
              </span>

              <h2 className="mt-6 max-w-3xl font-semibold leading-[1.05] tracking-tight text-background">
                The 7-Day Peak Nutrient Window
              </h2>
            </div>

            <div className="inline-flex w-fit items-center rounded-full border border-foreground/20 bg-foreground/10 px-4 py-2">
              <span className="text-sm font-medium text-foreground">
                Harvested at Day 7
              </span>
            </div>
          </div>

          <div className="mt-8 space-y-6 text-base leading-[2] text-background">
            <p>
              Did you know that the nutritional value of wheatgrass peaks at
              exactly 7th day?
            </p>

            <p>
              This is known as the &quot;jointing stage.&quot; At Xeda Farm, we
              harvest at this precise moment to ensure maximum concentration of
              enzymes and chlorophyll.
            </p>

            <p>
              Harvesting even a few days late causes the plant to convert its
              simple sugars into complex structures, significantly reducing its
              therapeutic potency.
            </p>
          </div>
          <div className="mt-12">
            <div className="relative">
              <div className="h-[2px] w-full bg-background/10">
                <div className="h-full w-[70%] bg-foreground" />
              </div>

              <div className="absolute left-[70%] top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-0 border-background bg-foreground shadow-[0_0_20px_rgba(163,230,53,0.7)]" />
            </div>

            <div className="mt-5 flex items-center justify-between text-sm">
              <span className="text-background">Seed Stage</span>
              <span className="text-background">Growth</span>
              <span className="font-medium text-foreground">Day 7 Peak</span>
              <span className="text-background">Over Mature</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
