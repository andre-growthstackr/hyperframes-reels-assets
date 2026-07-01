# Storyboard example — "Claude Code tutorial" (45s)

**Format:** How-to / tutorial · **Meta:** 9:16 · 1080×1920 · ~45s · dark-default · GrowthStackr
brand · **Goal:** save / follow.

A how-to bends the canonical arc: the hook promises a *skill*, the "tool intro" is the prompt you
type, the "source diagram" becomes the step map, and the UI proof is the live result. Arc used:
**hook → prompt intro → step map → UI proof → metric card → CTA.** Keep it teach-forward — the
viewer should feel they can copy it. Numbers stay `[din siffra]` until supplied; demo output is
labelled `demo`.

---

## Scene 00 — Hook (the promise)
- **Time:** 0.0–3.0s
- **Transcript:** "Så här bygger du en hel automation i Claude Code på under tre minuter."
- **Layout:** fullscreen head
- **Visual purpose:** promise the skill, set the stakes low
- **Caption beats:** "en hel automation", "under tre minuter"
- **Asset source:** `fullscreen-talking-head` (kicker "TUTORIAL", vignette on) + `caption-pill`
- **SFX:** subtle_hit
- **Motion:** fast push-in; coral underline under "tre minuter"

## Scene 01 — The prompt (step 1)
- **Time:** 3.0–10.0s
- **Transcript:** "Steg ett: du skriver en enda prompt som beskriver vad du vill ha."
- **Layout:** split-50-50 (prompt box top, head bottom)
- **Visual purpose:** show the exact input the viewer will type
- **Caption beats:** "steg ett", "en enda prompt"
- **Asset source:** `split-50-50` holding `claude-prompt-box` (promptText = the real prompt, appName "Claude Code") top; head bottom · `caption-pill`
- **SFX:** soft_whoosh on panel slide + soft_impact on "Claude Code"
- **Motion:** panel slides down to split; prompt types out; caret blinks → **light-flare** into Scene 02

## Scene 02 — Step map
- **Time:** 10.0–16.0s
- **Transcript:** "Den gör tre saker: läser din data, bygger flödet, testar det."
- **Layout:** fullscreen graphic
- **Visual purpose:** make the process legible as discrete steps
- **Caption beats:** "läser", "bygger", "testar"
- **Asset source:** `workflow-diagram` (3 nodes: läser → bygger → testar, heroIndex on "bygger"), re-skinned via frame.md
- **SFX:** pop per node
- **Motion:** nodes stagger pop-in, connectors draw; coral only on the hero node

## Scene 03 — UI proof (it ran)
- **Time:** 16.0–26.0s
- **Transcript:** "Och här kör den — du ser filerna skapas i realtid. (demo)"
- **Layout:** fullscreen graphic
- **Visual purpose:** prove the prompt actually produced something
- **Caption beats:** "kör den", "i realtid"
- **Asset source:** `browser-frame` (imageSrc = terminal / editor screenshot, demo) +
  `ui-highlight` (rect over the output line, coral label "output")
- **SFX:** ding on first result, pop on highlight
- **Motion:** window scales in, slow Ken Burns; spotlight pops on the output → **light-flare** into Scene 04

## Scene 04 — Metric card (the payoff)
- **Time:** 26.0–32.0s
- **Transcript:** "[din siffra] minuter sparade per vecka, noll kod skriven för hand. (demo)"
- **Layout:** fullscreen graphic
- **Visual purpose:** quantify the time saved
- **Caption beats:** "[din siffra] minuter", "noll kod"
- **Asset source:** `metric-card` (values incl `[din siffra]`, heroIndex on the time stat, eyebrow "demo")
- **SFX:** soft_impact + ding
- **Motion:** cells pop in + count up; coral on hero number → **light-flare** into CTA

## Scene 05 — CTA (save it)
- **Time:** 32.0–38.0s
- **Transcript:** "Spara den här så har du mallen, och följ för del två."
- **Layout:** fullscreen head, then closer plate
- **Visual purpose:** save + follow CTA
- **Caption beats:** "spara den här", "följ för del två"
- **Asset source:** `fullscreen-talking-head` → `cta-scene` (closerLine ≤5 words, ctaLabel "Spara + följ")
- **SFX:** subtle_hit as pill lands
- **Motion:** slow push-in; closer reveals, pill overshoots, hairline draws

---

**Transition budget:** 3 `light-flare-transition` (01→02, 03→04, 04→05). **Coral:** once per beat.
Never fabricate a result; mark demo output `demo`. Keep the prompt real and copyable.
