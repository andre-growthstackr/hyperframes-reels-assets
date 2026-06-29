# light-flare-transition

The brand's signature transition: a soft warm light-flare that sweeps across the frame and
reveals the next shot at its brightest moment. Sync the flare peak to a swoosh SFX. Use
between major sections and on big reveals — 3–6 per 30–60s short, not every cut.

**Preview:** `preview.mp4` · **Composition id:** `light-flare-transition` · ~0.5s (prop-driven)

```bash
hyperframes preview components/light-flare-transition/index.html
```

## Props
Edit `window.FLARE_PROPS` in `index.html`:

| prop        | type   | notes |
| ----------- | ------ | ----- |
| `direction` | string | `"lr"` (default), `"rl"`, or `"center"` (burst) |
| `duration`  | number | seconds for the whole sweep (also rewrites `data-duration`) |
| `intensity` | number | `0.5` subtle · `1.0` default · `1.6` strong bloom |

## Using it in a real video
The two `.shot` divs are placeholders. In a composition, the flare is an **overlay**: drop
the `.flare` element (track-index 9) over your cut point, copy the timeline's flare tweens,
and remove the placeholder shots. The reveal beat (`shotA opacity→0` at `peak`) marks where
the outgoing shot hands off to the incoming one.

## Re-skin
`reskinnable: false` — this is pure light and intentionally brand-agnostic. It looks correct
over any footage; only `direction` / `duration` / `intensity` change.
