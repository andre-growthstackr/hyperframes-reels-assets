/* fullscreen-talking-head — applies mode/props and registers a paused, seekable timeline. */
(function () {
  const P = window.FULLSCREEN_TALKING_HEAD_PROPS || {};
  const root = document.getElementById("root");
  const DURATION = 3.0;

  // ── mode (the re-skin surface) ──
  if (P.mode === "light") {
    document.body.classList.add("light");
    root.style.setProperty("--bg", "var(--cream)");
    root.style.setProperty("--fg", "#0a0a0a");
    root.style.setProperty("--fg-muted", "#475467");
  }

  // ── vignette toggle ──
  const vignette = document.getElementById("fth-vignette");
  if (P.vignette === false) vignette.classList.add("hidden");

  // ── kicker (shown only if set) ──
  const kicker = document.getElementById("fth-kicker");
  const kickerText = document.getElementById("fth-kicker-text");
  const hasKicker = typeof P.kicker === "string" && P.kicker.trim().length > 0;
  if (hasKicker) {
    kickerText.textContent = P.kicker;
    kicker.classList.add("show");
  }

  // ── timeline (paused + seekable) ──
  window.__timelines = window.__timelines || {};
  const tl = gsap.timeline({ paused: true });

  const stage = document.querySelector(".fth-stage");
  const head = document.getElementById("fth-head");

  // Quick fade + slight scale settle on entry (on the stage wrapper).
  tl.fromTo(
    stage,
    { opacity: 0, scale: 1.04 },
    { opacity: 1, scale: 1.0, duration: 0.4, ease: "power3.out" },
    0
  );

  // Gentle continuous Ken Burns push-in for the whole duration (on the inner slot,
  // a separate transform layer so it never fights the entry settle) — never frozen.
  tl.fromTo(
    head,
    { scale: 1.0 },
    { scale: 1.035, duration: DURATION, ease: "none" },
    0
  );

  // Kicker pops in shortly after entry (only if present).
  if (hasKicker) {
    tl.fromTo(
      kicker,
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, ease: "back.out(1.6)" },
      0.5
    );
  }

  window.__timelines["fullscreen-talking-head"] = tl;
})();
