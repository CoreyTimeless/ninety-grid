import { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { usePrep } from "@/lib/prep-store";

export function usePrepReady(): boolean {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let live = true;
    void Promise.resolve(usePrep.persist.rehydrate()).finally(() => {
      if (live) setReady(true);
    });
    return () => {
      live = false;
    };
  }, []);
  return ready;
}

export function Rule() {
  return <div className="h-px w-10 bg-brass" aria-hidden />;
}

export function Eyebrow({ children }: { children: string }) {
  return <p className="font-display text-xs tracking-widest text-brass">{children}</p>;
}

export function Disclaimer() {
  return (
    <p className="text-sm text-muted">
      Public civil-defense practice drawn from FEMA, CDC, EPA, and FDA guidance. Not medical
      advice, and not a promise. If you can hear officials, follow them.
    </p>
  );
}

export function Ring({ value }: { value: number }) {
  const r = 28;
  const c = 2 * Math.PI * r;
  const v = Math.min(1, Math.max(0, value));
  return (
    <svg viewBox="0 0 72 72" className="size-20 shrink-0" aria-hidden>
      <circle cx="36" cy="36" r={r} fill="none" stroke="var(--color-border)" strokeWidth="4" />
      <circle
        cx="36"
        cy="36"
        r={r}
        fill="none"
        stroke="var(--color-brass)"
        strokeWidth="4"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - v)}
        transform="rotate(-90 36 36)"
      />
    </svg>
  );
}

export function Callout({ tone, label, text }: { tone: "warn" | "note"; label: string; text: string }) {
  const edge = tone === "warn" ? "border-rust" : "border-brass";
  const ink = tone === "warn" ? "text-rust-text" : "text-brass";
  return (
    <div className={`border-l-2 bg-surface px-3 py-3 ${edge}`}>
      <div className={`font-display text-xs tracking-widest ${ink}`}>{label}</div>
      <p className="mt-1 text-sm">{text}</p>
    </div>
  );
}

export function Stepper({
  label,
  hint,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  hint?: string;
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border py-3">
      <div className="min-w-0">
        <div className="text-base">{label}</div>
        {hint ? <div className="text-sm text-muted">{hint}</div> : null}
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex size-11 items-center justify-center border border-border bg-surface text-fg"
          aria-label={`Fewer ${label}`}
          disabled={value <= min}
          onClick={() => onChange(value - 1)}
        >
          <Minus className="size-4" aria-hidden />
        </button>
        <span className="nums w-8 text-center font-display text-2xl">{value}</span>
        <button
          type="button"
          className="flex size-11 items-center justify-center border border-border bg-surface text-fg"
          aria-label={`More ${label}`}
          disabled={value >= max}
          onClick={() => onChange(value + 1)}
        >
          <Plus className="size-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}

export function Choice({
  on,
  label,
  onClick,
}: {
  on: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={
        on
          ? "min-h-11 border border-brass bg-brass px-3 py-2 font-display text-lg tracking-wide text-bg"
          : "min-h-11 border border-border bg-surface px-3 py-2 font-display text-lg tracking-wide text-fg"
      }
    >
      {label}
    </button>
  );
}
