# motion-references/cursor-clicks/

**Built component:** [`../../../components/ui-highlight`](../../../components/ui-highlight)

## What is this?
Clips of **cursor moves, clicks, and spotlight callouts** you like — a cursor gliding to a UI
element, a click, then the element lit up. The reference feel; the built `ui-highlight` component is
the implementation for the spotlight half (dim scrim + coral-outlined rect + label + arrow).

## When to use it?
Pull when building or tuning a "look here" callout on a screenshot or browser frame — the moment
that draws the eye to one UI element. Match the cursor ease and the spotlight pop to the clips here.

## What feeling?
Guided, calm, precise. The eye is led, not yanked. One thing lights up at a time.

### What I like (target bullets)
- Cursor moves with an ease-out glide, fast in / slow settle, no jitter.
- Click is a small, quiet press — a soft scale-down, not a cartoon ripple.
- Spotlight rect pops in via the dim-scrim hole; coral border breathes gently after.
- Coral border + arrow share the one accent; no second coral.
- Label / arrow fade in just after the rect, not before.
- Clean exit — scrim lifts, no lingering glow.

Drop clips + a `notes.md` (shape in the parent README). `.gitkeep` holds the folder until then.
