# BudgetPro — GitHub + Supabase Connected

This version is configured for the Supabase project supplied by the owner.

Included:
- Existing BudgetPro app
- PWA install support
- Supabase browser client
- Email/password account creation and login
- Automatic cloud save after BudgetPro changes
- Cloud load when logging in/opening
- Realtime updates from another device
- Offline-first localStorage behavior
- Row Level Security SQL

## Before deployment
1. Open Supabase SQL Editor.
2. Paste and run `SUPABASE_SETUP.sql`.
3. In Supabase Authentication, choose the email/password settings you want.
4. Upload all files in this folder to your GitHub repository.
5. Enable GitHub Pages from the `main` branch and root folder.
6. Open the GitHub Pages URL.
7. Click Cloud Sync and create/log into your BudgetPro account.

IMPORTANT:
- `config.js` contains a Supabase publishable key. Publishable keys are intended for browser apps.
- Never put a secret/service-role key in this repository.
- RLS policies in SUPABASE_SETUP.sql are required before using the app with real data.
