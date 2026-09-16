export default function Checklist({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm text-text-muted">
          <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent-2" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
