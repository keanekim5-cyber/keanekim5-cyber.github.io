import Link from "next/link";
import type { Project } from "@/lib/projects";
import Tag from "@/components/Tag";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import ProjectImage from "@/components/ProjectImage";

export default function ProjectCard({ project }: { project: Project }) {
  const ring = project.accent === "teal" ? "hover:border-accent/60" : "hover:border-accent-2/60";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex flex-col gap-4 rounded-xl border border-border bg-surface p-5 transition-colors ${ring}`}
    >
      {project.coverImage ? (
        <ProjectImage src={project.coverImage} alt={`${project.title} cover photo`} />
      ) : (
        <MediaPlaceholder kind="image" note={`${project.shortTitle} — cover image`} />
      )}

      <div className="flex flex-col gap-2">
        <p className="font-mono text-[11px] uppercase tracking-widest text-text-faint">
          {project.discipline}
        </p>
        <h3
          className="text-xl font-semibold tracking-tight text-text transition-colors group-hover:text-accent"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-text-muted">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <span className="mt-auto flex items-center gap-1 font-mono text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
        View project <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
