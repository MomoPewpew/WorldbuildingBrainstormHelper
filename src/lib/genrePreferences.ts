import {
  DEFAULT_ENABLED_GENRES,
  GENRES,
  type Genre
} from "@/data/genres";

/** Same persistence style as `worldbuilding-helper-theme` via next-themes. */
export const GENRES_STORAGE_KEY = "worldbuilding-helper-genres";

function isGenre(value: unknown): value is Genre {
  return typeof value === "string" && (GENRES as readonly string[]).includes(value);
}

export function readEnabledGenres(): Genre[] {
  if (typeof window === "undefined") return DEFAULT_ENABLED_GENRES;
  try {
    const raw = window.localStorage.getItem(GENRES_STORAGE_KEY);
    if (!raw) return DEFAULT_ENABLED_GENRES;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return DEFAULT_ENABLED_GENRES;
    const genres = parsed.filter(isGenre);
    return genres.length > 0 ? genres : DEFAULT_ENABLED_GENRES;
  } catch {
    return DEFAULT_ENABLED_GENRES;
  }
}

export function writeEnabledGenres(genres: Genre[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(GENRES_STORAGE_KEY, JSON.stringify(genres));
  } catch {
    // Ignore quota / private-mode failures.
  }
}
