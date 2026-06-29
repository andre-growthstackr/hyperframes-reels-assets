/* metric-card — builds the grid from PROPS and registers a paused, seekable timeline. */
(function () {
  const P = window.METRIC_CARD_PROPS || {};
  const root = document.getElementById("root");

  // ── mode + accent (the re-skin surface) ──
  if (P.mode === "light") {
    document.body.classList.add("light");
    root.style.setProperty("--bg", "var(--cream)");
    root.style.setProperty("--fg", "#0a0a0a");
    root.style.setProperty("--fg-muted", "#475467");
    root.style.setProperty("--cell-bg", "#ffffff");
    root.style.setProperty("--cell-border", "#e4e7ec");
  }
  if (P.accentColor) root.style.setProperty("--coral", P.accentColor);

  document.getElementById("mc-eyebrow").textContent = P.eyebrow || "";
  document.getElementById("mc-title").textContent = P.title || "";

  const values = P.values || [];
  const labels = P.labels || [];
  const heroIndex = typeof P.heroIndex === "number" ? P.heroIndex : 0;

  const grid = document.getElementById("mc-grid");
  if (values.length > 4) grid.classList.add("dense");

  // Split a value into [prefix, number, suffix] so we can count up only the numeric part.
  function parseNumeric(str) {
    const m = String(str).match(/^([^\d]*)([\d][\d.,\s]*?)([^\d]*)$/);
    if (!m) return null;
    const raw = m[2].replace(/\s/g, "");
    const num = parseFloat(raw.replace(/\./g, "").replace(",", "."));
    if (!isFinite(num)) return null;
    const decimals = (raw.split(/[.,]/)[1] || "").length;
    const usesComma = raw.includes(",");
    const usesThousand = /\.\d{3}\b/.test(raw) || raw.replace(/[.,]/g, "").length > 3;
    return { prefix: m[1], suffix: m[3], num, decimals, usesComma, usesThousand };
  }

  function fmt(n, p) {
    let s = n.toFixed(p.decimals);
    if (p.usesComma) s = s.replace(".", ",");
    if (p.usesThousand && p.decimals === 0)
      s = Math.round(n).toLocaleString("sv-SE").replace(/ /g, " ");
    return p.prefix + s + p.suffix;
  }

  const cells = values.map((val, i) => {
    const cell = document.createElement("div");
    cell.className = "mc-cell" + (i === heroIndex ? " hero" : "");
    const v = document.createElement("div");
    v.className = "mc-value tnum";
    v.dataset.target = val;
    v.textContent = val;
    const l = document.createElement("div");
    l.className = "mc-label";
    l.textContent = labels[i] || "";
    cell.appendChild(v);
    cell.appendChild(l);
    grid.appendChild(cell);
    return cell;
  });

  // ── timeline (paused + seekable) ──
  window.__timelines = window.__timelines || {};
  const tl = gsap.timeline({ paused: true });

  cells.forEach((cell, i) => {
    const at = 0.1 + i * 0.18;
    tl.from(cell, { y: 50, opacity: 0, scale: 0.9, duration: 0.45, ease: "back.out(1.6)" }, at);

    const v = cell.querySelector(".mc-value");
    const p = parseNumeric(v.dataset.target);
    if (p) {
      const counter = { n: 0 };
      v.textContent = fmt(0, p);
      tl.to(counter, {
        n: p.num, duration: 0.7, ease: "power2.out",
        onUpdate: () => { v.textContent = fmt(counter.n, p); },
      }, at + 0.05);
    }
  });

  // gentle continuous push-in so nothing is frozen
  tl.fromTo(".mc-wrap", { scale: 1.0 }, { scale: 1.03, duration: 3.2, ease: "none" }, 0);

  window.__timelines["metric-card"] = tl;
})();
