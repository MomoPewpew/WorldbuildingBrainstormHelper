import {
  MEDIEVAL_HOOKS,
  CYBERPUNK_HOOKS,
  SCIFI_HOOKS,
  STEAMPUNK_HOOKS,
  MAGIC_HOOKS
} from "@/data/packs";
import { makeHook as h } from "@/data/makeLut";
import type { Hook, HookType } from "@/data/types";

export type { Hook, HookType } from "@/data/types";

export const HOOK_TYPES: HookType[] = [
  "behavior",
  "habitat",
  "material",
  "scale",
  "function",
  "relationship",
  "origin",
  "rule"
];

export const HOOK_TYPE_LABELS: Record<HookType, string> = {
  behavior: "Behavior",
  habitat: "Habitat",
  material: "Material",
  scale: "Scale",
  function: "Function",
  relationship: "Relationship",
  origin: "Origin",
  rule: "Rule"
};

export const HOOKS: Hook[] = [
  // Behavior (~15)
  h("behavior", "it migrates"),
  h("behavior", "it sleeps for years at a time"),
  h("behavior", "it sings at dawn"),
  h("behavior", "it hunts in silence"),
  h("behavior", "it grows overnight"),
  h("behavior", "it sheds its skin every season"),
  h("behavior", "it walks backward"),
  h("behavior", "it only appears during funerals"),
  h("behavior", "it follows strangers home"),
  h("behavior", "it freezes when watched"),
  h("behavior", "it blooms when lied to"),
  h("behavior", "it drifts toward arguments"),
  h("behavior", "it forgets its own name each morning"),
  h("behavior", "it collects lost keys"),
  h("behavior", "it dances before storms"),

  // Habitat (~14)
  h("habitat", "it lives underwater"),
  h("habitat", "it grows in the sky"),
  h("habitat", "it nests inside clocks"),
  h("habitat", "it thrives only in libraries"),
  h("habitat", "it appears in mirrors"),
  h("habitat", "it hides between heartbeats"),
  h("habitat", "it roots in abandoned temples"),
  h("habitat", "it drifts through space"),
  h("habitat", "it pools in doorways"),
  h("habitat", "it lives inside names"),
  h("habitat", "it blooms on battlefields"),
  h("habitat", "it settles wherever vows are broken"),
  h("habitat", "it forms under bridges at midnight"),
  h("habitat", "it only exists in border towns"),

  // Material (~14)
  h("material", "it's made of condensed magic"),
  h("material", "it's pure glass"),
  h("material", "it's living bone"),
  h("material", "it's woven from memory"),
  h("material", "it's liquid metal"),
  h("material", "it's fossilized light"),
  h("material", "it's compacted sound"),
  h("material", "it's smoke that holds a shape"),
  h("material", "it's salt that never melts"),
  h("material", "it's ink that remembers"),
  h("material", "it's frozen time"),
  h("material", "it's ash that still burns"),
  h("material", "it's silk spun from shadows"),
  h("material", "it's stone that breathes"),

  // Scale (~12)
  h("scale", "it's the size of a city"),
  h("scale", "it fits in a pocket"),
  h("scale", "it's alive"),
  h("scale", "it's older than the mountains"),
  h("scale", "it spans continents"),
  h("scale", "it can be worn as a ring"),
  h("scale", "one of them covers the horizon"),
  h("scale", "it's microscopic until angered"),
  h("scale", "it shrinks when named"),
  h("scale", "it's as tall as silence"),
  h("scale", "entire forests grow on its back"),
  h("scale", "it outlives every empire"),

  // Function (~14)
  h("function", "it's used like a compass"),
  h("function", "people use it as currency"),
  h("function", "it stores secrets"),
  h("function", "it measures guilt"),
  h("function", "it opens locked doors"),
  h("function", "it predicts harvests"),
  h("function", "it carries messages between towns"),
  h("function", "it heals wounds"),
  h("function", "it marks ownership"),
  h("function", "it tells the time of death"),
  h("function", "it's used to swear oaths"),
  h("function", "it lights the way for the lost"),
  h("function", "it seals borders"),
  h("function", "it pollinates memories"),

  // Relationship (~14)
  h("relationship", "it farms its prey"),
  h("relationship", "it bargains with travelers"),
  h("relationship", "it worships the moon"),
  h("relationship", "it fears children"),
  h("relationship", "it serves the dead"),
  h("relationship", "it trades in forgotten names"),
  h("relationship", "it protects liars"),
  h("relationship", "it obeys only the hungry"),
  h("relationship", "it hates kings"),
  h("relationship", "it loves storms"),
  h("relationship", "it adopts orphans"),
  h("relationship", "it rivals the sun"),
  h("relationship", "it partners with thieves"),
  h("relationship", "it mourns every harvest"),

  // Origin (~12)
  h("origin", "it's actually a fossil"),
  h("origin", "it was a god's discarded tool"),
  h("origin", "it grew from a buried oath"),
  h("origin", "it fell from a dying star"),
  h("origin", "it was once an ocean"),
  h("origin", "it hatched from a sealed letter"),
  h("origin", "it was carved by dragons"),
  h("origin", "it formed from collective grief"),
  h("origin", "it used to be a city"),
  h("origin", "it is the shed skin of a season"),
  h("origin", "it was planted by refugees"),
  h("origin", "it is a leftover from creation"),

  // Rule (~14)
  h("rule", "fire freezes around it"),
  h("rule", "shadows produce light near it"),
  h("rule", "time flows uphill beside it"),
  h("rule", "water refuses to wet it"),
  h("rule", "sounds reverse when it passes"),
  h("rule", "gravity loosens in its presence"),
  h("rule", "names lose meaning near it"),
  h("rule", "maps redraw themselves around it"),
  h("rule", "sleep is impossible beside it"),
  h("rule", "debts cancel in its shadow"),
  h("rule", "blood turns to ink on contact"),
  h("rule", "doors open only outward near it"),
  h("rule", "mirrors show the past beside it"),
  h("rule", "coins flip forever in its orbit"),

  ...MEDIEVAL_HOOKS,
  ...CYBERPUNK_HOOKS,
  ...SCIFI_HOOKS,
  ...STEAMPUNK_HOOKS,
  ...MAGIC_HOOKS
];
