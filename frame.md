---
# frame.md — Claude Leads (GrowthStackr) · video-first companion to design.md
# Atoms are sacred · composition is free · numbers come from the script.

colors:
  # Bakgrunder (mörk stack) — carried verbatim from design.md §1
  bg:              "#050505"       # sidans bas, nästan svart
  bg-soft:         "#0e0f10"       # sektionsband, hover-bg
  bg-card:         "#121416"       # kort-yta
  bg-elevated:     "#1c1f22"       # modaler, popovers, lyfta paneler
  # Text
  fg:              "#ffffff"       # headlines, primär text
  fg-muted:        "#b0b0b0"       # brödtext, ingresser
  fg-subtle:       "#9ca3af"       # captions, helper-text (WCAG 6.8:1)
  # Borders (hairline)
  border:          "rgba(255,255,255,0.08)"
  border-strong:   "rgba(255,255,255,0.16)"
  # Accent (coral, restrained committed)
  accent:          "#ff5b49"
  accent-hover:    "#ff7261"
  accent-soft:     "rgba(255,91,73,0.12)"
  accent-glow:     "rgba(255,91,73,0.32)"
  secondary:       "#7f56d9"       # sekundär violet, sparsamt

typography:
  # Familjer
  font-sans:       "Inter, ui-sans-serif, system-ui, sans-serif"
  font-display:    "'Instrument Serif', ui-serif, Georgia, serif"      # italic accent only
  font-hand:       "'Caveat', ui-serif, cursive"                        # leads-scope note
  font-scope-lp:   "Arial, sans-serif"                                  # leadsplan-scope

  # Reading ramp — verbatim from design.md §2 (clamp min/max) + cqw@1920 for frame use
  fluid-sm:        { min: 14px, max: 16px, cqw: 0.83 }
  fluid-base:      { min: 16px, max: 18px, cqw: 0.94 }
  fluid-lg:        { min: 18px, max: 24px, cqw: 1.25 }
  fluid-xl:        { min: 24px, max: 36px, cqw: 1.88 }
  fluid-2xl:       { min: 32px, max: 56px, cqw: 2.92 }
  fluid-display:   { min: 40px, max: 80px, cqw: 4.17 }

  # Hero / display ramp — frame-native (cqw against 1920). Larger than any web step.
  wordmark-mega:
    fontFamily:    "{typography.font-sans}"
    fontSize:      28cqw            # ≈538px @1920 — the identity plate
    fontWeight:    500
    lineHeight:    0.86
    letterSpacing: -1.7cqw
  display-hero:
    fontFamily:    "{typography.font-sans}"
    fontSize:      13cqw            # ≈250px @1920
    fontWeight:    500
    lineHeight:    1.02
    letterSpacing: -0.5cqw
  display-claim:
    fontFamily:    "{typography.font-sans}"
    fontSize:      8.4cqw           # ≈161px @1920
    fontWeight:    500
    lineHeight:    1.06
    letterSpacing: -0.28cqw
  display-accent-italic:
    # coral italic serif inside a display headline (source: .accent-italic / <em> in .gs-heading)
    fontFamily:    "{typography.font-display}"
    fontStyle:     italic
    fontSize:      inherit
    fontWeight:    400
    color:         "{colors.accent}"
  section-head:
    fontFamily:    "{typography.font-sans}"
    fontSize:      4.4cqw           # ≈85px @1920
    fontWeight:    500
    lineHeight:    1.08
    letterSpacing: -0.14cqw
  stat-ledger:
    fontFamily:    "{typography.font-sans}"
    fontSize:      6.2cqw           # ≈119px — the ledger numeral only
    fontWeight:    500
    lineHeight:    0.94
    letterSpacing: -0.22cqw
    fontFeatureSettings: "'ss01','cv11'"
  body-frame:
    fontFamily:    "{typography.font-sans}"
    fontSize:      1.55cqw          # ≈30px — above the 1.4cqw floor
    fontWeight:    400
    lineHeight:    1.5
    color:         "{colors.fg-muted}"
  eyebrow:
    fontFamily:    "{typography.font-sans}"
    fontSize:      1.15cqw          # ≈22px — chrome only, never load-bearing meaning
    fontWeight:    500
    lineHeight:    1.2
    letterSpacing: 0.06cqw
    textTransform: uppercase
    color:         "{colors.fg-subtle}"
  hand-note:
    fontFamily:    "{typography.font-hand}"
    fontSize:      2.4cqw
    fontWeight:    400
    lineHeight:    1.1
    color:         "{colors.accent}"

rounded:
  card:            1rem              # --radius-card
  pill:            9999px            # --radius-pill
  lp-scope:        11px              # leadsplan-scope override
  lp-input:        "10px 0 0 11px"   # asymmetric input (leads scope only)

spacing:
  # Semantic section rhythm — verbatim
  section-sm:      56px
  section:         80px
  section-lg:      112px
  gutter:          24px
  # Frame-scale
  frame-pad:       5cqw              # safe-area inset on every frame
  frame-pad-tight: 3.4cqw
  stack-md:        2.2cqw
  stack-sm:        1.2cqw

shadows:
  soft:            "0 1px 2px rgba(0,0,0,0.3)"
  card:            "0 4px 16px -4px rgba(0,0,0,0.4)"
  elevated:        "0 12px 32px -8px rgba(0,0,0,0.5)"
  overlay:         "0 24px 64px -16px rgba(0,0,0,0.6)"

