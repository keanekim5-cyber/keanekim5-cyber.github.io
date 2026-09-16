type Kind = "image" | "video" | "render" | "scan";

const KIND_LABEL: Record<Kind, string> = {
  image: "Image",
  video: "Video",
  render: "CAD Render",
  scan: "Scan",
};

export default function MediaPlaceholder({
  kind,
  note,
  caption,
  wide = false,
}: {
  kind: Kind;
  note: string;
  caption?: string;
  wide?: boolean;
}) {
  return (
    <figure className="flex flex-col gap-2">
      <div
        className={`relative flex ${
          wide ? "aspect-video" : "aspect-[4/3]"
        } flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border border-dashed border-border-strong bg-surface px-4 text-center`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(53,230,194,0.06) 0 10px, transparent 10px 20px)",
          }}
          aria-hidden="true"
        />
        <span className="relative font-mono text-[11px] uppercase tracking-widest text-accent">
          {KIND_LABEL[kind]}
        </span>
        <p className="relative max-w-[26ch] text-xs leading-relaxed text-text-faint">
          {note}
        </p>
      </div>
      {caption && (
        <figcaption className="font-mono text-[11px] leading-relaxed text-text-faint">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
