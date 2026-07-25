import {
  makeAnchor as a,
  makeFragment as f,
  makeHook as h,
  makeHookPattern as p
} from "@/data/makeLut";

export const MAGIC_ANCHORS = [
  // Animals
  a("animals", "familiar", 3, "magic"),
  a("animals", "phoenix", 3, "magic"),
  a("animals", "unicorn", 2, "magic"),
  a("animals", "drake", 2, "magic"),
  a("animals", "spirit fox", 2, "magic"),
  a("animals", "owl familiar", 2, "magic"),

  // Plants
  a("plants", "mandrake", 3, "magic"),
  a("plants", "moonflower", 2, "magic"),
  a("plants", "whispering willow", 2, "magic"),
  a("plants", "spellroot", 2, "magic"),
  a("plants", "glowing moss", 1, "magic"),
  a("plants", "rune vine", 1, "magic"),

  // Landscapes
  a("landscapes", "ley line", 3, "magic"),
  a("landscapes", "fairy grove", 2, "magic"),
  a("landscapes", "cursed bog", 2, "magic"),
  a("landscapes", "floating isle", 3, "magic"),
  a("landscapes", "mirror lake", 2, "magic"),
  a("landscapes", "dreaming desert", 1, "magic"),

  // Weather
  a("weather", "arcane storm", 3, "magic"),
  a("weather", "starfall", 2, "magic"),
  a("weather", "spellfog", 2, "magic"),
  a("weather", "mana rain", 2, "magic"),
  a("weather", "eclipse wind", 1, "magic"),

  // Objects
  a("objects", "wand", 3, "magic"),
  a("objects", "grimoire", 3, "magic"),
  a("objects", "crystal ball", 2, "magic"),
  a("objects", "amulet", 2, "magic"),
  a("objects", "enchanted ring", 2, "magic"),
  a("objects", "rune stone", 2, "magic"),
  a("objects", "staff", 3, "magic"),
  a("objects", "phylactery", 2, "magic"),

  // Buildings
  a("buildings", "wizard tower", 3, "magic"),
  a("buildings", "ritual circle", 3, "magic"),
  a("buildings", "enchanted academy", 2, "magic"),
  a("buildings", "sanctum", 2, "magic"),
  a("buildings", "spell vault", 2, "magic"),
  a("buildings", "oracle shrine", 2, "magic"),
  a("buildings", "floating library", 2, "magic"),

  // Food
  a("food", "elixir", 3, "magic"),
  a("food", "mana fruit", 2, "magic"),
  a("food", "dream wine", 2, "magic"),
  a("food", "starhoney", 1, "magic"),
  a("food", "potion broth", 2, "magic"),

  // Occupations
  a("occupations", "wizard", 3, "magic"),
  a("occupations", "witch", 3, "magic"),
  a("occupations", "familiar keeper", 2, "magic"),
  a("occupations", "rune scribe", 2, "magic"),
  a("occupations", "oracle", 2, "magic"),
  a("occupations", "apprentice", 2, "magic"),
  a("occupations", "enchanter", 2, "magic"),
  a("occupations", "warlock", 2, "magic"),

  // Phenomena
  a("phenomena", "curse", 3, "magic"),
  a("phenomena", "enchantment", 3, "magic"),
  a("phenomena", "prophecy", 2, "magic"),
  a("phenomena", "transmutation", 2, "magic"),
  a("phenomena", "true name", 3, "magic"),
  a("phenomena", "wild magic", 2, "magic"),

  // Social
  a("social", "coven", 3, "magic"),
  a("social", "spell duel", 3, "magic"),
  a("social", "binding vow", 2, "magic"),
  a("social", "arcane guild", 2, "magic"),
  a("social", "naming rite", 2, "magic"),
  a("social", "conjurer's pact", 2, "magic")
];

