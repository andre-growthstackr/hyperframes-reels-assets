# cta-scene

The closer / final CTA scene — a short closer line (one word may be an Instrument Serif italic
white accent) over a giant coral pill CTA on a dark ground, with a centered hairline below.
Implements frame.md treatment "6 · Closer / Final CTA". End every short on this.

**Preview:** `preview.png` · **Composition id:** `cta-scene` · ~3.2s

```bash
hyperframes preview components/cta-scene/index.html
```

## Props
Edit `window.CTA_SCENE_PROPS` in `index.html`:

| prop               | type   | notes |
| ------------------ | ------ | ----- |
| `mode`             | string | `"dark"` (default) or `"light"` |
| `accentColor`      | string | hex; overrides `--coral` for the CTA pill (the single coral instance) |
| `kicker`           | string | optional small uppercase muted kicker at the top; `""` hides it |
| `closerLine`       | string | the closer, **≤ 5 words**. **Never fabricate** — use the script's real line |
| `closerAccentWord` | string | if it occurs in `closerLine`, that word renders in Instrument Serif italic **white** (not coral). `""` for none |
| `ctaLabel`         | string | the giant coral pill label (the call to action) |

The coral pill is the **single coral instance** of the frame; the italic accent word is white,
never coral.

## Re-skin
Colours/typography come from CSS variables in `style.css` (`--coral`, `--canvas`, `--fg`,
fonts via the Google Fonts `<link>`). A new `frame.md` changes the look without touching
structure. Don't hard-code colours in markup.
