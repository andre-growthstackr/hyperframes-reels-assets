# fullscreen-talking-head

The full-frame talking-head layout for the hook, CTA, and personal/emphasis beats — the head
fills the entire 1080×1920 frame. Quick fade + scale settle on entry, then a gentle continuous
Ken Burns push-in so it's never frozen. Real footage is dropped into `#head` at build time; here
it's a dark placeholder slot.

**Preview:** `preview.png` · **Composition id:** `fullscreen-talking-head` · ~3.0s

```bash
hyperframes preview components/fullscreen-talking-head/index.html
```

## Props
Edit `window.FULLSCREEN_TALKING_HEAD_PROPS` in `index.html`:

| prop       | type    | notes |
| ---------- | ------- | ----- |
| `mode`     | string  | `"dark"` (default) or `"light"` |
| `kicker`   | string  | optional tiny uppercase label top-left, with a single coral tick. Empty string = hidden |
| `vignette` | boolean | `true` (default) shows a soft dark gradient over the lower third so a caption stays legible over the face |

Footage track (`data-track-index="0"`). No caption is drawn here — captions are the separate
`caption-pill` component. Coral appears once, only as the kicker tick, and only if a kicker is set.

## Re-skin
Colours/typography come from CSS variables in `style.css` (`--coral`, `--canvas`, `--fg`,
fonts via the Google Fonts `<link>`). A new `frame.md` changes the look without touching
structure. Don't hard-code colours in markup.
