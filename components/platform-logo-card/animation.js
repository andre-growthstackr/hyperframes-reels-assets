/* platform-logo-card — the logo-flash scene: reveals ONE tool's logo from PROPS and registers a paused, seekable timeline. */
(function () {
  const P = window.PLATFORM_LOGO_CARD_PROPS || {};
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
    const backdrop = document.querySelector(".backdrop");
    if (backdrop) backdrop.classList.add("has-ground");
  }

  const logoEl = document.getElementById("plc-logo");
  const labelEl = document.getElementById("plc-label");
  const underlineEl = document.getElementById("plc-underline");

  // ── logo (one tool mark) ──
  const logoId = P.logo || "claude";
  logoEl.src = `logos/${logoId}.svg`;
  logoEl.alt = P.label || logoId;
  // some marks (e.g. openai/chatgpt) inherit currentColor — keep them visible on dark grounds
  logoEl.style.color = P.mode === "light" ? "#0a0a0a" : "#ffffff";

  labelEl.textContent = P.label || "";

  // ── timeline (paused + seekable) ──
  window.__timelines = window.__timelines || {};
  const tl = gsap.timeline({ paused: true });

  // logo flashes in fast: scale 0.82 → 1 + opacity 0 → 1
  tl.from(logoEl, { scale: 0.82, opacity: 0, duration: 0.5, ease: "back.out(1.7)" }, 0);

  // label reveals just after the logo lands
  tl.from(labelEl, { y: 34, opacity: 0, duration: 0.45, ease: "power3.out" }, 0.15);

  // the single coral underline draws (scaleX 0 → 1)
  tl.fromTo(
    underlineEl,
    { scaleX: 0, opacity: 0 },
    { scaleX: 1, opacity: 1, duration: 0.4, ease: "power2.out" },
    0.42,
  );

  // gentle continuous push-in so nothing is frozen
  tl.fromTo(".plc-wrap", { scale: 1.0 }, { scale: 1.03, duration: 2.6, ease: "none" }, 0);

  window.__timelines["platform-logo-card"] = tl;
})();
