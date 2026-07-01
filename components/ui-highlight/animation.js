/* ui-highlight — positions the spotlight from PROPS and registers a paused, seekable timeline. */
(function () {
  const P = window.UI_HIGHLIGHT_PROPS || {};
  const root = document.getElementById("root");

  // ── accent (the re-skin surface) ──
  if (P.accentColor) root.style.setProperty("--coral", P.accentColor);

  // ── scrim opacity ──
  const dim = typeof P.dimOpacity === "number" ? P.dimOpacity : 0.62;
  root.style.setProperty("--dim", "rgba(0, 0, 0, " + dim + ")");

  // ── rect geometry (1080×1920 px, top-left origin) ──
  const r = P.rect || {};
  const rx = typeof r.x === "number" ? r.x : 140;
  const ry = typeof r.y === "number" ? r.y : 640;
  const rw = typeof r.w === "number" ? r.w : 800;
  const rh = typeof r.h === "number" ? r.h : 340;

  const rectEl = document.getElementById("uh-rect");
  rectEl.style.left = rx + "px";
  rectEl.style.top = ry + "px";
  rectEl.style.width = rw + "px";
  rectEl.style.height = rh + "px";
  gsap.set(rectEl, { transformOrigin: "50% 50%" });

  // ── label: sits just below the rect, clamped inside the frame ──
  const labelEl = document.getElementById("uh-label");
  const hasLabel = !!P.label;
  if (hasLabel) {
    labelEl.textContent = P.label;
    const labelTop = Math.min(ry + rh + 28, 1920 - 96);
    labelEl.style.left = rx + "px";
    labelEl.style.top = labelTop + "px";
    gsap.set(labelEl, { transformOrigin: "0% 50%" });
  } else {
    labelEl.style.display = "none";
  }

  // ── arrow: points from outside toward the rect's top-left corner ──
  const arrowEl = document.getElementById("uh-arrow");
  const showArrow = P.showArrow !== false;
  const arrowLen = 220;
  if (showArrow) {
    // place the arrow so its tip (~168,158 of a 200 viewBox) lands near the corner
    const tipFrac = 168 / 200;
    let ax = rx - arrowLen * tipFrac - 8;
    let ay = ry - arrowLen * tipFrac - 8;
    ax = Math.max(24, ax);
    ay = Math.max(24, ay);
    arrowEl.style.left = ax + "px";
    arrowEl.style.top = ay + "px";
  } else {
    arrowEl.style.display = "none";
  }

  const borderEl = document.getElementById("uh-border");

  // ── timeline (paused + seekable) ──
  window.__timelines = window.__timelines || {};
  const tl = gsap.timeline({ paused: true });

  // scrim fades in — drive --dim's alpha from 0 → dimOpacity via a proxy
  const scrim = { a: 0 };
  const applyScrim = () => root.style.setProperty("--dim", "rgba(0, 0, 0, " + scrim.a + ")");
  applyScrim();
  gsap.set(rectEl, { scale: 1.12 });
  gsap.set(borderEl, { opacity: 0, scale: 1.06 });
  tl.to(scrim, { a: dim, duration: 0.3, ease: "power1.out", onUpdate: applyScrim }, 0);
  // rect settles from 1.12 → 1 as the coral border appears
  tl.to(rectEl, { scale: 1, duration: 0.5, ease: "power3.out" }, 0.12);
  tl.to(borderEl, { opacity: 1, scale: 1, duration: 0.45, ease: "power3.out" }, 0.2);

  // label pops in near the rect
  if (hasLabel) {
    tl.from(
      labelEl,
      { y: 24, opacity: 0, scale: 0.85, duration: 0.5, ease: "back.out(2)" },
      0.5
    );
  }

  // arrow draws / points toward the rect
  if (showArrow) {
    const stroke = document.getElementById("uh-arrow-path");
    const head = document.getElementById("uh-arrow-head");
    const len = stroke.getTotalLength ? stroke.getTotalLength() : 260;
    gsap.set(stroke, { strokeDasharray: len, strokeDashoffset: len });
    gsap.set(head, { opacity: 0 });
    gsap.set(arrowEl, { opacity: 0 });
    tl.to(arrowEl, { opacity: 1, duration: 0.15 }, 0.42);
    tl.to(stroke, { strokeDashoffset: 0, duration: 0.5, ease: "power2.inOut" }, 0.42);
    tl.to(head, { opacity: 1, duration: 0.2 }, 0.86);
  }

  // ── continuous "breathing" so the highlight is never frozen ──
  tl.to(
    borderEl,
    {
      scale: 1.02,
      opacity: 0.82,
      duration: 1.0,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    },
    1.0
  );

  window.__timelines["ui-highlight"] = tl;
})();
