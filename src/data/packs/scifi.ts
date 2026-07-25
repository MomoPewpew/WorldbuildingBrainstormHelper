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
  a("animals", "orbital jellyfish", 2, "scifi"),
  a("animals", "dust manta", 2, "scifi"),
  a("animals", "relay hawk", 2, "scifi"),
  a("animals", "terraform grub", 2, "scifi"),

  // Plants
  a("plants", "terraflora", 2, "scifi"),
  a("plants", "oxygen vine", 3, "scifi"),
  a("plants", "spore tree", 2, "scifi"),
  a("plants", "crystal bloom", 2, "scifi"),
  a("plants", "hydro algae", 2, "scifi"),
  a("plants", "glow lichen", 2, "scifi"),
  a("plants", "vacuum kelp", 2, "scifi"),
  a("plants", "stasis moss", 2, "scifi"),
  a("plants", "jump-seed pod", 2, "scifi"),
  a("plants", "radiation fern", 2, "scifi"),

  // Landscapes
  a("landscapes", "asteroid belt", 3, "scifi"),
  a("landscapes", "gas giant", 3, "scifi"),
  a("landscapes", "dead moon", 2, "scifi"),
  a("landscapes", "orbital ring", 3, "scifi"),
  a("landscapes", "dust sea", 2, "scifi"),
  a("landscapes", "lava plain", 2, "scifi"),
  a("landscapes", "void rift", 2, "scifi"),
  a("landscapes", "terraform scar", 2, "scifi"),
  a("landscapes", "probe crater field", 2, "scifi"),
  a("landscapes", "colony shoreline", 2, "scifi"),

  // Weather
  a("weather", "solar flare", 3, "scifi"),
  a("weather", "methane storm", 2, "scifi"),
  a("weather", "radiation fog", 2, "scifi"),
  a("weather", "vacuum wind", 2, "scifi"),
  a("weather", "ion rain", 2, "scifi"),
  a("weather", "dust cyclone", 2, "scifi"),
  a("weather", "jump static", 2, "scifi"),
  a("weather", "magnetopause gale", 2, "scifi"),
  a("weather", "orbital eclipse", 2, "scifi"),

  // Objects
  a("objects", "starship", 3, "scifi"),
  a("objects", "hyperspace drive", 3, "scifi"),
  a("objects", "stasis pod", 2, "scifi"),
  a("objects", "plasma rifle", 2, "scifi"),
  a("objects", "comm beacon", 2, "scifi"),
  a("objects", "jump gate", 3, "scifi"),
  a("objects", "grav sled", 2, "scifi"),
  a("objects", "survey probe", 3, "scifi"),
  a("objects", "terraformer seed", 2, "scifi"),
  a("objects", "void suit", 2, "scifi"),
  a("objects", "colony relay", 2, "scifi"),
  a("objects", "cryo crate", 2, "scifi"),

  // Buildings
  a("buildings", "space station", 3, "scifi"),
  a("buildings", "cryo bay", 2, "scifi"),
  a("buildings", "hangar", 2, "scifi"),
  a("buildings", "terraforming dome", 3, "scifi"),
  a("buildings", "orbital lab", 2, "scifi"),
  a("buildings", "colony hub", 2, "scifi"),
  a("buildings", "jump control spire", 2, "scifi"),
  a("buildings", "stasis vault", 2, "scifi"),
  a("buildings", "probe launch gantry", 2, "scifi"),
  a("buildings", "void dock", 2, "scifi"),

  // Food
  a("food", "ration pack", 3, "scifi"),
  a("food", "algae cake", 2, "scifi"),
  a("food", "synth protein", 2, "scifi"),
  a("food", "hydroponic fruit", 2, "scifi"),
  a("food", "recycled water", 2, "scifi"),
  a("food", "spice gel", 1, "scifi"),
  a("food", "stasis honey", 2, "scifi"),
  a("food", "colony yeast bread", 2, "scifi"),
  a("food", "void coffee", 2, "scifi"),

  // Occupations
  a("occupations", "astronaut", 3, "scifi"),
  a("occupations", "navigator", 3, "scifi"),
  a("occupations", "xenobiologist", 2, "scifi"),
  a("occupations", "colony governor", 2, "scifi"),
  a("occupations", "ship mechanic", 2, "scifi"),
  a("occupations", "first contact officer", 2, "scifi"),
  a("occupations", "terraform engineer", 2, "scifi"),
  a("occupations", "probe pilot", 2, "scifi"),
  a("occupations", "jump technician", 2, "scifi"),
  a("occupations", "orbital medic", 2, "scifi"),

  // Phenomena
  a("phenomena", "wormhole", 3, "scifi"),
  a("phenomena", "zero-g", 3, "scifi"),
  a("phenomena", "time dilation", 2, "scifi"),
  a("phenomena", "quantum echo", 2, "scifi"),
  a("phenomena", "signal ghost", 2, "scifi"),
  a("phenomena", "jump wake", 2, "scifi"),
  a("phenomena", "terraform bloom", 2, "scifi"),
  a("phenomena", "stasis drift", 2, "scifi"),
  a("phenomena", "void shimmer", 2, "scifi"),

  // Social
  a("social", "first contact", 3, "scifi"),
  a("social", "colony charter", 2, "scifi"),
  a("social", "fleet council", 2, "scifi"),
  a("social", "trade lane", 2, "scifi"),
  a("social", "crew roster", 2, "scifi"),
  a("social", "alien treaty", 2, "scifi"),
  a("social", "jump embargo", 2, "scifi"),
  a("social", "terraform vote", 2, "scifi"),
  a("social", "probe lottery", 2, "scifi"),
  a("social", "orbital quarantine", 2, "scifi")
];

