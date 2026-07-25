# Worldbuilding Ideas

A small static webapp that helps you brainstorm worldbuilding prompts by pairing an everyday **anchor** with an incongruent **hook**.

## How it works

Each idea fills one of three templates:

1. **Direct combination** — *It’s [anchor], but [hook].*
2. **False belief** — *People think this [anchor] …* then *But actually…*
3. **Mistaken identity** — *It looks like [anchor], but it’s actually [anchor2].*

You can:

- Generate a batch of ideas (default 10)
- Filter by **genre**, template, anchor category, and hook type
- Lock an anchor or hook from any row and reuse it across new rolls
- Toggle light/dark theme (persisted) and genre buckets (also persisted)

## Genres

Genre buckets are independent toggles. By default only **Generic** is on; enable others as needed:

- Generic
- Medieval
- Cyberpunk
- Sci-fi
- Steampunk
- Magic

Preferences are stored in `localStorage` under `worldbuilding-helper-genres` (theme uses `worldbuilding-helper-theme`).

## Tech

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS + `next-themes`
- Static export (`output: "export"`)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # static site in out/
npm run lint
```

Avoid running `npm run build` while `npm run dev` is using the same `.next` folder — that can corrupt the dev cache. If the app shows a webpack module error, clear it and restart:

```bash
rm -rf .next && npm run dev
```

## Deploy (GitHub Actions → SFTP)

On pushes to `main`, GitHub Actions builds the static export (`out/`) and uploads it via SFTP. Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Secrets

| Secret | Purpose |
|--------|---------|
| `SSH_HOST` | SFTP hostname |
| `SSH_USERNAME` | SFTP username (e.g. `worldbuilding`) |
| `SSH_PRIVATE_KEY` | Full private key file contents (multiline PEM, including `BEGIN` / `END` lines) |
| `SSH_PORT` | Optional, default `22` |
| `SSH_TARGET_DIR` | Optional remote dir (default `files`). Override if your host uses a different path. |

Generate a key and set the secret:

```bash
ssh-keygen -t ed25519 -f worldbuilding_deploy -N "" -C "github-deploy-worldbuilding"

# Copy the PRIVATE key into GitHub → Settings → Secrets → SSH_PRIVATE_KEY
# Paste the entire file, including the BEGIN/END lines (multiline is OK):
cat worldbuilding_deploy
```

On the server, install the matching **public** key:

```bash
sudo mkdir -p /var/www/worldbuilding/.ssh
sudo tee /var/www/worldbuilding/.ssh/authorized_keys >/dev/null < worldbuilding_deploy.pub
sudo chown -R worldbuilding:worldbuilding /var/www/worldbuilding/.ssh
sudo chmod 700 /var/www/worldbuilding/.ssh
sudo chmod 600 /var/www/worldbuilding/.ssh/authorized_keys
```

### Variables (optional)

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Site origin for absolute URLs (e.g. `https://ideas.example.com`) |

## Project layout

```
src/
  app/                 # Next.js routes + global styles
  components/          # UI (randomizer, filters, theme)
  data/
    anchors.ts         # Generic anchors + pack imports
    hooks.ts           # Curated hook phrases + pack imports
    hookFragments.ts   # Slot fillers for composed hooks
    hookPatterns.ts    # Hook phrase templates ({slot} placeholders)
    templates.ts       # Prompt templates
    genres.ts          # Genre ids / labels
    packs/             # Genre-specific LUT packs
    makeLut.ts         # Anchor/hook/fragment/pattern helpers
  lib/
    generate.ts        # Weighted random generation + locks
    genrePreferences.ts
```

## Extending the lookup tables

LUT quality matters more than size. Prefer **basic-level** nouns people can picture instantly (`tree`, `whale`, `castle`) over obscure specifics (`corgi`, `sessile oak`).

Direct combination and false belief hooks are either a curated phrase from `hooks.ts`, or **composed** at roll time from a pattern + fragment LUTs (e.g. `it's made of {substance}` + `memory` → *it's made of memory*). Mistaken identity still double-picks anchors.

### Add a generic entry

In `src/data/anchors.ts`, `src/data/hooks.ts`, `src/data/hookFragments.ts`, or `src/data/hookPatterns.ts`:

```ts
a("animals", "otter", 2);
h("behavior", "it only wakes during eclipses");
f("substance", "river glass");
p("material", "it's carved from {substance}");
```

### Add a genre entry

Edit the matching file under `src/data/packs/` (e.g. `medieval.ts`):

```ts
a("objects", "reliquary", 2, "medieval");
h("rule", "oaths spoken near it bind forever", "medieval");
f("substance", "saint's bones", "medieval");
p("material", "it's wrought of {substance}", "medieval");
```

Helpers (`makeAnchor` / `makeHook` / `makeFragment` / `makeHookPattern` in `src/data/makeLut.ts`):

| Helper | Args |
|--------|------|
| Anchor | `category`, `label`, `weight?`, `genre?` |
| Hook | `type`, `phrase`, `genre?` |
| Fragment | `slot`, `label`, `genre?` |
| Pattern | `type`, `pattern` (with `{slot}`s), `genre?` |

**Anchor categories:** animals, plants, landscapes, weather, objects, buildings, food, occupations, phenomena, social

**Hook types:** behavior, habitat, material, scale, function, relationship, origin, rule

**Fragment slots:** substance, trait, place, verb, trigger, agent, bond, useAs, does, size, source, force, effect

Hooks should usually read naturally after *“It’s X, but …”* (often starting with `it` / `it’s`). Pattern phrases should follow the same convention.

### Add a new genre

1. Add the id to `src/data/genres.ts`
2. Create `src/data/packs/<genre>.ts` and export it from `src/data/packs/index.ts`
3. Spread the new arrays into `ANCHORS` / `HOOKS` / `HOOK_FRAGMENTS` / `HOOK_PATTERNS`

## Design notes

Early brainstorm notes live in `brainstorm.txt` (Anchor + Hook + Consequence framework). v1 ships the randomizer only; consequences / cascade prompts are out of scope for now.
