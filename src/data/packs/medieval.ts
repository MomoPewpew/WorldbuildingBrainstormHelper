import {
  makeAnchor as a,
  makeFragment as f,
  makeHook as h,
  makeHookPattern as p
} from "@/data/makeLut";

export const MEDIEVAL_ANCHORS = [
  // Animals
  a("animals", "warhorse", 3, "medieval"),
  a("animals", "raven", 2, "medieval"),
  a("animals", "hound", 2, "medieval"),
  a("animals", "falcon", 2, "medieval"),
  a("animals", "boar", 2, "medieval"),
  a("animals", "stag", 2, "medieval"),
  a("animals", "wolf", 2, "medieval"),
  a("animals", "sheep", 2, "medieval"),

  // Plants
  a("plants", "oak", 2, "medieval"),
  a("plants", "yew", 2, "medieval"),
  a("plants", "barley", 2, "medieval"),
  a("plants", "thistle", 1, "medieval"),
  a("plants", "hawthorn", 1, "medieval"),
  a("plants", "herb garden", 1, "medieval"),
  a("plants", "wheat", 2, "medieval"),
  a("plants", "rose", 2, "medieval"),

  // Landscapes
  a("landscapes", "fief", 2, "medieval"),
  a("landscapes", "moor", 2, "medieval"),
  a("landscapes", "battlefield", 3, "medieval"),
  a("landscapes", "pilgrimage road", 2, "medieval"),
  a("landscapes", "tournament ground", 2, "medieval"),
  a("landscapes", "castle hill", 2, "medieval"),
  a("landscapes", "village green", 2, "medieval"),
  a("landscapes", "river ford", 2, "medieval"),
  a("landscapes", "sheep pasture", 2, "medieval"),

  // Weather
  a("weather", "siege mist", 2, "medieval"),
  a("weather", "harvest gale", 1, "medieval"),
  a("weather", "midwinter frost", 2, "medieval"),
  a("weather", "banner wind", 1, "medieval"),
  a("weather", "plague fog", 2, "medieval"),
  a("weather", "mud season", 2, "medieval"),
  a("weather", "hailstorm", 2, "medieval"),

  // Objects
  a("objects", "lance", 3, "medieval"),
  a("objects", "goblet", 2, "medieval"),
  a("objects", "tapestry", 2, "medieval"),
  a("objects", "chalice", 2, "medieval"),
  a("objects", "gauntlet", 2, "medieval"),
  a("objects", "banner", 3, "medieval"),
  a("objects", "trebuchet", 2, "medieval"),
  a("objects", "chainmail", 2, "medieval"),
  a("objects", "longbow", 2, "medieval"),
  a("objects", "mace", 2, "medieval"),
  a("objects", "reliquary", 2, "medieval"),
  a("objects", "war horn", 2, "medieval"),

  // Buildings
  a("buildings", "keep", 3, "medieval"),
  a("buildings", "moat", 2, "medieval"),
  a("buildings", "drawbridge", 2, "medieval"),
  a("buildings", "monastery", 3, "medieval"),
  a("buildings", "siege tower", 2, "medieval"),
  a("buildings", "great hall", 3, "medieval"),
  a("buildings", "watchtower", 2, "medieval"),
  a("buildings", "bailey", 2, "medieval"),
  a("buildings", "bell tower", 2, "medieval"),
  a("buildings", "chapel", 2, "medieval"),
  a("buildings", "gatehouse", 2, "medieval"),

  // Food
  a("food", "mead", 3, "medieval"),
  a("food", "pottage", 2, "medieval"),
  a("food", "roast boar", 2, "medieval"),
  a("food", "trencher", 1, "medieval"),
  a("food", "ale", 2, "medieval"),
  a("food", "black bread", 2, "medieval"),
  a("food", "honey cake", 2, "medieval"),
  a("food", "salt pork", 2, "medieval"),

  // Occupations
  a("occupations", "knight", 3, "medieval"),
  a("occupations", "squire", 2, "medieval"),
  a("occupations", "serf", 2, "medieval"),
  a("occupations", "herald", 2, "medieval"),
  a("occupations", "baron", 2, "medieval"),
  a("occupations", "reeve", 1, "medieval"),
  a("occupations", "executioner", 1, "medieval"),
  a("occupations", "jester", 1, "medieval"),
  a("occupations", "blacksmith", 2, "medieval"),
  a("occupations", "monk", 2, "medieval"),
  a("occupations", "minstrel", 2, "medieval"),
  a("occupations", "steward", 2, "medieval"),

  // Phenomena
  a("phenomena", "siege", 3, "medieval"),
  a("phenomena", "famine", 2, "medieval"),
  a("phenomena", "plague", 2, "medieval"),
  a("phenomena", "ordeal", 2, "medieval"),
  a("phenomena", "divine right", 2, "medieval"),
  a("phenomena", "trial by combat", 2, "medieval"),
  a("phenomena", "peasant uprising", 2, "medieval"),

  // Social
  a("social", "feast", 3, "medieval"),
  a("social", "tournament", 3, "medieval"),
  a("social", "feudal oath", 3, "medieval"),
  a("social", "crusade", 2, "medieval"),
  a("social", "joust", 2, "medieval"),
  a("social", "tithe", 2, "medieval"),
  a("social", "vassalage", 2, "medieval"),
  a("social", "coronation", 3, "medieval"),
  a("social", "harvest feast", 2, "medieval")
];