motion:
  ease-snappy:     "cubic-bezier(0.25,0.46,0.45,0.94)"
  ease-out-expo:   "cubic-bezier(0.16,1,0.3,1)"
  ease-out-quart:  "cubic-bezier(0.25,1,0.5,1)"
  ease-spring:     "cubic-bezier(0.34,1.4,0.64,1)"
  dur-micro:       0.16s
  dur-enter:       0.5s

components:
  # ── Chrome atoms ──────────────────────────────────────────────────
  hairline:
    height:        1px
    backgroundColor: "{colors.border}"
  hairline-strong:
    height:        1px
    backgroundColor: "{colors.border-strong}"
  eyebrow-label:
    typography:    "{typography.eyebrow}"
    color:         "{colors.fg-subtle}"

  # ── Buttons / CTA ─────────────────────────────────────────────────
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor:     "{colors.fg}"
    typography:    "{typography.fluid-base}"
    rounded:       "{rounded.pill}"
    padding:       "12px 22px"
    shadow:        "{shadows.soft}"
  button-primary-giant:
    # frame-scale variant — coral pill for closer/CTA plates
    backgroundColor: "{colors.accent}"
    textColor:     "{colors.fg}"
    typography:    "{typography.display-claim}"
    rounded:       "{rounded.pill}"
    padding:       "2.2cqw 5.4cqw"
    shadow:        "{shadows.soft}"
  button-secondary:
    backgroundColor: transparent
    textColor:     "{colors.fg}"
    border:        "1px solid {colors.border-strong}"
    typography:    "{typography.fluid-base}"
    rounded:       "{rounded.pill}"
    padding:       "12px 22px"

  # ── Pills / badges ────────────────────────────────────────────────
  price-pill-recommended:
    # "Bäst värde" coral pill on the recommended tier (source: tier-comparison.tsx)
    backgroundColor: "{colors.accent}"
    textColor:     "{colors.fg}"
    typography:    "{typography.eyebrow}"
    rounded:       "{rounded.pill}"
    padding:       "6px 12px"
  price-pill-giant:
    backgroundColor: "{colors.accent}"
    textColor:     "{colors.fg}"
    typography:    "{typography.section-head}"
    rounded:       "{rounded.pill}"
    padding:       "1.4cqw 3cqw"
  tag-neutral:
    backgroundColor: "{colors.accent-soft}"
    textColor:     "{colors.accent}"
    typography:    "{typography.eyebrow}"
    rounded:       "{rounded.pill}"
    padding:       "4px 10px"

  # ── Cards / surfaces ──────────────────────────────────────────────
  card-hairline:
    # default problem-card / value-card — hairline border, no side-stripe accent
    backgroundColor: "{colors.bg-card}"
    textColor:     "{colors.fg}"
    border:        "1px solid {colors.border}"
    rounded:       "{rounded.card}"
    padding:       "2.4cqw"
    shadow:        "{shadows.card}"
  card-elevated:
    backgroundColor: "{colors.bg-elevated}"
    textColor:     "{colors.fg}"
    border:        "1px solid {colors.border-strong}"
    rounded:       "{rounded.card}"
    padding:       "2.4cqw"
    shadow:        "{shadows.elevated}"
  tier-card-recommended:
    # the one recommended tier lifts (bg-elevated + coral hairline + pill on top)
    backgroundColor: "{colors.bg-elevated}"
    textColor:     "{colors.fg}"
    border:        "1px solid {colors.accent}"
    rounded:       "{rounded.card}"
    padding:       "2.6cqw"
    shadow:        "{shadows.elevated}"
  guarantee-row:
    # hairline row — NOT a 3-card grid. Single wide band with divider ticks.
    backgroundColor: "{colors.bg-soft}"
    textColor:     "{colors.fg-muted}"
    border:        "1px solid {colors.border}"
    rounded:       "{rounded.card}"
    padding:       "1.8cqw 2.4cqw"

  # ── Ledger / stat cells ───────────────────────────────────────────
  stat-cell:
    backgroundColor: transparent
    textColor:     "{colors.fg}"
    typography:    "{typography.stat-ledger}"
    border:        "0"
    padding:       "0"
  stat-cell-label:
    typography:    "{typography.eyebrow}"
    color:         "{colors.fg-subtle}"

  # ── Trust band / catalog ──────────────────────────────────────────
  logo-chip:
    backgroundColor: "{colors.bg-card}"
    textColor:     "{colors.fg-muted}"
    typography:    "{typography.fluid-base}"
    border:        "1px solid {colors.border}"
    rounded:       "{rounded.pill}"
    padding:       "0.9cqw 1.8cqw"

  # ── Accent atoms ──────────────────────────────────────────────────
  pin-dot:
    backgroundColor: "{colors.accent}"
    size:          "0.7cqw"
    rounded:       "9999px"
    shadow:        "0 0 0 0.6cqw {colors.accent-soft}"
  focus-ring:
    outline:       "2px solid {colors.accent}"
    outlineOffset: "3px"

  # ── Handwritten note (leads-scope signature) ──────────────────────
  hand-note-block:
    typography:    "{typography.hand-note}"
    color:         "{colors.accent}"
    padding:       "0"

