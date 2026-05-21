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
}: BenefitCardProps) {
  const [open, setOpen] = useState(false);

  const rowClassName = cn(
    "flex w-full min-h-0 items-start justify-between gap-2 px-4 py-4 text-left sm:gap-3 sm:px-5 md:items-center md:px-5 md:py-5",
    "outline-none transition-colors duration-300",
    "focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    open && "bg-foreground/10",
  );

  const titleRow = (
    <>
      <p
        className={cn(
          "min-w-0 flex-1 !text-base !font-bold !leading-snug !tracking-tight md:whitespace-nowrap md:!text-sm lg:!text-[15px] xl:!text-[17px]",
          open ? "text-secondary" : "text-primary",
        )}
      >
        {title}
      </p>
      <ChevronDown
        className={cn(
          "mt-0.5 h-5 w-5 shrink-0 text-primary transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:mt-0 md:h-5 md:w-5 lg:h-6 lg:w-6",
          open && "rotate-180",
        )}
        aria-hidden
      />
    </>
  );

  return (
    <Card
      className={cn(
        "group/card relative overflow-hidden rounded-none border-0 bg-background shadow-sm transition-all duration-300",
        open && "shadow-md",
        className,
      )}
    >
      <Collapsible open={open} onOpenChange={setOpen}>
        <CardHeader className="p-0">
          <CollapsibleTrigger asChild>
            <button type="button" className={rowClassName} aria-expanded={open}>
              {titleRow}
            </button>
          </CollapsibleTrigger>
        </CardHeader>

        <CollapsibleContent>
          <CardContent className="bg-background px-5 pb-5 pt-4 md:px-6 md:pb-6">
            <p className="max-w-[95%] text-left text-[15px] leading-[1.9] text-secondary md:text-base">
              {description}
            </p>

            {evidence ? (
              <div className="mt-5 pt-5">
                <span className="text-left text-sm !font-bold uppercase tracking-[0.12em] text-secondary ">
                  Research Evidence
                </span>
                <p className="mt-2 max-w-[92%] text-left text-[15px] leading-[1.8] text-secondary/90">
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
                className="min-w-[10.5rem]"
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
