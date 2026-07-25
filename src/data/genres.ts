export type Genre =
  | "generic"
  | "medieval"
  | "cyberpunk"
  | "scifi"
  | "steampunk"
  | "magic";

export const GENRES: Genre[] = [
  "generic",
  "medieval",
  "cyberpunk",
  "scifi",
  "steampunk",
  "magic"
];

export const GENRE_LABELS: Record<Genre, string> = {
  generic: "Generic",
  medieval: "Medieval",
  cyberpunk: "Cyberpunk",
  scifi: "Sci-fi",
  steampunk: "Steampunk",
  magic: "Magic"
};

/** Default enabled genre buckets for the randomizer. */
export const DEFAULT_ENABLED_GENRES: Genre[] = ["generic"];
