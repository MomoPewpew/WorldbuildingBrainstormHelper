import {
  makeAnchor as a,
  makeFragment as f,
  makeHook as h,
  makeHookPattern as p
} from "@/data/makeLut";

export const CYBERPUNK_ANCHORS = [
  // Animals
  a("animals", "chrome dog", 3, "cyberpunk"),
  a("animals", "drone hawk", 2, "cyberpunk"),
  a("animals", "street rat", 3, "cyberpunk"),
  a("animals", "cybercat", 2, "cyberpunk"),
  a("animals", "data leech", 2, "cyberpunk"),
  a("animals", "neon moth", 2, "cyberpunk"),
  a("animals", "scrap vulture", 2, "cyberpunk"),
  a("animals", "mesh pigeon", 2, "cyberpunk"),
  a("animals", "guard drone pup", 2, "cyberpunk"),

  // Plants
  a("plants", "glow fungus", 2, "cyberpunk"),
  a("plants", "hydroponic vine", 2, "cyberpunk"),
  a("plants", "plastic orchid", 2, "cyberpunk"),
  a("plants", "smog moss", 2, "cyberpunk"),
  a("plants", "gene flower", 2, "cyberpunk"),
  a("plants", "rooftop kale", 1, "cyberpunk"),
  a("plants", "filter fern", 2, "cyberpunk"),
  a("plants", "neon lichen", 2, "cyberpunk"),
  a("plants", "sewer lotus", 2, "cyberpunk"),

  // Landscapes
  a("landscapes", "neon alley", 3, "cyberpunk"),
  a("landscapes", "undercity", 3, "cyberpunk"),
  a("landscapes", "server farm", 2, "cyberpunk"),
  a("landscapes", "sprawl", 3, "cyberpunk"),
  a("landscapes", "blackout zone", 2, "cyberpunk"),
  a("landscapes", "acid canal", 2, "cyberpunk"),
  a("landscapes", "transit spine", 2, "cyberpunk"),
  a("landscapes", "mesh rooftop", 2, "cyberpunk"),
  a("landscapes", "corp exclusion zone", 2, "cyberpunk"),

  // Weather
  a("weather", "acid rain", 3, "cyberpunk"),
  a("weather", "smog bank", 2, "cyberpunk"),
  a("weather", "neon fog", 2, "cyberpunk"),
  a("weather", "static storm", 2, "cyberpunk"),
  a("weather", "heat haze", 2, "cyberpunk"),
  a("weather", "blackout night", 2, "cyberpunk"),
  a("weather", "EMP drizzle", 2, "cyberpunk"),
  a("weather", "ad storm", 2, "cyberpunk"),
  a("weather", "data smog", 2, "cyberpunk"),

  // Objects
  a("objects", "cyberdeck", 3, "cyberpunk"),
  a("objects", "neural implant", 3, "cyberpunk"),
  a("objects", "smartgun", 2, "cyberpunk"),
  a("objects", "holoboard", 2, "cyberpunk"),
  a("objects", "drone", 3, "cyberpunk"),
  a("objects", "datachip", 2, "cyberpunk"),
  a("objects", "chrome limb", 2, "cyberpunk"),
  a("objects", "ICE breaker", 2, "cyberpunk"),
  a("objects", "braindance coil", 2, "cyberpunk"),
  a("objects", "mesh jack", 2, "cyberpunk"),

  // Buildings
  a("buildings", "arcology", 3, "cyberpunk"),
  a("buildings", "megacorp tower", 3, "cyberpunk"),
  a("buildings", "datahaven", 2, "cyberpunk"),
  a("buildings", "chop shop", 2, "cyberpunk"),
  a("buildings", "capsule hotel", 2, "cyberpunk"),
  a("buildings", "street clinic", 2, "cyberpunk"),
  a("buildings", "black ICE vault", 2, "cyberpunk"),
  a("buildings", "night market stall", 2, "cyberpunk"),
  a("buildings", "maintenance crawlspace", 2, "cyberpunk"),

  // Food
  a("food", "nutrient paste", 3, "cyberpunk"),
  a("food", "synth meat", 2, "cyberpunk"),
  a("food", "street noodles", 2, "cyberpunk"),
  a("food", "stim bar", 2, "cyberpunk"),
  a("food", "vending sushi", 2, "cyberpunk"),
  a("food", "black-market coffee", 1, "cyberpunk"),
  a("food", "chrome ramen", 2, "cyberpunk"),
  a("food", "flatline tea", 2, "cyberpunk"),
  a("food", "corp ration cube", 2, "cyberpunk"),

  // Occupations
  a("occupations", "hacker", 3, "cyberpunk"),
  a("occupations", "fixer", 3, "cyberpunk"),
  a("occupations", "netrunner", 3, "cyberpunk"),
  a("occupations", "street samurai", 2, "cyberpunk"),
  a("occupations", "corp executive", 2, "cyberpunk"),
  a("occupations", "ripper", 2, "cyberpunk"),
  a("occupations", "street doc", 3, "cyberpunk"),
  a("occupations", "data broker", 2, "cyberpunk"),
  a("occupations", "ICE architect", 2, "cyberpunk"),

  // Phenomena
  a("phenomena", "glitch", 3, "cyberpunk"),
  a("phenomena", "static", 2, "cyberpunk"),
  a("phenomena", "braindance", 3, "cyberpunk"),
  a("phenomena", "ICE wall", 2, "cyberpunk"),
  a("phenomena", "signal bleed", 2, "cyberpunk"),
  a("phenomena", "memory wipe", 2, "cyberpunk"),
  a("phenomena", "flatline", 2, "cyberpunk"),
  a("phenomena", "ghost ping", 2, "cyberpunk"),
  a("phenomena", "corp trace", 2, "cyberpunk"),

  // Social
  a("social", "black market", 3, "cyberpunk"),
  a("social", "corp war", 2, "cyberpunk"),
  a("social", "street crew", 2, "cyberpunk"),
  a("social", "data auction", 2, "cyberpunk"),
  a("social", "loyalty chip", 2, "cyberpunk"),
  a("social", "night market", 2, "cyberpunk"),
  a("social", "mesh charter", 2, "cyberpunk"),
  a("social", "debt contract", 2, "cyberpunk"),
  a("social", "chrome duel", 2, "cyberpunk")
];

