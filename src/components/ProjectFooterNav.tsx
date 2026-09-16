import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectFooterNav({
  prev,
  next,
}: {
  prev: Project;
  next: Project;
}) {
  return (
    <nav className="border-t border-border px-6 py-10">
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
        <Link
          href={`/projects/${prev.slug}`}
          className="group rounded-lg border border-border p-5 transition-colors hover:border-accent/60"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-text-faint">
            ← Previous
          </p>
          <p className="mt-1 font-medium text-text group-hover:text-accent">
            {prev.title}
          </p>
        </Link>
        <Link
          href={`/projects/${next.slug}`}
          className="group rounded-lg border border-border p-5 text-right transition-colors hover:border-accent/60"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-text-faint">
            Next →
          </p>
          <p className="mt-1 font-medium text-text group-hover:text-accent">
            {next.title}
          </p>
        </Link>
      </div>
    </nav>
  );
}
