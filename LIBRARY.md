# Video-DNA library

This repo is GrowthStackr's **video-DNA library** for the `shortform-video` HyperFrames
pipeline. It is not a pile of files — it is a *labelled* library. The point is not volume; it is
that **every resource answers three questions**: what is this, when do I use it, what does it feel
like. If a resource can't answer those, it doesn't belong here yet.

There are two tracks, plus two supporting folders.

## Track 1 — `assets/` (things the AI drops straight into a video)

| Folder | What | 
|---|---|
| `assets/backgrounds/` | The three brand scene grounds (`ground-{dark,cream,coral}.jpg`). 🌱 seeded |
| `assets/gradients/` | Reusable CSS/asset gradients. 📥 |
| `assets/sfx/` | Sound effects by category (`whoosh/ pop/ ding/ …`), each with a manifest entry. 📥 audio · 🌱 schema |
| `assets/music/` | Background loops by mood (`lofi/ soft-tech/ calm-premium/ …`). 📥 audio · 🌱 schema |
| `assets/logos/tools/` | Third-party tool logos (SVG preferred). 📥 |
| `assets/fonts/` | Self-hosted `woff2` (Inter + Instrument Serif) for render determinism. 📥 + 🌱 notes |
| `assets/ui-screens/` | Screenshots + short screen-recordings of tools/dashboards (the "proof" layer). 📥 |
| `assets/dummy-data/` | Realistic **demo** datasets (never real customer data). 🌱 seeded |
| `assets/b-roll/` | Sparse, on-brand b-roll (typing, desk, screen close-up). Use sparingly. 📥 |
| `assets/talking-head/` | Reusable talking-head cutaways (hooks, CTAs, reactions, pointing). 📥 |

The built motion-graphic library (`components/`, `animations/`, `storyboards/`, `manifests/`) is
the *code* side of Track 1 — see [`manifests/`](manifests/) and each component's README.

## Track 2 — `references/` (things that teach the AI the style)

| Folder | What |
|---|---|
| `references/reference-videos/` | 10–30 videos that nail the feeling, by type (`ai-tool-breakdown/ saas-demo/ …`). Each: `video.mp4` + `notes.md` + `screenshots/`. 📥 media · 🌱 notes template |
| `references/own-videos/` | Your own work — `raw/ edited/ best-hooks/ best-ctas/ best-examples/ bad-examples/`. Bad examples matter as much as good ones. 📥 |
| `references/caption-library/` | Caption *language* you like, by beat (hook/metric/proof/cta/transition) + banned styles. 🌱 seeded |
| `references/scripts/` | Recurring hooks, CTAs, proof lines, objection handling, offer phrasing. 🌱 seeded |
| `references/storyboard-examples/` | Full storyboards for each video format (tool-breakdown, tutorial, case-study, …). 🌱 seeded |
| `references/motion-references/` | Specific *motions* you like (logo reveals, metric cards, browser zooms, flares) with "what I like" notes. 📥 clips · 🌱 notes |
| `references/brand-examples/` | Frozen frames showing *right* coral use and *right* dark-mode feel. 📥 + 🌱 notes |

## Supporting

- `brand/` — brand source-of-truth files that complement [`frame.md`](frame.md): `colors/tokens.json`,
  `fonts/font-notes.md`, `logos/` (GrowthStackr logo, mark, white). `frame.md` stays the *aesthetic*
  source of truth (palette, typography, motion grammar); `brand/` holds the concrete files.
- `licenses/` — a rights log per asset class (music, sfx, fonts, logos, stock). Boring but load-bearing.

## The labelling standard (non-negotiable)

**Every folder** has a `README.md` that answers, in this order: **What is this? · When to use it? ·
What feeling?** — plus the metadata shape expected for files dropped in.

**Every media file** carries metadata, either a sidecar `notes.md` (videos) or a manifest entry
(sfx/music/logos). Canonical shapes:

```jsonc
// assets/sfx/sfx.manifest.json entry
{ "id": "soft_whoosh_01", "file": "whoosh/soft_whoosh_01.mp3", "category": "transition",
  "intensity": "low", "duration_ms": 420, "best_for": ["layout_change","asset_enter"],
  "avoid_for": ["click","metric_reveal"], "license": "…", "feeling": "premium, clean, digital" }
```
```jsonc
// assets/music/music.manifest.json entry
{ "id": "lofi_soft_01", "file": "lofi/lofi_soft_01.mp3", "bpm": 82, "mood": "calm-premium",
  "energy": "low-medium", "loopable": true, "vocals": false,
  "best_for": ["ai-tutorial","tool-breakdown","case-study"], "license": "…" }
```
```markdown
<!-- references/reference-videos/<slug>/notes.md -->
- Source / URL:
- Why I like it:
- Hook · Captions · SFX · Split-screen · CTA (what's good):
- Timestamps to steal (e.g. metric card @ 00:31):
- Parts to reuse:
- Feeling in three words:
```

The **feeling vocabulary** the whole library targets (from `frame.md`): premium, calm authority,
clean, digital, dark-default, coral used once. Never: meme, childish, MrBeast-loud, corporate-stock,
rainbow captions, bottom-stuck subtitles.

## Legend & rules
- 🌱 **seeded** — ready to use now. · 📥 **drop-in** — add your files; the README says exactly what fits.
- **Heavy media** (`.mp4/.mov/.wav`): use **Git LFS** or an external bucket, not raw git. Keep git for
  text, metadata, SVG, and small optimised images.
- **Truth rule:** any number shown as a *result/case* must be real. Demo data lives in
  `assets/dummy-data/` and is always labelled demo.
- **Licence rule:** collect only what you have the right to use; log every music/SFX/font/logo in
  `licenses/`.
