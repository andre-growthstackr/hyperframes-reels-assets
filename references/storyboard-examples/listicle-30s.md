# Storyboard example — "Listicle" (30s)

**Format:** Numbered listicle · **Meta:** 9:16 · 1080×1920 · ~30s · dark-default · GrowthStackr
brand · **Goal:** save → follow.

A listicle trades the source-diagram beat for **N discrete item beats**, each a fast card with its
own coral index. Arc used: **hook (the count) → item 1 → item 2 → item 3 → payoff metric → CTA
(save).** Pace is high; keep each item to one caption idea. The number in the hook must match the
items delivered. Real figures only, `demo` / `[din siffra]` otherwise.

---

## Scene 00 — Hook (the count)
- **Time:** 0.0–3.0s
- **Transcript:** "Tre sätt att fylla din pipeline utan att lyfta ett finger."
- **Layout:** fullscreen head
- **Visual purpose:** promise a countable, saveable list
- **Caption beats:** "tre sätt", "utan ett finger"
- **Asset source:** `fullscreen-talking-head` (kicker "3 SÄTT", vignette on) + `caption-pill`
- **SFX:** subtle_hit
- **Motion:** fast push-in; coral underline under "tre sätt"

## Scene 01 — Item 1
- **Time:** 3.0–9.0s
- **Transcript:** "Ett: låt en automation dra in leads från din källa."
- **Layout:** split-50-50 (item card top, head bottom)
- **Visual purpose:** deliver the first item, fast and clear
- **Caption beats:** "ett", "från din källa"
- **Asset source:** `split-50-50` holding a re-skinned `metric-card` in single-cell "item" mode
  (eyebrow "01", title = the item) top; head bottom · `caption-pill`
- **SFX:** pop on the "01" index
- **Motion:** card pops in, coral on the "01" index only → **light-flare** into Scene 02

## Scene 02 — Item 2
- **Time:** 9.0–15.0s
- **Transcript:** "Två: en prompt i Claude Code bygger flödet åt dig."
- **Layout:** split-50-50 (prompt box top, head bottom)
- **Visual purpose:** second item, show the tool this time
- **Caption beats:** "två", "bygger flödet"
- **Asset source:** `split-50-50` holding `claude-prompt-box` (promptText = the real prompt, eyebrow "02") top; head bottom · `caption-pill`
- **SFX:** soft_impact on "02" + soft_whoosh
- **Motion:** panel slides to split; prompt types out; coral on "02" index → **light-flare** into Scene 03

## Scene 03 — Item 3 (with proof)
- **Time:** 15.0–22.0s
- **Transcript:** "Tre: den städar och levererar direkt till ditt CRM. (demo)"
- **Layout:** fullscreen graphic
- **Visual purpose:** third item, prove it with real output
- **Caption beats:** "tre", "till ditt CRM"
- **Asset source:** `browser-frame` (imageSrc = CRM screenshot, demo, eyebrow "03") + `ui-highlight` (coral rect + label)
- **SFX:** ding on reveal, pop on highlight
- **Motion:** window scales in, slow Ken Burns; spotlight pops on "03" column → **light-flare** into Scene 04

## Scene 04 — Payoff metric
- **Time:** 22.0–27.0s
- **Transcript:** "Tillsammans: [din siffra] leads i veckan, noll manuellt arbete. (demo)"
- **Layout:** fullscreen graphic
- **Visual purpose:** tie the three items to one number
- **Caption beats:** "[din siffra] leads", "noll manuellt"
- **Asset source:** `metric-card` (values incl `[din siffra]`, heroIndex on lead stat, eyebrow "demo")
- **SFX:** soft_impact + ding
- **Motion:** cells pop + count up; coral on hero number → **light-flare** into CTA

## Scene 05 — CTA (save)
- **Time:** 27.0–30.0s
- **Transcript:** "Spara de här tre. Följ för fler."
- **Layout:** closer plate
- **Visual purpose:** save → follow CTA
- **Caption beats:** "spara de här", "följ för fler"
- **Asset source:** `cta-scene` (closerLine ≤5 words, ctaLabel "Spara + följ")
- **SFX:** subtle_hit as pill lands
- **Motion:** closer reveals, coral pill overshoots, hairline draws

---

**Transition budget:** 5 `light-flare-transition` — one between each item and into the CTA (01→02,
02→03, 03→04, 04→05). At the high end of the 3–6 budget on purpose: flares are the list's rhythm.
**Coral:** the item index (01/02/03) carries the one coral per item beat; hook underline, hero
number, CTA pill elsewhere. The hook count must equal the item count. Real numbers only, or `demo`.
