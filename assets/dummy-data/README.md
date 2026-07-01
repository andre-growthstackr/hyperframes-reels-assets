# assets/dummy-data/

> Part of the **Track 1 — `assets/`** layer. 🌱 **seeded** — ready to use now. See
> [`../../LIBRARY.md`](../../LIBRARY.md) and the brand source-of-truth [`../../frame.md`](../../frame.md).

## What is this?

Realistic-but-**clearly-demo** datasets. When a beat needs to *show* a lead list filling, a
pipeline moving, campaign numbers, or a before/after — but there is no real client data to show (or
showing it would be unsafe) — you populate the UI from these files. Every dataset here is fictional
and labelled demo, so it can never be mistaken for a real result.

| File | Shape | Feeds |
|---|---|---|
| [`lead-list.csv`](lead-list.csv) | B2B leads: name, company, title, source, score, status | a lead-list / CRM screen filling |
| [`campaign-results.csv`](campaign-results.csv) | campaign, spend, impressions, clicks, leads, cpl | an ads dashboard / results table |
| [`crm-pipeline.csv`](crm-pipeline.csv) | stage, count, value | a pipeline / kanban / funnel graphic |
| [`sample-comments.csv`](sample-comments.csv) | fictional social comments | a comment-for-link beat |
| [`analytics-dashboard.json`](analytics-dashboard.json) | GA4-style metrics object | a metric-card / dashboard overlay |
| [`before-after-metrics.json`](before-after-metrics.json) | before vs after snapshot | a before/after metric beat |

## When to use it?

- To **stage a screenshot** in [`../ui-screens/`](../ui-screens/) when the real view is empty or
  private — populate a demo view, capture it, and treat it as demo.
- To **drive a scene graphic** (`metric-card`, `workflow-diagram`, a table) when the script only has
  a placeholder `[din siffra]` and you need something on screen.
- To **prototype a beat** before the real numbers arrive.

## What feeling?

The library target (from `frame.md`): **premium, calm authority, clean, digital, dark-default,
coral used once per frame.** Demo data should look like a real, well-run pipeline — plausible
companies, sane numbers, tidy rows — not obvious `foo/bar/123` filler and not absurd hockey-stick
brag numbers. Believable, calm, and clearly labelled.

---

## ⚠️ THE TRUTH RULE (from LIBRARY.md — non-negotiable)

> **Any number shown as a *result / case* must be real.** Demo data lives here in
> `assets/dummy-data/` and is **always labelled demo.**

That means:

- Everything in this folder is **demo**. Each file carries a `# DEMO DATA — not real results` header
  or a `"_note": "DEMO"` marker where the format allows.
- You may use these numbers to **show a UI, a layout, or how a beat is built.** You may **not** frame
  them as GrowthStackr's real outcome, a real client's result, or a real case study. The moment a
  number is presented as a *result*, it must be true and attributed (per `frame.md` "Approved Real
  Entities & Numerals").
- When in doubt, keep the demo label visible (a small `demo` tag in the frame) or swap the demo
  number out for the real, sourced one before render.
