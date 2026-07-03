# Marimba Hotel — Next.js Website

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Pages

- `/` — Homepage
- `/rooms` — Room showcase
- `/booking` — Booking form (add `?room=standard`, `?room=terrace`, or `?room=penthouse`)
- `/about` — About us
- `/contact` — Contact & Socials

## Images needed

Place your images in `/public/images/`:

| Filename | Used on | Description |
|---|---|---|
| `hero.jpg` | Homepage hero | Full backyard golden hour shot — the best Midjourney image |
| `room-morning.jpg` | Homepage section 2 | Room with morning light, sea view |
| `chef-saj.jpg` | Homepage section 4 left | Chef making saj / Lebanese breakfast |
| `long-table.jpg` | Homepage section 4 right | Long communal table with mezze |
| `cinema-night.jpg` | Homepage section 5 left | Cinema screen by the pool |
| `fire-pit.jpg` | Homepage section 5 right | Fire pit with people gathered |
| `rooms-hero.jpg` | Rooms page hero | Evening garden terrace / backyard |
| `standard-room.jpg` | Rooms page | Standard room interior |
| `terrace-room.jpg` | Rooms page | Garden terrace room |
| `penthouse.jpg` | Rooms page | Penthouse living area |
| `about-hero.jpg` | About page hero | Aerial pool shot with fire pit |

## Fonts

Using Google Fonts:
- **Cormorant Garamond** — headings, pull quotes, body story text
- **Jost** — labels, navigation, buttons, small caps

## Colours

```
--bg:         #FAF7F2  (warm off-white)
--text:       #1A0D00  (deep dark brown)
--text-mid:   #5C3D1A  (mid brown)
--amber:      #C8882A  (warm gold accent)
--amber-pale: #F5ECD7  (light sand)
--blue:       #2B5EA7  (logo blue — nav only)
```

## Connecting payments (Tap Payments)

1. Sign up at tap.company
2. Get your API keys
3. Replace the booking button action in `/pages/booking.js`
4. Install: `npm install @tap-payments/card-sdk`

## Connecting to SiteMinder (channel manager)

Once SiteMinder is set up with your Opera V connection:
1. Use SiteMinder's booking engine API to check availability
2. Push confirmed reservations from the booking form
3. SiteMinder handles the Opera V sync automatically

## Deploying to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your site will be live in ~2 minutes.
For a custom domain, add it in the Vercel dashboard settings.
