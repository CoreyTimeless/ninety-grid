import { kit } from "@/data/kit";
import { buildPlan, fmt, infantNote } from "@/lib/calc";
import { usePrep } from "@/lib/prep-store";
import { Disclaimer, Eyebrow, Ring, Rule } from "@/components/ninety/bits";

export function Brief({
  ready,
  onNow,
  onPlan,
  onKit,
}: {
  ready: boolean;
  onNow: () => void;
  onPlan: () => void;
  onKit: () => void;
}) {
  const household = usePrep((s) => s.household);
  const checks = usePrep((s) => s.checks);
  const plan = buildPlan(household);
  const critical = kit.filter((i) => i.cat !== "Nuclear" && i.priority === "critical");
  const done = critical.filter((i) => checks[i.id]).length;
  const ratio = critical.length ? done / critical.length : 0;
  const note = infantNote(household);

  return (
    <div className="fade-in">
      <Eyebrow>CIVIL FIELD MANUAL</Eyebrow>
      <h1 className="mt-3 font-display text-7xl leading-none">90</h1>
      <p className="mt-2 font-display text-3xl leading-none">DAYS WITHOUT THE GRID</p>
      <div className="mt-4">
        <Rule />
      </div>
      <p className="mt-4 text-lg">
        Water, food, a bucket, and a way to cook that does not gas the house. Buy it before the
        dark. This edition is the power grid only.
      </p>

      <button
        type="button"
        onClick={onNow}
        className="mt-6 min-h-12 w-full bg-brass px-4 py-3 text-left font-display text-2xl tracking-wide text-bg"
      >
        If this is happening now
      </button>

      <section className="mt-8 border border-border bg-surface p-4">
        <div className="flex items-center gap-4">
          <Ring value={ready ? ratio : 0} />
          <div>
            <Eyebrow>CRITICAL KIT</Eyebrow>
            <p className="nums mt-1 font-display text-4xl leading-none">
              {ready ? `${done}/${critical.length}` : "—"}
            </p>
            <p className="mt-1 text-sm text-muted">Packed rows that change the first week.</p>
          </div>
        </div>
        <button type="button" onClick={onKit} className="mt-4 font-display text-lg text-brass">
          Open the kit list
        </button>
      </section>

      <section className="mt-4 border border-border p-4">
        <Eyebrow>THIS HOUSEHOLD</Eyebrow>
        {plan.people === 0 && plan.pets === 0 ? (
          <p className="mt-2">Add your people in Plan. The pounds and gallons are waiting on a number.</p>
        ) : (
          <ul className="mt-3 space-y-3">
            <Stat k="Water per day" v={`${fmt(plan.galPerDay, plan.galPerDay % 1 ? 1 : 0)} gal`} />
            <Stat
              k={`Store for ${plan.waterDaysStored} days`}
              v={`${fmt(plan.galStored, plan.galStored % 1 ? 1 : 0)} gal`}
            />
            <Stat
              k={`If you never make more, ${plan.days} days`}
              v={`${fmt(plan.galIfNoResupply, 0)} gal`}
            />
            <Stat k="Food target" v={plan.kcalPerDay ? `${fmt(plan.kcalPerDay)} kcal/day` : "—"} />
          </ul>
        )}
        {note ? <p className="mt-3 text-sm text-muted">{note}</p> : null}
        <button type="button" onClick={onPlan} className="mt-4 font-display text-lg text-brass">
          Set people, climate, and days
        </button>
      </section>

      <section className="mt-8">
        <Eyebrow>ORDER OF OPERATIONS</Eyebrow>
        <ol className="mt-3">
          {[
            ["Air", "Carbon monoxide and smoke. A full pantry does not fix a poisoned room."],
            ["Water", "Capture what is in the house. Treat everything you did not watch come out of a tap."],
            ["Waste", "Two buckets before anyone flushes a dead sewer."],
            ["Food", "Fridge, then freezer, then the pantry you actually built."],
            ["Word", "A crank radio at two set hours. Rumor is not a source."],
          ].map(([title, body], i) => (
            <li key={title} className="border-t border-border py-3">
              <div className="font-display text-sm tracking-widest text-brass">0{i + 1}</div>
              <div className="font-display text-2xl">{title}</div>
              <p className="text-sm text-muted">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-6">
        <Disclaimer />
      </div>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <li className="flex items-baseline justify-between gap-4">
      <span className="text-sm text-muted">{k}</span>
      <span className="nums text-right font-display text-2xl">{v}</span>
    </li>
  );
}
