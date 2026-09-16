import Image from "next/image";

export default function ProjectImage({
  src,
  alt,
  caption,
  wide = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  wide?: boolean;
}) {
  return (
    <figure className="flex flex-col gap-2">
      <div
        className={`relative overflow-hidden rounded-lg border border-border bg-surface ${
          wide ? "aspect-video" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="font-mono text-[11px] leading-relaxed text-text-faint">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
