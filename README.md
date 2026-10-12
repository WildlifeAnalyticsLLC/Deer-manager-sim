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
