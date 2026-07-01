# Storyboard example — "Comment for link" (30s)

**Format:** Lead magnet, comment-gated · **Meta:** 9:16 · 1080×1920 · ~30s · dark-default ·
GrowthStackr brand · **Goal:** comment → link (auto-DM).

The comment-gate is a lead-magnet play: hook a specific asset, prove it's real, then make the CTA
a single **keyword** the viewer types. Arc used: **hook (the freebie) → what's in it (diagram) →
proof (UI) → the keyword CTA (repeated).** The keyword is stated early and closed on — repetition
is the mechanic. Anything shown as a result must be real; `[din siffra]` / `demo` hold otherwise.

---

## Scene 00 — Hook (the freebie)
- **Time:** 0.0–3.0s
- **Transcript:** "Jag ger bort hela mallen som drar in leads automatiskt. Gratis."
- **Layout:** fullscreen head
- **Visual purpose:** promise a concrete, gettable asset
- **Caption beats:** "hela mallen", "gratis"
- **Asset source:** `fullscreen-talking-head` (kicker "GRATIS MALL", vignette on) + `caption-pill`
- **SFX:** subtle_hit
- **Motion:** fast push-in; coral underline under "gratis"

## Scene 01 — What's in it
- **Time:** 3.0–10.0s
- **Transcript:** "Den kopplar din källa, städar datan, och fyller din lista automatiskt."
- **Layout:** fullscreen graphic
- **Visual purpose:** show the value inside the magnet, not just the wrapper
- **Caption beats:** "kopplar din källa", "fyller din lista"
- **Asset source:** `workflow-diagram` (3 nodes: källa → mall → lista, heroIndex on "mall"), re-skinned via frame.md
- **SFX:** pop per node
- **Motion:** nodes stagger, connectors draw; coral only on hero node → **light-flare** into Scene 02

## Scene 02 — Proof (UI)
- **Time:** 10.0–18.0s
- **Transcript:** "Så här ser resultatet ut — riktig, ifylld lista. (demo)"
- **Layout:** fullscreen graphic
- **Visual purpose:** prove the magnet actually delivers
- **Caption beats:** "riktig", "ifylld lista"
- **Asset source:** `browser-frame` (imageSrc = filled-list screenshot, demo) + `ui-highlight` (coral rect + label on the list)
- **SFX:** ding on reveal, pop on highlight
- **Motion:** window scales in, slow Ken Burns; spotlight pops → **light-flare** into Scene 03

## Scene 03 — The keyword CTA
- **Time:** 18.0–26.0s
- **Transcript:** "Skriv 'mall' i en kommentar så skickar jag den direkt i DM."
- **Layout:** fullscreen head, then closer plate
- **Visual purpose:** comment → link, one keyword, repeated
- **Caption beats:** "skriv 'mall'", "direkt i DM"
- **Asset source:** `fullscreen-talking-head` → `cta-scene` (closerLine "Skriv mall", ctaLabel "Kommentera 'mall'")
- **SFX:** subtle_hit as pill lands
- **Motion:** slow push-in; closer reveals, coral pill overshoots on the keyword, hairline draws

---

**Transition budget:** 3 `light-flare-transition` (01→02, 02→03). **Coral:** once per beat
(underline, hero node, highlight, keyword pill). The keyword ("mall") is the single repeated CTA —
name it in the hook chip and close on it. Real numbers only, or `demo`. Never fabricate.
