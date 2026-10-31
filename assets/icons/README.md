# Nawy Icon Assets

## Approved source

**Google Material Symbols — Outlined SVG**

- Upstream repository: https://github.com/google/material-design-icons
- Browser/library: https://fonts.google.com/icons
- Upstream asset path: `symbols/web/<icon-name>/materialsymbolsoutlined/<icon-name>_24px.svg`
- License: Apache License 2.0
- Default visual baseline: 24×24 SVG.

## Usage rules

- Use local SVG files, checked into the consuming product repository.
- Convert SVG files to React components with `vite-plugin-svgr` and import using `?react`.
- Prefer the Outlined set consistently. Do not combine styles from different packs in one product screen.
- Use currentColor/fill inheritance for theme-aware monochrome icons; don't hardcode brand colors inside paths.
- Use `aria-hidden="true"` for decorative icons and label icon-only buttons at the button level.
- Emoji, WhatsApp stickers, emoji fonts, and random icon packs are not accepted as UI icons.
- If no established icon communicates the meaning, use a text label rather than inventing a confusing glyph.
- Keep source path and Apache-2.0 license information in the product repository whenever icons are vendored.

## Included starter sample

The React starter includes a single Home icon copied from Google's Material Symbols Outlined 24px SVG to demonstrate the required format and import workflow. It is not intended to be the complete Nawy icon set.
