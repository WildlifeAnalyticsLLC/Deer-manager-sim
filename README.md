# Deer Manager Sim™ v10.0

- Name living bucks from camera surveys or during an encounter. Names persist across seasons in saved games, and are recorded on harvest entries.
- Annual camera detection is 80% per deer property-wide. Detected deer appear in one or both assigned home-range blocks.
- Habitat tiles visually change based on forest type, thinning, clearcut, prescribed fire, and bottomland succession. Forage calculations are unchanged.
- Existing browser saves remain compatible.
- 60 hunting days, two hunts per day, 25% deer visibility per hunt.

## v9.1
Restores pine and hardwood emoji habitat icons, displays small numeric-only succession age (fire for pine/upland, timber treatment for managed bottomland), and preserves the v9.0 simulation and save keys.

## v9.2
Uses the same hardwood tree silhouette for upland (bright green) and bottomland (blue-green) forests. Pine retains its previous icon. No changes to forage, succession, hunting, or save logic.

## v9.3
12 hunting scenes: pine, upland hardwood and bottomland hardwood, each thinned/unthinned, with two visual variants. The predominant forest type and treatment determine the scene. Scene choice is visual only and does not change deer encounters, forage or carrying capacity.

## v9.4
Scene #1/#2 is assigned by hunting block number (odd-numbered blocks #1; even-numbered blocks #2), so it never switches between hunts in the same block. Removed the skyline; detailed ground texture fills the entire hunting canvas. Added trails, upland rocks, pine litter and bottomland ponds/creeks. Scene selection remains visual only.

## v9.5
Higher-detail procedural scene art with layered foliage, textured bark, leaf litter, water reflections, rocks and subtle paths. Scenes are cached at 2x resolution for smooth gameplay. The 12 fixed-by-block scene categories and all game mechanics remain unchanged.

## v9.6
Restores the embedded original v9.2 high-detail scene artwork, including its trees, water, rocks and logs. Hunting blocks retain fixed #1/#2 variants; forest types have subtle color treatments and unthinned scenes use additional cropped original-art tree details. No gameplay mechanics changed.

## v9.7 Aerial scene rebuild
Twelve overhead forest scene maps cropped from the approved 3x4 reference artwork. Thinned/unthinned variants for pine, upland hardwood, bottomland hardwood, with 2 fixed-by-block versions each. The deer and game mechanics are unchanged. Images are embedded in index.html for standalone testing and also included as individual WebP assets.

## v10.0 — Branding and rights notices

© 2026 Wildlife Analytics, LLC. All rights reserved.
Deer Manager Sim™ and associated branding are claimed trademarks of Wildlife Analytics, LLC.

This repository does not grant an open-source license. Any use of copyright-protected content beyond applicable legal exceptions requires permission from the relevant rights holder. These notices do not establish ownership of material that is not eligible for protection or that belongs to another rights holder.

All v9.7 aerial backgrounds, mechanics, and saved-game compatibility are retained.

## v10.2
Five-second sponsored-by splash screen with the Wildlife Analytics, LLC logo on each game opening.

## v10.2 — Year 1 property presets
Default new property: blocks 1–5 unthinned, never-burned pine; blocks 6–10 unthinned, never-burned bottomland hardwood. Removed All pine button. Balanced preset: B1 pine unthinned; B2 pine 70 BA fire age 1; B3 pine clearcut fire age 3; B4 upland unthinned; B5 upland 50 BA fire age 2; B6 upland 25 BA fire age 4; B7 bottomland unthinned; B8 bottomland 50 BA; B9 bottomland clearcut; B10 4 winter, 4 winter+perennial, 4 winter+summer, 8 winter+perennial+summer plots. Bottomland is never burned. Existing saved games remain unchanged until a new game or Balanced preset is selected.
