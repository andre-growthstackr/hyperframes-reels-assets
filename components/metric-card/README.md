# metric-card

A 2×2 / 2×3 grid of big numbers with small labels, coral accent on the hero figure,
staggered pop-in + count-up. Every short should have at least one metric beat — this is it.

**Preview:** `preview.png` · **Composition id:** `metric-card` · ~3.2s

```bash
hyperframes preview components/metric-card/index.html
```

## Props
Edit `window.METRIC_CARD_PROPS` in `index.html`:

| prop          | type     | notes |
| ------------- | -------- | ----- |
| `mode`        | string   | `"dark"` (default) or `"light"` |
| `ground`      | string   | scene background: `"dark"` default / `"cream"` (light) / `"coral"` (opt-in) / `"none"` flat |
| `accentColor` | string   | hex; overrides `--coral` for the hero number |
| `heroIndex`   | number   | 0-based cell that gets the coral accent |
| `eyebrow`     | string   | small uppercase coral kicker |
| `title`       | string   | headline above the grid |
| `values`      | string[] | positional. **Never fabricate** — use the script's real figure or a placeholder like `[din siffra]`. Numeric values count up; placeholders stay static. Supports `15%`, `5x`, `15 000`, `3,4%`, `$320 000`. |
| `labels`      | string[] | positional, pairs with `values` |

4 values → 2×2. 5–6 values → 2×3 (auto-tightens type).

## Re-skin
Colours/typography come from CSS variables in `style.css` (`--coral`, `--canvas`, `--fg`,
fonts via the Google Fonts `<link>`). A new `frame.md` changes the look without touching
structure. Don't hard-code colours in markup.
