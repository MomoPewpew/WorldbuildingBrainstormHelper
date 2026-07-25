import {
  ANCHORS,
  type Anchor,
  type AnchorCategory
} from "@/data/anchors";
import type { Genre } from "@/data/genres";
import { HOOK_FRAGMENTS } from "@/data/hookFragments";
import { HOOK_PATTERNS } from "@/data/hookPatterns";
import { HOOKS, type Hook, type HookType } from "@/data/hooks";
import {
  TEMPLATES,
  type Template,
  type TemplateId
} from "@/data/templates";
import type { HookFragment, HookPattern } from "@/data/types";

export type GenerateFilters = {
  /** Enabled genre buckets. Empty/undefined = all genres. */
  genres?: Genre[] | null;
  category?: AnchorCategory | null;
  hookType?: HookType | null;
  templateId?: TemplateId | null;
};

export type GenerateLocks = {
  lockAnchor?: boolean;
  lockHook?: boolean;
  previous?: GeneratedIdea | null;
};

export type GeneratedIdea = {
  template: Template;
  anchor: Anchor;
  hook: Hook | null;
  anchor2: Anchor | null;
  text: string;
  prompt: string | null;
};

function pickWeighted<T extends { weight?: number }>(items: T[]): T {
  if (items.length === 0) {
    throw new Error("Cannot pick from an empty list");
  }
  const weights = items.map((item) => item.weight ?? 1);
  const total = weights.reduce((sum, w) => sum + w, 0);
  let roll = Math.random() * total;
  for (let i = 0; i < items.length; i++) {
    roll -= weights[i];
    if (roll <= 0) return items[i];
  }
  return items[items.length - 1];
}

function pickRandom<T>(items: T[]): T {
  if (items.length === 0) {
    throw new Error("Cannot pick from an empty list");
  }
  return items[Math.floor(Math.random() * items.length)];
}

const MASS_NOUNS = new Set([
  "rain",
  "snow",
  "wind",
  "fog",
  "hail",
  "mist",
  "frost",
  "thunder",
  "drought",
  "dew",
  "fire",
  "gravity",
  "shadow",
  "echo",
  "light",
  "silence",
  "sound",
  "magic",
  "death",
  "birth",
  "sleep",
  "hunger",
  "pain",
  "heat",
  "cold",
  "decay",
  "bloom",
  "memory",
  "time",
  "bread",
  "wine",
  "honey",
  "salt",
  "spice",
  "meat",
  "cheese",
  "fruit",
  "grain",
  "tea",
  "coffee",
  "milk",
  "soup",
  "oil",
  "vinegar",
  "grass",
  "moss",
  "algae",
  "war",
  "religion",
  "currency",
  "law",
  "marriage",
  "inheritance",
  "exile",
  "lightning",
  "thunder",
  "aurora",
  "tide"
]);

function withArticle(label: string): string {
  const word = label.trim();
  if (!word) return word;
  if (/^(a|an|the|this|that)\s/i.test(word)) return word;
  if (/\s/.test(word)) return word;
  if (MASS_NOUNS.has(word.toLowerCase())) return word;
  const first = word[0].toLowerCase();
  const article = "aeiou".includes(first) ? "an" : "a";
  return `${article} ${word}`;
}

