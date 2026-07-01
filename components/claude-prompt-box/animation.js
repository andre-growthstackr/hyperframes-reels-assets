/* claude-prompt-box — deterministic typing animation on a paused, seekable timeline. */
(function () {
  const P = window.PROMPT_BOX_PROPS || {};
  const root = document.getElementById("root");

  if (P.mode === "light") document.body.classList.add("light");
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

  // ── header app logo (local tool logo, deterministic) ──
  if (P.appLogo) {
    const appEl = document.getElementById("pb-app");
    const logo = document.createElement("img");
    logo.className = "pb-applogo";
    logo.src = `logos/${P.appLogo}.svg`;
    logo.alt = "";
    appEl.parentNode.insertBefore(logo, appEl);
  }

  document.getElementById("pb-app").textContent = P.appName || "claude";
  document.getElementById("pb-cwd").textContent = P.cwd || "";
  document.getElementById("pb-send").textContent = "↵ send";

  const full = P.promptText || "";
  const textEl = document.getElementById("pb-text");
  const cursorEl = document.getElementById("pb-cursor");
  const sendEl = document.getElementById("pb-send");

  window.__timelines = window.__timelines || {};
  const tl = gsap.timeline({ paused: true });

  // box drops in
  tl.from(".pb-box", { y: 60, opacity: 0, scale: 0.96, duration: 0.45, ease: "back.out(1.4)" }, 0);

  // typing: drive a char counter, reveal substring on update (no random, fully seekable)
  const typed = { n: 0 };
  const typeDur = Math.min(2.4, Math.max(0.8, full.length * 0.045));
  tl.to(typed, {
    n: full.length, duration: typeDur, ease: "none",
    onUpdate: () => { textEl.textContent = full.slice(0, Math.round(typed.n)); },
  }, 0.5);

  // blinking caret while typing (deterministic sine on the timeline clock)
  tl.to(cursorEl, { opacity: 0.15, duration: 0.4, ease: "none", repeat: 5, yoyo: true }, 0.5);

  // send button pulses when the prompt is complete
  tl.fromTo(sendEl, { scale: 1 }, { scale: 1.12, duration: 0.16, ease: "back.out(3)", yoyo: true, repeat: 1 }, 0.5 + typeDur + 0.15);
  tl.to(cursorEl, { opacity: 0, duration: 0.2 }, 0.5 + typeDur + 0.1);

  window.__timelines["claude-prompt-box"] = tl;
})();
