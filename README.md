# BudgetPro & Debt Manager — GitHub Pages + Supabase + PWA

This package is ready for the existing `My-Personal-Budget-Journey` GitHub Pages repository.

## Upload
Upload/replace the files in the repository root so that `index.html`, `config.js`, `manifest.json`, `service-worker.js`, `icon-192.png`, and `icon-512.png` are at the root level.

## Install
After GitHub Pages publishes the changes, open the site in Chrome over HTTPS. Use Chrome's menu and choose **Install app** (or **Add to Home screen**, depending on the browser/device).

## Supabase
`SUPABASE_SETUP.sql` is included for the database setup. The browser uses the publishable key in `config.js`; never place a Supabase secret/service-role key in a public GitHub Pages repository.
