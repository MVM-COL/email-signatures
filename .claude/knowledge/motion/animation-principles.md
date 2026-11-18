---
summary: Animation principles for brand and logo motion: springs (duration + bounce), velocity continuity, easing, timing and durations, the 12 classic principles applied to a logo morph
tier: advisory
last_verified: 2026-11-18
review_by: 2027-05-18
sources:
  - publisher: Apple
    url: https://developer.apple.com/videos/play/wwdc2023/10158/
  - publisher: Nielsen Norman Group
    url: https://www.nngroup.com/articles/animation-duration/
  - publisher: Wikipedia
    url: https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation
  - publisher: Interaction Design Foundation
    url: https://ixdf.org/literature/article/ui-animation-how-to-apply-disney-s-12-principles-of-animation-to-ui-design
  - publisher: New York Film Academy
    url: https://www.nyfa.edu/student-resources/12-principles-of-animation/
  - publisher: The Lighting Lab
    url: https://thelightinglab.es/en/disneys-12-principles-of-animation-a-guide-to-create-realistic-and-dynamic-movements/
---

# Animation principles

> NN/g durations are for UI feedback; a brand/logo moment can run longer, but the easing and continuity rules still apply.

## Springs
<!-- tags: topic=motion; platform=any; concern=usability; keywords=spring, bounce, damping, perceptual duration, velocity, smooth, snappy, resorte -->
- Keep position and velocity continuous; a sudden change in velocity is what makes motion feel unnatural. [Apple: https://developer.apple.com/videos/play/wwdc2023/10158/]
- Use springs: they keep continuity from rest and with an initial velocity, and when retargeted mid-flight they carry their current velocity into the new target. [Apple: https://developer.apple.com/videos/play/wwdc2023/10158/]
- Define a spring by perceptual duration and bounce, choosing the duration for pacing first and then the bounce for character. [Apple: https://developer.apple.com/videos/play/wwdc2023/10158/]
- Default to bounce 0 (smooth, long tail); about 0.15 makes the tail brisker without feeling bouncy, about 0.3 is noticeably bouncy, and above about 0.4 feels exaggerated. [Apple: https://developer.apple.com/videos/play/wwdc2023/10158/]
- Convert to physics with mass 1, stiffness (2π ÷ duration)², damping 4π × (1 − bounce) ÷ duration for bounce ≥ 0. [Apple: https://developer.apple.com/videos/play/wwdc2023/10158/]
- Let different properties settle at different times; the long, gradual settle is natural, not a bug. [Apple: https://developer.apple.com/videos/play/wwdc2023/10158/]

## Easing and timing
<!-- tags: topic=motion; platform=any; concern=usability,a11y; keywords=easing, ease-out, linear, duration, timing, flashing, color cut -->
- Avoid linear motion for movement: constant speed and the velocity jump at start and end look mechanical. [Apple: https://developer.apple.com/videos/play/wwdc2023/10158/]
- Use ease-out most often: a quick start that slows at the end feels responsive and lets the eye settle. [Nielsen Norman Group: https://www.nngroup.com/articles/animation-duration/]
- Keep UI animations around 100–500 ms, aim for the shortest duration that is not jarring, and remember 400 ms already reads as slow for UI. [Nielsen Norman Group: https://www.nngroup.com/articles/animation-duration/]
- Give entering elements a slightly longer duration than exiting ones. [Nielsen Norman Group: https://www.nngroup.com/articles/animation-duration/]
- Avoid hard colour cuts and flashing, which can trigger seizures; respect reduce motion. [Nielsen Norman Group: https://www.nngroup.com/articles/animation-duration/]

## Classic principles for a logo morph
<!-- tags: topic=motion; platform=any; concern=quality; keywords=twelve principles, anticipation, follow through, overlapping action, slow in slow out, staging, arcs, timing -->
- Staging: present one idea at a time so it is unmistakably clear; hold the starting mark long enough to be recognised. [Wikipedia: https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation]
- Anticipation: precede a main action with a small preparatory move in the opposite direction. [Wikipedia: https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation]
- Follow through and overlapping action: let parts move at slightly different rates and lag a few frames instead of moving in lockstep. [Wikipedia: https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation]
- Slow in and slow out: put more frames near the start and end of each action and fewer in the middle. [Wikipedia: https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation]
- Timing: the number of frames per action sets its weight and mood; lighter objects react faster. [Wikipedia: https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation]
- Secondary action: add supporting motion only when it reinforces the main action, never when it competes with it. [Wikipedia: https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation]
- Squash and stretch: when deforming for a settle, keep the volume constant. [Wikipedia: https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation]

## Applying the principles to UI and brand motion
<!-- tags: topic=motion; platform=any; concern=quality,usability; keywords=ui animation, disney principles, staging, hierarchy, exaggeration, appeal, ixdf -->
- Staging: use motion to point at what matters and keep the motion of less important elements to a minimum, because competing motion confuses. [Interaction Design Foundation: https://ixdf.org/literature/article/ui-animation-how-to-apply-disney-s-12-principles-of-animation-to-ui-design]
- Overlapping action builds hierarchy: the element that starts the action leads and related elements follow a beat later. [Interaction Design Foundation: https://ixdf.org/literature/article/ui-animation-how-to-apply-disney-s-12-principles-of-animation-to-ui-design]
- Without easing in and out, animation feels robotic. [Interaction Design Foundation: https://ixdf.org/literature/article/ui-animation-how-to-apply-disney-s-12-principles-of-animation-to-ui-design]
- Prefer arced paths over straight lines when an element travels. [Interaction Design Foundation: https://ixdf.org/literature/article/ui-animation-how-to-apply-disney-s-12-principles-of-animation-to-ui-design]
- Set the amount of squash and stretch by the material: pronounced for rubbery elements, subtle for heavy, rigid ones such as a logo. [Interaction Design Foundation: https://ixdf.org/literature/article/ui-animation-how-to-apply-disney-s-12-principles-of-animation-to-ui-design]
- Keep exaggeration subtle enough to be invisible, and tone it down if it starts to annoy. [Interaction Design Foundation: https://ixdf.org/literature/article/ui-animation-how-to-apply-disney-s-12-principles-of-animation-to-ui-design]
- Any distortion must look intentional and keep the visual design consistent (solid drawing). [Interaction Design Foundation: https://ixdf.org/literature/article/ui-animation-how-to-apply-disney-s-12-principles-of-animation-to-ui-design]
- Use pose to pose (key poses, then in-betweens) for planned UI and brand motion. [Interaction Design Foundation: https://ixdf.org/literature/article/ui-animation-how-to-apply-disney-s-12-principles-of-animation-to-ui-design]
- Anticipation can be a short pause or a small crouch before the main action, which builds attention. [New York Film Academy: https://www.nyfa.edu/student-resources/12-principles-of-animation/]
- Ignoring follow-through makes motion look robotic: attached parts keep moving briefly after the main body stops. [The Lighting Lab: https://thelightinglab.es/en/disneys-12-principles-of-animation-a-guide-to-create-realistic-and-dynamic-movements/]

