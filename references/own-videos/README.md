# own-videos/ — your own work, good and bad

**What is this?** GrowthStackr's own short-form output, sorted into `raw/ edited/ best-hooks/
best-ctas/ best-examples/ bad-examples/`. This is the closest reference the pipeline has — it's
*your* voice, *your* pacing, *your* brand at work, not someone else's.

**When to use it?** When the AI needs to match your actual house style rather than an outside
model: pull `best-hooks/` and `best-ctas/` for opening/closing patterns that have worked, and
`best-examples/` for whole videos to emulate. Use `raw/` and `edited/` to see the before/after of
your edit grammar.

**What feeling?** premium · calm authority · clean · digital · dark-default · coral used once.
Never: meme, childish, MrBeast-loud, corporate-stock, rainbow captions, bottom-stuck subtitles.

## Bad examples matter as much as good ones

`bad-examples/` is not a junk drawer — it's a **teaching set**. A clear "don't do this" reference
steers the AI away from failure modes just as strongly as a good example pulls it toward the
target. Curate the bad ones with the same care as the best ones, and label *why* each one fails
(see [`bad-examples/README.md`](bad-examples/README.md)).

## Subfolders

| Folder | What |
|---|---|
| [`raw/`](raw/) | Unedited source footage / recordings. |
| [`edited/`](edited/) | Finished, published cuts. |
| [`best-hooks/`](best-hooks/) | Your strongest openings — clip or note the first 1–3s. |
| [`best-ctas/`](best-ctas/) | Your strongest closes / calls-to-action. |
| [`best-examples/`](best-examples/) | Whole videos worth emulating end-to-end. |
| [`bad-examples/`](bad-examples/) | The "don't do this" set — failures, each labelled with why. |

## Git LFS reminder

Video files here are **heavy media** — track them with **Git LFS** or an external bucket, never
raw git. See [`../../LIBRARY.md`](../../LIBRARY.md).
