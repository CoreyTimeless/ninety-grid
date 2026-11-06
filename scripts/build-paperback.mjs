import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { chapters } from "../src/data/chapters.ts";

const HIDDEN = new Set(["clocks", "nuclear-hour", "radiation", "ki"]);
const CHROME =
  "/opt/pw-browsers/chromium_headless_shell-1248/chrome-headless-shell-linux64/chrome-headless-shell";
const ROOT = "/workspace/print";
const CREAM = 0.0025;
const BLEED = 0.125;
const TRIM_W = 6;
const TRIM_H = 9;

const manual = chapters.filter((c) => !HIDDEN.has(c.id));

function esc(s) {
  return s
    .replace(/&/g, "&")
    .replace(/</g, "<")
    .replace(/>/g, ">");
}

function block(b) {
  if (b.k === "h") return `<h2>${esc(b.t)}</h2>`;
  if (b.k === "p") return `<p>${esc(b.t)}</p>`;
  if (b.k === "warn")
    return `<aside class="call"><p class="lab">Warning</p><p>${esc(b.t)}</p></aside>`;
  if (b.k === "note")
    return `<aside class="call"><p class="lab">Note</p><p>${esc(b.t)}</p></aside>`;
  if (b.k === "steps")
    return `<ol class="steps">${b.items.map((item) => `<li>${esc(item)}</li>`).join("")}</ol>`;
  if (b.k === "bullets")
    return `<ul>${b.items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
  const head = b.head.map((h) => `<th>${esc(h)}</th>`).join("");
  const rows = b.rows
    .map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`)
    .join("");
  return `<table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>`;
}

const kit = [
  [
    "Water",
    [
      ["Stored drinking water", "Critical", "14 gallons per person. That is the bridge. Ninety days with nothing new is 90 gallons per person, which you will not stack in a hall. Store the bridge and own a way to treat the rest."],
      ["Unscented bleach, 5–6%", "Critical", "One fresh gallon for the house. Clear water: 8 drops, about 1/8 teaspoon, per gallon. Cloudy, colored, or very cold: double it. Wait 30 minutes. You want a faint pool smell. Strength fades inside a year."],
      ["Filter", "Core", "One pump or gravity filter the house can share, and a spare cartridge if the model uses one. A backpack filter does not catch viruses. Disinfect after it."],
      ["Chlorine dioxide tablets", "Core", "Enough for the stored gallons, so a bad batch can be treated in the dark. Follow that bottle, not a number from a different brand."],
      ["Carriers", "Core", "Two you can lift when they are full, and one bottle per person. A gallon is about 8 pounds."],
    ],
  ],
  [
    "Food, one adult, ninety days, mild weather",
    [
      ["White rice", "Critical", "48 pounds."],
      ["Dry beans and lentils", "Critical", "33 pounds."],
      ["Canned beans", "Core", "14 cans. These are the first two weeks, when you do not want a long fire."],
      ["Rolled oats", "Core", "12 pounds."],
      ["Pasta", "Core", "12 pounds."],
      ["Cooking oil", "Critical", "5 pounds, about two-thirds of a gallon."],
      ["Peanut butter", "Critical", "4 pounds, if everyone in the house can eat it."],
      ["Canned fish and meat", "Critical", "45 cans."],
      ["Salt and sugar", "Critical", "2 pounds of salt. 4 pounds of sugar."],
      ["Multivitamin and vitamin C", "Core", "One 100-count bottle."],
      ["Manual can openers", "Critical", "Two, stored in different rooms."],
      ["Pots", "Critical", "One family pot with a lid, and one smaller pot or a kettle."],
    ],
  ],
  [
    "Fire",
    [
      ["Outdoor stove and fuel", "Critical", "One stove you have already lit. One 20-pound propane tank, stored outside, upright. A few one-pound canisters for wet days. A wood method if the tank runs out."],
      ["Lighters and matches", "Critical", "Three lighters and two boxes of matches, split across two rooms."],
      ["ABC extinguisher", "Critical", "One on each floor you live on."],
      ["Carbon monoxide alarm", "Critical", "A battery alarm in the room you will actually sleep in. Flame stays outside."],
    ],
  ],
  [
    "Health",
    [
      ["Prescriptions", "Critical", "As many days as you can legally get. The name, the dose, and the schedule, on paper."],
      ["Wound kit", "Critical", "Gloves, gauze, tape, non-stick pads, tweezers, soap, and a 60 ml syringe. One kit in the house, a smaller one in the room you will close."],
      ["Oral rehydration salts", "Critical", "Six packets per person, and at least eight in the house."],
      ["N95 respirators", "Core", "Seven per person. More if the season is smoke."],
      ["Glasses, soap, menstrual supplies", "Critical", "The spare pair, or the prescription on paper. Three bars of soap per person. Ninety days of the products you already use."],
    ],
  ],
  [
    "Clean",
    [
      ["Two-bucket toilet", "Critical", "Two 5-gallon buckets with lids. Mark them. A sack of sawdust, peat, coir, or shredded paper. Contractor bags."],
      ["Toilet paper and bags", "Core", "About thirteen rolls per person, and thirty heavy bags for the house. Store the paper where it cannot get wet."],
      ["Handwash jug", "Critical", "One jug that is not a drinking jug. Soap on a rope. The gray water does not go back in the drinking water."],
    ],
  ],
  [
    "Shelter, signal, house",
    [
      ["Sleep system", "Critical", "One per person, rated colder than your worst night. Two spare wool blankets for the house. Hats. Dry socks."],
      ["Plastic, tape, dark cloth", "Core", "One roll of sheeting, two rolls of duct tape, and covers for the windows of one room."],
      ["NOAA radio", "Critical", "One hand-crank radio with weather band, AM, and FM. A spare if you can. Paint your frequency on it."],
      ["Phone power", "Core", "One charged power bank per adult, one small solar panel, the cable that actually fits, and a paper map of the county."],
      ["Headlamps and batteries", "Critical", "Two headlamps. Twenty-four AA cells, dated, still in the pack."],
      ["Shutoff wrench", "Critical", "One, on a hook by the door. You have found the water main and the gas meter while the lights were on."],
      ["Knife, gloves, cord, bicycle", "Core", "One pair of work gloves per adult. One knife. Fifty feet of cord. A bicycle with a pump, if you ride."],
      ["Cash and paper", "Critical", "Small bills. Copies of identification, insurance, and the medicine list. The card at the back of this book, filled in."],
    ],
  ],
];

