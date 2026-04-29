# Podlink Help Center

This repository contains the Astro Starlight help center for Podlink.

## Local Development

Prerequisites:

- Node.js 24+
- `pnpm`

Commands:

- `pnpm install`
- `pnpm dev`
- `pnpm build`
- `pnpm preview`

The local dev server runs at `http://localhost:4321/`.

## Cloudflare Pages Deployment

This repo is set up to deploy to Cloudflare Pages from GitHub Actions on every push to `main`.

The workflow lives at `.github/workflows/deploy-cloudflare-pages.yml`.

### One-Time Setup

1. Push this repo to GitHub as `teampodlink/help`.
2. Create a Cloudflare Pages project.
   You can do this in the dashboard, or with Wrangler:

   ```bash
   pnpm dlx wrangler pages project create <project-name> --production-branch main
   ```

3. In GitHub, add these repository secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
4. In GitHub, add this repository variable:
   - `CLOUDFLARE_PAGES_PROJECT_NAME`

### Local Cloudflare Credentials

For local Wrangler-compatible secrets, this repo uses Cloudflare's `.dev.vars` format.

- Copy `.dev.vars.example` to `.dev.vars` if needed.
- Fill in:
  - `CLOUDFLARE_API_TOKEN`
  - `CLOUDFLARE_ACCOUNT_ID`
  - `CLOUDFLARE_PAGES_PROJECT_NAME`

`.dev.vars` is gitignored and should stay local-only.

### Recommended Cloudflare Values

For this Astro site, Cloudflare’s current Pages build guidance is:

- Production branch: `main`
- Build command: `pnpm build`
- Build output directory: `dist`

Even though this repo deploys through GitHub Actions instead of Cloudflare’s native Git integration, those are still the correct Astro build values if you configure the Pages project in the dashboard.

## Notes

- Deployments only run automatically for pushes to `main`.
- The workflow uploads the built `dist/` directory with Wrangler.
- Preview deployments for non-`main` branches are not enabled right now.
