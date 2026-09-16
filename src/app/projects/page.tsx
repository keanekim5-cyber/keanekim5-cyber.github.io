import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Hardware, wet chemistry, and CAD / 3D-printing projects by Keane Kim.",
};

export default function ProjectsPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Everything I've shipped" title="Projects" />
        <p className="mt-5 max-w-2xl text-text-muted">
          Three builds spanning mechanical hardware, wet-lab chemistry, and
          additive manufacturing — each documented from design decision to
          finished part.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
