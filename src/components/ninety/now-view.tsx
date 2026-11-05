import { gridSteps } from "@/data/now";
import { Eyebrow } from "@/components/ninety/bits";

export function NowView() {
  return (
    <div className="fade-in">
      <Eyebrow>DO THIS BEFORE YOU READ ANYTHING ELSE</Eyebrow>
      <h1 className="mt-2 font-display text-5xl">The grid is down</h1>
      <p className="mt-3 text-muted">
        Neighbors dark, phones still working for a little while, water pressure already on a timer.
        Do these in order.
      </p>
      <Steps steps={gridSteps} kicker="GRID CLOCK" />
    </div>
  );
}

function Steps({ steps, kicker }: { steps: { title: string; body: string }[]; kicker: string }) {
  return (
    <ol className="mt-6">
      {steps.map((s, i) => (
        <li key={s.title} className="border-t border-border py-5">
          <div className="font-display text-sm tracking-widest text-brass">
            {kicker} · {String(i + 1).padStart(2, "0")}
          </div>
          <h2 className="mt-1 font-display text-3xl">{s.title}</h2>
          <p className="mt-2">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
