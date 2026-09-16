import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:pt-32">
        <div
          className="glow pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Maker · Engineer · Chemist
          </p>

          <h1
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-text sm:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Keane Kim builds things
            <br />
            from <span className="text-accent">scratch</span>.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-text-muted">
            Mechanical hardware and electronics on one bench, organic
            chemistry and 3D-printed design on the next — designed, machined
            or printed, wired, and tested by hand.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-md bg-accent px-6 py-3 font-mono text-sm font-medium text-bg transition-colors hover:bg-accent-strong"
            >
              View projects
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-border-strong px-6 py-3 font-mono text-sm text-text transition-colors hover:border-accent hover:text-accent"
            >
              About me
            </Link>
          </div>

          <ul className="mx-auto mt-14 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest text-text-faint">
            <li>Pneumatics &amp; Mechanisms</li>
            <li className="text-border-strong">/</li>
            <li>Microcontrollers</li>
            <li className="text-border-strong">/</li>
            <li>Organic Synthesis</li>
            <li className="text-border-strong">/</li>
            <li>CAD &amp; Additive Mfg.</li>
          </ul>
        </div>
      </section>

      {/* ---------- Featured projects ---------- */}
      <section id="projects" className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Selected work" title="Featured projects" />
            <Link
              href="/projects"
              className="font-mono text-sm text-accent hover:text-accent-strong"
            >
              View all →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
