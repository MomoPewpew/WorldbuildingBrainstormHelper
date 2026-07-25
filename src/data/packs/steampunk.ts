import {
  makeAnchor as a,
  makeFragment as f,
  makeHook as h,
  makeHookPattern as p
} from "@/data/makeLut";

export const STEAMPUNK_ANCHORS = [
  // Animals
  a("animals", "mechanical horse", 3, "steampunk"),
  a("animals", "clockwork bird", 3, "steampunk"),
  a("animals", "brass beetle", 2, "steampunk"),
  a("animals", "steam hound", 2, "steampunk"),
  a("animals", "gear fox", 2, "steampunk"),
  a("animals", "aether moth", 2, "steampunk"),
  a("animals", "piston spider", 2, "steampunk"),
  a("animals", "soot owl", 2, "steampunk"),
  a("animals", "rivet crow", 2, "steampunk"),
  a("animals", "tether hawk", 2, "steampunk"),

  // Plants
  a("plants", "copper ivy", 2, "steampunk"),
  a("plants", "boiler orchid", 2, "steampunk"),
  a("plants", "soot fern", 2, "steampunk"),
  a("plants", "aether bloom", 3, "steampunk"),
  a("plants", "brass moss", 2, "steampunk"),
  a("plants", "pressure vine", 2, "steampunk"),
  a("plants", "gear blossom", 2, "steampunk"),
  a("plants", "smog ivy", 2, "steampunk"),
  a("plants", "rivet thistle", 1, "steampunk"),
  a("plants", "coal lichen", 2, "steampunk"),

  // Landscapes
  a("landscapes", "smog district", 3, "steampunk"),
  a("landscapes", "sky harbor", 3, "steampunk"),
  a("landscapes", "cog canyon", 2, "steampunk"),
  a("landscapes", "foundry flats", 2, "steampunk"),
  a("landscapes", "airship graveyard", 2, "steampunk"),
  a("landscapes", "boiler marsh", 2, "steampunk"),
  a("landscapes", "brass quarter", 3, "steampunk"),
  a("landscapes", "lift district", 2, "steampunk"),
  a("landscapes", "tether moor", 2, "steampunk"),
  a("landscapes", "chimney forest", 2, "steampunk"),

  // Weather
  a("weather", "aether fog", 3, "steampunk"),
  a("weather", "soot rain", 2, "steampunk"),
  a("weather", "pressure gale", 2, "steampunk"),
  a("weather", "steam cloud", 2, "steampunk"),
  a("weather", "brass hail", 2, "steampunk"),
  a("weather", "smog tide", 2, "steampunk"),
  a("weather", "whistle wind", 2, "steampunk"),
  a("weather", "coal dust fall", 2, "steampunk"),
  a("weather", "boiler thunder", 2, "steampunk"),

  // Objects
  a("objects", "airship", 3, "steampunk"),
  a("objects", "pocket watch", 3, "steampunk"),
  a("objects", "difference engine", 2, "steampunk"),
  a("objects", "goggles", 2, "steampunk"),
  a("objects", "steam rifle", 2, "steampunk"),
  a("objects", "boiler", 2, "steampunk"),
  a("objects", "piston", 2, "steampunk"),
  a("objects", "chronometer", 3, "steampunk"),
  a("objects", "aether condenser", 2, "steampunk"),
  a("objects", "rivet gun", 2, "steampunk"),
  a("objects", "brass sextant", 2, "steampunk"),

  // Buildings
  a("buildings", "airship dock", 3, "steampunk"),
  a("buildings", "brass foundry", 3, "steampunk"),
  a("buildings", "observatory", 2, "steampunk"),
  a("buildings", "workshop loft", 2, "steampunk"),
  a("buildings", "clock tower", 2, "steampunk"),
  a("buildings", "aether mill", 2, "steampunk"),
  a("buildings", "guild hall", 3, "steampunk"),
  a("buildings", "lift station", 2, "steampunk"),
  a("buildings", "coal elevator", 2, "steampunk"),
  a("buildings", "patent archive", 2, "steampunk"),

  // Food
  a("food", "coal tea", 2, "steampunk"),
  a("food", "boiler stew", 2, "steampunk"),
  a("food", "clockwork pastry", 2, "steampunk"),
  a("food", "smoked sausage", 2, "steampunk"),
  a("food", "pressure coffee", 2, "steampunk"),
  a("food", "brass candy", 1, "steampunk"),
  a("food", "gearbread", 2, "steampunk"),
  a("food", "aether jelly", 2, "steampunk"),
  a("food", "soot pudding", 1, "steampunk"),

  // Occupations
  a("occupations", "airship captain", 3, "steampunk"),
  a("occupations", "inventor", 3, "steampunk"),
  a("occupations", "clockwork engineer", 3, "steampunk"),
  a("occupations", "aether scientist", 2, "steampunk"),
  a("occupations", "sky pirate", 2, "steampunk"),
  a("occupations", "boiler stoker", 2, "steampunk"),
  a("occupations", "riveter", 2, "steampunk"),
  a("occupations", "patent clerk", 2, "steampunk"),
  a("occupations", "aether tuner", 2, "steampunk"),
  a("occupations", "guild inspector", 2, "steampunk"),

  // Phenomena
  a("phenomena", "aether storm", 3, "steampunk"),
  a("phenomena", "pressure surge", 2, "steampunk"),
  a("phenomena", "gear seizure", 2, "steampunk"),
  a("phenomena", "steam bloom", 2, "steampunk"),
  a("phenomena", "clockwork fever", 2, "steampunk"),
  a("phenomena", "aether tide", 2, "steampunk"),
  a("phenomena", "brass resonance", 2, "steampunk"),
  a("phenomena", "steam echo", 2, "steampunk"),
  a("phenomena", "chronometer drift", 2, "steampunk"),

  // Social
  a("social", "invention fair", 3, "steampunk"),
  a("social", "dirigible race", 3, "steampunk"),
  a("social", "guild charter", 2, "steampunk"),
  a("social", "patent duel", 2, "steampunk"),
  a("social", "skyball", 2, "steampunk"),
  a("social", "foundry strike", 2, "steampunk"),
  a("social", "patent auction", 2, "steampunk"),
  a("social", "guild trial", 2, "steampunk"),
  a("social", "coal ration", 2, "steampunk")
];

