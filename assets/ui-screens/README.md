# assets/ui-screens/

> Part of the **Track 1 — `assets/`** drop-in layer. See [`../../LIBRARY.md`](../../LIBRARY.md)
> and the brand source-of-truth [`../../frame.md`](../../frame.md).
>
> **This folder CONSOLIDATES** what earlier drafts called `ui-assets/` and `tool-screens/` — those
> two ideas are the same "proof" layer and now live here, one folder, one standard. Do not re-split
> them.

## What is this?

The **proof layer**: real screenshots and short screen-recordings of the tools and dashboards a
short talks about. When a beat claims "here's Claude reading the site" or "here's the pipeline
filling up", this is the footage that makes the claim visible. It sits in the top ~55% B-roll slot
of the split-screen home base (`split-50-50`), usually inside a `browser-frame`, often with a
`ui-highlight` pointing at the one thing that matters.

Each tool gets its own subfolder (`claude/`, `ga4/`, `n8n/`, …). For each tool, aim to capture a
small, deliberate set — not a screenshot dump:

| Capture | What it shows | Beat it serves |
|---|---|---|
| `clean-screenshot` | the tool's front door, empty/neutral state | tool intro, "this is X" |
| `dashboard` | the main dashboard / overview view | orientation, "here's the cockpit" |
| `feature` | one feature mid-use (a specific screen) | the "how it works" proof |
| `success-state` | a done / win / green state | payoff, "and it worked" |
| `problem-state` | an error / empty / broken / red state | the problem beat, the "before" |

Every image is real UI. **Numbers visible on screen that are shown as a *result* must be true**
(LIBRARY.md truth rule). If a capture would show a fabricated result, either blur/redact the number
or stage it from [`../dummy-data/`](../dummy-data/) and treat it as clearly-demo (never framed as a
real case).

## When to use it?

- **Tool-breakdown / tutorial shorts** — the UI proof beat after the tool intro.
- **Case-study shorts** — the dashboard or success-state that backs the (real, attributed) result.
- **Problem beats** — the error/empty state that sets up the pain before the fix.
- Anywhere a caption says "look" — give the eye something real to land on.

Prefer a still screenshot for a held beat (2.4–3.6s dwell) and a short screen-recording (a scroll,
a click, a number ticking up) only when the *motion is the point*. Keep recordings 1–3s, no cursor
jitter, no notifications popping.

## What feeling?

The library target (from `frame.md`): **premium, calm authority, clean, digital, dark-default,
coral used once per frame.** A UI capture should feel like a Linear-grade product shot — bright,
uncluttered, one thing in focus. Never: cluttered tabs, personal data, half-loaded pages, meme
overlays, rainbow highlights. The coral belongs to the `ui-highlight` overlay, not to the screenshot
itself.

---

## CAPTURE GUIDE

Two paths. Pick by whether the page needs a login.

### 1. Login-free pages → `npx hyperframes capture`

For any public / logged-out URL (marketing pages, docs, public dashboards, a shared read-only view),
prefer the built-in capturer:

```bash
npx hyperframes capture <url>
```

It renders clean, deterministic screenshots without you scripting a browser. Use it first — it is
the least-effort, most-repeatable path.

### 2. Scripted / logged-in captures → Playwright

When the shot lives behind auth or needs steps (log in, navigate, hover, open a panel), script it
with Playwright so it is repeatable:

```bash
npx playwright screenshot --viewport-size=1280,800 <url> claude/dashboard.png
# or a full script for multi-step flows (login → navigate → shoot)
```

- Viewport **1280×800** (or 1440×900) — a clean 16:10 that crops well into the top B-roll slot.
- Wait for the network to settle and fonts to load before shooting (avoid half-rendered states).
- Log in with a **throwaway / demo account**, never a real client account.

### Clean-capture checklist (both paths)

- **Bright and clean.** Prefer the tool's light theme on a **neutral background**; kill sidebars,
  banners, cookie bars, and notification toasts before shooting.
- **No personal or client data.** Redact names, emails, revenue, logos you don't have rights to.
  Stage demo numbers from [`../dummy-data/`](../dummy-data/) if a populated view is needed.
- **One subject per shot.** If you need to point at something, capture it clean and add the arrow in
  `ui-highlight`, not in the screenshot.
- **Crop to content.** Trim browser chrome unless the `browser-frame` component will add its own.
- **Optimise.** PNG for crisp UI, run through an optimiser; keep stills in git, and put
  screen-recordings (`.mp4/.mov`) on **Git LFS or an external bucket** (LIBRARY.md heavy-media rule).

### File naming (per tool subfolder)

```
<tool>/clean-screenshot.png
<tool>/dashboard.png
<tool>/<feature-name>.png        e.g. claude/reading-a-url.png
<tool>/success-state.png
<tool>/problem-state.png
<tool>/<clip-name>.mp4            short recordings (LFS / bucket)
```

Keep the five capture types above as the spine; add feature-specific stills as needed. Log any usage
rights for third-party product UI in [`../../licenses/`](../../licenses/) alongside logos.
