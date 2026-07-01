# motion-references/metric-cards/

**Built component:** [`../../../components/metric-card`](../../../components/metric-card)

## What is this?
Clips of **number reveals** you like — a stat popping in and counting up. The reference feel; the
built `metric-card` component is the implementation (staggered pop-in + count-up, coral on the hero
number).

## When to use it?
Pull when building or tuning a metric / stat beat. Match the count-up curve and the stagger to the
clips here. Remember: real numbers count up; `[din siffra]` placeholders stay static.

## What feeling?
Weighty, precise, calm. The number lands like a ledger entry, not a slot machine.

### What I like (target bullets)
- Fast in, slow settle — cell pops, number eases to its final value.
- Count-up decelerates into the last digit; no infinite spinning.
- Staggered reveal across cells (~80–120ms apart), hero cell leads.
- Coral on exactly one hero number, never on every cell.
- No bounce on the card; a small pop is fine, a spring is not.
- Clean hold once landed — the number sits still to be read.

Drop clips + a `notes.md` (shape in the parent README). `.gitkeep` holds the folder until then.
