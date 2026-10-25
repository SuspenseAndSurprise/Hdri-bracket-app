<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="logo-dark.svg">
    <img src="logo-light.svg" alt="HDRI Bracket" height="72">
  </picture>
</p>

A free on-set companion for shooting HDRIs. Set your darkest and brightest exposure, and it builds the bracket, walks you through every angle and keeps a log of every HDRI you shoot.

**Use it:** https://suspenseandsurprise.github.io/Hdri-bracket-app/

Open it in Chrome on your phone and use ⋮ → Install app. It works offline after that.

![HDRI Bracket](hdri-bracket-combo.png)

## What it does

- Builds the exposure bracket from your darkest and brightest frame
- Walks you through every angle for your lens and tracks what is done
- Autobracket sets: splits the bracket into sets of 3, 5, 7 or 9 frames for cameras that can't bracket the whole range, with the centre shutter for each set. Spare frames go to the slow end while the slowest frame stays at 1 s or shorter (cleaner shadows, nearly free), otherwise to the fast end, so no long exposure is wasted
- ND frame: enter your ND as printed on the filter (3 stops, 0.9 or ND8) and the shutter you used, and see the shutter without filter, where it lands next to your bracket and your camera's fastest shutter, plus a rough hint for the sun
- Single shot mode for textures and plates, with an optional lens note. Choose **Bracket** (your HDRI exposure range at one angle) or **One frame** (one shutter of its own; your HDRI range stays as it is). Done logs exactly what you shot
- Fastest shutter setting (up to 1/32000) and shifting the middle of the bracket
- Notes, location and a log for every HDRI, with a report you can copy
- Location is added by hand, or automatically if you turn it on in Settings
- Optional countdown timer for long exposures
- Built-in how-to, under Settings, including what to do when your head can't point straight up or down, the tripod and ground, and a few things to remember
- Presets for your camera and lens setup: pick one in the Camera card (tap again for no preset), see at a glance what each one sets, update the one you picked with your current setup (or replace any of them from Save current setup → Or replace), rename, add or drop parts, export or delete them under Settings (names up to 40 characters), share them as a .json file. Presets belong to the mode you save them in: save in Single shot for setups like Inside or Outside (aperture, ISO, white balance, Bracket or One frame with its shutter). The Camera card shows only the presets for the mode you're in; Settings lists all of them, Single ones tagged
- Themes (Glass, Calm, Classic), Light/Dark/Auto mode, night mode and sun mode

![Themes](hdri-bracket-themes.png)

![Autobracket sets](hdri-bracket-autobracket.png)

**Walkthrough video:** see the latest release.

## Your lens and crop sensors

The angle plans are in full-frame focal lengths. Type your own lens under Angles, and if the name has a focal length and a sensor word, the app converts it, picks the matching lens type and shows the full-frame equivalent:

> Fujifilm xe4 23mm apsc → Your lens ≈ **35 mm** full frame (23 mm on APS-C, ×1.5)

| Type in the name | Crop |
|---|---|
| APS-C, APSC, DX, XF, XC, DT, DC, DA, Super 35, S35 | ×1.5 |
| EF-S, RF-S, Canon APS-C | ×1.6 |
| APS-H | ×1.3 |
| MFT, M4/3, M43, Micro Four Thirds | ×2 |
| 1-inch, 1" | ×2.7 |
| Your own factor: ×1.5, x1.6, crop 1.6 | as typed |

- No sensor word means full frame, so "Sony 14mm" stays 14 mm.
- Zooms count at their widest end (10-18 mm → 10 mm). The aperture is ignored.
- Add "fisheye" for fisheye lenses.
- Mount names on their own (E, Z, RF, EF, X) don't count, because they don't tell the sensor size.
- Works in Single shot mode too, and the equivalent goes into the report.
- Saving a preset suggests your lens name as the preset name. If a preset with that name exists, the button says Update, and Undo brings the old one back.

## ND filter

Type the strength the way it's printed on the filter: stops (3), density (0.9) or factor (ND8). The app converts it to stops. Every 0.3 of density is one stop, and ND8 lets through 1/8 of the light, which is also 3 stops.

## Privacy

No account, no tracking, nothing leaves your phone. Everything is stored on the device. The font (Archivo, SIL Open Font License, see `OFL.txt`) ships with the app, so no request goes to Google or any other server.

## Run it yourself

The whole app is a single HTML file, `hdri-bracket.html`. Download it from [Releases](../../releases) and open it in a browser. Installing it as an app and the offline mode need the hosted version (or any https page).

## Updating

Open the app online once and it updates itself. Settings shows the version (date · hash) so you can check you have the latest build.

## Feedback

Issues and suggestions are welcome, especially from people who shoot HDRIs regularly.

Made with the help of AI.
