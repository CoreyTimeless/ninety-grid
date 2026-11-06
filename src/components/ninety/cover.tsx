import { Disclaimer, Eyebrow, Rule } from "@/components/ninety/bits";

export function Cover({ onOpen, onNow }: { onOpen: () => void; onNow: () => void }) {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <div className="relative">
        <img
          src="/cover.jpg"
          alt="A lantern, a water jug, a pot, and a radio on a table in a dark kitchen."
          className="h-[42vh] w-full object-cover object-[center_40%]"
        />
        <div className="absolute inset-x-0 top-0 flex items-baseline justify-between px-5 pt-6">
          <span className="font-display text-xs tracking-widest text-brass">FM–90</span>
          <span className="font-display text-xs tracking-widest text-fg">GRID ONLY</span>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col px-5 pb-8">
        <div className="flex flex-1 flex-col justify-end pb-8">
          <Eyebrow>A CIVIL FIELD MANUAL</Eyebrow>
          <h1 className="mt-2 font-display text-7xl leading-none">NINETY</h1>
          <div className="mt-4">
            <Rule />
          </div>
          <p className="mt-4 font-display text-3xl leading-none">
            Ninety days
            <br />
            without the grid
          </p>
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="min-h-12 w-full bg-brass px-4 py-3 text-left font-display text-2xl tracking-wide text-bg"
        >
          Open the manual
        </button>
        <button
          type="button"
          onClick={onNow}
          className="mt-3 min-h-12 w-full border border-border px-4 py-3 text-left font-display text-xl"
        >
          If this is happening now
        </button>
      </div>
    </div>
  );
}

export function TitlePage() {
  return (
    <header className="border border-border px-4 pt-8 pb-6">
      <div className="flex items-baseline justify-between gap-3">
        <Eyebrow>FM–90</Eyebrow>
        <p className="font-display text-xs tracking-widest text-muted">GRID ONLY EDITION</p>
      </div>
      <h1 className="mt-12 font-display text-6xl leading-none">NINETY</h1>
      <p className="mt-3 font-display text-3xl leading-none">Ninety Days Without the Grid</p>
      <div className="mt-5">
        <Rule />
      </div>
      <p className="mt-5 text-lg">
        A field manual for a household that has lost the power grid and means to last ninety days.
      </p>
      <p className="mt-6 text-sm text-muted">The household copy.</p>
      <div className="mt-4">
        <Disclaimer />
      </div>
    </header>
  );
}
