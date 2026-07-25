import type { Genre } from "@/data/genres";
import type {
  Anchor,
  AnchorCategory,
  Hook,
  HookFragment,
  HookPattern,
  HookSlot,
  HookType
} from "@/data/types";

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function makeAnchor(
  category: AnchorCategory,
  label: string,
  weight = 1,
  genre: Genre = "generic"
): Anchor {
  return {
    id: `${genre}:${category}:${slugify(label)}`,
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
    id: `${genre}:${type}:${slugify(phrase)}`,
    phrase,
    type,
    genre
  };
}

export function makeFragment(
  slot: HookSlot,
  label: string,
  genre: Genre = "generic"
): HookFragment {
  return {
    id: `${genre}:${slot}:${slugify(label)}`,
    slot,
    label,
    genre
  };
}

export function makeHookPattern(
  type: HookType,
  pattern: string,
  genre: Genre = "generic"
): HookPattern {
  return {
    id: `${genre}:${type}:${slugify(pattern)}`,
    type,
    pattern,
    genre
  };
}
