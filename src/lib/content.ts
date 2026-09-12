// Site copy & product data for FLOE.
//
// CONFIRMED from the reference photo supplied: wordmark "floe", red-on-white
// label, copy "NATURAL MINERAL WATER" / "LOW IN SODIUM" / "0.33 L".
// Everything else below (other SKU sizes, prices, FAQ, contact info) is
// placeholder copy written in FLOE's voice — swap it for the real thing
// from floeworld.com whenever you can get it to this session.

export const brand = {
  name: 'FLOE',
  tagline: 'Pure Water, Naturally Refined',
  footerTagline: 'pure . eternal . essential',
  origin: 'Lebanon',
}

export const hero = {
  s1: {
    kicker: 'From the mountains of Lebanon',
    title: 'Water, uninterrupted.',
  },
  s2: {
    kicker: 'Filtered by time itself',
    title: 'Decades in stone. A lifetime in every drop.',
    body: 'Drawn from deep, protected geological layers and carried through sand, stone, and ancient rock — slowly, for years — before it ever reaches a bottle.',
  },
  s3: {
    kicker: 'FLOE',
    title: 'Pure Water, Naturally Refined',
  },
}

export const purityClaims = [
  {
    title: 'Naturally Filtered',
    body: 'Filtered over years through deep stone and rock formations — no shortcuts, no chemical treatment.',
  },
  {
    title: 'Protected Source',
    body: 'Drawn from geological layers shielded from surface contamination since long before we arrived.',
  },
  {
    title: 'Low in Sodium',
    body: 'A light, clean mineral profile that stays out of the way of the water itself.',
  },
  {
    title: 'Bottled at Origin',
    body: 'Sealed close to the source to keep what nature spent decades perfecting intact.',
  },
]

export type Product = {
  id: string
  name: string
  variant: string
  size: string
  packSize?: string
  priceLabel: string
  sizeConfirmed: boolean
}

// PLACEHOLDER — only the 0.33 L / "Low in Sodium" PET bottle is confirmed
// from the reference photo. Sizes/prices for the other two listed SKUs
// (glass still + glass sparkling, both seen listed on Spinneys Lebanon)
// are placeholders pending real data.
export const products: Product[] = [
  {
    id: 'pet-still-033',
    name: 'FLOE Natural Mineral Water',
    variant: 'Still · PET',
    size: '0.33 L',
    packSize: 'Single bottle',
    priceLabel: 'Ask your retailer',
    sizeConfirmed: true,
  },
  {
    id: 'glass-still-075',
    name: 'FLOE Natural Mineral Water',
    variant: 'Still · Glass',
    size: '0.75 L',
    packSize: 'Single bottle',
    priceLabel: 'Ask your retailer',
    sizeConfirmed: false,
  },
  {
    id: 'glass-sparkling-075',
    name: 'FLOE Sparkling Mineral Water',
    variant: 'Sparkling · Glass',
    size: '0.75 L',
    packSize: 'Single bottle',
    priceLabel: 'Ask your retailer',
    sizeConfirmed: false,
  },
]

export const faq = [
  {
    q: 'Where does FLOE water come from?',
    a: 'FLOE is drawn from a protected natural source in the mountains of Lebanon, filtered for years through deep stone and rock layers before it reaches the surface.',
  },
  {
    q: 'Is FLOE treated with chemicals?',
    a: "No. FLOE isn't chemically treated — its purity comes from the natural filtration of the source itself, not from processing after the fact.",
  },
  {
    q: 'What does "low in sodium" mean for FLOE?',
    a: 'It means FLOE carries a light, clean mineral profile — low enough in sodium to suit daily drinking and pair cleanly with food.',
  },
  {
    q: 'Where can I buy FLOE?',
    a: 'FLOE is available through select retailers and hospitality partners across Lebanon, including Spinneys and Carrefour.',
  },
]

// PLACEHOLDER — replace with FLOE's real contact details.
export const contact = {
  email: 'hello@floeworld.com',
  phone: '+961 1 000 000',
  instagram: '@floeworld',
}

export const nav = [
  { label: 'Source', href: '#source' },
  { label: 'Products', href: '#products' },
  { label: 'Quality', href: '#quality' },
  { label: 'Contact', href: '#contact' },
]
