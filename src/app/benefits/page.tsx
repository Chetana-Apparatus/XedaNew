import type { Metadata } from "next";

import Benefits from "@/components/sections/benefits/Benefits";

export const metadata: Metadata = {
  title: "Benefits | Xeda",
  description:
    "Wheatgrass benefits, research-backed answers, and links to sources.",
};

export default function BenefitsPage() {
  return (
    <main className="min-h-screen">
      <Benefits variant="full" />
    </main>
  );
}
