"use client";

import { useCallback, useEffect, useId, useState } from "react";

import { FilterPill } from "@/components/FilterPill";
import {
  ANCHOR_CATEGORIES,
  ANCHOR_CATEGORY_LABELS,
  type Anchor,
  type AnchorCategory
} from "@/data/anchors";
import { GENRE_LABELS, GENRES, DEFAULT_ENABLED_GENRES, type Genre } from "@/data/genres";
import {
  HOOK_TYPE_LABELS,
  HOOK_TYPES,
  type Hook,
  type HookType
} from "@/data/hooks";
import { TEMPLATES, type TemplateId } from "@/data/templates";
import {
  BATCH_SIZE_OPTIONS,
  DEFAULT_BATCH_SIZE,
  generateIdea,
  type GeneratedIdea
} from "@/lib/generate";
import { readEnabledGenres, writeEnabledGenres } from "@/lib/genrePreferences";

type IdeaRow = {
  id: string;
  idea: GeneratedIdea;
};

type GlobalLocks = {
  anchor: Anchor | null;
  /** Used by Direct / False belief templates. */
  hook: Hook | null;
  /** Used by Mistaken identity (second identity). */
  anchor2: Anchor | null;
};

function newRowId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

function makeRow(idea: GeneratedIdea): IdeaRow {
  return { id: newRowId(), idea };
}

function LockToggle({
  label,
  locked,
  onToggle
}: {
  label: string;
  locked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={locked}
      className={[
        "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-medium transition",
        "backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 dark:focus-visible:ring-white/20",
        locked
          ? "border-teal-600/30 bg-teal-500/15 text-teal-950 dark:border-teal-300/40 dark:bg-teal-300/15 dark:text-teal-50"
          : "border-zinc-300/60 bg-white/70 text-zinc-900 hover:bg-white dark:border-white/10 dark:bg-zinc-950/40 dark:text-zinc-100 dark:hover:bg-zinc-950/60"
      ].join(" ")}
    >
      <span
        aria-hidden="true"
        className={[
          "inline-block h-1.5 w-1.5 rounded-full",
          locked ? "bg-teal-600 dark:bg-teal-300" : "bg-zinc-400 dark:bg-zinc-500"
        ].join(" ")}
      />
      {locked ? `${label} (on)` : label}
    </button>
  );
}

function IdeaCard({
  row,
  index,
  anchorLocked,
  hookLocked,
  onToggleLockAnchor,
  onToggleLockHook,
  onReroll
}: {
  row: IdeaRow;
  index: number;
  anchorLocked: boolean;
  hookLocked: boolean;
  onToggleLockAnchor: () => void;
  onToggleLockHook: () => void;
  onReroll: () => void;
}) {
  const { idea } = row;
  const mistakenIdentity = idea.template.id === "mistakenIdentity";
  const hookLockLabel = mistakenIdentity ? "Lock 2nd" : "Lock hook";

  return (
    <article
      className={[
        "relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-5",
        "shadow-[0_0_0_1px_rgba(0,0,0,0.03)]",
        "dark:border-white/10 dark:bg-zinc-950 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
      ].join(" ")}
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-[11px] font-medium tabular-nums text-zinc-500 dark:text-zinc-500">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="truncate text-[11px] text-zinc-500 dark:text-zinc-500">
          {GENRE_LABELS[idea.anchor.genre]}
          {" · "}
          {idea.template.name}
          {" · "}
          {mistakenIdentity
            ? "second identity"
            : idea.hook
              ? HOOK_TYPE_LABELS[idea.hook.type]
              : "—"}
          {" · "}
          {ANCHOR_CATEGORY_LABELS[idea.anchor.category]}
        </p>
      </div>
      <p className="text-lg font-medium leading-snug tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-xl">
        {idea.text}
      </p>
      {idea.prompt ? (
        <p className="mt-2 text-sm italic text-zinc-600 dark:text-zinc-400">
          {idea.prompt}
        </p>
      ) : null}

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={onReroll}
          className={[
            "inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-xs font-medium transition",
            "bg-zinc-900 text-zinc-50 hover:bg-black",
            "dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 dark:focus-visible:ring-white/20"
          ].join(" ")}
        >
          Reroll
        </button>
        <LockToggle
          label="Lock anchor"
          locked={anchorLocked}
          onToggle={onToggleLockAnchor}
        />
        <LockToggle
          label={hookLockLabel}
          locked={hookLocked}
          onToggle={onToggleLockHook}
        />
      </div>
    </article>
  );
}

function asPrevious(locks: GlobalLocks): GeneratedIdea | null {
  if (!locks.anchor && !locks.hook && !locks.anchor2) return null;
  return {
    template: TEMPLATES[0],
    anchor: locks.anchor ?? {
      id: "_",
      label: "_",
      category: "objects",
      genre: "generic"
    },
    hook: locks.hook,
    anchor2: locks.anchor2,
    text: "",
    prompt: null
  };
}