function kitHtml() {
  const groups = kit
    .map(([name, items]) => {
      const rows = items
        .map(
          ([title, priority, text]) => `<div class="item">
            <div class="item-h"><h3>${esc(title)}</h3><span>${esc(priority)}</span></div>
            <p>${esc(text)}</p>
          </div>`,
        )
        .join("");
      return `<h2>${esc(name)}</h2>${rows}`;
    })
    .join("");
  return `<article class="chapter" id="kit">
    <p class="kicker">Appendix</p>
    <h1>The kit</h1>
    <p class="dek">Buy it before the dark. Food weights are for one adult, ninety days, mild weather. A second adult doubles the food and the water. A child is not a full adult. Hot weather is one and a half gallons, not one. Cold weather costs more calories. The phone edition of this manual does that arithmetic for a real household.</p>
    ${groups}
    <h2>A worked copy</h2>
    <p>Two adults. No children. Mild weather. Ninety days. Fourteen days of water stored in the house.</p>
    <table>
      <thead><tr><th>Item</th><th>Amount</th></tr></thead>
      <tbody>
        <tr><td>Water per day</td><td>2 gallons</td></tr>
        <tr><td>Store now</td><td>28 gallons, about six 5-gallon jugs</td></tr>
        <tr><td>If you never make more</td><td>180 gallons</td></tr>
        <tr><td>White rice</td><td>96 pounds</td></tr>
        <tr><td>Dry beans and lentils</td><td>66 pounds</td></tr>
        <tr><td>Rolled oats</td><td>24 pounds</td></tr>
        <tr><td>Pasta</td><td>24 pounds</td></tr>
        <tr><td>Cooking oil</td><td>10 pounds</td></tr>
        <tr><td>Peanut butter</td><td>8 pounds</td></tr>
        <tr><td>Canned fish and meat</td><td>90 cans</td></tr>
        <tr><td>Canned beans</td><td>28 cans</td></tr>
        <tr><td>Salt and sugar</td><td>4 pounds and 8 pounds</td></tr>
      </tbody>
    </table>
  </article>`;
}

