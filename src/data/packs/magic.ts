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
  a("animals", "moon moth", 2, "magic"),
  a("animals", "bound serpent", 2, "magic"),
  a("animals", "spell hound", 2, "magic"),
  a("animals", "griffin chick", 2, "magic"),

  // Plants
  a("plants", "mandrake", 3, "magic"),
  a("plants", "moonflower", 2, "magic"),
  a("plants", "whispering willow", 2, "magic"),
  a("plants", "spellroot", 2, "magic"),
  a("plants", "glowing moss", 1, "magic"),
  a("plants", "rune vine", 1, "magic"),
  a("plants", "witchbane", 2, "magic"),
  a("plants", "soulbloom", 2, "magic"),
  a("plants", "thornheart rose", 2, "magic"),
  a("plants", "ghost lily", 2, "magic"),

  // Landscapes
  a("landscapes", "ley line", 3, "magic"),
  a("landscapes", "fairy grove", 2, "magic"),
  a("landscapes", "cursed bog", 2, "magic"),
  a("landscapes", "floating isle", 3, "magic"),
  a("landscapes", "mirror lake", 2, "magic"),
  a("landscapes", "dreaming desert", 1, "magic"),
  a("landscapes", "nexus well", 3, "magic"),
  a("landscapes", "witching vale", 2, "magic"),
  a("landscapes", "mana spring", 2, "magic"),
  a("landscapes", "bone orchard", 2, "magic"),

  // Weather
  a("weather", "arcane storm", 3, "magic"),
  a("weather", "starfall", 2, "magic"),
  a("weather", "spellfog", 2, "magic"),
  a("weather", "mana rain", 2, "magic"),
  a("weather", "eclipse wind", 1, "magic"),
  a("weather", "witch wind", 2, "magic"),
  a("weather", "hex hail", 2, "magic"),

  // Objects
  a("objects", "wand", 3, "magic"),
  a("objects", "grimoire", 3, "magic"),
  a("objects", "crystal ball", 2, "magic"),
  a("objects", "amulet", 2, "magic"),
  a("objects", "enchanted ring", 2, "magic"),
  a("objects", "rune stone", 2, "magic"),
  a("objects", "staff", 3, "magic"),
  a("objects", "phylactery", 2, "magic"),
  a("objects", "scrying mirror", 2, "magic"),
  a("objects", "soul jar", 2, "magic"),
  a("objects", "athame", 2, "magic"),
  a("objects", "focus crystal", 2, "magic"),

  // Buildings
  a("buildings", "wizard tower", 3, "magic"),
  a("buildings", "ritual circle", 3, "magic"),
  a("buildings", "enchanted academy", 2, "magic"),
  a("buildings", "sanctum", 2, "magic"),
  a("buildings", "spell vault", 2, "magic"),
  a("buildings", "oracle shrine", 2, "magic"),
  a("buildings", "floating library", 2, "magic"),
  a("buildings", "ley node altar", 3, "magic"),
  a("buildings", "familiar roost", 2, "magic"),

  // Food
  a("food", "elixir", 3, "magic"),
  a("food", "mana fruit", 2, "magic"),
  a("food", "dream wine", 2, "magic"),
  a("food", "starhoney", 1, "magic"),
  a("food", "potion broth", 2, "magic"),
  a("food", "witch's brew", 2, "magic"),
  a("food", "mana bread", 2, "magic"),
  a("food", "binding tea", 2, "magic"),

  // Occupations
  a("occupations", "wizard", 3, "magic"),
  a("occupations", "witch", 3, "magic"),
  a("occupations", "familiar keeper", 2, "magic"),
  a("occupations", "rune scribe", 2, "magic"),
  a("occupations", "oracle", 2, "magic"),
  a("occupations", "apprentice", 2, "magic"),
  a("occupations", "enchanter", 2, "magic"),
  a("occupations", "warlock", 2, "magic"),
  a("occupations", "curse breaker", 2, "magic"),
  a("occupations", "ley walker", 2, "magic"),
  a("occupations", "summoner", 2, "magic"),
  a("occupations", "hex weaver", 2, "magic"),

  // Phenomena
  a("phenomena", "curse", 3, "magic"),
  a("phenomena", "enchantment", 3, "magic"),
  a("phenomena", "prophecy", 2, "magic"),
  a("phenomena", "transmutation", 2, "magic"),
  a("phenomena", "true name", 3, "magic"),
  a("phenomena", "wild magic", 2, "magic"),
  a("phenomena", "soul bond", 2, "magic"),
  a("phenomena", "hex", 2, "magic"),
  a("phenomena", "scrying", 2, "magic"),
  a("phenomena", "planar rift", 2, "magic"),

  // Social
  a("social", "coven", 3, "magic"),
  a("social", "spell duel", 3, "magic"),
  a("social", "binding vow", 2, "magic"),
  a("social", "arcane guild", 2, "magic"),
  a("social", "naming rite", 2, "magic"),
  a("social", "conjurer's pact", 2, "magic"),
  a("social", "familiar pact", 2, "magic"),
  a("social", "arcane tribunal", 2, "magic")
];

