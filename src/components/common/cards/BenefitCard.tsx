"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import Button from "@/components/ui/button/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export type BenefitCardProps = {
  title: string;
  description: string;
  evidence?: string;
  href: string;
  className?: string;
  index?: number;
};

export default function BenefitCard({
  title,
  description,
  evidence,
  href,
  className,
  index = 0,
}: BenefitCardProps) {
  const [open, setOpen] = useState(false);

  const isBottomBorder = index % 2 === 0;

  const rowClassName = cn(
    "flex w-full min-h-0 items-start justify-between gap-3 px-5 py-4 text-left md:px-6 md:py-5",
    "outline-none focus-visible:ring-2 focus-visible:ring-lime-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#16393b]",
  );

  const titleRow = (
    <>
      <p className="min-w-0 flex-1 text-base font-medium leading-snug tracking-tight text-foreground md:text-[1rem]">
        {title}
      </p>
      <ChevronDown
        className={cn(
          "mt-0.5 h-4 w-4 shrink-0 text-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:h-[1.1rem] md:w-[1.1rem]",
          open && "rotate-180",
        )}
        aria-hidden
      />
    </>
  );

  return (
    <Card
      className={cn(
        "group/card relative overflow-hidden rounded-none border-x-0 border-l-0 border-r-0 shadow-none",
        "bg-[#2b5254] transition-all duration-300",
        isBottomBorder
          ? "border-b border-t-0 border-foreground"
          : "border-t border-b-0 border-foreground",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 h-px",
          isBottomBorder ? "bottom-0" : "top-0",
        )}
      />

      <Collapsible open={open} onOpenChange={setOpen}>
        <CardHeader className="p-0">
          <CollapsibleTrigger asChild>
            <button
              type="button"
              className={cn(rowClassName, "transition-all duration-300")}
            >
              {titleRow}
            </button>
          </CollapsibleTrigger>
        </CardHeader>

        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <CardContent className="px-5 pb-5 pt-1 md:px-6 md:pb-6">
            <p className="max-w-[95%] text-left leading-[1.9] text-background">
              {description}
            </p>

            {evidence ? (
              <div className="mt-5 border-t border-white/5 pt-5">
                <span className="text-left text-base tracking-[0.18em] text-foreground">
                  Research Evidence
                </span>
                <p className="mt-2 max-w-[92%] text-left leading-[1.8] text-background">
                  {evidence}
                </p>
              </div>
            ) : null}

            <div className="mt-5">
              <Button
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                theme="foreground"
                className="font-semibold tracking-wide"
              >
                Read Research →
              </Button>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
