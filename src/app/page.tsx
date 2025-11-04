import { Button } from "@/components/ui/button";
import { ExperienceAccordion, ProjectAccordion } from "@/components/sections";
import { experiences, projects } from "@/data/resume";

export default function Home() {
  return (
    <main className="relative mx-auto max-w-4xl px-6 py-10">
      {/* Hero */}
      <section id="home" className="py-12">
        <p className="text-base uppercase tracking-widest text-muted-foreground">Hello, I'm</p>
        <h1 className="mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent md:text-7xl">
          Vibhav Kaluvala
        </h1>
        <p className="mt-4 max-w-2xl text-2xl text-muted-foreground">
          Honors BS Computer Science & Engineering Student @ OSU
        </p>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 py-10">
        <h2 className="mb-6 text-4xl font-semibold">About</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            I’m a Computer Science and Engineering student at Ohio State. I build backend services and APIs; recent work includes microservices for distributed energy systems, AI governance tools in a research lab, and data dashboards used by real teams. I like problems that connect infrastructure to the user experience, because the fastest service still fails if the interface is confusing. I focus on speed, reliability, clean contracts, and practical observability. If you’re building something where performance and clarity matter, I’m interested.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-24 py-10">
        <h2 className="mb-6 text-4xl font-semibold">Experience</h2>
        <ExperienceAccordion items={experiences} />
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 py-10">
        <h2 className="mb-6 text-4xl font-semibold">Projects</h2>
        <ProjectAccordion items={projects} />
      </section>

    </main>
  );
}