export const SCIFI_HOOKS = [
  // Behavior
  h("behavior", "it orbits dying stars", "scifi"),
  h("behavior", "it hibernates between jumps", "scifi"),
  h("behavior", "it broadcasts on dead frequencies", "scifi"),
  h("behavior", "it sheds radiation like pollen", "scifi"),
  h("behavior", "it migrates along trade lanes", "scifi"),
  h("behavior", "it pings every passing probe", "scifi"),
  h("behavior", "it wakes when jump drives spin up", "scifi"),
  h("behavior", "it terraforms one crater at a time", "scifi"),

  // Habitat
  h("habitat", "it drifts in deep space", "scifi"),
  h("habitat", "it docks only at derelict stations", "scifi"),
  h("habitat", "it nests in cryo bays", "scifi"),
  h("habitat", "it thrives inside asteroid hollows", "scifi"),
  h("habitat", "it lives in the jump wake", "scifi"),
  h("habitat", "it circles abandoned colonies", "scifi"),
  h("habitat", "it roots in orbital greenhouses", "scifi"),
  h("habitat", "it hides in stasis vaults", "scifi"),

  // Material
  h("material", "it's woven from dark matter", "scifi"),
  h("material", "it's crystallized vacuum", "scifi"),
  h("material", "it's living alloy", "scifi"),
  h("material", "it's compressed starlight", "scifi"),
  h("material", "it's frozen plasma", "scifi"),
  h("material", "it's recycled hull plating", "scifi"),
  h("material", "it's probe-grade ceramics", "scifi"),
  h("material", "it's terraformer slurry", "scifi"),

  // Scale
  h("scale", "it spans a solar system", "scifi"),
  h("scale", "it fits in a stasis vial", "scifi"),
  h("scale", "one of them shadows a moon", "scifi"),
  h("scale", "it's the size of a jump gate", "scifi"),
  h("scale", "it shrinks to a quantum speck", "scifi"),
  h("scale", "it fills an orbital ring segment", "scifi"),
  h("scale", "it's no bigger than a survey probe", "scifi"),

  // Function
  h("function", "it folds local space", "scifi"),
  h("function", "it terraforms on contact", "scifi"),
  h("function", "it charts safe jump paths", "scifi"),
  h("function", "it translates alien signals", "scifi"),
  h("function", "it reseeds dead colonies", "scifi"),
  h("function", "it calibrates colony relays", "scifi"),
  h("function", "it wakes crew from stasis", "scifi"),
  h("function", "it maps void currents", "scifi"),

  // Relationship
  h("relationship", "it negotiates with alien fleets", "scifi"),
  h("relationship", "it ignores organic life", "scifi"),
  h("relationship", "it serves only colony charters", "scifi"),
  h("relationship", "it fears first contact teams", "scifi"),
  h("relationship", "it partners with navigators", "scifi"),
  h("relationship", "it freelances for probe guilds", "scifi"),
  h("relationship", "it obeys terraform engineers", "scifi"),

  // Origin
  h("origin", "it was left by a vanished species", "scifi"),
  h("origin", "it formed in a collapsing star", "scifi"),
  h("origin", "it hatched from a derelict seedship", "scifi"),
  h("origin", "it was printed by an alien AI", "scifi"),
  h("origin", "it drifted in from another galaxy", "scifi"),
  h("origin", "it crawled out of a failed terraform", "scifi"),
  h("origin", "it was cloned from probe samples", "scifi"),
  h("origin", "it woke inside a cracked stasis pod", "scifi"),

  // Rule
  h("rule", "relativity breaks near it", "scifi"),
  h("rule", "comms die in its shadow", "scifi"),
  h("rule", "gravity flips beside it", "scifi"),
  h("rule", "stasis fails around it", "scifi"),
  h("rule", "jump drives refuse its vicinity", "scifi"),
  h("rule", "terraformers stall when it passes", "scifi"),
  h("rule", "probes lose telemetry beside it", "scifi"),
  h("rule", "colony airlocks seal near it", "scifi")
];

