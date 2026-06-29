#!/usr/bin/env node
// Capture a preview PNG (seek to one frame) or MP4 (frame sequence) of a HyperFrames
// scene/component by driving its paused window.__timelines timeline.
//
// Usage:
//   node capture-preview.mjs <scene.html> <out.png> [--seek 0.95]
//   node capture-preview.mjs <scene.html> <out.mp4> --mp4 [--fps 30] [--dur 1.3]
//   node capture-preview.mjs <scene.html> <out.png> --clip 0,1920,1080,1920   (for stacked key frames)
//
// Requires: playwright (chromium) + ffmpeg on PATH. Run under Node 22.

import { chromium } from "playwright";
import { mkdtemp, rm, mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, dirname, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const args = process.argv.slice(2);
const [input, output] = args;
if (!input || !output) {
  console.error("Usage: capture-preview.mjs <scene.html> <out.(png|mp4)> [--mp4] [--fps N] [--dur S] [--seek P] [--clip x,y,w,h]");
  process.exit(1);
}
const flag = (name, def) => {
  const i = args.indexOf(name);
  return i === -1 ? def : args[i + 1];
};
const isMp4 = args.includes("--mp4");
const fps = Number(flag("--fps", 30));
const seek = Number(flag("--seek", 0.95));
const clipStr = flag("--clip", null);
const elSel = flag("--el", null);
const url = "file://" + resolve(input);

const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1920 },
    deviceScaleFactor: 1,
  });
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  await page.evaluate(() => document.fonts && document.fonts.ready);
  await page.waitForTimeout(300);

  // discover the timeline + its duration
  const meta = await page.evaluate(() => {
    const t = window.__timelines || {};
    const keys = Object.keys(t);
    const root = document.querySelector("[data-composition-id]");
    const dur = root ? parseFloat(root.getAttribute("data-duration")) : null;
    return { key: keys[0] || null, dur: dur || (keys[0] ? t[keys[0]].duration() : 1) };
  });

  await mkdir(dirname(resolve(output)), { recursive: true });

  if (isMp4) {
    const dur = Number(flag("--dur", meta.dur || 1.3));
    const total = Math.max(1, Math.round(dur * fps));
    const dir = await mkdtemp(join(tmpdir(), "hf-prev-"));
    for (let i = 0; i < total; i++) {
      const t = (i / fps);
      await page.evaluate(
        ({ key, time }) => {
          const tl = window.__timelines[key];
          tl.pause();
          tl.time(Math.min(time, tl.duration()));
        },
        { key: meta.key, time: t }
      );
      await page.screenshot({ path: join(dir, String(i).padStart(4, "0") + ".png") });
    }
    const r = spawnSync(
      "ffmpeg",
      ["-y", "-framerate", String(fps), "-i", join(dir, "%04d.png"),
       "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "20",
       "-movflags", "+faststart", resolve(output)],
      { stdio: "inherit" }
    );
    await rm(dir, { recursive: true, force: true });
    if (r.status !== 0) process.exit(r.status || 1);
    console.log("Wrote " + output + " (" + total + " frames @ " + fps + "fps)");
  } else {
    if (meta.key) {
      await page.evaluate(
        ({ key, p }) => {
          const tl = window.__timelines[key];
          tl.pause();
          tl.progress(p);
        },
        { key: meta.key, p: seek }
      );
    }
    if (elSel) {
      // element screenshot — handles content taller than the viewport (stacked key frames)
      await page.locator(elSel).screenshot({ path: resolve(output) });
    } else {
      const opts = { path: resolve(output) };
      if (clipStr) {
        const [x, y, width, height] = clipStr.split(",").map(Number);
        opts.clip = { x, y, width, height };
      }
      await page.screenshot(opts);
    }
    console.log("Wrote " + output);
  }
} catch (err) {
  console.error("Error: " + err.message);
  process.exit(1);
} finally {
  await browser.close();
}
