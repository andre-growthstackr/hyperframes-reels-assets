/* workflow-diagram — builds the node flow from PROPS and registers a paused, seekable timeline. */
(function () {
  const P = window.WORKFLOW_DIAGRAM_PROPS || {};
  const root = document.getElementById("root");

  // ── mode + accent (the re-skin surface) ──
  if (P.mode === "light") {
    document.body.classList.add("light");
    root.style.setProperty("--bg", "var(--cream)");
    root.style.setProperty("--fg", "#0a0a0a");
    root.style.setProperty("--fg-muted", "#475467");
    root.style.setProperty("--node-bg", "#ffffff");
    root.style.setProperty("--node-border", "#e4e7ec");
    root.style.setProperty("--connector", "#98a2b3");
    root.style.setProperty("--chevron", "#667085");
  }
  if (P.accentColor) root.style.setProperty("--coral", P.accentColor);

  const orientation = P.orientation === "horizontal" ? "horizontal" : "vertical";
  const nodes = Array.isArray(P.nodes) ? P.nodes.slice(0, 4) : [];
  const heroIndex = typeof P.heroIndex === "number" ? P.heroIndex : 1;

  const flow = document.getElementById("wf-flow");
  flow.classList.add(orientation);
  if (nodes.length >= 4) flow.classList.add("dense");

  const chevron = orientation === "horizontal" ? "›" : "⌄"; // › : ⌄

  const nodeEls = [];
  const lineEls = [];

  nodes.forEach((n, i) => {
    // node card
    const node = document.createElement("div");
    node.className = "wf-node" + (i === heroIndex ? " hero" : "");
    const label = document.createElement("div");
    label.className = "wf-label";
    label.textContent = n && n.label ? n.label : "";
    node.appendChild(label);
    if (n && n.sub) {
      const sub = document.createElement("div");
      sub.className = "wf-sub";
      sub.textContent = n.sub;
      node.appendChild(sub);
    }
    flow.appendChild(node);
    nodeEls.push(node);

    // connector after every node except the last
    if (i < nodes.length - 1) {
      const conn = document.createElement("div");
      conn.className = "wf-connector";
      const line = document.createElement("div");
      line.className = "wf-line";
      const chev = document.createElement("span");
      chev.className = "wf-chevron";
      chev.textContent = chevron;
      conn.appendChild(line);
      conn.appendChild(chev);
      flow.appendChild(conn);
      lineEls.push(line);
    }
  });

  // ── timeline (paused + seekable) ──
  window.__timelines = window.__timelines || {};
  const tl = gsap.timeline({ paused: true });

  const drawProp = orientation === "horizontal" ? "scaleX" : "scaleY";

  nodeEls.forEach((node, i) => {
    const at = 0.4 + i * 0.5;

    // node pops in
    tl.from(node, { y: 46, scale: 0.9, opacity: 0, duration: 0.42, ease: "back.out(1.7)" }, at);

    // hero gets an extra coral emphasis pulse just after it lands
    if (i === heroIndex) {
      tl.fromTo(
        node,
        { boxShadow: "0 30px 90px rgba(0,0,0,0.4), 0 0 0 1px var(--coral)" },
        {
          boxShadow: "0 30px 90px rgba(0,0,0,0.4), 0 0 34px 4px var(--coral)",
          duration: 0.28,
          ease: "power2.out",
          yoyo: true,
          repeat: 1,
        },
        at + 0.34
      );
    }

    // connector below this node draws AFTER the node lands
    if (i < lineEls.length) {
      const line = lineEls[i];
      gsap.set(line, { [drawProp]: 0 });
      tl.to(line, { [drawProp]: 1, duration: 0.32, ease: "power2.out" }, at + 0.34);
    }
  });

  // gentle continuous push-in so nothing is frozen
  tl.fromTo(".wf-flow", { scale: 1.0 }, { scale: 1.035, duration: 3.0, ease: "none" }, 0);

  window.__timelines["workflow-diagram"] = tl;
})();
