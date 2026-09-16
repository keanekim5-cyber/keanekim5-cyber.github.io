import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <p className="font-mono text-sm text-text">
            <span className="text-accent">&gt;</span> keane.kim
          </p>
          <p className="mt-2 text-sm text-text-muted">
            Maker, engineer, and chemist. Building from scratch — hardware, wet
            chemistry, and everything printed in between.
          </p>
        </div>

        <div className="flex gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-text-faint">
              Sections
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="text-text-muted hover:text-accent" href="/projects">Projects</Link></li>
              <li><Link className="text-text-muted hover:text-accent" href="/about">About</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-text-faint">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="text-text-muted hover:text-accent" href={`mailto:${site.email}`}>
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <p className="font-mono text-xs text-text-faint">
            © {new Date().getFullYear()} Keane Kim — built from scratch, documented in full.
          </p>
        </div>
      </div>
    </footer>
  );
}
