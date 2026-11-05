export type Phase = {
  id: string;
  when: string;
  title: string;
  scenario: "all" | "grid" | "nuclear";
  points: string[];
};

export const phases: Phase[] = [
  {
    id: "before",
    when: "Before",
    title: "This month, while the lights work",
    scenario: "all",
    points: [
      "Set the household in Plan and buy the critical rows you can afford, in that order: water, bleach, radio, prescriptions, buckets, stove, can openers.",
      "Walk the shutoff valves. Cook one meal on the backup stove outside. Eat from the pantry for three days and write down what you refused to eat.",
      "Put paper copies of the family card in the shelter room. Tell every adult the rally points.",
      "Save this manual where you can open it offline, and transcribe the first-hour pages onto paper. A dead phone is a dead manual.",
    ],
  },
  {
    id: "grid0",
    when: "Minute 0",
    title: "The power is out",
    scenario: "grid",
    points: [
      "Look outside. If the whole street is dark, it is the grid, not your breaker.",
      "Fill clean drinking containers first, then the bathtub for washing. Do it now. Pressure may last hours or minutes.",
      "Plug nothing in that you love. A surge when power returns ruins the radio and the fridge.",
      "Start the NOAA radio. Put phones on low power. Text one out-of-area contact a status and a plan, then stop refreshing.",
    ],
  },
  {
    id: "nuc0",
    when: "Minute 0",
    title: "Flash, blast, or a nuclear warning",
    scenario: "nuclear",
    points: [
      "Do not look at the flash. Drop, cover exposed skin, close your eyes, and stay down until the blast wave passes. It can arrive seconds to a minute later. There can be more than one.",
      "Get inside the nearest sturdy building. Then go to the basement or the center. Distance and mass beat bravery.",
      "If you were outside and may be dusted: at the doorway, clothes off into a sealed bag, then soap and water on skin and hair. No conditioner. This is the CDC order, and it removes most of the external contamination.",
      "Shut windows. Turn off fans and HVAC. Tape the worst drafts. Do not make an airtight tomb, and do not step out to watch the cloud.",
    ],
  },
  {
    id: "day1",
    when: "Hour 1 to day 3",
    title: "The house becomes the system",
    scenario: "all",
    points: [
      "Set up the two-bucket toilet before anyone uses a dry toilet out of habit. One flush into a dead sewer is a mess you will live with.",
      "Eat the refrigerator first (about 4 hours if the door stays shut), then the freezer (a full freezer holds roughly 48 hours unopened). Pantry after that. When in doubt, throw it out. Do not taste-test.",
      "Shut the water heater’s cold inlet if the mains may be broken or depressurized, kill its gas or breaker so it cannot fire empty, and treat that tank as a reserve (often 40–50 gallons). Drain from the bottom into clean containers. Discard rusty first water.",
      "Only close the gas meter if you smell gas, hear a hiss, see damage, or officials say so.",
      "Account for people. If someone can get home safely in the first hours of a plain blackout, that is the window. After that, stay put until you know why the lights are out.",
    ],
  },
  {
    id: "fallout",
    when: "Hour 1 to day 14",
    title: "Fallout clock",
    scenario: "nuclear",
    points: [
      "Fresh fallout is worst at the start. A planning rule of thumb: for every sevenfold increase in time, the dose rate falls about tenfold. One hour at 100% is roughly 10% at 7 hours, 1% at 49 hours, and 0.1% at two weeks. This is not a measurement. A meter is a measurement. Officials override both.",
      "Stay inside at least 24 hours. If you believe fallout is heavy and you have no information, two weeks is the civil-defense planning window, provided you have air, water, and a way to keep waste out of the room.",
      "KI only if officials say so, at the age-specific dose. It protects the thyroid from radioactive iodine. It does not make the basement optional.",
      "Leave early only for fire, collapse, or a medical emergency you cannot handle. Move once, covered, masked, then decontaminate at the next door. Do not commute through fallout for news.",
    ],
  },
  {
    id: "week2",
    when: "Days 4 to 14",
    title: "A routine, or you will fray",
    scenario: "all",
    points: [
      "Two set radio hours a day. Write down only what an official source said.",
      "Fixed meal times. Fixed water ration. Fixed chores: water, cook, waste, medical, morale. Children get a job that is real and finishable.",
      "You may go outside for fuel, water, and neighbors. Go in daylight, in pairs, and don’t advertise what you have.",
      "Start sprouts if you have safe seed and spare treated water. They are vitamins and something alive. They are not a calorie plan.",
    ],
  },
  {
    id: "month",
    when: "Days 15 to 30",
    title: "The pantry meets reality",
    scenario: "all",
    points: [
      "This is when you learn whether your town still has water pressure, a generator at the well, or a mutual-aid point. Go in daylight, in pairs. You still treat water. You still don’t flush a dead sewer.",
      "Recount calories honestly. If you are long, keep eating a normal ration. If you are short, lower the adult ration in writing so nobody ‘snacks the gap.’ Children, pregnant or nursing people, the ill, and anyone doing hard labor eat first.",
      "Check feet, coughs, and wounds every few days. A red streak or a fever is the time to spend risk getting to care, if care exists.",
      "Repair the handwash station. Boredom makes people skip it. That is how diarrhea starts.",
    ],
  },
  {
    id: "mid",
    when: "Days 31 to 60",
    title: "Make water, don’t just drink the pile",
    scenario: "all",
    points: [
      "Stored water should be mostly gone. The system now is find, carry, filter, disinfect, store. Never drink a new source because it looks clear.",
      "In a hot-dry climate, do the heavy work at dawn. Wet cloth and shade are tools. Heat stroke outranks almost every other grid-only problem.",
      "In the cold, live in one room and keep socks dry. Drain pipes if a hard freeze is coming and the house has no heat — a burst main destroys the next month’s water.",
      "Trade labor and skills before you trade food. Be boring. Be slightly useful. Do not become famous for having a full garage.",
    ],
  },
  {
    id: "late",
    when: "Days 61 to 90",
    title: "The long middle",
    scenario: "all",
    points: [
      "Rotate people off the worst job. Sanitation duty every day with no relief makes people careless, and careless is how the bucket contaminates the water.",
      "If official distribution exists, use it. Pride is not a food group. Bring exact containers they ask for and leave the radio at home.",
      "Restock nothing you cannot carry home without announcing it. Split what you carry. Don’t take the same route every time if things have turned ugly.",
      "Keep one rest day a week. Bodies and tempers break on day 70 more often than on day 2.",
    ],
  },
  {
    id: "after",
    when: "When it ends",
    title: "Power, all-clear, or day 90",
    scenario: "all",
    points: [
      "When the grid returns, leave the breaker off at the house and add loads slowly. Unplug the expensive gear before you throw the main, then plug it in one thing at a time.",
      "Do not turn a gas appliance back on if you shut the meter. Wait for the utility.",
      "Refill the water heater before you restore its power or gas. An empty tank that fires is a ruined tank, or worse.",
      "Replace the bleach, the batteries, and the food you ate. Write down what failed. That list is next year’s manual.",
    ],
  },
];

