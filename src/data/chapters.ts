import type { Chapter } from "@/data/types";

export const chapters: Chapter[] = [
  {
    id: "read",
    n: "01",
    title: "How to use this manual",
    dek: "What it is, what it will not do, and the order that keeps people alive.",
    blocks: [
      {
        k: "p",
        t: "This is a field manual for a long power failure. Ninety days is the planning horizon. It is long enough that a 72-hour grocery kit fails, and short enough that a household can actually buy and store the answer.",
      },
      {
        k: "p",
        t: "Read Now if something is already happening. Use Kit as the shopping and packing list — every row says what to buy, where, how to use it, and how much this household needs. Plan does the arithmetic for water, food, and bleach from the number of people you enter. The chapters are the why. Checks and notes stay on this device only. They are not an account and they are not a backup. Copy the first hour onto paper.",
      },
      {
        k: "warn",
        t: "This is public civil-defense practice drawn from FEMA, CDC, EPA, FDA, and WHO guidance. It is not medical advice, not a guarantee, and not a substitute for official instructions you can hear on the radio. If an official tells you to evacuate, shelter, or take a medicine, that instruction wins.",
      },
      {
        k: "h",
        t: "The order",
      },
      {
        k: "bullets",
        items: [
          "Air you can breathe: carbon monoxide and smoke. A full pantry does not matter if the room is full of CO.",
          "Water you can drink. Dehydration and dirty water outrun hunger.",
          "A place to put human waste that is not the kitchen.",
          "Food, then warmth or cooling, then information.",
          "Other people. Most of the first week they are an asset. Treat them that way.",
        ],
      },
      {
        k: "note",
        t: "Save this to your home screen while the network exists, and assume it will not download itself during a blackout. Paper still works when the battery does not.",
      },
    ],
  },
  {
    id: "clocks",
    n: "02",
    title: "Two disasters, two clocks",
    dek: "A blackout and a nuclear burst are not the same problem. Mixing the playbooks gets people killed.",
    blocks: [
      {
        k: "p",
        t: "A grid failure means pumps, treatment plants, card readers, traffic lights, furnaces, and cell towers start a countdown. Neighbors are still neighbors. The danger in the first day is spoiled food, darkness, and stupid decisions with generators. The danger in the third week is waterborne disease and running out of the food you never actually stored.",
      },
      {
        k: "p",
        t: "A nuclear detonation adds three effects that move at different speeds. Flash and blast are seconds to a minute. Fallout — radioactive dust lifted and dropped downwind — is the killer for people who survived the blast and then went outside. The grid will also be down, maybe across a huge area if the event was a high-altitude electromagnetic pulse with little local fallout at all. Those are different attacks. Don’t prepare for a movie that mixes all of them into one afternoon.",
      },
      {
        k: "table",
        head: ["Question", "Grid down", "Nuclear"],
        rows: [
          ["Go outside on day one?", "Yes, if you need water, fuel, or a person", "No, unless the building is on fire or falling"],
          ["Tape the windows?", "Only for storm damage or smoke", "Yes, to cut dust — not because tape stops radiation"],
          ["Seal the house airtight?", "No. In a heat wave it can kill you", "No. Cut drafts. Leave breathable air"],
          ["Collect rain?", "Yes, after a first flush, then treat", "No, not until you know dust is gone"],
          ["KI tablets?", "Do not take them", "Only if officials tell you to"],
        ],
      },
      {
        k: "warn",
        t: "Heat stroke in a sealed apartment during a summer blackout is a known way to die. Fallout in the yard is a known way to die. Pick the threat you actually have. If you saw no flash and heard no warning, do not lock yourself in a taped room because the lights flickered.",
      },
    ],
  },
  {
    id: "grid-hour",
    n: "03",
    title: "The first hour without power",
    dek: "Fill water, save the cold food, don’t gas yourself.",
    blocks: [
      {
        k: "p",
        t: "You are buying time. The drinking water already in the pipes and the heater, the cold mass in the freezer, and the charge in a radio are largest in the first hour and shrink every time you hesitate or open a door.",
      },
      {
        k: "steps",
        items: [
          "Look outside. If the whole street is dark, it is the grid, not your breaker.",
          "Fill every clean drinking container. Then the tub, for washing only.",
          "Unplug electronics. Flip most breakers off. Leave one lamp switched on so you notice when power returns.",
          "Do not open the fridge for curiosity. Put a note on the door with the time.",
          "Radio on. One text to the out-of-area contact. Phones to low power.",
          "Set buckets before anyone flushes a dead toilet.",
          "If you smell gas, get people out, then shut the meter if you can do it without lingering, and do not flip switches on the way. If you do not smell gas, leave the meter alone.",
          "Generator, if you own one: outside, 20 feet from any opening, exhaust pointed away, never in a garage. Never plugged into a household outlet.",
        ],
      },
      {
        k: "h",
        t: "The water heater",
      },
      {
        k: "p",
        t: "A typical residential tank holds 40 to 50 gallons. That is a bridge, not ninety days. Turn off its breaker or gas so it cannot fire once empty. Close the cold-water inlet so dirty mains cannot refill it and so the tank does not drain backward into broken pipes. Open a hot tap on an upper floor to vent, and drain from the spigot at the bottom into clean containers. Let sediment run off first. If the tank has been in normal use, the water is usually drinkable after you discard the rust; when you are unsure, filter and disinfect. After the emergency, fill the tank before you restore heat to it.",
      },
      {
        k: "h",
        t: "Cold food",
      },
      {
        k: "bullets",
        items: [
          "A closed refrigerator stays cold on the order of four hours.",
          "A full freezer, unopened, on the order of 48 hours. Half full, about a day.",
          "Food at or below 40°F (4°C) is still food. When you do not know, throw it out.",
          "Eat fridge, then freezer, then cans and dry goods. Do not ‘save the good stuff’ until it has rotted.",
        ],
      },
      {
        k: "warn",
        t: "Backfeeding — plugging a generator into a wall socket — energizes the lines outside. Lineworkers have died that way. The legal, non-lethal version is a transfer switch or interlock installed by an electrician before the disaster. If you do not have one, run extension cords from the generator outdoors to the few loads you need.",
      },
      {
        k: "h",
        t: "The next hour, if the street is still dark",
      },
      {
        k: "steps",
        items: [
          "Find the main water valve and the gas meter. Look. Do not turn them unless you have a reason named in this manual.",
          "Put a thermometer in the fridge if you own one, then shut the door. Write the time on the note.",
          "Move a headlamp, the radio, the bleach, and the bucket lids to one table. The first night is a scavenger hunt otherwise.",
          "Text the out-of-area contact one line: where you are, who is with you, where you will be tomorrow morning. Then stop.",
          "Eat something that will spoil. Cook nothing indoors.",
          "Set two check-in times for the household, even if you are all in the same room. People drift.",
        ],
      },
    ],
  },
  {
    id: "house",
    n: "03b",
    title: "The house, before you need it",
    dek: "Valves, breakers, and the map of your own walls. Learn them with the lights on.",
    blocks: [
      {
        k: "p",
        t: "A long blackout is a plumbing and gas problem that happens to start as an electrical one. The people who do well can put a hand on four things in the dark: the main water valve, the gas meter, the electrical panel, and the water-heater drain. Find them this weekend. Tag them. Put the wrench where your hand already knows.",
      },
      {
        k: "h",
        t: "Water main",
      },
      {
        k: "p",
        t: "The shutoff is usually where the line enters the house, often near the front foundation, or in a box at the meter. A ball valve is a quarter turn. A gate valve is many turns, clockwise to close, and it may be stiff. Close it if a pipe has burst, if you are leaving in a hard freeze with no heat, or if the city tells you the mains are contaminated and you do not want that water pushed into the heater. Do not close it as a drill and then forget. Open a faucet after you reopen it and let the air spit out before anyone uses a tap.",
      },
      {
        k: "h",
        t: "What is already in the pipes",
      },
      {
        k: "steps",
        items: [
          "Fill every jug from the cold tap while pressure lasts. That is cleaner than the heater.",
          "When pressure dies, open the highest faucet in the house so air can enter.",
          "Catch what comes out of the lowest faucet into a clean pot. A typical house holds a few gallons in the lines, not a week.",
          "Then the heater, as in the first-hour chapter. Inlet closed, power or gas to the tank off, drain at the bottom, discard the first rusty flow.",
          "The toilet tank is a few gallons if it has no cleaner tablet. The bowl is not a source.",
          "Ice in the freezer is drinking water. Melt it in a covered pot. Do not set it on the counter to drip through meat juice.",
        ],
      },
      {
        k: "h",
        t: "Gas",
      },
      {
        k: "warn",
        t: "Shut the gas off only if you smell it, hear it, or see damage. A closed meter stays closed until the utility relights the appliances. You do not get to ‘just turn it back on’ because dinner is late. Pilots, leaks, and explosions are their job.",
      },
      {
        k: "p",
        t: "The meter valve is a rectangular tang, in line with the pipe when open, across the pipe when closed. A crescent wrench or the dedicated tool turns it a quarter turn. Practice finding it. Do not practice closing it. If you shut it during a real leak: get people out first, do not flip light switches, do not use the phone in the building, and call the utility from outside. Aftershocks and vehicle hits on meters are the usual reasons a blackout and a gas leak arrive together.",
      },
      {
        k: "h",
        t: "The panel",
      },
      {
        k: "bullets",
        items: [
          "Stand on a dry floor. One hand. Do not open the metal dead-front or poke at the bars.",
          "Switch off the large double breakers for the range, dryer, water heater, and air conditioner. Leave one lighting circuit on so a lamp tells you the grid is back.",
          "Label anything unlabeled while you can still see. ‘Left bedroom’ beats a blank slot at 2 a.m.",
          "A transfer switch, if you have one, is the only legitimate path from a generator to the panel. Anything else is a cord.",
          "When power returns, wait a few minutes, then bring loads back one at a time. The whole block’s compressors starting together is how a second outage starts.",
        ],
      },
      {
        k: "h",
        t: "Sewer",
      },
      {
        k: "p",
        t: "Toilets flush only while the tank has water and the city sewer is accepting it. In a wide outage the lift stations die. A flush then sends the neighbor’s sewage toward the lowest apartment. Pouring a bucket into the bowl to ‘make it flush’ is the same mistake with more effort. The buckets in the sanitation chapter are the toilet until you hear, from an official, that the sewer is taking flow.",
      },
      {
        k: "note",
        t: "Write a one-page map: water main, gas meter, panel, heater drain, fire extinguisher, bucket spot, rally point. Tape it inside a cupboard. The person who is home when this starts may not be the person who learned it.",
      },
    ],
  },
  {
    id: "nuclear-hour",
    n: "04",
    title: "The first hour of a nuclear detonation",
    dek: "Get inside. Stay inside. Stay tuned. Decontaminate once, at the door.",
    blocks: [
      {
        k: "p",
        t: "FEMA’s public instruction fits in one line: get inside, stay inside, stay tuned. Everything else is how you do those three things with a house that was not designed as a bunker.",
      },
      {
        k: "steps",
        items: [
          "Flash: do not look. Drop, cover skin, eyes shut. Wait out the blast. Count on a second wave if more than one weapon is in the air. You will not out-think it from the sidewalk.",
          "Move inside the nearest solid building, then downward or inward. Concrete and earth beat wood. Wood beats glass. Glass beats open sky.",
          "If dust may be on you, stop at the threshold. Bag the outer clothes. Wash skin and hair with soap and water. No conditioner. No heroic scrubbing.",
          "Shut windows, doors, fans, dryers, and HVAC. Tape plastic over drafts if you have it.",
          "Radio on. Write what officials say. KI only if they say to take it.",
          "Do not go to the window. Do not photograph the cloud. Do not drive ‘a little way’ to see if the highway is open.",
        ],
      },
      {
        k: "h",
        t: "What the dust actually is",
      },
      {
        k: "p",
        t: "Fallout is not a gas that seeps through walls forever. It is grit: soil and debris made radioactive and dropped downwind. Gamma rays from that grit on roofs and on the ground are what reach through windows and thin walls. You beat gamma with mass and with time. You beat the grit itself by not breathing it, not tracking it in, and not eating it. An N95 helps with the grit. It does not help with the gamma. Hiding in a basement helps with the gamma.",
      },
      {
        k: "p",
        t: "How far is ‘safe’ depends on yield, wind, and whether you were in the blast footprint at all. This manual will not give you a comforting radius. People far upwind may see nothing but a blackout. People tens of miles downwind may take a serious dose standing in a parking lot and almost none of it in a basement. If you are not sure, you shelter.",
      },
      {
        k: "warn",
        t: "If the building is burning or coming apart, the shelter rule yields. Move once, as covered as you can, to the nearest sturdier building, and decontaminate again at that door. Then stay.",
      },
    ],
  },
  {
    id: "water",
    n: "05",
    title: "Water",
    dek: "Store a bridge. Treat everything else. Do not drink the chemistry set.",
    blocks: [
      {
        k: "p",
        t: "Plan on one gallon per person per day for drinking and a minimum of hygiene in a mild climate. In hot, dry weather use one and a half. Pets: start at half a gallon each and raise it for a large animal in heat. Ninety days of that is hundreds of pounds per person. You will not stack it in a hallway and you should not pretend you will. Store fourteen days if you can (seven is already a serious household), and own a way to make the rest: containers, a filter, bleach or tablets, and a source that is not the toilet bowl.",
      },
      {
        k: "h",
        t: "Sources, in the order you should trust them",
      },
      {
        k: "bullets",
        items: [
          "Factory-sealed bottles and the jugs you filled from the tap while it was still a tap.",
          "The water heater, ice cubes, and the toilet tank — the tank, not the bowl — if nobody put cleaner tablets in it. Treat if you are unsure.",
          "Rain off a roof, after you have wasted the first ten minutes of dirty runoff, then filtered and disinfected.",
          "Streams, lakes, and the neighbor’s pool. Pools can be a washing and then a drinking source only after you understand that they may already be overloaded with chlorine or algaecide. Let a heavily chlorinated pool air out, filter it, and if it smells like a chemical plant do not drink it. Never drink hot-tub water. It is a stew of body waste and treatment chemicals.",
          "Water from radiators, boilers, and any container that held chemicals: do not drink it. Boiling does not remove antifreeze or fuel.",
        ],
      },
      {
        k: "h",
        t: "Make it safe",
      },
      {
        k: "p",
        t: "Dirt first, germs second. Let cloudy water sit, pour off the clear part, and run it through a clean cloth or a camping filter. Then either boil or chemically disinfect. Filters sold for backpacks generally do not catch viruses. City floodwater and sewage-contaminated water need the disinfection step every time.",
      },
      {
        k: "table",
        head: ["Method", "How", "Watch-out"],
        rows: [
          ["Boil", "Rolling boil 1 minute. 3 minutes above 5,000 feet (EPA) to 6,500 feet (CDC).", "Fuel. A hot pot is not a toy in a crowded room."],
          ["Bleach 5–6%", "8 drops (1/8 teaspoon) per gallon if clear.", "Double if cloudy, colored, or very cold. Unscented only. Wait 30 minutes."],
          ["Bleach 8.25%", "6 drops per gallon if clear.", "Double if cloudy, colored, or very cold. Read the bottle. Strength fades within a year."],
          ["Tablets", "Whatever that package says, for that volume.", "Do not mix instructions across brands."],
        ],
      },
      {
        k: "p",
        t: "If the treated water does not smell faintly of chlorine after 30 minutes, dose it once more and wait 15 minutes. If you cannot smell it then, do not trust the bleach — it may be old. Boil instead.",
      },
      {
        k: "warn",
        t: "Do not use pool shock, granular calcium hypochlorite, or a ‘pinch’ of some powder you saw in a forum. The margin between disinfection and poisoning is a measuring error, and some of those chemicals start fires if they meet the wrong bottle. Buy liquid unscented bleach or sealed tablets.",
      },
      {
        k: "h",
        t: "A bucket is not a purifier",
      },
      {
        k: "p",
        t: "You can make a prefilter: a clean bucket with a hole, layered cloth, gravel, sand, and crushed charcoal from plain wood (not briquettes with lighter fluid). It knocks down mud and some smell. It does not make water safe. Boil or bleach what comes out the bottom. Commercial hollow-fiber filters are better at the mud-and-bacteria step and still want a disinfection step for viruses.",
      },
      {
        k: "h",
        t: "A five-gallon jug, in drops",
      },
      {
        k: "table",
        head: ["Bleach", "Clear water", "Cloudy, colored, or very cold"],
        rows: [
          ["5–6%", "40 drops (5/8 teaspoon) per 5 gallons", "Double it"],
          ["8.25%", "30 drops per 5 gallons", "Double it"],
        ],
      },
      {
        k: "p",
        t: "Stir. Wait 30 minutes. You want a faint pool smell, not a sting. Too strong: pour it between two clean containers to air it, or let it sit uncovered, and do not add more chemistry to ‘fix’ an overdose. Label the jug with the date and the source. Treated water you will drink within a few days does not need a second dose. Stored treated water you will keep for weeks: keep it sealed, cool, and dark, and smell it before you trust an old jug.",
      },
      {
        k: "h",
        t: "Sun, when the bottle is clear",
      },
      {
        k: "p",
        t: "WHO’s solar method is a backup, not your plan. Clear plastic bottle, one or two liters, water that is already clear enough to read newsprint through. Lay it in full sun for six hours, or two days if the sky is more than half cloud. It does not work on muddy water, and it does not remove fuel, metals, or salt. Filter and settle first. If you can boil or bleach, do that instead.",
      },
      {
        k: "h",
        t: "How the gallons actually leave",
      },
      {
        k: "bullets",
        items: [
          "Drinking is the smaller half. Cooking rice and beans, washing hands, and a pot you rinse all spend the gallon.",
          "A retained-heat cooker uses the water once. Dumping a second pot because the first was salty is how day ten surprises you.",
          "Wash water can be yesterday’s cooking water, cooled, for hands and floors. Do not reverse that.",
          "Date every jug. Drink the oldest clean jug first. A full closet of identical unlabeled water is how someone drinks the wash jug.",
          "Keep one gallon per person where you sleep, separate from the store you will haul from. A night trip to the garage is how jugs get spilled.",
        ],
      },
    ],
  },
  {
    id: "food",
    n: "06",
    title: "Food for ninety days",
    dek: "Calories you will actually swallow, in a form that does not require a grocery store.",
    blocks: [
      {
        k: "p",
        t: "An adult in mild weather needs on the order of 2,200 calories a day to avoid a slow decline. Cold weather, hard work, pregnancy, and nursing push that up. The Plan page turns your household into pounds of rice, beans, oats, pasta, oil, and peanut butter, plus cans. Those pounds are a shopping target, not an order to starve. If you stored the target, eat a normal ration. Cutting to 800 calories on day one because you are frightened just makes you stupid faster.",
      },
      {
        k: "p",
        t: "The mix is deliberate. Rice and pasta are cheap calories. Beans are the protein that keeps rice from being a nutritional joke. Oil and peanut butter are dense and make the diet bearable. Cans are what you eat when propane is precious or you are too rattled to cook. Salt is not optional. A multivitamin and vitamin C cover a pantry that would otherwise be white and brown for three months.",
      },
      {
        k: "h",
        t: "Cook it so it does not waste you",
      },
      {
        k: "bullets",
        items: [
          "Rice: rinse, one part rice to about two parts water, simmer or boil then hold in a retained-heat box. Do not leave cooked rice in a warm room overnight. It grows a toxin that reheating does not reliably fix.",
          "Beans: soak overnight, dump the water, cook until they mash with no chalky core. Lentils skip the long soak. Canned beans are the first fourteen days.",
          "Oats: equal parts boiling water, covered, five minutes. Or a cold soak if fuel is the crisis.",
          "Oil: a spoon on the bowl. Smell it. Rancid is not ‘still calories’ you should force.",
          "Cans: bulging, leaking, spurting, or creased hard on a seam means the trash. Best-by dates on an intact can are about quality, not a magic death clock. High-acid food (tomato) fades sooner. When you are unsure, you are unsure — don’t taste to decide.",
        ],
      },
      {
        k: "h",
        t: "Who the math does not feed",
      },
      {
        k: "p",
        t: "Infants need breast milk or the formula they already tolerate, mixed with treated water. Not rice cereal as a substitute, not cow’s milk in a newborn, not a new brand of formula on the worst day of their life. A nursing parent gets extra water and about 500 extra calories, which Plan adds if you counted an adult. Teenagers eat like adults — count them as adults. Anyone with a food allergy needs their safe brand on the shelf, not a peanut-butter plan. Pets eat pet food. A dog will survive a boring kibble diet. A dog will not thrive on your rice, and you will not thrive if the rice is gone.",
      },
      {
        k: "note",
        t: "Store what you eat and eat what you store. A three-day pantry drill will teach you more than a second bag of beans you hate. Rotate by date. Keep sacks inside a metal can or a lidded bucket so mice do not get there first. Cool, dark, and off a damp concrete floor.",
      },
      {
        k: "h",
        t: "One boring day",
      },
      {
        k: "table",
        head: ["Meal", "What it is", "Why"],
        rows: [
          ["Morning", "Oats, a spoon of peanut butter, salt", "No long fire. Easy on a bad night’s sleep."],
          ["Midday", "Rice, beans, oil, a pinch of salt, chili if you stored it", "The calorie meal. Cook a double pot and eat half cold later."],
          ["Evening", "A can: fish, meat, or tomatoes on the leftover grain", "Uses almost no fuel. The thing people will actually finish."],
        ],
      },
      {
        k: "p",
        t: "That pattern, plus a multivitamin, is not a cuisine. It is how you stop negotiating dinner every day. Spice, vinegar, dried onion, and coffee are morale and they are cheap. Buy them. A diet of plain rice for a month is how someone ‘can’t eat another bite’ with a full bucket left.",
      },
      {
        k: "h",
        t: "When the fuel is the shortage",
      },
      {
        k: "bullets",
        items: [
          "No-cook: peanut butter, tortillas or crackers, canned fish, nuts, dried fruit, shelf milk if you drink it. This is the storm week, not the whole ninety days.",
          "Cold-soak oats overnight in treated water. They are edible, not charming.",
          "Cook a full pot when you light the stove, not three small ones. Leftovers get eaten the same day or chilled only if you still have a cold box.",
          "Never leave cooked rice, beans, or meat in the warm zone — roughly 40°F to 140°F — for more than a couple of hours. Reheating does not fix rice that sat out.",
          "A pound of dry rice is about two and a half pounds of cooked food and wants roughly two pounds of water. Count that water. The Plan page’s gallons are drinking water, not an invisible cooking budget.",
        ],
      },
      {
        k: "h",
        t: "Pests and the closet",
      },
      {
        k: "p",
        t: "Mice, weevils, and a damp floor will eat the plan before you do. Keep grain in a bucket with a gasket lid, or a metal can. Bay leaves are folklore. A tight lid is the method. Freeze a new bag of flour or rice for a few days before you store it if you can, to kill insect eggs. Write the month on the lid with tape. Eat from the oldest lid. If a bag smells musty or the grains clump from moisture, it is compost, not a dare.",
      },
    ],
  },
  {
    id: "fire",
    n: "07",
    title: "Fire, fuel, and carbon monoxide",
    dek: "Cook outside. Heat people, not rooms, with flame. The quiet killer is the indoor stove.",
    blocks: [
      {
        k: "warn",
        t: "Every widespread blackout kills households that brought the barbecue inside ‘just for the night.’ Carbon monoxide has no smell. By the time people notice a headache and nausea, they are bad at deciding to leave. Battery CO alarm in the room you sleep in. Flame outside, full stop: camp stove, grill, hibachi, rocket stove, generator.",
      },
      {
        k: "p",
        t: "Pick propane as the primary fuel if you can. A camp stove that also accepts a hose to a 20-pound barbecue tank is the practical ninety-day tool. A careful half-hour of flame a day is on the order of two months from one full 20-pound tank — an estimate, not a contract. Test the adapter this month. Store the tank outdoors, upright, away from the house’s air intakes. A few one-pound canisters live indoors as the bad-weather bridge. Have a wood method if you have a yard, because tanks run out and exchanges close.",
      },
      {
        k: "h",
        t: "Save fuel with a box",
      },
      {
        k: "p",
        t: "Retained-heat cooking: bring rice or beans to a boil, lid on, then nest the pot in a box, a cooler, or a nest of towels and let it finish for an hour. The fuel you didn’t burn is tomorrow’s breakfast. The nest is not a place you leave a barely simmering pot of meat for half a day in hot weather — get food out of the danger zone, or eat it.",
      },
      {
        k: "h",
        t: "If you own a generator",
      },
      {
        k: "bullets",
        items: [
          "Outside, about 20 feet from doors, windows, and vents. Exhaust pointed away. Never in a garage, even with the door open.",
          "Cords rated for the load, dry, not running through a puddle.",
          "No backfeed into the panel without a transfer switch.",
          "Shut it off and let it cool before you refuel. Gasoline on a hot engine is how the house ends.",
          "Gasoline stored only in proper cans, outside the living space, with stabilizer if it will sit, rotated. Do not store gas in the apartment ‘for the generator you keep on the balcony.’",
        ],
      },
      {
        k: "p",
        t: "A solar oven — a black pot in a glass-fronted box aimed at the sun, with a foil reflector — is not a toy in a dry, clear climate. It will cook rice and heat water while you spend no fuel at all. It will do nothing at night or under heavy cloud. Build notes are in the builds chapter. Commercial solar ovens exist if you would rather buy than fold cardboard.",
      },
      {
        k: "p",
        t: "Never start a wood fire with gasoline. A bottle of lighter fluid on coals has ended enough cookouts in ordinary years. Tinder, then twigs, then fuel. Hair tied. Pot stable before you let go of it. A pot of boiling beans dumped on a child in a shelter is a medical problem you cannot evacuate from.",
      },
      {
        k: "h",
        t: "The camp stove, said once",
      },
      {
        k: "steps",
        items: [
          "Outside, on a level surface that will not melt, away from the eaves and the tent wall.",
          "Check the O-ring. A missing ring is a leak, not a quirk. Soapy water on a cold connection will bubble if gas is escaping. Never hunt a leak with a match.",
          "Cylinder upright. Open the valve, then the stove’s own control. Light as the manufacturer says — match or clicker — with your face not over the burner.",
          "If it flares, turn the control off, let it die, and start again. Do not pick up a flaring stove.",
          "When the pot is done: control off, let the burner cool, then close the cylinder. A closed cylinder with an open stove is how the next person gets a face full of gas.",
          "One-pound canisters and a 20-pound tank do not share a fitting unless you bought the hose that says they do. Test that hose on a calm afternoon, not in the rain.",
        ],
      },
      {
        k: "h",
        t: "What a tank is worth",
      },
      {
        k: "table",
        head: ["Fuel", "Use it for", "Do not"],
        rows: [
          ["20 lb propane", "The daily pot, outdoors", "Store it in the bedroom or the hot car"],
          ["1 lb canisters", "A wet day when the big tank stays outside", "Assume they last a month. They last meals."],
          ["Gasoline", "A generator, in a real can, outside", "Pour it on charcoal or store it in a milk jug"],
          ["Wood and twigs", "A yard stove when the tanks are done", "Burn it in the fireplace you have never used, or indoors in a pan"],
          ["Sun", "A dark pot on a clear day", "Count on it in January rain"],
        ],
      },
      {
        k: "p",
        t: "A fireplace or wood stove that you already know how to run, with a clean chimney, is a heat source. A fireplace you open for the first time during the outage is a smoke machine. If you do not know the damper and you have never seen that chimney swept, do not make it your heating plan this week. Carbon monoxide alarms do not cover every flue mistake. Sleep with a window cracked if you are burning anything in the house, and treat a headache plus nausea as ‘get out now,’ not as a cold.",
      },
    ],
  },
  {
    id: "clean",
    n: "08",
    title: "Sanitation",
    dek: "The bucket is the hospital you can afford.",
    blocks: [
      {
        k: "p",
        t: "When sewers stop, flushing is vandalism against your own floor. Human waste in the open, in the gutter, or in the kitchen is how cholera, hepatitis A, and plain violent diarrhea move through a block. Hunger takes weeks. Diarrhea takes days. Build the toilet on day one while you still have the energy to be disgusted.",
      },
      {
        k: "steps",
        items: [
          "Two 5-gallon buckets with lids. Paint PEE on one and POO on the other. Mixing them is why emergency toilets get a reputation they don’t deserve.",
          "After every poo, add a cup of dry cover: sawdust, peat, coco coir, or shredded paper, until you cannot smell it. Lid on.",
          "Toilet paper goes in the poo bucket. Trash that is merely trash does not.",
          "When the bucket is two-thirds full, bag it or cap it, mark it, and store it out of the sun, out of the living space, and away from water. Do not dump it in the street. Do not feed it to the vegetable garden.",
          "Pee can be stored on its own. Do not pour it on food crops.",
          "Wash hands with soap after, even if you ‘were careful.’ A tippy jug with a spigot beats a shared bowl of gray water.",
        ],
      },
      {
        k: "p",
        t: "You may stage sealed waste outdoors, still far from wells, drains you drink from, and the place children play.",
      },
      {
        k: "p",
        t: "Builders’ lime and wood ash are caustic. They can knock down smell and they can burn skin and lungs. This manual sticks to dry carbon cover because it is hard to misuse. If you already know how to handle lime safely, you do not need this paragraph.",
      },
      {
        k: "h",
        t: "The rest of the body",
      },
      {
        k: "bullets",
        items: [
          "Hand soap is a medical supply. Sanitizer is a backup and does nothing for hands that are actually dirty.",
          "Menstrual cups can be boiled between cycles if fuel allows; otherwise store ninety days of the products you already use.",
          "Diapers are a volume problem. A cloth system plus a covered wash bucket saves the trash bags. Wash water is not drinking water.",
          "A jug with holes, hung, is a shower. Skin infections start when nobody washes for a month. You do not need a spa. You need one soap-down a week and hands ten times a day.",
        ],
      },
      {
        k: "h",
        t: "Dishes without a sink",
      },
      {
        k: "steps",
        items: [
          "Scrape every plate into the trash. Food bits in the wash water turn it into soup.",
          "Three basins, or one basin used three times. Wash with a little soap in treated or recently boiled water. Rinse. Then a last dip with a splash of the same unscented bleach you use for drinking water — a few drops in a gallon, not a cup.",
          "Air-dry on a clean rack. A shared damp towel puts the last meal back on the fork.",
          "Cook pots the same day. Dried bean cement costs more water than washing now.",
          "Gray water goes on ornamental ground, far from the well and the rain barrel, or into the pee store. It does not go back into the drinking jugs, and it does not go down a dead sink if the sewer is dead.",
        ],
      },
      {
        k: "p",
        t: "Trash will not be collected. Bag it, seal it, and stage it out of the kitchen so it does not feed rats in the room where you eat. Do not burn plastic. The smoke is the injury. Cans you emptied can be rinsed with wash water, crushed, and kept separate so they are not attracting anything.",
      },
    ],
  },
  {
    id: "climate",
    n: "09",
    title: "Heat, cold, and smoke",
    dek: "The weather does not pause because the grid did.",
    blocks: [
      {
        k: "h",
        t: "Hot and dry",
      },
      {
        k: "p",
        t: "Close the sun out by day: curtains, cardboard, especially on the west side. Open the house at night if the air is breathable and not thick with smoke. Do hard work at dawn. Wet skin in a breeze, or a wet cotton sheet hung in a shaded doorway, is evaporative cooling and it works when humidity is low. It works poorly in a muggy climate. A basement or a north room stays calmer than an attic, and attics get lethal.",
      },
      {
        k: "warn",
        t: "Heat stroke is an emergency: confusion, hot dry skin or a sudden stop in sweating, vomiting, a body that feels wrong. Move the person to shade, cool them with water, fan them if you have a fan, and get help if help exists. Do not seal a hot apartment shut. In a summer blackout, heat is the threat.",
      },
      {
        k: "h",
        t: "Cold",
      },
      {
        k: "p",
        t: "Heat the person. Hats, dry wool or fleece, a sleeping bag rated colder than the night, everyone in the smallest room, blankets over the doorway, a tent or blanket fort over the bed. A tough bottle of hot water, wrapped so it cannot burn, goes in the bag. Eat. Cold people who skip meals get colder. Cotton against the skin in wet cold is a liability — it holds water and steals heat.",
      },
      {
        k: "p",
        t: "If a hard freeze is coming and the house will have no heat, shut the water main, open the taps, and drain the lowest point and the water heater (power off first). Burst pipes flood the house and then freeze into a sculpture. You can live with no running water. You cannot live well in a flooded, freezing kitchen.",
      },
      {
        k: "h",
        t: "Smoke",
      },
      {
        k: "p",
        t: "Wildfire smoke plus a blackout is a western summer pattern. N95 on if you must go out, no exertion, windows shut. A damp bandana is a weak filter. It is not an N95. If you can reach a cleaner-air room and the trip is safe, that is legitimate.",
      },
      {
        k: "h",
        t: "Cold, in the order it goes wrong",
      },
      {
        k: "table",
        head: ["You see", "You do"],
        rows: [
          ["Shivering, numb fingers, still making sense", "Dry clothes, hat, calories, a small room, no alcohol. Alcohol makes people feel warm while they lose heat."],
          ["Shivering stops, confusion, slurred talk", "This is hypothermia. Insulate, warm sweet drinks only if they can swallow safely, get help. Do not rub the limbs or put them next to a stove."],
          ["White, waxy, numb skin on ears, fingers, toes", "Frostbite. Get to shelter. Rewarm gently against skin. Do not walk on a thawed foot if you can avoid it. Do not rub snow on it. That advice is a myth that adds damage."],
        ],
      },
      {
        k: "p",
        t: "Layers: a dry base that is not cotton, an insulating layer (wool, fleece), a shell if the wind or rain is the problem. Wet cotton comes off. A change of socks in a bag is worth more than a second coat you cannot wear while the first is soaked. Sleep in a hat. Most of the heat you think you are losing ‘from the head’ is just the only skin you left uncovered.",
      },
      {
        k: "h",
        t: "The pipes, the night before a freeze",
      },
      {
        k: "steps",
        items: [
          "Shut the main.",
          "Open every faucet, hot and cold, upstairs and down.",
          "Drain the lowest outdoor bib and the heater, power to the heater already off.",
          "Flush the toilets once to empty the tank into the bowl, then leave the supply valves closed. Do not use that flush as a habit afterward.",
          "Pour RV antifreeze only into traps and the bowl if you already own it and you know it is the plumbing kind. Do not put automotive antifreeze in any pipe that might later touch drinking water. When in doubt, skip the chemical and just drain.",
          "Leave the faucets open so leftover water has somewhere to expand.",
        ],
      },
    ],
  },
  {
    id: "power",
    n: "10",
    title: "Light, batteries, and EMP",
    dek: "A spare radio in a metal can is a plan. A personality built around Faraday cages is not.",
    blocks: [
      {
        k: "p",
        t: "You need light you can wear, a radio that does not depend on a wall, and enough battery to get through the first two weeks while a small solar panel does the rest. Ninety days of disposable batteries is a closet and a leak risk. Twenty-four AA cells are a bridge. A USB headlamp and a 10 to 20 watt panel are the long tool, and only if you have tested that the plug actually fits.",
      },
      {
        k: "bullets",
        items: [
          "Phones: airplane mode, lowest brightness, one text, offline maps already downloaded. The network is a guest.",
          "Candles: metal holder, never in the blanket fort, never unattended, out before sleep. They are a fire source that happens to glow.",
          "Loose batteries in a junk drawer will spend themselves against coins. Keep them boxed.",
          "Lithium packs do not belong on a hot dashboard or in a sealed can in the sun.",
        ],
      },
      {
        k: "h",
        t: "EMP, as a spare-radio closet",
      },
      {
        k: "p",
        t: "Unplug what you can so a surge does not kill the radio and the fridge when power returns. A galvanized can with a tight metal-to-metal lid, cardboard lining, and a spare radio inside is a reasonable way to keep one radio out of that surge. Test it with a phone: if the phone rings while sealed in, the lid is leaking. Paint in the joint is a leak. This does not protect the refrigerator you left plugged in, and it does not make a car immune. Own a bicycle so a dead car is not the end of leaving the block.",
      },
      {
        k: "note",
        t: "Do not store the only radio you use in the can. The can is the spare. The one you will turn on at hour one sits on a shelf you can find in the dark.",
      },
      {
        k: "h",
        t: "A charging day",
      },
      {
        k: "steps",
        items: [
          "Panel in real sun, not behind window glass if you can help it. Glass cuts the output. Face it south, tilted, and move it once at midday.",
          "Charge the battery pack, not the phone directly, if the panel is small. Then the phone gets a short, planned charge.",
          "Headlamp and radio get their turn before anyone’s spare tablet.",
          "Stop at dusk. A panel left out overnight is a gift to the weather and to anyone walking past.",
          "If the pack gets hot, swollen, or smells sweet and chemical, it is done. Do not puncture it. Set it outside on concrete, away from the house, until you can dispose of it.",
        ],
      },
      {
        k: "p",
        t: "A 10-watt panel in a good hour is on the order of 8 to 10 watt-hours. A phone might take half of that from empty. A cloudy week is a battery diet: radio at the two set hours, one text, lights on low, no video. Write the county map on paper so the phone can stay off.",
      },
      {
        k: "p",
        t: "Bicycles are the vehicle that still works when the pumps at the gas station do not. A pump, a spare tube, and lights you have used are the kit. Ride in daylight. A car with a full tank is a better shelter and a worse plan if every intersection is dark and the radio is saying stay off the roads. Do not idle a car in a closed garage to charge a phone. That is the generator mistake with a nicer seat.",
      },
    ],
  },
  {
    id: "body",
    n: "11",
    title: "Medicine and injury",
    dek: "Clean water on a wound beats a cabinet of mystery pills.",
    blocks: [
      {
        k: "p",
        t: "The medical plan is the prescriptions you already need, a kit for cuts and burns, and the humility to know what you cannot treat. Ask now for an extra fill of anything you would be endangered without. Write the name, the dose, and the schedule on paper. Insulin and some other drugs die in heat; a commercial evaporative pouch helps in dry climates and is not magic. Ask the pharmacist what your specific medicine tolerates. Do not change a dose to stretch a vial unless the prescriber taught you how.",
      },
      {
        k: "h",
        t: "Wounds",
      },
      {
        k: "steps",
        items: [
          "Wash your hands. Put gloves on if you have them.",
          "Bleed that is pulsing or won’t slow: direct pressure. If a limb is bleeding life away, a commercial tourniquet high and tight, time written down, and a plan to reach care. Take a Stop the Bleed class before you own an opinion about this.",
          "Everything else: irrigate with a lot of clean water until the grit is gone. A 60 ml syringe is the tool. Then a clean dressing. Ointment is optional. Grit left in is not.",
          "Change the dressing when it is wet, dirty, or smelly. Red streaks, fever, or a wound that is getting worse instead of duller is a reason to spend risk getting to a clinician if one exists.",
        ],
      },
      {
        k: "h",
        t: "Dehydration",
      },
      {
        k: "p",
        t: "Sip oral rehydration, don’t chug it. Packet if you have it. Homemade, in one liter of treated water: 6 level teaspoons of sugar and 1/2 level teaspoon of salt. This is a stopgap the rehydration literature has taught for decades. It is not care for an infant who is listless, for blood in the stool, for a person who cannot keep anything down, or for someone who has not urinated in many hours. Those people need a medical facility if the roads allow it. Loperamide can slow ordinary diarrhea. Do not use it to trap a serious gut infection inside somebody who is getting sicker.",
      },
      {
        k: "bullets",
        items: [
          "Teeth: floss, a small dental kit, salt water rinses. A toothache will occupy your entire mind. Clove oil numbs; it does not fix an abscess.",
          "Fever: acetaminophen or ibuprofen per the label, fluids, watch the person. A stiff neck with fever and light sensitivity is not a ‘wait it out’ symptom when care exists.",
          "Spare glasses. The prescription on paper. A person who cannot see cannot tend a stove safely.",
          "Do not take random expired antibiotics as a strategy. Some degrade into uselessness and a few old drugs have been harmful. The strategy is to have the right medicine, in date, for the conditions you already have, and a clean wound technique for everything else.",
        ],
      },
      {
        k: "h",
        t: "Burns",
      },
      {
        k: "p",
        t: "Cool the burn under clean running water, or with wet clean cloths, for about twenty minutes. Not ice. Not butter, toothpaste, or oil. Then a clean non-stick cover, loose. A burn that is larger than the person’s palm, that circles a limb, that is on the face, hands, feet, or groin, or that looks white and leathery, is a hospital problem if a hospital exists. Chemical burns: rinse a long time, and do not try to ‘neutralize’ them with whatever is under the sink. Blisters that are intact are a dressing. Popping them on the first day is how they get dirty.",
      },
      {
        k: "h",
        t: "What belongs in the box",
      },
      {
        k: "bullets",
        items: [
          "Gloves, gauze, roller bandage, tape, a few non-stick pads, tweezers, a 60 ml irrigation syringe, soap.",
          "Acetaminophen and ibuprofen, in date, with the adult and child doses written on the outside of the box.",
          "Oral rehydration packets. Antihistamine you already know you tolerate, if someone in the house gets hives or a bad insect sting.",
          "Any prescription, with days of extra, and a paper list of allergies.",
          "Thermometer and a spare pair of glasses. A flashlight that lives in the box so the box is useful at night.",
          "Nothing you do not know how to use. A suture kit is not a skill.",
        ],
      },
    ],
  },
  {
    id: "radiation",
    n: "12",
    title: "Radiation, without the folklore",
    dek: "Time, distance, shielding. A meter if you can buy one. A basement if you can’t.",
    blocks: [
      {
        k: "p",
        t: "Three levers, and only three. Time: fallout from a fresh fission event loses strength quickly at first. Distance: dose drops as you move away from the dust, and the worst dust is often a plume, not a circle. Shielding: every bit of mass between you and the grit helps. You do not need a mine shaft. You need to not be in the open, and then to put the densest thing you have between your body and the outside.",
      },
      {
        k: "p",
        t: "A rough civil-defense idea is the protection factor: how many times less dose you take inside versus on the open ground. These are typical textbook ranges, not a survey of your house. A meter beats the table.",
      },
      {
        k: "table",
        head: ["Place", "What to expect", "Better move"],
        rows: [
          ["Open yard", "Full dose", "Leave it"],
          ["Wood house, main floor", "Cuts dose only a little", "Basement or a neighbor’s concrete"],
          ["Basement of a wood house", "Much better, often around tenfold or more", "Pile mass at the windows"],
          ["Center of an apartment, middle floors", "Better than the top floor or a glass lobby", "Interior hall or stair core"],
          ["Below grade in concrete", "The goal", "Stay"],
        ],
      },
      {
        k: "h",
        t: "The seven-ten rule",
      },
      {
        k: "p",
        t: "For mixed fresh fallout, a planning rule used for decades says the dose rate falls about tenfold for every sevenfold increase in time since the detonation. If the rate at one hour is the baseline, it is about a tenth at seven hours, about a hundredth at forty-nine hours, and about a thousandth at roughly two weeks. Real plumes are messier. Rain washes dust into gutters and onto roofs and makes hot spots. The rule is how you understand ‘wait’ when you have no meter. It is not permission to jog around at hour eight.",
      },
      {
        k: "p",
        t: "The Plan page will scale a reading you type in. If you do not know roughly when the detonation happened, the math cannot start. Shelter anyway.",
      },
      {
        k: "h",
        t: "A core inside the room",
      },
      {
        k: "p",
        t: "If you have warning or you are already inside and safe to move heavy things, build a smaller shelter inside the best room. Tables tipped or doors laid across boxes, then mass on and around them: cases of water, books, concrete blocks, earth in containers. Water and paper are decent shielding because you can stack a lot of them. Sleep there. Put the waste bucket just outside that core, not in it, and still inside the building. A few feet of packed earth or a couple of feet of concrete is serious shielding. Most houses will not get there. Getting from ‘window seat’ to ‘basement corner behind the water jugs’ is still a large win.",
      },
      {
        k: "p",
        t: "Phone apps that claim to be Geiger counters are not a plan. A real survey meter, turned on once a year so you know what background looks like in your town, is the later-priority buy in the kit. Units: a rough conversion you can remember is that 1 mR is about 10 µSv. Officials may speak in either. Write the number and the time, then go back to the core. Do not tour the block collecting readings.",
      },
      {
        k: "note",
        t: "Radiation sickness — vomiting in the first hours after a known large exposure — means a serious dose. Write the time it started. That person needs a hospital when movement is survivable. Do not cross an active fallout field at hour two because the parking lot of a hospital might have a doctor. Most people who shelter correctly never get that sick. The point of the basement is to stay in the group that does not.",
      },
    ],
  },
  {
    id: "ki",
    n: "13",
    title: "Potassium iodide",
    dek: "A thyroid pill with a job description. It is not an anti-radiation amulet.",
    blocks: [
      {
        k: "warn",
        t: "Take KI only when public health officials say to. One dose. Repeat only if they say exposure is continuing. This is not a vitamin to start on the night the news looks bad.",
      },
      {
        k: "p",
        t: "Radioactive iodine, if a release contains it, is taken up by the thyroid, especially in the young. Potassium iodide fills the gland with stable iodine so there is less room for the radioactive kind. It does not protect marrow, gut, or lungs. It does not stop gamma rays from fallout on the ground. It does not treat burns or blast. It does nothing about a grid failure that had no radioactive iodine in it.",
      },
      {
        k: "p",
        t: "FDA’s long-standing public dose table, which you should recheck against the sheet in the box you actually bought:",
      },
      {
        k: "table",
        head: ["Who", "Dose"],
        rows: [
          ["Birth through 1 month", "16 mg"],
          ["1 month through 3 years", "32 mg"],
          ["3 years through 12 years", "65 mg"],
          ["12 through 18, under 150 lb", "65 mg"],
          ["Teens at least 150 lb, adults 18–40", "130 mg"],
          ["Pregnant or nursing", "130 mg, when officials direct it"],
          ["Over 40", "Usually none, unless officials say thyroid exposure will exceed 500 cGy"],
        ],
      },
      {
        k: "p",
        t: "Adults over 40 have a lower risk of later thyroid cancer and a higher risk of side effects, which is why the default is not ‘everyone takes 130.’ Pregnancy is a reason the official instruction matters more, not less: the fetal thyroid is sensitive, and a public health order is how that tradeoff gets made in the moment. Do not freelance a pregnancy dose from a group chat.",
      },
      {
        k: "p",
        t: "Buy the form you can dose. Tablets are 130 mg or 65 mg. Children’s liquid exists. Snapping a tablet into eight accurate pieces, in the dark, with shaking hands, is a bad plan if you have small children — buy the pediatric form now or talk to a pharmacist about what they will actually stock. People with a true iodine allergy, dermatitis herpetiformis, or hypocomplementemic vasculitis should not take KI. Thyroid disease is a question for a clinician before the emergency, not during it. A seafood allergy is not the same fact as an iodine allergy, and it is still worth a calm conversation with a clinician now.",
      },
      {
        k: "p",
        t: "Side effects can include stomach upset, rash, and salivary or thyroid inflammation. That is an acceptable trade when a real radioiodine plume is overhead and officials have said so. It is a dumb trade on an ordinary Thursday.",
      },
    ],
  },
  {
    id: "signals",
    n: "14",
    title: "Signals and the family plan",
    dek: "The person who writes it down beats the person who refreshes.",
    blocks: [
      {
        k: "p",
        t: "Pick one out-of-area contact, a voice mailbox of sorts made of a human. Local calls fail when everyone calls local. A text to an aunt three states away often lands when a call to the school will not. Each person in the household memorizes that name. The rally point near home is where you meet if the house is closed. The rally point farther out is where you meet if the neighborhood is closed. Both are ordinary places you can walk to, not a secret cabin four hours away that you have never driven in the rain.",
      },
      {
        k: "h",
        t: "NOAA weather radio",
      },
      {
        k: "p",
        t: "One of these frequencies is yours. Find it before the crisis and write it on the radio in paint marker: 162.400, 162.425, 162.450, 162.475, 162.500, 162.525, 162.550 MHz. AM and FM still matter because local stations become the human voice. Shortwave is a bonus on some crank radios and a rabbit hole on the others. Listen at two set hours. Write the sentence the official said. Rumor is infinite and free.",
      },
      {
        k: "bullets",
        items: [
          "FRS handhelds: no license, short range, fine for ‘I’m at the meter.’ Assume the channel is public. No inventories, no medical histories.",
          "GMRS: more range, needs an FCC license, repeaters may be dead. Get the license before, or don’t depend on it.",
          "Three blasts on a whistle means distress. Agree on it with the people in your house.",
          "Paper maps of the county. Offline maps on the phone as a duplicate, not the original.",
          "Ham radio is the long-distance skill. It is a months-long project, not a purchase you make the night of.",
        ],
      },
      {
        k: "note",
        t: "Write the plan on the Plan page, then copy it onto paper and put the paper in the shelter room. This app will not be in your pocket if your phone is in the car.",
      },
      {
        k: "h",
        t: "The card, word for word",
      },
      {
        k: "p",
        t: "One index card per person, in a pocket or a bag they actually carry. Not a novel. The out-of-area contact’s name and number. Two rally points, with a cross street a stranger could use. The meeting times: morning and late afternoon, so a person who misses one has a second chance the same day. Allergies and a medicine name. The NOAA channel you already painted on the radio. A child who cannot read yet still needs the adult card in the child’s bag, and a sentence they can say: who they belong to and where ‘home’ is if the block is closed.",
      },
      {
        k: "p",
        t: "A message that gets through is short. ‘We’re at the house. All four accounted for. Staying through tomorrow. Next check at 4.’ Do not spend the battery on a paragraph. If the network is up for ten minutes, that sentence is the whole use of it. If it is not up, the rally time is the message.",
      },
      {
        k: "bullets",
        items: [
          "Agree on the two hours now. Write them on the fridge. When the fridge is dark they are still the hours.",
          "Someone listens. Someone else writes the one sentence officials said. The notebook stays by the radio.",
          "If you leave the house, you leave a paper note: where you went, what time, when you will be back. The people who panic a family are the ones who ‘just stepped out.’",
          "School and work plans exist before the day. ‘Meet at the house’ fails when the house is the thing that is closed and the child is across town.",
        ],
      },
    ],
  },
  {
    id: "people",
    n: "15",
    title: "Other people",
    dek: "The movie starts too early. The real problems are smaller and closer.",
    blocks: [
      {
        k: "p",
        t: "In the first days of a blackout, most people are decent, bored, and waiting for the utility. The dangerous hours are more often week two and after, when food that was never stored runs out and official help is still a rumor. Plan for that slope. Do not spend day one aiming a personality at the street.",
      },
      {
        k: "p",
        t: "Be slightly useful and slightly poor in public. Share labor, a pot of rice, a hand with a shutoff valve, a check on the old man at the end of the hall. Do not share a tour of the garage. Do not post what you own. Light leaking out of blackout curtains is an advertisement. The house running a loud generator all night is an advertisement. Split your stores so one loss is not the end, and keep your mouth shut about the split.",
      },
      {
        k: "p",
        t: "Know your neighbors’ names now, while introductions are cheap. A block that recognizes itself shares a radio hour and a sanitation rule. A block of strangers invents enemies. If you have children, their friends’ parents are part of your communications plan whether you like it or not.",
      },
      {
        k: "warn",
        t: "Do not plan on taking other people’s supplies. It is a crime, it makes you a target, and it burns the only network that gets a street through a month. This manual will not teach fighting, traps, or weapons. If you choose to own a firearm, that is a legal and training question for your jurisdiction and a certified class, handled long before you are frightened. It is not a substitute for water.",
      },
      {
        k: "bullets",
        items: [
          "Travel by day, in pairs, when travel is necessary. Night movement is how accidents and bad meetings happen.",
          "Do not stop for a stranger’s emergency that requires you to leave the car or the bike in a place you cannot see. Call it paranoia if you want. It is also how ordinary robberies work in ordinary years.",
          "Curfew yourself. Tired people agree to bad ideas.",
          "Write down who has the spare key, who has asthma, who needs a knock every morning. Community is a list, not a vibe.",
        ],
      },
    ],
  },
  {
    id: "builds",
    n: "16",
    title: "Builds",
    dek: "Things you can make. None of them replace the item you should have bought.",
    blocks: [
      {
        k: "h",
        t: "Two-bucket toilet",
      },
      {
        k: "steps",
        items: [
          "Two food-safe or at least sturdy buckets, two lids that actually fit.",
          "Mark them. Cut a pool-noodle slit lengthwise if you want a seat. It is a luxury.",
          "Cover material in a third container with a scoop.",
          "Handwash jug immediately beside them, not ‘somewhere.’",
          "Use as in the sanitation chapter. The build is mostly the discipline.",
        ],
      },
      {
        k: "h",
        t: "Handwash jug",
      },
      {
        k: "p",
        t: "A container with a spigot, or a plastic bottle with a small hole in the cap. Hang it or set it so you can tip it with a wrist or a stick. Soap on a rope. The gray water falls into a basin you empty into the pee bucket or onto an ornamental shrub, not into the drinking water.",
      },
      {
        k: "h",
        t: "Bucket prefilter",
      },
      {
        k: "p",
        t: "Punch a small hole in the bottom of a clean bucket. Layer, from the bottom: cloth, clean gravel, clean sand, crushed plain-wood charcoal, gravel. Pour settled water through. Collect. Then boil or bleach. Rinse the sand now and then. This is a mud filter. Say that out loud so nobody ‘improves’ it into a claim it cannot keep.",
      },
      {
        k: "h",
        t: "Rocket stove, if you must",
      },
      {
        k: "p",
        t: "A commercial stove is safer. If fuel cans are gone and you have twigs: a ring of bricks or concrete blocks with a small combustion chamber and a chimney gap, pot supported so it cannot tip, outdoor only, on bare ground or brick, hair tied, no gasoline. A tin-can version exists in every camping forum and dumps boiling water when someone builds it badly. If the pot wobbles, you do not have a stove yet. Keep a bucket of water or the extinguisher beside you for the surroundings, not for pouring into a grease fire.",
      },
      {
        k: "h",
        t: "Solar oven",
      },
      {
        k: "steps",
        items: [
          "A cardboard box inside a slightly larger box, crumpled newspaper in the gap.",
          "Paint a pot black or use a dark enamel one. A clear lid, an oven bag, or a pane of glass holds the heat.",
          "A flap lined with foil, or a windshield sunshade, aimed to bounce sun into the box.",
          "Point it at the sun and re-aim every half hour or so.",
          "Rice, soaked beans, and hot water are the realistic menu. If the food never gets hot, it is not cooked. Eat canned food instead of guessing.",
        ],
      },
      {
        k: "h",
        t: "Sprout jar",
      },
      {
        k: "p",
        t: "Use seed sold for sprouting. Do not sprout random garden seed (it may be treated) and do not eat raw kidney beans. Mung, lentil, alfalfa, and broccoli seed are the usual set. A tablespoon in a jar, water to cover overnight, then drain through a cloth held with a ring. Rinse and drain two or three times a day. Keep it out of harsh sun. Eat when the tails show. If it smells rotten or feels slimy, it is trash, not vitamins. The calories are negligible. The chew and the vitamin C are the point.",
      },
      {
        k: "h",
        t: "Warm room",
      },
      {
        k: "p",
        t: "Smallest room, fewest windows, blankets on the doorway, mattress away from the exterior wall, people and the dog in one pile, hats on, a wrapped hot-water bottle, a candle nowhere near it. Close the rest of the house so you are not heating the hallway with body heat you needed. No flame for warmth.",
      },
      {
        k: "h",
        t: "Evaporative sheet",
      },
      {
        k: "p",
        t: "In dry heat: hang a cotton sheet in a shaded window or doorway that has a breeze. Wet it. Sit on the lee side. Re-wet when it dries. Combine with closed sun-side curtains. This is the same physics as a swamp cooler and it wants low humidity. In sticky heat, moving air and less exertion are what you have.",
      },
      {
        k: "h",
        t: "Rain barrel",
      },
      {
        k: "p",
        t: "A food-grade barrel under a downspout, inlet screened so mosquitoes cannot own it, first ten minutes of a storm diverted off a dirty roof. Then treat everything you drink.",
      },
      {
        k: "h",
        t: "Faraday bin",
      },
      {
        k: "p",
        t: "Galvanized can, cardboard liner, electronics inside not touching metal, lid taped metal-to-metal with aluminum tape if the rim is painted. Test with a ringing phone. Store a spare radio, not the phone you need tomorrow morning. Details are in the power chapter.",
      },
      {
        k: "h",
        t: "Retained-heat box",
      },
      {
        k: "steps",
        items: [
          "A cooler, or a cardboard box lined with towels, big enough that the pot sits with cloth all around it. The lid has to close.",
          "Bring rice or soaked beans to a real boil, lid on the pot, outdoors.",
          "Set the pot in the nest immediately. Fill the gaps with towels so it cannot tip. Close the box.",
          "Leave it alone for about an hour for rice, longer for beans. Opening it to check is how you let the heat out.",
          "Eat it the same day. The box is an insulator, not a refrigerator. If the food is only warm when you open it, finish the boil or throw it out. Do not talk yourself into a lukewarm pot of beans.",
        ],
      },
      {
        k: "h",
        t: "A first flush on the barrel",
      },
      {
        k: "p",
        t: "Roofs shed dust, bird mess, and whatever landed since the last rain. The first minutes of a storm should not enter the barrel. A simple version: a short length of downspout you can swing aside, or a bucket under the spout you empty onto the ground, then you set the barrel. Ten minutes of a steady rain on a small roof is a reasonable waste. Screen the inlet. A tight lid. Once a week in mosquito season, look. If you see larvae, the screen failed. Empty, scrub, start over. Everything you drink from the barrel is still filtered and disinfected. The barrel is storage of raw water, not a finish.",
      },
    ],
  },
  {
    id: "buy",
    n: "17",
    title: "Buying it",
    dek: "Three budgets. One rule: buy what you will eat, this month, not a costume.",
    blocks: [
      {
        k: "p",
        t: "Do not wait for a complete kit. Each grocery trip, buy one extra of something you already cook: another bag of rice, another flat of tuna, another jug of water. A pantry built that way gets eaten and replaced. A pallet of wheat berries you cannot mill is a piece of furniture.",
      },
      {
        k: "table",
        head: ["Tier", "Rough cost", "What it actually is"],
        rows: [
          ["Bridge", "About the price of a nice grocery run", "14 gallons of water storage, bleach, crank radio, headlamp, batteries, manual can opener, first-aid basics, trash bags, a week or two of extra food you eat, a whistle, cash in small bills"],
          ["Ninety", "Several hundred dollars", "The staple food in Plan, bucket toilet, filter, spare meds, propane and the hose, plastic and tape, wool, N95s, solar charger, menstrual supplies"],
          ["Deep", "What you can do after the above", "A 20 lb propane tank if you skipped it, a bicycle, spare glasses, more water barrels"],
        ],
      },
      {
        k: "bullets",
        items: [
          "Grocery and warehouse clubs for food and bleach and soap.",
          "Hardware for buckets, sheeting, tape, the utility wrench, the extinguisher, the CO alarm.",
          "Pharmacy for rehydration salts, spare meds, N95s.",
          "Outdoor shop for the filter and the stove.",
          "Thrift for wool blankets. Wash them before you need them.",
          "Restaurant supply if you have one nearby, for bulk oil and rice at sane prices.",
        ],
      },
      {
        k: "p",
        t: "Storage: cool, dry, dark, off the floor, pest-proof. Dates facing out. Bleach replaced yearly. Oil smelled. Batteries dated. A map in the binder that says which closet holds the water, because you will not remember in the dark and a guest will not know.",
      },
    ],
  },
  {
    id: "ninety",
    n: "18",
    title: "The ninety-day clock",
    dek: "What changes from hour one to day seventy.",
    blocks: [
      {
        k: "p",
        t: "The Plan page holds the operational list. This is the shape of it, so the list feels less arbitrary.",
      },
      {
        k: "table",
        head: ["When", "The job that matters", "The failure"],
        rows: [
          ["Hour 1", "Fill water, kill the toilet habit, one text", "Waiting to see if the power comes back"],
          ["Hour 4", "Fridge food cooked or eaten, buckets set, radio hour", "Opening the freezer to ‘check’"],
          ["Day 2–3", "Heater water into jugs, paper plan on the wall", "Flushing because the tank still looks normal"],
          ["Day 4–14", "Rations, bleach, a walk only for water or people", "A generator in the garage"],
          ["Day 15–60", "Haul, treat, date the jug, same three meals", "Skipping the cover on the bucket"],
          ["Day 60–90", "Written hygiene card, take aid if it is offered", "A creek that ‘looks clear’"],
        ],
      },
      {
        k: "h",
        t: "The first three days",
      },
      {
        k: "p",
        t: "You are living on what the house already contained. Water pressure, freezer mass, and pharmacy schedules are all decaying. The job is to capture water, stop flushing, and eat the cold food. Movement is for reuniting the household if the roads are safe. After that, movement is a luxury.",
      },
      {
        k: "h",
        t: "Days four through fourteen",
      },
      {
        k: "p",
        t: "This is when you learn whether your town has water pressure, a generator at the well, or a mutual-aid point. Routine is the medicine: radio hours, rations, buckets, a job for every person. You still treat water. You still don’t flush a dead sewer.",
      },
      {
        k: "h",
        t: "The second month",
      },
      {
        k: "p",
        t: "Stored water gives way to a production habit: haul, settle, filter, disinfect, date the jug. Food math gets honest. Social friction gets honest. The households that do well are slightly boring. They cook the same three meals, wash their hands, and do not pick fights at distribution lines.",
      },
      {
        k: "h",
        t: "Days sixty to ninety",
      },
      {
        k: "p",
        t: "Fatigue is the hazard. People skip the cover material on the bucket. People nap through the radio hour. People decide a creek ‘looks fine.’ Put the hygiene steps back on a written card on the wall. Rotate the worst chore. If help is handing out water, swallow your pride and take the water.",
      },
      {
        k: "p",
        t: "When power returns, add electrical loads slowly, refill the water heater before you heat it, and do not relight a gas meter you closed. Then replace what you used while the memory is fresh. The second outage does not care that you learned a lesson.",
      },
    ],
  },
  {
    id: "mind",
    n: "19",
    title: "Morale",
    dek: "Week three is worse than hour three. Plan for that.",
    blocks: [
      {
        k: "p",
        t: "Shock is focusing. Boredom is corrosive. Somewhere in the third week, if the lights are still out, people get sharp with each other over nothing, sleep badly, and start believing the ugliest rumor because it is at least a plot. A written day is the countermeasure.",
      },
      {
        k: "bullets",
        items: [
          "Wake, water, one chore, one meal, a rest, a radio hour, a second chore, a meal, lights low, sleep. Same order tomorrow.",
          "Give children the truth in one sentence and the next action in the second sentence. ‘The power is out for a long time. We are staying in this room. Your job is to set the cups out.’ Do not ask them to manage your fear.",
          "One rest day a week even if nothing is finished. Bodies break on loyalty to the chore chart.",
          "One small pleasure that you ration: candy, a chapter read aloud, a card game, coffee at the same hour.",
          "News is twice a day. The rest of the radio dial is how you make yourself frantic for no extra information.",
          "Sleep is a supply. Hats on, bladders empty, arguments paused until morning. Almost nothing you can decide at midnight in a blackout is better than the version you decide at breakfast.",
        ],
      },
      {
        k: "p",
        t: "If someone in the house is not coping — not eating, not sleeping, talking about not wanting to be here — stay with them, give them a small job in the morning light, and get them to whatever care still exists. You do not need a speech. You need to not leave them alone with the worst hour of the night.",
      },
    ],
  },
  {
    id: "myths",
    n: "20",
    title: "Myths that waste the first hour",
    dek: "Short on purpose. Read this twice.",
    blocks: [
      {
        k: "bullets",
        items: [
          "A 72-hour kit does not cover day 30. Guns do not replace water.",
          "The bathtub is wash water unless you lined it and treated it. Do not romanticize it.",
          "Bleach with a fragrance is not water treatment. Old bleach is not water treatment.",
          "A generator in the garage with the door open is still a CO incident.",
          "Backfeeding the panel is how people outside your house die.",
          "Sealing the apartment in a heat wave is how people inside your house die.",
          "Best-by is not the same as ‘bulging can.’ And ‘bulging can’ is not a taste test.",
          "Pets do not get your rice math or the toilet water.",
          "You will not rise to the occasion. You will fall to the level of the drill you already did. Do the drill.",
        ],
      },
    ],
  },
  {
    id: "sources",
    n: "21",
    title: "Limits and sources",
    dek: "Where this came from, and what it refuses to be.",
    blocks: [
      {
        k: "p",
        t: "Water disinfection numbers follow EPA emergency disinfection guidance for unscented household bleach, and CDC boil times. The homemade rehydration mix is the widely taught sugar-and-salt fallback for when commercial oral rehydration salts are unavailable. Generator placement and the ban on backfeeding follow ordinary electrical-safety practice: a transfer switch, and the machine outdoors.",
      },
      {
        k: "bullets",
        items: [
          "FEMA Ready.gov — Power Outages.",
          "EPA — Emergency Disinfection of Drinking Water.",
          "CDC — making water safe in an emergency, including boil times.",
          "WHO — oral rehydration guidance. Commercial packets are preferred over the homemade mix.",
        ],
      },
      {
        k: "p",
        t: "This manual does not know your house, your medications, or tomorrow’s weather. Numbers for propane and calories are planning figures so you can buy in the right order of magnitude. They are not personal medical or engineering advice. Laws on radios, fuel storage, generators, and firearms are local. If you can hear an official, do what they say even when it disagrees with a paragraph here. You have a radio and a bucket. Used together, that is a lot.",
      },
    ],
  },
];

export function chapterPlainText(ch: Chapter): string {
  return ch.blocks
    .map((b) => {
      if (b.k === "p" || b.k === "h" || b.k === "warn" || b.k === "note") return b.t;
      if (b.k === "steps" || b.k === "bullets") return b.items.join(" ");
      return b.rows.map((r) => r.join(" ")).join(" ");
    })
    .join(" ");
}