---

# frame.md — Claude Leads (GrowthStackr)

> **Atoms are sacred · composition is free · numbers come from the script.**
> This document is a video-first companion to `design.md`. It does not modify the web spec;
> it re-frames the same brand for the frame as unit. Every hex, weight, radius, and font is
> carried over verbatim; the frontmatter is normative; prose is context.

---

## Overview

Claude Leads is the landing page for GrowthStackr's flagship offer — dark stack, hairline
borders, restrained coral accent, italic serif accents inside otherwise sans-serif display.
The tone is **direct, byggarmässig, anti-hype**. On a frame this means: near-black grounds
(`{colors.bg}`, `{colors.bg-soft}`), a wordmark or claim carrying almost all of the visual
weight, and coral used once — as a pill, an italic word, or a pin-dot — never as a decorative
wash. **Em-dash is forbidden in copy.** Banned words from design.md §0 apply to every frame.

### Frame Craft Bar
- **Squint test.** One element dominates at **3–6× its nearest neighbor**. On a claim plate the
  headline drowns the eyebrow; on a tier plate the recommended card drowns the flankers.
- **Silence test.** Sparse plates (cover, claim, closer, stat) read **60–75% empty**. The
  emptiness is the anti-hype. **Density exception:** `tier-comparison` and `logo catalog` may
  run tight — every other plate must breathe.
- **Restraint test.** Coral fires **once per frame.** One pill, or one italic word, or one
  pin-dot — never all three. If two coral atoms appear at full strength, demote one to
  `{colors.accent-soft}` or drop it.
- **Reference bar.** Aim: a Linear-quality dark editorial plate — hairline rules, oversized
  restrained type, one committed accent. Failure: a generic SaaS feature grid with three coral
  buttons and gradient washes.

---

## Colors

Tokens carry verbatim from design.md §1. At frame scale they behave as follows:

- **Grounds.** `{colors.bg}` is the default full-frame ground; `{colors.bg-soft}` reads as a
  section band and is the ground on data/stat plates; `{colors.bg-card}` and
  `{colors.bg-elevated}` are only for lifted surfaces inside a frame, never for a whole frame.
- **Ink.** `{colors.fg}` on display type; `{colors.fg-muted}` for body-in-frame; `{colors.fg-subtle}`
  for eyebrows and chrome labels only. All three are WCAG-safe against every ground.
- **Hairlines.** `{colors.border}` for structural dividers between rows/cells;
  `{colors.border-strong}` where a surface must read as lifted (elevated cards, recommended tier).
- **Coral accent.** `{colors.accent}` is a **meaning-carrier**, not decoration. Allowed uses per
  frame (pick ONE): `{components.price-pill-recommended}`, an italic word inside a headline
  (`{typography.display-accent-italic}`), a `{components.pin-dot}` on a stat, or a focus/selection
  glow. `{colors.accent-soft}` and `{colors.accent-glow}` are tint-only; they may appear
  simultaneously with the one accent instance (a soft ring around a pin-dot is one instance).
- **Absolute bans.** No side-stripe borders (`border-left/right >1px` as colored accent). No
  gradient text. No coral wash as a decorative background. No blue CTA (coral is lock).

---

## Typography

Two ramps live in the frontmatter.

**Reading ramp** (`fluid-sm` → `fluid-display`) carries the source `clamp()` steps verbatim in
px and adds their `cqw@1920` equivalent so a frame reproduces the same visual step. Body copy
in-frame uses `{typography.body-frame}` (1.55cqw ≈ 30px) — comfortably above the **legibility
floor of 1.4cqw**. Anything below the floor is chrome/colophon; it may never carry the meaning
of a beat.

**Hero ramp** is frame-native: `{typography.wordmark-mega}` (28cqw) for the identity plate,
`{typography.display-hero}` (13cqw) and `{typography.display-claim}` (8.4cqw) for editorial
claims, `{typography.section-head}` (4.4cqw) for section titles inside dense plates,
`{typography.stat-ledger}` (6.2cqw) for the one ledger numeral per stat cell.

**Fit-to-measure headlines.** A headline's block is capped at **≤ 78cqw wide**. Word count steps
the ramp: ≤ 3 words → `display-hero`; 4–6 → `display-claim`; 7+ → `section-head`. A long line
at `display-hero` will scream edge-to-edge; step down. Never let a line touch the safe margin.

**Italic accent.** The italic word inside a display headline is always
`{typography.display-accent-italic}` (Instrument Serif, coral, italic) — set as `<em>` inside
`.gs-heading`, never inline `font-style:italic`. **Italic descender clearance:** any headline
carrying an `<em>` on a word with `y/g/j/p/q` must use `line-height ≥ 1.06` and reserve `pb-1`
(≈ 0.35cqw bottom padding) so descenders never clip.

**Feature settings.** Body and numerals carry `font-feature-settings: 'ss01','cv11'` (alternative
digits) — matters on the stat-ledger plate.

---

## Layout — The Frame

- **Primary:** 1920 × 1080 (16:9). **Secondary:** 1080 × 1920 (9:16). **Tertiary:** 1080 × 1080 (1:1).
- **Safe area:** `{spacing.frame-pad}` = 5cqw inset on all sides (≈96px @1920). No load-bearing
  element crosses into the safe margin. Dense plates may use `{spacing.frame-pad-tight}` (3.4cqw).
