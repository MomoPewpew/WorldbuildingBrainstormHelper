import {
  makeAnchor as a,
  makeFragment as f,
  makeHook as h,
  makeHookPattern as p
} from "@/data/makeLut";

export const SCIFI_ANCHORS = [
  // Animals
  a("animals", "xenomorph", 3, "scifi"),
  a("animals", "void whale", 3, "scifi"),
  a("animals", "colony rat", 2, "scifi"),
  a("animals", "crystal beetle", 2, "scifi"),
  a("animals", "plasma moth", 2, "scifi"),
  a("animals", "ice worm", 2, "scifi"),

  // Plants
  a("plants", "terraflora", 2, "scifi"),
  a("plants", "oxygen vine", 3, "scifi"),
  a("plants", "spore tree", 2, "scifi"),
  a("plants", "crystal bloom", 2, "scifi"),
  a("plants", "hydro algae", 2, "scifi"),
  a("plants", "glow lichen", 2, "scifi"),

  // Landscapes
  a("landscapes", "asteroid belt", 3, "scifi"),
  a("landscapes", "gas giant", 3, "scifi"),
  a("landscapes", "dead moon", 2, "scifi"),
  a("landscapes", "orbital ring", 3, "scifi"),
  a("landscapes", "dust sea", 2, "scifi"),
  a("landscapes", "lava plain", 2, "scifi"),

  // Weather
  a("weather", "solar flare", 3, "scifi"),
  a("weather", "methane storm", 2, "scifi"),
  a("weather", "radiation fog", 2, "scifi"),
  a("weather", "vacuum wind", 2, "scifi"),
  a("weather", "ion rain", 2, "scifi"),
  a("weather", "dust cyclone", 2, "scifi"),

  // Objects
  a("objects", "starship", 3, "scifi"),
  a("objects", "hyperspace drive", 3, "scifi"),
  a("objects", "stasis pod", 2, "scifi"),
  a("objects", "plasma rifle", 2, "scifi"),
  a("objects", "comm beacon", 2, "scifi"),
  a("objects", "jump gate", 3, "scifi"),
  a("objects", "grav sled", 2, "scifi"),

  // Buildings
  a("buildings", "space station", 3, "scifi"),
  a("buildings", "cryo bay", 2, "scifi"),
  a("buildings", "hangar", 2, "scifi"),
  a("buildings", "terraforming dome", 3, "scifi"),
  a("buildings", "orbital lab", 2, "scifi"),
  a("buildings", "colony hub", 2, "scifi"),

  // Food
  a("food", "ration pack", 3, "scifi"),
  a("food", "algae cake", 2, "scifi"),
  a("food", "synth protein", 2, "scifi"),
  a("food", "hydroponic fruit", 2, "scifi"),
  a("food", "recycled water", 2, "scifi"),
  a("food", "spice gel", 1, "scifi"),

  // Occupations
  a("occupations", "astronaut", 3, "scifi"),
  a("occupations", "navigator", 3, "scifi"),
  a("occupations", "xenobiologist", 2, "scifi"),
  a("occupations", "colony governor", 2, "scifi"),
  a("occupations", "ship mechanic", 2, "scifi"),
  a("occupations", "first contact officer", 2, "scifi"),

  // Phenomena
  a("phenomena", "wormhole", 3, "scifi"),
  a("phenomena", "zero-g", 3, "scifi"),
  a("phenomena", "time dilation", 2, "scifi"),
  a("phenomena", "quantum echo", 2, "scifi"),
  a("phenomena", "signal ghost", 2, "scifi"),
  a("phenomena", "jump wake", 2, "scifi"),

  // Social
  a("social", "first contact", 3, "scifi"),
  a("social", "colony charter", 2, "scifi"),
  a("social", "fleet council", 2, "scifi"),
  a("social", "trade lane", 2, "scifi"),
  a("social", "crew roster", 2, "scifi"),
  a("social", "alien treaty", 2, "scifi")
];

