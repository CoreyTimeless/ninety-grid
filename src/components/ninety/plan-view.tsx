import { Check } from "lucide-react";
import type { Climate } from "@/data/types";
import { drills, phases } from "@/data/phases";
import { buildPlan, fmt, infantNote } from "@/lib/calc";
import { usePrep } from "@/lib/prep-store";
import { Choice, Disclaimer, Eyebrow, Stepper } from "@/components/ninety/bits";
import { BleachTool } from "@/components/ninety/tools";

const climates: { id: Climate; label: string }[] = [
  { id: "hot-dry", label: "Hot & dry" },
  { id: "temperate", label: "Mild" },
  { id: "cold", label: "Cold" },
];

export function PlanView() {
  const household = usePrep((s) => s.household);
  const setHousehold = usePrep((s) => s.setHousehold);
  const notes = usePrep((s) => s.notes);
  const setNotes = usePrep((s) => s.setNotes);
  const drillState = usePrep((s) => s.drills);
  const toggleDrill = usePrep((s) => s.toggleDrill);
  const plan = buildPlan(household);
  const note = infantNote(household);
  const phaseList = phases.filter((p) => p.scenario !== "nuclear");

  return (
    <div className="fade-in space-y-8">
      <div>
        <Eyebrow>ARITHMETIC FOR YOUR HOUSE</Eyebrow>
        <h1 className="mt-2 font-display text-5xl">Plan</h1>
        <p className="mt-2 text-muted">
          Stored on this device only. Copy the family card onto paper and put it in the shelter room.
        </p>
      </div>

      <section>
        <Eyebrow>HOUSEHOLD</Eyebrow>
        <Stepper label="Adults" hint="Count teenagers here." value={household.adults} min={0} max={12} onChange={(n) => setHousehold({ adults: n })} />
        <Stepper label="Children" hint="Roughly under 12. The calorie figure uses 1,600." value={household.children} min={0} max={12} onChange={(n) => setHousehold({ children: n })} />
        <Stepper label="Infants" hint="Not fed by the rice math." value={household.infants} min={0} max={8} onChange={(n) => setHousehold({ infants: n })} />
        <Stepper label="Pets" hint="Water only, at half a gallon each to start." value={household.pets} min={0} max={8} onChange={(n) => setHousehold({ pets: n })} />
      </section>

      <section>
        <Eyebrow>CLIMATE</Eyebrow>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {climates.map((c) => (
            <Choice key={c.id} on={household.climate === c.id} label={c.label} onClick={() => setHousehold({ climate: c.id })} />
          ))}
        </div>
        <p className="mt-2 text-sm text-muted">
          Hot and dry raises the water plan to 1.5 gallons per person. Cold raises adult calories. Mild stays at 1 gallon and 2,200 calories.
        </p>
      </section>

      <section>
        <Eyebrow>HOW LONG</Eyebrow>
        <p className="mt-2 text-sm text-muted">Food is planned for the full stretch. Water on the shelf is only the bridge.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {[14, 30, 90, 180].map((d) => (
            <Choice key={d} on={household.days === d} label={`${d} days`} onClick={() => setHousehold({ days: d })} />
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">Drinking water you will actually store</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {[3, 7, 14, 30].map((d) => (
            <Choice key={d} on={household.waterDaysStored === d} label={`${d} days`} onClick={() => setHousehold({ waterDaysStored: d })} />
          ))}
        </div>
      </section>

      <section className="border border-border bg-surface p-4">
        <Eyebrow>THE NUMBERS</Eyebrow>
        {plan.people === 0 && plan.pets === 0 ? (
          <p className="mt-3">Add at least one person.</p>
        ) : (
          <ul className="mt-2">
            <Row k="Water each day" v={`${fmt(plan.galPerDay, 1)} gal`} />
            <Row k="On the shelf" v={`${fmt(plan.galStored, 1)} gal · ${plan.jugs5}× 5-gal`} />
            <Row k="If you never make more" v={`${fmt(plan.galIfNoResupply, 0)} gal`} />
            <Row k="You will have to treat" v={`${fmt(plan.galToTreat, 0)} gal`} />
            <Row k="Calories each day" v={plan.kcalPerDay ? fmt(plan.kcalPerDay) : "—"} />
            <Row k="Rice" v={`${fmt(plan.riceLb)} lb`} />
            <Row k="Dry beans" v={`${fmt(plan.beansLb)} lb`} />
            <Row k="Oats" v={`${fmt(plan.oatsLb)} lb`} />
            <Row k="Pasta" v={`${fmt(plan.pastaLb)} lb`} />
            <Row k="Oil" v={`${fmt(plan.oilLb, 1)} lb`} />
            <Row k="Peanut butter" v={`${fmt(plan.pbLb, 1)} lb`} />
            <Row k="Salt / sugar" v={`${fmt(plan.saltLb)} / ${fmt(plan.sugarLb)} lb`} />
            <Row k="Canned beans" v={`${fmt(plan.cannedBeans)} cans`} />
            <Row k="Canned meat & fish" v={`${fmt(plan.cans)} cans`} />
          </ul>
        )}
        {note ? <p className="mt-3 text-sm text-muted">{note}</p> : null}
        <p className="mt-3 text-sm text-muted">
          A water heater is often 40–50 gallons. That is part of the bridge, not the ninety days. One fresh gallon of unscented bleach covers the treatment gap with room to spare. Cooking fuel: one 20-pound propane tank, stored outside, is the right unit for a careful household — test the hose.
        </p>
      </section>

      <section>
        <Eyebrow>CLOCK</Eyebrow>
        <h2 className="mt-2 font-display text-3xl">Ninety days, no grid</h2>
        <ol className="mt-4">
          {phaseList.map((p) => (
            <li key={p.id} className="border-t border-border py-4">
              <div className="font-display text-xs tracking-widest text-brass">
                {p.when}
              </div>
              <h3 className="mt-1 font-display text-2xl">{p.title}</h3>
              <ul className="mt-2 space-y-2">
                {p.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm">
                    <span className="mt-2 size-1.5 shrink-0 bg-brass" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <Eyebrow>DRILLS</Eyebrow>
        <h2 className="mt-2 font-display text-3xl">Do these while the lights work</h2>
        <ul className="mt-3">
          {drills.map((d) => {
            const on = Boolean(drillState[d.id]);
            return (
              <li key={d.id} className="border-t border-border">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={on}
                  onClick={() => toggleDrill(d.id)}
                  className="flex w-full gap-3 py-3 text-left"
                >
                  <span
                    className={
                      on
                        ? "mt-1 flex size-11 shrink-0 items-center justify-center bg-brass text-bg"
                        : "mt-1 flex size-11 shrink-0 items-center justify-center border border-border"
                    }
                    aria-hidden
                  >
                    {on ? <Check className="size-5" /> : null}
                  </span>
                  <span>
                    <span className={on ? "block font-display text-2xl text-muted" : "block font-display text-2xl"}>{d.title}</span>
                    <span className="mt-1 block text-sm text-muted">{d.text}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <Eyebrow>FAMILY CARD</Eyebrow>
        <h2 className="mt-2 font-display text-3xl">Write it, then copy it</h2>
        <Field label="Rally point if the house is closed" value={notes.rallyNear} onChange={(rallyNear) => setNotes({ rallyNear })} />
        <Field label="Rally point if the neighborhood is closed" value={notes.rallyFar} onChange={(rallyFar) => setNotes({ rallyFar })} />
        <Field label="Out-of-area contact" value={notes.contact} onChange={(contact) => setNotes({ contact })} />
        <Field label="Medicines, doses, allergies" value={notes.medical} onChange={(medical) => setNotes({ medical })} rows={4} />
        <Field label="Radio channel and NOAA frequency" value={notes.radio} onChange={(radio) => setNotes({ radio })} />
      </section>

      <BleachTool initialGallons={plan.galToTreat} />
      <Disclaimer />
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-border py-2 last:border-b-0">
      <span className="text-sm text-muted">{k}</span>
      <span className="nums text-right font-display text-2xl">{v}</span>
    </li>
  );
}

function Field({
  label,
  value,
  onChange,
  rows = 2,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <label className="mt-3 block">
      <span className="text-sm text-muted">{label}</span>
      <textarea
        rows={rows}
        maxLength={500}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full border border-border bg-surface px-3 py-3 text-fg"
      />
    </label>
  );
}