- **The vw law.** Frame-relative sizes are expressed in `cqw`. Convert px → cqw against 1920:
  `px ÷ 1920 × 100`. Fixed px is reserved for chrome atoms — hairline thickness (1px), radius
  atoms (`{rounded.card}` = 1rem), shadow specs, and button base padding.
- **cqw vs vw.** In `frame-showcase.html` every frame is a `container-type: size` so the same
  `cqw` numbers resolve against the frame, not the viewport. This lets a 720px-wide reviewable
  frame render at true 16:9 proportions.

---

## Elevation & Depth

Frames stay flat. The depth ceiling is **`{shadows.card}`** for standard lifted surfaces and
**`{shadows.elevated}`** for the one recommended tier per frame. `{shadows.overlay}` is reserved
for modal-in-frame moves and may not be used to fake drama on a claim plate. There is no color
glow beyond `{colors.accent-glow}` used sparingly behind a single pin-dot or focus atom. No
inner shadows. No blurs behind type.

---

## Shapes

Radius scale is exactly two values, verbatim: `{rounded.card}` (1rem) for surfaces,
`{rounded.pill}` (9999px) for CTAs, badges, and price pills. **Mixing is broken** (design.md §6.7):
if a frame carries a pill CTA, other atoms in that frame lean pill or square, never a third
radius. The leads-scope override (`{rounded.lp-scope}` = 11px, plus the asymmetric input) is
scoped to the leads-generering plate only and never appears on the main sequence.

---

## Components

Every buildable unit lives as a frontmatter token. Prose here is intent + when-to-use.

- **`{components.button-primary}` / `{components.button-primary-giant}`** — the coral pill CTA.
  Base carries source values (12/22 padding). `-giant` is the frame-scale variant used on the
  closer plate and any focal CTA moment. Only one giant per sequence.
- **`{components.button-secondary}`** — hairline pill, transparent. Chrome CTA next to the
  primary; carries the source `border-strong` hairline.
- **`{components.price-pill-recommended}` / `{components.price-pill-giant}`** — the "Bäst värde"
  coral pill sitting above the recommended tier. `-giant` scales for a plate where the pill
  itself is the focal atom.
- **`{components.tag-neutral}`** — coral-tint pill for kickers/tags where the coral must appear
  soft (accent-soft ground, accent ink). Ration one per frame.
- **`{components.card-hairline}`** — the default problem/value card. Hairline border on
  `{colors.bg-card}`; **never a side-stripe** on `border-left/right`.
- **`{components.card-elevated}`** — the lifted card, stronger hairline on `{colors.bg-elevated}`.
- **`{components.tier-card-recommended}`** — the one lifted tier per pricing plate. Combines
  elevated ground + `{colors.accent}` hairline + the recommended pill on top. This is the
  brand-signature card.
- **`{components.guarantee-row}`** — the audit-fix row (design.md §5): a single wide hairline row,
  not a three-card grid. Divider ticks separate items.
- **`{components.stat-cell}` + `{components.stat-cell-label}`** — a ledger cell is a numeral
  (`stat-ledger`) sitting above a small uppercase eyebrow label. No card, no border; the ground
  behind is a full-frame `bg-soft` band.
- **`{components.logo-chip}`** — a token-colored pill in the trust-band. Real logos are lifted
  from `next/image` in production; in the frame they are placeholder chips with an entity name.
- **`{components.pin-dot}`** — a single coral dot with a soft glow ring, used to mark one atom
  per frame (e.g., a stat that carries a benchmark). Never more than one per frame.
- **`{components.hand-note-block}`** — the Caveat handwritten note, coral, scoped to
  leads-generering only. If a plate uses it, no other coral atom fires that frame.

Construction the tokens cannot hold: **the recommended tier's border is coral** (not hairline)
even though the base card uses `{colors.border}`; **the guarantee row uses divider ticks
between items** (a small vertical hairline, not a comma or em-dash) — the row is a single
horizontal band, never three cards.

---

## Motion & Timing

The brand's cut grammar is **hard cuts + Reveal**, derived from `Reveal` in
`src/components/reveal.tsx` and the `--dur-enter` (0.5s) token.

- **Cut default:** hard cut between plates. No crossfades on the identity plate.
- **Reveal entry:** on a plate change, the focal element fades from `opacity: 0` +
  `translateY(+1.2cqw)` to `opacity: 1` + `translateY(0)`, `{motion.dur-enter}` on
  `{motion.ease-out-expo}`. Chrome (eyebrow, hairline, small caption) reveals 80–120ms later.
- **Micro:** any hover-equivalent surface state on a still frame uses `{motion.dur-micro}` on
  `{motion.ease-snappy}`. `{motion.ease-spring}` is reserved for a single toggle/pill overshoot
  per sequence.
- **May animate:** `transform`, `opacity`. **Must not animate:** `width`, `height`, `top`,
  `left` (design.md §4). No parallax on the wordmark.
- **Dwell.** Sparse plates dwell **2.4–3.6s**; the density-exception plates
  (tier-comparison, catalog) dwell **4.0–5.0s** to let the reader parse. Kicker-only plates
  dwell **1.6s**.
- **Reduced motion.** `prefers-reduced-motion: reduce` collapses all reveals to opacity-only,
  200ms — respected globally, non-negotiable.
