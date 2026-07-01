# `licenses/` — rights log per asset class

**What is this?**
The boring-but-load-bearing rights ledger for the video-DNA library. Every music track, sound
effect, font, logo, and stock asset that lands in the repo gets a row here **before** it ships in
a render. One file per asset class:

| Log | Covers |
|---|---|
| [`music-licenses.md`](music-licenses.md) | Background music loops (`assets/music/`). |
| [`sfx-licenses.md`](sfx-licenses.md) | Sound effects (`assets/sfx/`). |
| [`font-licenses.md`](font-licenses.md) | Fonts (`assets/fonts/`) — Inter + Instrument Serif pre-filled. |
| [`logo-usage-notes.md`](logo-usage-notes.md) | First-party + third-party logo usage (`brand/logos/`, `assets/logos/`). |
| [`stock-assets.md`](stock-assets.md) | Stock images / video / b-roll (`assets/b-roll/`, `assets/ui-screens/`, …). |

**When to use it?**
Every time you add a licensable asset. No row → it does not go in a client render. When in doubt,
log it.

**What feeling?**
Trust. A clean rights log is what lets the library be used commercially without a second thought.

## The rule
Collect only what you have the right to use, and **log every music / SFX / font / logo / stock
asset here** (LIBRARY.md licence rule). Each log is a markdown table with these columns:

`Source | Licence | Commercial use? | Attribution? | Date collected | URL`

Add one row per asset. If attribution is required, the exact credit string goes in the
Attribution column so it can be lifted straight into the video's end card / description.
