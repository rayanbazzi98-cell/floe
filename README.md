# FLOE — cinematic site

Vite + React 18 + TypeScript + Tailwind CSS 3.

```
npm install
npm run dev
```

## What's real vs. placeholder

The real logo (`src/assets/brand/logo.png`, rendered via `src/assets/Logo.tsx`
— `filter: brightness(0) invert(1)` produces the white variant for dark
backgrounds) and the full 7-SKU product catalog (names, sizes, pack counts,
and prices in `src/lib/content.ts`) are real, read straight off
floeworld.com's shop page. 4 of the 7 SKUs have a matching real product
photo (`src/assets/bottles/`); the other 3 (330ml/12-pack PET, still glass
12-pack, still glass 24-pack) render a "Photo pending" placeholder card
rather than a real-but-wrong photo (e.g. a "sparkling" label on a still
product) — add `image: yourImport` to those entries in `content.ts` once
you have the photos.

Still placeholder:

- Hero/purity-claims copy, FAQ, and contact info — placeholder copy written
  in FLOE's voice, marked with comments in `content.ts`.
- The hero's Ken Burns background (`src/assets/backgrounds/icy-mountains.jpg`)
  is a real supplied mountain photo (Lanczos-upscaled 3x + sharpened from a
  612x397 source, since that's the resolution it came in at) — not a
  placeholder, just worth noting it's licensed/sourced by whoever supplied
  it, not verified here.

## Theme

Light/icy palette (`paper` = page background, `ink` = text, defined in
`tailwind.config.js`) throughout, except the hero itself which sits over
the bottle/mountain photo. The navbar's dark→white text flip only applies
while scrolled over that photo — `src/components/Hero.tsx` publishes a
0/1 "should navbar go light" signal (not raw scroll progress, which
clamps at 1 and would otherwise leave the navbar stuck white forever once
you scroll past the hero into the light sections below).

## Cart & checkout

- **Cart** (`src/lib/cart.tsx`): React context + localStorage, no backend. Add/remove/adjust quantity from product cards or the cart drawer (`src/components/CartDrawer.tsx`, opened from the bag icon in the navbar).
- **Checkout** (`src/pages/Checkout.tsx`): a real address/contact form with validation. There's no payment processing wired up (no Stripe/backend — that needs your own account + API keys if you want it later). "Place order" instead builds a plain-text order summary and opens a `mailto:` link addressed to `contact.email` in `src/lib/content.ts`, plus shows an on-page confirmation with a "copy order details" fallback for when the browser blocks `mailto:`.
- Routing uses `HashRouter` (`/#/checkout`) rather than `BrowserRouter` — GitHub Pages serves static files with no server-side rewrite, so hash routing avoids 404s on direct links/refreshes without extra config.

## Hero mechanic

`src/components/Hero.tsx` drives a 500vh sticky scroll track
(`src/hooks/useScrollScrub.ts`) with a rAF loop and exponential (tau-based)
lerp smoothing. Per-frame values are written straight to DOM refs (no React
re-render per tick) for the Ken Burns zoom, the bottle reveal, and the
three staggered text sections' opacity curves (`src/lib/heroCurves.ts`).
