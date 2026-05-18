import Image, { type StaticImageData } from "next/image";

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  avatar: string | StaticImageData;
  className?: string;
  /** Mobile carousel card: white surface, soft border, rounded (reference layout). */
  variant?: "default" | "featured";
}

export default function TestimonialCard({
  name,
  location,
  text,
  avatar,
  className = "",
  variant = "default",
}: TestimonialCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={[
        "flex shrink-0 flex-col",
        isFeatured
          ? [
              "w-full max-w-md rounded-2xl border border-neutral-200/90 bg-white px-5 py-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)]",
              "mx-auto min-h-0",
            ].join(" ")
          : [
              "min-h-[230px] w-[22rem] justify-between border border-primary/20 bg-background px-6 py-5",
              "md:w-[30rem] md:px-8 md:py-6",
            ].join(" "),
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-center gap-4">
        <div
          className={
            isFeatured
              ? "relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-black/[0.04]"
              : "relative h-12 w-12 shrink-0 overflow-hidden rounded-full"
          }
        >
          <Image
            src={avatar}
            alt={name}
            width={isFeatured ? 56 : 48}
            height={isFeatured ? 56 : 48}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1 text-left">
          <h3
            className={
              isFeatured
                ? "text-base font-semibold leading-tight text-neutral-900"
                : "font-medium leading-none text-secondary"
            }
          >
            {name}
          </h3>

          <p
            className={
              isFeatured
                ? "mt-1 text-sm leading-snug text-neutral-500"
                : "mt-1 text-sm text-[#7a7a7a]"
            }
          >
            {location}
          </p>
        </div>
      </div>

      <p
        className={
          isFeatured
            ? "mt-5 text-left text-[15px] leading-relaxed text-neutral-700 md:text-base"
            : "mt-6 leading-8 text-secondary"
        }
      >
        {text}
      </p>
    </article>
  );
}
