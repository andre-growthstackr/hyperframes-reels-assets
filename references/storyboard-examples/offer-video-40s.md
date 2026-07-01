# Storyboard example — "Offer video" (40s)

**Format:** Offer / promo · **Meta:** 9:16 · 1080×1920 · ~40s · dark-default · GrowthStackr brand ·
**Goal:** click → book.

An offer video runs the arc as a pitch: **hook (the pain) → what you get (tool intro) → how it
works (diagram) → proof (UI + metric) → CTA (book).** Keep the anti-hype tone — no `unlock`,
`supercharge`, `10x` (banned per frame.md). Coral fires once per beat, and the giant CTA pill is
the single coral instance of the closer. Any figure shown as a result must be real; `[din siffra]`
and `demo` hold otherwise.

---

## Scene 00 — Hook (the pain)
- **Time:** 0.0–3.2s
- **Transcript:** "Du lägger timmar varje vecka på att leta leads för hand. Det behövs inte."
- **Layout:** fullscreen head
- **Visual purpose:** name the pain the offer removes
- **Caption beats:** "timmar varje vecka", "behövs inte"
- **Asset source:** `fullscreen-talking-head` (vignette on) + `caption-pill`
- **SFX:** subtle_hit
- **Motion:** fast push-in; coral underline under "behövs inte"

## Scene 01 — What you get (tool intro)
- **Time:** 3.2–10.0s
- **Transcript:** "Du får en färdig uppsättning i Claude Code — en prompt, hela flödet."
- **Layout:** split-50-50 (prompt box top, head bottom)
- **Visual purpose:** present the deliverable concretely
- **Caption beats:** "färdig uppsättning", "hela flödet"
- **Asset source:** `split-50-50` holding `claude-prompt-box` (promptText = the real prompt) top; head bottom · `caption-pill`
- **SFX:** soft_whoosh on panel slide + soft_impact on "Claude Code"
- **Motion:** panel slides to split; prompt types out → **light-flare** into Scene 02

## Scene 02 — How it works
- **Time:** 10.0–16.0s
- **Transcript:** "Den kopplar din källa till ett rent flöde, och levererar till ditt CRM."
- **Layout:** fullscreen graphic
- **Visual purpose:** show the mechanism, remove the black box
- **Caption beats:** "din källa", "till ditt CRM"
- **Asset source:** `workflow-diagram` (3 nodes: källa → flöde → CRM, heroIndex on "flöde"), re-skinned via frame.md
- **SFX:** pop per node
- **Motion:** nodes stagger, connectors draw; coral only on hero node → **light-flare** into Scene 03

## Scene 03 — Proof (UI)
- **Time:** 16.0–24.0s
- **Transcript:** "Så här ser det ut när det körs — riktig, städad data. (demo)"
- **Layout:** fullscreen graphic
- **Visual purpose:** show it working, not just described
- **Caption beats:** "när det körs", "städad data"
- **Asset source:** `browser-frame` (imageSrc = tool screenshot, demo) + `ui-highlight` (coral rect + label on the key column)
- **SFX:** ding on reveal, pop on highlight
- **Motion:** window scales in, slow Ken Burns; spotlight pops → **light-flare** into Scene 04

## Scene 04 — Proof (metric)
- **Time:** 24.0–30.0s
- **Transcript:** "[din siffra] leads per körning, utan att du rör en tangent. (demo)"
- **Layout:** fullscreen graphic
- **Visual purpose:** quantify the offer's value
- **Caption beats:** "[din siffra] leads", "per körning"
- **Asset source:** `metric-card` (values incl `[din siffra]`, heroIndex on lead stat, eyebrow "demo")
- **SFX:** soft_impact + ding
- **Motion:** cells pop + count up; coral on hero number → **light-flare** into CTA

## Scene 05 — CTA (book)
- **Time:** 30.0–36.0s
- **Transcript:** "Vill du ha den? Boka ett samtal via länken."
- **Layout:** closer plate
- **Visual purpose:** click → book CTA
- **Caption beats:** "vill du ha den", "boka via länken"
- **Asset source:** `cta-scene` (closerLine ≤5 words, ctaLabel "Boka samtal", the giant coral pill = the frame's one coral instance)
- **SFX:** subtle_hit as pill lands
- **Motion:** closer reveals, pill overshoots, hairline draws, gentle push-in

---

**Transition budget:** 4 `light-flare-transition` (01→02, 02→03, 03→04, 04→05). **Coral:** once per
beat, giant pill closes. No banned hype words. Real numbers only, or `demo`.