export const SCIFI_HOOKS = [
  // Behavior
  h("behavior", "it orbits dying stars", "scifi"),
  h("behavior", "it hibernates between jumps", "scifi"),
  h("behavior", "it broadcasts on dead frequencies", "scifi"),
  h("behavior", "it sheds radiation like pollen", "scifi"),
  h("behavior", "it migrates along trade lanes", "scifi"),

  // Habitat
  h("habitat", "it drifts in deep space", "scifi"),
  h("habitat", "it docks only at derelict stations", "scifi"),
  h("habitat", "it nests in cryo bays", "scifi"),
  h("habitat", "it thrives inside asteroid hollows", "scifi"),
  h("habitat", "it lives in the jump wake", "scifi"),

  // Material
  h("material", "it's woven from dark matter", "scifi"),
  h("material", "it's crystallized vacuum", "scifi"),
  h("material", "it's living alloy", "scifi"),
  h("material", "it's compressed starlight", "scifi"),
  h("material", "it's frozen plasma", "scifi"),

  // Scale
  h("scale", "it spans a solar system", "scifi"),
  h("scale", "it fits in a stasis vial", "scifi"),
  h("scale", "one of them shadows a moon", "scifi"),
  h("scale", "it's the size of a jump gate", "scifi"),
  h("scale", "it shrinks to a quantum speck", "scifi"),

  // Function
  h("function", "it folds local space", "scifi"),
  h("function", "it terraforms on contact", "scifi"),
  h("function", "it charts safe jump paths", "scifi"),
  h("function", "it translates alien signals", "scifi"),
  h("function", "it reseeds dead colonies", "scifi"),

  // Relationship
  h("relationship", "it negotiates with alien fleets", "scifi"),
  h("relationship", "it ignores organic life", "scifi"),
  h("relationship", "it serves only colony charters", "scifi"),
  h("relationship", "it fears first contact teams", "scifi"),
  h("relationship", "it partners with navigators", "scifi"),

  // Origin
  h("origin", "it was left by a vanished species", "scifi"),
  h("origin", "it formed in a collapsing star", "scifi"),
  h("origin", "it hatched from a derelict seedship", "scifi"),
  h("origin", "it was printed by an alien AI", "scifi"),
  h("origin", "it drifted in from another galaxy", "scifi"),

  // Rule
  h("rule", "relativity breaks near it", "scifi"),
  h("rule", "comms die in its shadow", "scifi"),
  h("rule", "gravity flips beside it", "scifi"),
  h("rule", "stasis fails around it", "scifi"),
  h("rule", "jump drives refuse its vicinity", "scifi")
];

export const SCIFI_FRAGMENTS = [
  f("substance", "collapsed star matter", "scifi"),
  f("substance", "cryogel", "scifi"),
  f("substance", "vacuum glass", "scifi"),
  f("substance", "nanite fog", "scifi"),
  f("place", "derelict hangars", "scifi"),
  f("place", "jump-lane wake", "scifi"),
  f("place", "orbital graveyards", "scifi"),
  f("place", "generation-ship gardens", "scifi"),
  f("agent", "colony AI", "scifi"),
  f("agent", "first-contact teams", "scifi"),
  f("agent", "void pirates", "scifi"),
  f("bond", "orbits", "scifi"),
  f("bond", "quarantines", "scifi"),
  f("verb", "phases through bulkheads", "scifi"),
  f("verb", "broadcasts on dead channels", "scifi"),
  f("does", "recalibrates jump drives", "scifi"),
  f("does", "maps dark-matter tides", "scifi"),
  f("useAs", "a distress beacon", "scifi"),
  f("size", "a shuttle bay", "scifi"),
  f("size", "a gas giant's shadow", "scifi"),
  f("source", "a failed terraforming seed", "scifi"),
  f("source", "a dead probe's log", "scifi"),
  f("force", "comms", "scifi"),
  f("force", "gravity", "scifi"),
  f("force", "stasis", "scifi"),
  f("effect", "will die", "scifi"),
  f("effect", "will flip", "scifi"),
  f("effect", "will fail", "scifi")
];

export const SCIFI_PATTERNS = [
  p("material", "it's plated with {substance}", "scifi"),
  p("habitat", "it drifts through {place}", "scifi"),
  p("origin", "it was recovered from {source}", "scifi")
];
