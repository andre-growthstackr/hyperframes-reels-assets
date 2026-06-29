# logo-reveal-coral

Smooth scale-in of the GrowthStackr logo (rising-bars mark + wordmark) with a soft impact
settle, a coral glow bloom, and the signature light-flare sweep. Drop in at an intro or a
brand/tool-name reveal.

**Preview:** `preview.mp4` · **Scene:** `scene.html` · **Composition id:** `logo-reveal-coral` · ~1.3s

```bash
hyperframes preview animations/logo-reveal-coral/scene.html
```

## Re-skin
Self-contained single file. Colours/typography are CSS variables in the `<style>` block
(`--coral`, `--violet`, `--canvas`, fonts via Google Fonts `<link>`) — override via
`frame.md`. To use the real logo image instead of the rendered wordmark, replace the
`.wordmark` element with an `<img>` (logo URL is in `shortform-video.config.json` →
`brandTokens.logoUrl`) and keep the same timeline tweens. Sync the flare peak (~0.66s) to a
soft impact SFX.
