# split-50-50

The home-base layout scaffold for shorts: a B-roll / graphics slot on top (~55%) and a
talking-head slot below (~45%), joined at a 1px seam. The brand hook move — opens full-screen
head, then the top panel slides down to form the split — with a continuous Ken Burns push-in so
nothing is frozen. Structure only: captions are the separate caption-pill component.

**Preview:** `preview.png` · **Composition id:** `split-50-50` · ~3.2s

```bash
hyperframes preview components/split-50-50/index.html
```

## Props
Edit `window.SPLIT_50_50_PROPS` in `index.html`:

| prop               | type    | notes |
| ------------------ | ------- | ----- |
| `mode`             | string  | `"dark"` (default) or `"light"` |
| `topRatio`         | number  | split point — top slot height as a fraction of the frame (default `0.55`) |
| `topLabel`         | string  | faint placeholder inside the top B-roll / graphics slot |
| `headLabel`        | string  | faint placeholder inside the talking-head slot |
| `showSeamHairline` | boolean | draw the 1px hairline at the seam (default `true`) |

`#topSlot` is the B-roll / UI / graphics slot; `#headSlot` is the dark talking-head block, filled
at build time. `topRatio` drives the split point in both markup and the entrance.

## Re-skin
Colours/typography come from CSS variables in `style.css` (`--canvas`, `--fg`, `--seam-line`,
`--top-bg`, `--head-bg`, fonts via the Google Fonts `<link>`). A new `frame.md` changes the look
without touching structure. Don't hard-code colours in markup.
