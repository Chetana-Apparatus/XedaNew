import Image from "next/image";

import { cn } from "@/lib/utils";

const sizes = {
  sm: { box: "h-10 w-10", px: 32 },
  md: { box: "h-12 w-12", px: 40 },
  lg: { box: "h-14 w-14", px: 48 },
} as const;

type HexIconSize = keyof typeof sizes;

type HexIconProps = {
  src: string;
  alt: string;
  size?: HexIconSize;
  className?: string;
};

export default function HexIcon({
  src,
  alt,
  size = "md",
  className,
}: HexIconProps) {
  const { box, px } = sizes[size];

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center",
        box,
        className,
      )}
      aria-hidden={alt === ""}
    >
      <Image
        src={src}
        alt={alt}
        width={px}
        height={px}
        className="h-full w-full object-contain"
      />
    </span>
  );
}
