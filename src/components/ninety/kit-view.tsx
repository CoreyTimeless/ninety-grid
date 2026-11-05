import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import { kit, kitCats, type KitCat } from "@/data/kit";
import { buildPlan } from "@/lib/calc";
import { usePrep } from "@/lib/prep-store";
import { Eyebrow } from "@/components/ninety/bits";

const priorityLabel = { critical: "CRITICAL", core: "CORE", later: "LATER" } as const;

export function KitView({ ready }: { ready: boolean }) {
  const household = usePrep((s) => s.household);
  const checks = usePrep((s) => s.checks);
  const toggle = usePrep((s) => s.toggleCheck);
  const clearChecks = usePrep((s) => s.clearChecks);
  const stock = useMemo(() => kit.filter((i) => i.cat !== "Nuclear"), []);
  const cats = kitCats.filter((c) => c !== "Nuclear");
  const plan = buildPlan(household);
  const [cat, setCat] = useState<KitCat | "All">("All");
  const [open, setOpen] = useState<string | null>(null);
  const [armClear, setArmClear] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fallback, setFallback] = useState("");

  const items = useMemo(() => (cat === "All" ? stock : stock.filter((i) => i.cat === cat)), [cat, stock]);
  const done = stock.filter((i) => checks[i.id]).length;

  async function copyGaps() {
    const lines = stock
      .filter((i) => i.priority === "critical" && !checks[i.id])
      .map((i) => `• ${i.name} — ${i.qty(plan)}`);
    const text = lines.length ? `NINETY critical gaps\n\n${lines.join("\n")}` : "Critical kit is checked off.";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setFallback("");
    } catch {
      setCopied(false);
      setFallback(text);
    }
  }

  return (
    <div className="fade-in">
      <Eyebrow>BUY IT, THEN CHECK IT</Eyebrow>
      <h1 className="mt-2 font-display text-5xl">Kit</h1>
      <p className="mt-2 text-muted">
        {ready ? `${done} of ${stock.length} rows packed on this device.` : "Loading what you already checked."}{" "}
        Quantities follow the household in Plan.
      </p>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {(["All", ...cats] as const).map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={cat === c}
            onClick={() => setCat(c)}
            className={
              cat === c
                ? "shrink-0 min-h-11 bg-brass px-3 font-display text-lg text-bg"
                : "shrink-0 min-h-11 border border-border px-3 font-display text-lg"
            }
          >
            {c}
          </button>
        ))}
      </div>
      <ul className="mt-2">
        {items.map((item) => {
          const on = Boolean(checks[item.id]);
          const expanded = open === item.id;
          return (
            <li key={item.id} className="border-t border-border">
              <div className="flex gap-3 py-3">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={on}
                  aria-label={`${on ? "Packed" : "Not packed"}: ${item.name}`}
                  onClick={() => toggle(item.id)}
                  className={
                    on
                      ? "mt-1 flex size-11 shrink-0 items-center justify-center bg-brass text-bg"
                      : "mt-1 flex size-11 shrink-0 items-center justify-center border border-border text-muted"
                  }
                >
                  {on ? <Check className="size-5" aria-hidden /> : null}
                </button>
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? null : item.id)}
                  className="min-w-0 flex-1 py-1 text-left"
                >
                  <span className="font-display text-xs tracking-widest text-muted">
                    {item.cat} · {priorityLabel[item.priority]}
                  </span>
                  <span className={on ? "mt-1 block font-display text-2xl text-muted" : "mt-1 block font-display text-2xl"}>
                    {item.name}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{item.qty(plan)}</span>
                </button>
              </div>
              {expanded ? (
                <div className="space-y-3 pb-4 pl-14">
                  <p>{item.detail}</p>
                  <p>
                    <span className="font-display text-xs tracking-widest text-brass">GET IT</span>
                    <span className="mt-1 block text-sm">{item.get}</span>
                  </p>
                  <p>
                    <span className="font-display text-xs tracking-widest text-brass">USE IT</span>
                    <span className="mt-1 block text-sm">{item.use}</span>
                  </p>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
      <div className="mt-6 flex flex-col gap-2">
        <button type="button" onClick={() => void copyGaps()} className="min-h-11 border border-brass px-3 font-display text-lg text-brass">
          {copied ? "Copied the critical gaps" : "Copy critical gaps"}
        </button>
        {armClear ? (
          <button
            type="button"
            onClick={() => {
              clearChecks();
              setArmClear(false);
            }}
            className="min-h-11 border border-rust px-3 font-display text-lg text-rust-text"
          >
            Confirm: clear every check
          </button>
        ) : (
          <button type="button" onClick={() => setArmClear(true)} className="min-h-11 px-3 text-left font-display text-lg text-muted">
            Clear checks
          </button>
        )}
      </div>
      {fallback ? (
        <pre className="mt-4 overflow-x-auto whitespace-pre-wrap border border-border p-3 text-sm">{fallback}</pre>
      ) : null}
    </div>
  );
}
