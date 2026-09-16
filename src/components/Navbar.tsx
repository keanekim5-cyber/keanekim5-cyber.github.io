import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-text transition-colors hover:text-accent"
        >
          <span className="text-accent">&gt;</span> keane<span className="text-text-faint">.</span>kim
          <span className="animate-pulse text-accent">_</span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-widest text-text-muted transition-colors hover:bg-surface hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
