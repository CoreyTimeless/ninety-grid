import { useState } from "react";
import { decayScale, fmt } from "@/lib/calc";
import { Eyebrow } from "@/components/ninety/bits";

const MARKS: { label: string; hours: number }[] = [
  { label: "7 hours", hours: 7 },
  { label: "24 hours", hours: 24 },
  { label: "49 hours", hours: 49 },
  { label: "14 days", hours: 336 },
];

export function DecayTool() {
  const [rate, setRate] = useState("");
  const [unit, setUnit] = useState("mR/h");
  const [refH, setRefH] = useState("1");
  const ref = Number(refH);
  const typed = rate.trim() === "" ? null : Number(rate);
  const refOk = Number.isFinite(ref) && ref > 0;
  const rateOk = typed === null || (Number.isFinite(typed) && typed >= 0);

  return (
    <section className="border border-border bg-surface p-4">
      <Eyebrow>FALLOUT CLOCK</Eyebrow>
      <h2 className="mt-2 font-display text-3xl">Seven-ten rule</h2>
      <p className="mt-2 text-sm text-muted">
        Fresh mixed fallout, roughly: dose rate falls about tenfold each time the hours since
        detonation multiply by seven. This is not a reading from your street. A meter is a reading.
        Officials override both.
      </p>
      <label className="mt-4 block text-sm text-muted" htmlFor="dose-rate">
        Meter reading, if you have one
      </label>
      <div className="mt-1 flex gap-2">
        <input
          id="dose-rate"
          inputMode="decimal"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Leave blank for percents"
          className="nums min-h-11 w-full border border-border bg-bg px-3 text-fg"
        />
        <select
          aria-label="Dose unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="min-h-11 border border-border bg-bg px-2 text-fg"
        >
          <option>mR/h</option>
          <option>µSv/h</option>
        </select>
      </div>
      <label className="mt-3 block text-sm text-muted" htmlFor="ref-hours">
        Hours after detonation when that reading was taken
      </label>
      <input
        id="ref-hours"
        inputMode="decimal"
        value={refH}
        onChange={(e) => setRefH(e.target.value)}
        className="nums mt-1 min-h-11 w-full border border-border bg-bg px-3 text-fg"
      />
      {!refOk || !rateOk ? (
        <p className="mt-3 text-sm text-rust-text">Enter a positive time, and a reading that is a number.</p>
      ) : (
        <ul className="mt-4 border-t border-border">
          {MARKS.map((m) => {
            const scale = decayScale(m.hours, ref);
            const shown = typed === null ? scale * 100 : typed * scale;
            const suffix = typed === null ? "% of that moment" : ` ${unit}`;
            return (
              <li key={m.label} className="flex items-baseline justify-between gap-3 border-b border-border py-3">
                <span className="text-sm">{m.label}</span>
                <span className="nums font-display text-2xl">
                  {fmt(shown, typed === null ? 1 : shown >= 10 ? 0 : 2)}
                  <span className="font-body text-sm text-muted">{suffix}</span>
                </span>
              </li>
            );
          })}
        </ul>
      )}
      <p className="mt-3 text-sm text-muted">
        About 1 mR is 10 µSv. If you do not know when the detonation happened, ignore the table and
        stay inside.
      </p>
    </section>
  );
}

export function BleachTool({ initialGallons }: { initialGallons: number }) {
  const [gallons, setGallons] = useState(String(Math.max(1, Math.round(initialGallons || 1))));
  const [cloudy, setCloudy] = useState(false);
  const g = Number(gallons);
  const ok = Number.isFinite(g) && g > 0;
  const drops6 = ok ? g * (cloudy ? 16 : 8) : 0;
  const drops825 = ok ? g * (cloudy ? 12 : 6) : 0;
  const tsp6 = drops6 / 64;

  return (
    <section className="border border-border bg-surface p-4">
      <Eyebrow>DISINFECT</Eyebrow>
      <h2 className="mt-2 font-display text-3xl">Bleach dose</h2>
      <p className="mt-2 text-sm text-muted">
        Unscented regular bleach only. If it was cloudy, pour off the clear part first, then double the dose — also double it if the water is very cold. Wait 30 minutes. You want a faint chlorine smell. Pool shock is not this recipe.
      </p>
      <label className="mt-4 block text-sm text-muted" htmlFor="bleach-gal">
        Gallons to treat
      </label>
      <input
        id="bleach-gal"
        inputMode="decimal"
        value={gallons}
        onChange={(e) => setGallons(e.target.value)}
        className="nums mt-1 min-h-11 w-full border border-border bg-bg px-3 text-fg"
      />
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button
          type="button"
          aria-pressed={!cloudy}
          onClick={() => setCloudy(false)}
          className={!cloudy ? "min-h-11 bg-brass font-display text-lg text-bg" : "min-h-11 border border-border font-display text-lg"}
        >
          Clear
        </button>
        <button
          type="button"
          aria-pressed={cloudy}
          onClick={() => setCloudy(true)}
          className={cloudy ? "min-h-11 bg-brass font-display text-lg text-bg" : "min-h-11 border border-border font-display text-lg"}
        >
          Cloudy or cold
        </button>
      </div>
      {ok ? (
        <ul className="mt-4 border-t border-border text-sm">
          <li className="flex justify-between gap-3 border-b border-border py-3">
            <span>5–6% bleach</span>
            <span className="nums text-right font-display text-2xl">
              {fmt(drops6, 0)} drops
              <span className="block font-body text-sm text-muted">{fmt(tsp6, tsp6 >= 10 ? 0 : 1)} tsp</span>
            </span>
          </li>
          <li className="flex justify-between gap-3 py-3">
            <span>8.25% bleach</span>
            <span className="nums font-display text-2xl">{fmt(drops825, 0)} drops</span>
          </li>
        </ul>
      ) : (
        <p className="mt-3 text-sm text-rust-text">Enter how many gallons.</p>
      )}
    </section>
  );
}
