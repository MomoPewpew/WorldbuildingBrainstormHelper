import { makeAnchor as a, makeHook as h } from "@/data/makeLut";

export const CYBERPUNK_ANCHORS = [
  // Animals
  a("animals", "chrome dog", 3, "cyberpunk"),
  a("animals", "drone hawk", 2, "cyberpunk"),
  a("animals", "street rat", 3, "cyberpunk"),
  a("animals", "cybercat", 2, "cyberpunk"),
  a("animals", "data leech", 2, "cyberpunk"),
  a("animals", "neon moth", 2, "cyberpunk"),

  // Plants
  a("plants", "glow fungus", 2, "cyberpunk"),
  a("plants", "hydroponic vine", 2, "cyberpunk"),
  a("plants", "plastic orchid", 2, "cyberpunk"),
  a("plants", "smog moss", 2, "cyberpunk"),
  a("plants", "gene flower", 2, "cyberpunk"),
  a("plants", "rooftop kale", 1, "cyberpunk"),

  // Landscapes
  a("landscapes", "neon alley", 3, "cyberpunk"),
  a("landscapes", "undercity", 3, "cyberpunk"),
  a("landscapes", "server farm", 2, "cyberpunk"),
  a("landscapes", "sprawl", 3, "cyberpunk"),
  a("landscapes", "blackout zone", 2, "cyberpunk"),
  a("landscapes", "acid canal", 2, "cyberpunk"),

  // Weather
  a("weather", "acid rain", 3, "cyberpunk"),
  a("weather", "smog bank", 2, "cyberpunk"),
  a("weather", "neon fog", 2, "cyberpunk"),
  a("weather", "static storm", 2, "cyberpunk"),
  a("weather", "heat haze", 2, "cyberpunk"),
  a("weather", "blackout night", 2, "cyberpunk"),

  // Objects
  a("objects", "cyberdeck", 3, "cyberpunk"),
  a("objects", "neural implant", 3, "cyberpunk"),
  a("objects", "smartgun", 2, "cyberpunk"),
  a("objects", "holoboard", 2, "cyberpunk"),
  a("objects", "drone", 3, "cyberpunk"),
  a("objects", "datachip", 2, "cyberpunk"),
  a("objects", "chrome limb", 2, "cyberpunk"),

  // Buildings
  a("buildings", "arcology", 3, "cyberpunk"),
  a("buildings", "megacorp tower", 3, "cyberpunk"),
  a("buildings", "datahaven", 2, "cyberpunk"),
  a("buildings", "chop shop", 2, "cyberpunk"),
  a("buildings", "capsule hotel", 2, "cyberpunk"),
  a("buildings", "street clinic", 2, "cyberpunk"),

  // Food
  a("food", "nutrient paste", 3, "cyberpunk"),
  a("food", "synth meat", 2, "cyberpunk"),
  a("food", "street noodles", 2, "cyberpunk"),
  a("food", "stim bar", 2, "cyberpunk"),
  a("food", "vending sushi", 2, "cyberpunk"),
  a("food", "black-market coffee", 1, "cyberpunk"),

  // Occupations
  a("occupations", "hacker", 3, "cyberpunk"),
  a("occupations", "fixer", 3, "cyberpunk"),
  a("occupations", "netrunner", 3, "cyberpunk"),
  a("occupations", "street samurai", 2, "cyberpunk"),
  a("occupations", "corp executive", 2, "cyberpunk"),
  a("occupations", "ripper", 2, "cyberpunk"),

  // Phenomena
  a("phenomena", "glitch", 3, "cyberpunk"),
  a("phenomena", "static", 2, "cyberpunk"),
  a("phenomena", "braindance", 3, "cyberpunk"),
  a("phenomena", "ICE wall", 2, "cyberpunk"),
  a("phenomena", "signal bleed", 2, "cyberpunk"),
  a("phenomena", "memory wipe", 2, "cyberpunk"),

  // Social
  a("social", "black market", 3, "cyberpunk"),
  a("social", "corp war", 2, "cyberpunk"),
  a("social", "street crew", 2, "cyberpunk"),
  a("social", "data auction", 2, "cyberpunk"),
  a("social", "loyalty chip", 2, "cyberpunk"),
  a("social", "night market", 2, "cyberpunk")
];

export const CYBERPUNK_HOOKS = [
  // Behavior
  h("behavior", "it reboots every midnight", "cyberpunk"),
  h("behavior", "it sells data to the highest bidder", "cyberpunk"),
  h("behavior", "it glitches when lied to", "cyberpunk"),
  h("behavior", "it jackknives through traffic", "cyberpunk"),
  h("behavior", "it broadcasts ads in its sleep", "cyberpunk"),

  // Habitat
  h("habitat", "it lives in the net", "cyberpunk"),
  h("habitat", "it nests in abandoned server racks", "cyberpunk"),
  h("habitat", "it hides under neon billboards", "cyberpunk"),
  h("habitat", "it thrives in blackout zones", "cyberpunk"),
  h("habitat", "it pools in alley gutters of code", "cyberpunk"),

  // Material
  h("material", "it's made of scavenged chrome", "cyberpunk"),
  h("material", "it's pure black ice code", "cyberpunk"),
  h("material", "it's wired wetware", "cyberpunk"),
  h("material", "it's recycled megacorp plastic", "cyberpunk"),
  h("material", "it's liquid crystal skin", "cyberpunk"),

  // Scale
  h("scale", "it fits behind one eye", "cyberpunk"),
  h("scale", "it spans an entire arcology floor", "cyberpunk"),
  h("scale", "it's the size of a datachip", "cyberpunk"),
  h("scale", "one of them blankets the sprawl", "cyberpunk"),
  h("scale", "it shrinks to a neural pin", "cyberpunk"),

  // Function
  h("function", "it jacks into nervous systems", "cyberpunk"),
  h("function", "it erases corporate debt", "cyberpunk"),
  h("function", "it spoofs biometric locks", "cyberpunk"),
  h("function", "it mines street gossip for sale", "cyberpunk"),
  h("function", "it patches illegal wetware", "cyberpunk"),

  // Relationship
  h("relationship", "it works for three megacorps at once", "cyberpunk"),
  h("relationship", "it blackmails its users", "cyberpunk"),
  h("relationship", "it freelances for street crews", "cyberpunk"),
  h("relationship", "it fears corp auditors", "cyberpunk"),
  h("relationship", "it partners with rippers", "cyberpunk"),

  // Origin
  h("origin", "it escaped a failed AI lab", "cyberpunk"),
  h("origin", "it was a discarded prototype", "cyberpunk"),
  h("origin", "it leaked from a megacorp vault", "cyberpunk"),
  h("origin", "it grew from corrupted firmware", "cyberpunk"),
  h("origin", "it was pirated from a dead netrunner", "cyberpunk"),

  // Rule
  h("rule", "cameras refuse to record it", "cyberpunk"),
  h("rule", "contracts void near it", "cyberpunk"),
  h("rule", "ICE softens in its presence", "cyberpunk"),
  h("rule", "loyalty chips fail beside it", "cyberpunk"),
  h("rule", "ads go silent around it", "cyberpunk")
];
