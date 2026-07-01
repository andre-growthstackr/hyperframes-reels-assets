# Font notes — GrowthStackr video-DNA

Two families, carried verbatim from [`frame.md`](../../frame.md). Nothing else.

## Inter — primary (everything)

- **Family:** `Inter, ui-sans-serif, system-ui, sans-serif` (`{typography.font-sans}`).
- **Weights shipped:** 400 Regular, 500 Medium, 700 Bold, 800 ExtraBold.
- **Medium (500) is the workhorse.** All display type is Inter **500** — the wordmark
  (`wordmark-mega` 28cqw), the editorial claims (`display-hero`, `display-claim`), section
  heads, and stat-ledger numerals are all 500. Body-in-frame (`body-frame`) is 400. 700/800 are
  reserved for the bold white caption-pill text and rare emphasis; they are not the display voice.
- **Feature settings:** body and numerals carry `font-feature-settings: 'ss01','cv11'` (alternate
  digits) — load-bearing on the stat-ledger plate.
- **Never** substitute a system sans as the *rendered* face. It ships as a self-hosted woff2.

## Instrument Serif — the italic accent ONLY

- **Family:** `'Instrument Serif', ui-serif, Georgia, serif` (`{typography.font-display}`).
- **Use:** exactly **one word per frame**, set as `<em>` inside `.gs-heading`
  (`display-accent-italic`) — italic, weight 400.
- **Colour:** in the print/frame brand the italic accent is coral. In this **video** repo the
  Instrument-Serif italic accent is set **white** (`{colors.fg}` #ffffff), not coral — coral is
  spent on the one coral atom per frame (pill / highlight / pin-dot) per the Restraint law. Keep
  the italic word white unless a frame explicitly has no other coral atom.
- **Descender clearance:** any headline whose `<em>` word carries `y/g/j/p/q` needs
  `line-height ≥ 1.06` and ~0.35cqw bottom padding so descenders never clip.
- Never fake the italic with `font-style: italic` on Inter — it must be the Instrument Serif face.

## Self-hosting for render determinism (required for final render)

HyperFrames renders in headless Chrome. Google Fonts CDN is acceptable for **preview** only;
for the **final render** the consuming project must self-host woff2 so glyphs are deterministic
and never race a network fetch.

Source the woff2 from **@fontsource via jsDelivr** (NOT the Google Fonts CDN):

```
Inter 400  https://cdn.jsdelivr.net/npm/@fontsource/inter@5/files/inter-latin-400-normal.woff2
Inter 500  https://cdn.jsdelivr.net/npm/@fontsource/inter@5/files/inter-latin-500-normal.woff2
Inter 600  https://cdn.jsdelivr.net/npm/@fontsource/inter@5/files/inter-latin-600-normal.woff2
Inter 700  https://cdn.jsdelivr.net/npm/@fontsource/inter@5/files/inter-latin-700-normal.woff2
Inter 800  https://cdn.jsdelivr.net/npm/@fontsource/inter@5/files/inter-latin-800-normal.woff2

Instrument Serif 400 normal
  https://cdn.jsdelivr.net/npm/@fontsource/instrument-serif@5/files/instrument-serif-latin-400-normal.woff2
Instrument Serif 400 italic
  https://cdn.jsdelivr.net/npm/@fontsource/instrument-serif@5/files/instrument-serif-latin-400-italic.woff2
```

Drop the downloaded files into [`assets/fonts/`](../../assets/fonts/) (see that folder's README
for the exact filenames) and wire them with a local `@font-face` block in the consuming project.

## `@font-face` sketch (self-hosted, `font-display: block` for determinism)

```css
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-display: block;
  src: url("../fonts/inter-500.woff2") format("woff2");
}
@font-face {
  font-family: "Instrument Serif";
  font-style: italic;
  font-weight: 400;
  font-display: block;
  src: url("../fonts/instrumentserif-italic.woff2") format("woff2");
}
```

Log the font licences in [`licenses/font-licenses.md`](../../licenses/font-licenses.md) — both
Inter and Instrument Serif are SIL Open Font License (commercial OK, no attribution required).