export const STEAMPUNK_HOOKS = [
  // Behavior
  h("behavior", "it ticks louder before storms", "steampunk"),
  h("behavior", "it vents steam when lying", "steampunk"),
  h("behavior", "it winds itself at dawn", "steampunk"),
  h("behavior", "it hisses when insulted", "steampunk"),
  h("behavior", "it chimes before disasters", "steampunk"),
  h("behavior", "it syncs to nearby chronometers", "steampunk"),
  h("behavior", "it purrs when the boilers run hot", "steampunk"),
  h("behavior", "it stamps guild seals when startled", "steampunk"),

  // Habitat
  h("habitat", "it hangs in the sky docks", "steampunk"),
  h("habitat", "it runs on the foundry floor", "steampunk"),
  h("habitat", "it nests in clock towers", "steampunk"),
  h("habitat", "it thrives in aether mills", "steampunk"),
  h("habitat", "it hides in boiler rooms", "steampunk"),
  h("habitat", "it roosts on airship rigging", "steampunk"),
  h("habitat", "it patrols the brass quarter", "steampunk"),
  h("habitat", "it sleeps inside patent archives", "steampunk"),

  // Material
  h("material", "it's brass and living leather", "steampunk"),
  h("material", "it's clockwork all the way through", "steampunk"),
  h("material", "it's polished copper and glass", "steampunk"),
  h("material", "it's condensed aether", "steampunk"),
  h("material", "it's riveted iron and silk", "steampunk"),
  h("material", "it's soot-stained ivory gears", "steampunk"),
  h("material", "it's tempered boiler plate", "steampunk"),
  h("material", "it's lacquered chronometer brass", "steampunk"),

  // Scale
  h("scale", "it fills an entire airship hull", "steampunk"),
  h("scale", "it fits in a waistcoat pocket", "steampunk"),
  h("scale", "one of them spans a sky harbor", "steampunk"),
  h("scale", "it's the size of a pocket watch", "steampunk"),
  h("scale", "it shrinks to a single gear", "steampunk"),
  h("scale", "it weighs as much as a coal car", "steampunk"),
  h("scale", "it stretches across a foundry roof", "steampunk"),

  // Function
  h("function", "it powers entire districts", "steampunk"),
  h("function", "it predicts aether tides", "steampunk"),
  h("function", "it winds city clocks", "steampunk"),
  h("function", "it lifts airships into fog", "steampunk"),
  h("function", "it stamps patents in brass", "steampunk"),
  h("function", "it calibrates guild chronometers", "steampunk"),
  h("function", "it filters smog from lift shafts", "steampunk"),
  h("function", "it maps safe tether routes", "steampunk"),

  // Relationship
  h("relationship", "it races rival inventors", "steampunk"),
  h("relationship", "it refuses coal from tyrants", "steampunk"),
  h("relationship", "it serves only guild captains", "steampunk"),
  h("relationship", "it fears patent offices", "steampunk"),
  h("relationship", "it partners with sky pirates", "steampunk"),
  h("relationship", "it blackmails boiler unions", "steampunk"),
  h("relationship", "it mentors apprentice riveters", "steampunk"),
  h("relationship", "it trusts no unlicensed tuners", "steampunk"),

  // Origin
  h("origin", "it was patented then forgotten", "steampunk"),
  h("origin", "it sprang from a midnight blueprint", "steampunk"),
  h("origin", "it was forged in a sky foundry", "steampunk"),
  h("origin", "it escaped an inventor's loft", "steampunk"),
  h("origin", "it grew from a cracked boiler", "steampunk"),
  h("origin", "it was assembled during a guild trial", "steampunk"),
  h("origin", "it leaked from a sealed aether vat", "steampunk"),
  h("origin", "it was salvaged from a dirigible wreck", "steampunk"),

  // Rule
  h("rule", "timepieces sync to its heartbeat", "steampunk"),
  h("rule", "steam refuses to cool near it", "steampunk"),
  h("rule", "gears lock in its shadow", "steampunk"),
  h("rule", "aether thickens around it", "steampunk"),
  h("rule", "compasses spin beside it", "steampunk"),
  h("rule", "patents yellow in its presence", "steampunk"),
  h("rule", "coal burns twice as long near it", "steampunk"),
  h("rule", "lift cables hum when it passes", "steampunk")
];

