# `brand/` — brand source-of-truth files

**What is this?**
The concrete brand *files* for GrowthStackr's video-DNA library: the design-token JSON,
font notes, and the logo assets. Where [`frame.md`](../frame.md) is prose + normative
frontmatter (the *aesthetic* source of truth — palette, typography ramps, motion grammar,
frame treatments), `brand/` is the place a component or renderer actually *reaches for a file*:
a machine-readable `tokens.json`, self-hosting instructions for the fonts, and the SVG logos.

- `brand/colors/tokens.json` — structured design tokens derived **verbatim** from `frame.md`'s
  frontmatter (colors, typography families, radius, motion easings/durations). Machine-readable;
  the human-readable rationale stays in `frame.md`.
- `brand/fonts/font-notes.md` — how the two families are used (Inter primary, Instrument Serif
  italic accent) and how to self-host them for render determinism.
- `brand/logos/` — drop-in slots for `growthstackr-logo.svg`, `growthstackr-mark.svg`,
  `white-logo.svg`.

**`frame.md` is still the aesthetic source of truth.** `brand/` never overrides it — it holds
the concrete artifacts that implement it. If a token here and `frame.md` ever disagree,
`frame.md` wins and this folder is wrong.

**When to use it?**
- A component needs the exact hex / weight / radius / easing → read `brand/colors/tokens.json`.
- A consuming project needs to ship fonts for a deterministic render → follow
  `brand/fonts/font-notes.md` and drop woff2 into [`assets/fonts/`](../assets/fonts/).
- You need the wordmark, mark, or white logo → `brand/logos/`.

**What feeling?**
Premium, calm authority, clean, dark-default, coral used once. Direct, byggarmässig, anti-hype.
Near-black grounds, hairline borders, one committed coral accent — never a decorative wash.