- **Export.** Frames export as still 1920×1080 PNG + a 30fps H.264 sequence for motion beats.
  No auto-playing audio.

---

## Frame Treatments

Eight recipe plates. Each composes frontmatter components; each has a Fixed/Free split; each
names its density. Anchors vary (centered default; left reserved for editorial/catalog).

### 1 · Identity Cover  (identity/cover · move: wordmark-mega, centered, one italic coral word)
**Ground** `{colors.bg}`, padding `{spacing.frame-pad}`.
**Container** flex column, centered both axes.
**Composes** `{typography.wordmark-mega}`, `{typography.display-accent-italic}`, `{components.eyebrow-label}`, `{components.hairline}`.
**Focal** the wordmark set at `{typography.wordmark-mega}` (28cqw), centered; one word inside
carries `{typography.display-accent-italic}` (Instrument Serif italic coral).
**Chrome** a single `{components.eyebrow-label}` (1.15cqw, `{colors.fg-subtle}`) 5cqw above the
wordmark; `{components.hairline}` 5cqw below the wordmark, spanning 62cqw centered.
**Accent** the italic coral word inside the wordmark (single instance of coral).
**Silence** ≈ 68% empty.
**Fixed** wordmark family = Inter 500; italic accent = Instrument Serif; hairline width 1px.
**Free** the wordmark string, which word is italicized, the eyebrow copy.
**Pace** low.

### 2 · Oversized Claim  (editorial/oversized-claim · move: fit-to-measure headline, left anchor, coral <em>)
**Ground** `{colors.bg}`, padding `{spacing.frame-pad}`.
**Container** flex column, left-anchored, top-aligned.
**Composes** `{typography.display-hero}` or `{typography.display-claim}` (stepped by word count),
`{typography.display-accent-italic}`, `{components.eyebrow-label}`, `{components.hairline}`.
**Focal** the headline block, capped ≤ 78cqw wide, ramp stepped: ≤3 words → `display-hero`,
4–6 → `display-claim`, 7+ → `section-head`; italic-descender clearance `line-height ≥ 1.06`.
**Chrome** eyebrow above; hairline below the headline at 30cqw wide.
**Accent** one italicized word inside the headline (`display-accent-italic`).
**Silence** ≈ 62% empty.
**Fixed** italic accent is Instrument Serif coral; headline block width ≤ 78cqw.
**Free** headline copy, italicized word position, eyebrow text.
**Pace** low.

### 3 · Focal Artifact — Recommended Tier  (focal-artifact / brand-signature · move: one card lifts, coral pill on top)
**Ground** `{colors.bg-soft}`, padding `{spacing.frame-pad}`.
**Container** flex row, three tier slots, centered; the middle slot pushes 2cqw above the
baseline of the flankers.
**Composes** `{components.card-hairline}` ×2 (flankers), `{components.tier-card-recommended}`
(center), `{components.price-pill-recommended}` (top edge of the recommended card),
`{typography.section-head}` for the tier price, `{components.eyebrow-label}` for tier names.
**Focal** the recommended tier card at 32cqw wide × 42cqw tall, dominating the flankers
(each 26cqw wide). The tier price is `{typography.section-head}`.
**Chrome** flanker cards use `{components.card-hairline}`; a strike-through on prior price is
allowed (source: billing-toggle).
**Accent** the coral `{components.price-pill-recommended}` + the coral hairline on the
recommended card = one coordinated instance.
**Silence** tight by design — the density exception.
**Fixed** three tiers exactly; recommended is always centered; radius is `{rounded.card}` on
cards and `{rounded.pill}` on the pill; no side-stripes.
**Free** tier names, prices, billing period, strike-through value.
**Pace** moderate.

### 4 · Stat Ledger  (data/ledger · move: three ledger cells on a soft band, one pin-dot)
**Ground** `{colors.bg-soft}` full-frame, padding `{spacing.frame-pad}`.
**Container** grid, 3 columns, 4cqw gap, top-aligned; a full-width `{components.hairline}`
runs above and below the row.
**Composes** `{components.stat-cell}` ×3, `{components.stat-cell-label}` ×3, `{components.pin-dot}` ×1,
`{components.hairline}` ×2, `{components.eyebrow-label}` (section title).
**Focal** the three stat cells, each `{typography.stat-ledger}` (6.2cqw). The dot on cell 2
carries `{components.pin-dot}` at its top-right, 0.7cqw offset.
**Chrome** the section eyebrow top-left at 5cqw from the frame edge; source-attribution caption
in `{typography.body-frame}` × `{colors.fg-subtle}` bottom-left, small.
**Accent** the single `{components.pin-dot}` — the one benchmark that carries a coral marker.
**Silence** ≈ 52% empty around the ledger row.
**Fixed** three cells; ledger numeral is `{typography.stat-ledger}` with `ss01,cv11`; caption
attribution is required (design.md §0 — no own results-claims).
**Free** numerals, labels, which cell carries the pin-dot, attribution source.
**Pace** moderate.

