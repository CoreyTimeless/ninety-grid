export type Climate = "hot-dry" | "temperate" | "cold";
export type Scenario = "grid" | "nuclear" | "both";

export type Household = {
  adults: number;
  children: number;
  infants: number;
  pets: number;
  days: number;
  waterDaysStored: number;
  climate: Climate;
  scenario: Scenario;
};

export type Notes = {
  rallyNear: string;
  rallyFar: string;
  contact: string;
  medical: string;
  radio: string;
};

export type Block =
  | { k: "p"; t: string }
  | { k: "h"; t: string }
  | { k: "warn"; t: string }
  | { k: "note"; t: string }
  | { k: "steps"; items: string[] }
  | { k: "bullets"; items: string[] }
  | { k: "table"; head: string[]; rows: string[][] };

export type Chapter = {
  id: string;
  n: string;
  title: string;
  dek: string;
  blocks: Block[];
};

export const emptyNotes: Notes = {
  rallyNear: "",
  rallyFar: "",
  contact: "",
  medical: "",
  radio: "",
};

export const defaultHousehold: Household = {
  adults: 2,
  children: 0,
  infants: 0,
  pets: 0,
  days: 90,
  waterDaysStored: 14,
  climate: "temperate",
  scenario: "grid",
};
