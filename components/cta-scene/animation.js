/* cta-scene — builds the closer + giant coral pill from PROPS and registers a paused, seekable timeline. */
(function () {
  const P = window.CTA_SCENE_PROPS || {};
  const root = document.getElementById("root");

  // ── mode + accent (the re-skin surface) ──
  if (P.mode === "light") {
    document.body.classList.add("light");
    root.style.setProperty("--bg", "var(--cream)");
    root.style.setProperty("--fg", "#0a0a0a");
    root.style.setProperty("--fg-muted", "#475467");
  }
  if (P.accentColor) root.style.setProperty("--coral", P.accentColor);

  // ── scene ground (brand background image) ──
  const GROUNDS = { dark: "ground-dark.jpg", cream: "ground-cream.jpg", coral: "ground-coral.jpg" };
  let ground = P.ground;
  if (ground === undefined) ground = P.mode === "light" ? "cream" : "dark";
  if (ground && ground !== "none" && GROUNDS[ground]) {
    root.style.setProperty("--ground-url", `url("backgrounds/${GROUNDS[ground]}")`);
    const bgEl = document.querySelector(".backdrop") || document.body;
    if (bgEl) bgEl.classList.add("has-ground");
  }

  const kickerEl = document.getElementById("cta-kicker");
  const closerEl = document.getElementById("cta-closer");
  const pillEl = document.getElementById("cta-pill");
  const hairlineEl = document.getElementById("cta-hairline");

  kickerEl.textContent = P.kicker || "";

  // ── closer line: render the accent word (if present) as Instrument Serif italic WHITE ──
  const line = P.closerLine || "";
  const accent = P.closerAccentWord || "";
  if (accent && line.includes(accent)) {
    const idx = line.indexOf(accent);
    const before = document.createTextNode(line.slice(0, idx));
    const em = document.createElement("em");
    em.className = "serif";
    em.textContent = accent;
    const after = document.createTextNode(line.slice(idx + accent.length));
    closerEl.append(before, em, after);
  } else {
    closerEl.textContent = line;
  }

  pillEl.textContent = P.ctaLabel || "";

  // ── timeline (paused + seekable) ──
  window.__timelines = window.__timelines || {};
  const tl = gsap.timeline({ paused: true });

  // kicker + closer reveal first (opacity + y up, power3.out, staggered)
  tl.from(kickerEl, { y: 40, opacity: 0, duration: 0.55, ease: "power3.out" }, 0);
  tl.from(closerEl, { y: 50, opacity: 0, duration: 0.6, ease: "power3.out" }, 0.12);

  // THEN the giant pill pops in with a slight overshoot
  tl.from(pillEl, { y: 40, opacity: 0, scale: 0.86, duration: 0.6, ease: "back.out(1.6)" }, 0.7);

  // then the hairline draws (scaleX 0 → 1)
  tl.fromTo(
    hairlineEl,
    { scaleX: 0, opacity: 0 },
    { scaleX: 1, opacity: 0.4, duration: 0.5, ease: "power2.out" },
    1.1,
  );

  // gentle continuous push-in so nothing is frozen
  tl.fromTo(".cta-wrap", { scale: 1.0 }, { scale: 1.03, duration: 3.2, ease: "none" }, 0);

  window.__timelines["cta-scene"] = tl;
})();
