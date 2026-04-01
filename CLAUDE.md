# MoO Design System - Claude Instructions

## Design System Registry

`ds-registry.md` is the **single source of truth** for applying the MoO design system to wireframes and prototypes. Always reference it before building or modifying any UI.

It contains:
- **Tokens** — colors, typography (Source Sans Pro), spacing, radii, shadows
- **Component keys** — Figma component set keys with variant names for import via Plugin API
- **Icon keys** — 629 icons across 27 categories from the iconography file

## Workflow

1. **Read `ds-registry.md` first** when creating or updating any HTML prototype or Figma plugin output.
2. Use the token values (hex colors, font sizes, spacing) defined there — do not hardcode values that differ from the registry.
3. Reference component keys when working with the Figma Plugin API (`figma.importComponentByKeyAsync`).
4. For icons, look up the key in the registry or search the icon file (`PANnuPSeOJ5BkW3XDyt2RG`) by name.

## File Structure

- `ds-registry.md` — Design system registry (tokens, components, icons)
- `docs/` — HTML prototypes and component previews (served via GitHub Pages from `/docs`)
- `docs/shared.css` — Shared stylesheet across prototype pages
