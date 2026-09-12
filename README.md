# FLOE — cinematic site

Vite + React 18 + TypeScript + Tailwind CSS 3.

```
npm install
npm run dev
```

## What's real vs. placeholder

This environment has no general network access (outbound egress is blocked
to floeworld.com and effectively every other site) and no way to save
pasted image attachments to disk, so the real logo file, bottle photography,
and site copy could not be pulled in directly. What's here instead:

- **`src/assets/Logo.tsx`** — a recreated wordmark (bold red lowercase
  "floe"), not the source logo file.
- **`src/assets/Bottle.tsx`** — an illustrated SVG bottle, not the supplied
  product photo. Label copy ("NATURAL MINERAL WATER", "LOW IN SODIUM",
  "0.33 L") is taken from the one reference photo that was shared.
- **`src/assets/IceMountain.tsx`** — a CSS/gradient stand-in for a Lebanon
  mountain/spring shot, used as the Ken Burns background layer in the hero.
- **`src/lib/content.ts`** — all site copy and product data in one file.
  Only the 0.33 L PET bottle is confirmed; the other two SKU sizes/prices
  and the FAQ/contact copy are placeholders written in FLOE's voice, marked
  with comments in that file. Swap in the real data there and the whole
  site updates.

To finish this with real assets: drop photos into `src/assets/bottles/`
and swap the `<Bottle />` usages for `<img>` tags, replace `Logo.tsx`'s
text with an `<img>` of the real logo file, and update `content.ts`.

## Cart & checkout

- **Cart** (`src/lib/cart.tsx`): React context + localStorage, no backend. Add/remove/adjust quantity from product cards or the cart drawer (`src/components/CartDrawer.tsx`, opened from the bag icon in the navbar).
- **Checkout** (`src/pages/Checkout.tsx`): a real address/contact form with validation. There's no payment processing wired up (no Stripe/backend — that needs your own account + API keys if you want it later). "Place order" instead builds a plain-text order summary and opens a `mailto:` link addressed to `contact.email` in `src/lib/content.ts`, plus shows an on-page confirmation with a "copy order details" fallback for when the browser blocks `mailto:`. Prices in `content.ts` are placeholders (`priceConfirmed: false`) — replace them with real numbers before this goes live for real orders.
- Routing uses `HashRouter` (`/#/checkout`) rather than `BrowserRouter` — GitHub Pages serves static files with no server-side rewrite, so hash routing avoids 404s on direct links/refreshes without extra config.

## Hero mechanic

`src/components/Hero.tsx` drives a 500vh sticky scroll track
(`src/hooks/useScrollScrub.ts`) with a rAF loop and exponential (tau-based)
lerp smoothing. Per-frame values are written straight to DOM refs (no React
re-render per tick) for the mountain Ken Burns zoom, the bottle reveal, and
the three staggered text sections' opacity curves
(`src/lib/heroCurves.ts`). The navbar's dark→white color flip subscribes to
the same progress value through a tiny external store
(`src/lib/scrollProgress.ts`) via `useSyncExternalStore`, so it only
re-renders when it actually crosses the threshold.
