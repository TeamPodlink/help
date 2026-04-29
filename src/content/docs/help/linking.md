---
title: How do I link to a podcast on Podlink?
---

Podlink lets you link directly to podcasts and individual episodes using structured URLs. These links are generated based on either your podcast’s Apple Podcasts ID or RSS feed URL.

## Show Links

You can create a Podlink for an entire podcast using one of the following:

- Apple Podcasts ID: `https://pod.link/<appleID>`
- Feed URL: `https://pod.link/<base64-feedURL>`

## Episode Links

You can also link directly to a specific episode. These are created by appending the episode’s GUID (a unique ID in your RSS feed), encoded in either URL-safe base64 or MD5.

- Apple Podcasts ID + Base64: `https://pod.link/<appleID>/episode/<base64-GUID>`
- Feed URL + Base64: `https://pod.link/<base64-feed-URL>/episode/<base64-GUID>`
- Apple Podcasts ID + MD5: `https://pod.link/<appleID>/episode/<MD5-GUID>`
- Feed URL + MD5: `https://pod.link/<base64-feed-URL>/episode/<MD5-GUID>`

## Not Sure Which Format to Use?

If your podcast is listed in Apple Podcasts, using the Apple ID version is the simplest method. If you're working directly with RSS feeds, the Base64 version works just as well.

Last updated on July 27, 2025
