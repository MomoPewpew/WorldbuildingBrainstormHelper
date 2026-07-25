import { makeAnchor as a, makeHook as h } from "@/data/makeLut";

export const STEAMPUNK_ANCHORS = [
  // Animals
  a("animals", "mechanical horse", 3, "steampunk"),
  a("animals", "clockwork bird", 3, "steampunk"),
  a("animals", "brass beetle", 2, "steampunk"),
  a("animals", "steam hound", 2, "steampunk"),
  a("animals", "gear fox", 2, "steampunk"),
  a("animals", "aether moth", 2, "steampunk"),

  // Plants
  a("plants", "copper ivy", 2, "steampunk"),
  a("plants", "boiler orchid", 2, "steampunk"),
  a("plants", "soot fern", 2, "steampunk"),
  a("plants", "aether bloom", 3, "steampunk"),
  a("plants", "brass moss", 2, "steampunk"),
  a("plants", "pressure vine", 2, "steampunk"),

  // Landscapes
  a("landscapes", "smog district", 3, "steampunk"),
  a("landscapes", "sky harbor", 3, "steampunk"),
  a("landscapes", "cog canyon", 2, "steampunk"),
  a("landscapes", "foundry flats", 2, "steampunk"),
  a("landscapes", "airship graveyard", 2, "steampunk"),
  a("landscapes", "boiler marsh", 2, "steampunk"),

  // Weather
  a("weather", "aether fog", 3, "steampunk"),
  a("weather", "soot rain", 2, "steampunk"),
  a("weather", "pressure gale", 2, "steampunk"),
  a("weather", "steam cloud", 2, "steampunk"),
  a("weather", "brass hail", 2, "steampunk"),
  a("weather", "smog tide", 2, "steampunk"),

  // Objects
  a("objects", "airship", 3, "steampunk"),
  a("objects", "pocket watch", 3, "steampunk"),
  a("objects", "difference engine", 2, "steampunk"),
  a("objects", "goggles", 2, "steampunk"),
  a("objects", "steam rifle", 2, "steampunk"),
  a("objects", "boiler", 2, "steampunk"),
  a("objects", "piston", 2, "steampunk"),

  // Buildings
  a("buildings", "airship dock", 3, "steampunk"),
  a("buildings", "brass foundry", 3, "steampunk"),
  a("buildings", "observatory", 2, "steampunk"),
  a("buildings", "workshop loft", 2, "steampunk"),
  a("buildings", "clock tower", 2, "steampunk"),
  a("buildings", "aether mill", 2, "steampunk"),

  // Food
  a("food", "coal tea", 2, "steampunk"),
  a("food", "boiler stew", 2, "steampunk"),
  a("food", "clockwork pastry", 2, "steampunk"),
  a("food", "smoked sausage", 2, "steampunk"),
  a("food", "pressure coffee", 2, "steampunk"),
  a("food", "brass candy", 1, "steampunk"),

  // Occupations
  a("occupations", "airship captain", 3, "steampunk"),
  a("occupations", "inventor", 3, "steampunk"),
  a("occupations", "clockwork engineer", 3, "steampunk"),
  a("occupations", "aether scientist", 2, "steampunk"),
  a("occupations", "sky pirate", 2, "steampunk"),
  a("occupations", "boiler stoker", 2, "steampunk"),

  // Phenomena
  a("phenomena", "aether storm", 3, "steampunk"),
  a("phenomena", "pressure surge", 2, "steampunk"),
  a("phenomena", "gear seizure", 2, "steampunk"),
  a("phenomena", "steam bloom", 2, "steampunk"),
  a("phenomena", "clockwork fever", 2, "steampunk"),
  a("phenomena", "aether tide", 2, "steampunk"),

  // Social
  a("social", "invention fair", 3, "steampunk"),
  a("social", "dirigible race", 3, "steampunk"),
  a("social", "guild charter", 2, "steampunk"),
  a("social", "patent duel", 2, "steampunk"),
  a("social", "skyball", 2, "steampunk"),
  a("social", "foundry strike", 2, "steampunk")
];

export const STEAMPUNK_HOOKS = [
  // Behavior
  h("behavior", "it ticks louder before storms", "steampunk"),
  h("behavior", "it vents steam when lying", "steampunk"),
  h("behavior", "it winds itself at dawn", "steampunk"),
  h("behavior", "it hisses when insulted", "steampunk"),
  h("behavior", "it chimes before disasters", "steampunk"),

  // Habitat
  h("habitat", "it hangs in the sky docks", "steampunk"),
  h("habitat", "it runs on the foundry floor", "steampunk"),
  h("habitat", "it nests in clock towers", "steampunk"),
  h("habitat", "it thrives in aether mills", "steampunk"),
  h("habitat", "it hides in boiler rooms", "steampunk"),

  // Material
  h("material", "it's brass and living leather", "steampunk"),
  h("material", "it's clockwork all the way through", "steampunk"),
  h("material", "it's polished copper and glass", "steampunk"),
  h("material", "it's condensed aether", "steampunk"),
  h("material", "it's riveted iron and silk", "steampunk"),

  // Scale
  h("scale", "it fills an entire airship hull", "steampunk"),
  h("scale", "it fits in a waistcoat pocket", "steampunk"),
  h("scale", "one of them spans a sky harbor", "steampunk"),
  h("scale", "it's the size of a pocket watch", "steampunk"),
  h("scale", "it shrinks to a single gear", "steampunk"),

  // Function
  h("function", "it powers entire districts", "steampunk"),
  h("function", "it predicts aether tides", "steampunk"),
  h("function", "it winds city clocks", "steampunk"),
  h("function", "it lifts airships into fog", "steampunk"),
  h("function", "it stamps patents in brass", "steampunk"),

  // Relationship
  h("relationship", "it races rival inventors", "steampunk"),
  h("relationship", "it refuses coal from tyrants", "steampunk"),
  h("relationship", "it serves only guild captains", "steampunk"),
  h("relationship", "it fears patent offices", "steampunk"),
  h("relationship", "it partners with sky pirates", "steampunk"),

  // Origin
  h("origin", "it was patented then forgotten", "steampunk"),
  h("origin", "it sprang from a midnight blueprint", "steampunk"),
  h("origin", "it was forged in a sky foundry", "steampunk"),
  h("origin", "it escaped an inventor's loft", "steampunk"),
  h("origin", "it grew from a cracked boiler", "steampunk"),

  // Rule
  h("rule", "timepieces sync to its heartbeat", "steampunk"),
  h("rule", "steam refuses to cool near it", "steampunk"),
  h("rule", "gears lock in its shadow", "steampunk"),
  h("rule", "aether thickens around it", "steampunk"),
  h("rule", "compasses spin beside it", "steampunk")
];
