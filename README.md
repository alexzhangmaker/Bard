# Memo PWA

A mobile-first, offline-capable Memo PWA built with Vanilla JS, Tailwind CSS, and synced with Firebase.

## Features
- **Mobile First**: Designed for mobile interaction (bottom nav, touch-friendly).
- **Offline Capable**: Works offline via Service Worker, syncs when online.
- **Firebase Sync**: Real-time backup to Firebase.
- **PWA**: Installable on home screen.

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Build CSS:
   ```bash
   npm run build:css
   ```
   For development with watch mode:
   ```bash
   npm run watch:css
   ```
3. Update Firebase Config:
   Edit `src/firebase-config.js` with your keys if needed (currently pre-filled).

## Deployment (GitHub Pages)
1. Push to GitHub.
2. Go to Repository Settings -> Pages.
3. Select `main` branch (or `master`) and `/` root (since `index.html` is at root).
4. Save.

## Development
- Open `index.html` in your browser.
- Use mobile view in DevTools for best experience.
