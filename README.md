# SG Checkpoint Traffic

Live traffic camera snapshots for Singapore's land checkpoints (Woodlands Causeway and Tuas Second Link), grouped by direction, refreshed every minute, with Google Maps live-traffic views.

- Data: LTA Traffic Images via data.gov.sg (`https://api.data.gov.sg/v1/transport/traffic-images`, CORS-enabled, no key needed).
- Maps: set `GOOGLE_MAPS_API_KEY` in `config.js` to embed Google Maps with the traffic layer. Restrict the key by HTTP referrer, since a browser key is visible to anyone. Without a key, each checkpoint shows an "Open in Google Maps" link with traffic turned on.

Run locally: `node server.js`, then open http://localhost:5174.
