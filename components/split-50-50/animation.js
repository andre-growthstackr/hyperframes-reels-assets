/* split-50-50 — reads PROPS, builds the split scaffold, registers a paused, seekable timeline. */
(function () {
  const P = window.SPLIT_50_50_PROPS || {};
  const root = document.getElementById("root");

  // ── mode (the re-skin surface) ──
  if (P.mode === "light") {
    document.body.classList.add("light");
    root.style.setProperty("--bg", "var(--cream)");
    root.style.setProperty("--fg", "#0a0a0a");
    root.style.setProperty("--fg-muted", "#475467");
    root.style.setProperty("--top-bg", "#f2f2f0");
    root.style.setProperty("--head-bg", "#e9eaec");
    root.style.setProperty("--seam-line", "#e4e7ec");
  }

  // ── split point (topRatio drives it) ──
  const ratio = typeof P.topRatio === "number" ? P.topRatio : 0.55;
  root.style.setProperty("--split", ratio * 100 + "%");

  // ── placeholder labels ──
  document.getElementById("top-label").textContent = P.topLabel || "";
  document.getElementById("head-label").textContent = P.headLabel || "";

  const top = document.getElementById("topSlot");
  const head = document.getElementById("headSlot");
  const seam = document.getElementById("seam");

  if (P.showSeamHairline === false) seam.style.display = "none";

  // ── timeline (paused + seekable) ──
  window.__timelines = window.__timelines || {};
  const tl = gsap.timeline({ paused: true });

  // Open FULL-SCREEN head: top panel pulled up off-frame, seam hidden with it.
  tl.set(top, { yPercent: -100 }, 0);
  tl.set(seam, { yPercent: -100, opacity: 0 }, 0);
  tl.set(head, { yPercent: 0, scale: 1.02 }, 0);

  // Hold the full-screen head for a beat (the hook), then form the split.
  // Top panel slides DOWN to reveal #topSlot; head settles up into its home base.
  tl.to(top, { yPercent: 0, duration: 0.85, ease: "power3.out" }, 0.55);
  tl.to(seam, { yPercent: 0, opacity: 1, duration: 0.85, ease: "power3.out" }, 0.55);
  tl.to(head, { scale: 1.0, duration: 0.7, ease: "power2.out" }, 0.6);

  // Gentle continuous Ken Burns push-in on the head the whole time (nothing frozen).
  tl.fromTo(
    ".slot.head .slot-inner",
    { scale: 1.0 },
    { scale: 1.05, duration: 3.2, ease: "none" },
    0
  );

  window.__timelines["split-50-50"] = tl;
})();
