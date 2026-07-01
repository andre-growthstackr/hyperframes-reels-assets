# platform-logo-card

The logo-flash scene — reveals **one** named tool's logo, big and centered on a brand ground,
with an optional tool-name label below and a single short coral underline. The logo flashes in
fast (~0.5s) then a gentle push-in keeps it alive. Implements frame.md's logo-flash rule
(small + clean, ~0.5–1s, fired when a tool is named). One tool per instance.

**Preview:** `preview.png` · **Composition id:** `platform-logo-card` · ~2.6s

```bash
hyperframes preview components/platform-logo-card/index.html
```

## Props
Edit `window.PLATFORM_LOGO_CARD_PROPS` in `index.html`:

| prop          | type   | notes |
| ------------- | ------ | ----- |
| `logo`        | string | tool id → renders `logos/<logo>.svg`. Ids: `claude`, `claude-code`, `chatgpt`, `n8n`, `make`, `zapier`, `google-analytics`, `google-tag-manager`, `meta`, `linkedin`, `vercel`, `netlify`, `supabase`, `stripe`, `webflow`, `cursor`, `search-console`, `looker-studio` |
| `label`       | string | optional tool name under the logo, in Inter white. `""` hides it. **Never fabricate** — use the tool's real name |
| `ground`      | string | scene background: `"dark"` default / `"cream"` (light) / `"coral"` (opt-in) / `"none"` flat |
| `mode`        | string | `"dark"` (default) or `"light"` |
| `accentColor` | string | hex; overrides `--coral` for the single coral underline |

Brand-coloured SVG marks are visible on dark grounds. The `chatgpt` mark inherits `currentColor`,
so the logo colour is set by `mode` (white on dark, ink on light). The coral underline is the
**single coral instance** of the frame.

## Re-skin
Colours/typography come from CSS variables in `style.css` (`--coral`, `--canvas`, `--fg`,
fonts via the Google Fonts `<link>`). A new `frame.md` changes the look without touching
structure. Don't hard-code colours in markup.
