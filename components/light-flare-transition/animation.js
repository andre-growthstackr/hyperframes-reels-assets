/* light-flare-transition — paused, seekable sweep. The flare peak reveals shot B. */
(function () {
  const P = window.FLARE_PROPS || {};
  const dir = P.direction || "lr";
  const dur = typeof P.duration === "number" ? P.duration : 0.5;
  const intensity = typeof P.intensity === "number" ? P.intensity : 1.0;

  const root = document.getElementById("root");
  const flare = document.getElementById("flare");
  const shotA = document.getElementById("shot-a");

  // keep the data-duration in sync with the prop so the renderer uses the right length
  root.setAttribute("data-duration", String(dur));
  [flare, shotA, document.querySelector(".shot-b")].forEach((el) =>
    el.setAttribute("data-duration", String(dur))
  );

  // direction → sweep vector + gradient angle
  let fromX, toX, angle;
  if (dir === "rl") { fromX = 70; toX = -70; angle = 80; }
  else if (dir === "center") { fromX = 0; toX = 0; angle = 100; }
  else { fromX = -70; toX = 70; angle = 100; } // lr default
  flare.style.background = flare.style.background.replace(/100deg/, angle + "deg");

  window.__timelines = window.__timelines || {};
  const tl = gsap.timeline({ paused: true });

  const peak = dur * 0.5;
  const bloom = 0.6 + 0.6 * intensity; // brighter, larger flare with higher intensity

  if (dir === "center") {
    // center burst: scale + brightness, no horizontal travel
    tl.fromTo(flare, { opacity: 0, scaleX: 0.2 }, { opacity: bloom, scaleX: 1.4, duration: peak, ease: "power2.in" }, 0);
    tl.to(flare, { opacity: 0, scaleX: 2.0, duration: dur - peak, ease: "power2.out" }, peak);
  } else {
    tl.fromTo(flare, { opacity: 0, xPercent: fromX }, { opacity: bloom, xPercent: (fromX + toX) / 2, duration: peak, ease: "power2.in" }, 0);
    tl.to(flare, { opacity: 0, xPercent: toX, duration: dur - peak, ease: "power2.out" }, peak);
  }

  // reveal the incoming shot exactly at the flare's brightest moment
  tl.to(shotA, { opacity: 0, duration: 0.001, ease: "none" }, peak);

  window.__timelines["light-flare-transition"] = tl;
})();
