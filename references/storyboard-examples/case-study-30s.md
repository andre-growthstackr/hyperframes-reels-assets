# Storyboard example — "Case study" (30s)

**Format:** Result / case study · **Meta:** 9:16 · 1080×1920 · ~30s · dark-default · GrowthStackr
brand · **Goal:** DM → call.

A case study inverts the arc — it **leads with the result**, then earns it backward: metric first,
then the proof and the how. Arc used: **hook (the result) → context → UI proof → how-it-worked
diagram → CTA.** Truth rule is strict here: every number shown as a case result must be **real**;
if you only have demo figures, label them `demo` and soften the claim. Placeholder `[din siffra]`
holds until the real figure is supplied.

---

## Scene 00 — Hook (the result)
- **Time:** 0.0–3.0s
- **Transcript:** "En kund gick från [din siffra] till [din siffra] bokade samtal på 30 dagar."
- **Layout:** fullscreen graphic
- **Visual purpose:** lead with the outcome, no warm-up
- **Caption beats:** "[din siffra] bokade samtal", "på 30 dagar"
- **Asset source:** `metric-card` (2 values, before → after, heroIndex on "after"; eyebrow "resultat" only if real, else "demo") + `caption-pill`
- **SFX:** soft_impact + ding on the after number
- **Motion:** numbers count up, hero pops; coral on the after value → **light-flare** into Scene 01

## Scene 01 — Context (who + what)
- **Time:** 3.0–9.0s
- **Transcript:** "De sålde B2B, gjorde allt manuellt, och tappade leads varje vecka."
- **Layout:** fullscreen head
- **Visual purpose:** ground the story in a real, relatable starting point
- **Caption beats:** "gjorde allt manuellt", "tappade leads"
- **Asset source:** `fullscreen-talking-head` (kicker "CASE", vignette on) + `caption-pill`
- **SFX:** subtle_hit
- **Motion:** slow push-in; coral underline under "tappade leads"

## Scene 02 — UI proof
- **Time:** 9.0–17.0s
- **Transcript:** "Så här ser deras pipeline ut nu — ifylld automatiskt. (demo)"
- **Layout:** fullscreen graphic
- **Visual purpose:** show the real (or demo-labelled) system as proof
- **Caption beats:** "deras pipeline", "ifylld automatiskt"
- **Asset source:** `browser-frame` (imageSrc = CRM / dashboard screenshot, demo) + `ui-highlight` (rect over the filled column, coral label)
- **SFX:** ding on reveal, pop on highlight
- **Motion:** window scales in, slow Ken Burns; spotlight pops → **light-flare** into Scene 03

## Scene 03 — How it worked
- **Time:** 17.0–23.0s
- **Transcript:** "En automation drog in leads, städade dem, och skickade dem till säljaren."
- **Layout:** fullscreen graphic
- **Visual purpose:** show the mechanism in one glance
- **Caption beats:** "drog in leads", "till säljaren"
- **Asset source:** `workflow-diagram` (3 nodes: källa → automation → säljare, heroIndex on automation), re-skinned via frame.md
- **SFX:** pop per node
- **Motion:** nodes stagger, connectors draw; coral only on the hero node → **light-flare** into CTA

## Scene 04 — CTA
- **Time:** 23.0–28.0s
- **Transcript:** "Vill du ha samma uppsättning? Skicka 'case' i DM."
- **Layout:** fullscreen head, then closer plate
- **Visual purpose:** DM → call CTA
- **Caption beats:** "samma uppsättning", "skicka 'case'"
- **Asset source:** `fullscreen-talking-head` → `cta-scene` (closerLine ≤5 words, ctaLabel "DM 'case'")
- **SFX:** subtle_hit as pill lands
- **Motion:** slow push-in; closer reveals, pill overshoots, hairline draws

---

**Transition budget:** 4 `light-flare-transition` (00→01, 02→03, 03→04). **Coral:** once per beat
(after number, underline, highlight, hero node, CTA pill). **Truth rule is load-bearing here** —
real case numbers only, or `demo`. Never fabricate.
