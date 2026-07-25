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
  p("material", "it's carved from {substance}"),
  p("material", "it's spun from {substance}"),
  p("material", "it's coated in {substance}"),
  p("material", "it's hollow and filled with {substance}"),

  // Habitat
  p("habitat", "it lives in {place}"),
  p("habitat", "it nests inside {place}"),
  p("habitat", "it thrives only in {place}"),
  p("habitat", "it hides in {place}"),
  p("habitat", "it appears in {place}"),
  p("habitat", "it grows in {place}"),
  p("habitat", "it roots in {place}"),
  p("habitat", "it sleeps in {place}"),
  p("habitat", "it hunts through {place}"),
  p("habitat", "it waits in {place}"),
  p("habitat", "it only exists in {place}"),
  p("habitat", "it pools in {place}"),

  // Behavior
  p("behavior", "it {verb}"),
  p("behavior", "it {verb} {trigger}"),
  p("behavior", "it only {verb} {trigger}"),
  p("behavior", "it always {verb} {trigger}"),

  // Relationship
  p("relationship", "it {bond} {agent}"),
  p("relationship", "it secretly {bond} {agent}"),
  p("relationship", "it openly {bond} {agent}"),
  p("relationship", "it still {bond} {agent}"),
  p("relationship", "it no longer {bond} {agent}"),

  // Function
  p("function", "it {does}"),
  p("function", "people use it as {useAs}"),
  p("function", "it's used like {useAs}"),
  p("function", "it's kept as {useAs}"),
  p("function", "towns keep it as {useAs}"),
  p("function", "only elders know it {does}"),

  // Scale
  p("scale", "it's the size of {size}"),
  p("scale", "it fits in {size}"),
  p("scale", "it's older than {size}"),
  p("scale", "one of them covers {size}"),
  p("scale", "it shrinks to {size}"),
  p("scale", "it grows to {size}"),
  p("scale", "it weighs as much as {size}"),
  p("scale", "it lasts as long as {size}"),
  p("scale", "it stretches across {size}"),

  // Origin
  p("origin", "it's actually {source}"),
  p("origin", "it grew from {source}"),
  p("origin", "it fell from {source}"),
  p("origin", "it was once {source}"),
  p("origin", "it formed from {source}"),
  p("origin", "it was born from {source}"),
  p("origin", "it was built from {source}"),
  p("origin", "it escaped from {source}"),
  p("origin", "it was left behind by {source}"),
  p("origin", "it hatched from {source}"),

  // Rule
  p("rule", "{force} {effect} near it"),
  p("rule", "{force} {effect} around it"),
  p("rule", "{force} {effect} beside it"),
  p("rule", "{force} {effect} in its shadow"),
  p("rule", "{force} {effect} when it passes"),
  p("rule", "{force} {effect} on contact with it"),
  p("rule", "{force} {effect} inside it"),
  p("rule", "{force} {effect} wherever it rests"),

  ...MEDIEVAL_PATTERNS,
  ...CYBERPUNK_PATTERNS,
  ...SCIFI_PATTERNS,
  ...STEAMPUNK_PATTERNS,
  ...MAGIC_PATTERNS
];
