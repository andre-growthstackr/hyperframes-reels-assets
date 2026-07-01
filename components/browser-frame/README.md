# browser-frame

A clean browser-window chrome to hold a screenshot / SaaS UI / dashboard / website. A rounded window
with minimal top chrome — three muted traffic-light dots and a pill address bar — slides up + scales
in, then the content does a slow Ken Burns push-in. The one coral accent is the tiny secure dot in
the address bar. The skill drops a captured image into `imageSrc`.

**Preview:** `preview.png` · **Composition id:** `browser-frame` · ~3.5s

```bash
hyperframes preview components/browser-frame/index.html
```

## Props
Edit `window.BROWSER_FRAME_PROPS` in `index.html`:

| prop          | type   | notes |
| ------------- | ------ | ----- |
| `mode`        | string | `"dark"` (default, lifted dark surface) or `"light"` (white window on cream) |
| `ground`      | string | scene background behind the window: `"dark"` default / `"cream"` (light) / `"coral"` (opt-in) / `"none"` flat |
| `url`         | string | address-bar text; rendered muted |
| `favicon`     | string | optional tool id (from `assets/logos/tools/logos.manifest.json`) shown as a favicon left of the url; `""` hides it |
| `title`       | string | optional window title beside the traffic lights; hidden when empty |
| `imageSrc`    | string | screenshot / UI capture; fills the content area (`object-fit: cover`, top-anchored). Empty → neutral `screenshot · UI` placeholder |
| `accentColor` | string | hex; overrides `--coral` for the single secure dot |

## Re-skin
Colours/typography come from CSS variables in `style.css` (`--coral`, `--canvas`, `--charcoal`,
`--fg`, fonts via the Google Fonts `<link>`). A new `frame.md` changes the look without touching
structure. Coral is the one accent — the secure dot only; don't hard-code colours in markup.