export const CYBERPUNK_HOOKS = [
  // Behavior
  h("behavior", "it reboots every midnight", "cyberpunk"),
  h("behavior", "it sells data to the highest bidder", "cyberpunk"),
  h("behavior", "it glitches when lied to", "cyberpunk"),
  h("behavior", "it jackknives through traffic", "cyberpunk"),
  h("behavior", "it broadcasts ads in its sleep", "cyberpunk"),
  h("behavior", "it flatlines for three seconds when startled", "cyberpunk"),
  h("behavior", "it mirrors every face it sees on holoboards", "cyberpunk"),
  h("behavior", "it pings ghost networks at random", "cyberpunk"),

  // Habitat
  h("habitat", "it lives in the net", "cyberpunk"),
  h("habitat", "it nests in abandoned server racks", "cyberpunk"),
  h("habitat", "it hides under neon billboards", "cyberpunk"),
  h("habitat", "it thrives in blackout zones", "cyberpunk"),
  h("habitat", "it pools in alley gutters of code", "cyberpunk"),
  h("habitat", "it sleeps in megatower maintenance shafts", "cyberpunk"),
  h("habitat", "it roosts on transit overpasses", "cyberpunk"),
  h("habitat", "it drifts through wetware clinics after hours", "cyberpunk"),

  // Material
  h("material", "it's made of scavenged chrome", "cyberpunk"),
  h("material", "it's pure black ICE code", "cyberpunk"),
  h("material", "it's wired wetware", "cyberpunk"),
  h("material", "it's recycled megacorp plastic", "cyberpunk"),
  h("material", "it's liquid crystal skin", "cyberpunk"),
  h("material", "it's hotwired synth muscle", "cyberpunk"),
  h("material", "it's counterfeit loyalty glass", "cyberpunk"),

  // Scale
  h("scale", "it fits behind one eye", "cyberpunk"),
  h("scale", "it spans an entire arcology floor", "cyberpunk"),
  h("scale", "it's the size of a datachip", "cyberpunk"),
  h("scale", "one of them blankets the sprawl", "cyberpunk"),
  h("scale", "it shrinks to a neural pin", "cyberpunk"),
  h("scale", "it fills a chop-shop bay", "cyberpunk"),
  h("scale", "one copy could crash a server farm", "cyberpunk"),

  // Function
  h("function", "it jacks into nervous systems", "cyberpunk"),
  h("function", "it erases corporate debt", "cyberpunk"),
  h("function", "it spoofs biometric locks", "cyberpunk"),
  h("function", "it mines street gossip for sale", "cyberpunk"),
  h("function", "it patches illegal wetware", "cyberpunk"),
  h("function", "it hijacks ad feeds on contact", "cyberpunk"),
  h("function", "it wipes short-term memory on handshake", "cyberpunk"),

  // Relationship
  h("relationship", "it works for three megacorps at once", "cyberpunk"),
  h("relationship", "it blackmails its users", "cyberpunk"),
  h("relationship", "it freelances for street crews", "cyberpunk"),
  h("relationship", "it fears corp auditors", "cyberpunk"),
  h("relationship", "it partners with rippers", "cyberpunk"),
  h("relationship", "it leases itself to fixers by the hour", "cyberpunk"),
  h("relationship", "it owes data to every netrunner in the sprawl", "cyberpunk"),

  // Origin
  h("origin", "it escaped a failed AI lab", "cyberpunk"),
  h("origin", "it was a discarded prototype", "cyberpunk"),
  h("origin", "it leaked from a megacorp vault", "cyberpunk"),
  h("origin", "it grew from corrupted firmware", "cyberpunk"),
  h("origin", "it was pirated from a dead netrunner", "cyberpunk"),
  h("origin", "it was scraped off a burnt cyberdeck", "cyberpunk"),
  h("origin", "it forked from a braindance nobody finished", "cyberpunk"),

  // Rule
  h("rule", "cameras refuse to record it", "cyberpunk"),
  h("rule", "contracts void near it", "cyberpunk"),
  h("rule", "ICE softens in its presence", "cyberpunk"),
  h("rule", "loyalty chips fail beside it", "cyberpunk"),
  h("rule", "ads go silent around it", "cyberpunk"),
  h("rule", "neural links scramble within ten meters", "cyberpunk"),
  h("rule", "corp traces dissolve in its shadow", "cyberpunk"),
  h("rule", "retinal scanners read strangers instead", "cyberpunk")
];