function cardHtml() {
  const fields = [
    "Adults, children, infants, pets",
    "Water per day",
    "Gallons stored",
    "Out-of-area contact",
    "Phone of that contact",
    "Rally point, near",
    "Rally point, farther",
    "Morning check, afternoon check",
    "NOAA weather channel",
    "Where the water main is",
    "Where the gas meter is",
    "Where the panel is",
    "Allergies",
  ];
  const lines = fields
    .map((label) => `<div class="field"><span>${esc(label)}</span><i></i></div>`)
    .join("");
  return `<article class="chapter" id="card">
    <p class="kicker">The household copy</p>
    <h1>Fill this in</h1>
    <p class="dek">Ink, not a note on the phone. The phone is the thing that dies.</p>
    ${lines}
    <h2>Medicines</h2>
    <p class="fine">Name, dose, and what time. One line each.</p>
    <div class="field"><span>1</span><i></i></div>
    <div class="field"><span>2</span><i></i></div>
    <div class="field"><span>3</span><i></i></div>
    <div class="field"><span>4</span><i></i></div>
    <div class="field"><span>5</span><i></i></div>
    <div class="field"><span>6</span><i></i></div>
  </article>`;
}

const css = `
@font-face { font-family: "Barlow Condensed"; src: url("fonts/BarlowCondensed-500.ttf") format("truetype"); font-weight: 500; font-style: normal; }
@font-face { font-family: "Barlow Condensed"; src: url("fonts/BarlowCondensed-600.ttf") format("truetype"); font-weight: 600; font-style: normal; }
@font-face { font-family: "Barlow Condensed"; src: url("fonts/BarlowCondensed-700.ttf") format("truetype"); font-weight: 700; font-style: normal; }
@font-face { font-family: "Source Serif 4"; src: url("fonts/SourceSerif4-400.ttf") format("truetype"); font-weight: 400; font-style: normal; }
@font-face { font-family: "Source Serif 4"; src: url("fonts/SourceSerif4-600.ttf") format("truetype"); font-weight: 600; font-style: normal; }
* { box-sizing: border-box; }
html { font-family: "Source Serif 4", "Liberation Serif", serif; color: #111; }
body { margin: 0; font-size: 10.5pt; line-height: 1.42; hyphens: none; }
@page { size: 6in 9in; margin: 0.7in 0.64in 0.75in 0.85in;
  @bottom-center { content: counter(page); font-family: "Barlow Condensed", sans-serif; font-size: 10pt; letter-spacing: 0.06em; color: #222; }
}
@page :left { margin: 0.7in 0.85in 0.75in 0.62in; }
@page :right { margin: 0.7in 0.62in 0.75in 0.85in; }
@page plain { @bottom-center { content: none; } }
.title, .copy { page: plain; }
.copy, .toc, .chapter, .blank { break-before: page; }
.blank { page: plain; }
.blank p { margin-top: 3.2in; text-align: center; font-family: "Barlow Condensed", sans-serif; letter-spacing: 0.16em; font-size: 11pt; }
h1, h2, h3 { font-family: "Barlow Condensed", sans-serif; font-weight: 600; line-height: 0.95; hyphens: none; }
p { margin: 0.55em 0; orphans: 3; widows: 3; }
.title { padding-top: 1.35in; }
.title .kicker, .kicker { font-family: "Barlow Condensed", sans-serif; font-weight: 600; letter-spacing: 0.16em; font-size: 11pt; margin: 0; }
.title h1 { font-size: 68pt; font-weight: 600; margin: 0.12in 0 0; letter-spacing: 0.01em; }
.title .sub { font-family: "Barlow Condensed", sans-serif; font-weight: 600; font-size: 22pt; line-height: 1; margin: 0.16in 0 0; }
.rule { width: 0.55in; height: 1.5pt; background: #111; margin: 0.22in 0; }
.title .edition { font-family: "Barlow Condensed", sans-serif; letter-spacing: 0.14em; font-size: 12pt; font-weight: 600; margin: 0; }
.title .deck { font-size: 12.5pt; line-height: 1.35; max-width: 4.3in; margin-top: 0.7in; }
.copy h1 { font-size: 28pt; margin: 0 0 0.2in; }
.copy p, .fine { font-size: 9.5pt; line-height: 1.4; }
.toc h1 { font-size: 36pt; margin: 0 0 0.28in; }
.toc ol { list-style: none; margin: 0; padding: 0; }
.toc li { margin: 0; }
.toc a { display: flex; gap: 0.4em; align-items: baseline; color: inherit; text-decoration: none; font-family: "Barlow Condensed", sans-serif; font-weight: 600; font-size: 13.5pt; line-height: 1.05; padding: 0.16em 0; border-bottom: 0.4pt solid #ccc; }
.toc a .n { width: 1.2em; letter-spacing: 0.04em; }
.toc a .t { flex: 1; }
.toc a .pg { font-weight: 500; min-width: 1.5em; text-align: right; }
.chapter .kicker { margin-bottom: 0.08in; }
.chapter h1 { font-size: 32pt; margin: 0; }
.dek { font-size: 12pt; line-height: 1.32; margin-top: 0.16in; }
h2 { font-size: 16pt; margin: 0.28in 0 0.08in; break-after: avoid; }
h3 { font-size: 13pt; margin: 0; }
ul, ol.steps { margin: 0.45em 0 0.7em; padding: 0; }
ul { list-style: none; }
ul li { position: relative; padding-left: 0.85em; margin: 0.32em 0; }
ul li::before { content: ""; position: absolute; left: 0; top: 0.48em; width: 0.28em; height: 0.28em; background: #111; }
ol.steps { list-style: none; counter-reset: step; }
ol.steps li { counter-increment: step; display: grid; grid-template-columns: 1.35em 1fr; column-gap: 0.4em; margin: 0.4em 0; break-inside: avoid; }
ol.steps li::before { content: counter(step, decimal-leading-zero); font-family: "Barlow Condensed", sans-serif; font-weight: 600; font-size: 12pt; line-height: 1.15; }
.call { break-inside: avoid; margin: 0.7em 0; padding: 0.05em 0 0.05em 0.55em; border-left: 2pt solid #111; }
.call .lab { font-family: "Barlow Condensed", sans-serif; font-weight: 700; letter-spacing: 0.14em; font-size: 10pt; text-transform: uppercase; margin: 0; }
.call p { margin: 0.15em 0 0; }
table { width: 100%; border-collapse: collapse; margin: 0.55em 0 0.8em; font-size: 9.5pt; line-height: 1.28; }
th { font-family: "Barlow Condensed", sans-serif; font-weight: 600; font-size: 9.5pt; letter-spacing: 0.04em; text-align: left; vertical-align: bottom; border-bottom: 1pt solid #111; padding: 0.15em 0.45em 0.28em 0; }
td { vertical-align: top; border-bottom: 0.4pt solid #c4c4c4; padding: 0.32em 0.45em 0.32em 0; }
tr { break-inside: avoid; }
.item { break-inside: avoid; margin: 0.42em 0 0.55em; }
.item-h { display: flex; justify-content: space-between; align-items: baseline; gap: 0.6em; border-bottom: 0.6pt solid #111; }
.item-h span { font-family: "Barlow Condensed", sans-serif; font-weight: 600; letter-spacing: 0.12em; font-size: 9pt; text-transform: uppercase; }
.item p { margin: 0.28em 0 0; }
.field { display: grid; grid-template-columns: 2.05in 1fr; column-gap: 0.35em; align-items: end; margin: 0.42em 0; break-inside: avoid; }
.field span { font-family: "Barlow Condensed", sans-serif; font-weight: 600; font-size: 11pt; line-height: 1; }
.field i { display: block; border-bottom: 0.7pt solid #111; height: 0.95em; }
`;

