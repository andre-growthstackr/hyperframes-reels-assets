# caption-pill

The signature caption — a dark rounded pill with bold white Inter, shown as 1–3 word
chunks that swap crisply in sync with speech, sat at the seam. This is also the library's
**centralized** caption: other components rely on this one and must never recreate a caption.

**Preview:** `preview.png` · **Composition id:** `caption-pill` · ~4.2s

```bash
hyperframes preview components/caption-pill/index.html
```

## Props
Edit `window.CAPTION_PILL_PROPS` in `index.html`:

| prop             | type     | notes |
| ---------------- | -------- | ----- |
| `mode`           | string   | `"dark"` (default) or `"light"` |
| `seamY`          | number   | 0–1 vertical position of the pill; `0.54` = the seam. Never bottom-stuck. |
| `highlightColor` | string   | hex for a highlighted word. On the dark pill use the brighter `#ff9382` (**not** `#ff5b49`) to clear the ≥3:1 contrast rule |
| `chunks`         | object[] | positional caption chunks: `{ text, start, dur, hl? }`. `start`/`dur` in seconds; optional `hl` is a substring within `text` coloured with `highlightColor`. Each chunk is its own `class="clip"` on track 8. |

Chunks are 1–3 words each and swap in sync with speech. Composition duration = `max(start + dur)`.
The page background is transparent — the pill is the only visible element, meant to overlay
other layers. **Never fabricate copy** beyond the demo sentence.

## Re-skin
Colours/typography come from CSS variables in `style.css` (`--charcoal`, `--coral`, `--fg`,
`--pill-bg`, fonts via the Google Fonts `<link>`). A new `frame.md` changes the look without
touching structure. Don't hard-code colours in markup.
