---
title: How do listens on Podlink show up in my analytics?
---

When someone listens to your podcast through Podlink, that activity is tracked just like any other web-based play in your podcast analytics. We include specific metadata in our requests so you can identify traffic coming from Podlink.

## What You’ll See in Your Hosting Analytics

When a listener streams an episode on Podlink, your hosting provider will typically log the following:

- User-Agent: The listener’s browser or device information
- Referer: `https://pod.link/`
- Query Parameter: `_from=podlink`

These details allow most podcast hosting platforms to attribute the play to Podlink, either directly or via custom analytics filtering.

## Need Help Finding Podlink Traffic?

If you're not seeing Podlink clearly in your analytics, we recommend checking with your hosting provider to see how they log and expose referrer and query data.

Last updated on July 27, 2025
