# references/storyboard-examples/

> Part of the **Track 2 — `references/`** teaching layer. See [`../../LIBRARY.md`](../../LIBRARY.md).

## What is this?

Full, beat-by-beat **director plans** — one per short-form video format GrowthStackr
ships in Swedish. Each file is a reusable arc: for every beat it names an approximate
timestamp, the spoken-line *intent* (not final copy), the real component to place (from
[`../../manifests/components.manifest.json`](../../manifests/components.manifest.json)),
the layout (`split-50-50` / fullscreen head / fullscreen graphic), and the SFX / transition
cue. They mirror the format of the built storyboard at
[`../../storyboards/tool-breakdown-45s/storyboard.md`](../../storyboards/tool-breakdown-45s/storyboard.md)
— reuse the *structure*, swap in the real transcript + numbers, re-skin via
[`../../frame.md`](../../frame.md).

Each storyboard follows the canonical arc where it fits:
**hook → tool intro → source diagram → UI proof → metric card → CTA** — and bends it to the
format (a case-study leads with the result; a myth-busting leads with the false belief).

| File | Format | Length | Goal |
|---|---|---|---|
| [`tool-breakdown-45s.md`](tool-breakdown-45s.md) | AI-tool breakdown | ~45s | comment → lead |
| [`claude-code-tutorial-45s.md`](claude-code-tutorial-45s.md) | How-to / tutorial | ~45s | save / follow |
| [`case-study-30s.md`](case-study-30s.md) | Result / case study | ~30s | DM → call |
| [`offer-video-40s.md`](offer-video-40s.md) | Offer / promo | ~40s | click → book |
| [`comment-for-link-30s.md`](comment-for-link-30s.md) | Lead magnet, comment-gated | ~30s | comment → link |
| [`myth-busting-35s.md`](myth-busting-35s.md) | Myth / contrarian take | ~35s | share → follow |
| [`listicle-30s.md`](listicle-30s.md) | Numbered listicle | ~30s | save → follow |

## When to use it?

Pull one when starting a new short of that format. It is the *starting arc* — the skill
re-maps each beat to the real recording, drops in the actual transcript + captions, and
re-skins the named components. Numbers stay as `[din siffra]` placeholders until a real
figure is supplied; anything shown as a **result** must be real, and demo data is labelled
`demo` (LIBRARY.md truth rule). If the requested video is a format not listed here, take the
closest arc and note the deviation rather than inventing a shape from nothing.

## What feeling?

The same target as the whole library (from `frame.md`): **premium, calm authority, clean,
digital, dark-default, coral used once per frame.** A storyboard should read like a Linear-grade
editorial cut — restrained, one dominant element per beat, the `light-flare-transition` firing
3–6× at real section changes. Never: meme, childish, MrBeast-loud, corporate-stock, rainbow
captions, bottom-stuck subtitles.

## Format of each entry (match this)

```
## Scene NN — <name>
- **Time:** 0.0–2.2s
- **Transcript:** "<spoken-line intent, Swedish>"
- **Layout:** <split-50-50 | fullscreen head | fullscreen graphic>
- **Visual purpose:** <what the beat proves>
- **Caption beats:** "<chunk>", "<chunk>"      (caption-pill component)
- **Asset source:** <real component id> (props …), re-skinned via frame.md
- **SFX:** <cue>
- **Motion:** <entry + exit, note light-flare at section changes>
```

Real component ids only: `split-50-50`, `fullscreen-talking-head`, `caption-pill`,
`browser-frame`, `ui-highlight`, `workflow-diagram`, `metric-card`, `claude-prompt-box`,
`cta-scene`, `light-flare-transition`, plus `animations/logo-reveal-coral`.