export const MEDIEVAL_HOOKS = [
  // Behavior
  h("behavior", "it demands a feudal tithe", "medieval"),
  h("behavior", "it kneels only to crowned heads", "medieval"),
  h("behavior", "it rides out at every muster", "medieval"),
  h("behavior", "it answers only to the war horn", "medieval"),
  h("behavior", "it holds court before dawn", "medieval"),
  h("behavior", "it tolls when a lord lies", "medieval"),
  h("behavior", "it bleeds rust instead of sap", "medieval"),
  h("behavior", "it refuses to cross consecrated ground", "medieval"),

  // Habitat
  h("habitat", "it dwells in the keep's deepest cell", "medieval"),
  h("habitat", "it rides with every warband", "medieval"),
  h("habitat", "it nests in the great hall rafters", "medieval"),
  h("habitat", "it thrives along pilgrimage roads", "medieval"),
  h("habitat", "it hides behind the drawbridge", "medieval"),
  h("habitat", "it roots in the tithe barn's darkest corner", "medieval"),
  h("habitat", "it patrols the castle ramparts at night", "medieval"),

  // Material
  h("material", "it's forged from saint's bones", "medieval"),
  h("material", "it's wrought of blackened iron", "medieval"),
  h("material", "it's woven from crusader banners", "medieval"),
  h("material", "it's cast from melted crowns", "medieval"),
  h("material", "it's carved from monastery oak", "medieval"),
  h("material", "it's banded with consecrated silver", "medieval"),
  h("material", "it's stuffed with peat and old prayers", "medieval"),

  // Scale
  h("scale", "it spans the whole fief", "medieval"),
  h("scale", "it fits inside a knight's gauntlet", "medieval"),
  h("scale", "it's taller than the keep", "medieval"),
  h("scale", "it outlasts every dynasty", "medieval"),
  h("scale", "one of them fills the bailey", "medieval"),
  h("scale", "it's no longer than a lance haft", "medieval"),
  h("scale", "it weighs as much as three tithes", "medieval"),

  // Function
  h("function", "it settles disputes by combat", "medieval"),
  h("function", "it blesses harvests at midwinter", "medieval"),
  h("function", "it's used to swear feudal oaths", "medieval"),
  h("function", "it marks the borders of a holding", "medieval"),
  h("function", "it calls vassals to war", "medieval"),
  h("function", "it unmasks hidden bastard lines", "medieval"),
  h("function", "it turns away plague wagons", "medieval"),

  // Relationship
  h("relationship", "it serves only the liege lord", "medieval"),
  h("relationship", "it hunts oathbreakers", "medieval"),
  h("relationship", "it fears the church bells", "medieval"),
  h("relationship", "it rivals every rival house", "medieval"),
  h("relationship", "it protects the serfs", "medieval"),
  h("relationship", "it spurns tax collectors", "medieval"),
  h("relationship", "it follows wandering pilgrims home", "medieval"),

  // Origin
  h("origin", "it was cast during the first siege", "medieval"),
  h("origin", "it grew from a broken lance", "medieval"),
  h("origin", "it was blessed at a coronation", "medieval"),
  h("origin", "it was forged for a crusade", "medieval"),
  h("origin", "it was inherited through vassalage", "medieval"),
  h("origin", "it fell from a collapsing bell tower", "medieval"),
  h("origin", "it was paid as blood price once", "medieval"),

  // Rule
  h("rule", "no blade may be drawn in its hall", "medieval"),
  h("rule", "kneeling silences it", "medieval"),
  h("rule", "oaths spoken near it cannot be broken", "medieval"),
  h("rule", "crowns lose their claim beside it", "medieval"),
  h("rule", "serfs walk free in its shadow", "medieval"),
  h("rule", "horses refuse to drink near it", "medieval"),
  h("rule", "tax ledgers blank themselves beside it", "medieval"),
  h("rule", "harvests ripen twice in its shadow", "medieval")
];

