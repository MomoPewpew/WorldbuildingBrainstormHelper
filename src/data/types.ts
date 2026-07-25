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
