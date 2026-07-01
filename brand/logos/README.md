# `brand/logos/` — GrowthStackr logo files

**What is this?**
Drop-in slots for the GrowthStackr brand marks. Add clean **SVG** files here:

| File | What |
|---|---|
| `growthstackr-logo.svg` | Full wordmark logo (primary). |
| `growthstackr-mark.svg` | The standalone mark / icon (no wordmark). |
| `white-logo.svg` | All-white version for dark grounds (the video default). |

**When to use it?**
- Any logo reveal / sting (track-index **7**, per the HyperFrames contract in `frame.md`).
- A closer / CTA plate that signs off with the brand.
- Because this repo is **dark-default**, `white-logo.svg` is the one used most; the coloured
  wordmark is for light-mode (`ground-cream`) scenes only.

**What feeling?**
Premium, calm, restrained. The logo sits quietly; it does not compete with the one coral atom.
On a dark ground use the white mark; never recolour the mark coral (coral is spent on the accent).

## Source & export note

`frame.md` references a **hosted** logo raster:
`https://…website-files.com/…/GrowthStackr-logo.png`. That PNG is a *source* to trace/export a
clean **SVG** from — do not ship the raster into renders (it will not scale crisply at 1080×1920).
Export vector SVGs, optimise them (e.g. `svgo`), and drop them here.

**Log the export in [`licenses/logo-usage-notes.md`](../../licenses/logo-usage-notes.md)** — record
the source URL, that it is GrowthStackr's own mark (first-party, internal use), and the date.

Empty on purpose for now — `.gitkeep` holds the folder until the SVGs land.
