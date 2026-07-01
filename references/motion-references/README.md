# references/motion-references/

> Part of the **Track 2 — `references/`** teaching layer. See [`../../LIBRARY.md`](../../LIBRARY.md).

## What is this?

A collection of short clips of **specific motions** you like — a logo reveal that settles just
right, a metric that counts up without bouncing, a browser that zooms with a slow Ken Burns, a
light-flare with the perfect bloom. This folder is not about *what* is on screen; it is about *how*
it moves. Each motion lives in its own subfolder with a `README.md` of "what I like" bullets and
the clip(s) that demonstrate it.

The point (per LIBRARY.md) is a **labelled** library: every clip answers what · when · feeling. A
raw clip with no note doesn't belong here yet — the note is the asset. These references teach the
AI the repo's motion grammar (from [`../../frame.md`](../../frame.md) → *Motion & Timing* and the
video-scale *Transitions* section) by example, so a built component can be tuned against a real
reference instead of a vague adjective.

Where a built component already embodies the motion, the subfolder **cross-references it** — the
reference is the target feel, the component is the implementation.

| Subfolder | Motion | Built component |
|---|---|---|
| [`logo-reveals/`](logo-reveals/) | brand mark / wordmark reveal | [`../../animations/logo-reveal-coral`](../../animations/logo-reveal-coral) |
| [`metric-cards/`](metric-cards/) | number pop-in + count-up | [`../../components/metric-card`](../../components/metric-card) |
| [`workflow-diagrams/`](workflow-diagrams/) | node stagger + connector draw | [`../../components/workflow-diagram`](../../components/workflow-diagram) |
| [`browser-zooms/`](browser-zooms/) | window scale-in + Ken Burns | [`../../components/browser-frame`](../../components/browser-frame) |
| [`cursor-clicks/`](cursor-clicks/) | cursor move + click + spotlight | [`../../components/ui-highlight`](../../components/ui-highlight) |
| [`carousel-cards/`](carousel-cards/) | card-to-card swap / slide | (no built component yet) |
| [`light-flares/`](light-flares/) | warm light-leak section change | [`../../components/light-flare-transition`](../../components/light-flare-transition) |
| [`lower-thirds/`](lower-thirds/) | name / label strip in-out | (composed from `caption-pill` + frame.md) |
| [`transitions/`](transitions/) | general scene-to-scene moves | [`../../components/light-flare-transition`](../../components/light-flare-transition) |

## When to use it?

Pull the matching subfolder when building or tuning that motion. Read the "what I like" bullets,
watch the clip, and match the built component's timing/easing to it. When someone says "make the
metric feel right," this folder is what "right" points at. When you add a *new* motion you like,
drop the clip here with a note — bad examples matter too (a bounce you hate, a flare that flashes
white) so the AI learns the boundary, not just the target.

## What feeling?

The library-wide target from `frame.md`: **premium, calm authority, clean, digital, dark-default,
coral used once.** Motions should read **fast in, slow settle** — a quick reveal that eases to
rest, never a springy bounce or a whip. The signature transition is a **soft warm/coral
light-leak**, never a hard white flash, never glitch/whip/dark. If a clip feels loud, meme-y, or
MrBeast-fast, it's a *bad example* — label it as one.

## Metadata each clip carries (sidecar `notes.md`, per LIBRARY.md)

```markdown
<!-- <motion-slug>/notes.md -->
- Source / URL:
- Motion (in one line):
- Why I like it:               # fast in, slow settle, coral underline, small glow, no bounce, clean exit
- Timing to steal (ms / easing):
- Maps to component:           # e.g. components/metric-card
- Good or bad example:
- Feeling in three words:
```

## Rules (from LIBRARY.md)

- **Heavy media** (`.mp4/.mov`): use **Git LFS** or an external bucket, not raw git. Keep git for
  text, metadata, SVG, and small optimised images. Each subfolder ships a `.gitkeep` so the
  labelled, empty folder is committable before clips land.
- **Every clip is labelled** — a sidecar `notes.md` (shape above). No note, not in the library yet.
- **Licence rule** — log any third-party clip in `licenses/`; collect only what you may reuse.
