import Link from "next/link";
import type { Project } from "@/lib/projects";
import Tag from "@/components/Tag";
import SpecList from "@/components/SpecList";

export default function ProjectHeader({ project }: { project: Project }) {
  return (
    <header className="border-b border-border px-6 pb-14 pt-16">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-faint hover:text-accent"
        >
          <span aria-hidden="true">←</span> All projects
        </Link>

        <p className="mt-6 font-mono text-xs uppercase tracking-widest text-accent">
          {project.discipline}
        </p>
        <h1
          className="mt-3 text-3xl font-bold leading-tight tracking-tight text-text sm:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-muted">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <SpecList specs={project.specs} />
        </div>
      </div>
    </header>
  );
}
