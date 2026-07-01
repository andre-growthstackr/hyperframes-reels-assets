# `assets/sfx/` — sound effects

Part of GrowthStackr's **video-DNA library** for the `shortform-video` HyperFrames pipeline. Every
sound here answers three questions: **what is it, when do I use it, what does it feel like.** A sound
that can't answer those doesn't belong here yet.

## What

Short, single-hit sound effects — organised by **category subfolder** (`whoosh/`, `pop/`, `ding/`, …),
each with an entry in [`sfx.manifest.json`](./sfx.manifest.json). These are the punctuation of a short:
they mark a beat, they don't score the video (that's `assets/music/`). One sound = one moment.

## When — the beat → SFX mapping

Sound effects are triggered off **beats in the edit**, not sprinkled decoratively. Map the moment to
the category:

| Beat / moment | SFX category | Why |
|---|---|---|
| **Hook** (opening line lands) | `soft-impact/` | soft impact — arrival, not a bang |
| **New section / layout change** | `whoosh/` · `swipe/` | motion carries the eye to the next plate |
| **Positive metric lands** (a good number arrives) | `soft-impact/` + `ding/` | impact seats it, ding confirms it's good |
| **Problem / negative stat** | `negative-tick/` | a downward, "uh-oh" tick — tension, not comedy |
| **List item / label appears** | `pop/` | light pop per item as they stack in |
| **Key point / success confirmed** | `ding/` · `success/` | a clean confirm chime |
| **Big reveal** (the headline result) | `soft-impact/` | the biggest impact of the short, used once |
| **Riser INTO a big result** | `riser/` | a drum/tonal riser building *into* the reveal impact |
| **CTA** (final ask) | `click/` · `tap/` | a subtle hit — committed, not loud |
| **Typing / text being entered on screen** | `typing/` | a short beep/key loop under the action |

Categories map to the manifest `category` field; a beat can layer two (e.g. metric land = a
`soft-impact` under a `ding`).

## Feeling

**Premium, clean, digital.** These sit *under* the voice and reinforce the calm-authority feel from
[`frame.md`](../../frame.md) (dark-default, coral used once, no noise).

- ✅ soft, tight, high-quality, short-decay, tasteful.
- ❌ **NOT meme, NOT childish, NOT MrBeast-loud.** No cartoon boings, no airhorns, no vine-booms, no
  bass-drops that fight the narration.

If in doubt, quieter and fewer.

## Rules

- **~1 sound per 1–3 seconds** of edit. Fewer-but-better always wins.
- **Never two sounds within 0.4s** of each other — they smear into noise.
- **Low volumes: SFX ride at `0.14`–`0.32`**, always **under the voice**. A metric ding is a
  confirmation, not an event.
- Prefer one well-placed hit over three hedged ones. If a beat doesn't clearly need a sound, leave it
  silent — silence is part of the premium feel.
- On the track grid (see `frame.md` §HyperFrames contract), SFX live on **track-index 10+**, above the
  footage/audio (0–2) and captions (8).
- Light-flare / section transitions (`light-flare-transition`) are synced to a `whoosh` — one swoosh
  per real transition, 3–6 per 30–60s short, never more.

## The manifest entry shape

Every sound is logged in [`sfx.manifest.json`](./sfx.manifest.json) as one object. Shape (canonical,
from [`LIBRARY.md`](../../LIBRARY.md)):

```jsonc
{
  "id": "soft_whoosh_01",              // unique slug, referenced by compositions
  "file": "whoosh/soft_whoosh_01.mp3", // path relative to this folder
  "category": "transition",            // maps to the beat table above
  "intensity": "low",                  // low | medium | high — how much it cuts through
  "duration_ms": 420,                  // length in ms
  "best_for": ["layout_change", "asset_enter"], // beats this sound is right for
  "avoid_for": ["click", "metric_reveal"],      // beats it would feel wrong on
  "license": "CC0 / …",                // rights — must be commercial-cleared (see below)
  "feeling": "premium, clean, digital"          // three-word feel check
}
```

- `id` is what a composition references; keep it stable once used.
- `file` points at the audio inside the matching category subfolder.
- `best_for` / `avoid_for` use the beat vocabulary from the mapping table so the AI can pick by intent.
- The file listed in each seed entry below is a **placeholder** — the audio is not added yet.

## Licensing

Log **every** sound you add in [`../../licenses/sfx-licenses.md`](../../licenses/sfx-licenses.md).
Collect **only** sounds cleared for **commercial use** (CC0, purchased licence, or original). If a
sound's rights aren't logged and cleared, it doesn't ship.
