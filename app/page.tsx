import Hero from "@/components/layout/hero";
import { Nav } from "@/components/layout/nav";
import { GridSection } from "@/components/ui/grid-section";
import { Projects } from "@/components/ui/projects";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="relative z-10 bg-white">
        <Hero />
        <GridSection>
          <Projects />
        </GridSection>
      </div>
    </>
  );
}
