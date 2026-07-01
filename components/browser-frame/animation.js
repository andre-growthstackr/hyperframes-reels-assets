/* browser-frame — mounts a screenshot in browser chrome and registers a paused, seekable timeline. */
(function () {
  const P = window.BROWSER_FRAME_PROPS || {};
  const root = document.getElementById("root");

  // ── mode + accent (the re-skin surface) ──
  if (P.mode === "light") {
    document.body.classList.add("light");
    root.style.setProperty("--bg", "var(--cream)");
    root.style.setProperty("--fg", "#0a0a0a");
    root.style.setProperty("--fg-muted", "#475467");
    root.style.setProperty("--chrome-bg", "#ffffff");
    root.style.setProperty("--chrome-border", "#e4e7ec");
    root.style.setProperty("--dot", "rgba(10, 10, 10, 0.16)");
    root.style.setProperty("--address-bg", "rgba(10, 10, 10, 0.05)");
    root.style.setProperty("--content-bg", "#f2f3f5");
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

  document.getElementById("bf-url").textContent = P.url || "";
  document.getElementById("bf-title").textContent = P.title || "";

  // ── optional address-bar favicon (neutral brand mark, left of the url) ──
  if (P.favicon) {
    const fav = document.createElement("img");
    fav.className = "bf-favicon";
    fav.src = `logos/${P.favicon}.svg`;
    fav.alt = "";
    const urlEl = document.getElementById("bf-url");
    urlEl.parentNode.insertBefore(fav, urlEl);
  }

  const content = document.getElementById("bf-content");
  const img = document.getElementById("bf-image");
  if (P.imageSrc) {
    img.src = P.imageSrc;
    content.classList.add("has-image");
  }

  // ── timeline (paused + seekable) ──
  window.__timelines = window.__timelines || {};
  const tl = gsap.timeline({ paused: true });

  // window slides up + scales in
  tl.from(".bf-window", { y: 90, scale: 0.92, opacity: 0, duration: 0.4, ease: "back.out(1.5)" }, 0);

  // gentle continuous Ken Burns push-in on the content so nothing is frozen
  tl.fromTo(
    "#bf-content",
    { scale: 1.0 },
    { scale: 1.045, duration: 3.5, ease: "none", transformOrigin: "50% 30%" },
    0
  );

  window.__timelines["browser-frame"] = tl;
})();
