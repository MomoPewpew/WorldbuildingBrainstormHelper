"use client";

function hashString(input: string) {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  }
  return h;
}

const PALETTE = [
  {
    base: "border-fuchsia-500/25 bg-fuchsia-500/10 text-fuchsia-950 hover:bg-fuchsia-500/14 dark:border-fuchsia-500/20 dark:bg-fuchsia-500/10 dark:text-fuchsia-100 dark:hover:bg-fuchsia-500/14",
    selected:
      "border-fuchsia-600/35 bg-fuchsia-500/20 text-fuchsia-950 dark:border-fuchsia-300/40 dark:bg-fuchsia-300/20 dark:text-zinc-50"
  },
  {
    base: "border-teal-600/25 bg-teal-500/10 text-teal-950 hover:bg-teal-500/14 dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-100 dark:hover:bg-teal-500/14",
    selected:
      "border-teal-700/30 bg-teal-500/18 text-teal-950 dark:border-teal-300/40 dark:bg-teal-300/20 dark:text-zinc-50"
  },
  {
    base: "border-sky-600/25 bg-sky-500/10 text-sky-950 hover:bg-sky-500/14 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-100 dark:hover:bg-sky-500/14",
    selected:
      "border-sky-700/30 bg-sky-500/18 text-sky-950 dark:border-sky-300/40 dark:bg-sky-300/20 dark:text-zinc-50"
  },
  {
    base: "border-rose-600/25 bg-rose-500/10 text-rose-950 hover:bg-rose-500/14 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-100 dark:hover:bg-rose-500/14",
    selected:
      "border-rose-700/30 bg-rose-500/18 text-rose-950 dark:border-rose-300/40 dark:bg-rose-300/20 dark:text-zinc-50"
  },
  {
    base: "border-amber-600/25 bg-amber-500/10 text-amber-950 hover:bg-amber-500/14 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-100 dark:hover:bg-amber-500/14",
    selected:
      "border-amber-700/30 bg-amber-500/18 text-amber-950 dark:border-amber-300/40 dark:bg-amber-300/20 dark:text-zinc-50"
  }
] as const;

const NEUTRAL = {
  base: "border-black/10 bg-white/60 text-zinc-800 hover:bg-white dark:border-white/10 dark:bg-zinc-950/40 dark:text-zinc-200 dark:hover:bg-zinc-950/60",
  selected:
    "border-zinc-900/20 bg-zinc-900/10 text-zinc-950 ring-1 ring-black/5 dark:border-white/25 dark:bg-white/15 dark:text-zinc-50 dark:ring-white/10"
};

const OFF = {
  base: "border-black/10 bg-white text-zinc-600 hover:bg-zinc-50 hover:border-black/15 dark:border-white/15 dark:bg-white dark:text-zinc-700 dark:hover:bg-zinc-100",
  selected: ""
};

export function FilterPill({
  label,
  selected,
  onClick,
  hashKey,
  neutral,
  /** Off = white; on = colored. Best for multi-enable genre toggles. */
  toggle
}: {
  label: string;
  selected?: boolean;
  onClick: () => void;
  hashKey?: string;
  neutral?: boolean;
  toggle?: boolean;
}) {
  const color = neutral
    ? NEUTRAL
    : PALETTE[hashString(hashKey ?? label) % PALETTE.length];

  const offClasses = toggle ? OFF.base : color.base;
  const onClasses = toggle
    ? `${color.selected} ring-1 ring-black/5 dark:ring-white/15`
    : `${color.selected} ring-1 ring-white/10 dark:ring-white/10`;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected ? true : false}
      className={[
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium transition",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 dark:focus-visible:ring-white/20",
        selected ? onClasses : `${offClasses}${toggle ? "" : " hover:border-black/20 dark:hover:border-white/20"}`
      ].join(" ")}
    >
      {label}
    </button>
  );
}
