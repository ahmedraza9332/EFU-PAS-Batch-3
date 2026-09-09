# Source structure

- `app/` — routes (Next.js App Router). One folder per route segment, each with its own `page.tsx`.
- `components/` — shared reusable UI composed from multiple primitives (e.g. `layout/TopBar`, `layout/ModuleNav`, `layout/Hero`).
- `components/ui/` — small style primitives that map directly to the EFU PAS design system (`Button`, `Tag`, `Card`, ...). Prefer extending these over writing one-off styled elements in a page.
- `lib/` — utilities, constants (e.g. `constants.ts` for the module nav), types, and `lib/data/` for mock/static data until real API integration lands.
- `styles/` — global style additions beyond Tailwind's defaults. `tokens.css` holds the full design-system token set (colors, radii, shadows, fonts) ported from the reference dashboard — treat it as the single source of truth for styling values across every module.

## Design system

All modules (Partners, Policies, Billing & Reconciliation, ...) share one design system defined in `styles/tokens.css`. Tokens are exposed both as CSS custom properties (`var(--color-teal)`) and as Tailwind v4 theme values via `@theme inline`, so they're usable either as `bg-(--color-teal)` in JSX or directly in CSS.

Each section/module can re-theme its accent color by wrapping it in an `.a-teal`, `.a-indigo`, `.a-violet`, `.a-amber`, `.a-green`, or `.a-red` class, which remaps `--accent` / `--tint` / `--accent-ink` locally.

When building a new module page, reuse `components/layout/Hero` for the page header and the `components/ui/*` primitives before introducing new styled elements — this keeps every module visually consistent without needing a shared design review each time.
