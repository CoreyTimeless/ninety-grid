import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultHousehold, emptyNotes, type Household, type Notes } from "@/data/types";

type PrepState = {
  household: Household;
  notes: Notes;
  checks: Record<string, boolean>;
  drills: Record<string, boolean>;
  setHousehold: (patch: Partial<Household>) => void;
  setNotes: (patch: Partial<Notes>) => void;
  toggleCheck: (id: string) => void;
  toggleDrill: (id: string) => void;
  clearChecks: () => void;
};

const memory = new Map<string, string>();

const safeStorage = {
  getItem: (key: string) => {
    if (typeof window === "undefined") return memory.get(key) ?? null;
    return localStorage.getItem(key);
  },
  setItem: (key: string, value: string) => {
    if (typeof window === "undefined") memory.set(key, value);
    else localStorage.setItem(key, value);
  },
  removeItem: (key: string) => {
    if (typeof window === "undefined") memory.delete(key);
    else localStorage.removeItem(key);
  },
};

export const usePrep = create<PrepState>()(
  persist(
    (set) => ({
      household: defaultHousehold,
      notes: emptyNotes,
      checks: {},
      drills: {},
      setHousehold: (patch) =>
        set((s) => ({ household: { ...s.household, ...patch } })),
      setNotes: (patch) => set((s) => ({ notes: { ...s.notes, ...patch } })),
      toggleCheck: (id) =>
        set((s) => ({ checks: { ...s.checks, [id]: !s.checks[id] } })),
      toggleDrill: (id) =>
        set((s) => ({ drills: { ...s.drills, [id]: !s.drills[id] } })),
      clearChecks: () => set({ checks: {} }),
    }),
    {
      name: "ninety-field-manual",
      storage: {
        getItem: (name) => {
          const raw = safeStorage.getItem(name);
          return raw ? JSON.parse(raw) : null;
        },
        setItem: (name, value) => safeStorage.setItem(name, JSON.stringify(value)),
        removeItem: (name) => safeStorage.removeItem(name),
      },
      skipHydration: true,
      version: 1,
    },
  ),
);