### 5 · Problem Catalog  (chrome/catalog · move: four hairline cards, no side-stripes, left-anchored)
**Ground** `{colors.bg}`, padding `{spacing.frame-pad}`.
**Container** grid, 2 × 2, 2.2cqw gap, left-anchored under a section head.
**Composes** `{components.card-hairline}` ×4, `{typography.section-head}` (section title),
`{components.eyebrow-label}` (kicker), `{typography.body-frame}` (card body), `{components.tag-neutral}` (one card only).
**Focal** the four cards as a block; the section head above at `{typography.section-head}` (4.4cqw)
carries the semantic weight.
**Chrome** each card uses `{components.card-hairline}` — full hairline, no `border-left` as accent.
Each card leads with a mono index number or a bold caption in `{colors.fg}`.
**Accent** exactly one card carries `{components.tag-neutral}` (coral-soft pill) as its kicker —
the one problem the sequence circles back to.
**Silence** ≈ 40% empty — density exception for catalog.
**Fixed** four cards, hairline only, ≥1 lead number/caption per card, one tag-neutral only.
**Free** card copy, which card carries the tag, section-head copy.
**Pace** high.

### 6 · Closer / Final CTA  (identity/closer · move: giant coral pill CTA on a black ground, centered)
**Ground** `{colors.bg}`, padding `{spacing.frame-pad}`.
**Container** flex column, centered both axes.
**Composes** `{typography.display-claim}` (closer line), `{components.button-primary-giant}`,
`{components.eyebrow-label}` (kicker), `{components.hairline}` (below the CTA).
**Focal** the giant coral pill `{components.button-primary-giant}` at ~44cqw wide × auto,
positioned 6cqw below the closer line.
**Chrome** the closer line above at `{typography.display-claim}` (8.4cqw), ≤ 5 words. A 40cqw
`{components.hairline}` below the CTA, centered.
**Accent** the pill is the single coral instance of the frame.
**Silence** ≈ 66% empty.
**Fixed** exactly one CTA; closer copy ≤ 5 words; centered composition.
**Free** closer wording, CTA label, whether a Caveat hand-note appears (leads-scope only).
**Pace** low.

### 7 · Trust Band  (chrome/catalog · move: left-to-right chip row on a soft band, no coral)
**Ground** `{colors.bg-soft}`, padding `{spacing.frame-pad-tight}`.
**Container** flex row, no wrap, 1.4cqw gap, vertically centered.
**Composes** `{components.logo-chip}` ×5–7, `{components.eyebrow-label}` (kicker top-left),
`{components.hairline}` above and below the chip row.
**Focal** the chip row itself, spanning the full inner frame width; the row is the
brand-signature marquee frozen to a still.
**Chrome** eyebrow kicker top-left; hairlines flanking the row above and below.
**Accent** none — the trust plate carries no coral (design.md §6.6: one accent per page; the
sequence has already spent it elsewhere).
**Silence** ≈ 45% empty.
**Fixed** hairlines top + bottom; no coral; no logo lifts above the eyebrow band.
**Free** which entities appear as chips, chip order.
**Pace** moderate.

### 8 · Guarantee Row  (brand-signature · move: single wide hairline row with divider ticks)
**Ground** `{colors.bg}`, padding `{spacing.frame-pad}`.
**Container** flex row, one wide `{components.guarantee-row}` band, centered.
**Composes** `{components.guarantee-row}`, `{typography.section-head}` above the row,
`{typography.body-frame}` inside the row, small vertical hairline dividers between items,
`{components.eyebrow-label}` (kicker).
**Focal** the single wide row (≈ 88cqw × 12cqw), which explicitly refuses the three-card grid
temptation (design.md §5).
**Chrome** section head above the row; kicker eyebrow above the section head.
**Accent** none — the guarantee plate deliberately leans monochrome; coral is spent elsewhere.
**Silence** ≈ 55% empty.
**Fixed** one row only; vertical hairline divider ticks between items; no side-stripes; no
3-card grid alternative.
**Free** guarantee items (3–4), section-head copy.
**Pace** moderate.

---

## Do's and Don'ts (at frame scale)

**Do**
- Center hero/cover/claim/closer. Vary the anchor across a sequence (no more than ~2 consecutive
  frames share an anchor).
- Ration coral: **one instance per frame.** A single pill, or a single italic word, or a single
  pin-dot.
- Set italic accents as `<em>` inside `.gs-heading` — Instrument Serif, coral, italic.
- Cap headline blocks at ≤ 78cqw wide; step the ramp by word count.
- Attribute every benchmark. External + attributed, per design.md §0.
- Vary section rhythm: alternate `{spacing.section}` ~80px with `{spacing.section-lg}` ~112px
  moves across the sequence; a monotone rhythm is the audit fail.

**Don't**
- No em-dash. No en-dash. Use comma, colon, semicolon, parentheses.
- No side-stripe borders as accent (`border-left/right >1px`).
- No gradient text (`background-clip: text`).
- No identical card grid twice in a sequence (design.md §6.4 — minimum layout variety).
- No blue CTA (coral is lock; §6.6).
- No mixed radius scale within a frame — pill + card only; no third radius.
- No banned words from design.md §0 (`unlock`, `supercharge`, `10x`, `revolutionera`, `seamless`,
  `plug-and-play`, `ABM`, `growth hacking`, etc.).
- No WebGPU on portrait/mobile; if a frame implies the dot-matrix background, fall back to
  `.lead-field-fallback` (a flat `bg-soft`).

---

## Aspect-Ratio Behavior