function interior(blank, pages) {
  const num = (id) => (pages && pages[id] ? String(pages[id]) : "");
  const toc = manual
    .map((c, i) => {
      const n = String(i + 1).padStart(2, "0");
      return `<li><a href="#${c.id}"><span class="n">${n}</span><span class="t">${esc(c.title)}</span><span class="pg">${num(c.id)}</span></a></li>`;
    })
    .join("");
  const chaptersHtml = manual
    .map((c, i) => {
      const n = String(i + 1).padStart(2, "0");
      return `<article class="chapter" id="${c.id}">
        <p class="kicker">Chapter ${n}</p>
        <h1>${esc(c.title)}</h1>
        <p class="dek">${esc(c.dek)}</p>
        ${c.blocks.map(block).join("\n")}
      </article>`;
    })
    .join("\n");
  const end = blank ? `<section class="blank"><p>FM–90</p></section>` : "";
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>NINETY — Ninety Days Without the Grid</title>
  <style>${css}</style>
</head>
<body>
  <section class="title">
    <p class="kicker">FM–90</p>
    <h1>NINETY</h1>
    <p class="sub">Ninety Days Without the Grid</p>
    <div class="rule"></div>
    <p class="edition">GRID ONLY EDITION</p>
    <p class="deck">A field manual for a household that has lost the power grid and means to last ninety days.</p>
  </section>
  <section class="copy">
    <h1>NINETY</h1>
    <p>Ninety Days Without the Grid. Grid only edition.</p>
    <p>This is the household copy. It is not a government publication. It is not medical advice, and it is not a promise that you will be safe. If you can hear officials, follow them.</p>
    <p>The practice in these pages follows public guidance from FEMA, the Centers for Disease Control and Prevention, and the Environmental Protection Agency. Bleach ratios, boil times, and food-safety limits are the figures those agencies publish. They can change. Read the label in your hand before you trust a number in a book.</p>
    <p>Nuclear, fallout, and potassium iodide guidance is not in this edition.</p>
    <p>Water, food, a bucket, and a fire that stays outside.</p>
    <p>© 2026. All rights reserved.</p>
  </section>
  <section class="toc">
    <h1>Contents</h1>
    <ol>
      ${toc}
      <li><a href="#kit"><span class="n">A</span><span class="t">The kit</span><span class="pg">${num("kit")}</span></a></li>
      <li><a href="#card"><span class="n">B</span><span class="t">Fill this in</span><span class="pg">${num("card")}</span></a></li>
    </ol>
  </section>
  ${chaptersHtml}
  ${kitHtml()}
  ${cardHtml()}
  ${end}
</body>
</html>`;
}

function coverCss(spine) {
  const width = BLEED + TRIM_W + spine + TRIM_W + BLEED;
  const height = BLEED + TRIM_H + BLEED;
  return { width, height, spine };
}

function coverHtml(pages) {
  const spine = Math.round(pages * CREAM * 1000) / 1000;
  const { width, height } = coverCss(spine);
  const showSpineText = spine >= 0.25;
  return {
    spine,
    width,
    height,
    html: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>NINETY cover</title>
  <style>
    @font-face { font-family: "Barlow Condensed"; src: url("fonts/BarlowCondensed-600.ttf") format("truetype"); font-weight: 600; }
    @font-face { font-family: "Barlow Condensed"; src: url("fonts/BarlowCondensed-500.ttf") format("truetype"); font-weight: 500; }
    @font-face { font-family: "Source Serif 4"; src: url("fonts/SourceSerif4-400.ttf") format("truetype"); font-weight: 400; }
    @page { size: ${width}in ${height}in; margin: 0; }
    * { box-sizing: border-box; margin: 0; padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    html, body { width: ${width}in; height: ${height}in; overflow: hidden; background: #141612; }
    .sheet { position: relative; width: ${width}in; height: ${height}in; background: #141612; color: #efeae0; }
    .front-img { position: absolute; top: 0; right: 0; width: ${TRIM_W + BLEED}in; height: ${height}in; object-fit: cover; object-position: center 42%; }
    .front-shade { position: absolute; right: 0; bottom: 0; width: ${TRIM_W + BLEED}in; height: 3.35in; background: linear-gradient(to bottom, rgba(20,22,18,0), #141612 72%); }
    .front-type { position: absolute; right: ${BLEED + 0.42}in; bottom: ${BLEED + 0.48}in; width: 5.1in; }
    .kicker { font-family: "Barlow Condensed", sans-serif; font-weight: 600; letter-spacing: 0.16em; font-size: 13pt; color: #d4a24a; }
    .front-type h1 { font-family: "Barlow Condensed", sans-serif; font-weight: 600; font-size: 74pt; line-height: 0.84; letter-spacing: 0.01em; margin-top: 0.08in; }
    .rule { width: 0.55in; height: 2px; background: #d4a24a; margin: 0.14in 0; }
    .front-type .sub { font-family: "Barlow Condensed", sans-serif; font-weight: 600; font-size: 26pt; line-height: 0.95; }
    .mark { position: absolute; top: ${BLEED + 0.38}in; right: ${BLEED + 0.42}in; font-family: "Barlow Condensed", sans-serif; font-weight: 600; letter-spacing: 0.16em; font-size: 12pt; }
    .mark span { color: #d4a24a; margin-right: 0.7in; }
    .spine { position: absolute; top: 0; left: ${BLEED + TRIM_W}in; width: ${spine}in; height: ${height}in; background: #141612; overflow: hidden; }
    .spine span { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%) rotate(180deg); writing-mode: vertical-rl; font-family: "Barlow Condensed", sans-serif; font-weight: 600; letter-spacing: 0.2em; font-size: 11pt; white-space: nowrap; color: #efeae0; }
    .back { position: absolute; top: 0; left: 0; width: ${BLEED + TRIM_W}in; height: ${height}in; padding: ${BLEED + 0.7}in ${0.55}in ${BLEED + 0.55}in ${BLEED + 0.5}in; }
    .back h1 { font-family: "Barlow Condensed", sans-serif; font-weight: 600; font-size: 42pt; line-height: 0.9; }
    .back .edition { font-family: "Barlow Condensed", sans-serif; font-weight: 600; letter-spacing: 0.14em; font-size: 12pt; color: #d4a24a; margin-top: 0.18in; }
    .back p { font-family: "Source Serif 4", serif; font-size: 11.5pt; line-height: 1.4; margin-top: 0.28in; max-width: 4.6in; }
    .back .small { font-size: 9pt; line-height: 1.35; color: #c8c2b6; }
    .barcode { position: absolute; left: ${BLEED + TRIM_W - 0.3 - 2}in; bottom: ${BLEED + 0.3}in; width: 2in; height: 1.2in; background: #fff; }
  </style>
</head>
<body>
  <div class="sheet">
    <img class="front-img" src="../public/cover.jpg" alt="" />
    <div class="front-shade"></div>
    <div class="mark"><span>FM–90</span>GRID ONLY</div>
    <div class="front-type">
      <p class="kicker">A CIVIL FIELD MANUAL</p>
      <h1>NINETY</h1>
      <div class="rule"></div>
      <p class="sub">Ninety days<br />without the grid</p>
    </div>
    <div class="spine">${showSpineText ? "<span>NINETY  ·  FM–90</span>" : ""}</div>
    <div class="back">
      <h1>NINETY</h1>
      <p class="edition">GRID ONLY EDITION</p>
      <p>A field manual for the ninety days after the power goes out. What to do in the first hour. How to store water, feed a house, run a bucket, and keep a fire from killing you.</p>
      <p>Buy it before the dark. Write the names in the back. When the phone is dead, the book is the plan.</p>
      <p class="small">Not a government publication. Not medical advice. If you can hear officials, follow them.</p>
    </div>
    <div class="barcode"></div>
  </div>
</body>
</html>`,
  };
}

