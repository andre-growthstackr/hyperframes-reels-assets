# claude-prompt-box

A Claude Code-style prompt box with a deterministic typing animation, dark terminal UI and
coral accent. Use for "showing a prompt being typed" or a Claude Code tool-intro beat.

**Preview:** `preview.png` · **Composition id:** `claude-prompt-box` · ~3.6s

```bash
hyperframes preview components/claude-prompt-box/index.html
```

## Props
Edit `window.PROMPT_BOX_PROPS` in `index.html`:

| prop          | type   | notes |
| ------------- | ------ | ----- |
| `mode`        | string | `"dark"` (default) or `"light"` |
| `ground`      | string | scene background: `"dark"` default / `"cream"` (light) / `"coral"` (opt-in) / `"none"` flat |
| `accentColor` | string | hex; overrides `--coral` (dot, caret, cursor, send pill) |
| `appName`     | string | header label (default `"claude"`) |
| `promptText`  | string | the text that types out, char by char |
| `cwd`         | string | small path hint at the right of the header |

Typing speed auto-scales with length (≈0.045s/char, capped). The reveal is driven by a
counter on the timeline, so it seeks frame-accurately for rendering — no `setInterval`.

## Re-skin
All colours/typography are CSS variables in `style.css`. Override via `frame.md`; never
hard-code colours in markup.