Each treatment reflows across the three ratios. Safe area `{spacing.frame-pad}` = 5cqw on all
three; type re-scales per ratio so nothing drops below the 1.4cqw floor.

| Treatment | 16:9 | 9:16 | 1:1 |
|---|---|---|---|
| 1 · Identity Cover | wordmark centered, one line, italic word held | wordmark stacks over two lines, italic word on line 2; eyebrow rises above; hairline shortens to 40cqw | wordmark on one line at 24cqw; hairline 60cqw |
| 2 · Oversized Claim | 3-line headline at `display-hero`, left-anchored | 4-line headline at `display-claim`, italic word may sit alone on a line | 3-line headline at `display-claim`; eyebrow above |
| 3 · Focal Artifact — Recommended Tier | 3-across, middle lifted | reflows to vertical stack, recommended tier lifts to top; flankers below at 90% scale | 3-across compressed; card padding drops to 2cqw |
| 4 · Stat Ledger | 3 cells across, hairline top+bottom | 3 cells stack vertically; hairline runs left+right; pin-dot moves to top-left of active cell | 3 cells across at 5.2cqw ledger; ledger row is horizontal centered |
| 5 · Problem Catalog | 2×2 grid | 1 column, 4 rows; each card 84cqw wide | 2×2 compressed; card padding 1.8cqw |
| 6 · Closer / Final CTA | closer line + giant pill centered | closer wraps to 3 lines; pill scales to 62cqw wide | closer 2 lines; pill 58cqw wide |
| 7 · Trust Band | chips in one row (5–7) | chips wrap to 2 rows (3+3); band grows vertically | chips in one row (4–5) |
| 8 · Guarantee Row | 1 wide row with 3–4 items, tick dividers | row rotates 90°: items stack, ticks become horizontal hairlines between | 1 row with 3 items; padding tightens |

---

## Approved Real Entities & Numerals

The frame layer never invents figures. When a treatment carries a benchmark, source it from the
script; when a treatment carries a testimonial name, source it from the script. Placeholders
used in the showcase and in this document:

- Volatile numerals: `— figure —`, `{price}`, `{count}`.
- Attribution: every benchmark carries a small caption in `{typography.body-frame}` +
  `{colors.fg-subtle}`, external source named.
- Entity names in the trust-band chips are placeholders (`Entity A`, `Entity B`) until the
  script provides the real set.

**Never invent** a percentage, a benchmark, a logo, a testimonial, or a Swedish quote. If the
script does not provide one, drop the atom rather than fake it.

---

## Pre-Render Self-Audit

Before finalizing any frame, the agent runs this gate. If any line fails, the frame is rebuilt.

- **Squint** — one element dominates at 3–6× nearest neighbor?
- **Silence** — sparse plate reads 55–75% empty? (density exception: `tier-comparison`, `catalog`)
- **Restraint** — coral fires exactly once, at full strength?
- **Weight** — display type is Inter 500? Italic accent is Instrument Serif coral, set as `<em>`?
- **Depth** — no shadow above `{shadows.elevated}`? No blur behind type?
- **Geometry** — one radius scale (pill + card, no third)? No side-stripe accent border?
- **Anchor** — centered by default (hero/cover/closer); anchor varies across the sequence?
- **Element count** — ≤ 2–3 distinct elements per sparse frame? (catalog/tier is the exception)
- **Floor** — every load-bearing line ≥ 1.4cqw? Descenders clear (`line-height ≥ 1.06` on `<em>` with `y/g/j/p/q`)?
- **Copy** — no em-dash, no banned words, no invented figures, no unattributed benchmarks?
- **Motion** — only `transform` + `opacity`? Reduced-motion collapses to opacity-only?

---

## Known Gaps

- **`cqw` as a token value** is a documented extension of the DESIGN.md spec — spec-conformant
  consumers store it as a string. Frame renderers resolve it against a `container-type: size`
  parent. This is the price of frame-relative sizing that works at any display scale.
- **Aspect-ratio re-scales are guidance.** The 9:16 and 1:1 reflows describe how the plate
  should breathe, not a hard grid; the script's copy length is the last word.
- **WebGPU dot-matrix** (source: `hero-backdrop.tsx`) does not render inside frame exports; the
  fallback `.lead-field-fallback` (a flat `{colors.bg-soft}`) is the frame-safe substitute.
- **Leads-scope atoms** (`{rounded.lp-scope}`, `{rounded.lp-input}`, `{typography.font-hand}`,
  Arial) appear only on leads-generering plates. They are carried in the frontmatter for
  fidelity but do not appear on the main sequence.
- **Sections derived** — Overview, Frame Treatments, Aspect-Ratio Behavior, and Pre-Render
  Self-Audit are frame-only extensions; consumers of the base DESIGN.md spec treat them as
  unknown sections and preserve them.

---

# HyperFrames build contract & 9:16 video conventions (repo-specific)

> Everything above is the canonical GrowthStackr brand frame, composed from `design.md` with the
> **landing page (16:9)** as its primary unit. This repo builds **9:16 short-form talking-head
> videos** for the `shortform-video` skill, so the sections below carry the video-native
> conventions and the HyperFrames build contract the spec above does not cover. Both halves are
> normative for every asset in this repo. The brand tokens (colors, typography, radius, motion) are
> unchanged — only the *unit* changes from page to frame.

