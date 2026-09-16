export default function SpecList({
  specs,
}: {
  specs: { label: string; value: string }[];
}) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
      {specs.map((spec) => (
        <div key={spec.label}>
          <dt className="font-mono text-[11px] uppercase tracking-widest text-text-faint">
            {spec.label}
          </dt>
          <dd className="mt-1 text-sm text-text">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}