function printPdf(htmlName, pdfPath) {
  const r = spawnSync(
    CHROME,
    [
      "--no-sandbox",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--print-to-pdf=${pdfPath}`,
      `file://${ROOT}/${htmlName}`,
    ],
    { encoding: "utf8" },
  );
  if (r.status !== 0) {
    console.error(r.stdout, r.stderr);
    throw new Error(`chrome failed for ${htmlName}`);
  }
}

function inspect(pdfPath) {
  const needles = { kit: "Buy it before the dark.", card: "Ink, not a note on the phone." };
  for (const c of manual) needles[c.id] = c.dek.slice(0, 28);
  const r = spawnSync(
    "python3",
    [
      "-c",
      `
import json, pymupdf
needles = json.loads(${JSON.stringify(JSON.stringify(needles))})
doc = pymupdf.open(${JSON.stringify(pdfPath)})
found = {}
for i, p in enumerate(doc):
    if "Contents" in p.get_text() and i < 3:
        continue
    t = p.get_text()
    for key, needle in needles.items():
        if key not in found and needle in t:
            found[key] = i + 1
box = doc[0].rect
print(json.dumps({"n": doc.page_count, "w": box.width, "h": box.height, "found": found}))
`,
    ],
    { encoding: "utf8" },
  );
  if (r.status !== 0) throw new Error(r.stderr || r.stdout);
  return JSON.parse(r.stdout);
}

