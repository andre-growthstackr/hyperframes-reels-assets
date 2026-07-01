# growthstackr-video-assets

The heavy **asset library** for the GrowthStackr `shortform-video` skill. The skill keeps
light manifests that point here; this repo holds the actual reusable building blocks —
parameterised components, finished animations, and storyboard templates — all in the
GrowthStackr brand and built for **HyperFrames** (HTML/CSS/JS, GSAP timelines on
`window.__timelines`, `data-*` timing, rendered to MP4).

Everything is built for **temporal** aesthetics (maximise the frame, one idea at a time,
motion carries the info) — not spatial (a webpage). See [`frame.md`](frame.md) for the full
aesthetic spec and brand tokens. Every asset re-skins against `frame.md`.

[`frame.md`](frame.md) is the composed **frame pack** (video-first spec generated from
`design.md`): YAML component tokens, eight frame treatments, and a pre-render self-audit, with a
repo-specific **HyperFrames build contract & 9:16 video conventions** section appended at the end
(the CSS re-skin variables, caption-pill signature, track-index convention, and composition
contract that assets here depend on). [`frame-showcase.html`](frame-showcase.html) is a
**preview-only** storyboard contact sheet of those treatments — open it in a browser to review the
look; do **not** include it in a HyperFrames project.

## Structure

```
growthstackr-video-assets/
├── README.md                  # this file
├── frame.md                   # composed frame pack + 9:16 build contract (re-skin source of truth)
├── frame-showcase.html        # preview-only storyboard contact sheet of the frame treatments
├── manifests/                 # the index the skill reads (source of truth for what exists)
│   ├── components.manifest.json
│   ├── storyboards.manifest.json
│   └── animations.manifest.json
├── components/                # reusable component code (HTML/CSS/JS), re-skinnable
│   ├── split-50-50/           # home-base layout: B-roll top, talking head bottom
│   ├── fullscreen-talking-head/ # full-frame head takeover (hook / CTA / personal)
│   ├── caption-pill/          # the signature caption (centralised — don't recreate)
│   ├── browser-frame/         # window chrome for screenshots / SaaS UI / dashboards
│   ├── ui-highlight/          # spotlight overlay: dim + coral rect + label/arrow
│   ├── workflow-diagram/      # source -> tool -> output node flow
│   ├── metric-card/           # 2x2 / 2x3 big-number grid with count-up
│   ├── platform-logo-card/    # logo-flash: one tool logo, centered, coral accent
│   ├── claude-prompt-box/     # typed Claude Code prompt box (Claude logo in header)
│   ├── cta-scene/             # closer line + giant coral pill CTA
│   └── light-flare-transition/ # signature light transition
├── animations/                # finished HyperFrames scenes + preview.mp4
│   └── logo-reveal-coral/
├── storyboards/               # director plans + static key frames
│   └── tool-breakdown-45s/
├── examples/                  # whole prior video codebases to pull effects from
└── tools/
    └── capture-preview.mjs    # render a preview PNG/MP4 from any scene
```

Each component folder has `index.html`, `style.css`, `animation.js`, a `README.md` (props +
re-skin notes), and a `preview.png`/`preview.mp4`.

## How the skill uses this library

1. **Plan time:** after beat-mapping, the skill reads the three manifests and, for each beat,
   checks `tags` / `best_for` for a fitting asset (e.g. "metric beat → `metric-card`").
2. **Pull:** it fetches the specific file(s) via the manifest `path` (raw GitHub URL, clone,
   or a local clone if configured) — not the whole repo.
3. **Re-skin, don't rebuild:** it applies the current `frame.md` (colours/typography read
   from CSS variables) to the pulled component. Same structure, new look.
4. **On request:** "use the flare from the tool video" → it finds the entry and pulls it.

Point the skill at this repo in `shortform-video.config.json`:

```json
"assetLibrary": {
  "repo": "https://github.com/andre-growthstackr/hyperframes-reels-assets",
  "branch": "main",
  "rawBase": "https://raw.githubusercontent.com/andre-growthstackr/hyperframes-reels-assets/main",
  "localClone": "~/video-assets"
}
```

## Preview / render a single asset

```bash
hyperframes preview components/metric-card/index.html
```

Or render a preview without HyperFrames (Playwright + ffmpeg):

```bash
# PNG (seek to one frame)
node tools/capture-preview.mjs components/metric-card/index.html components/metric-card/preview.png --seek 0.99
# MP4 (frame sequence)
node tools/capture-preview.mjs animations/logo-reveal-coral/scene.html animations/logo-reveal-coral/preview.mp4 --mp4 --dur 1.3
# one frame of a stacked key-frames file
node tools/capture-preview.mjs storyboards/tool-breakdown-45s/frames.html out.png --el "#f0"
```
(Requires Node 22, the `playwright` package, and `ffmpeg` on PATH.)

## How to add a new asset (the flywheel)

After a video, promote anything reusable:

1. **Build it in the right folder** — `components/<id>/`, `animations/<id>/`, or
   `storyboards/<id>/`. Follow the HyperFrames contract in [`frame.md`](frame.md):
   composition root with `data-composition-id`, every timed element gets `class="clip"` +
   `data-start`/`data-duration`/`data-track-index`, one paused timeline on
   `window.__timelines["<id>"]`, deterministic logic only. Read colours/fonts from CSS
   variables so it re-skins.
2. **Add a preview** — `preview.png` (components) or `preview.mp4` (animations/transitions)
   via `tools/capture-preview.mjs`.
3. **Add one entry to the matching manifest** in `manifests/` — copy the shape of the
   existing entries exactly (`id`, `type`, `name`, `path`, `preview`, `tags`, `best_for`,
   `reskinnable`, `props`, `notes`; animations also `scene` + `duration_s`; storyboards use
   `structure`). The format must stay identical to the skill's
   `references/library/*.manifest.json` or the skill can't read it.
4. **Commit.** Next video, the skill finds and reuses it. The library compounds.
