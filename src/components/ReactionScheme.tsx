export default function ReactionScheme() {
  return (
    <div className="flex flex-wrap items-center gap-3 overflow-x-auto rounded-lg border border-border bg-surface p-5 font-mono text-sm">
      <span className="rounded border border-border-strong bg-surface-2 px-3 py-1.5 text-text">
        4-aminophenol
      </span>
      <span className="text-text-faint">+</span>
      <span className="rounded border border-border-strong bg-surface-2 px-3 py-1.5 text-text">
        (CH₃CO)₂O
      </span>
      <span className="flex flex-col items-center px-2 text-[11px] text-accent-2">
        <span>H₂O, warm</span>
        <span className="my-0.5 text-lg leading-none">⟶</span>
        <span>~20 min</span>
      </span>
      <span className="rounded border border-accent-2 bg-accent-2-soft px-3 py-1.5 text-accent-2">
        acetaminophen
      </span>
      <span className="text-text-faint">+</span>
      <span className="rounded border border-border-strong bg-surface-2 px-3 py-1.5 text-text">
        CH₃COOH
      </span>
    </div>
  );
}
