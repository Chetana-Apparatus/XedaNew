import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button/Button";
import { scienceFacts } from "@/data/data";
export default function ProcessSection() {
  return (
    <section id="blog" className="bg-secondary py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 px-6 md:px-10 lg:grid-cols-2 lg:px-16">
        <div className="relative z-10 order-2 min-w-0 lg:order-1">
          <span className="inline-flex items-center gap-2 text-xl font-medium uppercase tracking-[0.2em]  md:normal-case md:tracking-normal md:text-foreground">
            <span aria-hidden>•</span>
            Did you know?
            <span aria-hidden>•</span>
          </span>

          <p className="mt-5 max-w-xl text-base leading-7 text-background">
            Our commitment to sustainability and cutting-edge nutrition ensures
            you’ll enjoy every shot that’s not only healthy but also beneficial
            in multiple ways.
          </p>

          <div className="mt-12 space-y-8">
            {scienceFacts.slice(0, 2).map((item, index) => (
              <div key={item.id} className="border-b border-foreground/20 pb-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl  text-foreground/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-xl  text-foreground">{item.title}</h3>
                    <div className="mt-3 space-y-3">
                      {item.paragraphs.slice(0, 2).map((paragraph) => (
                        <p
                          key={paragraph}
                          className="leading-7 text-background"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button className="relative z-20 mt-10">
            <Link href="/know">View more</Link>
          </Button>
        </div>

        {/* Right Image */}
        <div className="relative z-0 order-1 min-w-0 overflow-hidden lg:order-2">
          <Image
            src="/images/2.webp"
            alt="Process"
            width={700}
            height={900}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
