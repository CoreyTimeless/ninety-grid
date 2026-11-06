import { useEffect, useMemo, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { chapterPlainText, chapters } from "@/data/chapters";
import type { Block } from "@/data/types";
import { Callout, Eyebrow } from "@/components/ninety/bits";
import { TitlePage } from "@/components/ninety/cover";

const hidden = new Set(["clocks", "nuclear-hour", "radiation", "ki"]);

export function ManualView() {
  const [id, setId] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const manual = useMemo(() => chapters.filter((c) => !hidden.has(c.id)), []);
  const chapter = manual.find((c) => c.id === id) ?? null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return manual;
    return manual.filter((c) =>
      `${c.title} ${c.dek} ${chapterPlainText(c)}`.toLowerCase().includes(needle),
    );
  }, [q, manual]);

  if (chapter) {
    const index = manual.findIndex((c) => c.id === chapter.id);
    const prev = manual[index - 1];
    const next = manual[index + 1];
    const num = String(index + 1).padStart(2, "0");
    return (
      <article className="fade-in">
        <button
          type="button"
          onClick={() => setId(null)}
          className="flex min-h-11 items-center gap-1 font-display text-lg text-brass"
        >
          <ChevronLeft className="size-5" aria-hidden />
          All chapters
        </button>
        <Eyebrow>{`CHAPTER ${num}`}</Eyebrow>
        <h1 className="mt-2 font-display text-5xl">{chapter.title}</h1>
        <p className="mt-3 text-lg text-muted">{chapter.dek}</p>
        <div className="mt-6 space-y-4">
          {chapter.blocks.map((b, i) => (
            <BlockView key={i} block={b} />
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 gap-2">
          {prev ? (
            <button type="button" onClick={() => setId(prev.id)} className="min-h-14 border border-border px-3 py-2 text-left">
              <span className="block font-display text-xs tracking-widest text-muted">PREV</span>
              <span className="font-display text-lg">{prev.title}</span>
            </button>
          ) : (
            <span />
          )}
          {next ? (
            <button type="button" onClick={() => setId(next.id)} className="min-h-14 border border-border px-3 py-2 text-right">
              <span className="block font-display text-xs tracking-widest text-muted">NEXT</span>
              <span className="font-display text-lg">{next.title}</span>
            </button>
          ) : null}
        </div>
      </article>
    );
  }

  return (
    <div className="fade-in">
      {q.trim() ? null : <TitlePage />}
      <div className={q.trim() ? "" : "mt-8"}>
        <Eyebrow>{`${list.length} CHAPTERS`}</Eyebrow>
        <h2 className="mt-2 font-display text-4xl">Contents</h2>
      </div>
      <label className="mt-4 block" htmlFor="manual-search">
        <span className="sr-only">Search the manual</span>
        <input
          id="manual-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search water, buckets, bleach…"
          className="min-h-11 w-full border border-border bg-surface px-3 text-fg"
        />
      </label>
      <ul className="mt-4">
        {list.map((c) => {
          const num = String(manual.findIndex((item) => item.id === c.id) + 1).padStart(2, "0");
          return (
            <li key={c.id} className="border-t border-border">
              <button type="button" onClick={() => setId(c.id)} className="w-full py-4 text-left">
                <span className="font-display text-sm tracking-widest text-brass">{num}</span>
                <span className="mt-1 block font-display text-3xl">{c.title}</span>
                <span className="mt-1 block text-sm text-muted">{c.dek}</span>
              </button>
            </li>
          );
        })}
      </ul>
      {list.length === 0 ? <p className="mt-4 text-muted">Nothing in the manual matches that.</p> : null}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  if (block.k === "h") return <h2 className="pt-2 font-display text-3xl">{block.t}</h2>;
  if (block.k === "p") return <p>{block.t}</p>;
  if (block.k === "warn") return <Callout tone="warn" label="WARNING" text={block.t} />;
  if (block.k === "note") return <Callout tone="note" label="NOTE" text={block.t} />;
  if (block.k === "steps") {
    return (
      <ol className="space-y-3">
        {block.items.map((item, i) => (
          <li key={item} className="flex gap-3">
            <span className="nums font-display text-xl text-brass">{String(i + 1).padStart(2, "0")}</span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    );
  }
  if (block.k === "bullets") {
    return (
      <ul className="space-y-3">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 bg-brass" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="border border-border">
      {block.rows.map((row) => (
        <div key={row.join("|")} className="border-b border-border px-3 py-3 last:border-b-0">
          {row.map((cell, j) => (
            <div key={block.head[j]} className="py-1">
              <div className="font-display text-xs tracking-widest text-muted">{block.head[j]}</div>
              <div className="text-sm">{cell}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
