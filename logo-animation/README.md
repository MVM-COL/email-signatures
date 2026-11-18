# Logo transition (old → new)

The old MVM logo (two roads) becomes the new symbol (the "M de rampas") in about 6 s. Built with SVG + GSAP 3.13 (MorphSVG, DrawSVG), as decided in #9. One source produces every format.

| Output | File | Use |
|---|---|---|
| Web | `logo-animation/index.html` | Plays once on load; "Pausar" and "Ver de nuevo" buttons. Honors `prefers-reduced-motion` (cross-fade only). Without JS shows the final symbol. |
| Email signature | `assets/v2/simbolo-animado@2x.png` (APNG) | 96 × 54, shown at 48 × 27. Plays once and stops on the new symbol. **First frame = new symbol**, because clients that do not animate show only frame 1. |
| Signature fallback | `assets/v2/simbolo-animado@2x.gif` | Same as the APNG; 1-bit transparency (edges may halo on dark backgrounds). |
| Social | `logo-animation/exports/transicion-logo-1080x1080.mp4` | 1080 × 1080, white, 30 fps, H.264, ≈7.2 s (≈6.2 s of motion + 1 s still on the new symbol). |

## Choreography (≈6.2 s of motion + 1 s hold)
Built on the principles in `.claude/knowledge/motion/animation-principles.md` (Apple springs, NN/g timing, Disney's 12 principles via Wikipedia and IxDF). Length is set by legibility, not by a target duration.
1. **0–1.0 s, staging:** the old logo holds so it is recognised; the lane lines run toward us and never stop.
2. **1.0 s, perspective fixed (slow spring):** in the old logo each road has its own vanishing point; both now converge to one, like a two-carriageway highway seen from a camera centred on the vanishing point. The lane dashes take real perspective.
3. **≈2.0 s, sunlight:** a soft band of light with a bright sheen travels from the horizon toward us and turns both roads yellow; the lane lines disappear under the light instead of stopping.
4. **≈3.1 s, camera move (slow spring):** a real 3D camera slides right and tilts down (quaternion slerp, rising in an arc) until the yellow roads, seen from above, are exactly the two slanted bars. The frame crops the top, bottom and left; the right road ends on a ground line that reads as the right bar's vertical cut.
5. **"La patita":** a tiny pull-back (anticipation), then the leg and step slide out of the right bar in an arc, with a long spring that settles with a little weight.
6. **Blue:** sweeps in diagonally (a wipe, not a colour blend, which turns muddy), then a small scale settle and 1 s still on the new symbol.

The web page has **Pausar** and **Ver de nuevo** buttons: the motion runs longer than 5 s, so WCAG 2.2.2 asks for a way to pause it. `prefers-reduced-motion` replaces everything with a cross-fade.

Every movement uses an Apple-style spring defined by perceptual duration and bounce (`spring()` in `index.html`: ω = 2π / duration, damping ratio = 1 − bounce).

## Regenerate the files
```bash
node logo-animation/render.mjs          # serves the repo and saves posted frames in logo-animation/.frames/
```
Open each URL in a browser and wait until `window.captureDone` is set:
- Signature frames (stop at the end of the motion): `http://localhost:8766/logo-animation/?capture=sig&size=96x54&fps=15&firstFinal=1&end=6.2`
- Social frames: `http://localhost:8766/logo-animation/?capture=social&size=1080x1080&fps=30&bg=%23FFFFFF&fit=0.62`

Then:
```bash
F=logo-animation/.frames
ffmpeg -y -framerate 15 -i $F/sig/%04d.png -plays 1 -f apng assets/v2/simbolo-animado@2x.png
ffmpeg -y -framerate 15 -i $F/sig/%04d.png -vf "split[a][b];[a]palettegen=reserve_transparent=1:stats_mode=full[p];[b][p]paletteuse=alpha_threshold=128:dither=none" -loop -1 assets/v2/simbolo-animado@2x.gif
ffmpeg -y -framerate 30 -i $F/social/%04d.png -vf "format=yuv420p" -c:v libx264 -crf 18 -preset slow -movflags +faststart logo-animation/exports/transicion-logo-1080x1080.mp4
```
`assets/v2/` files are versioned and never overwritten once published; a change ships under a new name or `assets/v3/`.

## Known limits
- In dark mode the old logo's dark roads almost disappear while they are black (only the white lines show). The end state is fine.
- The new symbol uses the clean master rebuilt on 2026-11-18 (Figma eMail-Signatures › Specs, node 47:2): 15 points with live corner radii instead of 39 baked ones.
- Gmail/Outlook support for APNG and GIF animation must be verified in QA (#7).
