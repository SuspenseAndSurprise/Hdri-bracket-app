HDRI Bracket · 2026-10-25 · 53a1b2

New
- Presets help folds to one line that follows what you're doing (applying, saving, editing, or a changed preset to update). Tap More for the full list. In Save current setup, "What goes in" is one line too (e.g. Shutter · AEB · Lens · ISO · WB); tap Change for the chips, which only show the parts of the mode you're in.
- Presets: Export all, next to Import .json at the bottom of Presets. One file with every preset that Import reads straight back. Edit still exports a single preset.
- How to shoot: now also covers a head that can't tilt fully up or down (angles per tilt limit), the tripod and ground (when to paint out, when to bracket), and a short good-to-remember list.
- ND frame: enter your ND strength and the shutter you used. Type it the way it's printed on the filter: stops (3), density (0.9) or factor (ND8); the app converts it to stops. The app shows the shutter without filter, where it lands next to your bracket on the ruler, and how far past your camera's fastest shutter it goes.
- Sun hint: a rough estimate of how many stops of ND the sun needs, based on your own settings.
- Light/Dark/Auto mode: pick it in Settings → Look, or let it follow your system.
- Presets: save your camera, autobracket, lens and angle setup, and choose what goes in. Pick one under Presets in the Camera card (folded away until you open it); tap it again to go back to no preset, which is the default. Each preset shows what it sets: saved parts in white, the rest greyed out. In Settings, Edit renames a preset, drops parts of it, exports or deletes it. Share presets as a .json file.
- Your lens: type your own lens name, e.g. Sony 11 mm. With a focal length in the name it picks the matching lens type and shows the full-frame equivalent (fisheye, APS-C and MFT understood). It shows on the lens button, in presets and in the log.
- Walkthrough video (2:15) showing one HDRI from start to finish.
- New app icon and logo: an exposure dial. The angle ring picks up the same idea: a red sweep runs from 0° round to the current angle, with a gap around any angle you skipped. Reinstall from the home screen if your phone keeps showing the old icon.

Changed
- Single shot mode is gone: the app is HDRI-only again. For textures and plates, use the camera's A mode (tip in How to shoot). Saved data carries over: an app left in Single shot opens on your HDRI lens, Single shot presets keep their ISO, white balance and aperture as normal presets, and old single-shot entries stay in the log.

Fixes
- Reset all settings: folded cards now follow the reset right away. Before, the Camera card could stay open while the app thought it was closed, so tapping it seemed to do nothing. Undo of the reset restores the folds too.
- Dials: a shutter or aperture dial could show an empty middle after it had been hidden (a folded card). It now lines up again as soon as it shows.
- Presets: you can now save changes into a preset. Pick or save one, adjust, and in Settings that preset shows an Update button (a preset you just saved counts as picked). To overwrite any other preset with your current setup, tap Save current setup and pick it under "Or replace": no typing, its parts are preselected and the button says Update. The list shows the preset you use first and at most six (tap "+ more" for the rest); typing narrows it. While the form is open, the Save current setup button turns into Cancel. Edit can now add parts as well as drop them. Changing a setting a preset holds still takes you out of that preset in the Camera card. Preset names can be up to 40 characters.
- Autobracket: spare frames in a set now go to the slow end while the slowest frame stays at 1 s or shorter (cleaner shadows, nearly free), and to the fast end beyond that, so no long exposure is wasted (e.g. 1/15 → 5s at 3 × 3 EV now ends at 5s instead of 30s, 1/1250 → 4s at 4s instead of 25s). No extra overlapping set when your range is just past a whole step. Also applies when your range fits in one set. Without autobracket nothing changes.
- Shutter and aperture dials: every full stop has a small dot under it, like a camera dial, so one stop is "the next dot".
- Brightest: hint to go one dot (one stop) slower when unsure, for cleaner shadows.
- Font now ships with the app instead of loading from Google Fonts. Nothing leaves your phone, and offline the big numbers keep their narrow Archivo shape instead of falling back to a wider system font.
- Night mode: the lens over the Darkest and Brightest dials had a white rim; it's red now like the rest.

Install
Open https://suspenseandsurprise.github.io/Hdri-bracket-app/ on your phone and add it to your home screen. Works offline after that.

Files
- hdri-bracket.html: the whole app in one file, open it in a browser
- hdri-bracket-app.zip: the installable version to host yourself (any https host)
- hdri-bracket-walkthrough.mp4: the walkthrough video

Already using it? Open the app online once and it updates itself. Check the version in Settings: 2026-10-25 · 53a1b2.