function fillPattern(
  pattern: string,
  parts: { anchor: string; hook?: string; anchor2?: string }
): string {
  return pattern
    .replaceAll("{anchor}", parts.anchor)
    .replaceAll("{hook}", parts.hook ?? "")
    .replaceAll("{anchor2}", parts.anchor2 ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Adapt a hook phrase so it can follow "People think this {anchor} …". */
function asFalseBeliefPredicate(phrase: string): { predicate: string; usesNear: boolean } {
  const p = phrase.trim();
  if (/^it's\s+/i.test(p)) {
    return { predicate: p.replace(/^it's\s+/i, "is "), usesNear: false };
  }
  if (/^it\s+/i.test(p)) {
    return { predicate: p.replace(/^it\s+/i, ""), usesNear: false };
  }
  if (/^they're\s+/i.test(p)) {
    return { predicate: p.replace(/^they're\s+/i, "are "), usesNear: false };
  }
  if (/^they\s+/i.test(p)) {
    return { predicate: p.replace(/^they\s+/i, ""), usesNear: false };
  }
  // Rule-style clauses ("fire freezes around it") — frame as a local effect.
  return { predicate: p, usesNear: true };
}

function filterAnchors(
  genres?: Genre[] | null,
  category?: AnchorCategory | null
): Anchor[] {
  const genreSet =
    genres && genres.length > 0 ? new Set<Genre>(genres) : null;
  return ANCHORS.filter((a) => {
    if (genreSet && !genreSet.has(a.genre)) return false;
    if (category && a.category !== category) return false;
    return true;
  });
}

function filterHooks(
  genres?: Genre[] | null,
  hookType?: HookType | null
): Hook[] {
  const genreSet =
    genres && genres.length > 0 ? new Set<Genre>(genres) : null;
  return HOOKS.filter((h) => {
    if (genreSet && !genreSet.has(h.genre)) return false;
    if (hookType && h.type !== hookType) return false;
    return true;
  });
}

function filterPatterns(
  genres?: Genre[] | null,
  hookType?: HookType | null
): HookPattern[] {
  const genreSet =
    genres && genres.length > 0 ? new Set<Genre>(genres) : null;
  return HOOK_PATTERNS.filter((p) => {
    if (genreSet && !genreSet.has(p.genre)) return false;
    if (hookType && p.type !== hookType) return false;
    return true;
  });
}

function filterFragments(
  genres?: Genre[] | null,
  slot?: HookFragment["slot"]
): HookFragment[] {
  const genreSet =
    genres && genres.length > 0 ? new Set<Genre>(genres) : null;
  return HOOK_FRAGMENTS.filter((f) => {
    if (genreSet && !genreSet.has(f.genre)) return false;
    if (slot && f.slot !== slot) return false;
    return true;
  });
}

function filterTemplates(templateId?: TemplateId | null): Template[] {
  if (!templateId) return TEMPLATES;
  return TEMPLATES.filter((t) => t.id === templateId);
}

const SLOT_RE = /\{([a-zA-Z]+)\}/g;

function slotsInPattern(pattern: string): string[] {
  const slots: string[] = [];
  for (const match of pattern.matchAll(SLOT_RE)) {
    slots.push(match[1]);
  }
  return slots;
}

/** Compose a hook phrase from a pattern + fragment LUTs. Returns null if a slot is empty. */
function composeHook(
  pattern: HookPattern,
  genres?: Genre[] | null
): Hook | null {
  const slots = slotsInPattern(pattern.pattern);
  const parts: Record<string, string> = {};
  const fragIds: string[] = [];

  for (const slot of slots) {
    const pool = filterFragments(genres, slot as HookFragment["slot"]);
    if (pool.length === 0) return null;
    const frag = pickRandom(pool);
    parts[slot] = frag.label;
    fragIds.push(frag.id);
  }

  let phrase = pattern.pattern;
  for (const [slot, label] of Object.entries(parts)) {
    phrase = phrase.replaceAll(`{${slot}}`, label);
  }
  phrase = phrase.replace(/\s+/g, " ").trim();

  return {
    id: `composed:${pattern.id}:${fragIds.join("+")}`,
    phrase,
    type: pattern.type,
    genre: pattern.genre
  };
}

type HookSource =
  | { kind: "curated"; hook: Hook }
  | { kind: "pattern"; pattern: HookPattern };

function pickComposableHook(
  genres?: Genre[] | null,
  hookType?: HookType | null
): Hook {
  const curated = filterHooks(genres, hookType);
  const patterns = filterPatterns(genres, hookType);

  const sources: HookSource[] = [
    ...curated.map((hook): HookSource => ({ kind: "curated", hook })),
    ...patterns.map((pattern): HookSource => ({ kind: "pattern", pattern }))
  ];

  if (sources.length === 0) {
    throw new Error("No hooks match the current filters");
  }

  // Prefer curated fallback if composition fails (empty slot under tight filters).
  for (let attempt = 0; attempt < 8; attempt++) {
    const source = pickRandom(sources);
    if (source.kind === "curated") return source.hook;
    const composed = composeHook(source.pattern, genres);
    if (composed) return composed;
  }

  if (curated.length > 0) return pickRandom(curated);
  throw new Error("No hooks match the current filters");
}

export function generateIdea(
  filters: GenerateFilters = {},
  locks: GenerateLocks = {}
): GeneratedIdea {
  const templates = filterTemplates(filters.templateId);
  const anchors = filterAnchors(filters.genres, filters.category);
  const hooks = filterHooks(filters.genres, filters.hookType);
  const patterns = filterPatterns(filters.genres, filters.hookType);

  if (anchors.length === 0) {
    throw new Error("No anchors match the current filters");
  }
  if (hooks.length === 0 && patterns.length === 0) {
    throw new Error("No hooks match the current filters");
  }

  const previous = locks.previous ?? null;

  // If template filter is set, always honor it; otherwise keep previous only when both locks hold?
  // Plan: pick template each time (respect filter). Locks only apply to anchor/hook.
  const template = pickRandom(templates);

  let anchor: Anchor;
  if (locks.lockAnchor && previous?.anchor) {
    // Keep locked anchor even if it falls outside the new filters —
    // the lock is intentional. Prefer matching filters when possible.
    const prevInFilter = anchors.some((a) => a.id === previous.anchor.id);
    const filtersRestrict = Boolean(
      filters.category || (filters.genres && filters.genres.length > 0)
    );
    anchor = prevInFilter || !filtersRestrict ? previous.anchor : pickWeighted(anchors);
  } else {
    anchor = pickWeighted(anchors);
  }

  let hook: Hook | null = null;
  let anchor2: Anchor | null = null;

  if (template.needsAnchor2) {
    const others = anchors.filter((a) => a.id !== anchor.id);
    const genreSet =
      filters.genres && filters.genres.length > 0
        ? new Set(filters.genres)
        : null;
    const pool =
      others.length > 0
        ? others
        : ANCHORS.filter(
            (a) => a.id !== anchor.id && (!genreSet || genreSet.has(a.genre))
          );
    if (locks.lockHook && previous?.anchor2) {
      // For mistaken identity, "lock hook" keeps the second identity stable.
      const prevOk = pool.some((a) => a.id === previous.anchor2!.id);
      anchor2 = prevOk ? previous.anchor2 : pickWeighted(pool);
    } else {
      anchor2 = pickWeighted(pool);
    }
  }

  if (template.needsHook !== false && !template.needsAnchor2) {
    if (locks.lockHook && previous?.hook) {
      const prevInFilter = hooks.some((h) => h.id === previous.hook!.id);
      const isComposed = previous.hook.id.startsWith("composed:");
      const filtersRestrict = Boolean(
        filters.hookType || (filters.genres && filters.genres.length > 0)
      );
      hook =
        prevInFilter || isComposed || !filtersRestrict
          ? previous.hook
          : pickComposableHook(filters.genres, filters.hookType);
    } else {
      hook = pickComposableHook(filters.genres, filters.hookType);
    }
  }

  let text: string;
  if (template.id === "falseBelief" && hook) {
    const { predicate, usesNear } = asFalseBeliefPredicate(hook.phrase);
    text = usesNear
      ? `People think that near this ${anchor.label}, ${predicate}.`
      : `People think this ${anchor.label} ${predicate}.`;
  } else {
    text = fillPattern(template.pattern, {
      anchor: withArticle(anchor.label),
      hook: hook?.phrase ?? "",
      anchor2: anchor2 ? withArticle(anchor2.label) : undefined
    });
  }

  return {
    template,
    anchor,
    hook,
    anchor2,
    text,
    prompt: template.prompt ?? null
  };
}

export const DEFAULT_BATCH_SIZE = 10;
export const BATCH_SIZE_OPTIONS = [5, 10, 15, 20] as const;

/** Generate a batch of ideas. Locks apply from `locks.previous` across the whole batch. */
export function generateIdeas(
  count: number = DEFAULT_BATCH_SIZE,
  filters: GenerateFilters = {},
  locks: GenerateLocks = {}
): GeneratedIdea[] {
  const n = Math.max(1, Math.min(50, Math.floor(count)));
  const ideas: GeneratedIdea[] = [];
  // Lock source stays fixed for the batch (previous idea), so every item shares locked parts.
  for (let i = 0; i < n; i++) {
    ideas.push(generateIdea(filters, locks));
  }
  return ideas;
}
