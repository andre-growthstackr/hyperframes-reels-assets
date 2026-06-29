# frame.md — GrowthStackr video aesthetic (HyperFrames)

This is the **aesthetic source of truth for video** (not a webpage). Every asset in this
repo re-skins against this file: colours and typography are read from CSS variables, so
swapping this doc's tokens changes the look of every component without touching structure.

> Building for **temporal**, not spatial. The eye stays still on the frame; information is
> fed over time by motion. Maximise the frame, one idea on screen at a time, motion carries
> the meaning. If it looks like a webpage, it's wrong.

## Canvas
- **9:16, 1080 × 1920**, dark by default.
- `html, body { width:1080px; height:1920px; overflow:hidden }`.
- Root element is the HyperFrames composition container (see "HyperFrames contract" below).

## Colour tokens (the re-skin surface)
```css
:root{
  --canvas:#050505;   /* PRIMARY canvas — dark mode is default */
  --ink:#0a0a0a;
  --charcoal:#1c1f22; /* elevated surfaces, caption pills */
  --slate:#344054;    /* borders on dark */
  --offwhite:#f0f0f0; /* body text on dark */
  --white:#ffffff;
  --cream:#fafafa;    /* light-mode canvas (occasional) */
  --coral:#ff5b49;    /* HERO accent: key number, pill, highlight box, underline, CTA */
  --violet:#7f56d9;   /* secondary accent */
  --deep-purple:#6941c6; /* tertiary, links */
}
```
- **Coral is the one hero colour.** Use it on the single key element per frame (the hero
  number, a highlight box behind a word, an underline, the CTA). Target ~8–10% of the
  surface. Never flood it.
- **Light mode** (`--cream` canvas, near-black text, coral accent) is occasional — list
  cards and concept cards read well light. Default dark.

## Typography
- **Primary — Inter, Medium (500):** headlines, labels, body, captions. Weights 400/500/700/800.
- **Accent — Instrument Serif, Italic:** ONE key/emotional word per frame for contrast
  (the "*a week*", "*capital*" moment). Never whole paragraphs.
- Pattern: bold Inter statement + Instrument Serif Italic on the outcome word.
```css
/* primary */ font-family:'Inter',system-ui,sans-serif; font-weight:500;
/* accent  */ font-family:'Instrument Serif',Georgia,serif; font-style:italic;
```
- Load: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=Instrument+Serif:ital@1&display=swap`
  (or self-host the woff2 in the consuming project for render-determinism; either works).
- Numbers use `font-variant-numeric: tabular-nums` so counters don't jitter.

## Signature details
- **Caption pill** (the most recognisable element): charcoal `#1c1f22` ~85% opacity, white
  bold Inter, 1–3 word chunks, rounded ~20px, sat at the seam (~50–58% down). A coral pill
  variant for one key word is fine. Never per-word rainbow.
- **Coral highlight box** behind a word (marker fill), **coral underline** under a headline
  word, **coral hero number** in a metric grid.
- **Light-flare** L→R sweep is the signature transition — soft warm bloom, peaks ~0.2–0.3s,
  synced to a swoosh SFX. 3–6 per 30–60s short, on real transition points only.
- Cards: ~20–28px radius, subtle border on dark / soft shadow on light.

## Motion (temporal grammar)
- Elements **enter fast, leave fast** (~0.3–0.45s springs: `back.out`, `power3.out`).
- **Continuous gentle Ken Burns** (~2–6% zoom) on talking head and static cards — nothing
  ever truly frozen.
- New spoken line → new visual or fresh push-in. Eye never rests > ~2–3s.
- Numbers **count up** to their value and land with a soft pop. Never fabricate a number —
  use the script's real figure or a placeholder like `[din siffra]`.

## HyperFrames contract (every scene/component must follow)
1. Composition root: `<div id="root" data-composition-id="<id>" data-start="0" data-duration="<s>" data-width="1080" data-height="1920">`.
2. Every timed element has `class="clip"` **and** `data-start`, `data-duration`, `data-track-index`.
3. One paused GSAP timeline per composition, registered on
   `window.__timelines["<id>"] = gsap.timeline({ paused:true })`. The renderer seeks it.
4. Deterministic only — **no** `Math.random()`, `Date.now()`, or network fetches in logic.
5. GSAP from CDN: `https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js`.
6. Track-index convention used across this library: 0–2 footage/audio, 3 scene cards,
   7 logo-flash, 8 captions, 9 flares, 10+ audio beds/SFX.

## What to avoid
- AI-generated stock photos. Off-brand colours. Instrument Serif for paragraphs. Flooded
  coral. Bottom-stuck tiny captions. Per-word rainbow captions. Hard cuts with no motion.
  Loud "MrBeast" energy — GrowthStackr is calm, premium authority.
