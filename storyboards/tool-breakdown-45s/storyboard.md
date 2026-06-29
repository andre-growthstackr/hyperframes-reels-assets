# Storyboard — "Tool breakdown" (45s)

A reusable director plan for the Vayne-style tool-breakdown arc, wired to this repo's
library assets. For a new tool video, follow this structure, re-map each scene's transcript
to the real recording, and re-skin the components via the current `frame.md`. Reuse the
*structure*, change only content + aesthetic.

**Meta:** 9:16 · 1080×1920 · ~45s · dark-default · GrowthStackr brand · goal: comments → lead

Static key frames for each scene are in `frames/` (one representative PNG per scene), built
for QC before animating.

---

## Scene 00 — Hook
- **Time:** 0.0–2.2s
- **Transcript:** "Det här AI-systemet skriver personliga mail åt dig medan du sover."
- **Layout:** Fullscreen kinetic hook — bold Inter statement, Instrument Serif Italic on the outcome word, coral underline
- **Visual purpose:** social-proof energy, "this is a hack"
- **Caption beats:** "det här AI-systemet", "medan du sover"
- **Asset source:** hyperframes (kinetic title) → optional `animations/logo-reveal-coral` tag-in
- **SFX:** subtle_hit
- **Motion:** fast push-in; underline draws L→R

## Scene 01 — Tool intro (prompt box)
- **Time:** 2.2–6.0s
- **Transcript:** "Du ger Claude Code en enda prompt och det bygger hela flödet."
- **Layout:** Fullscreen prompt box, talking-head can sit as PiP corner
- **Visual purpose:** present the tool while the person explains
- **Caption beats:** "en enda prompt", "hela flödet"
- **Asset source:** library `claude-prompt-box` (props: promptText = the real prompt), re-skinned
- **SFX:** soft_whoosh + soft_impact (on the name) + logo-flash "Claude Code"
- **Motion:** box drops in; prompt types out; send pulses

## Scene 02 — Source diagram
- **Time:** 6.0–9.5s
- **Transcript:** "Det hämtar namn, roll och företag direkt från LinkedIn."
- **Layout:** Fullscreen motion graphic — central node + LinkedIn source, connecting lines
- **Visual purpose:** show the data flow
- **Caption beats:** "från LinkedIn", "namn, roll"
- **Asset source:** Diagram Card (build per `components.md`), re-skinned via frame.md
- **SFX:** pop per node
- **Motion:** nodes fade/zoom in staggered → **light-flare** into next section

## Scene 03 — UI proof
- **Time:** 9.5–16.0s
- **Transcript:** "...och städar datan automatiskt — tar bort emojis, fixar versaler, dedupar."
- **Layout:** Fullscreen UI — spreadsheet/tool in a rounded frame on dark bg
- **Visual purpose:** the proof section — real output
- **Caption beats:** "städar datan", "automatiskt", "dedupar"
- **Asset source:** Playwright screenshot of the real tool (public URL) OR user-supplied shot
- **SFX:** ding on result; pop on each column highlight
- **Motion:** zoom to columns, highlight rows; gentle Ken Burns

## Scene 04 — Metric card
- **Time:** 16.0–20.0s
- **Transcript:** "[din siffra] profiler per sökning. [din siffra] % svarsfrekvens."
- **Layout:** Metric card (2×2 grid)
- **Visual purpose:** quantify the value prop
- **Caption beats:** "[din siffra] profiler", "per sökning"
- **Asset source:** library `metric-card` (real numbers passed in; never fabricate)
- **SFX:** soft_impact + ding
- **Motion:** numbers pop in staggered + count up → **light-flare** into CTA

## Scene 05 — CTA (fullscreen talking head)
- **Time:** 20.0–24.0s
- **Transcript:** "Skriv 'set up' i en kommentar så skickar jag hela systemet."
- **Layout:** Fullscreen talking head
- **Visual purpose:** personal CTA, comment → lead
- **Caption beats:** "skriv 'set up'", "hela systemet"
- **Asset source:** input_video (the recording)
- **SFX:** subtle_hit
- **Motion:** slow push-in; coral keyword pill on-screen

---

## How the skill uses this
Pull this storyboard as a starting arc for any tool-breakdown short. Each scene names the
library asset to reuse (`claude-prompt-box`, `metric-card`, `light-flare-transition`,
`logo-reveal-coral`) — pull it, re-skin via `frame.md`, drop in the real transcript +
captions. Numbers stay as `[din siffra]` placeholders until the real figure is supplied.
