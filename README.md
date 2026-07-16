# OWC Mijn Omgeving - Child Theme

Example child theme for the [OWC Mijn Omgeving Sage theme](https://github.com/OpenWebconcept/owc-mijn-omgeving-sage-theme/).

> **Requires the parent theme.** This child inherits all templates and PHP from `owc-mijn-omgeving`.

## How it relates to the parent

The child declares the parent via `Template: owc-mijn-omgeving` in [style.css](style.css). WordPress then falls back to the parent for anything the child does not override — templates, PHP classes, views, images.

## Config overrides

Any file in [config/](config/) is merged over the parent's config file of the same name — automatically, no registration. Merge is per top-level key:

- Key present in child → child value replaces parent value.
- Key absent in child → parent value is kept.
- Key set to an **empty array** → the parent key is unset.

Example — [config/theme.php](config/theme.php) swaps the font URL and logo, and inherits the rest of the parent's `theme` config (login menu, footer, etc.).

Only include the config files (and keys) you actually want to change.

## Asset build

The child has its own `package.json` and Vite configs.

```bash
nvm use
pnpm install
pnpm run build   # or: pnpm run watch
```

The `@yardinternet/*` packages come from GitHub Packages — `pnpm install` needs a token with `read:packages` scope: `export GITHUB_TOKEN=ghp_...` (referenced by [.npmrc](.npmrc)).

Output goes to [public/](public/). Entry points live in [vite.config.js](vite.config.js); block sources in `resources/scripts/blocks/` build via [vite-blocks.config.js](vite-blocks.config.js).

### Building from the project root (preferred)

`yard-toolkit` and `@yardinternet/vite-config` auto-detect where they run. From a project root they switch to **root** mode: every theme is discovered and built with one command. This is the preferred way — no duplicate `node_modules`, `package.json`, or lockfiles per theme, a single `pnpm install`, all themes built in one pass with the same tool versions, and one lint/format run across everything.

> **Requires `THEMES_PATH` (coming soon).** The themes location is currently hardcoded to `web/app/themes`. A `THEMES_PATH` env var pointing at the themes folder will be added soon.

## Styles

Entry points import the parent's compiled CSS first, then layer child overrides on top:

- [resources/styles/frontend.css](resources/styles/frontend.css) — imports parent frontend CSS, then `base/config` + `base/variables`.
- [resources/styles/editor.css](resources/styles/editor.css) — same, for the Gutenberg editor.

## Scripts

[resources/scripts/frontend/frontend.js](resources/scripts/frontend/frontend.js) and [resources/scripts/editor/editor.js](resources/scripts/editor/editor.js) import the parent scripts. Add child-specific JS in the same files.

## Blocks

Block sources live in [resources/scripts/blocks/](resources/scripts/blocks/); each is registered in [config/blocks.php](config/blocks.php), which merges over the parent's (parent blocks stay registered).

[example-block](resources/scripts/blocks/example-block/) is a client-side example: its `save()` outputs the markup, so it needs no PHP `render_callback`. `block_type` in the config resolves to the built `public/<name>/block.json`. For server-side blocks (PHP render), see the parent theme.

## Linting & formatting

```bash
pnpm lint:js
pnpm lint:css
pnpm format:js
pnpm format:css
pnpm format:blade
```
