# Podlink Help Center

This repository contains the help center for Podlink.

## Adding a New Help Article

1. Create a new Markdown file in `src/content/docs/help/`.
2. Add frontmatter with at least a title.
3. Write the article body in standard Markdown.
4. Add the article to the `Help Articles` sidebar group in `astro.config.mjs`.
5. Run `pnpm build` to verify the page renders correctly.

## Editing Existing Articles

When updating docs:

- Keep titles phrased as user questions when possible
- Prefer short sections with clear headings
- End with a concrete next step when the user may still be blocked

## Legal Articles

The legal pages are plain Markdown files in `src/content/docs/legal/`. Always run `pnpm build` after touching legal docs.

## Sidebar Notes

Starlight navigation is configured manually in `astro.config.mjs`.

If you add a new article and do not add it to the sidebar, it will still exist as a route, but it will not appear in site navigation.

## Deployment

Pushes to `main` deploy automatically to Cloudflare Pages through GitHub Actions.

Relevant files:

- Workflow: `.github/workflows/deploy-cloudflare-pages.yml`
- Wrangler config: `wrangler.jsonc`
- Local Cloudflare secrets template: `.dev.vars.example`

Production site:

- `https://help.podlink.com`
