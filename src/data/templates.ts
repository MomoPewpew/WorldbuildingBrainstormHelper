export type TemplateId = "direct" | "falseBelief" | "mistakenIdentity";

export type Template = {
  id: TemplateId;
  name: string;
  /** Placeholders: {anchor}, {hook}, {anchor2} */
  pattern: string;
  /** Optional second line (e.g. open prompt). */
  prompt?: string;
  /** Whether this template needs a second anchor and ignores hooks. */
  needsAnchor2?: boolean;
  /** Whether this template uses a hook phrase. */
  needsHook?: boolean;
};

export const TEMPLATES: Template[] = [
  {
    id: "direct",
    name: "Direct combination",
    pattern: "It's {anchor}, but {hook}.",
    needsHook: true
  },
  {
    id: "falseBelief",
    name: "False belief",
    // Filled specially in generate.ts for grammar; pattern kept for reference.
    pattern: "People think this {anchor} {hook}.",
    prompt: "But actually…",
    needsHook: true
  },
  {
    id: "mistakenIdentity",
    name: "Mistaken identity",
    pattern: "It looks like {anchor}, but it's actually {anchor2}.",
    needsAnchor2: true,
    needsHook: false
  }
];

export const TEMPLATE_BY_ID = Object.fromEntries(
  TEMPLATES.map((t) => [t.id, t])
) as Record<TemplateId, Template>;
