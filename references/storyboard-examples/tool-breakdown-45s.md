# Storyboard example — "AI-tool breakdown" (45s)

**Format:** AI-tool breakdown · **Meta:** 9:16 · 1080×1920 · ~45s · dark-default · GrowthStackr
brand · **Goal:** comments → lead.

The canonical arc, front to back: **hook → tool intro → source diagram → UI proof → metric card
→ CTA.** This is the reference twin of the built plan in
[`../../storyboards/tool-breakdown-45s/storyboard.md`](../../storyboards/tool-breakdown-45s/storyboard.md);
reuse the structure, re-map each beat to the real recording, re-skin via `frame.md`. Numbers stay
`[din siffra]` until supplied.

---

## Scene 00 — Hook
- **Time:** 0.0–2.6s
- **Transcript:** "Det här AI-verktyget bygger hela din leadslista medan du sover."
- **Layout:** fullscreen head
- **Visual purpose:** stop the scroll, promise the outcome
- **Caption beats:** "det här AI-verktyget", "medan du sover"
- **Asset source:** `fullscreen-talking-head` (kicker off, vignette on) + `caption-pill`
- **SFX:** subtle_hit on the last caption chunk
- **Motion:** fast push-in, coral underline draws L→R under the outcome word

## Scene 01 — Tool intro (prompt box)
- **Time:** 2.6–8.0s
- **Transcript:** "Du ger Claude Code en enda prompt, och den sätter upp hela flödet."
- **Layout:** split-50-50 (prompt box top, head bottom)
- **Visual purpose:** present the tool while the person explains
- **Caption beats:** "en enda prompt", "hela flödet"
- **Asset source:** `split-50-50` scaffold holding `claude-prompt-box` (promptText = the real
  prompt) top slot; head bottom · `caption-pill` at the seam
- **SFX:** soft_whoosh as the panel slides down + soft_impact on "Claude Code"
- **Motion:** opens full head, top panel slides down to form the split; prompt types out; send pulses → **light-flare** into Scene 02

## Scene 02 — Source diagram
- **Time:** 8.0–13.0s
- **Transcript:** "Den hämtar namn, roll och företag direkt från källan och rensar datan."
- **Layout:** fullscreen graphic
- **Visual purpose:** show where the data flows
- **Caption beats:** "från källan", "rensar datan"
- **Asset source:** `workflow-diagram` (nodes = source → tool → output, heroIndex = tool node), re-skinned via frame.md
- **SFX:** pop per node
- **Motion:** nodes stagger pop-in, connectors draw between them, coral only on the hero node

## Scene 03 — UI proof
- **Time:** 13.0–22.0s
- **Transcript:** "Och här är resultatet — riktig data, städad, redo att exportera. (demo)"
- **Layout:** fullscreen graphic
- **Visual purpose:** the proof beat, real output on screen
- **Caption beats:** "riktig data", "redo att exportera"
- **Asset source:** `browser-frame` (imageSrc = real tool screenshot / demo dataset, url + title set)
  with `ui-highlight` (rect over the key column, coral border + label)
- **SFX:** ding on the result reveal, pop on the highlight
- **Motion:** window slides up + scales in, slow Ken Burns; spotlight rect pops on the column → **light-flare** into Scene 04

## Scene 04 — Metric card
- **Time:** 22.0–28.0s
- **Transcript:** "[din siffra] leads per körning. [din siffra] % svarsfrekvens. (demo)"
- **Layout:** fullscreen graphic
- **Visual purpose:** quantify the value prop
- **Caption beats:** "[din siffra] leads", "per körning"
- **Asset source:** `metric-card` (values = real numbers or `[din siffra]`, heroIndex on the lead
  stat, eyebrow "demo" if figures are demo)
- **SFX:** soft_impact + ding
- **Motion:** cells pop in staggered + count up; coral accent on the hero number → **light-flare** into CTA

## Scene 05 — CTA
- **Time:** 28.0–34.0s
- **Transcript:** "Skriv 'flöde' i en kommentar så skickar jag hela uppsättningen."
- **Layout:** fullscreen head, then closer plate
- **Visual purpose:** personal CTA, comment → lead
- **Caption beats:** "skriv 'flöde'", "hela uppsättningen"
- **Asset source:** `fullscreen-talking-head` for the personal line → `cta-scene`
  (closerLine ≤5 words, ctaLabel = "Skriv 'flöde'") to close
- **SFX:** subtle_hit as the coral pill lands
- **Motion:** slow push-in on head; closer reveals, pill overshoots, hairline draws

---

**Transition budget:** 3 `light-flare-transition` (01→02, 03→04, 04→05). **Coral:** once per
beat — underline (00), send pill (01), hero node (02), highlight (03), hero number (04), CTA pill
(05). Never fabricate a result number; mark demo data `demo`.
