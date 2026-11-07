import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, CalendarClock, Compass, Package, Siren } from "lucide-react";
import { Brief } from "@/components/ninety/brief";
import { Cover } from "@/components/ninety/cover";
import { KitView } from "@/components/ninety/kit-view";
import { ManualView } from "@/components/ninety/manual-view";
import { NowView } from "@/components/ninety/now-view";
import { PlanView } from "@/components/ninety/plan-view";
import { usePrepReady } from "@/components/ninety/bits";

function savedScreen(): { opened: boolean; tab: Tab } {
  if (typeof window === "undefined") return { opened: false, tab: "brief" };
  try {
    const raw = localStorage.getItem("ninety-screen");
    if (!raw) return { opened: false, tab: "brief" };
    const parsed = JSON.parse(raw) as { opened?: boolean; tab?: Tab };
    const tab = parsed.tab && tabs.some((item) => item.id === parsed.tab) ? parsed.tab : "brief";
    return { opened: Boolean(parsed.opened), tab };
  } catch {
    return { opened: false, tab: "brief" };
  }
}

export const Route = createFileRoute("/")({
  ssr: false,
  component: Home,
});

type Tab = "brief" | "now" | "manual" | "kit" | "plan";

const tabs: { id: Tab; label: string; icon: typeof Compass }[] = [
  { id: "brief", label: "Brief", icon: Compass },
  { id: "now", label: "Now", icon: Siren },
  { id: "manual", label: "Manual", icon: BookOpen },
  { id: "kit", label: "Kit", icon: Package },
  { id: "plan", label: "Plan", icon: CalendarClock },
];

function Home() {
  const ready = usePrepReady();
  const saved = savedScreen();
  const [tab, setTab] = useState<Tab>(saved.tab);
  const [opened, setOpened] = useState(saved.opened);

  useEffect(() => {
    localStorage.setItem("ninety-screen", JSON.stringify({ opened, tab }));
  }, [opened, tab]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tab, opened]);

  if (!opened) {
    return (
      <Cover
        onOpen={() => {
          setTab("manual");
          setOpened(true);
        }}
        onNow={() => {
          setTab("now");
          setOpened(true);
        }}
      />
    );
  }

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-30 border-b border-border bg-bg">
        <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
          <button type="button" onClick={() => setTab("brief")} className="text-left">
            <div className="font-display text-xs tracking-widest text-brass">FM–90</div>
            <div className="font-display text-3xl leading-none">NINETY</div>
          </button>
          <div className="text-right">
            <div className="font-display text-xs tracking-widest text-muted">THIS EDITION</div>
            <div className="font-display text-lg leading-none">GRID ONLY</div>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-xl px-4 pt-5 pb-28">
        {tab === "brief" ? (
          <Brief ready={ready} onNow={() => setTab("now")} onPlan={() => setTab("plan")} onKit={() => setTab("kit")} />
        ) : null}
        {tab === "now" ? <NowView /> : null}
        {tab === "manual" ? <ManualView /> : null}
        {tab === "kit" ? <KitView ready={ready} /> : null}
        {tab === "plan" ? <PlanView /> : null}
      </main>
      <nav className="safe-bottom fixed inset-x-0 bottom-0 z-30 border-t border-border bg-bg" aria-label="Sections">
        <div className="mx-auto flex max-w-xl">
          {tabs.map((t) => {
            const Icon = t.icon;
            const on = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                aria-current={on ? "page" : undefined}
                onClick={() => setTab(t.id)}
                className={
                  on
                    ? "flex min-h-14 flex-1 flex-col items-center justify-center gap-1 text-brass"
                    : "flex min-h-14 flex-1 flex-col items-center justify-center gap-1 text-muted"
                }
              >
                <Icon className="size-5" aria-hidden />
                <span className="font-display text-sm tracking-wide">{t.label.toUpperCase()}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
