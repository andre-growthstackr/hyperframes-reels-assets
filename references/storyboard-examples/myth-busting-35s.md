# Storyboard example — "Myth busting" (35s)

**Format:** Myth / contrarian take · **Meta:** 9:16 · 1080×1920 · ~35s · dark-default ·
GrowthStackr brand · **Goal:** share → follow.

A myth-buster leads with the **false belief**, breaks it, then rebuilds with proof. Arc used:
**hook (the myth) → the turn → correction diagram → UI proof → metric → CTA (share).** The tension
is the false-vs-true swap; the `light-flare` earns its keep on the turn. Coral fires once per beat.
Real numbers only, `demo` otherwise, `[din siffra]` until supplied.

---

## Scene 00 — Hook (the myth)
- **Time:** 0.0–3.0s
- **Transcript:** "Alla säger att du behöver ett stort säljteam för att fylla din pipeline."
- **Layout:** fullscreen head
- **Visual purpose:** state the false belief the audience holds
- **Caption beats:** "alla säger", "stort säljteam"
- **Asset source:** `fullscreen-talking-head` (kicker "MYT", vignette on) + `caption-pill`
- **SFX:** subtle_hit
- **Motion:** fast push-in; caption pill states the myth plainly, no coral yet

## Scene 01 — The turn
- **Time:** 3.0–8.0s
- **Transcript:** "Fel. En person med rätt automation slår ett helt team."
- **Layout:** fullscreen head
- **Visual purpose:** the hard pivot — break the myth
- **Caption beats:** "fel", "rätt automation"
- **Asset source:** `fullscreen-talking-head` + `caption-pill` (coral highlight on "fel")
- **SFX:** soft_impact on "fel"
- **Motion:** quick scale-punch on "fel"; coral highlight on the caption word → **light-flare** into Scene 02

## Scene 02 — Correction diagram
- **Time:** 8.0–15.0s
- **Transcript:** "Så här: en källa, ett automatiserat flöde, en fylld pipeline. Ingen armé."
- **Layout:** fullscreen graphic
- **Visual purpose:** show the leaner true model
- **Caption beats:** "ett flöde", "ingen armé"
- **Asset source:** `workflow-diagram` (3 nodes: källa → flöde → pipeline, heroIndex on "flöde"), re-skinned via frame.md
- **SFX:** pop per node
- **Motion:** nodes stagger, connectors draw; coral only on hero node → **light-flare** into Scene 03

## Scene 03 — UI proof
- **Time:** 15.0–23.0s
- **Transcript:** "Det här körde en enda person. (demo)"
- **Layout:** fullscreen graphic
- **Visual purpose:** prove the lean claim with real output
- **Caption beats:** "en enda person", "det här"
- **Asset source:** `browser-frame` (imageSrc = dashboard screenshot, demo) + `ui-highlight` (coral rect + label)
- **SFX:** ding on reveal, pop on highlight
- **Motion:** window scales in, slow Ken Burns; spotlight pops → **light-flare** into Scene 04

## Scene 04 — Metric
- **Time:** 23.0–29.0s
- **Transcript:** "[din siffra] leads, noll extra anställda. (demo)"
- **Layout:** fullscreen graphic
- **Visual purpose:** quantify the busted myth
- **Caption beats:** "[din siffra] leads", "noll anställda"
- **Asset source:** `metric-card` (values incl `[din siffra]`, heroIndex on lead stat, eyebrow "demo")
- **SFX:** soft_impact + ding
- **Motion:** cells pop + count up; coral on hero number → **light-flare** into CTA

## Scene 05 — CTA (share)
- **Time:** 29.0–33.0s
- **Transcript:** "Dela med någon som fortfarande gör det för hand. Följ för mer."
- **Layout:** closer plate
- **Visual purpose:** share → follow CTA
- **Caption beats:** "dela med någon", "följ för mer"
- **Asset source:** `cta-scene` (closerLine ≤5 words, ctaLabel "Dela + följ")
- **SFX:** subtle_hit as pill lands
- **Motion:** closer reveals, coral pill overshoots, hairline draws

---

**Transition budget:** 4 `light-flare-transition` (01→02 on the turn, 02→03, 03→04, 04→05).
**Coral:** withheld on the myth (00), then fires on the correction word (01) and once per beat
after. The turn (01) is the emotional center — spend the first flare there. Real numbers only,
or `demo`.