export const MEDIEVAL_FRAGMENTS = [
  f("substance", "saint's bones", "medieval"),
  f("substance", "blackened iron", "medieval"),
  f("substance", "crusader banners", "medieval"),
  f("substance", "melted crowns", "medieval"),
  f("substance", "monastery oak", "medieval"),
  f("substance", "consecrated silver", "medieval"),
  f("substance", "peat and pitch", "medieval"),
  f("substance", "chapel limestone", "medieval"),

  f("trait", "remembers oaths", "medieval"),
  f("trait", "casts two shadows", "medieval"),
  f("trait", "refuses holy ground", "medieval"),

  f("place", "the keep's deepest cell", "medieval"),
  f("place", "great hall rafters", "medieval"),
  f("place", "pilgrimage roads", "medieval"),
  f("place", "the drawbridge shadow", "medieval"),
  f("place", "the bailey", "medieval"),
  f("place", "chapel crypts", "medieval"),
  f("place", "haylofts", "medieval"),
  f("place", "village wells", "medieval"),
  f("place", "castle ramparts", "medieval"),

  f("verb", "demands a feudal tithe", "medieval"),
  f("verb", "rides out at every muster", "medieval"),
  f("verb", "holds court", "medieval"),
  f("verb", "tolls at dusk", "medieval"),
  f("verb", "bears feudal marks", "medieval"),

  f("trigger", "at vespers", "medieval"),
  f("trigger", "during sieges", "medieval"),
  f("trigger", "when banners fall", "medieval"),
  f("trigger", "on feast days", "medieval"),

  f("agent", "the liege lord", "medieval"),
  f("agent", "oathbreakers", "medieval"),
  f("agent", "church bells", "medieval"),
  f("agent", "the serfs", "medieval"),
  f("agent", "rival houses", "medieval"),
  f("agent", "the clergy", "medieval"),
  f("agent", "wandering pilgrims", "medieval"),

  f("bond", "kneels only to", "medieval"),
  f("bond", "hunts", "medieval"),
  f("bond", "serves", "medieval"),
  f("bond", "protects", "medieval"),
  f("bond", "rivals", "medieval"),
  f("bond", "fears", "medieval"),

  f("useAs", "a feudal oath", "medieval"),
  f("useAs", "a border stone", "medieval"),
  f("useAs", "a war horn", "medieval"),
  f("useAs", "a tithe ledger", "medieval"),

  f("does", "settles disputes by combat", "medieval"),
  f("does", "calls vassals to war", "medieval"),
  f("does", "blesses newborns", "medieval"),
  f("does", "breaks false oaths", "medieval"),
  f("does", "records land grants", "medieval"),

  f("size", "the whole fief", "medieval"),
  f("size", "a knight's gauntlet", "medieval"),
  f("size", "the keep", "medieval"),
  f("size", "a lance haft", "medieval"),
  f("size", "the manor grounds", "medieval"),

  f("source", "a broken lance", "medieval"),
  f("source", "the first siege", "medieval"),
  f("source", "a coronation rite", "medieval"),
  f("source", "a fallen banner", "medieval"),
  f("source", "a monastery scriptorium", "medieval"),

  f("force", "oaths", "medieval"),
  f("force", "crowns", "medieval"),
  f("force", "blades", "medieval"),
  f("force", "horses", "medieval"),
  f("force", "bells", "medieval"),
  f("force", "taxes", "medieval"),
  f("force", "serfs", "medieval"),

  f("effect", "will bind forever", "medieval"),
  f("effect", "will lose their claim", "medieval"),
  f("effect", "may not be drawn", "medieval"),
  f("effect", "will kneel", "medieval"),
  f("effect", "will refuse to hold", "medieval"),
  f("effect", "will fall silent", "medieval"),
  f("effect", "will walk free", "medieval"),
  f("effect", "will ripen twice", "medieval")
];

export const MEDIEVAL_PATTERNS = [
  p("material", "it's wrought of {substance}", "medieval"),
  p("material", "it's cast from {substance}", "medieval"),
  p("material", "it's forged from {substance} that {trait}", "medieval"),
  p("material", "it's carved from {substance}", "medieval"),
  p("habitat", "it dwells in {place}", "medieval"),
  p("habitat", "it nests among {place}", "medieval"),
  p("habitat", "it waits in {place}", "medieval"),
  p("origin", "it was forged from {source}", "medieval"),
  p("origin", "it grew from {source}", "medieval"),
  p("behavior", "it {verb} {trigger}", "medieval"),
  p("relationship", "it {bond} {agent}", "medieval"),
  p("function", "lords keep it as {useAs}", "medieval"),
  p("function", "it {does}", "medieval"),
  p("scale", "it's the size of {size}", "medieval"),
  p("rule", "{force} {effect} near it", "medieval")
];
