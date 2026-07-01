# `assets/music/` — background music beds

Part of GrowthStackr's **video-DNA library** for the `shortform-video` HyperFrames pipeline. Every
track here answers three questions: **what is it, when do I use it, what does it feel like.** A track
that can't answer those doesn't belong here yet.

## What

Loopable **background music beds**, organised by **mood subfolder** (`lofi/`, `soft-tech/`,
`calm-premium/`, `upbeat-tutorial/`, `no-vocals/`), each with an entry in
[`music.manifest.json`](./music.manifest.json). Music is the *bed* — it scores the whole short and sits
far under the voice. SFX (in [`../sfx/`](../sfx/)) are the punctuation on top; these are the floor.

## When — mood → video-type mapping

Pick the bed from the video's job:

| Mood | Use for | Feel |
|---|---|---|
| `lofi/` | case-study, personal / founder beats, calmer breakdowns | warm, unhurried, human |
| `soft-tech/` | AI-tool breakdowns, product / SaaS demos | clean, modern, forward-moving |
| `calm-premium/` | high-trust explainers, offers, closers | composed, authoritative, expensive |
| `upbeat-tutorial/` | step-by-step tutorials, how-tos, list videos | light momentum, keeps pace without rushing |
| `no-vocals/` | **any talking-head short** — the safe default under narration | neutral, out of the way |

`no-vocals/` overlaps the others by intent: **every bed under a talking head must have no vocals.** The
folder exists as the fallback when a specific mood isn't needed — a clean instrumental floor.

## Feeling

Same target as the whole library (from [`frame.md`](../../frame.md)): **premium, calm authority, clean,
digital.** The music should feel like it belongs under a composed, dark-default brand — never loud,
never busy, never fighting the voice.

- ✅ lofi, soft-tech, calm-premium, upbeat-tutorial, no-vocals.
- ❌ no vocals under talking-head footage, no drops, no meme tracks, no corporate-stock swell, nothing
  that pulls attention off the narration.

## Rules

- **Bed volume ~`0.08`–`0.10`.** Always **under the voice** — you should feel it, not hear it compete.
- **No vocals for talking-head** shorts — lyrics collide with narration. Use `no-vocals/` or any bed
  with `"vocals": false`.
- **Loopable** — a bed must loop seamlessly for the length of the short; log `"loopable": true`.
- One bed per short. Don't stack music.
- On the track grid (see `frame.md` §HyperFrames contract), the music bed lives on **track-index 10+**,
  under the SFX and well under the footage audio (0–2).

## The manifest entry shape

Every track is logged in [`music.manifest.json`](./music.manifest.json) as one object. Shape
(canonical, from [`LIBRARY.md`](../../LIBRARY.md)):

```jsonc
{
  "id": "lofi_soft_01",             // unique slug, referenced by compositions
  "file": "lofi/lofi_soft_01.mp3",  // path relative to this folder
  "bpm": 82,                        // tempo, for beat-syncing cuts if needed
  "mood": "calm-premium",           // maps to a subfolder / the mood table above
  "energy": "low-medium",           // low | low-medium | medium — how much it drives
  "loopable": true,                 // must loop seamlessly
  "vocals": false,                  // MUST be false for talking-head beds
  "best_for": ["ai-tutorial", "tool-breakdown", "case-study"], // video types
  "license": "…"                    // rights — must be commercial-cleared (see below)
}
```

- `id` is what a composition references; keep it stable once used.
- `mood` should match the subfolder the file lives in.
- `best_for` uses video-type vocabulary so the AI can pick a bed by the short's job.
- The file listed in each seed entry below is a **placeholder** — the audio is not added yet.

## Licensing

Log **every** track you add in
[`../../licenses/music-licenses.md`](../../licenses/music-licenses.md). Collect **only** tracks cleared
for **commercial use** (royalty-free with a valid licence, purchased, or original). If a track's rights
aren't logged and cleared, it doesn't ship.
