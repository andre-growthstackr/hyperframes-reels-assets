# motion-references/light-flares/

**Built component:** [`../../../components/light-flare-transition`](../../../components/light-flare-transition)

## What is this?
Clips of **warm light-leak flares** you like — the signature GrowthStackr section change. The
reference feel; the built `light-flare-transition` component is the implementation (soft warm/coral
sweep, the incoming shot revealed at the flare's peak).

## When to use it?
Pull when tuning the signature transition. This is the one transition motion the whole library
leans on — get its bloom and drift right and the short reads on-brand. Budget **3–6 per 30–60s
short**, at real section changes, synced to a swoosh SFX.

## What feeling?
Premium light-leak, warm, soft. A glow that passes through, not a flash that hits.

### What I like (target bullets)
- Soft warm/coral bloom that drifts L→R, `mix-blend-mode: screen`, 0.5–1s.
- Fast in, slow settle — the glow rises quickly, eases through, fades clean.
- The incoming shot is revealed *at the peak*, not before or after.
- Small glow, never a hard full-frame white flash.
- Synced to a swoosh SFX — the sound and the peak land together.
- No glitch, no whip, no dark wipe — those are bad examples; label them so.

Drop clips + a `notes.md` (shape in the parent README). `.gitkeep` holds the folder until then.
