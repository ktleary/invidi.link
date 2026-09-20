# invidi.link

Convert YouTube URLs to working [Invidious](https://invidious.io) instance links.
Mobile-first, single-file vanilla JS — no build step, no dependencies.

**In the wild:** https://invidi.link/

## How it works

- Paste a YouTube URL (`watch?v=`, `youtu.be/`, `/shorts/`, `/embed/`, `/live/`) or any
  Invidious-style URL — the host is swapped, path and query preserved.
- The instance list comes from the official monitor data at `api.invidious.io/instances.json`,
  fetched once per session (cached in `sessionStorage`) and filtered to HTTPS instances that
  are up with ≥90% uptime. Yggdrasil-only hosts are excluded.
- **Copy** button per result, **Go random** to redirect to a random healthy instance,
  **Refresh instances** to force a re-fetch.
- Pre-populate with `?url=`: `https://invidi.link/?url=https://www.youtube.com/watch?v=iRXJXaLV0n4`

## Privacy

GPL-3.0 licensed. No third-party trackers; no URL data is sent anywhere except the public
instance API (which never sees your video URL — only your IP fetching the instance list).

## Deploy

Static file. `index.html` is the entire app — the served file *is* the source.

Deploy from mesh9: fetch the repo at `main`/`master`, rsync (minus `.git`) into
`/var/www/invidi.link/` on Gaudi as `deploy`, then verify `https://invidi.link/` returns 200.
Use the shared mesh9 deploy script (`deploy-static-site.sh`) — no GitHub-held SSH keys,
no Actions.
