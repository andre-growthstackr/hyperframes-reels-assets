# assets/logos/tools/

> Part of the **Track 1 — `assets/`** drop-in layer. See [`../../../LIBRARY.md`](../../../LIBRARY.md)
> and the brand source-of-truth [`../../../frame.md`](../../../frame.md).

## What is this?

Third-party **tool logos** — the marks for the products a short names out loud (Claude, ChatGPT,
n8n, GA4, Meta, Stripe, …). They exist so the video can *flash* a logo the instant a tool is
mentioned, giving the ear-to-eye confirmation without a whole scene.

Formats, in order of preference:

- **SVG preferred** — crisp at any frame scale, tiny in git. `<tool>.svg`.
- **Transparent PNG fallback** — only when no clean SVG exists. `<tool>.png`, transparent ground,
  ≥ 512px on the long edge.

The drop-in checklist is [`logos.manifest.json`](logos.manifest.json): each entry starts with empty
`file` / `source` / `license`, filled in as you actually drop the mark. A logo isn't "in" the
library until its manifest row has a real file **and** a logged licence.

## When to use it?

The **logo-flash** beat (per `frame.md`): when narration names a tool, its logo appears **small and
clean on a neutral ground**, flashed for **~0.5–1s**, then gone. It rides **track-index 7** (the
logo-flash track) in the HyperFrames contract — above scene cards, below captions. One logo at a
time; never a logo wall unless the beat is explicitly a trust-band / catalog (`frame.md` Treatment
7, and even there logos are token-colored `logo-chip`s, not raw marks).

Use it for: tool intros, "we run this on X" name-drops, stack reveals. Don't use it as decoration on
an unrelated plate, and don't stretch, recolor, or add effects to a third-party mark.

## What feeling?

The library target (from `frame.md`): **premium, calm authority, clean, digital, dark-default,
coral used once per frame.** A logo flash should feel like a confident, understated cut — the mark at
its true colors, small, centered, on `--bg` or a soft neutral card, in and out. The coral is spent
elsewhere in the frame; the logo does not borrow it. Never: giant logos, drop-shadowed logos,
spinning logos, a rainbow grid of marks.

## Placement & sizing (frame rules)

- **Ground:** neutral — `--bg` (#050505) or a small `--charcoal` card. Never a coral wash behind it.
- **Size:** small; the mark reads as a chip, not a hero. Center it; keep it inside the 5cqw safe area.
- **Duration:** ~0.5–1s flash on `track-index 7`; hard cut in, fade or hard cut out.
- **Fidelity:** original colors, original proportions. If a mark only exists in one color, use it
  as-is; do not tint it coral to "match".

## Licence / usage rule (non-negotiable)

Third-party logos are **trademarks**. Collect only marks you have the right to use, from the tool's
official brand/press page, and **log every one** in
[`../../../licenses/logo-usage-notes.md`](../../../licenses/logo-usage-notes.md) — source URL, file,
licence / brand-guideline note, date pulled. The `license` and `source` fields in
`logos.manifest.json` must match that log. An un-logged logo does not ship.

## File layout

```
tools/
  logos.manifest.json     ← the drop-in checklist (fill file/source/license per drop)
  claude.svg
  chatgpt.svg
  n8n.svg
  ...                     ← <tool>.svg preferred, <tool>.png transparent fallback
  .gitkeep
```
