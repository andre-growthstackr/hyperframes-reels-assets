# caption-library

**What is this?**
The caption *language* GrowthStackr wants on screen — grouped by the beat it serves (hook /
metric / proof / cta / transition) plus a `banned-caption-styles.md` "don't" catalogue. These are
not subtitles. They are 1–3 word chunks that swap in sync with speech, sat on a charcoal pill at
the seam, coral highlight on one key word only. Copy lives in **Swedish** because the brand ships
Swedish shorts. Every file here teaches the AI *how a caption should read and pair with a
component* — it is the language layer, not the render.

**When to use it?**
When authoring caption chunks for a short. Pick the file for the beat you're on:

| File | Beat | Pairs with (component) |
| --- | --- | --- |
| `hook-captions.md` | Opening 0–3s, stop-the-scroll | `fullscreen-talking-head`, `split-50-50` |
| `metric-captions.md` | The number reveal | `metric-card` |
| `proof-captions.md` | Before/after, "so here's what happened" | `browser-frame`, `ui-highlight`, `split-50-50` |
| `cta-captions.md` | The ask, closing frame | `cta-scene` |
| `transition-captions.md` | The seam between sections | `light-flare-transition` |
| `banned-caption-styles.md` | The "don't" list (Bra/Dåligt) | — (guardrail for all of the above) |

**What feeling?**
Premium, calm authority, clean, digital. A senior operator saying it plain — Swedish directness,
outcome-first, full-stop emphasis, anti-hype. The caption is never louder than the point. Coral
fires once. Never: meme, MrBeast-loud, rainbow words, bottom-stuck subtitles, the whole transcript
on screen.

## How captions are built (the shared rules)

Every chunk in these files obeys the `caption-pill` signature from `frame.md`:

- **1–3 words per chunk.** Never a full sentence. If it needs four words, it's two chunks.
- **Charcoal pill at the seam** (`--charcoal` #1c1f22, ~85% opacity), bold white Inter, centered.
  Never bottom-stuck.
- **Coral highlight only on the load-bearing word** — a number, a contrast word (*utan*, *nu*,
  *rå*, *färdig*), or a CTA keyword. On the dark pill coral is the brighter `#ff9382`, not
  `#ff5b49`. Never per-word rainbow, never highlight two words in one chunk.
- **Full-stop emphasis.** A caption can land as a hard statement: *"det här är sjukt."* The stop is
  the punch.
- **No banned words** (`unlock`, `supercharge`, `10x`, `revolutionera`, `seamless`,
  `plug-and-play`, `growth hacking`, `tillväxthack`). No em-dash.
- **Truth rule.** Any figure shown as a real result must be real. Placeholders read `[din siffra]`.

## Metadata shape for additions

When you add a caption line, keep it as a beat-labelled chunk sequence so it drops straight into
`caption-pill`'s `chunks[]`:

```jsonc
// one caption line = an ordered chunk sequence
{ "beat": "hook", "line": "det här är det snabbaste sättet",
  "chunks": ["det här är", "det snabbaste", "sättet"],
  "highlight": "snabbaste",           // the single coral word (or null)
  "pairs_with": "fullscreen-talking-head",
  "feeling": "direct, confident, no hype" }
```
