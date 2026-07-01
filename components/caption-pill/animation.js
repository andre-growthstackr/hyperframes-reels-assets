/* caption-pill — the library's centralized caption. Builds the swapping pill chunks
   from PROPS and registers a paused, seekable timeline. Other components rely on THIS
   for captions; they must not recreate one. */
(function () {
  const P = window.CAPTION_PILL_PROPS || {};
  const root = document.getElementById("root");

  // ── mode + accent (the re-skin surface) ──
  if (P.mode === "light") {
    document.body.classList.add("light");
    root.style.setProperty("--fg", "#0a0a0a");
    root.style.setProperty("--fg-muted", "#475467");
  }
  // On the dark pill, highlighted text uses the brighter coral (default #ff9382)
  // so it clears the ≥3:1 contrast rule. Expose as highlightColor.
  const hl = P.highlightColor || "#ff9382";
  root.style.setProperty("--hl", hl);

  // Vertical seam position (0–1 of 1920). Default ~54%.
  const seamY = typeof P.seamY === "number" ? P.seamY : 0.54;
  const stage = document.getElementById("cp-stage");
  stage.style.top = (seamY * 100).toFixed(3) + "%";

  // inner layer the idle animates, so the stage centering transform is untouched
  const idle = document.createElement("div");
  idle.className = "cp-idle";
  stage.appendChild(idle);

  const chunks = Array.isArray(P.chunks) ? P.chunks : [];

  // Build one pill per chunk — each is its own clip on the captions track (8).
  function buildText(chunk) {
    const span = document.createElement("span");
    span.className = "cp-text";
    const raw = String(chunk.text || "");
    if (chunk.hl && raw.includes(chunk.hl)) {
      const idx = raw.indexOf(chunk.hl);
      const before = raw.slice(0, idx);
      const mid = raw.slice(idx, idx + chunk.hl.length);
      const after = raw.slice(idx + chunk.hl.length);
      if (before) span.appendChild(document.createTextNode(before));
      const em = document.createElement("span");
      em.className = "cp-hl";
      em.textContent = mid;
      span.appendChild(em);
      if (after) span.appendChild(document.createTextNode(after));
    } else {
      span.textContent = raw;
    }
    return span;
  }

  const pills = chunks.map((chunk) => {
    const start = Number(chunk.start) || 0;
    const dur = Number(chunk.dur) || 0.5;
    const pill = document.createElement("div");
    pill.className = "cp-pill clip";
    pill.dataset.start = String(start);
    pill.dataset.duration = String(dur);
    pill.dataset.trackIndex = "8"; // captions live on track 8
    pill.appendChild(buildText(chunk));
    idle.appendChild(pill);
    return { el: pill, start, dur, hasHl: Boolean(chunk.hl) };
  });

  // Composition duration = max(start + dur).
  const total = pills.reduce((m, p) => Math.max(m, p.start + p.dur), 0);

  // ── timeline (paused + seekable) ──
  window.__timelines = window.__timelines || {};
  const tl = gsap.timeline({ paused: true });

  // Everything starts hidden; each chunk pops in at its start, holds, then swaps out.
  pills.forEach((p) => {
    gsap.set(p.el, { autoAlpha: 0, scale: 0.9, y: 14 });

    // pop the pill in (scale 0.9→1 + slight y settle, ~0.12s back.out)
    tl.to(
      p.el,
      { autoAlpha: 1, scale: 1, y: 0, duration: 0.12, ease: "back.out(2.2)" },
      p.start
    );

    // a highlighted word gets a tiny extra pop
    if (p.hasHl) {
      tl.to(p.el, { scale: 1.04, duration: 0.08, ease: "power2.out" }, p.start + 0.12);
      tl.to(p.el, { scale: 1, duration: 0.14, ease: "power2.inOut" }, p.start + 0.2);
    }

    // hold for its duration, then swap crisply to the next chunk
    tl.to(
      p.el,
      { autoAlpha: 0, scale: 0.96, y: -10, duration: 0.1, ease: "power2.in" },
      p.start + p.dur
    );
  });

  // subtle idle so the active pill is never dead between swaps
  const half = (total || 1) / 2;
  tl.to(idle, { y: -6, duration: half, ease: "sine.inOut" }, 0);
  tl.to(idle, { y: 0, duration: half, ease: "sine.inOut" }, half);

  window.__timelines["caption-pill"] = tl;
})();
