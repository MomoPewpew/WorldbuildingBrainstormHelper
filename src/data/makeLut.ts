import type { Genre } from "@/data/genres";
import type { Anchor, AnchorCategory, Hook, HookType } from "@/data/types";

export function makeAnchor(
  category: AnchorCategory,
  label: string,
  weight = 1,
  genre: Genre = "generic"
): Anchor {
  return {
    id: `${genre}:${category}:${label.toLowerCase().replace(/\s+/g, "-")}`,
    label,
    category,
    genre,
    weight
  };
}

export function makeHook(
  type: HookType,
  phrase: string,
  genre: Genre = "generic"
): Hook {
  return {
    id: `${genre}:${type}:${phrase
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")}`,
    phrase,
    type,
    genre
  };
}