export const MAGIC_HOOKS = [
  // Behavior
  h("behavior", "it casts itself when named", "magic"),
  h("behavior", "it whispers unfinished spells", "magic"),
  h("behavior", "it rewrites runes overnight", "magic"),
  h("behavior", "it answers only in riddles", "magic"),
  h("behavior", "it blooms when a charm is spoken", "magic"),
  h("behavior", "it leaks mana when startled", "magic"),
  h("behavior", "it hums along ley lines", "magic"),
  h("behavior", "it turns pages of empty grimoires", "magic"),

  // Habitat
  h("habitat", "it sleeps on ley lines", "magic"),
  h("habitat", "it hides in unfinished grimoires", "magic"),
  h("habitat", "it nests inside crystal balls", "magic"),
  h("habitat", "it thrives in ritual circles", "magic"),
  h("habitat", "it drifts between dream and waking", "magic"),
  h("habitat", "it roosts in spell vaults", "magic"),
  h("habitat", "it pools in scrying mirrors", "magic"),
  h("habitat", "it roots in cursed bogs", "magic"),

  // Material
  h("material", "it's condensed starlight", "magic"),
  h("material", "it's woven from wishes", "magic"),
  h("material", "it's solidified mana", "magic"),
  h("material", "it's ink that casts itself", "magic"),
  h("material", "it's glass blown from prophecy", "magic"),
  h("material", "it's carved rune-stone", "magic"),
  h("material", "it's braided ley-thread", "magic"),

  // Scale
  h("scale", "one word of it remakes a kingdom", "magic"),
  h("scale", "it fits on a wand tip", "magic"),
  h("scale", "it fills an entire sanctum", "magic"),
  h("scale", "it shrinks to a single rune", "magic"),
  h("scale", "it's older than the first spell", "magic"),
  h("scale", "it spans every ley line on the map", "magic"),
  h("scale", "it weighs less than a spell scroll", "magic"),

  // Function
  h("function", "it binds souls to objects", "magic"),
  h("function", "it translates forgotten tongues", "magic"),
  h("function", "it stores unfinished enchantments", "magic"),
  h("function", "it opens portals between names", "magic"),
  h("function", "it measures the strength of a curse", "magic"),
  h("function", "it anchors familiars to their keepers", "magic"),
  h("function", "it reveals hidden true names", "magic"),

  // Relationship
  h("relationship", "it bargains with demons", "magic"),
  h("relationship", "it mentors reckless apprentices", "magic"),
  h("relationship", "it serves only true wizards", "magic"),
  h("relationship", "it rivals every oracle", "magic"),
  h("relationship", "it fears spoken true names", "magic"),
  h("relationship", "it obeys only bound familiars", "magic"),
  h("relationship", "it spurns unmarked grimoires", "magic"),

  // Origin
  h("origin", "it was the first spell ever spoken", "magic"),
  h("origin", "it hatched from a broken wand", "magic"),
  h("origin", "it fell from a dying enchantment", "magic"),
  h("origin", "it was bound by a forgotten coven", "magic"),
  h("origin", "it grew from a wizard's last wish", "magic"),
  h("origin", "it crystallized at a ley nexus", "magic"),
  h("origin", "it bled out of a cracked soul jar", "magic"),

  // Rule
  h("rule", "true names fail near it", "magic"),
  h("rule", "spells reverse when spoken beside it", "magic"),
  h("rule", "wands refuse to work in its shadow", "magic"),
  h("rule", "curses cannot take root near it", "magic"),
  h("rule", "mirrors show possible futures around it", "magic"),
  h("rule", "familiars fall silent within its circle", "magic"),
  h("rule", "mana drains twice as fast beside it", "magic")
];