## Working canvas for shorts
- **Default 9:16, 1080 × 1920, dark by default.** (The pack's "Secondary" ratio is this repo's
  *primary* — shorts are portrait.) `html, body { width:1080px; height:1920px; overflow:hidden }`.
- **Home-base layout is split-screen:** B-roll / graphics top ~55%, talking head bottom ~45%,
  joined at the seam (~50–58% down) by the caption pill. ~60% of screen-time is the split, ~40%
  full-bleed graphic or full-screen head (hooks, CTAs, personal beats). This is the video reflow of
  the pack's Identity / Claim / Closer treatments, not a contradiction of them.

## Re-skin surface — CSS variables (the token contract components read)
Assets in this repo read their colors from CSS custom properties so a re-skin is a token swap, not a
rewrite. Each component ships its own `:root` defaults; keep these **names** stable and they stay
on-brand. Values map 1:1 to the frontmatter YAML tokens above.

```css
:root{
  --canvas:#050505;   /* colors.bg      — PRIMARY dark canvas */
  --bg:#050505;       /* alias of --canvas */
  --ink:#0a0a0a;
  --charcoal:#1c1f22; /* colors.bg-elevated — elevated surfaces, caption pills */
  --slate:#344054;    /* borders on dark */
  --fg:#ffffff;       /* colors.fg */
  --white:#ffffff;
  --offwhite:#f0f0f0; /* body text on dark */
  --fg-muted:#b0b0b0; /* colors.fg-muted — body / ingress */
  --cream:#fafafa;    /* light-mode canvas (occasional) */
  --coral:#ff5b49;    /* colors.accent — the one hero accent per frame */
  --violet:#7f56d9;   /* colors.secondary */
  --deep-purple:#6941c6;
}
```
Coral rations to **one instance per frame** (pill, italic word, highlight, or CTA) — the same
Restraint law as the pack. Components may add local surface vars (`--box-bg`, `--cell-bg`,
`--box-border`, …) derived from these; keep those local.

## Scene grounds (brand background images)

Scene-graphic components paint their full-frame background from one of three brand **grounds** —
soft pixel-grid gradients that replace the flat `--bg`/radial fill:

- **`ground-dark.jpg`** — near-black → black. The default for dark scenes.
- **`ground-cream.jpg`** — warm off-white → tan. For light-mode scenes.
- **`ground-coral.jpg`** — coral → black. **Opt-in only**, for a hero / CTA / emphasis scene —
  coral fires once, deliberately (same Restraint law as the accent).

Canonical copies live in `assets/backgrounds/`; each scene component also ships a local
`backgrounds/` copy so a single pull is self-contained (Studio reserves `/assets/`, and snapshot/
render serve the component dir as root — a local copy is the only path that resolves everywhere).
Components expose a `ground` prop: `"dark" | "cream" | "coral" | "none"` (flat), defaulting to
dark, or cream in light mode. The image is applied via `--ground-url` on the frame's background
element (`.has-ground`), never on a card, the browser-window content, the caption pill, or the
talking-head video. Overlay/video components (`caption-pill`, `ui-highlight`,
`light-flare-transition`, `fullscreen-talking-head`) carry NO ground — they sit over whatever is
beneath.

## Caption pill — the video signature (get this exactly right)
- **Dark rounded pill:** charcoal `--charcoal` (#1c1f22) ~85% opacity, **bold white Inter**
  centered, corner radius ~16–20px, hugging padding.
- **Position:** at the seam (~50–58% down), never bottom-stuck.
- **Chunking:** 1–3 word chunks swapping in sync with speech. A coral pill for one key word is fine;
  **never per-word rainbow.** On a dark pill, coral text needs the brighter `#FF9382` for ≥3:1
  contrast (scene graphics keep `--coral`).
- This pill is the single most recognizable element of the short — if it's right, it reads on-brand
  even as B-roll varies.

## Transitions (video-scale)
The pack's cut grammar is **hard cut + Reveal** for *plate entries*; between major *sections / big
reveals* this repo adds a **light transition** — the `light-flare-transition` component. Keep it a
soft warm/coral **light-leak glow** (recolour toward `--coral`, `mix-blend-mode:screen`, bloom +
drift L→R, 0.5–1s), **not** a hard full-frame white flash. Reserve 3–6 per 30–60s short, at real
transition points, synced to a swoosh SFX. Never dark/glitch/whip transitions.

## HyperFrames contract (every scene / component must follow)
1. Composition root: `<div id="root" data-composition-id="<id>" data-start="0"
   data-duration="<s>" data-width="1080" data-height="1920">`.
2. Every timed element carries `class="clip"` **and** `data-start`, `data-duration`,
   `data-track-index`.
3. One **paused** GSAP timeline per composition, registered on
   `window.__timelines["<id>"] = gsap.timeline({ paused:true })` — the renderer seeks it.
4. **Deterministic only** — no `Math.random()`, no `Date.now()`, no render-time network fetches.
5. GSAP from CDN: `https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js`.
6. Track-index convention across this library: **0–2** footage/audio, **3** scene cards,
   **7** logo-flash, **8** captions, **9** flares/leaks, **10+** audio beds / SFX.
7. Fonts: self-host Inter + Instrument Serif woff2 in the consuming project for render
   determinism (Google Fonts CDN is fine for preview, not for final render).
