# Deer Manager Sim v4.6 — Installable PWA

Publish these files at the **root** of your GitHub Pages repository. Do not upload the ZIP itself.

- `index.html` — game and update prompt
- `manifest.webmanifest` — installation settings
- `sw.js` — offline cache and update activation
- `version.json` — version checked by the app
- `icon-192.png`, `icon-512.png` — home screen icons

## Update future versions

1. Change the version in the HTML (`CURRENT_VERSION`), `version.json`, and the `CACHE_NAME` in `sw.js`.
2. Replace updated files on the `main` branch. Keep `version.json` updated **last** if deploying files in separate commits, so users aren't prompted before files are ready.
3. The installed app checks on opening, returning to foreground, and periodically while active. It shows **UPDATE NOW** when it sees a newer version.
4. Game saves remain in browser local storage; don't clear site data. Export a backup before major changes.

GitHub Pages can take a few minutes to deploy. Offline play works after an initial successful load and cache installation.


FULL SAVE TRANSFER: Export Save JSON exports active state and completed game history. Import Save JSON validates and restores the active game and merges completed history. Before import, the current browser save is backed up in localStorage.

Version 4.7: History import/export buttons removed from leaderboard; full-save export/import remain at page bottom. Deleting history requires confirmation.

## v5.1 updates
- Sharper, more defined doe ears on harvest selection art.
- Doe weights hidden from both pre-season and in-season camera survey tables (internal calculations unchanged).
- Three-leaf clover ☘️ replaces sunflower for the combined food-plot habitat icon.

## Version 6.0
- Hunting seasons now run for 60 days.
- Added finer individual variation to buck genetic potential.
- Bucks of the same age have distinct displayed antler scores, including bucks from existing saves.

## Version 7.0
Final game ranking uses five equally weighted categories (200 points each): harvested trophy average, 10-season mean carrying capacity, total trophies, largest harvested buck, and 10-season mean doe score. Benchmarks are internal only; the UI displays earned points without denominators. Trophy-average category receives a proportional reliability adjustment below five harvested trophies. Previous saved games and game history remain compatible.

## v7.2
Only one trophy buck (above the current season buck target) may be harvested per day. Management bucks and does are unrestricted. The daily trophy limit persists across reloads and resets on the next hunting day.

## v7.2.1
Fix update notification loop: running version now matches version.json. No gameplay changes.

## v7.3
Individual DELETE GAME buttons in Game History & Leaderboard require confirmation and remove only the selected completed game. Other games and active saves are preserved.

## v8.1
Bottomland hardwood succession ages independently after thinning/clearcutting, with herbaceous peak in year 1 and browse peak in year 4, declining through year 10. No bottomland burning. Existing saves remain compatible; existing treated cells start their succession age at zero when first loaded in v8.1.

## v8.2
120 hunting days, morning and afternoon hunts per day, 10% independent chance of visibility for each deer assigned to selected block each hunt period. Trophy buck limit remains one per day. Existing saved games preserved.

## v8.3
Each deer assigned to the selected hunting block has a 25% independent visibility chance per morning or afternoon hunt (previously 10%). All other v8.2 mechanics retained.
