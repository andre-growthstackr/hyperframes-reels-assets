# `assets/gradients/` — reusable CSS gradients

**What is this?**
On-brand CSS gradients pulled from [`frame.md`](../../frame.md) and the scene components, ready to
paste into a component's `:root` or a background element. Ships one file: `gradients.css`. These
are the *flat CSS* grounds — the pixel-grid raster grounds live in [`../backgrounds/`](../backgrounds/)
(`ground-{dark,cream,coral}.jpg`); use those for scene cards, use these when a flat CSS fill is
enough or when you need a subtle radial/wave layer on top.

**When to use it?**
- `--grad-dark-radial` — the default dark backdrop on almost every scene. Near-black, centered
  top glow. Reach for this before anything else.
- `--grad-light-radial` — light-mode / `ground-cream`-adjacent scenes only (occasional).
- `--grad-coral-wave` / `--grad-violet-wave` — a **toned-down** emphasis layer for a single
  hero / CTA moment. Opt-in, low opacity (~0.09–0.16). This is the coral-fires-once move at the
  gradient layer — never a decorative wash.

**What feeling?**
Dark-default, premium, calm. The dark radial is the quiet room the type lives in. The coral wave
is a whisper of warmth behind one focal moment — it must **never wash over a talking-head face**
(it kills skin tone and the split-screen contrast). Keep it behind graphics, above the seam only.

## Hard rules (from `frame.md`)
- Coral fires **once per frame**. If the coral wave is on, the frame's coral pill / italic / pin-dot
  is off. Do not stack coral atoms.
- **No gradient text** (`background-clip: text` is banned).
- Never put the coral or violet wave over the talking-head video — grounds apply to the
  background element (`.has-ground`), never to the head, caption pill, or a card.
- Keep the wave opacity in the 0.09–0.16 band. Louder reads as generic-SaaS gradient slop.
