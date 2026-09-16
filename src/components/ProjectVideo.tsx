export default function ProjectVideo({
  src,
  poster,
  caption,
}: {
  src: string;
  poster?: string;
  caption?: string;
}) {
  return (
    <figure className="flex flex-col gap-2">
      <div className="aspect-video overflow-hidden rounded-lg border border-border bg-surface">
        <video controls poster={poster} className="h-full w-full">
          <source src={src} />
          Your browser doesn&apos;t support embedded video.
        </video>
      </div>
      {caption && (
        <figcaption className="font-mono text-[11px] leading-relaxed text-text-faint">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
