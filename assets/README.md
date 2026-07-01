# assets/ — Track 1: things the AI drops straight into a video

Ready-to-use media the pipeline pulls into a composition. Everything here is either 🌱 seeded
(usable now) or 📥 a labelled drop-in slot — see each subfolder's README for **what it is, when to
use it, and what feeling** it carries. The full map and metadata standard live in
[`../LIBRARY.md`](../LIBRARY.md).

| Folder | What | State |
|---|---|---|
| [`backgrounds/`](backgrounds/) | The three brand scene grounds (`ground-{dark,cream,coral}.jpg`) | 🌱 |
| [`gradients/`](gradients/) | Reusable CSS/asset gradients from `frame.md` | 🌱 |
| [`sfx/`](sfx/) | Sound effects by category + `sfx.manifest.json` | 📥 audio · 🌱 schema |
| [`music/`](music/) | Background loops by mood + `music.manifest.json` | 📥 audio · 🌱 schema |
| [`logos/tools/`](logos/tools/) | Third-party tool logos (SVG preferred) + checklist | 📥 |
| [`fonts/`](fonts/) | Self-hosted Inter + Instrument Serif `woff2` | 📥 + 🌱 notes |
| [`ui-screens/`](ui-screens/) | Tool/dashboard screenshots + recordings (the "proof" layer) | 📥 |
| [`dummy-data/`](dummy-data/) | Realistic **demo** datasets (never real customer data) | 🌱 |
| [`b-roll/`](b-roll/) | Sparse on-brand b-roll — use sparingly | 📥 |
| [`talking-head/`](talking-head/) | Reusable talking-head cutaways | 📥 |

The *code* side of Track 1 — reusable motion-graphic components, animations, and storyboards — lives
in [`../components/`](../components/), [`../animations/`](../animations/),
[`../storyboards/`](../storyboards/), indexed by [`../manifests/`](../manifests/).

**Rules:** heavy media (`.mp4/.mov/.wav`) → Git LFS or an external bucket, not raw git. Log every
sound/track/logo/font in [`../licenses/`](../licenses/). Any number shown as a real result must be
true — demo numbers stay in `dummy-data/` and are labelled demo.