export const MAGIC_HOOKS = [
  // Behavior
  h("behavior", "it casts itself when named", "magic"),
  h("behavior", "it whispers unfinished spells", "magic"),
  h("behavior", "it rewrites runes overnight", "magic"),
  h("behavior", "it answers only in riddles", "magic"),
  h("behavior", "it blooms when a charm is spoken", "magic"),

  // Habitat
  h("habitat", "it sleeps on ley lines", "magic"),
  h("habitat", "it hides in unfinished grimoires", "magic"),
  h("habitat", "it nests inside crystal balls", "magic"),
  h("habitat", "it thrives in ritual circles", "magic"),
  h("habitat", "it drifts between dream and waking", "magic"),

  // Material
  h("material", "it's condensed starlight", "magic"),
  h("material", "it's woven from wishes", "magic"),
  h("material", "it's solidified mana", "magic"),
  h("material", "it's ink that casts itself", "magic"),
  h("material", "it's glass blown from prophecy", "magic"),

  // Scale
  h("scale", "one word of it remakes a kingdom", "magic"),
  h("scale", "it fits on a wand tip", "magic"),
  h("scale", "it fills an entire sanctum", "magic"),
  h("scale", "it shrinks to a single rune", "magic"),
  h("scale", "it's older than the first spell", "magic"),

  // Function
  h("function", "it binds souls to objects", "magic"),
  h("function", "it translates forgotten tongues", "magic"),
  h("function", "it stores unfinished enchantments", "magic"),
  h("function", "it opens portals between names", "magic"),
  h("function", "it measures the strength of a curse", "magic"),

  // Relationship
  h("relationship", "it bargains with demons", "magic"),
  h("relationship", "it mentors reckless apprentices", "magic"),
  h("relationship", "it serves only true wizards", "magic"),
  h("relationship", "it rivals every oracle", "magic"),
  h("relationship", "it fears spoken true names", "magic"),

  // Origin
  h("origin", "it was the first spell ever spoken", "magic"),
  h("origin", "it hatched from a broken wand", "magic"),
  h("origin", "it fell from a dying enchantment", "magic"),
  h("origin", "it was bound by a forgotten coven", "magic"),
  h("origin", "it grew from a wizard's last wish", "magic"),

  // Rule
  h("rule", "true names fail near it", "magic"),
  h("rule", "spells reverse when spoken beside it", "magic"),
  h("rule", "wands refuse to work in its shadow", "magic"),
  h("rule", "curses cannot take root near it", "magic"),
  h("rule", "mirrors show possible futures around it", "magic")
];

export const MAGIC_FRAGMENTS = [
  f("substance", "condensed starlight", "magic"),
  f("substance", "wishes", "magic"),
  f("substance", "solidified mana", "magic"),
  f("substance", "prophecy glass", "magic"),
  f("place", "ley lines", "magic"),
  f("place", "unfinished grimoires", "magic"),
  f("place", "crystal balls", "magic"),
  f("place", "ritual circles", "magic"),
  f("agent", "demons", "magic"),
  f("agent", "reckless apprentices", "magic"),
  f("agent", "true wizards", "magic"),
  f("agent", "oracles", "magic"),
  f("bond", "bargains with", "magic"),
  f("bond", "mentors", "magic"),
  f("verb", "casts itself", "magic"),
  f("verb", "whispers unfinished spells", "magic"),
  f("verb", "rewrites runes", "magic"),
  f("does", "binds souls to objects", "magic"),
  f("does", "translates forgotten tongues", "magic"),
  f("useAs", "a focus", "magic"),
  f("size", "a wand tip", "magic"),
  f("size", "an entire sanctum", "magic"),
  f("source", "a broken wand", "magic"),
  f("source", "a wizard's last wish", "magic"),
  f("force", "true names", "magic"),
  f("force", "spells", "magic"),
  f("force", "wands", "magic"),
  f("force", "curses", "magic"),
  f("effect", "will fail", "magic"),
  f("effect", "will reverse", "magic"),
  f("effect", "will refuse to work", "magic"),
  f("effect", "cannot take root", "magic")
];

export const MAGIC_PATTERNS = [
  p("material", "it's spun from {substance}", "magic"),
  p("habitat", "it sleeps on {place}", "magic"),
  p("origin", "it hatched from {source}", "magic")
];
