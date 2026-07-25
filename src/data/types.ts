import type { Genre } from "@/data/genres";

export type AnchorCategory =
  | "animals"
  | "plants"
  | "landscapes"
  | "weather"
  | "objects"
  | "buildings"
  | "food"
  | "occupations"
  | "phenomena"
  | "social";

export type Anchor = {
  id: string;
  label: string;
  category: AnchorCategory;
  genre: Genre;
  weight?: number;
};

export type HookType =
  | "behavior"
  | "habitat"
  | "material"
  | "scale"
  | "function"
  | "relationship"
  | "origin"
  | "rule";

export type Hook = {
  id: string;
  phrase: string;
  type: HookType;
  genre: Genre;
};

/** Named slots filled when composing a hook from a pattern + fragments. */
export type HookSlot =
  | "substance"
  | "trait"
  | "place"
  | "verb"
  | "trigger"
  | "agent"
  | "bond"
  | "useAs"
  | "does"
  | "size"
  | "source"
  | "force"
  | "effect";

export type HookFragment = {
  id: string;
  slot: HookSlot;
  label: string;
  genre: Genre;
};

/** Pattern with `{slot}` placeholders, e.g. "it's made of {substance}". */
export type HookPattern = {
  id: string;
  type: HookType;
  pattern: string;
  genre: Genre;
};