export const STEAMPUNK_FRAGMENTS = [
  // Substance
  f("substance", "brass and aether", "steampunk"),
  f("substance", "clockwork ivory", "steampunk"),
  f("substance", "pressurized steam", "steampunk"),
  f("substance", "tempered copper", "steampunk"),
  f("substance", "riveted boiler plate", "steampunk"),
  f("substance", "lacquered chronometer brass", "steampunk"),
  f("substance", "aether glass", "steampunk"),
  f("substance", "soot-stained silk", "steampunk"),

  // Trait
  f("trait", "never stops ticking", "steampunk"),
  f("trait", "attracts loose gears", "steampunk"),
  f("trait", "hums in Morse", "steampunk"),
  f("trait", "refuses cheap coal", "steampunk"),
  f("trait", "warms without flame", "steampunk"),

  // Place
  f("place", "boiler rooms", "steampunk"),
  f("place", "airship rigging", "steampunk"),
  f("place", "clocktower lofts", "steampunk"),
  f("place", "gear halls", "steampunk"),
  f("place", "sky docks", "steampunk"),
  f("place", "foundry floors", "steampunk"),
  f("place", "lift shafts", "steampunk"),
  f("place", "patent archives", "steampunk"),
  f("place", "aether condenser bays", "steampunk"),
  f("place", "guild hall galleries", "steampunk"),

  // Verb
  f("verb", "ticks louder before rain", "steampunk"),
  f("verb", "vents steam in Morse", "steampunk"),
  f("verb", "winds itself", "steampunk"),
  f("verb", "syncs to chronometers", "steampunk"),
  f("verb", "stamps guild seals", "steampunk"),
  f("verb", "locks its own gears", "steampunk"),

  // Trigger
  f("trigger", "before aether storms", "steampunk"),
  f("trigger", "when patents are forged", "steampunk"),
  f("trigger", "at guild curfew", "steampunk"),
  f("trigger", "when coal runs low", "steampunk"),
  f("trigger", "during dirigible races", "steampunk"),
  f("trigger", "when chronometers disagree", "steampunk"),

  // Agent
  f("agent", "inventors", "steampunk"),
  f("agent", "airship captains", "steampunk"),
  f("agent", "guild inspectors", "steampunk"),
  f("agent", "sky pirates", "steampunk"),
  f("agent", "patent clerks", "steampunk"),
  f("agent", "boiler unions", "steampunk"),
  f("agent", "aether tuners", "steampunk"),

  // Bond
  f("bond", "winds", "steampunk"),
  f("bond", "calibrates", "steampunk"),
  f("bond", "refuses coal from", "steampunk"),
  f("bond", "serves only", "steampunk"),
  f("bond", "partners with", "steampunk"),
  f("bond", "blackmails", "steampunk"),

  // useAs
  f("useAs", "a pressure gauge", "steampunk"),
  f("useAs", "a guild chronometer", "steampunk"),
  f("useAs", "an aether compass", "steampunk"),
  f("useAs", "a patent stamp", "steampunk"),

  // does
  f("does", "powers whole districts", "steampunk"),
  f("does", "keeps airships aloft", "steampunk"),
  f("does", "predicts aether tides", "steampunk"),
  f("does", "winds city clocks", "steampunk"),
  f("does", "stamps patents in brass", "steampunk"),
  f("does", "maps safe tether routes", "steampunk"),
  f("does", "filters smog from lift shafts", "steampunk"),
  f("does", "calibrates guild chronometers", "steampunk"),

  // size
  f("size", "a pocket chronometer", "steampunk"),
  f("size", "an airship envelope", "steampunk"),
  f("size", "a single gear", "steampunk"),
  f("size", "a coal car", "steampunk"),
  f("size", "a sky harbor", "steampunk"),
  f("size", "a waistcoat pocket", "steampunk"),
  f("size", "a foundry roof", "steampunk"),

  // source
  f("source", "a rejected patent", "steampunk"),
  f("source", "a foundry accident", "steampunk"),
  f("source", "a midnight blueprint", "steampunk"),
  f("source", "a cracked boiler", "steampunk"),
  f("source", "a dirigible wreck", "steampunk"),
  f("source", "a sealed aether vat", "steampunk"),

  // force
  f("force", "steam", "steampunk"),
  f("force", "gears", "steampunk"),
  f("force", "compasses", "steampunk"),
  f("force", "timepieces", "steampunk"),
  f("force", "patents", "steampunk"),
  f("force", "lift cables", "steampunk"),

  // effect
  f("effect", "will refuse to cool", "steampunk"),
  f("effect", "will lock", "steampunk"),
  f("effect", "will spin", "steampunk"),
  f("effect", "will sync", "steampunk"),
  f("effect", "will thicken", "steampunk"),
  f("effect", "will yellow", "steampunk")
];

export const STEAMPUNK_PATTERNS = [
  p("material", "it's machined from {substance}", "steampunk"),
  p("material", "it's riveted {substance} that {trait}", "steampunk"),
  p("material", "it's guild-stamped {substance}", "steampunk"),
  p("habitat", "it nests among {place}", "steampunk"),
  p("habitat", "it runs across {place}", "steampunk"),
  p("behavior", "it {verb} {trigger}", "steampunk"),
  p("behavior", "it only {verb} {trigger}", "steampunk"),
  p("relationship", "it {bond} {agent}", "steampunk"),
  p("relationship", "it still {bond} {agent}", "steampunk"),
  p("function", "it {does}", "steampunk"),
  p("function", "guild halls keep it as {useAs}", "steampunk"),
  p("scale", "it's the size of {size}", "steampunk"),
  p("origin", "it was clocked out of {source}", "steampunk"),
  p("origin", "it was salvaged from {source}", "steampunk"),
  p("rule", "{force} {effect} near it", "steampunk")
];
