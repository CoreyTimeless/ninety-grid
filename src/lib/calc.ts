import type { Climate, Household } from "@/data/types";

export type Plan = {
  days: number;
  waterDaysStored: number;
  adults: number;
  children: number;
  infants: number;
  pets: number;
  climate: Climate;
  people: number;
  galPerDay: number;
  galStored: number;
  galIfNoResupply: number;
  galToTreat: number;
  kcalPerDay: number;
  kcalTotal: number;
  riceLb: number;
  beansLb: number;
  oatsLb: number;
  pastaLb: number;
  oilLb: number;
  pbLb: number;
  saltLb: number;
  sugarLb: number;
  cans: number;
  cannedBeans: number;
  bleachTsp: number;
  jugs5: number;
};

const RICE_KCAL_PER_LB = 1650;
const BEAN_KCAL_PER_LB = 1500;
const OAT_KCAL_PER_LB = 1700;
const PASTA_KCAL_PER_LB = 1650;
const OIL_KCAL_PER_LB = 4000;
const PB_KCAL_PER_LB = 2600;

function waterRate(climate: Climate): number {
  if (climate === "hot-dry") return 1.5;
  return 1;
}

function adultKcal(climate: Climate): number {
  if (climate === "cold") return 2600;
  return 2200;
}

export function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

export function fmt(n: number, digits = 0): string {
  if (!Number.isFinite(n)) return "—";
  return n.toLocaleString("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
}

export function buildPlan(h: Household): Plan {
  const people = h.adults + h.children + h.infants;
  const galPerDay = people * waterRate(h.climate) + h.pets * 0.5;
  const galStored = galPerDay * h.waterDaysStored;
  const galIfNoResupply = galPerDay * h.days;
  const galToTreat = Math.max(0, galIfNoResupply - galStored);
  const nursing = h.infants > 0 && h.adults > 0 ? 500 : 0;
  const kcalPerDay = h.adults * adultKcal(h.climate) + h.children * 1600 + nursing;
  const kcalTotal = kcalPerDay * h.days;
  const scale = kcalPerDay > 0 ? (kcalPerDay / 2200) * (h.days / 90) : 0;

  return {
    days: h.days,
    waterDaysStored: h.waterDaysStored,
    adults: h.adults,
    children: h.children,
    infants: h.infants,
    pets: h.pets,
    climate: h.climate,
    people,
    galPerDay: round1(galPerDay),
    galStored: round1(galStored),
    galIfNoResupply: round1(galIfNoResupply),
    galToTreat: round1(galToTreat),
    kcalPerDay,
    kcalTotal,
    riceLb: Math.round(48 * scale),
    beansLb: Math.round(33 * scale),
    oatsLb: Math.round(12 * scale),
    pastaLb: Math.round(12 * scale),
    oilLb: Math.round(5 * scale * 10) / 10,
    pbLb: Math.round(4 * scale * 10) / 10,
    saltLb: Math.max(0, Math.round(people * (h.days / 90) * 2)),
    sugarLb: Math.max(0, Math.round(people * (h.days / 90) * 4)),
    cans: people * Math.round((45 * h.days) / 90),
    cannedBeans: people * Math.round((14 * h.days) / 90),
    bleachTsp: round1((galToTreat * 2) / 8),
    jugs5: galStored > 0 ? Math.ceil(galStored / 5) : 0,
  };
}

/** Relative dose rate vs a reading taken `refHours` after detonation. 7-10 rule, t^-1.2. */
export function decayScale(atHours: number, refHours: number): number {
  if (atHours <= 0 || refHours <= 0) return Number.NaN;
  return Math.pow(refHours / atHours, 1.2);
}

export function infantNote(h: Household): string | null {
  if (h.infants <= 0) return null;
  return "Infants need breast milk or the formula they already tolerate, mixed with treated water. Do not substitute rice, beans, or cow's milk. A nursing parent needs extra water and about 500 extra calories a day — that calorie bump is included when you count at least one adult.";
}
