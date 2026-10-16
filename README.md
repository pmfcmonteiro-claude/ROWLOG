# Row Log — Android app

Native Android app for Merach rowers (and other Bluetooth FTMS rowers): workouts, live stats,
heart-rate zones, voice coach and history. Everything runs on the phone; no website or account needed.

The app is the same screens as the browser version, wrapped with Capacitor and using Android's own
Bluetooth, text-to-speech, keep-screen-on and share features.

## Get the APK — option A: build it in the cloud (nothing to install)

1. Sign in at github.com (free account) → **New repository** → name it `rowlog` → **Private** → Create.
2. On the empty repo page click **uploading an existing file**, drag in **everything inside this folder**
   (the `.github` folder too — it holds the build recipe), then **Commit changes**.
   - If drag-and-drop skips hidden folders, create the file `.github/workflows/build-apk.yml`
     with **Add file → Create new file** and paste its contents.
3. Open the **Actions** tab. The "Build Android app" run starts by itself (about 5 minutes).
4. When it shows a green tick, open the run and download **row-log-apk** at the bottom. Unzip it → `app-debug.apk`.

## Get the APK — option B: build on your computer

1. Install **Node.js 22** and **Android Studio**.
2. In this folder run:
   ```
   npm ci
   npm run sync
   ```
3. Android Studio → **Open** → the `android` folder → wait for Gradle to finish →
   **Build → Build App Bundle(s) / APK(s) → Build APK(s)**.
   Or plug in your phone with USB debugging on and press **Run** to install it directly.

## Install on the phone

1. Copy `app-debug.apk` to the phone (Google Drive, email, USB) and tap it.
2. Allow **Install unknown apps** for the app you opened it from, when Android asks.
3. Open **Row Log** and tap **Connect rower**. Allow **Nearby devices** (Bluetooth) the first time.
4. Close the Merach app first — the rower accepts one connection at a time.

## Changing the app

The app screen is `www/index.html` (identical to the browser version apart from local fonts).
After editing it, run `npm run sync` and build again, or just push to GitHub for a new APK.
Installing a new APK over the old one keeps your history, as long as it's built from the same
computer/GitHub repo (same signing key).
