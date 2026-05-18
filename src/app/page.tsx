import About from "@/components/sections/about/About";
import Benefits from "@/components/sections/benefits/Benefits";
import Day7 from "@/components/sections/day7/Day7";
import Farm from "@/components/sections/farm/Farm";
import GreenBloodSection from "@/components/sections/greenblood/GreenBlood";
import Hero from "@/components/sections/hero/Hero";
import Know from "@/components/sections/know/Know";
import Testimonials from "@/components/sections/testimonials/Testimonials";
export default function Home() {
  return (
    <main>
      <Hero />
      <Farm />
      <Benefits />
      <About />
      <Day7 />
      <GreenBloodSection />
      <Know />
      <Testimonials />
    </main>
  );
}