export const CYBERPUNK_FRAGMENTS = [
  // Substance
  f("substance", "chrome and wetware", "cyberpunk"),
  f("substance", "black-market chrome", "cyberpunk"),
  f("substance", "stolen data", "cyberpunk"),
  f("substance", "liquid crystal", "cyberpunk"),
  f("substance", "black ICE code", "cyberpunk"),
  f("substance", "hotwired synth skin", "cyberpunk"),

  // Trait
  f("trait", "never fully boots", "cyberpunk"),
  f("trait", "always pings twice", "cyberpunk"),
  f("trait", "runs hot", "cyberpunk"),
  f("trait", "ghost-listed on every registry", "cyberpunk"),
  f("trait", "overclocked past warranty", "cyberpunk"),

  // Place
  f("place", "server farms", "cyberpunk"),
  f("place", "megatower maintenance shafts", "cyberpunk"),
  f("place", "black ICE corridors", "cyberpunk"),
  f("place", "arcade alleys", "cyberpunk"),
  f("place", "chop-shop bays", "cyberpunk"),
  f("place", "wetware clinics", "cyberpunk"),
  f("place", "transit overpasses", "cyberpunk"),
  f("place", "blackout zones", "cyberpunk"),

  // Verb
  f("verb", "pings ghost networks", "cyberpunk"),
  f("verb", "rewrites its own firmware", "cyberpunk"),
  f("verb", "glitches when lied to", "cyberpunk"),
  f("verb", "spoofs biometrics", "cyberpunk"),
  f("verb", "mines street gossip", "cyberpunk"),

  // Trigger
  f("trigger", "during blackouts", "cyberpunk"),
  f("trigger", "when contracts are signed", "cyberpunk"),
  f("trigger", "on first ping", "cyberpunk"),
  f("trigger", "after midnight", "cyberpunk"),

  // Agent
  f("agent", "fixrunners", "cyberpunk"),
  f("agent", "megacorp execs", "cyberpunk"),
  f("agent", "street docs", "cyberpunk"),
  f("agent", "netrunners", "cyberpunk"),
  f("agent", "rippers", "cyberpunk"),
  f("agent", "corp auditors", "cyberpunk"),
  f("agent", "black ICE daemons", "cyberpunk"),

  // Bond
  f("bond", "jacks into", "cyberpunk"),
  f("bond", "sells out", "cyberpunk"),
  f("bond", "blackmails", "cyberpunk"),
  f("bond", "freelances for", "cyberpunk"),
  f("bond", "fears", "cyberpunk"),

  // UseAs
  f("useAs", "a dead drop", "cyberpunk"),
  f("useAs", "a neural backdoor", "cyberpunk"),
  f("useAs", "a dead man's switch", "cyberpunk"),

  // Does
  f("does", "cracks loyalty chips", "cyberpunk"),
  f("does", "launders corporate debt", "cyberpunk"),
  f("does", "patches illegal wetware", "cyberpunk"),
  f("does", "spoofs biometric locks", "cyberpunk"),
  f("does", "wipes short-term memory", "cyberpunk"),

  // Size
  f("size", "a datachip", "cyberpunk"),
  f("size", "a whole arcology", "cyberpunk"),
  f("size", "a neural pin", "cyberpunk"),
  f("size", "the whole sprawl", "cyberpunk"),

  // Source
  f("source", "a wiped megacorp vault", "cyberpunk"),
  f("source", "a burnt-out chrome clinic", "cyberpunk"),
  f("source", "a dead netrunner's deck", "cyberpunk"),
  f("source", "corrupted firmware", "cyberpunk"),
  f("source", "a pirated braindance", "cyberpunk"),
  f("source", "an ICE breach log", "cyberpunk"),

  // Force
  f("force", "cameras", "cyberpunk"),
  f("force", "contracts", "cyberpunk"),
  f("force", "ads", "cyberpunk"),
  f("force", "ICE", "cyberpunk"),
  f("force", "loyalty chips", "cyberpunk"),
  f("force", "neural links", "cyberpunk"),
  f("force", "retinal scanners", "cyberpunk"),

  // Effect
  f("effect", "will refuse to record", "cyberpunk"),
  f("effect", "will void themselves", "cyberpunk"),
  f("effect", "will go silent", "cyberpunk"),
  f("effect", "will soften", "cyberpunk"),
  f("effect", "will fail", "cyberpunk"),
  f("effect", "will scramble", "cyberpunk"),
  f("effect", "will dissolve", "cyberpunk")
];

export const CYBERPUNK_PATTERNS = [
  p("material", "it's plated in {substance}", "cyberpunk"),
  p("material", "it's wired from {substance}", "cyberpunk"),
  p("material", "it's {substance} that {trait}", "cyberpunk"),
  p("habitat", "it jacks into {place}", "cyberpunk"),
  p("habitat", "it nests among {place}", "cyberpunk"),
  p("behavior", "it {verb}", "cyberpunk"),
  p("behavior", "it only {verb} {trigger}", "cyberpunk"),
  p("relationship", "it secretly {bond} {agent}", "cyberpunk"),
  p("function", "people use it as {useAs}", "cyberpunk"),
  p("function", "it {does}", "cyberpunk"),
  p("scale", "it fits in {size}", "cyberpunk"),
  p("origin", "it was scraped from {source}", "cyberpunk"),
  p("origin", "it leaked from {source}", "cyberpunk"),
  p("rule", "{force} {effect} near it", "cyberpunk")
];
