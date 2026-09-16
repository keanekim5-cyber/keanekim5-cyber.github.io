type Token = { text: string; type: "comment" | "string" | "keyword" | "type" | "number" | "plain" };

const KEYWORDS = new Set([
  "if", "else", "for", "while", "return", "void", "const", "int", "float",
  "bool", "true", "false", "struct", "define", "include", "setup", "loop",
]);

const TOKEN_RE = /(\/\/.*$)|("(?:[^"\\]|\\.)*")|(#\w+)|(\b\d+(\.\d+)?\b)|([A-Za-z_]\w*)|(\s+)|([^\s]+)/gm;

function tokenize(line: string): Token[] {
  const tokens: Token[] = [];
  let match: RegExpExecArray | null;
  TOKEN_RE.lastIndex = 0;
  while ((match = TOKEN_RE.exec(line)) !== null) {
    const [full, comment, str, directive, num] = match;
    if (comment) tokens.push({ text: comment, type: "comment" });
    else if (str) tokens.push({ text: str, type: "string" });
    else if (directive) tokens.push({ text: directive, type: "keyword" });
    else if (num) tokens.push({ text: num, type: "number" });
    else if (KEYWORDS.has(full)) tokens.push({ text: full, type: "keyword" });
    else tokens.push({ text: full, type: "plain" });
  }
  return tokens;
}

const TOKEN_CLASS: Record<Token["type"], string> = {
  comment: "text-text-faint italic",
  string: "text-accent-2",
  keyword: "text-accent",
  type: "text-accent",
  number: "text-accent-2",
  plain: "text-text-muted",
};

export default function CodeBlock({
  code,
  filename,
}: {
  code: string;
  filename?: string;
}) {
  const lines = code.replace(/^\n/, "").replace(/\n$/, "").split("\n");

  return (
    <div className="overflow-hidden rounded-lg border border-border">
      {filename && (
        <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="ml-2 font-mono text-xs text-text-faint">{filename}</span>
        </div>
      )}
      <pre className="overflow-x-auto bg-surface px-4 py-4 text-[13px] leading-relaxed">
        <code className="font-mono">
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-4 inline-block w-5 flex-none select-none text-right text-text-faint/60">
                {i + 1}
              </span>
              <span className="whitespace-pre">
                {tokenize(line).map((tok, j) => (
                  <span key={j} className={TOKEN_CLASS[tok.type]}>
                    {tok.text}
                  </span>
                ))}
                {line.length === 0 && " "}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