export const MAGIC_FRAGMENTS = [
  // Substance
  f("substance", "condensed starlight", "magic"),
  f("substance", "wishes", "magic"),
  f("substance", "solidified mana", "magic"),
  f("substance", "prophecy glass", "magic"),
  f("substance", "etched rune-stone", "magic"),
  f("substance", "ley-thread", "magic"),
  f("substance", "curse ash", "magic"),
  f("substance", "true-name ink", "magic"),
  f("substance", "grimoire leather", "magic"),

  // Trait
  f("trait", "glows when named", "magic"),
  f("trait", "never stops humming", "magic"),
  f("trait", "casts no shadow", "magic"),
  f("trait", "drinks mana", "magic"),
  f("trait", "rewrites itself", "magic"),
  f("trait", "remembers every spell", "magic"),
  f("trait", "refuses false names", "magic"),

  // Place
  f("place", "ley lines", "magic"),
  f("place", "unfinished grimoires", "magic"),
  f("place", "crystal balls", "magic"),
  f("place", "ritual circles", "magic"),
  f("place", "spell vaults", "magic"),
  f("place", "scrying mirrors", "magic"),
  f("place", "cursed bogs", "magic"),
  f("place", "familiar roosts", "magic"),
  f("place", "nexus wells", "magic"),

  // Verb
  f("verb", "casts itself", "magic"),
  f("verb", "whispers unfinished spells", "magic"),
  f("verb", "rewrites runes", "magic"),
  f("verb", "leaks mana", "magic"),
  f("verb", "hums along ley lines", "magic"),
  f("verb", "answers in riddles", "magic"),

  // Trigger
  f("trigger", "when named aloud", "magic"),
  f("trigger", "during eclipses", "magic"),
  f("trigger", "under full moons", "magic"),
  f("trigger", "when a curse is spoken", "magic"),
  f("trigger", "at ley crossings", "magic"),
  f("trigger", "after midnight chimes", "magic"),

  // Agent
  f("agent", "demons", "magic"),
  f("agent", "reckless apprentices", "magic"),
  f("agent", "true wizards", "magic"),
  f("agent", "oracles", "magic"),
  f("agent", "bound familiars", "magic"),
  f("agent", "ley walkers", "magic"),

  // Bond
  f("bond", "bargains with", "magic"),
  f("bond", "mentors", "magic"),
  f("bond", "serves", "magic"),
  f("bond", "rivals", "magic"),
  f("bond", "fears", "magic"),

  // useAs
  f("useAs", "a focus", "magic"),
  f("useAs", "a curse gauge", "magic"),
  f("useAs", "a true-name seal", "magic"),
  f("useAs", "a ley compass", "magic"),

  // Does
  f("does", "binds souls to objects", "magic"),
  f("does", "translates forgotten tongues", "magic"),
  f("does", "stores unfinished enchantments", "magic"),
  f("does", "opens portals between names", "magic"),
  f("does", "measures curse strength", "magic"),
  f("does", "anchors familiars to keepers", "magic"),
  f("does", "reveals hidden true names", "magic"),

  // Size
  f("size", "a wand tip", "magic"),
  f("size", "an entire sanctum", "magic"),
  f("size", "a single rune", "magic"),
  f("size", "a kingdom", "magic"),
  f("size", "every ley line on the map", "magic"),

  // Source
  f("source", "a broken wand", "magic"),
  f("source", "a wizard's last wish", "magic"),
  f("source", "a dying enchantment", "magic"),
  f("source", "a forgotten coven's vow", "magic"),
  f("source", "a ley nexus", "magic"),
  f("source", "a cracked soul jar", "magic"),
  f("source", "the first spoken spell", "magic"),

  // Force
  f("force", "true names", "magic"),
  f("force", "spells", "magic"),
  f("force", "wands", "magic"),
  f("force", "curses", "magic"),
  f("force", "familiars", "magic"),
  f("force", "mana", "magic"),
  f("force", "grimoires", "magic"),

  // Effect (modal)
  f("effect", "will fail", "magic"),
  f("effect", "will reverse", "magic"),
  f("effect", "will refuse to work", "magic"),
  f("effect", "cannot take root", "magic"),
  f("effect", "will drain twice as fast", "magic"),
  f("effect", "will fall silent", "magic"),
  f("effect", "will show possible futures", "magic")
];

export const MAGIC_PATTERNS = [
  p("material", "it's spun from {substance}", "magic"),
  p("material", "it's etched in {substance}", "magic"),
  p("material", "it's {substance} that {trait}", "magic"),
  p("habitat", "it sleeps on {place}", "magic"),
  p("habitat", "it nests inside {place}", "magic"),
  p("habitat", "it pools in {place}", "magic"),
  p("behavior", "it {verb} {trigger}", "magic"),
  p("behavior", "it only {verb} {trigger}", "magic"),
  p("relationship", "it {bond} {agent}", "magic"),
  p("relationship", "it still {bond} {agent}", "magic"),
  p("function", "it {does}", "magic"),
  p("function", "covens keep it as {useAs}", "magic"),
  p("scale", "it shrinks to {size}", "magic"),
  p("origin", "it hatched from {source}", "magic"),
  p("origin", "it crystallized at {source}", "magic"),
  p("rule", "{force} {effect} near it", "magic"),
  p("rule", "{force} {effect} in its shadow", "magic")
];
