export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {align === "left" && <span className="h-px w-6 bg-accent/50" aria-hidden="true" />}
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        {title}
      </h2>
    </div>
  );
}
