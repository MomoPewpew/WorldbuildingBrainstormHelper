import { makeAnchor as a, makeHook as h } from "@/data/makeLut";

export const MEDIEVAL_ANCHORS = [
  // Animals
  a("animals", "warhorse", 3, "medieval"),
  a("animals", "raven", 2, "medieval"),
  a("animals", "hound", 2, "medieval"),
  a("animals", "falcon", 2, "medieval"),
  a("animals", "boar", 2, "medieval"),
  a("animals", "stag", 2, "medieval"),

  // Plants
  a("plants", "oak", 2, "medieval"),
  a("plants", "yew", 2, "medieval"),
  a("plants", "barley", 2, "medieval"),
  a("plants", "thistle", 1, "medieval"),
  a("plants", "hawthorn", 1, "medieval"),
  a("plants", "herb garden", 1, "medieval"),

  // Landscapes
  a("landscapes", "fief", 2, "medieval"),
  a("landscapes", "moor", 2, "medieval"),
  a("landscapes", "battlefield", 3, "medieval"),
  a("landscapes", "pilgrimage road", 2, "medieval"),
  a("landscapes", "tournament ground", 2, "medieval"),
  a("landscapes", "castle hill", 2, "medieval"),

  // Weather
  a("weather", "siege mist", 2, "medieval"),
  a("weather", "harvest gale", 1, "medieval"),
  a("weather", "midwinter frost", 2, "medieval"),
  a("weather", "banner wind", 1, "medieval"),
  a("weather", "plague fog", 2, "medieval"),

  // Objects
  a("objects", "lance", 3, "medieval"),
  a("objects", "goblet", 2, "medieval"),
  a("objects", "tapestry", 2, "medieval"),
  a("objects", "chalice", 2, "medieval"),
  a("objects", "gauntlet", 2, "medieval"),
  a("objects", "banner", 3, "medieval"),
  a("objects", "trebuchet", 2, "medieval"),
  a("objects", "chainmail", 2, "medieval"),

  // Buildings
  a("buildings", "keep", 3, "medieval"),
  a("buildings", "moat", 2, "medieval"),
  a("buildings", "drawbridge", 2, "medieval"),
  a("buildings", "monastery", 3, "medieval"),
  a("buildings", "siege tower", 2, "medieval"),
  a("buildings", "great hall", 3, "medieval"),
  a("buildings", "watchtower", 2, "medieval"),
  a("buildings", "bailey", 2, "medieval"),

  // Food
  a("food", "mead", 3, "medieval"),
  a("food", "pottage", 2, "medieval"),
  a("food", "roast boar", 2, "medieval"),
  a("food", "trencher", 1, "medieval"),
  a("food", "ale", 2, "medieval"),

  // Occupations
  a("occupations", "knight", 3, "medieval"),
  a("occupations", "squire", 2, "medieval"),
  a("occupations", "serf", 2, "medieval"),
  a("occupations", "herald", 2, "medieval"),
  a("occupations", "baron", 2, "medieval"),
  a("occupations", "reeve", 1, "medieval"),
  a("occupations", "executioner", 1, "medieval"),
  a("occupations", "jester", 1, "medieval"),

  // Phenomena
  a("phenomena", "siege", 3, "medieval"),
  a("phenomena", "famine", 2, "medieval"),
  a("phenomena", "plague", 2, "medieval"),
  a("phenomena", "ordeal", 2, "medieval"),
  a("phenomena", "divine right", 2, "medieval"),

  // Social
  a("social", "feast", 3, "medieval"),
  a("social", "tournament", 3, "medieval"),
  a("social", "feudal oath", 3, "medieval"),
  a("social", "crusade", 2, "medieval"),
  a("social", "joust", 2, "medieval"),
  a("social", "tithe", 2, "medieval"),
  a("social", "vassalage", 2, "medieval")
];

export const MEDIEVAL_HOOKS = [
  // Behavior
  h("behavior", "it demands a feudal tithe", "medieval"),
  h("behavior", "it kneels only to crowned heads", "medieval"),
  h("behavior", "it rides out at every muster", "medieval"),
  h("behavior", "it answers only to the war horn", "medieval"),
  h("behavior", "it holds court before dawn", "medieval"),

  // Habitat
  h("habitat", "it dwells in the keep's deepest cell", "medieval"),
  h("habitat", "it rides with every warband", "medieval"),
  h("habitat", "it nests in the great hall rafters", "medieval"),
  h("habitat", "it thrives along pilgrimage roads", "medieval"),
  h("habitat", "it hides behind the drawbridge", "medieval"),

  // Material
  h("material", "it's forged from saint's bones", "medieval"),
  h("material", "it's wrought of blackened iron", "medieval"),
  h("material", "it's woven from crusader banners", "medieval"),
  h("material", "it's cast from melted crowns", "medieval"),
  h("material", "it's carved from monastery oak", "medieval"),

  // Scale
  h("scale", "it spans the whole fief", "medieval"),
  h("scale", "it fits inside a knight's gauntlet", "medieval"),
  h("scale", "it's taller than the keep", "medieval"),
  h("scale", "it outlasts every dynasty", "medieval"),
  h("scale", "one of them fills the bailey", "medieval"),

  // Function
  h("function", "it settles disputes by combat", "medieval"),
  h("function", "it blesses harvests at midwinter", "medieval"),
  h("function", "it's used to swear feudal oaths", "medieval"),
  h("function", "it marks the borders of a holding", "medieval"),
  h("function", "it calls vassals to war", "medieval"),

  // Relationship
  h("relationship", "it serves only the liege lord", "medieval"),
  h("relationship", "it hunts oathbreakers", "medieval"),
  h("relationship", "it fears the church bells", "medieval"),
  h("relationship", "it rivals every rival house", "medieval"),
  h("relationship", "it protects the serfs", "medieval"),

  // Origin
  h("origin", "it was cast during the first siege", "medieval"),
  h("origin", "it grew from a broken lance", "medieval"),
  h("origin", "it was blessed at a coronation", "medieval"),
  h("origin", "it was forged for a crusade", "medieval"),
  h("origin", "it was inherited through vassalage", "medieval"),

  // Rule
  h("rule", "no blade may be drawn in its hall", "medieval"),
  h("rule", "kneeling silences it", "medieval"),
  h("rule", "oaths spoken near it cannot be broken", "medieval"),
  h("rule", "crowns lose their claim beside it", "medieval"),
  h("rule", "serfs walk free in its shadow", "medieval")
];
