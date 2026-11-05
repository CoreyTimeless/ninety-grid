import type { Plan } from "@/lib/calc";
import { fmt } from "@/lib/calc";

export type KitCat =
  | "Water"
  | "Food"
  | "Fire"
  | "Health"
  | "Clean"
  | "Shelter"
  | "Signal"
  | "House"
  | "Nuclear";

export type KitPriority = "critical" | "core" | "later";

export type KitItem = {
  id: string;
  cat: KitCat;
  name: string;
  priority: KitPriority;
  detail: string;
  get: string;
  use: string;
  qty: (p: Plan) => string;
};

export const kitCats: KitCat[] = [
  "Water",
  "Food",
  "Fire",
  "Health",
  "Clean",
  "Shelter",
  "Signal",
  "House",
  "Nuclear",
];

const none = "Set a household size in Plan.";

export const kit: KitItem[] = [
  {
    id: "water-store",
    cat: "Water",
    name: "Stored drinking water",
    priority: "critical",
    detail:
      "Municipal pressure can die the same day the grid does. Treatment plants and pumps need power. What is already in your house is the only water you are sure of.",
    get: "Food-grade jugs from a grocery or hardware store, or factory-sealed water. Do not reuse milk jugs (they crack and are hard to clean) or containers that held chemicals. Opaque is better than clear.",
    use: "Fill them before an event if you can, from the tap, and date them. Rotate every six months, or treat before drinking if the water tastes off. Keep them dark and cool. In the first hour of an outage, fill the bathtub and every pot as a washing reserve, and fill clean jugs for drinking.",
    qty: (p) =>
      p.people
        ? `${fmt(p.galStored, p.galStored % 1 ? 1 : 0)} gallons to have on hand (${p.waterDaysStored} days). That is about ${p.jugs5} of the common 5-gallon jugs. A full ${p.days}-day supply with no new water is ${fmt(p.galIfNoResupply, 0)} gallons — too heavy to store. Store the bridge, and own a way to treat more.`
        : none,
  },
  {
    id: "bleach",
    cat: "Water",
    name: "Regular unscented bleach",
    priority: "critical",
    detail:
      "Bleach (sodium hypochlorite) disinfects clear water after you have filtered out the dirt. It does not remove fuel or chemicals. It is the cheapest reliable disinfectant you can buy tonight.",
    get: "Any grocery. Buy plain regular bleach, about 5–6% or 8.25% sodium hypochlorite. Not splashless, not scented, not color-safe, not a bleach cleaner with other ingredients. Check the date. Strength fades in about a year — replace it.",
    use: "Filter cloudy water first through a clean cloth. For clear water add 8 drops (1/8 teaspoon) of 5–6% bleach per gallon, or 6 drops of 8.25% per gallon. Double that if the water was cloudy, colored, or very cold. Stir. Wait 30 minutes. It should smell faintly of chlorine. If it does not, repeat the dose once and wait 15 more minutes. Label the jug BLEACH so nobody drinks it.",
    qty: (p) =>
      p.people
        ? `One fresh gallon jug. The gap you may have to treat is about ${fmt(p.galToTreat, 0)} gallons. With a double margin that is roughly ${fmt(p.bleachTsp, 1)} teaspoons of 6% bleach — a small fraction of one jug. Buy the gallon anyway. A hotel bottle gets lost, and old bleach is weak.`
        : none,
  },
  {
    id: "filter",
    cat: "Water",
    name: "Pump or gravity water filter",
    priority: "core",
    detail:
      "A hollow-fiber or ceramic camping filter removes protozoa and bacteria and makes bleach work better by clearing sediment. Most backpack filters do not remove viruses or dissolved chemicals. In a city, treat filtered water with bleach or by boiling anyway.",
    get: "Outdoor stores. Look for a named hollow-fiber pump or gravity bag (Sawyer, Katadyn, and similar) and read what it does not remove. Buy spare elements. A filter with a clogged cartridge is a brick.",
    use: "Flush it before first use the way the card in the box says. Don’t let a hollow-fiber element freeze — ice breaks it. Don’t run obviously chemically contaminated water (gas, solvents) through it and expect a miracle. After filtering, disinfect.",
    qty: () => "One filter the whole household can share, plus a spare cartridge if the model uses one.",
  },
  {
    id: "tablets",
    cat: "Water",
    name: "Chlorine dioxide tablets",
    priority: "core",
    detail:
      "Packaged tablets are harder to mis-measure than liquid bleach in the dark. Chlorine dioxide also handles some tastes that bleach makes worse. They are not a substitute for filtering muddy water.",
    get: "Outdoor aisle or pharmacy. Buy a bottle with a long date. Follow that bottle’s label, not a number from the internet for a different product.",
    use: "Settle or filter debris first. Drop the tablet in the volume the label names. Wait the full time, longer if the water is cold. Don’t use pool shock, granular calcium hypochlorite, or homemade mixes — mis-measuring them poisons people, and some combinations can start fires.",
    qty: (p) =>
      p.people
        ? `Enough for at least ${fmt(p.galStored, 0)} gallons (your stored-water window) so you can treat a bad batch. Check the label for tablets per gallon.`
        : none,
  },
  {
    id: "carriers",
    cat: "Water",
    name: "Collapsible carriers",
    priority: "core",
    detail:
      "After the first weeks you will walk for water. A carrier with a cap beats a bucket you spill down your legs. Weight is the limit: a gallon is about 8 pounds.",
    get: "Camping section. Water bricks, collapsible jugs, or a few sturdy 5-gallon stackable containers with caps. Also a small bottle per person for the day.",
    use: "Don’t set a full 5-gallon jug where a child can pull it over. Rinse with a little treated water before filling from a new source.",
    qty: () => "At least two carriers you can actually lift when full, plus one bottle per person.",
  },
  {
    id: "rice",
    cat: "Food",
    name: "White rice",
    priority: "critical",
    detail:
      "White rice is the backbone calorie: long storage, familiar, and about 1,650 calories a pound dry. Brown rice spoils faster because of the oil in the bran — prefer white for the deep pantry.",
    get: "Grocery or warehouse club, in the largest bag you will actually cook. Ethnic markets often sell 20-pound bags cheaper. Store the bag inside a metal can or a lidded bucket so mice cannot file in.",
    use: "Rinse. About 1 part rice to 2 parts water, simmer until tender, or boil briefly and finish in a retained-heat box (see the manual). Leftover rice left warm grows bacteria that survive reheating poorly — eat it the same meal or cool it fast and use it soon. Don’t leave it overnight in a warm room.",
    qty: (p) => (p.kcalPerDay ? `${fmt(p.riceLb)} pounds.` : none),
  },
  {
    id: "beans",
    cat: "Food",
    name: "Dry beans and lentils",
    priority: "critical",
    detail:
      "Beans are the protein that matches rice. Lentils cook faster and save fuel. Dry beans are cheap and, stored cool and dry, last years. They are useless if you have no water and no time to cook — that is why canned beans exist.",
    get: "Grocery bulk aisle. Mix kinds you already eat. A gasket-lid bucket keeps them from pantry moths.",
    use: "Soak overnight and discard the soak water to cut cooking time and some of the discomfort. Simmer until a bean mashes with no chalky center. Undercooked beans waste fuel and hurt. A pressure cooker, if you already own one and can run it on a sturdy outdoor stove, is the fuel saver. Never open a pressure cooker by force.",
    qty: (p) => (p.kcalPerDay ? `${fmt(p.beansLb)} pounds dry.` : none),
  },
  {
    id: "canned-beans",
    cat: "Food",
    name: "Canned beans",
    priority: "critical",
    detail:
      "The first two weeks are when you are tired, scared, and short on fuel. Canned beans are a meal with a can opener. No soak, no hour of propane.",
    get: "Buy the low-sodium kinds you like, plus a few seasoned ones for morale. Warehouse clubs are the sane price.",
    use: "If the can is bulging, leaking, spurting, or deeply dented on a seam, discard it — do not taste it. Otherwise heat if you can, or eat from the can. Rinse if you need to reduce salt and you have water to spare.",
    qty: (p) => (p.people ? `${fmt(p.cannedBeans)} cans (about two weeks per person, scaled to your day count).` : none),
  },
  {
    id: "oats",
    cat: "Food",
    name: "Rolled oats",
    priority: "core",
    detail:
      "Breakfast that cooks in a few minutes, or soaks overnight in cold treated water when you cannot spend fuel. About 1,700 calories a pound.",
    get: "The plain cardboard canister, not single-serve packets full of sugar. Store sealed against pantry moths.",
    use: "Equal parts oats and boiling water, covered, five minutes. Cold soak: oats plus treated water overnight. Add peanut butter, salt, and sugar. Dry oats are not pleasant but they are edible if water is the emergency.",
    qty: (p) => (p.kcalPerDay ? `${fmt(p.oatsLb)} pounds.` : none),
  },
  {
    id: "pasta",
    cat: "Food",
    name: "Pasta",
    priority: "core",
    detail:
      "Familiar, compact, and cooks faster than dry beans. Sauce can be a spoon of oil, salt, and a can of tomatoes.",
    get: "Grocery. Dried pasta, not fresh. Tomato paste in cans or tubes keeps better than jars of sauce once opened — jars of sauce are fine if you eat them.",
    use: "Boil in salted water. Don’t dump the water if you are short — it is starchy but usable for soup after you treat the pot as food, not as drinking water storage. Pasta water is not a disinfectant.",
    qty: (p) => (p.kcalPerDay ? `${fmt(p.pastaLb)} pounds.` : none),
  },
  {
    id: "oil",
    cat: "Food",
    name: "Cooking oil",
    priority: "critical",
    detail:
      "Oil is the densest calm calorie you can buy: about 4,000 per pound. A rice-and-bean diet without fat leaves people hungry and irritable even when the math says they ate enough.",
    get: "Vegetable, canola, or olive oil in metal or sturdy plastic. Smaller bottles so one rancid jug doesn’t wipe out the stash. Store cool and dark. Smell it before you use it. Rancid oil is a waste, not a poison you should force down.",
    use: "A tablespoon on a pot of rice changes the meal. Don’t store oil next to the water heater or in a hot garage.",
    qty: (p) => (p.kcalPerDay ? `${fmt(p.oilLb, 1)} pounds (about ${fmt(p.oilLb / 7.6, 1)} gallons; oil is roughly 7.6 lb per gallon).` : none),
  },
  {
    id: "pb",
    cat: "Food",
    name: "Peanut butter",
    priority: "core",
    detail:
      "No cooking, high calories, and people will eat it when they are sick of rice. About 2,600 calories a pound. Tree-nut or seed butter if peanut allergy lives in the house.",
    get: "Grocery. Commercial jars are shelf-stable until opened. Natural peanut butter keeps less well after opening — buy what you will eat, and refrigerate nothing you can’t.",
    use: "Eat from the jar or stir into oats. Watch for allergy. Once open, keep the lid tight and use that jar up.",
    qty: (p) => (p.kcalPerDay ? `${fmt(p.pbLb, 1)} pounds.` : none),
  },
  {
    id: "cans",
    cat: "Food",
    name: "Canned fish and meat",
    priority: "core",
    detail:
      "Tuna, salmon, chicken, beef, and Spam-style canned pork are no-cook protein and, more importantly, meals that feel like meals. They are not your main calories. Rice and beans are.",
    get: "Warehouse club for tuna and chicken. A few treats you actually like. Check dates, then ignore best-by as long as the can is intact — best-by is quality. Safety is the can itself.",
    use: "Open, eat, don’t leave the remainder in the can overnight. Oil-packed fish is extra calories. One can every other day per person is the planning rhythm.",
    qty: (p) => (p.people ? `${fmt(p.cans)} cans.` : none),
  },
  {
    id: "salt",
    cat: "Food",
    name: "Salt",
    priority: "critical",
    detail:
      "You will crave it, you need it to cook, and the oral rehydration recipe does not work without it. People who store rice and forget salt have a sad pantry.",
    get: "Plain salt. Iodized is a small public-health win if seafood disappears. A few pounds is cheap. Also buy a box of sugar.",
    use: "Salt food to taste. For rehydration, measure — do not guess in the dark. The recipe is in the medical chapter: 6 level teaspoons of sugar and 1/2 level teaspoon of salt in 1 liter of treated water.",
    qty: (p) => (p.people ? `${fmt(p.saltLb)} pounds of salt and ${fmt(p.sugarLb)} pounds of sugar.` : none),
  },
  {
    id: "vitamins",
    cat: "Food",
    name: "Multivitamin and vitamin C",
    priority: "core",
    detail:
      "A white-rice pantry prevents starvation and still lets you get scurvy-adjacent and miserable over a few months. Sprouts and canned vegetables help. A cheap vitamin covers the gap.",
    get: "Pharmacy. A basic multi plus vitamin C tablets. Not a cabinet of unregulated powders.",
    use: "One a day with food, per the bottle. Vitamins do not replace food.",
    qty: (p) =>
      p.people
        ? `${p.adults + p.children} bottle-months, scaled: about one 100-count multi per person if you are stocking near 90 days.`
        : none,
  },
  {
    id: "comfort",
    cat: "Food",
    name: "Coffee, tea, spices, hard candy",
    priority: "later",
    detail:
      "Morale is a supply. A hot drink at a set hour structures the day and makes terrible news smaller. This is not frivolous if it is a small fraction of the budget.",
    get: "What your household already uses. Instant coffee if you can’t boil long. Hot sauce. Chocolate that won’t melt into a brick if your climate is hot — or accept that it will.",
    use: "Ration the ritual, not the calories. One pot in the morning. Candy is for kids’ bad days and adult bad days.",
    qty: () => "A month of your normal hot drink, then more if the budget survives real food.",
  },
  {
    id: "special-food",
    cat: "Food",
    name: "Infant formula, pet food, allergy food",
    priority: "critical",
    detail:
      "The staple math feeds healthy older children and adults. It does not feed an infant. It does not feed a person who goes into anaphylaxis from peanuts. It does not feed the dog.",
    get: "Buy the exact formula and the exact allergy-safe brands you use now, not a new brand to discover during a crisis. Ask a pharmacist about storage. Pet food: the same bag you already trust, in a chew-proof bin.",
    use: "Mix formula with treated water at the temperature the label allows. If you are nursing, protect the nursing parent’s water and calories first — that is the infant plan. Pets eat their food, not a bowl of rice as the whole plan. Half a gallon of water per pet per day is only a starting estimate; a large dog in heat needs more.",
    qty: (p) =>
      p.infants || p.pets
        ? `${p.infants} infant(s), ${p.pets} pet(s): ${p.days} days of their actual food, plus the water already counted in Plan.`
        : "None counted. Add infants or pets in Plan if you have them.",
  },
  {
    id: "opener",
    cat: "Food",
    name: "Manual can openers",
    priority: "critical",
    detail:
      "An electric opener is a paperweight. A single cheap opener will fail. This is the most common stupid failure in a pantry full of cans.",
    get: "Two ordinary turn-handle openers, plus a small P-38 or P-51 military opener on a keychain. Grocery or army surplus.",
    use: "Open the can fully so the lid does not slice a finger. Rinse the rim if it is dusty. One opener lives in the kitchen, one in the room you would shelter in.",
    qty: () => "Two openers, stored in different rooms.",
  },
  {
    id: "pot",
    cat: "Fire",
    name: "One sturdy pot with a lid",
    priority: "critical",
    detail:
      "You need a pot that can sit on a camp stove or a wood fire without a plastic handle melting into the food. The lid is what makes retained-heat cooking work.",
    get: "A stainless or enamel pot you already own is perfect. Camping cooksets are fine if the handle is metal. Skip nonstick if you will set it on flame.",
    use: "Outdoor flame only, pot stable before you walk away, lid on to save fuel. A lid turned upside down is not a plan. Let it cool before you scrub it with precious water — wipe it.",
    qty: () => "One family-sized pot and one smaller pot or a kettle.",
  },
  {
    id: "stove",
    cat: "Fire",
    name: "Outdoor stove and a real fuel supply",
    priority: "critical",
    detail:
      "Ninety days of cooking on charcoal briquettes bought the night of the outage will not happen. Pick one fuel, buy a lot of it, and test the stove this month.",
    get: "A propane camp stove plus the adapter hose that connects it to a 20-pound barbecue tank, and the tank itself from a hardware or exchange cage. Store the tank outdoors, upright, never in the living space. A handful of 1-pound canisters is the bridge, not the 90-day plan. A careful household using about half an hour of flame a day can get on the order of two months from one full 20-pound tank. That is an estimate — your stove and your wind will differ. Have a wood backup if you have a yard.",
    use: "Outside, on a level surface, away from walls and eaves, never in a garage, tent, or the sealed shelter room. Carbon monoxide from a ‘just for a minute’ stove indoors is how families die during blackouts with full pantries. Turn the tank off when you finish, not just the burner. Don’t use gasoline as a fire starter. Ever.",
    qty: () => "One tested stove, one 20 lb propane tank stored outside, a small canister backup, and a way to cook on wood if the tank runs out.",
  },
  {
    id: "firestart",
    cat: "Fire",
    name: "Lighters, matches, tinder",
    priority: "critical",
    detail:
      "You do not get infinite tries. Damp matches and an empty lighter are the same object.",
    get: "Several long-neck lighters, a box of storm matches in a zipper bag, and a cheap ferro rod if you will actually practice with it. Cotton balls and petroleum jelly in a tin are dry tinder.",
    use: "Keep one set in the kitchen kit and one in the shelter room. Practice once so you know the stove’s starter is not theater.",
    qty: () => "Three lighters and two match boxes, split across two rooms.",
  },
  {
    id: "extinguisher",
    cat: "Fire",
    name: "ABC fire extinguisher",
    priority: "critical",
    detail:
      "Candles, improvised stoves, and generators start house fires. The fire department may not roll. A small fire you cannot put out ends the shelter.",
    get: "Hardware store. A 3-A:40-B:C or similar home extinguisher. Check the gauge twice a year.",
    use: "PASS: pull the pin, aim at the base, squeeze, sweep. If the fire is bigger than a wastebasket or the room is filling with smoke, get everyone out and close the door. Don’t go back for things.",
    qty: () => "One on each level you actually live on, including the room you would close up.",
  },
  {
    id: "co",
    cat: "Fire",
    name: "Battery carbon monoxide alarm",
    priority: "critical",
    detail:
      "CO is colorless and odorless. It drops households in their sleep during every major winter blackout. A smoke alarm does not detect it unless the device says it does both.",
    get: "Hardware or pharmacy. Battery-powered, not the hardwired unit that dies with the house power. Buy the batteries it names.",
    use: "Put it in the living space at about breathing height, not inside a dead-air corner and not right next to the outdoor stove (that is outside anyway). If it sounds, get to fresh air immediately, then find the source. Do not go back in to ‘air it out’ while you feel dizzy.",
    qty: () => "One CO alarm and one battery smoke alarm in the room you will actually sleep in.",
  },
  {
    id: "meds",
    cat: "Health",
    name: "Prescriptions and the cooling problem",
    priority: "critical",
    detail:
      "A 90-day grid failure is a medicine problem before it is a food problem for anyone on insulin, inhalers, blood pressure pills, seizure meds, or psychiatric meds. Some of those drugs hate heat.",
    get: "Ask the prescriber and the pharmacist now for an extra fill. Insurance may refuse; paying cash for one critical extra month is rational. Write the names, doses, and the pharmacy’s after-hours number on paper. For insulin, buy a commercial evaporative cooling pouch (Frio and similar) which works without electricity in dry air, and ask the pharmacist how long your specific insulin tolerates room temperature. Do not invent a dosing change.",
    use: "Take meds on the normal schedule. Don’t ration life-sustaining drugs ‘to make them last’ unless the prescriber told you how. Keep a few days of them where you sleep so you are not hunting the bathroom cabinet in the dark.",
    qty: () => "As many days as you can legally and safely obtain. List every drug on the family card in Plan.",
  },
  {
    id: "firstaid",
    cat: "Health",
    name: "Trauma and wound kit",
    priority: "critical",
    detail:
      "The likely injuries are cuts from cans and glass, burns from stoves, sprains, and dirty wounds. Dirty wounds become infections when antibiotics and clinics are gone. Cleaning beats ointment.",
    get: "Pharmacy and a Stop the Bleed class if one is offered near you. Buy: exam gloves, roller gauze, sterile pads, medical tape, an irrigation syringe (60 ml), tweezers, elastic bandage, antiseptic wipes, antibiotic ointment, blister care, a commercial tourniquet (CAT or SOFTT), trauma shears, a thermometer, oral rehydration salts, acetaminophen, ibuprofen, an antihistamine you already tolerate, and loperamide.",
    use: "Wash your hands. Irrigate a wound with clean water until the grit is gone — a lot of water, not a splash. Then cover it. Change the dressing when it is wet or dirty. Loperamide is for simple diarrhea so you can keep water in; do not use it for bloody diarrhea, high fever, or a desperately ill person. A tourniquet is for life-threatening limb bleeding: high and tight, note the time, do not loosen it every few minutes, and get to care. Take the class before you need the tool. This manual is not that class.",
    qty: () => "One kit in the house and a smaller one in the shelter room.",
  },
  {
    id: "ors",
    cat: "Health",
    name: "Oral rehydration salts",
    priority: "critical",
    detail:
      "In a sanitation collapse, diarrhea kills faster than hunger. The fix is clean water plus the right mix of sugar and salt, sipped.",
    get: "Pharmacy: WHO-style oral rehydration packets. Also the salt and sugar already in the food list, as the backup recipe.",
    use: "Follow the packet: one packet in the amount of treated water it names. Homemade, only if you have no packets: 1 liter treated water, 6 level teaspoons sugar, 1/2 level teaspoon salt. Stir until clear. Sip. A seriously dehydrated infant, anyone with blood in the stool, confusion, or no urine for most of a day needs medical care if it exists — do not treat that as a home project.",
    qty: (p) => (p.people ? `${Math.max(8, p.people * 6)} packets.` : none),
  },
  {
    id: "masks",
    cat: "Health",
    name: "N95 respirators",
    priority: "core",
    detail:
      "A mask blocks smoke and ash you would otherwise inhale. It does not make a sealed room safe if something in that room is burning or running an engine.",
    get: "Hardware or pharmacy. N95, not a thin cloth mask. Several per person because they get wet and dirty. A box of nitrile gloves alongside.",
    use: "Pinch the nose wire. In wildfire smoke, wear the mask, stay indoors, and don’t exert. A wet cloth is not a substitute.",
    qty: (p) => (p.people ? `${p.people * 7} masks as a floor, more if your season is smoke.` : none),
  },
  {
    id: "body-misc",
    cat: "Health",
    name: "Glasses, menstrual supplies, soap",
    priority: "core",
    detail:
      "A lost pair of glasses makes you helpless. A 90-day gap in menstrual supplies is misery plus infection risk if people improvise badly. Soap is the medical device you already understand.",
    get: "Spare glasses or the written prescription. Menstrual cups (boil between cycles if you can) and/or a 90-day pile of the products you use. Plain bar soap. A few boxes of baby wipes as a water-saving bridge, knowing they are trash afterward.",
    use: "Handwashing with soap beats sanitizer once sanitizer is gone, and sanitizer does not work on soiled hands. Wash after the toilet, before cooking, before eating.",
    qty: (p) => (p.people ? `Spare glasses for whoever needs them. Menstrual supplies for ${p.days} days. Soap: a bar per person per month, about ${Math.max(1, Math.round((p.people * p.days) / 30))} bars.` : none),
  },
  {
    id: "buckets",
    cat: "Clean",
    name: "Two-bucket toilet",
    priority: "critical",
    detail:
      "If pumps stop, flushing a toilet fills your house with sewage. Disease from human waste is a classic way grid-down events become deadly after the lights are already the least of it.",
    get: "Two sturdy 5-gallon buckets and tight lids from a hardware store. A pool noodle sliced to make a seat is optional. A bag of sawdust, peat, shredded paper, or coco coir for cover material. Heavy contractor bags. Mark the buckets with paint: PEE and POO.",
    use: "Never mix the two if you can help it — together they stink far worse. After poo, add a cup of dry cover until you cannot smell it. Toilet paper goes in the poo bucket. Lid on. When two-thirds full, bag or cap it, mark it, and store it outside the living space, out of the sun, away from water. Do not dump it in the street or the vegetable bed. Pee can be stored separately. Do not sprinkle it on food crops. Wash hands after, every time, even if you are tired of hearing it.",
    qty: () => "Two buckets with lids, a cover-material sack, and a stack of contractor bags.",
  },
  {
    id: "tp",
    cat: "Clean",
    name: "Toilet paper and bags",
    priority: "core",
    detail:
      "You can live without it and you will not want to. Bags contain waste when the bucket is full.",
    get: "The warehouse pack. Also a bottle of plain household soap that is not the bleach jug.",
    use: "Store TP where it cannot get wet. Wet toilet paper is no longer a supply.",
    qty: (p) =>
      p.people
        ? `About one roll per person per week: ${Math.max(1, Math.round((p.people * p.days) / 7))} rolls. Plus 30 heavy trash bags.`
        : none,
  },
  {
    id: "wash",
    cat: "Clean",
    name: "Handwash jug",
    priority: "critical",
    detail:
      "A handwash station that you can use without touching a dirty handle with clean hands is the whole trick. A shared bowl of gray water is a petri dish.",
    get: "A jug with a spigot, or any water container you can tip with a stick or a wrist. Bar soap on a rope.",
    use: "Set it over a basin that drains into a gray-water bucket, not onto the floor of the shelter. Wet, soap, scrub 20 seconds, rinse. Gray water can flush a pee bucket later. It is not drinking water.",
    qty: () => "One dedicated jug that is not your drinking jug.",
  },
  {
    id: "warmth",
    cat: "Shelter",
    name: "Wool, sleep system, one-room plan",
    priority: "critical",
    detail:
      "In cold weather you heat a body, not a house. Cotton next to skin when it is wet and cold pulls heat out of you. Wool and fleece still insulate when damp.",
    get: "Thrift stores are full of wool blankets. A sleeping bag rated below the coldest temperature you actually get, because bag ratings are optimistic and you may be hungry. Knit hats. Dry socks, many. A hot-water bottle of tough plastic.",
    use: "Pick the smallest room. Hang blankets over the doorway. Everyone sleeps there. A blanket fort or a small tent over the mattress holds body heat. Fill the bottle with hot water, wrap it so it cannot burn skin, and put it in the bag. Do not run a stove, grill, or charcoal in that room to ‘take the edge off.’ The edge that comes off is you.",
    qty: (p) => (p.people ? `A real sleep system for each of ${p.people} people, plus two spare wool blankets.` : none),
  },
  {
    id: "plastic",
    cat: "Shelter",
    name: "Plastic sheeting, tape, blackout cloth",
    priority: "core",
    detail:
      "Plastic and tape cover a broken window and cut drafts. Dark cloth keeps your lights from advertising the only prepared house on the block.",
    get: "Hardware store: painter’s plastic or 2–6 mil sheeting, a roll of duct tape, and a couple of thick blankets or blackout curtains. A box cutter.",
    use: "Tape plastic over a broken pane or a leaky window. Do not make a hot room airtight — people need air, and sealing a house in a heat wave can kill by heat. In smoke, close the windows and use a mask instead of inventing a filter.",
    qty: () => "One roll of sheeting, two rolls of duct tape, and covers for the windows of the shelter room.",
  },
  {
    id: "radio",
    cat: "Signal",
    name: "Hand-crank NOAA weather radio",
    priority: "critical",
    detail:
      "Phones die, cell towers run out of generator fuel, and official instructions move to broadcast radio. A radio is how you learn whether to stay in the basement or leave.",
    get: "One that receives NOAA weather band plus AM and FM, with a crank, solar, and batteries. Test it on a sunny Saturday. Write down which of the weather channels locks in at your house: 162.400, 162.425, 162.450, 162.475, 162.500, 162.525, or 162.550 MHz.",
    use: "Crank it before you need it. Listen at set hours so you are not burning batteries on static. Write what officials actually said, not what a neighbor thinks they said. A second cheap radio lives in the Faraday can if you build one, as the spare.",
    qty: () => "One primary radio in the shelter room. One spare if you can.",
  },
  {
    id: "frs",
    cat: "Signal",
    name: "Pair of FRS radios",
    priority: "later",
    detail:
      "Family Radio Service handhelds need no license in the US and work across a neighborhood in open ground, worse through concrete. They are for ‘I’m at the shutoff valve,’ not for calling another state. GMRS reaches farther but needs an FCC license and repeaters that may be dead.",
    get: "A simple pair from an outdoor or electronics aisle. Charge or insert batteries and pick a channel now. Agree on a backup channel.",
    use: "Assume strangers can hear you. No inventory lists, no ‘the garage is unlocked,’ no medical details you would hate a stranger to know. Say locations in code your family already understands.",
    qty: () => "One pair, labeled with the channel, on the family card.",
  },
  {
    id: "phonepower",
    cat: "Signal",
    name: "Phone battery and a small solar panel",
    priority: "core",
    detail:
      "Use the phone as a camera, a stored map, and a flashlight you regret using. Do not expect the network. Texts sometimes crawl through when calls cannot. A 10–20 watt panel can refill a power bank in a sunny climate if you actually own the right cable.",
    get: "A power bank with a known capacity, charged, and a foldable panel from a company that publishes real wattage. Download offline maps of your county before anything happens. Write the paper map anyway.",
    use: "Airplane mode, low brightness, text not video. Charge the bank from the panel in the sun, not by leaving a lithium battery on a car dash until it swells.",
    qty: () => "One charged power bank per adult phone, one panel, the cables, and paper maps.",
  },
  {
    id: "light",
    cat: "House",
    name: "Headlamps and a battery bridge",
    priority: "critical",
    detail:
      "Hands-free light is how you cook and do first aid without setting the house on fire. Candles are a backup that start fires. Ninety days of alkalines is a closet full of batteries. Rechargeable plus solar is the real answer, with alkalines for the first two weeks.",
    get: "Two headlamps that take common cells or that are USB-rechargeable. Twenty-four AA alkalines from a high-turnover store, dates checked. A pack of tea lights only as a reserve.",
    use: "One lamp is dimmer than you want and lasts longer. Candles: stable metal holder, never unattended, never in the tent-over-the-bed, out before sleep. Store loose batteries so they cannot touch coins or other batteries in a drawer.",
    qty: () => "Two headlamps, 24 AA alkalines (or the cells your lamp eats), one rechargeable path.",
  },
  {
    id: "wrench",
    cat: "House",
    name: "Shutoff wrench and a mapped valve",
    priority: "critical",
    detail:
      "The water main and the gas meter are useless knowledge if you have never touched them and the wrench doesn’t fit.",
    get: "A four-way utility wrench sold for gas and water meters. Often a few dollars. Also a flashlight, because the valve is in a closet or a box in the dirt.",
    use: "Water: the handle in line with the pipe is usually open; crosswise is closed. Practice once on a calm day and open it again immediately so you learn the direction and whether it weeps. Gas: only shut it off if you smell gas, hear a hiss, see damage, or officials tell you to. A gas valve you close may need the utility to turn back on safely. Do not shut it as a hobby during a simple blackout.",
    qty: () => "One wrench on a hook by the door, not in a buried toolbox.",
  },
  {
    id: "tools",
    cat: "House",
    name: "Knife, gloves, cord, tape, bicycle",
    priority: "core",
    detail:
      "A short list of tools you will actually use beats a theatrical bug-out bag you cannot lift. A bicycle still works when the car’s pump, the traffic lights, and the fuel stations do not.",
    get: "Work gloves, a locking knife or a kitchen knife you respect, a multi-tool, 50 feet of cord, duct tape, a roll of heavy aluminum foil (solar oven), trash bags, and a bike with a pump and a patch kit if you own a bike. Comfortable shoes you can walk miles in.",
    use: "Keep the knife folded until you need it. Don’t improvise weapons as a personality. The cord holds a tarp and a handwash jug. The bike is transportation, not a lifestyle.",
    qty: () => "One set of gloves per adult. One knife. One bike per adult who can ride, if you already have them.",
  },
  {
    id: "papers",
    cat: "House",
    name: "Cash, copies, paper plan",
    priority: "critical",
    detail:
      "Card readers die with the power. ID, insurance, prescriptions, and a photo of every document live on paper in a zipper bag because your phone will be at 4% when someone asks.",
    get: "Small bills, fives and tens and a roll of quarters, from the bank this month. Not one heroic hundred that nobody can break. Copies of ID, insurance cards, a list of meds, a local paper map, and the family card from this app transcribed onto paper.",
    use: "Store the cash where a smashed window doesn’t advertise it. Don’t tell people you have a cash stash. The paper plan includes two rally points and one out-of-area contact who can relay messages if local phones are jammed.",
    qty: () => "At least a few hundred dollars in small bills if you can. More is better and also a theft risk — split it.",
  },
  {
    id: "ki",
    cat: "Nuclear",
    name: "Potassium iodide (KI) tablets",
    priority: "core",
    detail:
      "KI fills the thyroid with stable iodine so it takes up less radioactive iodine. It does not stop gamma rays, does not treat radiation sickness, and does not protect the rest of the body. Taken when there is no radioiodine release, it is a side effect with no benefit. FDA guidance is the dose table in the manual.",
    get: "A pharmacy, ahead of time. Buy the form that matches the household: 130 mg tablets for adults and older teens, and a pediatric solution if you have small children. Do not plan on accurately cutting a tablet into eighths in the dark. People with iodine allergy or certain thyroid conditions should ask a clinician before an emergency whether KI is safe for them.",
    use: "Take it only when public health officials say to. One dose protects the thyroid for about 24 hours. Repeat only if officials say the exposure is continuing. Adults over 40 are often told not to take it unless the predicted thyroid dose is very high, because their cancer risk is lower and side effects higher. Read the KI chapter before you buy, and again before anyone swallows one.",
    qty: (p) =>
      p.people
        ? `A small bottle sized to the household, stored in the shelter room, dry, dated. Doses differ by age — do not give every person 130 mg.`
        : none,
  },
  {
    id: "meter",
    cat: "Nuclear",
    name: "A real radiation survey meter",
    priority: "later",
    detail:
      "Without a meter you cannot see fallout. Phone apps and ‘radiation stickers’ are not instruments. A meter lets you compare the basement to the doorway and decide when an exit is less stupid.",
    get: "A calibrated survey meter from a company that actually makes radiation instruments, or a surplus civil-defense meter only if you understand its limits and calibration. Learn the unit it reads (mR/h or µSv/h) on a normal day so the numbers mean something. Store it where you can reach it without going outside.",
    use: "Point, wait, write the number and the time. Dose rate falls fast in the first two days if the reading is fresh fallout — the 7-10 rule in Plan is the rough clock, and the meter is the truth. Don’t wander the neighborhood taking readings for fun.",
    qty: () => "One meter you have turned on at least once, with spare batteries.",
  },
  {
    id: "faraday",
    cat: "Nuclear",
    name: "Faraday spare bin",
    priority: "later",
    detail:
      "A high-altitude nuclear EMP is a different event from fallout: it can damage electronics over a huge area and leave little radiation on the ground. A ground burst is the opposite problem — blast, flash, and fallout — with EMP mostly local. A metal bin is a reasonable spare-radio closet, not a religion.",
    get: "A galvanized steel trash can with a tight lid, or a metal ammo can. Cardboard to line it. Aluminum tape. The spare radio, a headlamp, and a small solar charger go inside, insulated so they don’t touch the metal.",
    use: "Lid must meet metal all the way around. Paint gaps leak. Test: phone inside on loud, call it, hope it does not ring. Then take the daily-driver phone back out. Don’t bake lithium batteries in a sealed can in the sun for a year. This is a spare, not your whole life.",
    qty: () => "One can, packed and tested.",
  },
  {
    id: "shelter-room",
    cat: "Nuclear",
    name: "Named shelter room and a dust kit",
    priority: "critical",
    detail:
      "Decide the room now: basement center, or the most interior room on a middle floor with the most concrete and the fewest windows. A wood-frame living room with picture windows is a poor radiation shelter. It is still better than a yard.",
    get: "Plastic, tape, masks, a change of clothes that lives in that room, water for several days, the radio, KI if you have it, the bucket toilet, and dense mass you can move if you have warning: cases of water, books, concrete blocks.",
    use: "If there is a flash or an official warning: inside, then deep, then stay. Remove dusty outer clothes before you step into the clean core. Wash skin and hair with soap and water if you can do it quickly. No conditioner — it makes particles stick. Bag the clothes, seal them, and put the bag as far from people as the shelter allows. Plan on at least 24 hours, and up to two weeks if fallout is significant and you cannot hear an official all-clear. Fire or a collapsing building is the exception: move once to better shelter, then stay.",
    qty: () => "One room you have stood in and pictured for 48 hours. Supplies staged there, not in the garage.",
  },
];