function rowUsesLockedHook(idea: GeneratedIdea, locks: GlobalLocks): boolean {
  if (idea.template.id === "mistakenIdentity") {
    return Boolean(locks.anchor2 && idea.anchor2?.id === locks.anchor2.id);
  }
  return Boolean(locks.hook && idea.hook?.id === locks.hook.id);
}

export function IdeaRandomizer() {
  const countInputId = useId();
  const [rows, setRows] = useState<IdeaRow[]>([]);
  const [batchSize, setBatchSize] = useState(DEFAULT_BATCH_SIZE);
  const [locks, setLocks] = useState<GlobalLocks>({
    anchor: null,
    hook: null,
    anchor2: null
  });
  const [enabledGenres, setEnabledGenres] = useState<Genre[]>(DEFAULT_ENABLED_GENRES);
  const [genresHydrated, setGenresHydrated] = useState(false);
  const [category, setCategory] = useState<AnchorCategory | null>(null);
  const [hookType, setHookType] = useState<HookType | null>(null);
  const [templateId, setTemplateId] = useState<TemplateId | null>(null);

  const rollOne = useCallback(() => {
    const previous = asPrevious(locks);
    return generateIdea(
      { genres: enabledGenres, category, hookType, templateId },
      {
        lockAnchor: Boolean(locks.anchor),
        lockHook: Boolean(locks.hook || locks.anchor2),
        previous
      }
    );
  }, [enabledGenres, category, hookType, templateId, locks]);

  useEffect(() => {
    const stored = readEnabledGenres();
    setEnabledGenres(stored);
    setRows(
      Array.from({ length: batchSize }, () =>
        makeRow(
          generateIdea({
            genres: stored,
            category,
            hookType,
            templateId
          })
        )
      )
    );
    setGenresHydrated(true);
    // Initial hydrate + first roll only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!genresHydrated) return;
    writeEnabledGenres(enabledGenres);
  }, [enabledGenres, genresHydrated]);

  const toggleGenre = (g: Genre) => {
    setEnabledGenres((prev) => {
      if (prev.includes(g)) {
        if (prev.length === 1) return prev; // keep at least one bucket on
        return prev.filter((x) => x !== g);
      }
      return [...prev, g];
    });
  };
  const onNewIdeas = () => {
    setRows(Array.from({ length: batchSize }, () => makeRow(rollOne())));
  };

  const toggleLockAnchor = (idea: GeneratedIdea) => {
    setLocks((prev) => {
      if (prev.anchor?.id === idea.anchor.id) {
        return { ...prev, anchor: null };
      }
      return { ...prev, anchor: idea.anchor };
    });
  };

  const toggleLockHook = (idea: GeneratedIdea) => {
    setLocks((prev) => {
      if (idea.template.id === "mistakenIdentity") {
        if (!idea.anchor2) return prev;
        if (prev.anchor2?.id === idea.anchor2.id) {
          return { ...prev, anchor2: null };
        }
        // Prefer this row's second identity; clear phrase lock so it doesn't fight.
        return { ...prev, anchor2: idea.anchor2, hook: null };
      }
      if (!idea.hook) return prev;
      if (prev.hook?.id === idea.hook.id) {
        return { ...prev, hook: null };
      }
      return { ...prev, hook: idea.hook, anchor2: null };
    });
  };

  const hasAnyLock = Boolean(locks.anchor || locks.hook || locks.anchor2);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Worldbuilding ideas
        </h1>
        <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
          Roll everyday anchors with incongruent hooks. Lock an anchor or hook
          from any row to reuse it across all new generations.
        </p>
      </div>

      <div className="space-y-5">
        <FilterGroup label="Genre">
          {GENRES.map((g) => (
            <FilterPill
              key={g}
              label={GENRE_LABELS[g]}
              hashKey={g}
              toggle
              selected={enabledGenres.includes(g)}
              onClick={() => toggleGenre(g)}
            />
          ))}
        </FilterGroup>

        <FilterGroup label="Template">
          <FilterPill
            label="Any"
            neutral
            selected={templateId === null}
            onClick={() => setTemplateId(null)}
          />
          {TEMPLATES.map((t) => (
            <FilterPill
              key={t.id}
              label={t.name}
              hashKey={t.id}
              selected={templateId === t.id}
              onClick={() => setTemplateId(t.id)}
            />
          ))}
        </FilterGroup>

        <FilterGroup label="Anchor category">
          <FilterPill
            label="Any"
            neutral
            selected={category === null}
            onClick={() => setCategory(null)}
          />
          {ANCHOR_CATEGORIES.map((c) => (
            <FilterPill
              key={c}
              label={ANCHOR_CATEGORY_LABELS[c]}
              hashKey={c}
              selected={category === c}
              onClick={() => setCategory(c)}
            />
          ))}
        </FilterGroup>

        <FilterGroup label="Hook type">
          <FilterPill
            label="Any"
            neutral
            selected={hookType === null}
            onClick={() => setHookType(null)}
          />
          {HOOK_TYPES.map((t) => (
            <FilterPill
              key={t}
              label={HOOK_TYPE_LABELS[t]}
              hashKey={t}
              selected={hookType === t}
              onClick={() => setHookType(t)}
            />
          ))}
        </FilterGroup>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap items-end gap-3">
          <button
            type="button"
            onClick={onNewIdeas}
            className={[
              "inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition",
              "bg-zinc-900 text-zinc-50 hover:bg-black",
              "dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-white",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 dark:focus-visible:ring-white/20"
            ].join(" ")}
          >
            New ideas
          </button>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor={countInputId}
              className="text-[11px] font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-400"
            >
              Count
            </label>
            <div className="flex flex-wrap items-center gap-2">
              {BATCH_SIZE_OPTIONS.map((n) => (
                <FilterPill
                  key={n}
                  label={String(n)}
                  hashKey={`count-${n}`}
                  selected={batchSize === n}
                  onClick={() => setBatchSize(n)}
                />
              ))}
              <input
                id={countInputId}
                type="number"
                min={1}
                max={50}
                value={batchSize}
                onChange={(e) => {
                  const raw = Number(e.target.value);
                  if (!Number.isFinite(raw)) return;
                  setBatchSize(Math.max(1, Math.min(50, Math.floor(raw))));
                }}
                className={[
                  "w-16 rounded-lg border border-black/10 bg-white/70 px-2 py-1.5 text-sm tabular-nums",
                  "text-zinc-950 shadow-[0_0_0_1px_rgba(0,0,0,0.03)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10",
                  "dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50 dark:focus-visible:ring-white/20"
                ].join(" ")}
                aria-label="Number of ideas to generate"
              />
            </div>
          </div>
        </div>

        {hasAnyLock ? (
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
            <span className="font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
              Locked
            </span>
            {locks.anchor ? (
              <button
                type="button"
                onClick={() => setLocks((p) => ({ ...p, anchor: null }))}
                className="rounded-full border border-teal-600/30 bg-teal-500/15 px-2.5 py-1 font-medium text-teal-950 dark:border-teal-300/40 dark:bg-teal-300/15 dark:text-teal-50"
                title="Unlock anchor"
              >
                Anchor: {locks.anchor.label} ×
              </button>
            ) : null}
            {locks.hook ? (
              <button
                type="button"
                onClick={() => setLocks((p) => ({ ...p, hook: null }))}
                className="rounded-full border border-teal-600/30 bg-teal-500/15 px-2.5 py-1 font-medium text-teal-950 dark:border-teal-300/40 dark:bg-teal-300/15 dark:text-teal-50"
                title="Unlock hook"
              >
                Hook: {locks.hook.phrase} ×
              </button>
            ) : null}
            {locks.anchor2 ? (
              <button
                type="button"
                onClick={() => setLocks((p) => ({ ...p, anchor2: null }))}
                className="rounded-full border border-teal-600/30 bg-teal-500/15 px-2.5 py-1 font-medium text-teal-950 dark:border-teal-300/40 dark:bg-teal-300/15 dark:text-teal-50"
                title="Unlock second anchor"
              >
                2nd: {locks.anchor2.label} ×
              </button>
            ) : null}
          </div>
        ) : null}
      </div>

      <section aria-live="polite" className="space-y-3">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-[11px] font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
            Results
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            {rows.length} idea{rows.length === 1 ? "" : "s"}
          </p>
        </div>

        {rows.length === 0 ? (
          <p className="text-sm text-zinc-500">Generating…</p>
        ) : (
          <ol className="space-y-3">
            {rows.map((row, index) => {
              const anchorLocked = Boolean(
                locks.anchor && row.idea.anchor.id === locks.anchor.id
              );
              const hookLocked = rowUsesLockedHook(row.idea, locks);
              return (
                <li key={row.id}>
                  <IdeaCard
                    row={row}
                    index={index}
                    anchorLocked={anchorLocked}
                    hookLocked={hookLocked}
                    onToggleLockAnchor={() => toggleLockAnchor(row.idea)}
                    onToggleLockHook={() => toggleLockHook(row.idea)}
                    onReroll={() =>
                      setRows((prev) =>
                        prev.map((r) =>
                          r.id === row.id ? makeRow(rollOne()) : r
                        )
                      )
                    }
                  />
                </li>
              );
            })}
          </ol>
        )}
      </section>
    </div>
  );
}

function FilterGroup({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
        {label}
      </div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}