export const SCIFI_FRAGMENTS = [
  f("substance", "collapsed star matter", "scifi"),
  f("substance", "cryogel", "scifi"),
  f("substance", "vacuum glass", "scifi"),
  f("substance", "nanite fog", "scifi"),
  f("substance", "recycled hull alloy", "scifi"),
  f("substance", "terraformer slurry", "scifi"),
  f("substance", "jump coolant", "scifi"),
  f("substance", "probe ceramics", "scifi"),
  f("substance", "stasis gel", "scifi"),
  f("substance", "void silk", "scifi"),

  f("trait", "never loses pressure", "scifi"),
  f("trait", "remembers star maps", "scifi"),
  f("trait", "hums at jump frequency", "scifi"),
  f("trait", "drinks radiation", "scifi"),
  f("trait", "refuses vacuum seals", "scifi"),
  f("trait", "outlasts stasis cycles", "scifi"),

  f("place", "derelict hangars", "scifi"),
  f("place", "jump-lane wake", "scifi"),
  f("place", "orbital graveyards", "scifi"),
  f("place", "generation-ship gardens", "scifi"),
  f("place", "cryo bays", "scifi"),
  f("place", "terraform domes", "scifi"),
  f("place", "void docks", "scifi"),
  f("place", "colony airlocks", "scifi"),
  f("place", "probe launch gantries", "scifi"),
  f("place", "stasis vaults", "scifi"),
  f("place", "jump control spires", "scifi"),
  f("place", "asteroid hollows", "scifi"),
  f("place", "orbital greenhouses", "scifi"),

  f("agent", "colony AI", "scifi"),
  f("agent", "first-contact teams", "scifi"),
  f("agent", "void pirates", "scifi"),
  f("agent", "terraform engineers", "scifi"),
  f("agent", "probe pilots", "scifi"),
  f("agent", "jump technicians", "scifi"),

  f("bond", "orbits", "scifi"),
  f("bond", "quarantines", "scifi"),
  f("bond", "calibrates", "scifi"),
  f("bond", "escorts", "scifi"),

  f("verb", "phases through bulkheads", "scifi"),
  f("verb", "broadcasts on dead channels", "scifi"),
  f("verb", "hibernates between jumps", "scifi"),
  f("verb", "pings passing probes", "scifi"),
  f("verb", "sheds radiation", "scifi"),

  f("trigger", "when jump drives engage", "scifi"),
  f("trigger", "during solar flares", "scifi"),
  f("trigger", "at first contact", "scifi"),
  f("trigger", "when stasis cycles end", "scifi"),
  f("trigger", "after probe telemetry drops", "scifi"),

  f("does", "recalibrates jump drives", "scifi"),
  f("does", "maps dark-matter tides", "scifi"),
  f("does", "reseeds dead colonies", "scifi"),
  f("does", "translates alien signals", "scifi"),
  f("does", "charts safe jump paths", "scifi"),
  f("does", "wakes crew from stasis", "scifi"),

  f("useAs", "a distress beacon", "scifi"),
  f("useAs", "a colony charter seal", "scifi"),
  f("useAs", "a jump calibration tool", "scifi"),
  f("useAs", "a terraform seed core", "scifi"),

  f("size", "a shuttle bay", "scifi"),
  f("size", "a gas giant's shadow", "scifi"),
  f("size", "a stasis vial", "scifi"),
  f("size", "a survey probe", "scifi"),
  f("size", "an orbital ring segment", "scifi"),

  f("source", "a failed terraforming seed", "scifi"),
  f("source", "a dead probe's log", "scifi"),
  f("source", "a cracked stasis pod", "scifi"),
  f("source", "a derelict seedship", "scifi"),
  f("source", "a vanished species' cache", "scifi"),

  f("force", "comms", "scifi"),
  f("force", "gravity", "scifi"),
  f("force", "stasis", "scifi"),
  f("force", "jump drives", "scifi"),
  f("force", "terraformers", "scifi"),
  f("force", "probes", "scifi"),

  f("effect", "will die", "scifi"),
  f("effect", "will flip", "scifi"),
  f("effect", "will fail", "scifi"),
  f("effect", "will refuse to engage", "scifi"),
  f("effect", "will lose telemetry", "scifi"),
  f("effect", "will stall", "scifi")
];

export const SCIFI_PATTERNS = [
  p("material", "it's plated with {substance}", "scifi"),
  p("material", "it's grown from {substance}", "scifi"),
  p("material", "it's {substance} that {trait}", "scifi"),

  p("habitat", "it drifts through {place}", "scifi"),
  p("habitat", "it nests in {place}", "scifi"),
  p("habitat", "it only thrives in {place}", "scifi"),

  p("behavior", "it {verb} {trigger}", "scifi"),

  p("relationship", "it {bond} {agent}", "scifi"),

  p("function", "it {does}", "scifi"),
  p("function", "colonies keep it as {useAs}", "scifi"),

  p("scale", "it's the size of {size}", "scifi"),

  p("origin", "it was recovered from {source}", "scifi"),
  p("origin", "it crawled out of {source}", "scifi"),

  p("rule", "{force} {effect} near it", "scifi"),
  p("rule", "{force} {effect} in its shadow", "scifi")
];
