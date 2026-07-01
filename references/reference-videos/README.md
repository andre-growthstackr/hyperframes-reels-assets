# reference-videos/ — outside videos that teach the feeling

**What is this?** A curated set of *other people's* short-form videos that nail the GrowthStackr
feeling — sorted by video type. Each reference lives in a per-video slug folder holding
`video.mp4` + `notes.md` + a `screenshots/` folder of the exact frames worth stealing. These are
study material, not render assets.

**When to use it?** When the AI (or you) needs a concrete model for a given format — the hook
timing of an AI-tool breakdown, the metric-reveal of a case study, the pacing of a Claude Code
tutorial. Point the pipeline at the matching type folder to anchor the style before writing a
storyboard.

**What feeling?** premium · calm authority · clean · digital · dark-default · coral used once.
Never: meme, childish, MrBeast-loud, corporate-stock, rainbow captions, bottom-stuck subtitles.
If a video doesn't sit inside that vocabulary, it doesn't belong here.

## How much to collect

**Aim for 10–30 videos total — quality over quantity.** A tight, well-labelled set of great
references teaches the style far better than a dump of hundreds. If a video can't answer *what /
when / feeling*, don't add it yet.

## Type folders

`ai-tool-breakdown/` · `claude-code-tutorial/` · `saas-demo/` · `case-study/` · `offer-video/` ·
`comment-for-link/` · `motion-graphic-only/`

## Per-video layout

Give each reference its own slug folder inside the matching type folder:

```
references/reference-videos/<type>/<slug>/
  video.mp4          # the reference clip (Git LFS — see below)
  notes.md           # the sidecar below, filled in
  screenshots/       # the exact frames worth stealing
```

## `notes.md` template (copy this into every video's sidecar)

```markdown
<!-- references/reference-videos/<slug>/notes.md -->
- Source / URL:
- Why I like it:
- Hook · Captions · SFX · Split-screen · CTA (what's good):
- Timestamps to steal (e.g. metric card @ 00:31):
- Parts to reuse:
- Feeling in three words:
```

## Git LFS reminder

The `.mp4` files here are **heavy media** — track them with **Git LFS** (or park them in an
external bucket), never raw git. Keep plain git for the text, the `notes.md` sidecars, and small
optimised screenshots. See [`../../LIBRARY.md`](../../LIBRARY.md) for the rule.
