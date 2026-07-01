# ui-highlight

A focus/spotlight overlay that layers on top of a browser frame or screenshot to draw the eye
to one UI element. It dims the whole frame with a dark scrim except a clear spotlight rectangle,
outlines that rectangle in coral, and pops in an optional label + arrow — then keeps the border
gently breathing so nothing freezes.

**Preview:** `preview.png` · **Composition id:** `ui-highlight` · ~2.4s

```bash
hyperframes preview components/ui-highlight/index.html
```

## Props
Edit `window.UI_HIGHLIGHT_PROPS` in `index.html`:

| prop          | type    | notes |
| ------------- | ------- | ----- |
| `rect`        | object  | `{ x, y, w, h }` spotlight region in 1080×1920 px; `x,y` is the top-left corner |
| `label`       | string  | small caption below the rect; `""` hides it |
| `dimOpacity`  | number  | 0–1; how dark everything *outside* the rect goes (default `0.62`) |
| `accentColor` | string  | hex; overrides `--coral` for the rect border + arrow |
| `showArrow`   | boolean | `true` draws a coral arrow pointing at the rect's corner |

Transparent overlay — the only visible things are the scrim, the coral-outlined rect, the label,
and the arrow. Composites over the layer beneath (track 6, above scenes, below captions).

## Re-skin
Colours/typography come from CSS variables in `style.css` (`--coral`, `--charcoal`, `--fg`,
fonts via the Google Fonts `<link>`). A new `frame.md` changes the look without touching
structure. The rect border and arrow share the one coral accent — don't hard-code colours in markup.
