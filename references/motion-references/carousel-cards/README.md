# motion-references/carousel-cards/

**Built component:** none yet — composed from [`../../../components/split-50-50`](../../../components/split-50-50)
+ a re-skinned card (e.g. [`../../../components/metric-card`](../../../components/metric-card) in
single-cell "item" mode) per `frame.md`.

## What is this?
Clips of **card-to-card swaps** you like — the listicle / carousel move where one item card slides
out and the next slides in, each with its own index. The reference feel for a motion the library
doesn't yet ship as a single component, so it's built by composition.

## When to use it?
Pull when building a listicle or any beat that steps through discrete item cards
(see [`../../storyboard-examples/listicle-30s.md`](../../storyboard-examples/listicle-30s.md)).
Match the swap timing and the index-pop to the clips here.

## What feeling?
Crisp, rhythmic, calm. Each card is its own beat; the swap keeps the list moving without rushing.

### What I like (target bullets)
- Fast in, slow settle on each card; outgoing card exits clean, no overlap smear.
- Directional swap (slide) reads as "next," not a random cut.
- Coral fires on the item index (01 / 02 / 03) only, one per card.
- No bounce; a small pop on the index is fine.
- Consistent rhythm card-to-card — the swap cadence matches the caption cadence.
- A light-flare between cards is the on-brand connective tissue (see `../light-flares/`).

Drop clips + a `notes.md` (shape in the parent README). `.gitkeep` holds the folder until then.