function fitCover(pdfPath, widthIn, heightIn) {
  const r = spawnSync(
    "python3",
    [
      "-c",
      `
import pymupdf
src = ${JSON.stringify(pdfPath)}
doc = pymupdf.open(src)
page = doc[0]
w, h = ${widthIn} * 72, ${heightIn} * 72
out = pymupdf.open()
np = out.new_page(width=w, height=h)
np.show_pdf_page(np.rect, doc, 0)
out.save(src + ".fit", garbage=4, deflate=True)
print(round(np.rect.width, 3), round(np.rect.height, 3))
`,
    ],
    { encoding: "utf8" },
  );
  if (r.status !== 0) throw new Error(r.stderr || r.stdout);
  spawnSync("mv", [`${pdfPath}.fit`, pdfPath]);
  console.log("cover fitted", r.stdout.trim());
}

mkdirSync(ROOT, { recursive: true });
mkdirSync("/workspace/artifacts", { recursive: true });
mkdirSync("/workspace/public", { recursive: true });

writeFileSync(`${ROOT}/interior.html`, interior(false, null));
printPdf("interior.html", `${ROOT}/interior.pdf`);
let info = inspect(`${ROOT}/interior.pdf`);
const pages = {};
for (const c of manual) pages[c.id] = info.found[c.id];
pages.kit = info.found.kit;
pages.card = info.found.card;
console.log("located", info.n, pages);
const missing = Object.entries(pages).filter(([, v]) => !v);
if (missing.length) throw new Error(`missing page numbers: ${missing.map(([k]) => k).join(", ")}`);
const even = info.n % 2 === 1;
writeFileSync(`${ROOT}/interior.html`, interior(even, pages));
printPdf("interior.html", `${ROOT}/interior.pdf`);
info = inspect(`${ROOT}/interior.pdf`);
console.log("final interior", info.n, info.w, info.h);

