# workflow-diagram

A node-flow diagram — the classic **source → tool → output** visual (e.g. `LinkedIn → Vayne → Spreadsheet`),
the answer to a "where the data flows" beat. Nodes stagger pop-in, connector lines draw between them,
and the one hero node (the tool) carries the coral accent.

**Preview:** `preview.png` · **Composition id:** `workflow-diagram` · ~3.0s (3 nodes)

```bash
hyperframes preview components/workflow-diagram/index.html
```

## Props
Edit `window.WORKFLOW_DIAGRAM_PROPS` in `index.html`:

| prop          | type     | notes |
| ------------- | -------- | ----- |
| `mode`        | string   | `"dark"` (default) or `"light"` |
| `accentColor` | string   | hex; overrides `--coral` for the hero node |
| `heroIndex`   | number   | 0-based node that gets the coral accent (the tool/central node) |
| `orientation` | string   | `"vertical"` (default, stacked top→bottom) or `"horizontal"` (row) |
| `nodes`       | object[] | 2–4 nodes. Each `{ label, sub }`; `sub` optional. Positional. **Never fabricate** labels beyond what the script says. |

2–3 nodes render at full size. 4 nodes auto-tightens type and shortens connectors to fit 1920.

## Re-skin
Colours/typography come from CSS variables in `style.css` (`--coral`, `--charcoal`, `--fg`, `--connector`,
fonts via the Google Fonts `<link>`). A new `frame.md` changes the look without touching structure.
Don't hard-code colours in markup. Coral rations to the hero node only — one accent per frame.
