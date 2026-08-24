JENNY'S BUDGETPRO — GITHUB-READY PACKAGE

Files:
- index.html — BudgetPro app with URL budget sharing and Jenny logo
- manifest.json — installable PWA configuration
- service-worker.js — offline/app-shell support
- logo-192.png — app icon
- logo-512.png — app icon

GITHUB UPLOAD:
1. Open your repository: My-Personal-Budget-Tracker-Journey
2. Click Add file → Upload files.
3. Upload all 5 files to the repository ROOT.
4. Commit changes.
5. Open Settings → Pages.
6. Choose Deploy from a branch.
7. Select main and / (root).
8. Wait for deployment.
9. Open:
   https://almencionjenny08.github.io/My-Personal-Budget-Tracker-Journey/

INSTALL:
Android/Chrome: open the site and choose Install app or Add to Home screen.
iPhone/Safari: open the site → Share → Add to Home Screen.

IMPORTANT:
The shareable budget URL contains the budget state in the URL hash. Anyone with the full URL can open that budget. Do not store passwords or banking credentials in it.


FIXED IN THIS BUILD
- Prevents an old #budget URL snapshot from overwriting newer local edits on refresh.
- Keeps the shareable URL synchronized with current bp_* localStorage data.
- Synchronizes changes between BudgetPro tabs/PWA windows.
- Service worker updated to v3 and changed to network-first for HTML so new Netlify deployments are not trapped behind stale cached index.html.
- Added Netlify _headers rules to prevent index.html and service-worker.js from being cached.
