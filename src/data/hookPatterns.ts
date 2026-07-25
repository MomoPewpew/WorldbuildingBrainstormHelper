import {
  MEDIEVAL_PATTERNS,
  CYBERPUNK_PATTERNS,
  SCIFI_PATTERNS,
  STEAMPUNK_PATTERNS,
  MAGIC_PATTERNS
} from "@/data/packs";
import { makeHookPattern as p } from "@/data/makeLut";
import type { HookPattern } from "@/data/types";

export type { HookPattern } from "@/data/types";

export const HOOK_PATTERNS: HookPattern[] = [
  // Material
  p("material", "it's made of {substance}"),
  p("material", "it's woven from {substance}"),
  p("material", "it's pure {substance}"),
  p("material", "it's living {substance}"),
  p("material", "it's {substance} that {trait}"),
  p("material", "it's forged from {substance}"),

  // Habitat
  p("habitat", "it lives in {place}"),
  p("habitat", "it nests inside {place}"),
  p("habitat", "it thrives only in {place}"),
  p("habitat", "it hides in {place}"),
  p("habitat", "it appears in {place}"),
  p("habitat", "it grows in {place}"),
  p("habitat", "it roots in {place}"),

  // Behavior
  p("behavior", "it {verb}"),
  p("behavior", "it {verb} {trigger}"),
  p("behavior", "it only {verb} {trigger}"),

  // Relationship
  p("relationship", "it {bond} {agent}"),

  // Function
  p("function", "it {does}"),
  p("function", "people use it as {useAs}"),
  p("function", "it's used like {useAs}"),

  // Scale
  p("scale", "it's the size of {size}"),
  p("scale", "it fits in {size}"),
  p("scale", "it's older than {size}"),
  p("scale", "one of them covers {size}"),
  p("scale", "it shrinks to {size}"),

  // Origin
  p("origin", "it's actually {source}"),
  p("origin", "it grew from {source}"),
  p("origin", "it fell from {source}"),
  p("origin", "it was once {source}"),
  p("origin", "it formed from {source}"),

  // Rule
  p("rule", "{force} {effect} near it"),
  p("rule", "{force} {effect} around it"),
  p("rule", "{force} {effect} beside it"),
  p("rule", "{force} {effect} in its shadow"),

  ...MEDIEVAL_PATTERNS,
  ...CYBERPUNK_PATTERNS,
  ...SCIFI_PATTERNS,
  ...STEAMPUNK_PATTERNS,
  ...MAGIC_PATTERNS
];