export const drills: { id: string; title: string; text: string }[] = [
  {
    id: "valve",
    title: "Touch the water main",
    text: "Find it, fit the wrench, turn it slightly toward closed, then back open. Watch for drips. Do this on a day you can still call a plumber.",
  },
  {
    id: "heater",
    title: "Find the water heater valves",
    text: "Identify the cold inlet on top and the drain at the bottom. Do not drain it today unless you mean to. Know which breaker or gas valve feeds it.",
  },
  {
    id: "gas",
    title: "Look at the gas meter",
    text: "See which way is open. Put the wrench where your hands can find it in the dark. Do not shut the gas off as practice.",
  },
  {
    id: "cook",
    title: "Cook outside on the backup stove",
    text: "Boil a pot of rice. Time it. Note how much fuel it took. Eat the rice.",
  },
  {
    id: "pantry",
    title: "Seventy-two hours on the pantry",
    text: "No fresh grocery run. Write the three foods you were miserable without. Buy those, not a fantasy ration.",
  },
  {
    id: "room",
    title: "Spend an evening in the shelter room",
    text: "Radio on, lights low, buckets set up but unused. You are looking for the stupid gaps: no can opener, no tampons, no spare glasses, nowhere to pee.",
  },
  {
    id: "tape",
    title: "Tape one window",
    text: "Time yourself covering one window with plastic. Add that number, times the number of windows, plus fear. Stage the tape in that room.",
  },
  {
    id: "rally",
    title: "Say the plan out loud",
    text: "Every adult recites both rally points and the out-of-area contact without looking. Children should know where ‘home’ is if the block is closed.",
  },
];
