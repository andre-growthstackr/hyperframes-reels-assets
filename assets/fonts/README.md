# `assets/fonts/` — self-hosted woff2

**What is this?**
The self-hosted `woff2` font files that a consuming project ships for **deterministic render**.
HyperFrames renders in headless Chrome; a render-time Google Fonts fetch can race or drift, so the
final render must use local files. Google Fonts CDN is fine for *preview*, not for the final render.

Two families only (see [`brand/fonts/font-notes.md`](../../brand/fonts/font-notes.md) for how they
are used): **Inter** (primary, weight 500 is the workhorse) and **Instrument Serif** (italic accent,
one word per frame).

**When to use it?**
Any final render. Wire these with a local `@font-face` block (sketch in `font-notes.md`), using
`font-display: block` so glyphs never flash a fallback mid-render.

**What feeling?**
The type *is* the brand voice — Inter 500 oversized and restrained, one Instrument Serif italic
word. Getting the exact faces on disk is what keeps that voice pixel-identical across renders.

## Files to drop in

| Filename | Weight / style |
|---|---|
| `inter-400.woff2` | Inter Regular 400 |
| `inter-500.woff2` | Inter Medium 500 — the default display + headline weight |
| `inter-600.woff2` | Inter SemiBold 600 |
| `inter-700.woff2` | Inter Bold 700 |
| `inter-800.woff2` | Inter ExtraBold 800 |
| `instrumentserif-400.woff2` | Instrument Serif Regular 400 (normal) |
| `instrumentserif-italic.woff2` | Instrument Serif Italic 400 — the accent face |

## Source — @fontsource via jsDelivr (NOT Google Fonts CDN)

```
inter-400.woff2              https://cdn.jsdelivr.net/npm/@fontsource/inter@5/files/inter-latin-400-normal.woff2
inter-500.woff2              https://cdn.jsdelivr.net/npm/@fontsource/inter@5/files/inter-latin-500-normal.woff2
inter-600.woff2              https://cdn.jsdelivr.net/npm/@fontsource/inter@5/files/inter-latin-600-normal.woff2
inter-700.woff2              https://cdn.jsdelivr.net/npm/@fontsource/inter@5/files/inter-latin-700-normal.woff2
inter-800.woff2              https://cdn.jsdelivr.net/npm/@fontsource/inter@5/files/inter-latin-800-normal.woff2
instrumentserif-400.woff2    https://cdn.jsdelivr.net/npm/@fontsource/instrument-serif@5/files/instrument-serif-latin-400-normal.woff2
instrumentserif-italic.woff2 https://cdn.jsdelivr.net/npm/@fontsource/instrument-serif@5/files/instrument-serif-latin-400-italic.woff2
```

Rename to the short filenames in the table as you download. Log both licences in
[`licenses/font-licenses.md`](../../licenses/font-licenses.md) — both are SIL OFL (commercial OK,
no attribution required). `.woff2` is heavy-ish binary; prefer Git LFS per the library rules.

Empty on purpose for now — `.gitkeep` holds the folder until the woff2 land.