const cover = coverHtml(info.n);
writeFileSync(`${ROOT}/cover.html`, cover.html);
printPdf("cover.html", `${ROOT}/cover.pdf`);
fitCover(`${ROOT}/cover.pdf`, cover.width, cover.height);
const coverInfo = inspect(`${ROOT}/cover.pdf`);
console.log("cover pages", coverInfo.n, "box", coverInfo.w, coverInfo.h, "spine", cover.spine);

spawnSync("cp", [`${ROOT}/interior.pdf`, "/workspace/artifacts/NINETY-interior.pdf"]);
spawnSync("cp", [`${ROOT}/cover.pdf`, "/workspace/artifacts/NINETY-cover.pdf"]);
spawnSync("cp", [`${ROOT}/interior.pdf`, "/workspace/public/NINETY-interior.pdf"]);
spawnSync("cp", [`${ROOT}/cover.pdf`, "/workspace/public/NINETY-cover.pdf"]);
writeFileSync(
  `${ROOT}/MASTER.txt`,
  [
    `Interior pages: ${info.n}`,
    `Trim: ${TRIM_W} x ${TRIM_H} in`,
    `Bleed: none on the interior`,
    `Paper assumed for the cover spine: black-and-white cream, ${CREAM} in per page`,
    `Spine: ${cover.spine} in`,
    `Full cover: ${cover.width} x ${cover.height} in`,
    `Cover bleed: ${BLEED} in`,
    `White rectangle on the back is the barcode zone. Leave it empty.`,
    `If you change the interior, run: node --experimental-strip-types scripts/build-paperback.mjs`,
  ].join("\n") + "\n",
);
console.log("wrote masters");
